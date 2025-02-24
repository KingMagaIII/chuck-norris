let button = document.querySelector("#button");
button.addEventListener('click', async () => {
    let categoria = document.querySelector("#categories").value
    if (categoria == "No category") {
        document.querySelector("#quote").innerHTML = "No category selected"
    } else {
        let response = await fetch("https://api.chucknorris.io/jokes/random?category=" + categoria.toLowerCase())
            .then(response => response.json())
            .then(data => {
                document.querySelector("#quote").innerHTML = data.value
            })
    }
});


