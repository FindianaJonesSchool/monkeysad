mySprite = sprites.create(img("""
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
"""),SpriteKind.player)

controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)
scene.set_background_color(7)
info.start_countdown(10)
tiles.set_tilemap(tilemap("""level1"""))

monkey =sprites.create(img("""
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
"""))

dino=sprites.create(img("""
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
"""))

chest=sprites.create(img("""
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
"""))

tiles.place_on_random_tile(mySprite, sprites.castle.tile_grass1)
tiles.place_on_random_tile(dino, sprites.castle.tile_grass1)
tiles.place_on_random_tile(monkey, sprites.castle.tile_grass1)
tiles.place_on_random_tile(chest, sprites.castle.tile_grass1)

monkey.start_effect(effects.fountain)
dino.start_effect(effects.fountain)

info.set_life(3)
info.start_countdown(30)
item = ""

def onUpdateInterval():
    global item
    if mySprite.overlaps_with(chest) and item != "motherboard":
        chest.set_image(sprites. dungeon.chest_open)
        game.splash("You got a motherboard")
        item = "motherboard"
    elif mySprite.overlaps_with(dino):
        if game. ask("I've lost my motherboard", "Do you have it?"):
            if item == "motherboard":
                effects.clear_particles(dino)
                game.splash("Thanks! Have a CPU")
                item = "CPU"
            else:
                game. splash("How dare you!")
                info.change_life_by(-1)
game.on_update_interval(500, onUpdateInterval)

