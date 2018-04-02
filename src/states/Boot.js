import Phaser from "Phaser";
import loadingBackground from "../assets/images/loading_background.jpg";

export default class extends Phaser.State {
    init () {
        this.game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        this.game.scale.pageAlignHorizontally = true;
        this.game.scale.pageAlignVertically = true;
    }
    preload() {
        this.load.image("loading_background", loadingBackground);
    }
    create() {
        this.game.state.start('Preloader');
    }
}