import Phaser from "Phaser";
import man from "../assets/images/man.jpg";

export default class extends Phaser.State {
    init() {

    }
    preload() {
        this.add.image(0, 0, "loading_background");
        
        this.load.image("man", man);
    }
    create() {
        console.log("create");
        this.game.state.start("GamePlay");
    }
}