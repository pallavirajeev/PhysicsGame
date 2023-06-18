class Intro extends Phaser.Scene {
    constructor() {
        super('intro')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('start', 'start.png');
    }
    create() {
        this.start = this.add.image(318,230,'start');
        this.start.setScale(1.5);
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
        this.load.image('land', 'land.png');
        this.load.image('platform', 'plat.png');
        this.load.image('grass', 'grass.png');
        this.load.image('star', 'star.png');
        this.load.image('dude', 'dad.png')
        this.load.image('seeds','seeds.png')
        this.load.image('flower', 'flower.png')
        this.load.image('cactus', 'cactus.png')
    }
    create() {
        this.imageObject = this.add.image(
            320,//x
            240,//y
            'land',//imagename
        )
        this.star = this.physics.add.image(
            590,
            310,
            'star'
        );

        this.star.setScale(2);

        this.seeds = this.physics.add.sprite(
            160,
            300,
            'seeds',
        )
        this.tweens.add({
            targets: this.seeds,
            y: "-=10",
            repeat: -1,
            yoyo: true
        });
        this.flower = this.physics.add.sprite(
            160,
            300,
            'flower',
        )
        this.flower.setVisible(false);
        this.flower.setScale(1.5);

        this.platform = this.physics.add.image(
            320,
            260,
            'platform',
        )
        this.platform.setScale(2.3);

        this.cactus = this.physics.add.image(
            320,
            287,
            'cactus',
        )
        this.cactus.setScale(1.8)

        this.player = this.physics.add.sprite(60,260, 'dude');
        this.player.setScale(1.3);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

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

        this.seeds.setImmovable(true);
        this.seeds.body.allowGravity = false;

        this.flower.setImmovable(true);
        this.flower.body.allowGravity = false;

        this.cactus.setImmovable(true);
        this.cactus.body.allowGravity = false;
        
    }
    update() {


        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.flipX = true;
            this.player.setVelocityX(-160);

        }
        else if (right.isDown)
        {
            this.player.flipX = false;
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
            game.scene.start('sum1');
            });

            this.physics.world.collide(this.player, this.seeds, function(player, seeds){
                seeds.destroy();

            });
            
            this.physics.world.overlap(this.player, this.flower, function(player, flower) {
                setTimeout(function() {
                    flower.setVisible(true);
                }, 1000);
            });

    }
}

class Sum1 extends Phaser.Scene {
    constructor() {
        super('sum1')
    }
    preload(){
        this.load.path = './assets/';
        //this.load.image('font1', 'f1.png');
        //this.load.image('txt1','sum1txt.png')
        this.load.image('l1', 'l1.png')
    }
    create() {
        this.b = this.add.image(
            320,
            240,
            'l1',
        )
        // this.font1 = this.add.image(
        //     320,
        //     120,
        //     'font1',
        // )
        // this.font1.setScale(1.5);
        // this.txt1 = this.add.image(
        //     320,
        //     290,
        //     'txt1',
        // )
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
        this.load.image('land', 'land.png');
        this.load.image('platform', 'plat.png');
        this.load.image('grass', 'grass.png');
        this.load.image('star', 'star.png');
        this.load.image('dude', 'dad.png')
        this.load.image('seeds','seeds.png')
        this.load.image('flower', 'flower.png')
        this.load.image('cactus', 'cactus.png')
    }
    create() {
        this.imageObject = this.add.image(
            320,//x
            240,//y
            'land',//imagename
        )
        this.star = this.physics.add.image(
            590,
            310,
            'star'
        );

        this.star.setScale(2);

        this.seeds = this.physics.add.sprite(
            315,
            300,
            'seeds',
        )
        this.tweens.add({
            targets: this.seeds,
            y: "-=10",
            repeat: -1,
            yoyo: true
        });
        this.flower = this.physics.add.sprite(
            315,
            300,
            'flower',
        )
        this.flower.setVisible(false);
        this.flower.setScale(1.5);

        this.platform = this.physics.add.image(
            180,
            260,
            'platform',
        )
        this.platform.setScale(2.3);

        this.cactus2 = this.physics.add.image(
            180,
            287,
            'cactus',
        )
        this.cactus2.setScale(1.8)

        this.platform2 = this.physics.add.image(
            440,
            260,
            'platform',
        )
        this.platform2.setScale(2.3);

        this.cactus = this.physics.add.image(
            440,
            287,
            'cactus',
        )
        this.cactus.setScale(1.8)

        this.player = this.physics.add.sprite(60,260, 'dude');
        this.player.setScale(1.3);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.grass = this.physics.add.image(
            300,
            350,
            'grass',
        )
        this.grass.setScale(0.5);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.platform);
        this.physics.add.collider(this.player, this.platform2);
        // this.physics.add.collider(this.player, this.platform3);
        this.physics.add.collider(this.player, this.grass);


