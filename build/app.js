var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
var Lowrezjam;
(function (Lowrezjam) {
    var MainState = (function (_super) {
        __extends(MainState, _super);
        function MainState() {
            _super.call(this);

            this.game = window["game"];
        }
        MainState.prototype.preload = function () {
            this.load.image('logo', '/assets/logo.png');
            this.game.load.spritesheet('player', '/assets/character.png', 1, 1, 1, 0, 0);
        };

        MainState.prototype.create = function () {
            this.game.stage.setBackgroundColor(0xEEEEEE);
            this.game.stage.smoothed = false;

            this.game.input.onDown.add(function () {
                this.game.scale.startFullScreen(false);
            }, this);

            this.player = new Lowrezjam.Player();
        };
        return MainState;
    })(Phaser.State);
    Lowrezjam.MainState = MainState;
})(Lowrezjam || (Lowrezjam = {}));
/// <reference path="../node_modules/Phaser/build/phaser.d.ts" />
/// <reference path="MainState.ts" />
var Lowrezjam;
(function (Lowrezjam) {
    var Game = (function (_super) {
        __extends(Game, _super);
        function Game() {
            this.gameScale = 10;
            var size = (32 * this.gameScale);
            _super.call(this, size, size, Phaser.CANVAS, 'game-container', { create: this.create });
        }
        Game.prototype.create = function () {
            this.state.add('Main', Lowrezjam.MainState, false);
            this.state.start('Main');
        };
        return Game;
    })(Phaser.Game);
    Lowrezjam.Game = Game;
})(Lowrezjam || (Lowrezjam = {}));
var Lowrezjam;
(function (Lowrezjam) {
    var Level = (function () {
        function Level(scale, tileset) {
            this.drawWholeMap = function () {
                for (var key in this.map) {
                    var parts = key.split(",");
                    var x = parseInt(parts[0]);
                    var y = parseInt(parts[1]);
                    this.display.draw(x, y, this.map[key]);
                }
            };
            var options = {
                layout: "tile",
                bg: "black",
                tileWidth: scale,
                tileHeight: scale,
                tileSet: tileset,
                tileMap: Lowrezjam.GetTileMap(scale),
                width: 32,
                height: 32
            };

            this.display = new ROT.Display(options);
            document.body.appendChild(this.display.getContainer());

            this.generateMap();
            this.drawWholeMap();
        }
        Level.prototype.generateMap = function () {
            this.map = {};

            var digger = new ROT.Map.Digger(50, 50, {});

            var digCallback = function (x, y, value) {
                if (value) {
                    return;
                }

                var key = x + "," + y;
                this.map[key] = 0 /* GROUND */.toString();
            };

            digger.create(digCallback.bind(this));
        };
        return Level;
    })();
    Lowrezjam.Level = Level;
})(Lowrezjam || (Lowrezjam = {}));
var Lowrezjam;
(function (Lowrezjam) {
    var Player = (function (_super) {
        __extends(Player, _super);
        function Player() {
            this.game = window["game"];
            _super.call(this, this.game, 1, 1, 'player');
            this.game.add.existing(this);
            this.smoothed = false;

            this.scale.x = this.game.gameScale;
            this.scale.y = this.game.gameScale;
        }
        return Player;
    })(Phaser.Sprite);
    Lowrezjam.Player = Player;
})(Lowrezjam || (Lowrezjam = {}));
var Lowrezjam;
(function (Lowrezjam) {
    (function (Tiles) {
        Tiles[Tiles["GROUND"] = 0] = "GROUND";
        Tiles[Tiles["DOOR"] = 1] = "DOOR";
    })(Lowrezjam.Tiles || (Lowrezjam.Tiles = {}));
    var Tiles = Lowrezjam.Tiles;

    function GetTileMap(scale) {
        var tileMap = {};
        tileMap[0 /* GROUND */] = [scale * 0, 0];
        tileMap[1 /* DOOR */] = [scale * 1, 0];
        return tileMap;
    }
    Lowrezjam.GetTileMap = GetTileMap;
})(Lowrezjam || (Lowrezjam = {}));
var Lowrezjam;
(function (Lowrezjam) {
    var Zombie = (function (_super) {
        __extends(Zombie, _super);
        function Zombie() {
            this.game = window["game"];
            _super.call(this, this.game, 1, 1, 'player');
            this.game.add.existing(this);
            this.smoothed = false;

            this.scale.x = this.game.gameScale;
            this.scale.y = this.game.gameScale;
        }
        return Zombie;
    })(Phaser.Sprite);
    Lowrezjam.Zombie = Zombie;
})(Lowrezjam || (Lowrezjam = {}));
window.onload = function () {
    var tileset = document.createElement("img");
    tileset.src = "assets/tileset.png";
    tileset.onload = function () {
        var scale = 16;
        var g = new Lowrezjam.Level(scale, tileset);
        window["game"] = g;
    };
};
//# sourceMappingURL=app.js.map
