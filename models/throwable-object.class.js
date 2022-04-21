class ThrowableObject extends MovableObject {

    constructor(x, y) {
        super();
        super.loadImage('../img/7.Marcadores/Icono/Botella.png');
        this.height = 60;
        this.width = 50;
        this.throw(x, y);
    }

    throw(x,y) {
        this.x = x;
        this.y = y;
        this.speedY = 15;
        this.applyGravity();
        setInterval(() => {
           this.x +=  7;
        }, 1000 / 60);
    }

}