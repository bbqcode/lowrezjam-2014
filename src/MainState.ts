module Lowrezjam {

    export class MainState extends Phaser.State {
        game : Lowrezjam.Game;

        constructor() {
            super();

            this.game = <Game> window["game"];
        }


        preload() {
            this.load.image('logo', '/assets/logo.png');
        }

        create() {
            this.add.sprite(0, 0, 'logo');

            Phaser.Canvas.setSmoothingEnabled(<CanvasRenderingContext2D> this.game.context, false);

            this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
            this.game.scale.setScreenSize(false);

            this.game.input.onDown.add(function () {
                this.game.scale.startFullScreen(false);
            }, this);

        }
    }

}