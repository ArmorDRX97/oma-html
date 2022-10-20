function themeSwitcher() {
    const darkThemeSwitch = document.getElementById('dark-theme');
    darkThemeSwitch.addEventListener('click', function () {
        if(darkThemeSwitch.checked){
            document.body.classList.add('dark-theme');
            localStorage.setItem('theme', 'dark');
        } else{
            document.body.classList.remove('dark-theme');
            localStorage.setItem('theme', 'light');
        }
    });

    const getTheme = localStorage.getItem('theme');
    if (getTheme === 'dark') {
        document.body.classList.add('dark-theme');
        darkThemeSwitch.checked = true;
    } else {
        document.body.classList.remove('dark-theme');
        darkThemeSwitch.checked = false;
    }
}

export default themeSwitcher();