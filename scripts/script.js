let lightMode = document.querySelector('#moon')
let darkMode = document.querySelector('#sun')

lightMode.addEventListener('click', hideElementMoon);
darkMode.addEventListener('click', hideElementSun);

function hideElementMoon() {
    lightMode.classList.toggle('hidden');
    darkMode.classList.toggle('hidden');
    event.preventDefault();
}

function hideElementSun() {
    lightMode.classList.toggle('hidden');
    darkMode.classList.toggle('hidden');
    event.preventDefault();
}