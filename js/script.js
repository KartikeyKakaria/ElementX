const symbol = document.getElementById("symbol");
symbol.style.display = "none"

async function fetchdata() {
    const elementName = document.getElementById("elementName").value;
    return fetch(`https://neelpatel05.pythonanywhere.com/element/atomicname?atomicname=${elementName}`)
        .then(rep => rep.json())
        .then(data => {
            return data;
        })
        .catch(err => {
            console.log(err);
            return err;
        })
}

async function displayData() {
    const element = await fetchdata();

    if (element.hasOwnProperty("symbol")) {
        //display symbol
        symbol.style.display = "block";
        symbol.innerHTML = `<h1><span>${element.atomicNumber}</span>${element.symbol}<sub>${Math.floor(Number(element.atomicMass[0] ||element.atomicMass.slice(0,-3)))}</sub></h1>`;

        //display details
        const details = document.getElementById("detail")
        details.innerHTML = `<ul><li>Name:${element.name}</li><li>Atomic Number:${element.atomicNumber}</li><li>Atomic Mass:${Math.floor(Number(element.atomicMass[0] ||element.atomicMass.slice(0,-3)))}</li><li>Year discovered:${element.yearDiscovered}</li><ul>`
    }
    console.log(element)
}
document.getElementById("submit").addEventListener("click", displayData)