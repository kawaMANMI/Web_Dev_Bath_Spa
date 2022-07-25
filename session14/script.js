// Dom Elements
const time = document.getElementById("time"),
    greeting = document.getElementById('greeting'),
    name1 = document.getElementById('name1'),
    focus = document.getElementById('focus');

//Show Time
function showTime() {
    let today = new Date(),
        hour = today.getHours(),
        min = today.getMinutes(),
        sec = today.getSeconds();


    // Set AM or PM

    const amPM = hour >= 12 ? 'PM' : 'AM';

    //12hr Format

    hour = hour % 12 || 12;

    //Output Time
    time.innerHTML = `${hour}<span>:</span>${addZero(min)}<span>:</span>${addZero(sec)}`;
    setTimeout(showTime, 1000);

}

//Add Zeros
function addZero(n) {
    return (parseInt(n, 10) < 10 ? '0' : '') + n;
}



//Set Background
function setBgGreet() {
    let today = new Date(),
        hour = today.getHours();
    if (hour < 12) {
        //Day time
        document.body.style.backgroundImage = "url('img/daytime.jpg')";
        greeting.textContent = 'Good Morning';
    } else if (hour < 18 && hour >= 12) {
        //Afternoon
        document.body.style.backgroundImage = "url('img/afternoon.jpg')";
        greeting.textContent = 'Good Evening';
        document.body.style.color = 'white';

    }
    else {
        //night time
        document.body.style.backgroundImage = "url('img/night.jpg')";
        greeting.textContent = 'Good Night';
        document.body.style.color = 'white';
    }
}


//Get Name
function getName() {
    if (localStorage.getItem('name1') === null) {
        name1.textContent = '[Enter name]';
    }
    else {
        name1.textContent = localStorage.getItem('name1');
    }
}


//Get Focus
function getFocus() {
    if (localStorage.getItem('focus') === null) {
        focus.textContent = '[Enter Focus]';
    }
    else {
        focus.textContent = localStorage.getItem('focus');
    }
}


function setName(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('name1', e.target.innerText)
            name1.blur();
        }
    } else {
        localStorage.setItem('name1', e.target.innerText)
    }
}



function setFocus(e) {
    if (e.type === 'keypress') {
        // Make sure enter is pressed
        if (e.which == 13 || e.keyCode == 13) {
            localStorage.setItem('focus', e.target.innerText)
            focus.blur();
        }
    } else {
        localStorage.setItem('focus', e.target.innerText)
    }
}

name1.addEventListener('keypress', setName);
name1.addEventListener('blur', setName);

focus.addEventListener('keypress', setFocus);
focus.addEventListener('blur', setFocus);

//Run
showTime();
setBgGreet();
getName();
getFocus();