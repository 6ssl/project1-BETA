var maxFallSpeed = 5;

function Vector2D(x, y) {
    return { x: x, y: y };
}

function copyVector(vector2D) {
    return Vector2D(vector2D.x, vector2D.y);
}

function addVectors(a, b) {
    a.x += b.x;
    a.y += b.y;
}

function subVectors(a, b) {
    a.x -= b.x;
    a.y -= b.y;
}

function vectorMulNum(vector2D, number) {
    vector2D.x *= number;
    vector2D.y *= number;
}

function checkCollision(a, b) {
    if (a.id === b.id) return false;
    return a.position.x <= b.position.x + b.scale.x &&
        a.position.x + a.scale.x >= b.position.x &&
        a.position.y <= b.position.y + b.scale.y &&
        a.position.y + a.scale.y >= b.position.y;
}

function collisions(gameObject) {
    gameObjects.forEach(function (other) {
        if (checkCollision(gameObject, other)) {
            gameObject.onCollision(other);
            if (gameObject.solid && other.solid) {
                blockGameObject(gameObject, other);
            }
        }
    });
}

function updateGameObject(gameObject, deltaTime) {
    if (!gameObject.grounded) {
        gameObject.velocity.y += gameObject.g * deltaTime;
        if (gameObject.velocity.y > maxFallSpeed) {
            gameObject.velocity.y = maxFallSpeed;
        }
    }
    gameObject.onUpdate(deltaTime);
    gameObject.grounded = false;
    collisions(gameObject);

    var velocity = copyVector(gameObject.velocity);
    vectorMulNum(velocity, deltaTime);
    addVectors(gameObject.position, velocity);
}

function updateGameObjects(deltaTime) {
    gameObjects.forEach(function (gameObject) {
        updateGameObject(gameObject, deltaTime);
    });
}

function blockGameObject(gameObject, blocker) {
    var gameObjectLeft = gameObject.position.x;
    var gameObjectRight = gameObjectLeft + gameObject.scale.x;
    var blockerLeft = blocker.position.x;
    var blockerRight = blockerLeft + blocker.scale.x;

    var gameObjectTop = gameObject.position.y;
    var gameObjectBottom = gameObjectTop + gameObject.scale.y;
    var blockerTop = blocker.position.y;
    var blockerBottom = blockerTop + blocker.scale.y;

    var dx = Math.min(gameObjectRight - blockerLeft, blockerRight - gameObjectLeft);
    var dy = Math.min(gameObjectBottom - blockerTop, blockerBottom - gameObjectTop);

    if (dx < dy) {
        if (gameObject.position.x > blocker.position.x) {
            if (gameObject.velocity.x < 0) {
                gameObject.velocity.x = 0;
                gameObject.position.x = blocker.position.x + blocker.scale.x;
            }
        } else if (gameObject.velocity.x > 0) {
            gameObject.velocity.x = 0;
            gameObject.position.x = blocker.position.x - gameObject.scale.x;
        }
    } else if (gameObject.position.y > blocker.position.y) {
        if (gameObject.velocity.y < 0) {
            gameObject.velocity.y = 0;
            gameObject.position.y = blocker.position.y + blocker.scale.y;
        }
    } else if (gameObject.velocity.y > 0) {
        gameObject.velocity.y = 0;
        gameObject.position.y = blocker.position.y - gameObject.scale.y;
        gameObject.grounded = true;
    }
}
