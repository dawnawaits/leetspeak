var toLeetMap = new Map([
    ['a', '4'],
    ['b', '6'],
    ['e', '3'],
    ['i', '|'],
    ['l', '1'],
    ['m', "(V)"],
    ['n', "(\\)"],
    ['o', '0'],
    ['s', '5'],
    ['t', '7'],
    ['v', "\\/"],
    ['w', "`\\/"]
]);

var toEngMap = new Map();

for (let [key, value] of toLeetMap) {
    toEngMap.set(value, key);
}

function toLeet() {
    let input = document.getElementById("input").value;
    var output = "";
    for (let i of input) {
        j = i.toLowerCase();
        if (toLeetMap.has(j)) {
            output += toLeetMap.get(j);
        } else {
            output += i;
        }
    }
    document.getElementById("output").value = output;
}

function toEng() {
    let input = document.getElementById("input").value;
    var output = "";
    var tokens = new Array();
    var j;
    var multi = 0;
    for (let i = 0; i < input.length; i++) {
        if (input[i] == '(') {
            j = input.slice(i, i + 3);
            multi = 2;
        } else if (input[i] == '`') {
            j = input.slice(i, i + 3);
            multi = 2;
        } else if (input[i] == '\\') {
            j = input.slice(i, i + 2);
            multi = 1;
        } else { j = input[i]; }

        if (toEngMap.has(j)) {
            output += toEngMap.get(j);
            if (multi != 0)
                i += multi;
        } else {
            output += input[i];
        }
        multi = 0;
    }
    document.getElementById("output").value = output;

}

function swap() {
    let input = document.getElementById("input");
    let output = document.getElementById("output");
    let temp = input.value;
    input.value = output.value;
    output.value = temp;
}

function clearText() {
    document.getElementById("input").value = "";
    document.getElementById("output").value = "";
}