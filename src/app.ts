window.onload = () => {
    var tileset = document.createElement("img");
    tileset.src = "assets/tileset.png";
    tileset.onload = function () {
        var scale = 16;
        var g = new Lowrezjam.Level(scale, tileset);
        window["game"] = g;
    }
};
