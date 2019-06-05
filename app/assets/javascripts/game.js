let gameState = {
    score: 0,
    //all other global variables or objects that are part of the game go here
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
    scene: [StartScene, GameScene, EndScene]
};





let game = new Phaser.Game(config);
