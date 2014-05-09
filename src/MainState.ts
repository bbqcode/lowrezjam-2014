module Lowrezjam {

    export class MainState extends Phaser.State {
        game : Lowrezjam.Game;
        player: Player;

        constructor() {
            super();

            this.game = <Game> window["game"];
        }


        preload() {
            this.load.image('logo', '/assets/logo.png');
            this.game.load.spritesheet('player', '/assets/character.png', 1, 1, 1, 0, 0);
        }

        create() {
            this.game.stage.setBackgroundColor(0xEEEEEE);
            this.game.stage.smoothed = false;

            this.game.input.onDown.add(function () {
                this.game.scale.startFullScreen(false);
            }, this);


            this.player = new Player();
        }
    }

}