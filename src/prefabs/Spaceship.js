class Spaceship extends Phaser.GameObject.Sprite {
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this); // add to existing scene (-> "this")
        this.points = pointValue; // store pointValue
        this.moveSpeed = 3;
    }

    update() {
        // move spaceship left
        this.x -= this.moveSpeed;
        // wrap around left edge to right edge
        if(this.x <= 0 - this.width) {
            this.x = game.config.width;
        }
    }
}