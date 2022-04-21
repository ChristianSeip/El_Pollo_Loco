class GameObject {

    x = 120;
    y = 280;
    img;
    height = 150;
    width = 100;
    imageCache = {};
    currentImage = 0;

    /**
     * Load Object Images for animation.
     *
     * @param {array} images - Array of image paths.
     */
    loadImages(images) {
        images.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    /**
     * Load Object Images for animation.
     *
     * @param {string} path - Path to image source.
     */
    loadImage(path) {
        this.img = new Image(path);
        this.img.src = path;
    }

}