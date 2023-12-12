let base = 10;

window.onload = function() {
    console.log("Loaded! ");
}

const setColor = elem => {
    for(let i = 0; i < elem.length; i++) {
        elem[i][0].style.backgroundColor = elem[i][1];
        elem[i][0].style.color = elem[i][2];
    }
}

const toNaN = () => {
    document.querySelectorAll("hasil").forEach(elem => {
        elem.innerHTML = "";
    });
    document.getElementById("input").value = "";
}

const Output = (elem, val) => {
    console.log(elem);
    console.log(val);
    for(let i = 0; i < elem.length; i++) {
        elem[i].innerHTML = val[i];
    }
}

function Convert(input) {
    console.log(base);
    switch(base) {
        case 2 : {
            let Dec = parseInt(input, base);
            let Hex = Dec.toString(16);
            let Oct = Dec.toString(8);
            oBin = input;

            Output([DecOut, BinOut, HexOut, OctOut], [Dec, input, Hex, Oct]);
            break;
        }

        case 8 : {
            let Dec = parseInt(input, base);
            let Bin = Dec.toString(2);
            let Hex = Dec.toString(16);
            oBin = Bin;

            Output([DecOut, BinOut, HexOut, OctOut], [Dec, Bin, Hex, input]);
            break;
        }

        case 10 : {
            let Bin = Number(input).toString(2);
            let Hex = Number(input).toString(16);
            let Oct = Number(input).toString(8);
            oBin = Bin;

            console.log(Hex);

            Output([DecOut, BinOut, HexOut, OctOut], [input, Bin, Hex, Oct]);
            break;
        }

        case 16 : {
            let Dec = parseInt(input, base);
            let Bin = Dec.toString(2);
            let Oct = Dec.toString(8);
            oBin = Bin;

            Output([DecOut, BinOut, HexOut, OctOut], [Dec, Bin, input, Oct]);
            break;
        }
    }
}

function changeBase(button, iBase) {
    base = iBase;
    toNaN();
    setColor([
        [button, 'blue', 'white'], 
        [Dec, iBase === 10 ? 'blue' : 'white',iBase === 10 ? 'white' : 'black'], 
        [Hex, iBase === 16 ? 'blue' : 'white',iBase === 16 ? 'white' : 'black'], 
        [Oct, iBase === 8 ? 'blue' : 'white', iBase === 8 ? 'white' : 'black'], 
        [Bin, iBase === 2 ? 'blue' : 'white', iBase === 2 ? 'white' : 'black']
    ]);
}
let oBin;
document.getElementById("input").addEventListener("keypress", function(event) {
    if (event.key === 'Enter') {
    event.preventDefault();
    Calc.click();
    const hasil = document.getElementsByClassName("hasil")[0];
    hasil.style.height = ((oBin.toString()).length >= 24) ? 'auto' : '180px';
    hasil.style.width = ((oBin.toString()).length >= 24) ? 'auto' : '250px';
    }
});