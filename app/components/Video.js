window.videoObj = {
    selectedId: '',
    allVideosText: document.getElementById('all_videos'),
    container: document.getElementsByClassName('video__container'),

    selectVideo: (id) => {
        console.log('video selected', id);
        window.videoObj.selectedId = id;
        for (let i = 0; i < videoObj.container.length; i++) {
            videoObj.container[i].classList.add('video_hidden');
        }
        document.getElementById(`video-${id}`).classList.add('video_selected');
        document.getElementById(`all-videos`).style.display = 'block';
        document.getElementById(`video__controls`).style.display = 'block';
    },

    showAllVideos: (id) => {
        console.log('selected', window.videoObj.selectedId);
        window.videoObj.selectedId = '';
        for (let i = 0; i < videoObj.container.length; i++) {
            videoObj.container[i].classList.remove('video_hidden');
        }
        document.getElementById(`video-${id}`).classList.remove('video_selected');
        document.getElementById(`all-videos`).style.display = 'none';
        document.getElementById(`video__controls`).style.display = 'none';
    }
};

export default (video) => {
    return `<div id="video-${video.id}" class="video__container">
                <video class="video" controls muted autoplay src="${video.stream}"
                 onclick="event.preventDefault(); videoObj.selectVideo(${video.id})"></video>
            </div>`
}
