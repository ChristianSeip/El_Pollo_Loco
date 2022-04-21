let level1;

function initLevel() {
    level1 = new Level(
        [
            new Chicken(),
            new Chicken(),
            new Chicken(),
            new Boss(),
        ],
        [new Cloud()],
        [
            new Background('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
            new Background('../img/5.Fondo/Capas/3.Fondo3/2.png', -719),
            new Background('../img/5.Fondo/Capas/2.Fondo2/2.png', -719),
            new Background('../img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

            new Background('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new Background('../img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new Background('../img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new Background('../img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

            new Background('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new Background('../img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new Background('../img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new Background('../img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

            new Background('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*2),
            new Background('../img/5.Fondo/Capas/3.Fondo3/1.png', 719*2),
            new Background('../img/5.Fondo/Capas/2.Fondo2/1.png', 719*2),
            new Background('../img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719*2),

            new Background('../img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719*3),
            new Background('../img/5.Fondo/Capas/3.Fondo3/2.png', 719*3),
            new Background('../img/5.Fondo/Capas/2.Fondo2/2.png', 719*3),
            new Background('../img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719*3),
        ],
        [
            new Coin(300, 175, 1),
            new Coin(340, 135, 1),
            new Coin(380, 175, 1),
            new Coin(735, 265, 1),
            new Coin(900, 135, 1),
            new Coin(2050, 135, 5),
            new Bottle(300, 335, 1),
            new Bottle(340, 335, 1),
            new Bottle(380, 335, 1),
            new Bottle(735, 335, 1),
            new Bottle(900, 335, 1),
            new Bottle(2050, 335, 5),
        ],
    );
}