class StatusBar extends GameObject {

    images = [];

    value;

    constructor(images, x, y, start) {
        super();
        this.images = images;
        this.x = x;
        this.y = y;
        this.width = 100;
        this.height = 25;
        this.setValue(start);
        super.loadImage(this.images[this.getStatusBarImage()]);
        super.loadImages(this.images);
    }

    setValue(value) {
        this.value = value
        this.img = this.imageCache[this.images[this.getStatusBarImage()]];
    }

    getStatusBarImage() {
        if(this.value >= 9) {
            return 5;
        }

        if(this.value >= 7) {
            return 4;
        }

        if(this.value >= 5) {
            return 3;
        }

        if(this.value >= 4) {
            return 2;
        }

        if(this.value >= 1) {
            return 1;
        }

        if(this.value <= 0) {
            return 0;
        }
    }

}