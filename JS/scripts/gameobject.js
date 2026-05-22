var gameObjects = [];
var currentId = 0;

function GameObject(position, scale, color) {
    var gameObject = {
        id: currentId,
        position: position,
        velocity: Vector2D(0, 0),
        scale: scale,
        color: color,
        solid: true,
        destroy: false,
        sprite: null,
        onUpdate: function () {},
        onCollision: function () {},
        g: 0.004,
        grounded: false
    };
    currentId++;
    gameObjects.push(gameObject);
    return gameObject;
}

function Player(position, sprite) {
    var player = GameObject(position, Vector2D(50, 50), "#4caf50");
    player.sprite = sprite;
    player.walkSpeed = 0.5;
    player.jumpSpeed = 1.2;
    player.maxJumpTime = 1000;
    player.jumpTime = 0;
    player.startJumpG = player.g;
    player.endJumpG = player.g * 2;

    player.onUpdate = function (deltaTime) {
        if (player.grounded) {
            player.jumpTime = 0;
            player.g = player.startJumpG;
        }
        player.velocity.x = 0;
        if (controls.left.pressed) {
            player.velocity.x -= player.walkSpeed;
        }
        if (controls.right.pressed) {
            player.velocity.x += player.walkSpeed;
        }
        if (controls.up.pressed && player.jumpTime < player.maxJumpTime) {
            if (player.grounded) {
                player.velocity.y = -player.jumpSpeed;
            }
            player.jumpTime += deltaTime;
        } else {
            player.jumpTime = player.maxJumpTime;
            player.g = player.endJumpG;
        }
    };

    player.onCollision = function (other) {
        if (other.damage) {
            player.destroy = true;
        }
    };

    return player;
}

function Block(position, scale) {
    var block = GameObject(position, scale, "#2e7d32");
    block.g = 0;
    return block;
}

function Camera() {
    var camera = GameObject(copyVector(player.position), Vector2D(0, 0), "transparent");
    camera.g = 0;
    camera.solid = false;
    camera.followPresentage = 0.005;

    camera.onUpdate = function () {
        vectorMulNum(camera.velocity, 0);
        addVectors(camera.velocity, player.position);
        subVectors(camera.velocity, camera.position);
        vectorMulNum(camera.velocity, camera.followPresentage);
    };

    return camera;
}

function Enemy(position, sprite) {
    var enemy = GameObject(position, Vector2D(50, 50), "#c62828");
    enemy.sprite = sprite;
    enemy.damage = true;
    enemy.walkSpeed = 0.3;
    enemy.maxWalkTime = 1000;
    enemy.time = 0;

    enemy.onUpdate = function (deltaTime) {
        enemy.velocity.x = enemy.walkSpeed;
        enemy.time += deltaTime;
        if (enemy.time >= enemy.maxWalkTime) {
            enemy.time = 0;
            enemy.walkSpeed *= -1;
        }
    };

    return enemy;
}
