function afficherJardin() {

    let plants = [];

    try {
        plants = JSON.parse(localStorage.getItem("dernierePousseGarden") || "[]");
    } catch (error) {
        plants = [];
    }

    let list = document.getElementById("garden-list");
    let total = document.getElementById("plant-total");
    let watering = document.getElementById("watering-total");

    total.textContent = plants.length;

    let today = new Date();
    let todayNumber = today.getFullYear() * 10000 +
        (today.getMonth() + 1) * 100 +
        today.getDate();

    let needsCheck = 0;

    for (let i = 0; i < plants.length; i++) {

        if (plants[i].lastWatering === "") {
            needsCheck++;
        } else {

            let dateParts = plants[i].lastWatering.split("-");
            let wateringNumber = 0;

            if (dateParts.length === 3) {
                wateringNumber = Number(dateParts[0]) * 10000 +
                    Number(dateParts[1]) * 100 +
                    Number(dateParts[2]);
            } else {
                let frenchDate = plants[i].lastWatering.split("/");
                if (frenchDate.length === 3) {
                    wateringNumber = Number(frenchDate[2]) * 10000 +
                        Number(frenchDate[1]) * 100 +
                        Number(frenchDate[0]);
                }
            }

            if (wateringNumber < todayNumber) {
                needsCheck++;
            }

        }

    }

    watering.textContent = needsCheck;

    if (plants.length === 0) {

        list.innerHTML =
            '<div class="empty-garden">' +
                '<h3>Votre carnet est encore vide.</h3>' +
                '<p>Ajoutez votre première plante avec le formulaire.</p>' +
                '<a class="text-link" href="catalogue.html">Choisir dans le catalogue ↗</a>' +
            '</div>';

    } else {

        let content = "";

        for (let i = 0; i < plants.length; i++) {

            content +=
                '<article class="garden-item">' +
                    '<div>' +
                        '<h3>' + plants[i].name + '</h3>' +
                        '<p>' + plants[i].location +
                        ' · Dernier arrosage : ' +
                        (plants[i].lastWatering || "non renseigné") +
                        (plants[i].notes ? " · " + plants[i].notes : "") +
                        '</p>' +
                    '</div>' +
                    '<div class="garden-item-actions">' +
                        '<button type="button" onclick="arroserPlante(' + plants[i].id + ')">Arrosée aujourd\'hui</button>' +
                        '<button type="button" class="delete-plant" onclick="supprimerPlante(' + plants[i].id + ')">Supprimer</button>' +
                    '</div>' +
                '</article>';

        }

        list.innerHTML = content;

    }

}


function enregistrerJardin(plants) {

    try {

        localStorage.setItem(
            "dernierePousseGarden",
            JSON.stringify(plants)
        );

        return true;

    } catch (error) {

        document.getElementById("garden-feedback").textContent =
            "Le navigateur ne permet pas d'enregistrer les données.";

        return false;

    }

}


function ajouterPlante() {

    let name = document.getElementById("garden-form").elements["plantName"].value.trim();
    let location = document.getElementById("garden-form").elements["location"].value;
    let lastWatering = document.getElementById("garden-form").elements["lastWatering"].value;
    let notes = document.getElementById("garden-form").elements["notes"].value.trim();

    let feedback = document.getElementById("garden-feedback");

    if (name === "" || location === "") {

        feedback.textContent = "Veuillez remplir les champs obligatoires.";

    } else {

        let plants = [];

        try {
            plants = JSON.parse(localStorage.getItem("dernierePousseGarden") || "[]");
        } catch (error) {
            plants = [];
        }

        plants.push({
            id: Date.now(),
            name: name,
            location: location,
            lastWatering: lastWatering,
            notes: notes
        });

        if (enregistrerJardin(plants)) {

            document.getElementById("garden-form").reset();

            feedback.textContent =
                "La plante a été enregistrée dans ce navigateur.";

            afficherJardin();

        }

    }

}


function arroserPlante(id) {

    let plants = [];

    try {
        plants = JSON.parse(localStorage.getItem("dernierePousseGarden") || "[]");
    } catch (error) {
        plants = [];
    }

    let today = new Date().toLocaleDateString();

    for (let i = 0; i < plants.length; i++) {

        if (plants[i].id === id) {
            plants[i].lastWatering = today;
        }

    }

    if (enregistrerJardin(plants)) {
        afficherJardin();
    }

}


function supprimerPlante(id) {

    let plants = [];

    try {
        plants = JSON.parse(localStorage.getItem("dernierePousseGarden") || "[]");
    } catch (error) {
        plants = [];
    }

    let nouvelleListe = [];

    for (let i = 0; i < plants.length; i++) {

        if (plants[i].id !== id) {
            nouvelleListe.push(plants[i]);
        }

    }

    if (enregistrerJardin(nouvelleListe)) {
        afficherJardin();
    }

}


function viderJardin() {

    let plants = [];

    try {
        plants = JSON.parse(localStorage.getItem("dernierePousseGarden") || "[]");
    } catch (error) {
        plants = [];
    }

    if (plants.length === 0) {
        return;
    }

    if (confirm("Supprimer toutes les plantes de ce carnet ?")) {

        plants = [];

        if (enregistrerJardin(plants)) {

            afficherJardin();

            document.getElementById("garden-feedback").textContent =
                "Le carnet a été vidé.";

        }

    }

}