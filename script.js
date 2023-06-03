window.onload = function() {
    const radioStationsSelect = document.getElementById('radioStations');
    const playButton = document.getElementById('playButton');
    const pauseButton = document.getElementById('pauseButton');
    const volumeSlider = document.getElementById('volumeSlider');
    const statusIndicator = document.querySelector('.status-indicator');
    const statusText = document.querySelector('.status-text');
    const volumeText = document.getElementById('volumeText');
    let audioPlayer = new Audio();
  
    // Enable/disable play/pause buttons based on radio station selection
    radioStationsSelect.onchange = function() {
      const selectedStation = radioStationsSelect.value;
      playButton.disabled = !selectedStation;
      pauseButton.disabled = !selectedStation;
  
      if (audioPlayer.src !== selectedStation) {
        const isPlaying = !audioPlayer.paused;
        
        audioPlayer.pause();
        audioPlayer.src = selectedStation;
        
        if (isPlaying) {
          audioPlayer.play();
        }
      }
    };
  
    // Play button event listener
    playButton.onclick = function() {
      audioPlayer.play();
      statusIndicator.classList.add('playing');
      statusIndicator.classList.remove('paused');
      statusText.textContent = 'Now Playing...';
    };
  
    // Pause button event listener
    pauseButton.onclick = function() {
      audioPlayer.pause();
      statusIndicator.classList.remove('playing');
      statusIndicator.classList.add('paused');
      statusText.textContent = 'Radio paused';
    };
  
    // Volume slider event listener
    volumeSlider.oninput = function() {
      const volumePercentage = volumeSlider.value;
      audioPlayer.volume = volumePercentage / 100;
      volumeText.textContent = `Volume: ${volumePercentage}%`;
    };
  
    // Event listener to update status indicator when audio is ended
    audioPlayer.addEventListener('ended', function() {
      statusIndicator.classList.remove('playing');
      statusIndicator.classList.remove('paused');
      statusText.textContent = 'Radio paused';
    });
  };
  