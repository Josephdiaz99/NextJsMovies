// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import conectarDB from "../../lib/dbConnect"
import Movie from "../../models/Movie"


export default async function handler(req, res) {
  await conectarDB()

  //Post api/movie

  const {method}=req
  
  switch(method){
    case 'POST':
      try {

        const movie=new Movie(req.body)
        await movie.save()

        return res.json({succes:true,movie})

      } catch (error) {
        return res.status(400).json({succes:false,error})
      }
      default:
        return res.status(500).json({succes:false,error})
  }

}















