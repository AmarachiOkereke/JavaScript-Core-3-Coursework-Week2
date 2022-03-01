
function fetchDogImage() {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(response => response.json())
        .then(data => {
    let img = document.createElement("img");
    img.src = data.message
    let listEl = document.createElement("li");
    listEl.appendChild(img);
    let ul = document.getElementById("dog-img");
            ul.appendChild(listEl);
    
        })
        .catch(error => {
            console.log('Oooooops!!! Check your link!');
    })
    
}
let button = document.getElementById("btn-image");
button.addEventListener("click", () => {
fetchDogImage();
});
