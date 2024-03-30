//your JS code here. If required.
 const video = document.getElementById('video');
    const sound = document.getElementById('sound');
    const timeDisplay = document.querySelector('.time-display');
    let time = 10 * 60; // Initial time in seconds

    // Function to change sound and video
    function changeSound(type) {
      video.src = `./Sounds and Videos/${type}.mp4`;
      sound.src = `./Sounds and Videos/${type}.mp3`;
    }

    // Function to set time
    function setTime(minutes) {
      time = minutes * 60;
      updateDisplay();
    }

    // Function to update time display
    function updateDisplay() {
      const minutes = Math.floor(time / 60);
      const seconds = time % 60;
      timeDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    // Function to toggle play/pause
    function togglePlayPause() {
      if (video.paused) {
        video.play();
        sound.play();
        interval = setInterval(() => {
          time--;
          updateDisplay();
          if (time <= 0) togglePlayPause();
        }, 1000);
      } else {
        video.pause();
        sound.pause();
        clearInterval(interval);
      }
    }