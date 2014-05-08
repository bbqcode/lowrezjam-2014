module Lowrezjam {

    export class Game extends Phaser.Game {
        constructor() {

            super(800, 600, Phaser.AUTO, 'content', null);

            this.state.add('Main', MainState, false);

            this.state.start('Main');

        }

    }

}