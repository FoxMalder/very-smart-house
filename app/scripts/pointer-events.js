export default () => {
    let camera = document.getElementById('camera');

    if (camera) {
        camera.addEventListener("pointerdown", function (e) {
            console.log("pointer down detected");
        });
    }
}
