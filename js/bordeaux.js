function afficherSaison(saison) {

    let label = document.getElementById("season-label");
    let title = document.getElementById("season-title");
    let tasks = document.getElementById("season-tasks");

    let content = {

        printemps: {
            label: "MARS À MAI",
            title: "Préparer la reprise.",
            tasks: [
                "Rempoter les plantes qui manquent de place, si nécessaire.",
                "Reprendre progressivement les arrosages en observant le terreau.",
                "Semer certaines aromatiques lorsque les températures le permettent.",
                "Surveiller les dernières nuits fraîches et protéger les plantes sensibles."
            ]
        },

        ete: {
            label: "JUIN À AOÛT",
            title: "Accompagner les fortes chaleurs.",
            tasks: [
                "Arroser tôt le matin, au pied des plantes, lorsque le substrat en a besoin.",
                "Pailler les jardinières pour ralentir l'évaporation.",
                "Protéger les pots exposés au soleil brûlant pendant les épisodes de chaleur.",
                "Retirer les fleurs fanées et vérifier régulièrement l'état des feuilles."
            ]
        },

        automne: {
            label: "SEPTEMBRE À NOVEMBRE",
            title: "Préparer le ralentissement.",
            tasks: [
                "Réduire progressivement les arrosages selon la météo et les espèces.",
                "Nettoyer les feuilles mortes et retirer les parties abîmées.",
                "Planter les végétaux adaptés à une installation automnale.",
                "Vérifier le drainage des pots avant les périodes pluvieuses."
            ]
        },

        hiver: {
            label: "DÉCEMBRE À FÉVRIER",
            title: "Protéger sans trop arroser.",
            tasks: [
                "Réduire les arrosages pour les plantes en repos végétatif.",
                "Rentrer ou protéger les espèces sensibles au gel.",
                "Éviter de laisser de l'eau stagner dans les soucoupes.",
                "Profiter de cette période pour nettoyer les outils et préparer les plantations."
            ]
        }

    };

    if (content[saison]) {

        label.textContent = content[saison].label;
        title.textContent = content[saison].title;

        let texte = "";

        for (let i = 0; i < content[saison].tasks.length; i++) {
            texte += "<li>" + content[saison].tasks[i] + "</li>";
        }

        tasks.innerHTML = texte;

    }

}