enum SpriteKindLegacy {
    Player,
    Projectile,
    Food,
    Enemy,
    Food2
}
namespace SpriteKind {
    export const Food2 = SpriteKind.create()
}
sprites.onOverlap(SpriteKindLegacy.Player, SpriteKindLegacy.Food, function (sprite, otherSprite) {
    otherSprite.destroy(effects.confetti, 100)
    info.changeLifeBy(1)
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    Dart = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 4 . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . 4 2 2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . 4 . . 2 . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 4 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpacePlane, 200, 0)
})
sprites.onOverlap(SpriteKindLegacy.Projectile, SpriteKindLegacy.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
controller.combos.attachCombo("ABAB", function () {
    SpecialPower = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. 4 4 4 . . 8 8 8 . . 8 8 8 . . 
. 4 4 4 . . 8 8 8 . . 8 8 8 . . 
. 4 4 4 . . 8 8 8 . . 8 8 8 . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpacePlane, 200, 0)
})
info.onCountdownEnd(function () {
    End = sprites.create(img`
. . . . f f f f f f f . . . . . 
. . f f 1 1 1 1 1 1 1 f f . . . 
. f 1 1 1 1 1 1 1 1 1 1 1 f . . 
. f 1 1 1 1 1 1 1 1 1 1 1 f . . 
f 1 1 f 1 1 1 1 1 f f 1 1 1 f . 
f 1 1 1 f 1 1 1 1 f f 1 1 1 f . 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
f 1 1 1 1 1 1 1 1 1 1 1 1 1 f . 
f 1 1 1 1 1 1 1 1 1 1 1 1 2 f . 
f 2 1 1 1 1 2 1 1 1 1 1 2 1 f . 
f 1 2 2 1 1 1 1 1 1 2 2 2 2 f . 
. f 1 2 2 1 2 2 2 1 2 2 2 f . . 
. f 2 2 2 2 1 2 2 2 2 2 2 f . . 
. . f f 2 2 2 2 2 2 2 f f . . . 
. . . . f f f f f f f . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Food2)
    End.setVelocity(-50, Math.randomRange(-50, 50))
    End.setPosition(180, Math.randomRange(8, 112))
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food2, function (sprite, otherSprite) {
    game.over(true)
})
controller.combos.attachCombo("BBBAA", function () {
    SpecialPower3 = sprites.createProjectileFromSprite(img`
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 8 
`, SpacePlane, 200, 0)
})
sprites.onOverlap(SpriteKindLegacy.Enemy, SpriteKindLegacy.Player, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeLifeBy(-1)
    scene.cameraShake(4, 500)
    music.baDing.play()
})
controller.combos.attachCombo("ABB", function () {
    SpecialPower2 = sprites.createProjectileFromSprite(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. . . . . . 7 . . . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . . . 7 . . . . . . 
. . . . . . . . . . 7 . . . . . 
. 7 7 7 7 7 7 7 7 7 7 7 . . . . 
. . . . . . . . . . 7 . . . . . 
. . . . . . . . . 7 . . . . . . 
. . . . . . . . 7 . . . . . . . 
. . . . . . . 7 . . . . . . . . 
. . . . . . 7 . . . . . . . . . 
. . . . . 7 . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpacePlane, 200, 0)
})
let HarderBogey: Sprite = null
let Life: Sprite = null
let Drone: Sprite = null
let SpecialPower2: Sprite = null
let SpecialPower3: Sprite = null
let End: Sprite = null
let SpecialPower: Sprite = null
let Dart: Sprite = null
let SpacePlane: Sprite = null
SpacePlane = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . 1 1 1 1 f . . . . . . 
2 1 . 1 1 1 1 2 1 1 f . . . . . 
2 1 1 2 1 1 1 1 1 1 1 1 1 . . . 
2 2 1 1 1 2 2 1 2 1 2 2 2 2 . . 
. . . 1 1 1 2 2 2 2 2 . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Player)
SpacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(SpacePlane, 200, 200)
scene.setBackgroundColor(6)
effects.clouds.startScreenEffect()
info.startCountdown(5)
game.onUpdateInterval(500, function () {
    Drone = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . a a 2 a a a . . . . . 
. . . 2 2 2 a a a a a a . . . . 
. a a a a a a a a 2 a a a a . 2 
1 c c c c 2 2 a a a 2 a c c c c 
1 f f f c c c c a a 2 c c f f f 
. . f f 2 f f c c c c 2 f f f . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Enemy)
    Drone.setVelocity(-80, Math.randomRange(-50, 50))
    Drone.setPosition(180, Math.randomRange(8, 112))
})
game.onUpdateInterval(25000, function () {
    Life = sprites.create(img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . c c c c . . . . . . 
. . . . . c 2 2 2 2 c . . . . . 
. . . f c b a 2 2 a b c 1 . . . 
. . . f 1 b b a c b b f 1 . . . 
. . . f f f b c a b 1 f f . . . 
. . . . f f 1 f f f f f . . . . 
. . . . c f f f 1 f 1 c . . . . 
. . . . c b 1 f 1 f b c . . . . 
. . . . . c b b b b c . . . . . 
. . . . . . c c c c . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Food)
    Life.setVelocity(-50, Math.randomRange(-50, 50))
    Life.setPosition(180, Math.randomRange(8, 112))
})
game.onUpdateInterval(3000, function () {
    HarderBogey = sprites.create(img`
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . a . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . a . . . . . 2 . . . . . . . . . . . . . . . . . . . 
. . . . . . . a . . . a . . . . . . . . . . . . . . . . . . . . 
. . . . . . 2 2 c c c c c . . . . . . . . . . . . . . . . . . . 
. . . . . 2 2 2 c c c c c . . . . . . . . . . . . . . . . . . . 
. . . . . 2 2 2 c c 2 c c . . . . . . . . . . . . . . . . . . . 
. . . . . c c c 2 c c c . . . . . . . . . . . . . . . . . . . . 
. . . . . c c c c c c c . . . . . . . . . . . . . . . . . . . . 
. . . . . b 2 c c 2 c . . . . . . . . . . . . . . . . . . . . . 
. . . 2 b b 2 c c c 2 . . . . . . . . . . . . . . . . . . . . . 
. . . 2 b 2 b . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . 
`, SpriteKindLegacy.Enemy)
    HarderBogey.setVelocity(-150, Math.randomRange(-50, 50))
    HarderBogey.setPosition(180, Math.randomRange(8, 112))
})
