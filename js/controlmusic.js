function palyStartMusic1() {
    var audio = document.getElementById('audio')
    audio.pause();
    newgame()
    localStorage.setItem('model', false)
    window.location.reload()
}


function palyStartMusic2() {
    var audio = document.getElementById('audio')
    audio.pause();
    newgame()
    localStorage.setItem('model', true)
    window.location.reload()
}

function playPressMusic() {
    var audio = document.getElementById('audio')
    audio.src = "./music/press_down1.mp3"
    audio.play();
}


function playEndMusic() {
    var audio = document.getElementById('audio')
    audio.src = "./music/lose.mp3"
    audio.play();
}