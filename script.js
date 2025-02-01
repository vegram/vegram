const techToks = [
'<iframe src="https://www.tiktok.com/player/v1/7452758155412442410?autoplay=0&description=1&loop=1" style="width: 100%; height: 50vh" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>',
'<iframe src="https://www.tiktok.com/player/v1/7453283802438257966?autoplay=0&description=1&loop=1" style="width: 100%; height: 50vh" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>',
'<iframe src="https://www.tiktok.com/player/v1/7453618073245928746?autoplay=0&description=1&loop=1" style="width: 100%; height: 50vh" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>',
'<iframe src="https://www.tiktok.com/player/v1/7456533931811278122?autoplay=0&description=1&loop=1" style="width: 100%; height: 50vh" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>',
];

const gamingToks = [
'<iframe src="https://www.tiktok.com/player/v1/7063176776167673134?autoplay=0&description=1&loop=1" style="width: 100%; height: 50vh" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>',
'<iframe src="https://www.tiktok.com/player/v1/7085806638732627246?autoplay=0&description=1&loop=1" style="width: 100%; height: 50vh" frameborder="0" allow="encrypted-media" allowfullscreen></iframe>',
];

const container = document.getElementById("display-container");
const video2 = document.getElementById("second-vid");
const video3 = document.getElementById("third-vid");
const nextTok = document.getElementById("nav-right");
const previousTok = document.getElementById("nav-left");
const showGaming = document.getElementById("show-gaming");
const showTech = document.getElementById("show-tech");

let currentIndex = 0;
let currentCategory = techToks;

function updateButtons() {
    nextTok.disabled = currentIndex === currentCategory.length - 1;
    previousTok.disabled = currentIndex === 0;
    showGaming.disabled = currentCategory === gamingToks;
    showTech.disabled = currentCategory === techToks;
}

function displayTikTok(index) {
    // Main video
    const mainVideo = currentCategory[index];
    container.innerHTML = mainVideo;

    // Previous video
    if (index > 0 && index !== currentCategory.length - 1) {
        const prevVideo = currentCategory[index - 1];
        video2.innerHTML = prevVideo;
    } else {
        video2.innerHTML = '';
    }
    // Next video
    if (index < currentCategory.length - 1) {
        const nextVideo = currentCategory[index + 1];
        video3.innerHTML = nextVideo;
    } else {
        video3.innerHTML = '';
    }
    
    // Show the previous video on the opposite side when at the end of the array
    if (index === currentCategory.length - 1 && index > 0) {
        const prevVideoEnd = currentCategory[index - 1];
        video2.innerHTML += prevVideoEnd;
    }

    updateButtons();
}

displayTikTok(currentIndex);

nextTok.addEventListener("click", () => {
    if (currentIndex < currentCategory.length - 1){
     currentIndex++;
     displayTikTok(currentIndex);
    }
});

previousTok.addEventListener("click", () => {
    if (currentIndex > 0) {
        currentIndex--;
        displayTikTok(currentIndex);
    }
});

showGaming.addEventListener("click", () => {
    currentCategory = gamingToks;
    currentIndex = 0;
    displayTikTok(currentIndex);
});

showTech.addEventListener("click", () => {
    currentCategory = techToks;
    currentIndex = 0;
    displayTikTok(currentIndex);
});
