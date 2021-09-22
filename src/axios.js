import  axios from 'axios'


//todas las url de la api empezaran con esto
const instancia= axios.create({
    baseURL:"https://api.themoviedb.org/3"
})



export default instancia