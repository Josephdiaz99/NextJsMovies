import conectarDB from "../../lib/dbConnect"
import Movie from "../../models/Movie"

const MoviePage = () => {
  return (
    <div>
        <h1>Detalle de Movie</h1>
    </div>
  )
}

export default MoviePage

export async function getServerSideProps(){
    try {
        await conectarDB()
     

   
        return {props:{movies}}
    } catch (error) {
      console.log(error)
      return {props:{success:false,error:'Error!'} }
    }
}



