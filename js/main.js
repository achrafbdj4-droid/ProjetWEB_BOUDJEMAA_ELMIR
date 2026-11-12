function ouvrirMenu() {

    let menuButton = document.getElementsByClassName("menu-toggle")[0];
    let navigation = document.getElementsByClassName("nav")[0];

    if (menuButton && navigation) {

        navigation.classList.toggle("is-open");

        if (navigation.classList.contains("is-open")) {
            menuButton.textContent = "Fermer";
        } else {
            menuButton.textContent = "Menu";
        }

    }

}