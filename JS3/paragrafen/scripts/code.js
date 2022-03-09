const setup = () => {
    let pBelangrijk = document.getElementsByClassName("belangrijk");
    for (let i=0; i<pBelangrijk.length;i++){
        pBelangrijk[i].className+=" opvallend";
    }
}
window.addEventListener("load", setup);