function add() {
    var num1 = parseInt(document.getElementById("first").value)
    var num2 = parseInt(document.getElementById("second").value)
    sum = num1 + num2
    document.getElementById("answer").value = sum
}

function sub() {
    var num1 = parseInt(document.getElementById("first").value)
    var num2 = parseInt(document.getElementById("second").value)
    sum = num1 - num2
    document.getElementById("answer").value = sum
}

function mul() {
    var num1 = parseInt(document.getElementById("first").value)
    var num2 = parseInt(document.getElementById("second").value)
    sum = num1 * num2
    document.getElementById("answer").value = sum
}

function div() {
    var num1 = parseInt(document.getElementById("first").value)
    var num2 = parseInt(document.getElementById("second").value)
    sum = num1 / num2
    document.getElementById("answer").value = sum
}