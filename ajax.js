/*
    A JavaScript-ben például a fetch API,
    ami alkalmas a HTTP kérések és válaszok 
    kezelésére. Ez egy promise alapú megoldás.
*/

// fetch("https://randomuser.me/api/")
// .then((response)=> {
//     console.log(response);

//     for(const h of response.headers) {
//         console.log(h);
//     }

//     return response.json();
// }).then((json)=> {
//     console.log(json);
// });

async function getRandomUser() {
    /*
        A query string URL változókból áll.
        Az url-ben a query string elejét a '?' karakter jelzi.
        kulcs=érték&kulcs2=érték2
    */
    const response = await fetch("https://randomuser.me/api?results=100");
    const json = await response.json();
    console.log(json);
}

async function getCsv() {
    const response = await fetch("https://randomuser.me/api?results=100&format=csv");
    const text = await response.text();
    const lines = text.split('\n');
    
    for(const line of lines) {
        const data = line.split(',');

        console.log(data);
    }
}

async function getYaml() {
    const response = await fetch("https://randomuser.me/api?results=100&format=xml");
    const text = await response.text();
    console.log(text);
}

//getCsv();

//getRandomUser();

//getYaml();

function getUrlParams() {
    const urlParams = new URLSearchParams(location.search);

    for(const param of urlParams.entries()) {
        console.log(param);
    }
}

//getUrlParams();

async function addProduct(product) {
    const response = await fetch("https://dummyjson.com/products", {
        method:"GET",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(product)
    });

    const json = await response.json();
    console.log(json);
}

addProduct({title:"iPhone 10"});

console.log("Ez itt a módosítás");