        this.platform.setImmovable(true);
        this.platform.body.allowGravity = false;

        this.platform2.setImmovable(true);
        this.platform2.body.allowGravity = false;

        // this.platform3.setImmovable(true);
        // this.platform3.body.allowGravity = false;

        this.grass.setImmovable(true);
        this.grass.body.allowGravity = false;

        this.star.setImmovable(true);
        this.star.body.allowGravity = false;

        this.seeds.setImmovable(true);
        this.seeds.body.allowGravity = false;

        this.flower.setImmovable(true);
        this.flower.body.allowGravity = false;

        this.cactus.setImmovable(true);
        this.cactus.body.allowGravity = false;

        this.cactus2.setImmovable(true);
        this.cactus2.body.allowGravity = false;
        
    }
    update() {


        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.flipX = true;
            this.player.setVelocityX(-160);

        }
        else if (right.isDown)
        {
            this.player.flipX = false;
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
            game.scene.start('sum2');
            });

            this.physics.world.collide(this.player, this.seeds, function(player, seeds){
                seeds.destroy();

            });
            
            this.physics.world.overlap(this.player, this.flower, function(player, flower) {
                setTimeout(function() {
                    flower.setVisible(true);
                }, 1000);
            });

    }
}


class Sum2 extends Phaser.Scene {
    constructor() {
        super('sum2')
    }
    preload(){
        this.load.path = './assets/';
        //this.load.image('font2', 'f2.png');
        //this.load.image('txt2', 'sum2txt.png')
        this.load.image('l2', 'l2.png')
    }
    create() {
        this.b = this.add.image(
            320,
            240,
            'l2',
        )
        // this.font2 = this.add.image(
        //     320,
        //     120,
        //     'l2',
        // )
        // this.font2.setScale(1.5);
        // this.txt1 = this.add.image(
        //     320,
        //     290,
        //     'txt2',
        // )
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
        this.load.image('land', 'land.png');
        this.load.image('platform', 'plat.png');
        this.load.image('grass', 'grass.png');
        this.load.image('star', 'star.png');
        this.load.image('dude', 'dad.png')
        this.load.image('seeds','seeds.png')
        this.load.image('flower', 'flower.png')
        this.load.image('cactus', 'cactus.png')
    }
    create() {
        this.imageObject = this.add.image(
            320,//x
            240,//y
            'land',//imagename
        )
        this.star = this.physics.add.image(
            590,
            310,
            'star'
        );

        this.star.setScale(2);

        this.seeds = this.physics.add.sprite(
            300,
            300,
            'seeds',
        )
        this.tweens.add({
            targets: this.seeds,
            y: "-=10",
            repeat: -1,
            yoyo: true
        });
        this.flower = this.physics.add.sprite(
            300,
            300,
            'flower',
        )
        this.flower.setVisible(false);
        this.flower.setScale(1.5);

        this.platform = this.physics.add.image(
            190,
            260,
            'platform',
        )
        this.platform.setScale(2);

        this.cactus2 = this.physics.add.image(
            190,
            287,
            'cactus',
        )
        this.cactus2.setScale(1.8)

        this.platform2 = this.physics.add.image(
            440,
            200,
            'platform',
        )
        this.platform2.setScale(2);

        this.cactus = this.physics.add.image(
            400,
            287,
            'cactus',
        )
        this.cactus.setScale(1.8)

        this.cactus3 = this.physics.add.image(
            490,
            287,
            'cactus',
        )
        this.cactus3.setScale(1.8)

        this.player = this.physics.add.sprite(40,260, 'dude');
        this.player.setScale(1.3);
        this.player.setBounce(0.2);
        this.player.setCollideWorldBounds(true);

        this.grass = this.physics.add.image(
            300,
            350,
            'grass',
        )
        this.grass.setScale(0.5);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.physics.add.collider(this.player, this.platform);
        this.physics.add.collider(this.player, this.platform2);
        //this.physics.add.collider(this.player, this.platform3);
        this.physics.add.collider(this.player, this.grass);


        this.platform.setImmovable(true);
        this.platform.body.allowGravity = false;

        this.platform2.setImmovable(true);
        this.platform2.body.allowGravity = false;

       

        this.grass.setImmovable(true);
        this.grass.body.allowGravity = false;

        this.star.setImmovable(true);
        this.star.body.allowGravity = false;

        this.seeds.setImmovable(true);
        this.seeds.body.allowGravity = false;

        this.flower.setImmovable(true);
        this.flower.body.allowGravity = false;

        this.cactus.setImmovable(true);
        this.cactus.body.allowGravity = false;

        this.cactus2.setImmovable(true);
        this.cactus2.body.allowGravity = false;

        this.cactus3.setImmovable(true);
        this.cactus3.body.allowGravity = false;
        
    }
    update() {


        const { left, right, up } = this.cursors;

        if (left.isDown)
        {
            this.player.flipX = true;
            this.player.setVelocityX(-160);

        }
        else if (right.isDown)
        {
            this.player.flipX = false;
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

            this.physics.world.collide(this.player, this.seeds, function(player, seeds){
                seeds.destroy();

            });
            
            this.physics.world.overlap(this.player, this.flower, function(player, flower) {
                setTimeout(function() {
                    flower.setVisible(true);
                }, 1000);
            });

    }
}


class Sum3 extends Phaser.Scene {
    constructor() {
        super('sum3')
    }
    preload(){
        this.load.path = './assets/';
        //this.load.image('font3', 'f3.png');
        //this.load.image('txt3', 'sum3txt.png')
        this.load.image('l3', 'l3.png')
    }
    create() {
        this.b = this.add.image(
            320,
            240,
            'l3',
        )
        // this.font3 = this.add.image(
        //     320,
        //     120,
        //     'font3',
        // )
        // this.font3.setScale(1.5);
        // this.txt3 = this.add.image(
        //     320,
        //     290,
        //     'txt3',
        // )
        this.textObject = this.add.text(580,440,"tap");
        this.input.on('pointerdown', () => this.scene.start('outro'));
    }
}


class Outro extends Phaser.Scene {
    constructor() {
        super('outro')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('end', 'end.png');
        this.load.image('bckgrnd', 'bckgrnd.png')
    }
    create() {
        this.b = this.add.image(
            320,
            240,
            'bckgrnd',
        )
        this.start = this.add.image(318,230,'end');
        this.start.setScale(1.5);
        this.textObject = this.add.text(580,440,"tap");
        this.input.on('pointerdown', () => this.scene.start('msg'));
    }
}

class Msg extends Phaser.Scene {
    constructor() {
        super('msg')
    }
    preload(){
        this.load.path = './assets/';
        this.load.image('msg', 'finalmsg.png');
        //this.load.image('bckgrnd', 'bckgrnd.png')
    }
    create() {
        this.b = this.add.image(
            320,
            240,
            'msg',
        )
        //this.start = this.add.image(318,230,'end');
        //this.start.setScale(1.5);
        // this.textObject = this.add.text(540,440,"restart");
        // this.input.on('pointerdown', () => this.scene.start('level1'));
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
                y: 600
            }
        }
    },
    scene: [Intro, Level1, Sum1, Level2, Sum2, Level3, Sum3, Outro, Msg]
};

let game = new Phaser.Game(config);

