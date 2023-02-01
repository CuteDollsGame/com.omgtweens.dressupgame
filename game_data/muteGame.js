function muteGame() {
    _soundManager.setInvisibleFunc(true);
    trace("Application is stopped!", 1)
}

function unmuteGame() {
    _soundManager.setInvisibleFunc(false);
    trace("Application is running!", 1)
}

function unmuteGameClicked() {
    setTimeout(() => {  _soundManager.setInvisibleFunc(false);  }, 8000);
    
    trace("Application is running!", 1)
}