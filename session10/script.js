function myFunction() {
    document.getElementById("demo").innerHTML = "My new text";
}
function turnOn() {
    document.getElementById("myImage").src = "pic_bulbon.gif";
}
function turnOff() {
    document.getElementById("myImage").src = "pic_bulboff.gif";
}

function calculate(pi1, pi2) {
    let answer = pi1 - pi2;
    return answer
}

function updateResult() {
    let n1, n2, output, anw;
    n1 = document.getElementById("num1").value;
    n2 = document.getElementById("num2").value;
    anw = calculate(n1, n2);
    output = "<hr><br>" + anw + "<hr>";

    document.getElementById("answer").innerHTML = output;
}

function BMIConverter() {
    let h, w, ans;
    h = document.getElementById("height1").value;
    w = document.getElementById("weight2").value;
    ans = w / (h * h)
    document.getElementById("result").innerHTML = ans;
}

function Changeimage() {
    let ss;
    ss = document.getElementById("animal").src;
    if (ss.includes("cat")) {
        document.getElementById("animal").src = "dog.jpg";
    }
    else {
        document.getElementById("animal").src = "cat.jpg";
    }
}
