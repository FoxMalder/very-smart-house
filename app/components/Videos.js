import Video from './Video'

export default () => {
    return `<div class="videos">
                <h2 class="videos__title title">Видеонаблюдение</h2>
                <h3 class="all-cameras__title" id="all-videos" onclick="videoObj.showAllVideos(videoObj.selectedId)">
                    Все камеры
                </h3>
                <div class="videos__container">
                    ${videosList.map(Video).join('')}
                </div>
            </div>`
}

let videosList = [
    {
        id: 1,
        stream: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fsosed%2Fmaster.m3u8'
    },
    {
        id: 2,
        stream: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fcat%2Fmaster.m3u8'
    },
    {
        id: 3,
        stream: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fdog%2Fmaster.m3u8'
    },
    {
        id: 4,
        stream: 'http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fhall%2Fmaster.m3u8'
    }
];
