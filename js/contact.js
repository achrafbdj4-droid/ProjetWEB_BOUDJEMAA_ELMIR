function envoyerMessage() {

    let name = document.getElementById("contact-form").elements["name"].value.trim();
    let email = document.getElementById("contact-form").elements["email"].value.trim();
    let subject = document.getElementById("contact-form").elements["subject"].value.trim();
    let message = document.getElementById("contact-form").elements["message"].value.trim();

    let feedback = document.getElementById("contact-feedback");

    if (name === "" || email === "" || subject === "" || message === "") {

        feedback.textContent = "Veuillez remplir tous les champs.";

    } else {

        feedback.textContent = "Merci " + name + " ! Votre message a bien été pris en compte.";

        document.getElementById("contact-form").reset();

    }

}