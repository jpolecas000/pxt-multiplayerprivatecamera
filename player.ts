namespace player {

    let spritesByPlayer: Sprite[] = []

    export function createPlayer(id: number) {

        let sprite = sprites.create(getPlayerImage(id), SpriteKind.Player)

        multiplayer.setPlayerSprite(id, sprite)
        spritesByPlayer[id] = sprite

        setupControls(id, sprite)

        if (id == multiplayer.playerNumber()) {
            camera.setTarget(sprite)
        }
    }

    function setupControls(id: number, sprite: Sprite) {
        if (id == 1) controller.player1.moveSprite(sprite, 100, 100)
        if (id == 2) controller.player2.moveSprite(sprite, 100, 100)
        if (id == 3) controller.player3.moveSprite(sprite, 100, 100)
        if (id == 4) controller.player4.moveSprite(sprite, 100, 100)
    }

    function getPlayerImage(id: number): Image {
        return [
            img`2 2 2`,
            img`4 4 4`,
            img`5 5 5`,
            img`7 7 7`
        ][(id - 1) % 4]
    }
}
