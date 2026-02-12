const nextBtn = document.getElementById("nextBtn");
const page1 = document.getElementById("page1");
const page2 = document.getElementById("page2");
const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");

/* 💌 Go to Page 2 */
nextBtn.addEventListener("click", () => {
    page1.classList.remove("active");
    page2.classList.add("active");
});

/* 🙈 NO Button Runs Away */
noBtn.addEventListener("click", () => {
    const x = Math.random() * 250 - 125;
    const y = Math.random() * 250 - 125;

    noBtn.style.position = "absolute";
    noBtn.style.left = x + "px";
    noBtn.style.top = y + "px";
});

/* 💗 Floating Hearts */
function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💗";

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.fontSize = (Math.random() * 20 + 15) + "px";
    heart.style.animationDuration = (Math.random() * 3 + 4) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}

setInterval(createHeart, 500);

/* 🎉 Confetti Explosion */
function createConfetti() {
    for (let i = 0; i < 70; i++) {
        const confetti = document.createElement("div");
        confetti.classList.add("confetti");

        const colors = ["#ff4d6d", "#ff85a2", "#ffd6e0", "#ffffff"];
        confetti.style.backgroundColor =
            colors[Math.floor(Math.random() * colors.length)];

        const x = (Math.random() - 0.5) * 400 + "px";
        const y = (Math.random() - 0.5) * 400 + "px";

        confetti.style.setProperty("--x", x);
        confetti.style.setProperty("--y", y);

        document.body.appendChild(confetti);

        setTimeout(() => {
            confetti.remove();
        }, 1000);
    }
}
const successPage = document.getElementById("successPage");

yesBtn.addEventListener("click", () => {
    createConfetti();

    setTimeout(() => {
        if (successPage) {
            successPage.classList.add("show");
        }
    }, 800);
});
