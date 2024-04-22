/*
    Az aszinkron folyamat új végrehajtási szálat indít.
    Az aszinkron folyamatok nem blokkolják 
    a többi folyamat végrehajtását.
*/

setTimeout(()=> {
    console.log("Ez előrrébb van.")
}, 2000);

console.log("Mint ez.");

let counter = 10;

const id = setInterval(()=> {
    counter--;
    console.log("counter: " + counter);

    if(counter === 0) {
        clearInterval(id);
    }
}, 1000);

const progress = document.querySelector("#progress");
let percentage = 0;

const id2 = setInterval(()=> {
    percentage++;

    progress.value = percentage;

    if(percentage === 100) {
        clearInterval(id2);
    }
}, 100);