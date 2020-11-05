var a = document.getElementById('a_audio');

function playPause() {
    var music = document.getElementById('audio');
    var music_btn = document.getElementById('imgAudio');
    if (music.paused) {
        music.play();
        music_btn.src = './img/暂停.png';
    } else {
        music.pause();
        music_btn.src = './img/开始.png';
    }
}
a.onclick = function () {
    playPause();
}