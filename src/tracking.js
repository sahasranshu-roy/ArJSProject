var lastTimestamp;
var speedX = 0, speedY = 0, speedZ = 0;
window.addEventListener('devicemotion', function (event) {
    var currentTime = new Date().getTime();
    if (lastTimestamp === undefined) {
        lastTimestamp = new Date().getTime();
        return; //ignore first call, we need a reference time
    }
    //  m/s² / 1000 * (miliseconds - miliseconds)/1000 /3600 => km/h (if I didn't made a mistake)
    // speedX += event.acceleration.x / 1000 * ((currentTime - lastTimestamp) / 1000) / 3600;
    // speedY += event.acceleration.y / 1000 * ((currentTime - lastTimestamp) / 1000) / 3600;
    // speedZ += event.acceleration.z / 1000 * ((currentTime - lastTimestamp) / 1000) / 3600;
    //... same for Y and Z

    this.console.log(speedX + " " + speedY + " " + speedZ);
    lastTimestamp = currentTime;
    this.console.log(event.acceleration);
}, false);