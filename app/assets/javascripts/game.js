let gameState = {

};

let config = {
    type: Phaser.AUTO,
    width: 1000,
    height: 800,
    physics: {
      default:'arcade',
      arcade: {
        enableBody: true,
      }
    },
    scene: [StartScene, GameScene]
};





let game = new Phaser.Game(config);
