import conectarDB from "../../lib/dbConnect"
import Movie from "../../models/Movie"

const MoviePage = ({success,error,movie}) => {
    console.log(success)
    console.log(error)
    console.log(movie)
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
        movie._id=`${movie._id} `
        console.log(movie)
        
        return {props:{success:true,movie} }
    } catch (error) {
      console.log(error)
      return {props:{success:false,error:'Error!'} }
    }
}



