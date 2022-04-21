class Boss extends MovableObject {

    height = 450;
    width = 350;
    y = 0;
    x = 1250;
    diedAt = 0;
    speed = 1.5;

    walkingImages = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png',
    ];

    attackImages = [
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        '../img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png',
    ];

    hurtImages = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
    ];

    deadImages = [
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        'img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
    ];

    currentImage = 0;

    world;

    constructor() {
        super();
        super.loadImage(this.walkingImages[0]);
        super.loadImages(this.walkingImages);
        super.loadImages(this.attackImages);
        super.loadImages(this.hurtImages);
        super.loadImages(this.deadImages);
        this.animate();
    }

    /**
     * Animate Object
     */
    animate() {
        setInterval(() => {

            if(this.world.character === undefined) {
                return;
            }

            if(this.isHurt()) {
                this.playAnimation(this.hurtImages);
                return;
            }

            if(this.isDead()) {
                this.playAnimation(this.deadImages);
                let now = new Date().getTime();
                if(this.diedAt === 0) {
                    this.diedAt = now;
                }
                return;
            }

            if(this.isColliding(this.world.character)) {
                this.playAnimation(this.attackImages);
                return;
            }

            this.playAnimation(this.walkingImages);
            this.moveLeft();
        }, 250);
    }
}