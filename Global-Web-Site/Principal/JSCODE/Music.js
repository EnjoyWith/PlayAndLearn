const backgroundMusic = document.getElementById("backgroundMusic");
const startButton = document.getElementById("startButton");
const toggleMusicButton = document.getElementById("toggleMusicButton");
const startnuttonone = document.getElementById("startgame");

function startBackgroundMusic() {
  backgroundMusic.play();
}

function stopBackgroundMusic() {
  backgroundMusic.pause();
}

function toggleMusic() {
  if (backgroundMusic.paused) {
    startBackgroundMusic();
    toggleMusicButton.textContent = "Silenciar Música";
  } else {
    stopBackgroundMusic();
    toggleMusicButton.textContent = "Reanudar Música";
  }
}

toggleMusicButton.addEventListener("click", toggleMusic);

// Reinicia la música cuando termina
backgroundMusic.addEventListener("ended", () => {
  backgroundMusic.currentTime = 0;
  backgroundMusic.play();
});

// Autoriza la reproducción de música cuando el usuario hace clic en el botón de inicio
startButton.addEventListener("click", () => {
  startBackgroundMusic();
  startnuttonone.style.opacity = 0; // Oculta el botón de inicio después de hacer clic
  startnuttonone.style.visibility = "hidden"; // Oculta el botón de inicio después de hacer clic
});