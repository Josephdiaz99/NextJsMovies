import conectarDB from "../../lib/dbConnect"
import Movie from "../../models/Movie"
import Link from "next/dist/client/link"
const MoviePage = ({success,error,movie}) => {

    if(!success){
        return(
            <div className="container text-center my-5" >
                <h1>{error}</h1>
            <Link href="/" >
            <a className='btn btn-success'>Volver...</a>
           </Link>
           </div>
        )
    }

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

        if(!movie){
            return {props:{success:false,error:'Pelicula no encontrada!'} } 
        }

        movie._id=`${movie._id} `
        console.log(movie)
        
        return {props:{success:true,movie} }
    } catch (error) {
      console.log(error)
      return {props:{success:false,error:'Error!'} }
    }
}



