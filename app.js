const form = document.querySelector('#searchForm');



const makeImages = (shows) => {
    for (let i of shows) {
        if (i.show.image) {
            const newImg = document.createElement('IMG');
            newImg.src = i.show.image.medium;
            newImg.className = "custom img-fluid";
            document.body.append(newImg);
        }

    }
}

form.addEventListener('submit', async function (e) {


    e.preventDefault();
    const searchTerm = form.elements.query.value;
    const config = { params: { q: searchTerm } };
    const res = await axios.get(`https://api.tvmaze.com/search/shows?q`, config);
    makeImages(res.data);
    form.elements.query.value = '';
})






