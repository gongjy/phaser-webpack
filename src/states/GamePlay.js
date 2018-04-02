import Phaser from 'Phaser';
export default class extends Phaser.State {
    init() { 
    }
    preload() {

    }
    create() {
        const manSprite = this.add.sprite(this.world.centerX, this.world.centerY, "man");
        manSprite.anchor.set(.5);
    }
}