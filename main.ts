controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . 5 2 2 5 . . . . 
        . . . . . . . 2 f 2 2 f 2 . . . 
        . . . . . . . 2 f 2 2 f 2 . . . 
        . . . . . . 2 2 f 2 2 f 2 2 . . 
        . . . . . . . 2 f 2 2 f 2 . . . 
        . . . . . . . 2 f 2 2 f 2 . . . 
        . . . . . . . 2 f 2 2 f 2 . . . 
        . . . . . . . 2 2 2 2 2 2 . . . 
        . . . . . . . 2 f f f f 2 . . . 
        . . . . . . . 2 f f f f 2 . . . 
        . . . . . . . 2 2 2 2 2 2 . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Player, assets.tile`myTile`, function (sprite, location) {
    game.over(true)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . 2 . . . . . . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . 5 f f f f f f 2 f f 2 . . . 
        . . 2 2 2 2 2 2 2 2 f f 2 . . . 
        . . 2 2 2 2 2 2 2 2 f f 2 . . . 
        . . 5 f f f f f f 2 f f 2 . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . 2 . . . . . . . . . . 
        . . . . . . d . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
scene.onOverlapTile(SpriteKind.Enemy, assets.tile`myTile`, function (sprite, location) {
    game.over(false)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . 2 . . . . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . 2 f f 2 f f f f f f 5 . . 
        . . . 2 f f 2 2 2 2 2 2 2 2 . . 
        . . . 2 f f 2 2 2 2 2 2 2 2 . . 
        . . . 2 f f 2 f f f f f f 5 . . 
        . . . 2 2 2 2 2 2 2 2 2 2 . . . 
        . . . . . . . . . . 2 . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    scene.setBackgroundImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . 2 2 2 2 2 2 . . . . . . . 
        . . . 2 f f f f 2 . . . . . . . 
        . . . 2 f f f f 2 . . . . . . . 
        . . . 2 2 2 2 2 2 . . . . . . . 
        . . . 2 f 2 2 f 2 . . . . . . . 
        . . . 2 f 2 2 f 2 . . . . . . . 
        . . . 2 f 2 2 f 2 . . . . . . . 
        . . 2 2 f 2 2 f 2 2 . . . . . . 
        . . . 2 f 2 2 f 2 . . . . . . . 
        . . . 2 f 2 2 f 2 . . . . . . . 
        . . . . 5 2 2 5 . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `)
})
