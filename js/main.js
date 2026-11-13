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
let images = [
    "img/pothos.avif",
    "img/monstera.avif",
    "img/lavande.avif",
    "img/chlorophytum.avif"
];

let numero = 0;


function imageSuivante() {

    numero++;

    if (numero >= images.length) {
        numero = 0;
    }

    document.getElementById("carrousel").src = images[numero];

}


function imagePrecedente() {

    numero--;

    if (numero < 0) {
        numero = images.length - 1;
    }

    document.getElementById("carrousel").src = images[numero];

}


if (document.getElementById("carrousel")) {
    setInterval(imageSuivante, 5000);
}
