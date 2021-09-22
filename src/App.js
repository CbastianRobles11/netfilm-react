
import './App.css';
import Row from './Row';
import Banner from './Banner'
import Navbar from './Navbar';

//importo los request
import request from './request'


function App() {
  return (
    <div className="app">

      
      

      {/* navbar component */}
      <Navbar
        
      
      />


      {/* Bannrs*/}

      <Banner 

      
      />


      {/* uso las url , las mando como  props  rows */}
      <Row 
        titulo="Netfilm Original" 
        fetchUrl={request.fecthNetflixOriginal} 
        isLargeRow={true}  
      />
      <Row titulo="Tendencia Hoy" fetchUrl={request.fetchTraining} />
      <Row titulo="Mejor Valorados" fetchUrl={request.fetchTopRated} / >
      <Row titulo="Peliculas de Accion" fetchUrl={request.fetchActionMovies} />
      <Row titulo="Peliculas de Terror" fetchUrl={request.fetchHorrorMovies} />
      <Row titulo="Peliculas de Comedia" fetchUrl={request.fetchComedyMovies} />
      <Row titulo="Peliculas Romanticas" fetchUrl={request.fetchRomanceMovies} />
      <Row titulo="Peliculas Documental" fetchUrl={request.fetchDocumentaries} />



    </div>
  );
}

export default App;
