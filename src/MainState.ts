module Lowrezjam {

    export class MainState extends Phaser.State {
        preload() {
            this.load.image('logo', '/assets/logo.png');
        }

        create() {
            this.add.sprite(0, 0, 'logo');
        }
    }

}