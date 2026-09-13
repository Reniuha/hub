const sections = document.querySelectorAll('.colorSection');

function hexToRgb(hex) {
    const bigint = parseInt(hex.slice(1), 16);

    return {
        r: (bigint >> 16) & 255,
        g: (bigint >> 8) & 255,
        b: bigint & 255
    };
}

function mix(c1, c2, t) {
    return {
        r: Math.round(c1.r + (c2.r - c1.r) * t),
        g: Math.round(c1.g + (c2.g - c1.g) * t),
        b: Math.round(c1.b + (c2.b - c1.b) * t)
    };
}

function updateColor() {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    const sectionIndex = Math.min(
        Math.floor(scrollY / viewportHeight) - 1,
        sections.length - 2
    );

    if (sectionIndex < 0) {
        document.body.style.background = '#4fa1d2';
        return;
    }

    const progress =
        (scrollY - viewportHeight * (sectionIndex + 1)) /
        viewportHeight;

    const c1 = hexToRgb(sections[sectionIndex].dataset.color);
    const c2 = hexToRgb(sections[sectionIndex + 1].dataset.color);

    const mixed = mix(c1, c2, Math.max(0, Math.min(1, progress)));

    document.body.style.background =
        `rgb(${mixed.r}, ${mixed.g}, ${mixed.b})`;
}

window.addEventListener('scroll', updateColor);
window.addEventListener('resize', updateColor);

updateColor();




const boat = document.querySelector('.boatWrapper');
const iceberg = document.querySelector('.iceberg');
const explosion = document.querySelector('.explosion');

let explosionTriggered = false;
let explosionTimer;


function updateBoat() {
    const ocean = document.querySelector('.oceanStart');

    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;

    const startScroll = viewportHeight * 0.1;
    const endScroll = viewportHeight * 0.6;

    const progress = Math.max(0, Math.min(1, (scrollY - startScroll) / (endScroll - startScroll)));

    const oceanWidth = ocean.clientWidth;

    const startX = oceanWidth * 0.05;

    const icebergX = oceanWidth - 50 - iceberg.offsetWidth;

    const collisionX = icebergX - 150;

    const boatX = startX + (collisionX - startX) * progress;

    boat.style.transform = `translateX(${boatX - startX}px)`;

    if (progress >= 1) {
        if (!explosionTriggered) {
            explosionTriggered = true;

            explosion.style.display = 'block';

            explosion.style.left =
                `${collisionX + iceberg.offsetWidth / 2 - explosion.offsetWidth / 2}px`;

            explosion.style.top =
                `${iceberg.offsetTop - 20}px`;

            boat.classList.add('sinking');

            explosionTimer = setTimeout(() => {
                explosion.style.display = 'none';
            }, 800);
        }
    }
}

window.addEventListener('scroll', updateBoat);
window.addEventListener('resize', updateBoat);

updateBoat();
