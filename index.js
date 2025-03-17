document.addEventListener("DOMContentLoaded", main);

const ramens = [
    { id: 1, name: "Shoyu Ramen", restaurant: "Ichiran", image: "https://moringa.instructure.com/courses/967/files/517801/preview", rating: 10, comment: "Delicious!" },
    { id: 2, name: "Miso Ramen", restaurant: "Menya", image: "https://moringa.instructure.com/courses/967/files/517800/preview", rating: 8, comment: "Very flavorful!" },
    { id: 3, name: "Tonkotsu Ramen", restaurant: "Ramen-ya", image: "https://moringa.instructure.com/courses/967/files/517799/preview", rating: 6, comment: "Rich broth!" },
    { id: 4, name: "Naruto Ramen", restaurant: "Ichiraku", image: "https://moringa.instructure.com/courses/967/files/517797/preview", rating: 9, comment: "Best ramen ever!" }
];

function displayRamens() {
    const menu = document.getElementById("ramen-menu");
    menu.innerHTML = "";

    ramens.forEach(ramen => {
        const ramenItem = document.createElement("div");
        ramenItem.className = "ramen-item";

        const img = document.createElement("img");
        img.src = ramen.image;
        img.alt = ramen.name;
        img.addEventListener("click", () => handleClick(ramen));

        const name = document.createElement("div");
        name.className = "ramen-name";
        name.textContent = ramen.name;

        ramenItem.appendChild(img);
        ramenItem.appendChild(name);
        menu.appendChild(ramenItem);
    });

    // Show first ramen by default
    if (ramens.length > 0) {
        handleClick(ramens[0]);
    }
}

function handleClick(ramen) {
    document.getElementById("ramen-name").textContent = ramen.name;
    document.getElementById("ramen-restaurant").textContent = ramen.restaurant;
    document.getElementById("ramen-image").src = ramen.image;
    document.getElementById("ramen-rating").textContent = `${ramen.rating}/10`;
    document.getElementById("ramen-comment").textContent = ramen.comment;
}

function addSubmitListener() {
    const form = document.getElementById("new-ramen-form");
    form.addEventListener("submit", event => {
        event.preventDefault();

        const newRamen = {
            id: ramens.length + 1,
            name: document.getElementById("name").value,
            restaurant: document.getElementById("restaurant").value,
            image: document.getElementById("image").value,
            rating: document.getElementById("rating").value,
            comment: document.getElementById("comment").value
        };

        ramens.push(newRamen);
        displayRamens();
        form.reset();
    });
}

function main() {
    displayRamens();
    addSubmitListener();
}
