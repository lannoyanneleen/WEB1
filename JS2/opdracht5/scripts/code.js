const setup = () => {
    let btnWijzig=document.getElementById("btnWijzig");
    btnWijzig = document.addEventListener("click", wijzigen);
}

const wijzigen = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}

window.addEventListener("load", setup);