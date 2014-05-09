/// <reference path="../node_modules/Phaser/build/phaser.d.ts" />
module Lowrezjam {

    export class Game extends Phaser.Game {
        gameScale: number;

        constructor() {
            this.gameScale = 10;
            var size = (32 * this.gameScale);
            super(size, size, Phaser.CANVAS, 'game-container', { create: this.create });
        }

        create() {
            this.state.add('Main', MainState, false);
            this.state.start('Main');
        }
    }

}