let lightMode = document.querySelector('#moon')
let darkMode = document.querySelector('#sun')
let heartAnim = document.querySelector('.heart-animation')

heartAnim.addEventListener('click', heartAnimation);
lightMode.addEventListener('click', hideElementMoon);
darkMode.addEventListener('click', hideElementSun);

function hideElementMoon(event) {
    lightMode.classList.toggle('hidden');
    darkMode.classList.toggle('hidden');
    event.preventDefault();
}

function hideElementSun(event) {
    lightMode.classList.toggle('hidden');
    darkMode.classList.toggle('hidden');
    event.preventDefault();
}

const calculateHeight = () => {
    return '100%';
}

function heartAnimation(event) {
    heartAnim.style.setProperty('--height', calculateHeight());
    event.preventDefault();
}
