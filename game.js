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
        this.load.image('cat2', 'cat2.png');
        this.load.image('platform', 'platform.png');
        this.load.image('grass', 'grass.png');
    }
    create() {
        this.imageObject = this.add.image(
            320,//x
            240,//y
            'level1',//imagename
        )
        this.star = this.add.text(590,310,"⭐");
        // this.player = this.add.image(
        //     100,
        //     310,
        //     'cat',
        // )
        // this.player.setScale(0.2);

        this.player = this.physics.add.sprite(100, 310, 'cat2');
        this.player.setScale(0.2);

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.platform = this.physics.add.image(
            320,
            290,
            'platform',
        )
        this.platform.setScale(0.6);

        this.grass = this.physics.add.image(
            300,
            350,
            'grass',
        )
        this.grass.setScale(0.5);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.platform);
        this.physics.add.collider(this.player, this.grass);

        this.platform.setImmovable(true);
        this.platform.body.allowGravity = false;

        this.grass.setImmovable(true);
        this.grass.body.allowGravity = false;

        this.physics.world.collide(this.player, this.star, function(){
            game.scene.start('level2');
            });


    }
    update() {
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-160);

            //this.player.anims.play('left', true);
        }
        else if (right.isDown)
        {
            this.player.setVelocityX(160);

            //this.player.anims.play('right', true);
        }
        else
        {
            this.player.setVelocityX(0);

            //this.player.anims.play('turn');
        }

        if (up.isDown)
        {
            this.player.setVelocityY(-330);
        }

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
                y: 300
            }
        }
    },
    scene: [Intro, Level1, Level2, Level3, Outro]
};

let game = new Phaser.Game(config);

