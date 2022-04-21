class Character extends MovableObject {

    height = 300;
    y = 135;
    world;

    walkingImages = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png',
    ];

    jumpingImages = [
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        '../img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png',
    ];

    deadImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png',
    ];

    hurtImages = [
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        'img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png',
    ];

    walkSound = new Audio('../audio/run.mp3');
    jumpSound = new Audio('../audio/jump.mp3');
    energy = 10;
    bottles = 0;
    coins = 0;

    constructor() {
        super();
        this.speed = 4;
        super.loadImage('../img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png');
        super.loadImages(this.walkingImages);
        super.loadImages(this.jumpingImages);
        super.loadImages(this.deadImages);
        super.loadImages(this.hurtImages);
        this.applyGravity();
        this.animate();
    }
    /**
     * Animate Object
     */
    animate() {
        setInterval(() => {
            this.walkSound.pause();
            this.jumpSound.pause();

            if(this.isDead()) {
                this.playAnimation(this.deadImages);
                return;
            }

            if(this.isHurt()) {
                this.playAnimation(this.hurtImages);
            }

            if(this.world.keyboard.RIGHT) {
                this.moveRight();
                this.walkSound.play();
            }

            if(this.world.keyboard.LEFT) {
                this.moveLeft(true);
                this.walkSound.play();
            }

            if(this.world.keyboard.UP && !this.isJumping()) {
                this.moveUp();
                this.jumpSound.play();
            }

            this.world.cameraX = -this.x + 100;
        }, 1000 / 65);

            setInterval(() => {
                if(this.world.keyboard.RIGHT || this.world.keyboard.LEFT) {
                    this.playAnimation(this.walkingImages);
                }

                if(this.isJumping()) {
                    this.playAnimation(this.jumpingImages);
                }

                if(this.world.keyboard.SPACE && this.bottles > 0) {
                    this.world.throwableObjects.push(new ThrowableObject(this.x + 50, this.y + 125));
                    this.bottles--;
                }
            }, 100);
    }
}