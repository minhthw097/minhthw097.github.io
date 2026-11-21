const aquarium = document.getElementById("aquarium");
const waterButton = document.getElementById("waterButton");
const musicButton = document.getElementById("musicButton");
const backgroundMusic = document.getElementById("backgroundMusic");

const waterColors = [
    "linear-gradient(to bottom, #ede59c, #2ba7ea, #0486ea)",
    "linear-gradient(to bottom, #f891cb, #bb794f, #ae342b)",
    "linear-gradient(to bottom, #f3e657, #5c6bc0, #283593)",
    "linear-gradient(to bottom, #b39ddb, #926bd5, #6d1c68)",
    "linear-gradient(to bottom, #ffe789, #f47e9e, #ff56be)",
    "linear-gradient(to bottom, #1880b1, #143b4f, #00233d)"
];

let colorIndex = 0;

waterButton.addEventListener("click", function() {

    colorIndex = (colorIndex + 1) % waterColors.length;

    aquarium.style.background = waterColors[colorIndex];

});

musicButton.addEventListener("click", async function() {

    if (backgroundMusic.paused) {

        try {
            await backgroundMusic.play();
            musicButton.textContent = "Tắt nhạc";
        }

        catch (error) {
            alert("Không thể phát nhạc. Hãy kiểm tra lại file nhạc nhé!");
        }

    }

    else {

        backgroundMusic.pause();
        musicButton.textContent = "Bật nhạc";

    }

});
