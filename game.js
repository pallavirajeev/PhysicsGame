class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){

    }
    create() {

    }
}


const game = new Phaser.Game({
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        width: 640,
        height: 480
    },
    scene: [Intro],
    title: "Physics Game",
});

