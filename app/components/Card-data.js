import trackImg from '../assets/album-cover.png';
import cameraImg from '../assets/camera.png';
import graphImg from '../assets/graph.png';

export default (events) => {
    if (events.icon === 'music') {
        return dataTemplates.music(events.data);
    } else if (events.icon === 'thermal') {
        return dataTemplates.thermal(events.data);
    } else if (events.data.type === 'graph') {
        return dataTemplates.graph();
    } else if (events.data.buttons) {
        let btn = function (btn, index) {
            return `<div class="button button__${index}">${btn}</div>`
        };
        return dataTemplates.buttons(events.data, btn);
    } else if (events.data.image) {
        return dataTemplates.camera();
    }
}

let dataTemplates = {
    music: (data) => {
        return `<div class="track__container">
                    <div class="track__info">
                        <img class="track_image" src="${trackImg}">
                        <div class="track__panel">
                            <div class="track">
                                <span class="track__artist">${data.artist}</span>
                                <span> - </span>
                                <span class="track__name">${data.track.name}</span>
                            </div>
                            <div class="track__controls">
                                <input type="range" class="track__length-control">
                                <span class="track__controls-text">${data.track.length}</span>
                            </div>
                        </div>
                    </div>
                    <div class="track__controls">
                        <div class="track__previous"></div>
                        <div class="track__next"></div>
                        <input type="range" class="track__volume-control">
                        <span class="track__controls-text">${data.volume}%</span>
                    </div>
                </div>`
    },

    thermal: (data) => {
        return `<div class="thermal__container">
                    <div class="thermal__temperature">
                        <span class="thermal__title">Температура: </span>
                        <span class="thermal__value">${data.temperature} С</span>
                    </div>
                    <div class="thermal__humidity">
                        <span class="thermal__title">Влажность: </span>
                        <span class="thermal__value">${data.humidity}%</span>
                    </div>
                </div>`;
    },

    graph: () => {
        return `<img class="graph__image image" src="${graphImg}">`;
    },

    buttons: (data, btn) => {
        return `<div class="buttons__container">
                    ${data.buttons.map(btn).join('')}
                </div>`;
    },

    camera: () => {
        return `<div class="camera__container" touch-action="none">
                    <img id="camera" class="camera__image image" src="${cameraImg}">
                </div>
                <div class="camera__controls">
                    <div>Приближение: <span id="camera__oncoming">100</span>%</div>
                    <div>Яркость: <span id="camera__bright">100</span>%</div>
                </div>`;
    }
};
