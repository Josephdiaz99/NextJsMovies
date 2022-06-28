import conectarDB from "../../../lib/dbConnect"
import Movie from "../../../models/Movie"


export default async function handler(req, res) {
  await conectarDB()

  //GET api/movie/:id (Obtener un id y listarlo)

  const {method}=req
  
  switch(method){
    case 'GET':
      try {

        const movie=new Movie(req.body)
        await movie.save()

        return res.json({success:true,movie})

      } catch (error) {
        return res.status(400).json({success:false,error})
      }
      default:
        return res.status(500).json({success:false,error})
  }

}

