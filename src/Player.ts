module Lowrezjam {

    export class Player extends Phaser.Sprite {
        game: Lowrezjam.Game;


        constructor() {
            this.game = window["game"];
            super(this.game, 1, 1, 'player');
            this.game.add.existing(this);
            this.smoothed = false;

            this.scale.x = this.game.gameScale;
            this.scale.y = this.game.gameScale;

        }
    }

}