let personen = [];

const vulPersoonOpBasisVanUserInterface = (persoon) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    persoon.voornaam = txtVoornaam.value.trim();

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    persoon.familienaam = txtFamilienaam.value.trim();

    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    persoon.geboorteDatum = new Date(txtGeboorteDatum.value.trim());

    let txtEmail = document.getElementById("txtEmail");
    persoon.email = txtEmail.value.trim();

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    persoon.aantalKinderen = parseInt(txtAantalKinderen.value.trim());
};

const vulUserInterfaceOpBasisVanPersoon = (persoon) => {
    let txtVoornaam = document.getElementById("txtVoornaam");
    txtVoornaam.value = persoon.voornaam;

    let txtFamilienaam = document.getElementById("txtFamilienaam");
    txtFamilienaam.value = persoon.familienaam;

    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    txtGeboorteDatum.value = persoon.geboorteDatum.toISOString().substring(0, 10);

    let txtEmail = document.getElementById("txtEmail");
    txtEmail.value = persoon.email;

    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    txtAantalKinderen.value = persoon.aantalKinderen;
};

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length - 1;
};

const updatePersoonInLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = lstPersonen.options[lstPersonen.selectedIndex];
    option.innerHTML = persoon.voornaam + " " + persoon.familienaam;
};

const bewaarBewerktePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    valideer();
    // zijn er elementen als invalid?
    let elements = document.getElementsByClassName("invalid");
    if (elements.length == 0) {
        // alles in orde, we mogen bewaren
        let persoon = {};
        if (lstPersonen.selectedIndex == -1) {
            // nieuwe persoon bewaren
            vulPersoonOpBasisVanUserInterface(persoon);
            personen.push(persoon); // toevoegen aan interne lijst
            voegPersoonToeAanLijstInUserInterface(persoon);
        } else {
            // bestaande persoon wijzigen
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonOpBasisVanUserInterface(persoon);
            updatePersoonInLijstInUserInterface(persoon);
        }
    }
};

const bewerkNieuwePersoon = () => {
    let lstPersonen = document.getElementById("lstPersonen");
    let txtVoornaam = document.getElementById("txtVoornaam");
    let txtFamilienaam = document.getElementById("txtFamilienaam");
    let txtGeboorteDatum = document.getElementById("txtGeboorteDatum");
    let txtEmail = document.getElementById("txtEmail");
    let txtAantalKinderen = document.getElementById("txtAantalKinderen");
    txtVoornaam.value = "";
    txtFamilienaam.value = "";
    txtGeboorteDatum.value = "";
    txtEmail.value = "";
    txtAantalKinderen.value = "";
    lstPersonen.selectedIndex = -1;
    clearAllErrors();
};

const bewerkGeselecteerdePersoon = (e) => {
    let index = e.target.selectedIndex;
    let persoon = personen[index];
    vulUserInterfaceOpBasisVanPersoon(persoon);

    clearAllErrors();
};

const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.addEventListener("change", bewerkGeselecteerdePersoon);
};

window.addEventListener("load", setup);