function ff(x) {
    var temp = document.getElementById("text1").value;
    const sss = [".", "*", "/", "+", "-"];
    const ssss = ["*", "/", "+", "-"];
    if (temp.includes(x) === true && sss.includes(x) === true) {
    }
    else {
        document.getElementById("text1").value += x;
    }
}
function calculate() {
    var p = document.getElementById("text1").value;
    var q = eval(p);
    document.getElementById("text1").value = q;
}

function clearScreen() {
    document.getElementById("text1").value = "";
}


