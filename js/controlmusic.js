


function palyStartMusic(){
var audio=document.getElementById('audio')
audio.pause(); 
newgame()
}

function playPressMusic(){
    var audio=document.getElementById('audio')
    audio.src="./music/press_down1.mp3"
    audio.play(); 
}


function playEndMusic(){
    var audio=document.getElementById('audio')
    audio.src="./music/lose.mp3"
    audio.play(); 
}