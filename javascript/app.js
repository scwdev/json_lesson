const $main = $('main');

////////////////////
// AJAX JSON REQUEST

$.ajax('./json/data.json')

// WHAT TO DO WITH DATA HUMAN?


.then((data) => {
    console.log(data)
    $main.append($('<section>').attr('id','movie-list'))
    data.forEach((movie) => {
        $('#movie-list').append($('<div>').html(`<h2 class='movie-title'>${movie.title}<h2>
        <h3 class='movie-release'>${movie.release_year}</h3>
        <img src="${movie.image}"/>`))
    })

})
.catch((error) => {console.log(error)})


