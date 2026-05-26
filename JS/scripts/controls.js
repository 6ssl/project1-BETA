var controls = {
    up: Key("Z", 90),
    down: Key("S", 83),
    left: Key("Q", 81),
    right: Key("D", 68)
};

function Key(key, keyCode) {
    return {
        key: key,
        keyCode: keyCode,
        pressed: false
    };
}

function changeKeyPressed(event, pressed) {
    switch (event.keyCode) {
        case controls.up.keyCode:
            controls.up.pressed = pressed;
            break;
        case controls.down.keyCode:
            controls.down.pressed = pressed;
            break;
        case controls.left.keyCode:
            controls.left.pressed = pressed;
            break;
        case controls.right.keyCode:
            controls.right.pressed = pressed;
            break;
    }
}

window.addEventListener("keydown", function (event) {
    changeKeyPressed(event, true);
});

window.addEventListener("keyup", function (event) {
    changeKeyPressed(event, false);
});
