
//contrasena de la api
const APIKEY="1bd024f1ef072f6ed5a6d5b628568715";

const requests={
    fetchTraining:`/trending/all/week?api_key=${APIKEY}&language=es-ES`,
    fecthNetflixOriginal:`/discover/tv?api_key=${APIKEY}&with_networks=213&language=es-ES`,
    fetchTopRated:`/movie/top_rated?api_key=${APIKEY}&language=es-ES`,
    fetchActionMovies:`/discover/movie?api_key=${APIKEY}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${APIKEY}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${APIKEY}&with_genres=27`,
    fetchRomanceMovies:`/discover/movie?api_key=${APIKEY}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${APIKEY}&with_genres=99`,


}

export default requests