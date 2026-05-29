var hiddenBtn = document.getElementById("hidden-btn");
var gameMessage = document.getElementById("game-message");

function placeButton() {
    var maxX = window.innerWidth - hiddenBtn.offsetWidth;
    var maxY = window.innerHeight - hiddenBtn.offsetHeight;
    var x = Math.floor(Math.random() * Math.max(1, maxX));
    var y = Math.floor(Math.random() * Math.max(1, maxY));

    hiddenBtn.style.left = x + "px";
    hiddenBtn.style.top = y + "px";
}

hiddenBtn.addEventListener("click", function () {
    gameMessage.textContent = "Gevonden! De knop verplaatst zich...";
    placeButton();
});

window.addEventListener("resize", placeButton);
placeButton();
