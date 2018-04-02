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
        // add setTimeout  show loading background
        this.time.events.add(1000, function() {
            this.game.state.start("GamePlay");
        }, this);
    }
}