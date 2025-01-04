const bells = new Audio('./sounds/bell.wav'); 
const startBtn = document.querySelector('.btn-start'); 
const pauseBtn = document.querySelector('.btn-pause');
const resetBtn = document.querySelector('.btn-reset');
const session = document.querySelector('.minutes'); 
const videoPlayer = document.getElementById('videoplayer');
let playVideo = document.getElementById('lofi');
let iframe = document.getElementById('youtube-video');
let totalSeconds;
let myInterval; 
let state = true;

const appTimer = () => {
  if (state) {
    state = false;
    if (totalSeconds === undefined) {
        const sessionAmount = Number.parseInt(session.textContent)
        totalSeconds = sessionAmount * 60;
    }
    const updateSeconds = () => {
        const minuteDiv = document.querySelector('.minutes');
        const secondDiv = document.querySelector('.seconds');

        totalSeconds--;

        let minutesLeft = Math.floor(totalSeconds/60);
        let secondsLeft = totalSeconds % 60;

        if(secondsLeft < 10) {
        secondDiv.textContent = '0' + secondsLeft;
        } else {
        secondDiv.textContent = secondsLeft;
        }
        minuteDiv.textContent = `${minutesLeft}`

        if(minutesLeft === 0 && secondsLeft === 0) {
        bells.play()
        clearInterval(myInterval);
        }
    }
      myInterval = setInterval(updateSeconds, 1000);
    } else {
      alert('Session has already started.')
    }
  }
const pauseTimer = () => {
    clearInterval(myInterval);
    state = true;
}

const resetTimer = () => {
    clearInterval(myInterval);
    state = true;
    totalSeconds = undefined;
    const sessionAmount = Number.parseInt(session.textContent)
    const minuteDiv = document.querySelector('.minutes');
    const secondDiv = document.querySelector('.seconds');
    minuteDiv.textContent = "25";
    secondDiv.textContent = "00";
}

  startBtn.addEventListener('click', appTimer);
  pauseBtn.addEventListener('click', pauseTimer);
  resetBtn.addEventListener('click', resetTimer);
  playVideo.addEventListener('click', function(){
    iframe.src = "https://www.youtube.com/embed/jfKfPfyJRdk?si=aJztRe8d_OhC5cdJ";
    videoPlayer.style.display = 'block';
  });