const noBtn = document.getElementById("move-random");

function moveButton() {
    const maxX = window.innerWidth - noBtn.offsetWidth - 20;
    const maxY = window.innerHeight - noBtn.offsetHeight - 20;

    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);

    noBtn.style.position = "fixed";
    noBtn.style.left = randomX + "px";
    noBtn.style.top = randomY + "px";
    noBtn.style.transition = "0.15s ease";
}

noBtn.addEventListener("mouseover", moveButton);
noBtn.addEventListener("mouseenter", moveButton);

// Mobile Support
noBtn.addEventListener("touchstart", function(e) {
    e.preventDefault();
    moveButton();
});

// Extra Random Movement
setInterval(() => {
    if (Math.random() > 0.6) {
        moveButton();
    }
}, 1000);