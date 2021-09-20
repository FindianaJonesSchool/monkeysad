// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100002020203030302040505050506020202020202030303020202020702020202020202020303030202020202070202020202070703030302020202020207020202020201030303010202010102010102020202010303030102070101020101020202020103030301020201010201010202020201030303010202010102010102020202020303030202020207020202020202020203030307020202020202020202030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303030303020702030303070707020202070202070708070303030202070702020202020208080703030302020202070202020207`, img`
. . . . . . . 2 2 2 2 2 2 . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . . . . . . 2 . . . . 
. 2 2 . . . . . . . . . 2 . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . 2 . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . 2 . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 2 . . . . 2 2 2 . . . 2 . . 2 
2 2 2 . . . . . 2 2 . . . . . . 
. . 2 . . . . . . . 2 . . . . 2 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass1,sprites.castle.tilePath5,sprites.builtin.forestTiles21,sprites.builtin.forestTiles22,sprites.builtin.forestTiles23,sprites.builtin.forestTiles4,sprites.castle.tileDarkGrass3], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
