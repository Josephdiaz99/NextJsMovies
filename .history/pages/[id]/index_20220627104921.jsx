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

export async function getServerSideProps({params}){
    try {
        await conectarDB()
        
        const movie=await Movie.findById(params.id).lean()

   
        return {props:{success:false,error:'Error!'} }
    } catch (error) {
      console.log(error)
      return {props:{success:false,error:'Error!'} }
    }
}



