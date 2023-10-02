const Dec = document.getElementById("Dec");
const Bin = document.getElementById("Bin");
const Hex = document.getElementById("Hex");
const Oct = document.getElementById("Oct");
const p1 = document.getElementById("p1");
const p2 = document.getElementById("p2");
const p3 = document.getElementById("p3");
const p4 = document.getElementById("p4");
const calc = document.getElementById("Calc");
const putOn = document.getElementById("input");
const Mbtn = document.querySelectorAll(".Mbtn button");
const p1a = "";
const p2a = "";
const p3a = "";
const p4a = "";

function funcDec() {
    var input = parseInt(document.getElementById("input").value);
    var Bin = Number(input).toString(2);
    var Hex = Number(input).toString(16);
    var Oct = Number(input).toString(8);

    p1.innerHTML = input
    p2.innerHTML = Bin;
    p3.innerHTML = Hex;
    p4.innerHTML = Oct;

}
function funcBin() {
    var input = parseInt(document.getElementById("input").value);
    var Dec = parseInt(input, 2);
    var Hex = Dec.toString(16);
    var Oct = Dec.toString(8);

    p1.innerHTML = Dec;
    p2.innerHTML = input;
    p3.innerHTML = Hex;
    p4.innerHTML = Oct;
}
function funcHex() {
    var input = document.getElementById("input").value;
    var Dec = parseInt(input, 16);
    var Bin = Dec.toString(2);
    var Oct = Dec.toString(8);

    p1.innerHTML = Dec;
    p2.innerHTML = Bin;
    p3.innerHTML = input;
    p4.innerHTML = Oct;
}
function funcOct() {
    var input = document.getElementById("input").value;
    var Dec = parseInt(input, 8);
    var Bin = Dec.toString(2);
    var Hex = Dec.toString(16);

    p1.innerHTML = Dec;
    p2.innerHTML = Bin;
    p3.innerHTML = Hex;
    p4.innerHTML = input;
}

function toDec() {
    p1.innerHTML = p1a;
    p2.innerHTML = p2a;
    p3.innerHTML = p3a;
    p4.innerHTML = p4a;
    document.getElementById("input").value = "";
    document.getElementById("Calc").setAttribute( "onClick", "javascript: funcDec();" );
    //Dec
    Dec.style.backgroundColor = 'blue';
    Dec.style.color = 'white';
    //Bin
    Bin.style.backgroundColor = 'white';
    Bin.style.color = 'black';
    //Hex
    Hex.style.backgroundColor = 'white';
    Hex.style.color = 'black';
    //Oct
    Oct.style.backgroundColor = 'white';
    Oct.style.color = 'black';
}
function toBin() {
    p1.innerHTML = p1a;
    p2.innerHTML = p2a;
    p3.innerHTML = p3a;
    p4.innerHTML = p4a;
    document.getElementById("input").value = "";
    document.getElementById("Calc").setAttribute( "onClick", "javascript: funcBin();" );
    //Dec
    Dec.style.backgroundColor = 'white';
    Dec.style.color = 'black';
    //Bin
    Bin.style.backgroundColor = 'blue';
    Bin.style.color = 'white';
    //Hex
    Hex.style.backgroundColor = 'white';
    Hex.style.color = 'black';
    //Oct
    Oct.style.backgroundColor = 'white';
    Oct.style.color = 'black';
}
function toHex() {
    p1.innerHTML = p1a;
    p2.innerHTML = p2a;
    p3.innerHTML = p3a;
    p4.innerHTML = p4a;
    document.getElementById("input").value = "";
    document.getElementById("Calc").setAttribute( "onClick", "javascript: funcHex();" );
    //Dec
    Dec.style.backgroundColor = 'white';
    Dec.style.color = 'black';
    //Bin
    Bin.style.backgroundColor = 'white';
    Bin.style.color = 'black';
    //Hex
    Hex.style.backgroundColor = 'blue';
    Hex.style.color = 'white';
    //Oct
    Oct.style.backgroundColor = 'white';
    Oct.style.color = 'black';
}
function toOct() {
    p1.innerHTML = p1a;
    p2.innerHTML = p2a;
    p3.innerHTML = p3a;
    p4.innerHTML = p4a;
    document.getElementById("input").value = "";
    document.getElementById("Calc").setAttribute( "onClick", "javascript: funcOct();" );
    //Dec
    Dec.style.backgroundColor = 'white';
    Dec.style.color = 'black';
    //Bin
    Bin.style.backgroundColor = 'white';
    Bin.style.color = 'black';
    //Hex
    Hex.style.backgroundColor = 'white';
    Hex.style.color = 'black';
    //Oct
    Oct.style.backgroundColor = 'blue';
    Oct.style.color = 'white';
}
putOn.addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
    event.preventDefault();
        calc.click();
    }
});