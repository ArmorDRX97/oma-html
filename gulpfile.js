const project = require('path');
const project_folder = require('path').basename('dist');
const source_folder = ".src";
const fs = require('fs');
const rollup = require('gulp-better-rollup');
const babel = require('rollup-plugin-babel');
const resolve = require('rollup-plugin-node-resolve');
const commonjs = require('rollup-plugin-commonjs');
const njk = require('gulp-nunjucks-render');
const beautify = require('gulp-beautify');
const {src, dest} = require('gulp');
const gulp = require('gulp');
const browsersync = require('browser-sync').create();
const fileinclude = require('gulp-file-include');
const del = require('del');
const scss = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const group_media = require('gulp-group-css-media-queries');
const clean_css = require('gulp-clean-css');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify-es').default;
const ttf2woff = require('gulp-ttf2woff');
const ttf2woff2 = require('gulp-ttf2woff2');
const fonter = require('gulp-fonter');
const concat = require('gulp-concat');
const svgSprite = require('gulp-svg-sprite');
const svgmin = require('gulp-svgmin');
const cheerio = require('gulp-cheerio');
const replace = require('gulp-replace');


let path = {
    build: {
        html: project_folder + "/",
        css: project_folder + "/css/",
        js: project_folder + "/js/",
        img: project_folder + "/img/",
        fonts: project_folder + "/fonts/",
    },
    src: {
        html: [source_folder + "/html/pages/*.+(html|njk)"],
        css: source_folder + "/scss/style.scss",
        js: source_folder + "/js/script.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}",
        fonts: source_folder + "/fonts/*.ttf",
    },
    watch: {
        html: source_folder + "/**/*.html",
        css: source_folder + "/scss/**/*.scss",
        js: source_folder + "/js/**/*.js",
        img: source_folder + "/img/**/*.{jpg,png,svg,gif,ico,webp}"
    },
    clean: "./" + project_folder + "/"
};

function browserSync(params) {
    browsersync.init({
        server: {
            baseDir: "./" + project_folder + "/"
        },
        port: 3000,
        notify: false
    })
}

const svgspriteConfig = {
    mode: {
        stack: {
            sprite: "../sprite.svg"
        }
    },
};

function svgSpriteBuild() {
    return src(source_folder + '/icons/*.svg')
        .pipe(svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe(svgSprite(svgspriteConfig))
        .pipe(dest(path.build.img + 'sprite/'));
}

const manageEnvironment = (environment) => {
    const mainCategories = JSON.parse(fs.readFileSync('data/main_categories.json'));
    const goods = JSON.parse(fs.readFileSync('data/goods.json'));
    const catalog = JSON.parse(fs.readFileSync('data/menu_catalog.json'));
    const filters = JSON.parse(fs.readFileSync('data/filters.json'));
    environment.addGlobal('data', {
        mainCategories,
        goods,
        catalog,
        filters
    });
};

function html() {
    return src(path.src.html)
        .pipe(
            njk({
                path: ['.src/html'],
                manageEnv: manageEnvironment
            })
        )
        .pipe(beautify.html({indent_size: 4, preserve_newlines: false}))
        .pipe(dest(path.build.html))
        .pipe(browsersync.stream())
}

function images() {
    return src(path.src.img)
        .pipe(dest(path.build.img))
        .pipe(src(path.src.img))
        .pipe(dest(path.build.img))
        .pipe(browsersync.stream())
}

function css() {
    return src(path.src.css)
        .pipe(
            scss({
                outputStyle: "expanded"
            })
        )
        .pipe(
            group_media()
        )
        .pipe(
            autoprefixer({
                overrideBrowserslist: ["last 5 versions"],
                cascade: true
            })
        )
        .pipe(dest(path.build.css))
        .pipe(
            clean_css({})
        )
        .pipe(
            rename({
                extname: ".min.css"
            })
        )
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}

function js() {
    return src(path.src.js)
        .pipe(fileinclude())
        .pipe(rollup({plugins: [babel(), resolve(), commonjs()]}, 'umd'))
        .pipe(dest(path.build.js))
        .pipe(
            uglify()
        )
        .pipe(
            rename({
                extname: ".min.js"
            })
        )
        .pipe(dest(path.build.js))
        .pipe(browsersync.stream())
}

function cssLibs() {
    return gulp.src([
        './node_modules/swiper/swiper-bundle.min.css',
    ])
        .pipe(
            clean_css({})
        )
        .pipe(concat('libs.min.css'))
        .pipe(dest(path.build.css))
        .pipe(browsersync.stream());
}

//
//
// function jsLibs() {
//     return gulp.src([
//         './node_modules/jquery/dist/jquery.min.js',
//         './node_modules/bootstrap/dist/js/bootstrap.bundle.min.js',
//     ])
//         .pipe(
//             uglify()
//         )
//         .pipe(concat('libs.min.js'))
//         .pipe(dest(path.build.js))
//         .pipe(browsersync.stream());
// }


function fonts() {
    src(path.src.fonts)
        .pipe(
            ttf2woff()
        )
        .pipe(dest(path.build.fonts));
    return src(path.src.fonts)
        .pipe(
            ttf2woff2()
        )
        .pipe(dest(path.build.fonts))
}


gulp.task('otf2ttf', function () {
    return gulp.src([source_folder + '/fonts/*.otf'])
        .pipe(
            fonter({
                formats: ['ttf']
            })
        )
        .pipe(dest(source_folder + '/fonts/'))

})


function fontsStyle(params) {
    let file_content = fs.readFileSync(source_folder + '/scss/other/fonts.scss');
    if (file_content == '') {
        fs.writeFile(source_folder + '/scss/other/fonts.scss', '', cb);
        return fs.readdir(path.build.fonts, function (err, items) {
            if (items) {
                let c_fontname;
                for (var i = 0; i < items.length; i++) {
                    let fontname = items[i].split('.');
                    fontname = fontname[0];
                    if (c_fontname != fontname) {
                        fs.appendFile(source_folder + '/scss/other/fonts.scss', '@include font("' + fontname + '", "' + fontname + '", "400", "normal");\r\n', cb);
                    }
                    c_fontname = fontname;
                }
            }
        })
    }
}

function cb() {}

function copyFonts() {
    return src(source_folder + '/libs/fonts/**/*')
        .pipe(dest(path.build.fonts));
}

function watchFiles(params) {
    gulp.watch([path.watch.html], html);
    gulp.watch([path.watch.css], css);
    gulp.watch([path.watch.js], js);
    gulp.watch([path.watch.img], images);
}

function clean(params) {
    return del(path.clean);
}


let build = gulp.series(clean, gulp.parallel(js, css, html, images, fonts, cssLibs, svgSpriteBuild, copyFonts), fontsStyle);
let watch = gulp.parallel(build, watchFiles, browserSync);


exports.cssLibs = cssLibs;
exports.copyFonts = copyFonts;
exports.svgSpriteBuild = svgSpriteBuild;
// exports.jsLibs = jsLibs;
exports.fontsStyle = fontsStyle;
exports.fonts = fonts;
exports.images = images;
exports.js = js;
exports.css = css;
exports.html = html;
exports.build = build;
exports.watch = watch;
exports.default = watch;

