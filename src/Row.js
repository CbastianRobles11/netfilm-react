import React, { useState,useEffect } from 'react'

//para funcione youtube===================
import Youtube from "react-youtube";

import movieTrailer from 'movie-trailer'
// ==============================================

import './Row.css'

//importamos el axios
import axios from './axios'


//base imagenes si no no saldra
const base_url= "https://image.tmdb.org/t/p/original"






export default function Row({titulo ,fetchUrl , isLargeRow}) {

    //empiea como un array vacio
    const [movies,setMovies]= useState([]);

    //trailer 
    const [trailerUrl, settrailerUrl] = useState("")

    //cada vexz que cargue hacer una solicitud a tmdb
    useEffect(() => {
       //conrrer una cuando la dila carga y no volverla a cargar
        async function fetchData(){

            //aki uniria  el link de axios+ el fecth que mandamos
            const request= await axios.get(fetchUrl)

            //data
            // console.log(request);

            //data completa
            
            //console.log(request.data.results);

            //lo pasamos al set Movies
            setMovies(request.data.results)


            return request

        }

        //llamamos a la funcion 
        fetchData()

        //cada vez que cargue fetch url sino demora mucho en cargar
    }, [fetchUrl])


    //aki podremos ver lo que cargo la api 
    // console.table(movies);


    //el je=son para opts
    const opts={
        height:"390",
        with:"100%",
        playerVars:{

            autoplay:1
        }
    };

    const handleClick=(movie)=> {
          if(trailerUrl )  {
              settrailerUrl("")
          }else{
              movieTrailer(movie?.name || "")
              .then(url=>{
                  
                const urlParams= new URLSearchParams( new URL(url).search);
                settrailerUrl(urlParams.get("v"))

              }).catch(error=> console.log(error) )
          }
    }

    

    return (
        <div className="row">
            
           
            {/* titulo */}
            <h2>{titulo}</h2>

            {/* container con posters */}
            <div className="row__posters" >


                {movies.map((movie)=>{
                    return (
                        <img 
                        key={movie.id}
                        onClick={()=> handleClick(movie) }
                        className={`row__poster ${isLargeRow && "row__posterLarge" } ` }
                        src={`${base_url}${isLargeRow? movie.poster_path : movie.backdrop_path}` }   alt={movie.name} 
                        
                        />
                    );
                })}

            </div>

                {/* // el link de youtube o el video se reproduce aki */}
            {trailerUrl && <Youtube videoId={trailerUrl} opts={opts} />}


        </div>
    )
}

