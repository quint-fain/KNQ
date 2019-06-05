class StartScene extends Phaser.Scene {
    constructor() {
        super({ key: 'StartScene' })
    }

    preload() {
        //load in assets here
    }

    create() {
        //would imagine that creating login screen would happen either here or in preload
		this.add.text( 150, 250, 'Click to start!', {fill: '#000000', fontSize: '20px'})
		this.input.on('pointerdown', () => {
			this.scene.stop('StartScene')
			this.scene.start('GameScene')
		})
	}

    update() {
        //thinking of having the characters just running back and forth across the menu screen
        //this is the render function for animation
    }
}
