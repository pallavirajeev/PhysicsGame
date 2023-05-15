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
        this.load.image('star', 'star.png');
    }
    create() {
        this.imageObject = this.add.image(
            320,//x
            240,//y
            'level1',//imagename
        )
        this.star = this.physics.add.image(
            590,
            310,
            'star'
        );

        this.star.setScale(2);

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

        this.star.setImmovable(true);
        this.star.body.allowGravity = false;


        this.textObject = this.add.text(580,440,"tap");
        this.input.on('pointerdown', () => this.scene.start('sum1'));
        
    }
    update() {


        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-160);

        }
        else if (right.isDown)
        {
            this.player.setVelocityX(160);

        }
        else
        {
            this.player.setVelocityX(0);

        }

        if (up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }

        this.physics.world.collide(this.player, this.star, function(){
            game.scene.start('level2');
            });

    }
}

class Sum1 extends Phaser.Scene {
    constructor() {
        super('sum1')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('font1', 'f1.png');
        this.load.image('txt1','sum1txt.png')
    }
    create() {
        this.font1 = this.add.image(
            320,
            120,
            'font1',
        )
        this.font1.setScale(1.5);
        this.txt1 = this.add.image(
            320,
            290,
            'txt1',
        )
        //this.txt1.setScale(1.5);
        this.textObject = this.add.text(580,440,"tap");
        this.input.on('pointerdown', () => this.scene.start('level2'));
    }
}


class Level2 extends Phaser.Scene {
    constructor() {
        super('level2')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('level2', 'level2.png');
        this.load.image('cat2', 'cat2.png');
        this.load.image('platform', 'platform.png');
        this.load.image('grass', 'grass.png');
        this.load.image('star', 'star.png');
    }
    create() {
        this.imageObject = this.add.image(
            320,//x
            240,//y
            'level2',//imagename
        )

        this.star = this.physics.add.image(
            590,
            310,
            'star'
        );

        this.star.setScale(2);

        this.player = this.physics.add.sprite(40, 310, 'cat2');
        this.player.setScale(0.2);

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.platform1 = this.physics.add.image(
            172,
            290,
            'platform',
        )
        this.platform1.setScale(0.5);

        this.platform2 = this.physics.add.image(
            452,
            290,
            'platform',
        )
        this.platform2.setScale(0.5);

        this.grass = this.physics.add.image(
            300,
            350,
            'grass',
        )
        this.grass.setScale(0.5);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.platform1);
        this.physics.add.collider(this.player, this.platform2);
        this.physics.add.collider(this.player, this.platform3);
        this.physics.add.collider(this.player, this.grass);

        this.platform1.setImmovable(true);
        this.platform1.body.allowGravity = false;

        this.platform2.setImmovable(true);
        this.platform2.body.allowGravity = false;

        this.grass.setImmovable(true);
        this.grass.body.allowGravity = false;

        this.star.setImmovable(true);
        this.star.body.allowGravity = false;

        this.textObject = this.add.text(580,440,"tap");
        this.input.on('pointerdown', () => this.scene.start('sum2'));
    }
    update() {
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-160);

        }
        else if (right.isDown)
        {
            this.player.setVelocityX(160);

        }
        else
        {
            this.player.setVelocityX(0);

        }

        if (up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }

        this.physics.world.collide(this.player, this.star, function(){
            game.scene.start('level3');
            });
    }
}


class Sum2 extends Phaser.Scene {
    constructor() {
        super('sum2')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('font2', 'f2.png');
        this.load.image('txt2', 'sum2txt.png')
    }
    create() {
        this.font2 = this.add.image(
            320,
            120,
            'font2',
        )
        this.font2.setScale(1.5);
        this.txt1 = this.add.image(
            320,
            290,
            'txt2',
        )
        this.textObject = this.add.text(580,440,"tap");
        this.input.on('pointerdown', () => this.scene.start('level3'));
    }
}


class Level3 extends Phaser.Scene {
    constructor() {
        super('level3')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('level3', 'level3.png');
        this.load.image('cat2', 'cat2.png');
        this.load.image('platform', 'platform.png');
        this.load.image('grass', 'grass.png');
        this.load.image('star', 'star.png');
    }
    create() {
        this.imageObject = this.add.image(
            320,//x
            240,//y
            'level3',//imagename
        )
        this.star = this.physics.add.image(
            620,
            310,
            'star'
        );

        this.star.setScale(2);

        this.player = this.physics.add.sprite(30, 310, 'cat2');
        this.player.setScale(0.2);

        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.platform1 = this.physics.add.image(
            130,
            290,
            'platform',
        )
        this.platform1.setScale(0.5);

        this.platform2 = this.physics.add.image(
            325,
            290,
            'platform',
        )
        this.platform2.setScale(0.5);

        this.platform3 = this.physics.add.image(
            520,
            290,
            'platform',
        )
        this.platform3.setScale(0.5);

        this.grass = this.physics.add.image(
            300,
            350,
            'grass',
        )
        this.grass.setScale(0.5);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.platform1);
        this.physics.add.collider(this.player, this.platform2);
        this.physics.add.collider(this.player, this.platform3);
        this.physics.add.collider(this.player, this.grass);

        this.platform1.setImmovable(true);
        this.platform1.body.allowGravity = false;

        this.platform2.setImmovable(true);
        this.platform2.body.allowGravity = false;

        this.platform3.setImmovable(true);
        this.platform3.body.allowGravity = false;

        this.grass.setImmovable(true);
        this.grass.body.allowGravity = false;

        this.star.setImmovable(true);
        this.star.body.allowGravity = false;

        this.textObject = this.add.text(580,440,"tap");
        this.input.on('pointerdown', () => this.scene.start('sum3'));
    }

    update() {
        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.setVelocityX(-160);

        }
        else if (right.isDown)
        {
            this.player.setVelocityX(160);

        }
        else
        {
            this.player.setVelocityX(0);

        }

        if (up.isDown && this.player.body.touching.down)
        {
            this.player.setVelocityY(-330);
        }

        this.physics.world.collide(this.player, this.star, function(){
            game.scene.start('sum3');
            });
    }
}


class Sum3 extends Phaser.Scene {
    constructor() {
        super('sum3')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('font3', 'f3.png');
        this.load.image('txt3', 'sum3txt.png')
    }
    create() {
        this.font3 = this.add.image(
            320,
            120,
            'font3',
        )
        this.font3.setScale(1.5);
        this.txt3 = this.add.image(
            320,
            290,
            'txt3',
        )
        this.textObject = this.add.text(560,440,"restart");
        this.input.on('pointerdown', () => this.scene.start('outro'));
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
    //backgroundColor: 0x9CCFE7,
    physics: {
        default: 'arcade',
        arcade: {
            debug: true,
            gravity: {
                y: 600
            }
        }
    },
    scene: [Intro, Level1, Sum1, Level2, Sum2, Level3, Sum3, Outro]
};

let game = new Phaser.Game(config);

