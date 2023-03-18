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
        symbol.innerHTML = `<h1><span>${Math.floor(Number(element.atomicMass.slice(0,-3)|| element.atomicMass[0]))}</span>${element.symbol}<sub>${element.atomicNumber}</sub></h1>`;

        //display details
        const detail = document.getElementById("detail")
        detail.innerHTML = `<ul><li>Name:${element.name}</li><li>Atomic Number:${element.atomicNumber}</li><li>Atomic Mass:${Math.floor(Number(element.atomicMass.slice(0,-3)|| element.atomicMass[0] ))}</li><li>Year discovered:${element.yearDiscovered}</li><ul>`
    
    }
    else{
       swal("Element Not Found", "Please enter a correct element name","error")
    }
}
document.getElementById("submit").addEventListener("click", displayData)
