class Cloud extends MovableObject {

    y = 0;
    width = 500;
    height = 250;

    constructor() {
        super();
        super.loadImage('../img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 700;
        this.animate();

    }

    /**
     * Animate Object
     */
    animate() {
        setInterval(() => this.moveLeft(),1000 / 60);
    }

}