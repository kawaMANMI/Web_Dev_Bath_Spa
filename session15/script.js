const boxElement = document.getElementById('box');
console.log(boxElement);

function toggleClass() {
    //code goes here
    if (boxElement.classList.contains('test')) {
        boxElement.classList.remove('test');
        console.log(boxElement);
    } else {
        boxElement.classList.add('test');
        console.log(boxElement);
    }
}


const sentence = 'The quick brown fox jumps over the lazy do'
const para = document.getElementById('sentence');
para.innerHTML = sentence