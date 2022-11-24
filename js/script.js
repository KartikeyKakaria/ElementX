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
        symbol.style.display = "block";
        symbol.innerHTML = `<h1><span>${element.atomicNumber}</span>${element.symbol}<sub>${Math.floor(Number(element.atomicMass.slice(0,-3)))}</sub></h1>`;
    }
    console.log(element)
}
document.getElementById("submit").addEventListener("click", displayData)