class MovableObject extends GameObject {
    speed = 0.1;
    speedY = 0;
    acceleration = 1;
    backwards = false;
    energy = 3;
    lastHit = 0;
    world;

    /**
     * Move object to the right side.
     */
    moveRight() {
        if(this.x < level1.levelMaxX) {
            this.x += this.speed;
            this.backwards = false;
        }
    }

    /**
     * Move object to the left side.
     *
     * @param {boolean} mirroring - Should the picture be mirrored.
     */
    moveLeft(mirroring = false) {
        if(this.x > -200) {
            this.x -= this.speed;
            this.backwards = mirroring;
        }
    }

    /**
     * Let object jump
     */
    moveUp() {
        this.speedY = 15;
    }

    /**
     * Replace walking image for animation during move right/left.
     *
     * @param {array} images
     */
    playAnimation(images) {
        let i = this.currentImage % images.length;
        let path = images[i];
        this.img = this.imageCache[path];
        this.currentImage++;
    }

    /**
     * Apply gravity to game object.
     */
    applyGravity() {
        setInterval(() => {
            if(this.isJumping()) {
                this.y -= this.speedY
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25)
    }

    /**
     * Check if game object is jumping.
     *
     * @returns {boolean}
     */
    isJumping() {
        if(this instanceof ThrowableObject) {
            return true;
        }
        return this.y < 135 || this.speedY > 0;
    }

    /**
     * Check if object is colliding with another object
     *
     * @param {object} object - game object
     * @returns {boolean}
     */
    isColliding(object) {
        return (this.x + this.width > object.x) && (this.y + this.height > object.y) && (this.x < object.x) &&
            (this.y < object.y + object.height);
    }

    /**
     * Deal damage to game object
     */
    hit() {
        if(this.energy < 0) {
            return;
        }
        this.energy -= 1;
        this.lastHit = new Date().getTime();
    }

    /**
     * Check if game object is dead
     *
     * @returns {boolean}
     */
    isDead() {
        return this.energy <= 0;
    }

    isHurt() {
        return new Date().getTime() - this.lastHit < 900;
    }

}