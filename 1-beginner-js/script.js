var button = $(".control button");
var textBox = $(".control input");
var ship = $(".ship");

var isLaunched = false;
var isDestroyed = false;

function launch() {
    if (isLaunched || isDestroyed) {
        return;
    }

    isLaunched = true;
    ship.attr("src", "resources/spaceship.png");
}

function go(direction) {
    if (!isLaunched || isDestroyed) {
        return;
    }

    var directions = {
        "left": [-80, 0],
        "right": [80, 0],
        "up": [0, 80],
        "down": [0, -80]
    };

    var displacement = directions[direction];

    if (!displacement) {
        explode();
        return;
    }

    var xDisplacement = displacement[0];
    var yDisplacement = displacement[1];

    ship.css("left", parseInt(ship.css("left")) + xDisplacement);
    ship.css("bottom", parseInt(ship.css("bottom")) + yDisplacement);
}

function rotate(degrees) {
    if (!isLaunched || isDestroyed) {
        return;
    }

    var degreesNum = parseFloat(degrees);

    if (isNaN(degreesNum)) {
        explode();
        return;
    }

    ship.css("transform", "rotate(" + degrees + "deg)");
}

function explode() {
    isDestroyed = true;
    ship.attr("src", "resources/explode.png");
}

button.on("click", function (event) {
    event.preventDefault();

    var text = textBox.val();
    var words = text.split(" ");
    var first = words[0];

    switch (first) {
        case "launch":
            launch();
            break;
        case "go":
            var direction = words[1];
            go(direction);
            break;
        case "rotate":
            var degrees = words[1];
            rotate(degrees);
            break;
        default:
            explode();
            break;
    }

    textBox.val("");
});
