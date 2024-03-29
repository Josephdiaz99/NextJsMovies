import conectarDB from "../../../lib/dbConnect"
import Movie from "../../../models/Movie"


export default async function handler(req, res) {
  await conectarDB()

  //GET api/movie/:id (Obtener un id y listarlo)
  //DELETE api/movie/:id (Elimina un doc con id)
  //PUT api/movie/:id (Modifica un dic con id)

  const {method,query:{id}}=req
    
  switch(method){
    case 'DELETE':
      try {

        const movie=await Movie.findByIdAndDelete(id);
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

