class Level {

    enemies;
    clouds;
    backgroundObjects;
    levelMaxX = 2100;
    items;

    constructor(enemies, clouds, bgObjects, items) {
        this.enemies = enemies;
        this.clouds = clouds;
        this.backgroundObjects = bgObjects;
        this.items = items;
    }

}