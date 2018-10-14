export default () => {
    return `<div class="videos">
                <div class="videos__title title">Видеонаблюдение</div>
                <div class="videos__container">
                    <video id="video-1" class="video" controls muted autoplay 
                        src="http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fsosed%2Fmaster.m3u8"></video>
                    <video id="video-2" class="video" controls muted autoplay 
                        src="http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fcat%2Fmaster.m3u8"></video>
                    <br>
                    <video id="video-3" class="video" controls muted autoplay 
                        src="http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fdog%2Fmaster.m3u8"></video>
                    <video id="video-4" class="video" controls muted autoplay 
                        src="http://localhost:9191/master?url=http%3A%2F%2Flocalhost%3A3102%2Fstreams%2Fhall%2Fmaster.m3u8"></video>
                </div>
            </div>`
}
