// Image Panels
let panels = document.getElementsByClassName('panel');

for (let i = 0; i < panels.length; i++) {
    panels[i].onmouseover = function () {
        removeActiveClasses();
        panels[i].classList.add('active');
    };

    panels[i].onmouseout = function () {
        removeActiveClasses();
        panels[0].classList.add('active');
    };
}

function removeActiveClasses() {
    for (let i = 0; i < panels.length; i++) {
        panels[i].classList.remove('active');
    }
}

// Hero Text Box
let heroInput = document.getElementById('heroInput');
let placeholderText = document.getElementById('placeholder-text');

heroInput.onfocus = function() {
    placeholderText.style.opacity = "0";
}

heroInput.onblur  = function() {
    placeholderText.style.opacity = "1";
}

//Video Pause and Play Button

let videoDisplay = document.getElementById('video-display');
let playPauseButton = document.getElementById('play-button');

playPauseButton.onclick = function () {
    videoDisplay.classList.toggle('active');

    if (!videoDisplay.classList.contains('active')) {
        videoDisplay.pause();
        videoDisplay.loop = true;
        playPauseButton.innerHTML = "<i class=\"fa-solid fa-play\"></i>";
    } else {
        videoDisplay.play();
        videoDisplay.loop = true;
        playPauseButton.innerHTML = "<i class=\"fa-solid fa-pause\"></i>";
    }
};

// Scroll changes category alignment
window.onscroll = function () {
    let categoryGallery = document.getElementById('category-gallery');

    if (window.pageYOffset < 600) {
        categoryGallery.classList.remove('scroll');
    } else if (window.pageYOffset > 600) {
        categoryGallery.classList.add('scroll');
    } 
};
