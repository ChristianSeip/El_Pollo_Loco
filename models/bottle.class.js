class Bottle extends Item {

    value;

    constructor(x, y, value) {
        super();
        super.loadImage('../img/6.botella/2.Botella_enterrada1.png');
        this.x = x;
        this.y = y;
        this.value = value;
    }
}