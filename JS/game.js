const backButton = document.querySelector('.back-button');
if (backButton) {
  backButton.addEventListener('click', () => {
    window.location.href = '../index.html';
  });
}

const marioButton = document.querySelector('.button-with-icon.mario');
if (marioButton) {
  marioButton.addEventListener('click', () => {
    location.href = 'https://walter-white-the-creator.github.io/jasper/';
  });
}

const alisabutton = document.querySelector('.button-with-icon.alisabutton');
if (alisabutton) {
  alisabutton.addEventListener('click', () => {
    location.href = 'https://alischoolsp.github.io/project-web-dev-2026/index.html';
  });
}

const websiteButton = document.querySelector('.button-with-icon.website-link');
if (websiteButton) {
  websiteButton.addEventListener('click', () => {
    location.href = 'https://tyehx.github.io/project-web-dev-2026/';
  });
}

const luigiButton = document.querySelector('.button-with-icon.luigi');
if (luigiButton) {
  luigiButton.addEventListener('click', () => {
    location.href = 'https://jellie12.github.io/Project-Web-Dev-2026/';
  });
}

const scoreEl = document.getElementById('score');
const clickerBtn = document.getElementById('clicker');
let score = 0;

function updateScoreDisplay() {
  scoreEl.textContent = 'Score: ' + score;
}

if (clickerBtn) {
  clickerBtn.addEventListener('click', () => {
    score += 1;
    updateScoreDisplay();
  });
}
