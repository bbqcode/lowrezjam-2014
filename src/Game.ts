module Lowrezjam {

    export class Game extends Phaser.Game {
        constructor() {
            super(32, 32, Phaser.CANVAS, 'content', { create: this.create });

            this.state.add('Main', MainState, false);
        }

        create () {
            this.state.start('Main');
        }
    }

}