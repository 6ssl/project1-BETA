const backButton = document.querySelector('.button-with-icon');
if (backButton) {
  backButton.addEventListener('click', () => {
    window.location.href = '../index.html';
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
