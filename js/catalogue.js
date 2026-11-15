function filtrerPlantes() {

    let search = document.getElementById("search-plant");
    let light = document.getElementById("filter-light");
    let care = document.getElementById("filter-care");
    let list = document.getElementById("plant-list");
    let count = document.getElementById("catalogue-count");
    let empty = document.getElementById("no-plants");

    let cards = list.getElementsByClassName("plant-card");

    let term = search.value.trim().toLowerCase();
    let visible = 0;

    for (let i = 0; i < cards.length; i++) {

        let name = cards[i].textContent.toLowerCase();
        let plantLight = cards[i].getAttribute("data-light");
        let plantCare = cards[i].getAttribute("data-care");

        let nameMatch = name.indexOf(term) !== -1;

        let lightMatch = light.value === "toutes" ||
            plantLight.split(" ").indexOf(light.value) !== -1;

        let careMatch = care.value === "tous" ||
            plantCare === care.value;

        if (nameMatch && lightMatch && careMatch) {
            cards[i].style.display = "block";
            visible++;
        } else {
            cards[i].style.display = "none";
        }

    }

    count.textContent = visible +
        (visible > 1 ? " plantes affichées" : " plante affichée");

    if (visible === 0) {
        empty.style.display = "block";
    } else {
        empty.style.display = "none";
    }

}


function reinitialiser() {

    document.getElementById("search-plant").value = "";
    document.getElementById("filter-light").value = "toutes";
    document.getElementById("filter-care").value = "tous";

    filtrerPlantes();

}


function ajouterAuJardin(nom) {

    let plants = [];

    try {
        plants = JSON.parse(
            localStorage.getItem("dernierePousseGarden") || "[]"
        );
    } catch (error) {
        plants = [];
    }

    plants.push({
        id: Date.now(),
        name: nom,
        location: "Intérieur",
        lastWatering: "",
        notes: "Ajoutée depuis le catalogue"
    });

    localStorage.setItem(
        "dernierePousseGarden",
        JSON.stringify(plants)
    );

    document.getElementById("catalogue-feedback").textContent =
        nom + " a été ajoutée à votre jardin.";

}