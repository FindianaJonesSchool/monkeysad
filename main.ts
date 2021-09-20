let mySprite = sprites.create(img`
    . . . . . . c c c . . . . . . .
    . . . . . . c 5 b c . . . . . .
    . . . . c c c 5 5 c c c . . . .
    . . c c c c 5 5 5 5 c b c c . .
    . c b b 5 b 5 5 5 5 b 5 b b c .
    . c b 5 5 b b 5 5 b b 5 5 b c .
    . . c 5 5 5 b b b b 5 5 5 f . .
    . . f f 5 5 5 5 5 5 5 5 f f . .
    . . f f f b f e e f b f f f . .
    . . f f f 1 f b b f 1 f f f . .
    . . . f f b b b b b b f f . . .
    . . . e e f e e e e f e e . . .
    . . e b f b 5 b b 5 b c b e . .
    . . e e f 5 5 5 5 5 5 f e e . .
    . . . . c b 5 5 5 5 b c . . . .
    . . . . . f f f f f f . . . . .
`, SpriteKind.Player)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
scene.setBackgroundColor(7)
info.startCountdown(10)
tiles.setTilemap(tilemap`level1`)
let monkey = sprites.create(img`
    . . . . f f f f f . . . . . . .
    . . . f e e e e e f . . . . . .
    . . f d d d d e e e f . . . . .
    . c d f d d f d e e f f . . . .
    . c d f d d f d e e d d f . . .
    c d e e d d d d e e b d c . . .
    c d d d d d d d e e b d c . f f
    c c c c c d d d e e f c . f e f
    . f d d d c d e e f f . . f e f
    . . f f f f f e e e e f . f e f
    . . . . f e e e e e e e f f e f
    . . . f e f f e f e e e e f f .
    . . . f e f f e f e e e e f . .
    . . . f d b f d b f f e f . . .
    . . . f d d c d d b b d f . . .
    . . . . f f f f f f f f f . . .
`)
let dino = sprites.create(img`
    .........ccc............
    .........cccccccc.......
    ......cc..cc55555cc.....
    ......cccc555555555c....
    ......ccb55555555555c...
    ...cc..b55555ff155555c..
    ...cccb5555555ff55d55c..
    ....ccb55555d55555555c..
    .....b55555d5555d5555c..
    ..cc.b555ddd55555bbbbc..
    ..cccd55ddddd5555d555c..
    ...ccdd5dbdddbbbd555c...
    ....bdddb555bbbbbccc....
    ..cccdddb555cbbbbbbc....
    ...ccddddb555cbbbbbbc...
    ....cdddddb555cbbbbbc...
    ...ccddddddb55cbbbbbcc..
    ..ccbddddd55bcbbbbbbcc..
    ccdddddddd5555bbbbbbc...
    cdddddddbdd555bbbbbc....
    .ccddddbbbdd55cbbccc....
    ...cccbbcbddddccdddcc...
    ......cccdd555dcccccc...
    ........cccccccc........
`)
let chest = sprites.create(img`
    e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
    e e e e e e e e e e e e e e e e
    e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e
    e 4 e e e e e e e e e e e e 4 e
    e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e
    e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e
    e 4 e e e e e e e e e e e e 4 e
    e 4 e 3 3 3 3 3 3 3 3 3 3 e 4 e
    e 4 e 4 4 4 4 4 4 4 4 4 4 e 4 e
    e 3 3 3 3 3 3 3 3 3 3 3 3 3 3 e
    e 4 4 4 4 4 4 4 4 4 4 4 4 4 4 e
    e e e e e e e e e e e e e e e e
    e e c c c c c c c c c c c c e e
    e e c c c c c c c c c c c c e e
    e e e e e e e e e e e e e e e e
`)
tiles.placeOnRandomTile(mySprite, sprites.castle.tileGrass1)
tiles.placeOnRandomTile(dino, sprites.castle.tileGrass1)
tiles.placeOnRandomTile(monkey, sprites.castle.tileGrass1)
tiles.placeOnRandomTile(chest, sprites.castle.tileGrass1)
monkey.startEffect(effects.fountain)
dino.startEffect(effects.fountain)
info.setLife(3)
info.startCountdown(30)
let item = ""
game.onUpdateInterval(500, function onUpdateInterval() {
    
    if (mySprite.overlapsWith(chest) && item != "motherboard") {
        chest.setImage(sprites.dungeon.chestOpen)
        game.splash("You got a motherboard")
        item = "motherboard"
    } else if (mySprite.overlapsWith(dino)) {
        if (game.ask("I've lost my motherboard", "Do you have it?")) {
            if (item == "motherboard") {
                effects.clearParticles(dino)
                game.splash("Thanks! Have a CPU")
                item = "CPU"
            } else {
                game.splash("How dare you!")
                info.changeLifeBy(-1)
            }
            
        }
        
    }
    
})
