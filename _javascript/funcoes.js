function mudaFoto(foto){
  document.getElementById("icone").src = foto;
}

    function vidplay(id) {
       var video = document.getElementById(id);
       if (video.paused) {
          video.play();
       } else {
          video.pause();
       }
    }

    function restart() {
        var video = document.getElementById("Video1");
        video.currentTime = 0;
    }

    function skip(value) {
        var video = document.getElementById("Video1");
        video.currentTime += value;
    }
