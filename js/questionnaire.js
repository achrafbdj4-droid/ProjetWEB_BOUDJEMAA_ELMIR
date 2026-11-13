function trouverPlantes() {

    let form = document.getElementById("plant-quiz");
    let results = document.getElementById("quiz-results");
    let cardsContainer = document.getElementById("recommendations");
    let summary = document.getElementById("result-summary");

    let place = form.elements["place"].value;
    let light = form.elements["light"].value;
    let space = form.elements["space"].value;
    let time = form.elements["time"].value;
    let experience = form.elements["experience"].value;

    if (place === "" || light === "" || space === "" ||
        time === "" || experience === "") {

        summary.textContent = "Veuillez répondre à toutes les questions.";
        results.style.display = "block";
        return;

    }

    let plants = [

        {
            name: "Pothos",
            id: "pothos",
            image: "img/pothos.avif",
            light: ["faible", "moyenne"],
            places: ["interieur"],
            care: "facile",
            space: ["petit", "moyen"],
            description: "Une plante retombante qui tolère une lumière indirecte et demande un entretien modéré."
        },

        {
            name: "Sansevieria",
            id: "sansevieria",
            image: "img/sansevieria.avif",
            light: ["faible", "moyenne", "forte"],
            places: ["interieur"],
            care: "facile",
            space: ["petit", "moyen"],
            description: "Une plante robuste qui supporte plusieurs expositions et des arrosages espacés."
        },

        {
            name: "Monstera",
            id: "monstera",
            image: "img/monstera.avif",
            light: ["moyenne", "forte"],
            places: ["interieur"],
            care: "modere",
            space: ["moyen", "grand"],
            description: "Une plante d'intérieur qui apprécie une pièce lumineuse sans soleil direct intense."
        },

        {
            name: "Chlorophytum",
            id: "chlorophytum",
            image: "img/chlorophytum.avif",
            light: ["moyenne", "forte"],
            places: ["interieur"],
            care: "facile",
            space: ["petit", "moyen"],
            description: "Une plante facile à multiplier, adaptée à une pièce claire."
        },

        {
            name: "Basilic",
            id: "basilic",
            image: "img/basilic.avif",
            light: ["forte"],
            places: ["balcon", "jardin"],
            care: "modere",
            space: ["moyen", "grand"],
            description: "Une aromatique qui aime la lumière et un terreau maintenu légèrement frais."
        },

        {
            name: "Lavande",
            id: "lavande",
            image: "img/lavande.avif",
            light: ["forte"],
            places: ["balcon", "jardin"],
            care: "facile",
            space: ["moyen", "grand"],
            description: "Une plante de plein soleil qui préfère un sol drainé et peu d'eau une fois installée."
        }

    ];

    let scored = [];

    for (let i = 0; i < plants.length; i++) {

        let score = 0;

        if (plants[i].places.indexOf(place) !== -1) {
            score += 4;
        }

        if (plants[i].light.indexOf(light) !== -1) {
            score += 3;
        }

        if (plants[i].space.indexOf(space) !== -1) {
            score += 2;
        }

        if (time === "peu" && plants[i].care === "facile") {
            score += 2;
        }

        if (time !== "peu" && plants[i].care === "modere") {
            score += 1;
        }

        if (experience === "debutant" && plants[i].care === "facile") {
            score += 1;
        }

        plants[i].score = score;

        scored.push(plants[i]);

    }

    scored.sort(function(a, b) {
        return b.score - a.score;
    });

    if (scored.length > 3) {
        scored.length = 3;
    }

    let content = "";

    for (let i = 0; i < scored.length; i++) {

        let label = "Entretien modéré";

        if (scored[i].care === "facile") {
            label = "Entretien facile";
        }

        content +=
            '<article class="plant-card">' +
                '<img src="' + scored[i].image + '" alt="Illustration de ' + scored[i].name + '">' +
                '<div class="plant-card-body">' +
                    '<span class="tag">' + label + '</span>' +
                    '<h2>' + scored[i].name + '</h2>' +
                    '<p>' + scored[i].description + '</p>' +
                    '<a class="text-link" href="catalogue.html#' + scored[i].id + '">Voir dans le catalogue ↗</a>' +
                '</div>' +
            '</article>';

    }

    cardsContainer.innerHTML = content;

    summary.textContent =
        "Suggestions calculées à partir de votre espace, de la lumière et du temps disponible.";

    results.style.display = "block";

}