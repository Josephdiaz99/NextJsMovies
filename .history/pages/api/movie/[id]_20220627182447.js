import conectarDB from "../../../lib/dbConnect"
import Movie from "../../../models/Movie"


export default async function handler(req, res) {
  await conectarDB()

  //GET api/movie/:id (Obtener un id y listarlo)

  const {method,query:{id}}=req
  
  switch(method){
    case 'GET':
      try {

        const movie=await Movie.findById(id).lean();

        if(!movie){
          return res.status(404).json({success:false})
        }
        return res.json({success:true,data:movie})
      } catch (error) {
        
        return res.status(404).json({success:false})
      }
      default:
        return res.status(500).json({success:false,error})
  }

}

