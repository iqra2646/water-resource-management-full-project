function getGalleryData(gallery) {
    console.log(gallery); // Check the data received from the server

    const row = document.getElementById("card2");
    const div = document.createElement("div");
    div.classList.add("col-4");

    // Assuming gallery has properties like image, id
    div.innerHTML = `
        <div class="card">
            <img src="${gallery.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${gallery.id}</h5>
                <a href="https://www.pexels.com/search/water%20activity/" class="btn btn-info">More Gallery Data</a>
            </div>
        </div>`;

    row.appendChild(div);
}

function fetchGalleryData() {
    fetch("http://localhost:3000/galleries")
        .then(res => res.json())
        .then(galleries => {
            galleries.forEach(gallery => {
                getGalleryData(gallery);
            });
        })
        .catch(error => {
            console.error('Error fetching gallery data:', error);
        });
}


fetchGalleryData();
