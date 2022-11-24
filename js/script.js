document.getElementById("submit").addEventListener("click", () => {
    const elementName = document.getElementById("elementName").value;
    fetch(`https://neelpatel05.pythonanywhere.com/element/atomicname?atomicname=${elementName}`)
        .then(rep => rep.json())
        .then(data => console.log(data))
        .catch(err => console.log(err))
})