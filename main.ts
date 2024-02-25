controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    mySprite.vy += -175
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.UntilDone)
})
scene.onOverlapTile(SpriteKind.Player, sprites.dungeon.chestClosed, function (sprite, location) {
    game.gameOver(true)
})
let mySprite: Sprite = null
mySprite = sprites.create(assets.image`my sprite`, SpriteKind.Player)
scene.setBackgroundImage(assets.image`background`)
tiles.setCurrentTilemap(tilemap`tile map`)
tiles.placeOnRandomTile(mySprite, sprites.dungeon.stairLadder)
scene.cameraFollowSprite(mySprite)
controller.moveSprite(mySprite, 100, 0)
let PixelToMetres = 30
let Gravity = PixelToMetres * 10
mySprite.ay = Gravity
