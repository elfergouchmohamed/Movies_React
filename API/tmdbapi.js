const api_key = '0c0a4128ee764e648e9ddf63078767d6'

//Get Movies List

export function getFilmFromAPI(text,page){

    const url = "https://api.themoviedb.org/3/search/movie?api_key="+api_key+"&language=en-US&query="+text+"&page="+
        page
    return  (
        fetch(url)
            .then(response => response.json())
            .catch((error)=>console.log(error))
    )
}

//Get Movie Image
export function getFilmImage(text){
    const url = "https://image.tmdb.org/t/p/w500"+text
    return(url)
}

//Get Movie Details

export function getMovieDetails(id){
    const url = "https://api.themoviedb.org/3/movie/"+id+"?api_key="+api_key
    return  (
        fetch(url)
        .then(response => response.json())
        .catch((error)=>console.log(error))
    )
}