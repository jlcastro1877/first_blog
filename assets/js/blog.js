const themeSwitcher = document.querySelector('#theme-switcher');
const container = document.querySelector('.container');

//Set defaut mode to dark
let mode = 'dark';

//Listen for a click event on toggle switch
themeSwitcher.addEventListener('click', function() {
    //if mode is dark, apply light background
    if (mode === 'dark') {
        mode = 'light'
        container.setAttribute('class', 'light');
    }
    //if mode is light, apply dark background
    else {
        mode = 'dark'
        container.setAttribute('class', 'dark');
    }
})