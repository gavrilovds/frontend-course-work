document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('.play-music-button');
    const audioPlayer = new Audio();
    let currentAudio = null;
    let currentButton = null;

    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            const audioId = button.getAttribute('data-audio');
            const audio = document.getElementById(audioId);

            if (currentAudio && currentAudio !== audio) {
                currentAudio.pause();
                currentAudio.currentTime = 0;
                currentButton.textContent = 'Послушать';
            }

            if (audio.paused) {
                audio.play();
                button.textContent = 'Пауза';
                currentAudio = audio;
                currentButton = button;
            } else {
                audio.pause();
                audio.currentTime = 0;
                button.textContent = 'Послушать';
                currentAudio = null;
                currentButton = null;
            }
        });
    });
});
