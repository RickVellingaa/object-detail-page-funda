let lightMode = document.querySelector('#moon')
let darkMode = document.querySelector('#sun')
let heartAnim = document.querySelector('.heart-animation')

lightMode.addEventListener('click', hideElementMoon);
darkMode.addEventListener('click', hideElementSun);
heartAnim.addEventListener('click', heartAnimation);

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

function ReadMore() {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("readBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Lees meer"; 
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Lees minder"; 
      moreText.style.display = "inline";
    }
  }