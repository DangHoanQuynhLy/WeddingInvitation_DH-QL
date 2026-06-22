// =========================
// AOS INIT
// =========================

window.addEventListener("load", () => {

    AOS.init({
        duration: 1200,
        once: true
    });

    AOS.refresh();
});

// =========================
// LOADER
// =========================

const loader =
document.getElementById("loader");

const openBtn =
document.getElementById("openInvitation");

const music =
document.getElementById("bgMusic");

const musicBtn =
document.getElementById("musicButton");

let musicPlaying = false;

openBtn.addEventListener("click", () => {

    loader.style.opacity = "0";

    loader.style.pointerEvents = "none";

    setTimeout(() => {

        loader.style.display = "none";
        AOS.refresh();
        window.dispatchEvent(new Event("resize"));

    }, 800);

    music.play()
        .then(() => {

            musicPlaying = true;

            musicBtn.classList.add("playing");

        })
        .catch(() => {});
});

// =========================
// MUSIC BUTTON
// =========================

musicBtn.addEventListener("click", () => {

    if (!musicPlaying) {

        music.play();

        musicBtn.classList.add("playing");

        musicPlaying = true;

    } else {

        music.pause();

        musicBtn.classList.remove("playing");

        musicPlaying = false;
    }
});

// =========================
// COUNTDOWN
// =========================

const weddingDate =
new Date("2026-11-24T00:00:00");

function updateCountdown() {

    const now = new Date();

    const distance =
    weddingDate - now;

    if(distance <= 0){

        document.getElementById("days").textContent = "0";
        document.getElementById("hours").textContent = "0";
        document.getElementById("minutes").textContent = "0";
        document.getElementById("seconds").textContent = "0";

        return;
    }

    const days =
    Math.floor(
        distance /
        (1000 * 60 * 60 * 24)
    );

    const hours =
    Math.floor(
        (distance %
        (1000 * 60 * 60 * 24))
        /
        (1000 * 60 * 60)
    );

    const minutes =
    Math.floor(
        (distance %
        (1000 * 60 * 60))
        /
        (1000 * 60)
    );

    const seconds =
    Math.floor(
        (distance %
        (1000 * 60))
        /
        1000
    );

    document.getElementById("days")
        .textContent = days;

    document.getElementById("hours")
        .textContent = hours;

    document.getElementById("minutes")
        .textContent = minutes;

    document.getElementById("seconds")
        .textContent = seconds;
}

updateCountdown();

setInterval(
    updateCountdown,
    1000
);

// =========================
// HERO PARALLAX
// =========================

window.addEventListener("scroll", () => {
    const hero =
    document.querySelector(".hero");
    if(!hero) return;
    const offset =
    window.scrollY * 0.4;
    hero.style.backgroundPositionY =
    `${offset}px`;
});
// =========================
// LIGHTBOX GALLERY
// =========================

const galleryImages =
document.querySelectorAll(
".gallery-grid img"
);
galleryImages.forEach(img => {

    img.addEventListener(
    "click",
    () => {
        const lightbox =
        document.createElement("div");
        lightbox.className =
        "lightbox";
        lightbox.innerHTML = `
        <img src="${img.src}">
        `;
        document.body.appendChild(
            lightbox
        );
        document.body.style
        .overflow = "hidden";
        lightbox.addEventListener(
        "click",
        () => {
            lightbox.remove();

            document.body.style
            .overflow = "auto";
        });
    });
});

// =========================
// SMOOTH SCROLL
// =========================

document
.querySelectorAll('a[href^="#"]')
.forEach(anchor => {

    anchor.addEventListener(
    "click",
    function(e){
        e.preventDefault();
        const target =
        document.querySelector(
        this.getAttribute("href")
        );
        target.scrollIntoView({
            behavior:"smooth"
        });
    });
});

// =========================
// HERO REVEAL
// =========================

window.addEventListener(
"load",
() => {
    document.body.classList
    .add("loaded");
});
window.addEventListener("load", () => {
    setTimeout(() => {
        window.dispatchEvent(
            new Event("resize")
        );

    }, 100);
});
setInterval(() => {
    console.log(
        window.innerWidth,
        document.body.clientWidth
    );
}, 2000);