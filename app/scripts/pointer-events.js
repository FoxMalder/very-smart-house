export default () => {
    let camera = document.getElementById('camera');
    let currentGesture = null;

    const nodeState = {
        scale: 1,
        translate: 0,
        brightness: 100,
        startPosition: 0,
    };

    camera.addEventListener('pointerdown', (event) => {
        // Нужно для десктопа чтобы поймать pointerup вне DOM-ноды
        camera.setPointerCapture(event.pointerId);

        currentGesture = {
            startX: event.x,
            prevX: event.x,
            prevTs: Date.now(),
            scale: nodeState.scale,
            translate: nodeState.translate,
            brightness: nodeState.brightness,
            startPosition: nodeState.startPosition,
        };
    });

    camera.addEventListener('pointermove', (event) => {
        if (!currentGesture) {
            return
        }

        const {startX, prevX, prevTs, scale, translate, brightness, startPosition} = currentGesture;
        const {x} = event;
        const dx = x - startX;

        camera.style.transform = `translate(${translate + dx}px)`;

        // const ts = Date.now();
        // const speed = Math.abs(x - prevX) / (ts - prevTs);

        // if (speed > 5 && ts !== prevTs) {
        //     // container.className = `${container.className} notification-container_moved`;
        //     camera.className = `${camera.className} notification-container__camera_moved-${dx > 0 ? 'right' : 'left'}`;
        //     currentGesture = null;
        //     return;
        // }

        currentGesture.prevX = x;
        // currentGesture.prevTs = ts;
        nodeState.translate = dx < -1.5 * nodeState.translate ? -2 * nodeState.translate : 0;
    });

}
