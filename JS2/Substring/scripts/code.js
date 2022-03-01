const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click",Substring);
}

const Substring = () => {
    let start = document.getElementById("startValue").value;
    let end = document.getElementById('endValue').value;
    let zin = document.getElementById("txtInput").value;
    zin = zin.substr(start, end-start);
    document.getElementById("txtOutput").innerHTML=zin;
}

window.addEventListener("load", setup);