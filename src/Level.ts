module Lowrezjam {

    export class Level {
        display: ROT.Display;
        map: any;

        constructor() {
            var tileset = document.createElement("img");
            tileset.src = "assets/tileset.png";
            tileset.onload = function () {
                var options = {
                    layout: "tile",
                    bg: "black",
                    tileWidth: 1,
                    tileHeight: 1,
                    tileSet: tileset,
                    tileMap: {
                        "1": [0, 0],
                        "2": [0, 1],
                        "3": [0, 2],
                        "4": [0, 3],
                        "5": [0, 4]
                    },
                    width: 32,
                    height: 32
                }

                this.display = new ROT.Display(options);
                document.body.appendChild(this.display.getContainer());

                this.generateMap();
                this.drawWholeMap();
            }.bind(this);
        }

        generateMap() {
            this.map = {};

            var digger = new ROT.Map.Digger(100, 100, {});

            var digCallback = function (x, y, value) {
                if (value) {
                    return; // do not store walls.
                }

                var key = x + "," + y;
                this.map[key] = "1";
            }

            digger.create(digCallback.bind(this));
        }


        drawWholeMap = function () {
            for (var key in this.map) {
                var parts = key.split(",");
                var x = parseInt(parts[0]);
                var y = parseInt(parts[1]);
                this.display.draw(x, y, this.map[key]);
            }
        }
    }
}