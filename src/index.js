// console.log(process.env.NODE_ENV);

import "P2";
import "PIXI";
import Phaser from "Phaser";

import Boot from "./states/Boot";
import Preloader from "./states/Preloader";
import GamePlay from "./states/GamePlay";

const screenWidth = 1920;
const screenHeight = 1080;

const game = new Phaser.Game(screenWidth, screenHeight, Phaser.CANVAS, "gameContent");
game.state.add("Boot", Boot);
game.state.add("Preloader", Preloader);
game.state.add("GamePlay", GamePlay);
// game.state.start("Boot");

window.addEventListener("load", () => {
    game.state.start("Boot");
}, false);