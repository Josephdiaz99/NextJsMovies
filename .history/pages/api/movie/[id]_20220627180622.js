import conectarDB from "../../../lib/dbConnect"
import Movie from "../../../models/Movie"


export default async function handler(req, res) {
  await conectarDB()

  //GET api/movie/:id (Obtener un id y listarlo)

  const {method,query:{id}}=req
  
  switch(method){
    case 'GET':
      try {

        const movie=await Movie.findById(id).lean()
        id(!movie){
          return res.status(404)
        }

      } catch (error) {
       
      }
      default:
        return res.status(500).json({success:false,error})
  }

}

