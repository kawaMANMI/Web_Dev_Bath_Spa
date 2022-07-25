var k = 0;
var varr = [];
function adding_text() {
    varr[k] = document.getElementById("text1").value;
    console.log(varr[k]);
    k++;
}


function donefunc() {
    let tt = [];

    for (let i = 0; i < varr.length; i++) {
        tt += varr[i] + "<br>";
    }
    document.getElementById("print_para").innerHTML = tt;
}


var Mylist = [
    "apple",
    "banana",
    "orange",
    "mango",
    "grapes",
    "pineapple"
];
var rr = Mylist.length;

function Checkfruit() {
    let ss = document.getElementById("text2").value;
    ss = ss.toLowerCase();
    if (Mylist.includes(ss) == true) {
        window.alert("The fruit is already exist in the list");
    }
    else {
        Mylist[rr] = ss;
        rr++;
        window.alert("The fruit has been added to the list");
    }
    console.log(Mylist);
}


