const setup = () => {
    let btnHerbereken = document.getElementById("btnHerbereken");
    btnHerbereken.addEventListener("click",update);

    update();
}

const update = () => {
    let txtBtws = document.getElementsByClassName("btw");
    let txtAantallen = document.getElementsByClassName("aantal");
    let txtPrijzen = document.getElementsByClassName("prijs");
    let txtSubtotalen = document.getElementsByClassName("subtotaal");
    let txtTotaal = document.getElementsByClassName("totaal")[0];
    let totaal = 0;


    for(let i = 0; i < txtBtws.length; i++){
        let aantal = parseFloat(txtAantallen[i].value, 10);
        let btw = parseFloat(txtBtws[i].textContent, 10);
        let prijs = parseFloat(txtPrijzen[i].textContent, 10);
        let subtotaal = aantal * prijs * (1+(btw/100));
        totaal += subtotaal;

        txtSubtotalen[i].textContent = subtotaal.toFixed(2) + " EUR";
    }

    txtTotaal.textContent = totaal.toFixed(2) + " EUR";

}

window.addEventListener("load", setup);