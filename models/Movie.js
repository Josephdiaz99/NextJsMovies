import mongoose from "mongoose";

const MovieSchema=new mongoose.Schema({
    title:{
        type:string,
        required:[true, "Por favor ingrese el titulo"]
    },
    plot:{
        type:string,
        required:[true, "Por favor ingrese la descripcion"]
    }
})

export default mongoose.models.Movie || mongoose.model('Movie',MovieSchema)