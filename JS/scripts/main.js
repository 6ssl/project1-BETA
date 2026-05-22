var gameCanvas = document.getElementById("game-canvas");
var gameContext = gameCanvas.getContext("2d");
var previousTimeStamp = 0;
var maxDeltaTime = 20;
var player;
var camera;

var sprites = {
    yoshi: new Image(),
    enemy: new Image()
};

sprites.yoshi.src = "https://jellie12.github.io/Super_luigi2/MEDIA/yoshi.jpg";
sprites.enemy.src = "https://jellie12.github.io/Super_luigi2/MEDIA/mario.jpg";

function resizeCanvas() {
    gameCanvas.width = window.innerWidth;
    gameCanvas.height = window.innerHeight;
}

function drawGameObject(gameObject) {
    var positionOnScreen = copyVector(gameObject.position);
    subVectors(positionOnScreen, camera.position);
    positionOnScreen.x += gameCanvas.width / 2;
    positionOnScreen.y += gameCanvas.height / 2;

    if (gameObject.sprite && gameObject.sprite.complete) {
        gameContext.drawImage(
            gameObject.sprite,
            positionOnScreen.x,
            positionOnScreen.y,
            gameObject.scale.x,
            gameObject.scale.y
        );
    } else {
        gameContext.fillStyle = gameObject.color;
        gameContext.fillRect(
            positionOnScreen.x,
            positionOnScreen.y,
            gameObject.scale.x,
            gameObject.scale.y
        );
    }
}

function drawGameScreen() {
    gameContext.clearRect(0, 0, gameCanvas.width, gameCanvas.height);
    gameObjects.forEach(drawGameObject);
}

function startGame() {
    gameObjects = [];
    currentId = 0;

    player = Player(Vector2D(140, 200), sprites.yoshi);
    camera = Camera();

    Block(Vector2D(10, 400), Vector2D(500, 60));
    Block(Vector2D(410, 260), Vector2D(500, 60));
    Block(Vector2D(800, 180), Vector2D(400, 50));
    Enemy(Vector2D(460, -100), sprites.enemy);

    window.requestAnimationFrame(frame);
}

function frame(timeStamp) {
    if (!previousTimeStamp) {
        previousTimeStamp = timeStamp;
    }
    var deltaTime = timeStamp - previousTimeStamp;
    if (deltaTime > maxDeltaTime) {
        deltaTime = maxDeltaTime;
    }

    updateGameObjects(deltaTime);
    gameObjects = gameObjects.filter(function (gameObject) {
        return !gameObject.destroy;
    });

    if (!player || player.destroy) {
        drawGameScreen();
        gameContext.fillStyle = "rgba(0, 0, 0, 0.6)";
        gameContext.fillRect(0, 0, gameCanvas.width, gameCanvas.height);
        gameContext.fillStyle = "#fff";
        gameContext.font = "28px Arial, sans-serif";
        gameContext.textAlign = "center";
        gameContext.fillText("Game over — druk F5 om opnieuw te spelen", gameCanvas.width / 2, gameCanvas.height / 2);
        previousTimeStamp = timeStamp;
        window.requestAnimationFrame(frame);
        return;
    }

    drawGameScreen();
    previousTimeStamp = timeStamp;
    window.requestAnimationFrame(frame);
}

window.addEventListener("resize", resizeCanvas);

window.addEventListener("load", function () {
    resizeCanvas();
    startGame();
});
