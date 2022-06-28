import conectarDB from "../../lib/dbConnect"
import Movie from "../../models/Movie"
import Link from "next/dist/client/link"
const MoviePage = ({success,error,movie}) => {

    if (!success) {
        return (
          <div className="container text-center my-5">
            <h1>{error}</h1>
    
            <Link href="/">
              <a className="btn btn-success">Volver...</a>
            </Link>
          </div>
        );
      }

    console.log(success)
    console.log(error)
    console.log(movie)
  return (
    <div className='container' >
        <h1>Detalle de Movie</h1>
        <div className="card-body">
            <div className="card-title">
                <h5 className="text-uppercase">{movie.title}</h5>
                <p className='fw-light'>{movie.plot}</p>
                <Link href="/">
                  <a className="btn btn-success btn-sm me-2">Volver...</a>
                </Link>
                <Link href={`/${movie._id}/edit`}>
                  <a className="btn btn-warning btn-sm me-2">Editar</a>
                </Link>
                <button className='btn btn-danger btn-sm me-2 '>Eliminar </button>
            </div>
        </div>

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
      if(error.kind==='ObjectId'){
        return {props:{success:false,error:'id no valido!'} }
      }
      return {props:{success:false,error:'error de servidor!'} }
    }
}



