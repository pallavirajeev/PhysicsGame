class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){

    }
    create() {
        this.textObject = this.add.text(580,440,"tap");
        this.input.on('pointerdown', () => this.scene.start('level1'));
    }
}
class Level1 extends Phaser.Scene {
    constructor() {
        super('level1')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('level1', 'level1.png');
        this.load.image('cat', 'cat.png');
        this.load.image('platform', 'platform.png');
    }
    create() {
        this.imageObject = this.add.image(
            320,//x
            240,//y
            'level1',//imagename
        )
        this.star = this.add.text(590,310,"⭐");
        this.player = this.add.image(
            100,
            310,
            'cat',
        )
        this.player.setScale(0.2);

        this.platform = this.add.image(
            320,
            290,
            'platform',
        )
        this.platform.setScale(0.6);
    }
}
class Level2 extends Phaser.Scene {
    constructor() {
        super('level2')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('level2', 'level2.png');
    }
    create() {
        this.imageObject = this.add.image(
            320,//x
            240,//y
            'level2',//imagename
        )
    }
}
class Level3 extends Phaser.Scene {
    constructor() {
        super('level3')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('level3', 'level3.png');
    }
    create() {
        this.imageObject = this.add.image(
            320,//x
            240,//y
            'level3',//imagename
        )
    }
}
class Outro extends Phaser.Scene {
    constructor() {
        super('outro')
    }
    preload(){

    }
    create() {

    }
}

let config = {
    type: Phaser.WEBGL,
    width: 640,
    height: 480,
    physics: {
        default: 'arcade',
        arcade: {
            debug: false,
            gravity: {
                x: 0,
                y: 0
            }
        }
    },
    scene: [Intro, Level1, Level2, Level3, Outro]
};

let game = new Phaser.Game(config);

