var num1;
var num2;
var operator;

function numPress(num) {
    var display = document.getElementById("display");
    display.value = display.value + num;
}

function opPress(op) {
    num1 = document.getElementById("display").value;
    operator = op;
    document.getElementById("display").value = "";
}

function calculate() {
    num2 = document.getElementById("display").value;
    var result;
    if (operator == "+") {
        result = parseFloat(num1) + parseFloat(num2);
    } else if (operator == "-") {
        result = parseFloat(num1) - parseFloat(num2);
    } else if (operator == "*") {
        result = parseFloat(num1) * parseFloat(num2);
    } else if (operator == "/") {
        result = parseFloat(num1) / parseFloat(num2);
    }
    document.getElementById("display").value = result;
}
