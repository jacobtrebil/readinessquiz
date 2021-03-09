var vidBtn = document.getElementById('vidBtn');
var soundBtn = document.getElementById('soundIcon');
var vid = document.getElementById('video');

vidBtn.addEventListener('click', startVid);
soundBtn.addEventListener('click', startVid);

// Funtion To Start Video From Beginning
function startVid() {
    vid.muted = !vid.muted;
    vid.loop = false;
    vid.currentTime = 0;
    vid.controls = true;
    vidBtn.style.display = 'none';
    soundBtn.style.display = 'none';
    vid.style.pointerEvents = 'all';
}