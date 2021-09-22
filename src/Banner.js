import React, { useState, useEffect} from 'react'

import './Banner.css'


//importamos el axios con la url que necesitamos
import axios from './axios'
//importamos nuestros request tambien
import requests from './request'


export default function Banner() {

    //empieza vacio la peliculas
    const [movie, setMovie]=useState([])


    //carga cuando carga el banner
    useEffect(() => {
        
        async function  fetchData(){

            const request= await axios.get(requests.fecthNetflixOriginal)
            
            let pelicula= request.data.results

            // console.log(pelicula);
             // coge una de las peliculas de netfliz al azar
            // console.table(pelicula[Math.floor(Math.random() * pelicula.length)]);
            setMovie(pelicula[Math.floor(Math.random() * pelicula.length)])


            return request

        }

        fetchData()

    }, [])


    console.log(movie);
    function limitarCaracteres(str,n) {
        // si str.lenght  es mayor a n entonces  substr(ini,longitud)
        return str?.length>n ? str.substr(0,n-1)+ "...." :str;
    }

    return (
        <header className="banner"
            style={{

                backgroundSize:"cover",
                backgroundImage:`url("https:/image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
                backgroundPosition:"center center"
            }}
        >

            <div className="banner__contents">
                {/* fondo la imagen */}


            {/* titulo  */}
            <h1 className="banner__title"> 
                {movie?.title || movie?.name || movie?.original_name }
            </h1>

             {/* div con 2 botones */}
            <div className="banner__buttons">
                    <button className="banner__button">Ver</button>

                    <button className="banner__button">Mi Lista</button>
            </div>           


            {/* descripcion */}
            <h1 className="banner__description"> { limitarCaracteres(movie?.overview,150) }  </h1>

            </div>

            <div className="banner--fadeBottom" >

            </div>
            

        </header>
    )
}
