class Chicken extends MovableObject {

    height = 75;
    width = 75;
    y = 350;

    walkingImages = [
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        '../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',
    ];

    constructor() {
        super();
        super.loadImage('../img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png');
        this.x = 200 + (Math.random() * 500);
        super.loadImages(this.walkingImages);
        this.speed = 1.5 + (Math.random() * 0.99);
        this.animate()
    }

    /**
     * Animate Object
     */
    animate() {
        setInterval(() => {
            this.playAnimation(this.walkingImages);
            this.moveLeft();
        }, 165);
    }

}