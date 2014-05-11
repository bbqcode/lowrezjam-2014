module Lowrezjam {

    export class Level {
        display: ROT.Display;
        map: any;

        constructor(scale: number, tileset: HTMLImageElement) {
            var options = {
                layout: "tile",
                bg: "black",
                tileWidth: scale,
                tileHeight: scale,
                tileSet: tileset,
                tileMap: GetTileMap(scale),
                width: 32,
                height: 32
            }

            this.display = new ROT.Display(options);
            document.body.appendChild(this.display.getContainer());

            this.generateMap();
            this.drawWholeMap();
        }

        generateMap() {
            this.map = {};

            var digger = new ROT.Map.Digger(50, 50, {});

            var digCallback = function (x, y, value) {
                if (value) {
                    return; // do not store walls.
                }

                var key = x + "," + y;
                this.map[key] = Tiles.GROUND.toString();
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