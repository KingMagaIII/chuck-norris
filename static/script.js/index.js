let button = document.querySelector("#button");
button.addEventListener('click', () => {
    let categoria = document.querySelector("#categories").value
    let response = fetch("https://api.chucknorris.io/jokes/random?category=" + categoria.toLowerCase())
        .then(response => response.json())
        .then(data => {
            document.querySelector("#quote").innerHTML = data.value
        })
});