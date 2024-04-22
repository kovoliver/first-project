/*
    Az aszinkron függvények aszinkron folyamatokat kezelnek.
    Olyan folyamatokat, amelyeknél a végeredmény időben
    eltér a folyamat kezdésétől.
*/

function serverMessage() {
    const rand = Math.floor(Math.random() * 100) + 1;

    return new Promise((resolve, reject)=> {
        setTimeout(()=> {
            reject(rand);
        }, 1000);
    });
}

async function getServerMessage() {
    try {
        const message = await serverMessage();
        console.log(message);
    } catch(err) {
        console.log(err);
    }
}

serverMessage()
.then((message)=> {
    console.log("message: " + message);
}).catch((err)=> {
    console.log("err: " + err);
});

getServerMessage();