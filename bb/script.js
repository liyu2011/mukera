/* =========================
   OPEN SURPRISE
========================= */

function openSurprise() {

    const opening =
        document.getElementById("opening");

    opening.classList.add("hide");

    document.body.style.overflowY = "auto";

    createHeartExplosion();

    setTimeout(() => {
        document
            .getElementById("mainContent")
            .scrollIntoView({
                behavior: "smooth"
            });
    }, 800);
}


/* =========================
   PHOTO SLIDER
========================= */

const photos =
    document.querySelectorAll(".photo-card");

let currentPhoto = 0;

function showPhoto(index) {

    photos.forEach(photo => {
        photo.classList.remove("active");
    });

    photos[index].classList.add("active");

    document.getElementById("photoCounter")
        .textContent =
        `${index + 1} / ${photos.length}`;
}

function nextPhoto() {

    currentPhoto++;

    if (currentPhoto >= photos.length) {
        currentPhoto = 0;
    }

    showPhoto(currentPhoto);
}

function previousPhoto() {

    currentPhoto--;

    if (currentPhoto < 0) {
        currentPhoto = photos.length - 1;
    }

    showPhoto(currentPhoto);
}


/* Automatically change photos */

setInterval(() => {

    nextPhoto();

}, 4000);


/* =========================
   FLOATING HEARTS
========================= */

const heartContainer =
    document.getElementById("hearts");

const heartSymbols = [
    "❤️",
    "💕",
    "💗",
    "💖",
    "💘",
    "💓"
];

function createHeart() {

    const heart =
        document.createElement("div");

    heart.classList.add(
        "floating-heart"
    );

    heart.innerHTML =
        heartSymbols[
            Math.floor(
                Math.random() *
                heartSymbols.length
            )
        ];

    heart.style.left =
        Math.random() * 100 + "%";

    heart.style.fontSize =
        (15 + Math.random() * 30) + "px";

    heart.style.animationDuration =
        (5 + Math.random() * 7) + "s";

    heartContainer.appendChild(heart);

    setTimeout(() => {

        heart.remove();

    }, 12000);
}


/* Create hearts continuously */

setInterval(
    createHeart,
    600
);


/* =========================
   HEART EXPLOSION
========================= */

function createHeartExplosion() {

    for (let i = 0; i < 40; i++) {

        const heart =
            document.createElement("div");

        heart.innerHTML = "❤️";

        heart.style.position = "fixed";

        heart.style.left = "50%";
        heart.style.top = "50%";

        heart.style.fontSize =
            (15 + Math.random() * 30) + "px";

        heart.style.zIndex = "20000";

        heart.style.pointerEvents =
            "none";

        const x =
            (Math.random() - .5) * 1000;

        const y =
            (Math.random() - .5) * 1000;

        heart.animate(
            [
                {
                    transform:
                        "translate(-50%, -50%) scale(0)"
                },

                {
                    transform:
                        `translate(${x}px, ${y}px)
                         scale(1.5)`,
                    opacity: 0
                }
            ],
            {
                duration:
                    1500 +
                    Math.random() * 1000,

                easing:
                    "cubic-bezier(.2,.8,.2,1)"
            }
        );

        document.body.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 2500);
    }
}


/* =========================
   LOVE POPUP
========================= */

function showLove() {

    document
        .getElementById("popup")
        .classList.add("show");

    createHeartExplosion();
}

function closeLove() {

    document
        .getElementById("popup")
        .classList.remove("show");
}


/* =========================
   ESC KEY
========================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Escape") {
            closeLove();
        }

    }
);


/* =========================
   INITIAL STATE
========================= */

document.body.style.overflow =
    "hidden";