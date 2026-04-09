namespace camera {

    export let smoothing = 1
    export let deadzoneX = 0
    export let deadzoneY = 0

    let target: Sprite = null

    export function setTarget(s: Sprite) {
        target = s
        scene.cameraFollowSprite(null)
    }

    game.onUpdate(function () {
        if (!target) return

        let cam = scene.cameraProperty(CameraProperty.X)
        let camY = scene.cameraProperty(CameraProperty.Y)

        let dx = target.x - cam
        let dy = target.y - camY

        if (Math.abs(dx) > deadzoneX) {
            cam += dx / smoothing
        }

        if (Math.abs(dy) > deadzoneY) {
            camY += dy / smoothing
        }

        scene.centerCameraAt(cam, camY)
    })
}
