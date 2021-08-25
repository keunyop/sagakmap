function onClick_churchList(churchId) {
    deactivateAll();
    var clickedChurch = document.getElementById("churchlist-church" + churchId);
    clickedChurch.classList.add('active');
}

function deactivateAll() {
    CHURCHS.forEach(church => {
        var unclickedChurch = document.getElementById("churchlist-church" + church.id);
        unclickedChurch.classList.remove('active');
    });
}