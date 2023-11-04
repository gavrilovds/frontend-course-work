document.addEventListener('DOMContentLoaded', function () {
    const playButtons = document.querySelectorAll('.play-music-button');
    const audioPlayer = new Audio();
    let currentAudio = null;
    let currentButton = null;
    const notification = document.getElementById('notification');
    const songInfo = document.getElementById('song-info');

    playButtons.forEach(button => {
        button.addEventListener('click', function () {
            const audioId = button.getAttribute('data-audio');
            const audio = document.getElementById(audioId);
            const currentSongName = button.getAttribute('data-song-name');

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
                showNotification(currentSongName);
            } else {
                audio.pause();
                audio.currentTime = 0;
                button.textContent = 'Послушать';
                currentAudio = null;
                currentButton = null;
                hideNotification();
            }
        });
    });

    function showNotification(text) {
        songInfo.textContent = `Сейчас играет: ${text}`;
        notification.style.display = 'block';
    }

    function hideNotification() {
        notification.style.display = 'none';
    }
});
