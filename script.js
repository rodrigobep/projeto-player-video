let video = document.getElementById("video1")
let playlet = document.getElementById("play")
let tatocando = false

function retroceder(){
    video.currentTime -= 15; 
}

function maislento(){
    video.playbackRate -= 0.1;
}

function play(){
    if(tatocando == false){
    video.play();
    playlet.src = "./assets/controls/pausa.png"
    tatocando = true
    }else{
    video.pause();
    playlet.src = "./assets/controls/play.png"
    tatocando = false
    }
}

function parar(){
    video.pause();
    video.currentTime = 0;
}

function maisrapido(){
    video.playbackRate += 0.1;
}

function adiantar(){
    video.currentTime += 15;
}