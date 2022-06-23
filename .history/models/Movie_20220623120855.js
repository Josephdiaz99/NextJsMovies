import mongoose from "mongoose";

const MovieSchema=new mongoose.Schema({
    title:{
        type:String,
        require:[true, "Por favor ingrese el titulo"]
    },
    plot:{
        type:String,
        require:[true, "Por favor ingrese la descripcion"]
    }
})

export mongoose.model('Movie')