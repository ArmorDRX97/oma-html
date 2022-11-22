function themeSwitcher() {
    const darkThemeSwitch = document.querySelector('.dark-theme-switch');
    const darkThemeInput = document.querySelector('.dark-theme-switch input');
    const logoHeader = document.getElementById('logo-header');
    const logoHeaderDark = logoHeader.getAttribute('src-dark');
    const logoHeaderLight = logoHeader.getAttribute('src-light');
    darkThemeSwitch.addEventListener('click', function () {
        darkThemeInput.checked = !darkThemeInput.checked;
        if(darkThemeInput.checked){
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
            logoHeader.src=logoHeaderDark;
        } else{
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
            logoHeader.src=logoHeaderLight;
        }
    });

    const getTheme = localStorage.getItem('theme');
    if (getTheme === 'dark') {
        document.body.classList.add('dark-theme');
        darkThemeInput.checked = true;
        logoHeader.src=logoHeaderDark;
    } else {
        document.body.classList.remove('dark-theme');
        darkThemeInput.checked = false;
        logoHeader.src=logoHeaderLight;
    }
}

export default themeSwitcher();