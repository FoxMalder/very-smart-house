export default () => {
    let camera = document.getElementById('camera');
    let currentGesture = null;
    let eventsCache = [];
    let prevDiff = -1;

    const nodeState = {
        scale: 1,
        translate: 0,
        brightness: 100,
    };

    if ('ontouchstart' in document.documentElement) {
        camera.addEventListener('pointerdown', (event) => {
            eventsCache.push(event);

            camera.setPointerCapture(event.pointerId);

            currentGesture = {
                startX: event.x,
                prevX: event.x,
                scale: nodeState.scale,
                translate: nodeState.translate,
                brightness: nodeState.brightness,
            };
        });

        camera.addEventListener('pointermove', (event) => {
            if (!currentGesture) {
                return;
            }

            for (let i = 0; i < eventsCache.length; i++) {
                if (event.pointerId === eventsCache[i].pointerId) {
                    eventsCache[i] = event;
                    break;
                }
            }

            if (eventsCache.length === 1) {
                const {startX, prevX, scale, translate, brightness} = currentGesture;
                const {x} = event;
                const dx = x - startX;

                camera.style.transform = `translate(${translate + dx}px)`;

                currentGesture.prevX = x;
                nodeState.translate = dx < -1.5 * nodeState.translate ? -2 * nodeState.translate : 0;
            }

            if (eventsCache.length === 2) {
                let curDiff = Math.abs(eventsCache[0].clientX - eventsCache[1].clientX);
                let size = document.getElementById('camera__oncoming');
                let curSize = nodeState.scale;

                if (prevDiff > 0) {
                    if (curDiff > prevDiff) {
                        curSize = curSize + curDiff * 0.01;
                        size.innerText = `${curSize * 100}`;
                        camera.style.transform = `scale(${curSize})`;
                    }
                    if (curDiff < prevDiff && curDiff > 10) {
                        curSize = curSize - curDiff * 0.01;
                        size.innerText = `${curSize * 100}`;
                        camera.style.transform = `scale(${curSize})`;
                    }
                }

                prevDiff = curDiff;
                nodeState.scale = curSize;
            }
        });

        camera.addEventListener('pointerup', (event) => {
            eventsCache = [];
            currentGesture = null;
            if (eventsCache.length < 2) prevDiff = -1;
        });
    }
}
