class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' })
    }

    preload () {
        this.load.image('bg', '/assets/backgrounds/colored_grass.png');
        this.load.atlasXML('alien', '/assets/Spritesheets/spritesheet_players.png', '/assets/Spritesheets/spritesheet_players.xml');
    }

    create () {
        gameState.cursors = this.input.keyboard.createCursorKeys();

        this.add.image(500, 500, 'bg');

        gameState.player = this.physics.add.sprite(100, 100, 'alien', 'alienYellow_front.png').setScale(0.5);

        this.anims.create({
            key: 'walk',
            frames: this.anims.generateFrameNames('alien', {prefix: 'alienYellow_walk', start: 1, end: 2, suffix: '.png'}),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: 'climb',
            frames: this.anims.generateFrameNames('alien', {prefix: 'alienYellow_climb', start: 1, end: 2, suffix: '.png'}),
            frameRate: 5,
            repeat: -1
        })
    }

    update () {
        gameState.player.setCollideWorldBounds(true);

        if (gameState.cursors.right.isDown) {
            gameState.player.setVelocityX(50);
            gameState.player.anims.play('walk', true);
            gameState.player.flipX = false;
        } else if (gameState.cursors.left.isDown) {
            gameState.player.setVelocityX(-50);
            gameState.player.anims.play('walk', true);
            gameState.player.flipX = true;
        }

        if (gameState.cursors.up.isDown) {
            gameState.player.setVelocityY(-50);
            gameState.player.anims.play('climb', true);
            gameState.player.flipY = false;
        } else if (gameState.cursors.down.isDown) {
            gameState.player.setVelocityY(50);
            gameState.player.anims.play('climb', true);
            gameState.player.flipY = true;
        }
    }
}
