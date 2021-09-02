//
//
//
//
function colorMe(div) {
    document.getElementById(div.id).style.color = `rgb(${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)},${Math.floor(Math.random() * 256)})`;
}

function majik(divid) {
    let b = document.getElementById(divid).style;
    b.display == "block" ? b.display = "none" : b.display = "block";
}

function button(event) {
    switch (event.key) {
        case "Tab":
            majik('apple');
            break;
        case "i":
            document.getElementById('main-heading').innerHTML = "You SUck";
            break;
        case "b":
            htmlcss();
            break;
    }
}

function mini() {
    document.getElementById("apple-mini").style.display = "none";
    document.getElementById("apple").style = "width:50%;display:block;left:50%;top:95.5%;";
}

function maxi() {
    document.getElementById("apple").style = "width:50%;display:block;left:25%;top:210px;";
    document.getElementById("apple-mini").style.display = "block";
}

function htmlcss() {
    let d = document.createElement("div"),
    alignB = document.createElement("input");
    alignB.type = "button";
    alignB.value = "Alignment";
    alignB.onclick = () => {
        sizeS.style = "width:50%;margin:auto;";
        alignB.style = "margin-left:44%;";
        textI.style = "margin-left:38%;";
        textP.style = "text-align:center;";
    }

    let textI = document.createElement("input");
    textI.type = "text";
    textI.oninput = () => textP.innerHTML = textI.value;

    let textP = document.createElement("p");
    textP.innerHTML = "Your Text Here";

    let sizeS = document.createElement("input");
    sizeS.type = "range";
    sizeS.min = "2";
    sizeS.max = "160";
    sizeS.oninput = () => textP.style = `text-align:center;font-size:${sizeS.value}pt;`;

    d.appendChild(alignB);
    d.appendChild(document.createElement("br"));
    d.appendChild(textI);
    d.appendChild(document.createElement("br"));
    d.appendChild(sizeS);
    d.appendChild(document.createElement("br"));
    d.appendChild(textP);

    document.body.appendChild(d);

}
