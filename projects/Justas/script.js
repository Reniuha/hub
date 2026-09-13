// Portugal carousel
const portugalPhotos = [
    {
        image: "images/portugal/portugal13.jpg",
        title: "Lisbon, Portugal",
        description: "A photo from my trip to Lisbon."
    },
    {
        image: "images/portugal/portugal03.jpg",
        title: "Lisbon, Portugal",
        description: "Exploring the city and seeing some of the sights."
    },
    {
        image: "images/portugal/portugal16.jpg",
        title: "Lisbon, Portugal",
        description: "Another photo from the trip."
    },
    {
        image: "images/portugal/portugal09.jpg",
        title: "Lisbon, Portugal",
        description: "One of the places I visited during the trip."
    },
    {
        image: "images/portugal/portugal17.jpg",
        title: "Lisbon, Portugal",
        description: "A final photo from my trip."
    }
];

let portugalIndex = 0;

function showPortugalPhoto() {
    const photo = portugalPhotos[portugalIndex];

    document.getElementById("portugal-image").src = photo.image;
    document.getElementById("portugal-title").textContent = photo.title;
    document.getElementById("portugal-description").textContent = photo.description;
    document.getElementById("portugal-counter").textContent =
        `${portugalIndex + 1} / ${portugalPhotos.length}`;
}

function changePortugal(direction) {
    portugalIndex += direction;

    if (portugalIndex < 0) {
        portugalIndex = portugalPhotos.length - 1;
    }

    if (portugalIndex >= portugalPhotos.length) {
        portugalIndex = 0;
    }

    showPortugalPhoto();
}

function openPhoto(photo) {
    document.getElementById("viewer-image").src = photo;
    document.getElementById("photo-viewer").style.display = "flex";
}

function closePhoto() {
    document.getElementById("photo-viewer").style.display = "none";
}