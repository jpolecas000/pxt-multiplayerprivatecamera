namespace privatecamera {

    let started = false

    /**
     * Start the private camera system
     */
    //% block="start private camera system"
    export function start() {
        if (started) return
        started = true

        multiplayer.onPlayerJoined(function (id: number) {
            player.createPlayer(id)
        })
    }

    /**
     * Set camera follow smoothing
     */
    //% block="set camera smoothing %value"
    export function setSmoothing(value: number) {
        camera.smoothing = value
    }

    /**
     * Enable camera deadzone
     */
    //% block="set camera deadzone %x %y"
    export function setDeadzone(x: number, y: number) {
        camera.deadzoneX = x
        camera.deadzoneY = y
    }
}
