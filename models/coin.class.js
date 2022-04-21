class Coin extends Item {

    value;

    constructor(x, y, value) {
        super();
        super.loadImage('../img/8.Coin/Moneda1.png');
        this.x = x;
        this.y = y;
        this.value = value;
    }
}