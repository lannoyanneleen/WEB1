const setup = () => {
    let gemeentes = [];
    let stoppen=false;

    while(!stoppen) {
        let input = prompt("Geef een gemeente in");
        stoppen=(input==null || input.trim().toLowerCase() == "stop");
        if(!stoppen){
            gemeentes.push(input);
        }
    }
    gemeentes.sort(compare);

    voegGemeentesToe(gemeentes);
};

const compare = (a,b) => {
    return a.localeCompare(b);
};

const voegGemeentesToe = (gemeentes) => {
    let div = document.getElementById("gemeentes");
    let htmlTekst ="<select>";
    for(let i=0; i<gemeentes.length; i++){
        htmlTekst+="<option>"+gemeentes[i]+"</option>";
    }
    htmlTekst+="</select>";
    div.innerHTML=htmlTekst;
};

window.addEventListener("load", setup);