class World {
    hpBar = new StatusBar([
        '../img/7.Marcadores/Barra/Marcador vida/azul/0_.png', '../img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        '../img/7.Marcadores/Barra/Marcador vida/azul/40_.png', '../img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        '../img/7.Marcadores/Barra/Marcador vida/azul/80_.png', '../img/7.Marcadores/Barra/Marcador vida/azul/100_.png',
    ], 25, 0, 10);
    coinBar = new StatusBar([
        '../img/7.Marcadores/Barra/Marcador moneda/azul/0_.png', '../img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        '../img/7.Marcadores/Barra/Marcador moneda/azul/40_.png', '../img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        '../img/7.Marcadores/Barra/Marcador moneda/azul/80_.png', '../img/7.Marcadores/Barra/Marcador moneda/azul/100_.png',
    ], 25, 30, 0);
    bottleBar = new StatusBar([
        '../img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png', '../img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png', '../img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        '../img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png', '../img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png',
    ], 25, 60, 0);
    character = new Character();
    enemies = level1.enemies;
    clouds = level1.clouds;
    backgroundObjects = level1.backgroundObjects;
    canvas;
    ctx;
    keyboard;
    cameraX = 0;
    level = level1;
    throwableObjects = [];
    items = level1.items;

    constructor(canvas, keyboard) {
        this.ctx = canvas.getContext('2d');
        this.canvas = canvas;
        this.keyboard = keyboard;
        this.draw();
        this.setWorld();
        this.run();
    }

    /**
     * Draw world
     */
    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        this.ctx.translate(this.cameraX, 0);
        this.addObjectsToMap(this.backgroundObjects);
        this.addObjectsToMap(this.clouds);
        this.ctx.translate(-this.cameraX, 0);
        this.addToMap(this.hpBar);
        this.addToMap(this.coinBar);
        this.addToMap(this.bottleBar);
        this.ctx.translate(this.cameraX, 0);
        this.addToMap(this.character);
        this.addObjectsToMap(this.enemies);
        this.addObjectsToMap(this.throwableObjects);
        this.addObjectsToMap(this.items);
        this.ctx.translate(-this.cameraX, 0);
        let self = this;
        requestAnimationFrame(() => self.draw());
    }

    /**
     * Add game objects to world map
     *
     * @param {array} objects - Array of game objects
     */
    addObjectsToMap(objects) {
        objects.forEach(o => this.addToMap(o));
    }

    /**
     * Add game object to world map
     *
     * @param {object} object - Game objects
     */
    addToMap(object) {
        if(object.backwards) {
            this.ctx.save();
            this.ctx.translate(object.width, 0);
            this.ctx.scale(-1, 1);
            object.x = object.x * -1;
        }
        this.ctx.drawImage(object.img, object.x, object.y, object.width, object.height)
        if(object.backwards) {
            object.x = object.x * -1;
            this.ctx.restore();
        }
    }

    /**
     * Link instance of world to world character
     */
    setWorld() {
        this.character.world = this;
        this.level.enemies.forEach((enemy) => {
            enemy.world = this;
        });
    }

    run() {
        setInterval(() => {
            if(this.character !== undefined) {
                this.checkCollision();
            }
        }, 250);
    }

    /**
     * Check World Collisions
     */
    checkCollision() {
        this.level.enemies.forEach((enemy, index, object) => {
            if(this.character.isColliding(enemy)) {
                this.character.hit();
                this.hpBar.setValue(this.character.energy);
            }

            if((enemy.isDead() && enemy.diedAt > 0 && new Date().getTime() - 1000 > enemy.diedAt) || this.character.isDead()) {
                delete this.character;
                delete object[index];
                endGame();
                return;
            }

            this.throwableObjects.forEach((o) => {
                if(o.isColliding(enemy)) {
                    enemy.hit();
                }
            });
        });

        this.level.items.forEach((item, index, object) => {
            if(this.character.isColliding(item)) {
                if(item instanceof Coin) {
                    this.character.coins += item.value;
                    this.coinBar.setValue(this.character.coins);
                }
                if(item instanceof Bottle) {
                    this.character.bottles += item.value;
                    this.bottleBar.setValue(this.character.bottles);
                }
                delete object[index];
            }
        });
    }
}