import initVideo from '../scripts/init-video';

window.videoObj = {
    selectedId: '',
    allVideosText: document.getElementById('all_videos'),
    container: document.getElementsByClassName('video__container'),
    brightness: 100,
    contrast: 100,

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
             contrast(${window.videoObj.contrast}%)`;
    },

    changeBright: (id) => {
        window.videoObj.brightness = document.getElementById(`video__bright-${id}`).value;
        window.videoObj.filterVideo(id);
    },

    changeContrast: (id) => {
        window.videoObj.contrast = document.getElementById(`video__contrast-${id}`).value;
        window.videoObj.filterVideo(id);
    }
};

export default (video) => {
    initVideo(document.getElementById(`video-${video.id}`), video.stream);

    return `<div id="video-${video.id}" class="video__container">
                <div class="video__controls">
                    <div>
                        <label for="video__bright-${video.id}">Яркость</label>
                        <input id="video__bright-${video.id}" name="bright" type="range" min="0" max="200" 
                        oninput="videoObj.changeBright(${video.id})">
                    </div>
                    <div>
                        <label for="video__contrast-${video.id}">Констрастность</label>
                        <input id="video__contrast-${video.id}" name="contras" type="range" min="0" max="200"
                        oninput="videoObj.changeContrast(${video.id})">
                    </div>
                </div>
                <video class="video" controls muted autoplay src="${video.stream}"
                 onclick="event.preventDefault(); videoObj.selectVideo(${video.id})"></video>
            </div>`
}
