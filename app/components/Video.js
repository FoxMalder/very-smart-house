window.videoObj = {
    selectedId: '',
    allVideosText: document.getElementById('all_videos'),
    container: document.getElementsByClassName('video__container'),
    brightness: 100,
    grayscale: 0,

    selectVideo: (id) => {
        console.log('video selected', id);
        window.videoObj.selectedId = id;
        for (let i = 0; i < videoObj.container.length; i++) {
            videoObj.container[i].classList.add('video_hidden');
        }
        document.getElementById(`video-${id}`).classList.add('video_selected');
        document.getElementById(`all-videos`).style.display = 'block';
    },

    showAllVideos: (id) => {
        console.log('selected', window.videoObj.selectedId);
        window.videoObj.selectedId = '';
        for (let i = 0; i < videoObj.container.length; i++) {
            videoObj.container[i].classList.remove('video_hidden');
        }
        document.getElementById(`video-${id}`).classList.remove('video_selected');
        document.getElementById(`all-videos`).style.display = 'none';
    },

    filterVideo: (id) => {
        document.getElementById(`video-${id}`).style.filter =
            `brightness(${window.videoObj.brightness}%) 
             grayscale(${window.videoObj.grayscale}%)`;
    },

    changeBright: (id) => {
        window.videoObj.brightness = document.getElementById(`video__bright-${id}`).value;
        window.videoObj.filterVideo(id);
    },

    changeContrast: (id) => {
        window.videoObj.grayscale = document.getElementById(`video__contrast-${id}`).value;
        window.videoObj.filterVideo(id);
    }
};

export default (video) => {
    return `<div id="video-${video.id}" class="video__container">
                <div class="video__controls">
                    <div>
                        <label for="bright">Яркость</label>
                        <input id="video__bright-${video.id}" name="bright" type="range" min="0" max="200" 
                        oninput="videoObj.changeBright(${video.id})">
                    </div>
                    <div>
                        <label for="contrast">Констрастность</label>
                        <input id="video__contrast-${video.id}" name="contras" type="range" value="0"
                        oninput="videoObj.changeContrast(${video.id})">
                    </div>
                </div>
                <video class="video" controls muted autoplay src="${video.stream}"
                 onclick="event.preventDefault(); videoObj.selectVideo(${video.id})"></video>
            </div>`
}
