def on_overlap_tile(sprite, location):
    game.over(True)
scene.on_overlap_tile(SpriteKind.player,
    assets.tile("""
        myTile
    """),
    on_overlap_tile)

game.splash("daft race won to be the best or become the best ")
tiles.set_current_tilemap(tilemap("""
    level1
"""))
mySprite = sprites.create(img("""
        . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . 5 2 2 5 . . . . 
            . . . . . . . 2 f 2 2 f 2 . . . 
            . . . . . . . 2 f 2 2 f 2 . . . 
            . . . . . . 2 2 f 2 2 f 2 2 . . 
            . . . . . d . 2 f 2 2 f 2 . . . 
            . . . . . . . 2 f 2 2 f 2 . . . 
            . . . . . . . 2 f 2 2 f 2 . . . 
            . . . . . . . 2 2 2 2 2 2 . . . 
            . . . . . . . 2 f f f f 2 . . . 
            . . . . . . . 2 f f f f 2 . . . 
            . . . . . . . 2 2 2 2 2 2 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . .
    """),
    SpriteKind.player)
controller.move_sprite(mySprite)
scene.camera_follow_sprite(mySprite)
music.play_sound_effect(music.create_sound_effect(WaveShape.SINE,
        5000,
        4718,
        255,
        0,
        500,
        SoundExpressionEffect.NONE,
        InterpolationCurve.LINEAR),
    SoundExpressionPlayMode.IN_BACKGROUND)