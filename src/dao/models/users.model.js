import mongoose from "mongoose";

const usuariosEsquema = new mongoose.Schema(
    // first_name:String,
    // last_name:String,
    // email:String (único)
    // age:Number,
    // password:String(Hash)
    // cart:Id con referencia a Carts
    // role:String(default:’user’)
    {
        first_name: { type: String },
        last_name: { type: String },
        age: { type: Number },
        email: {
            type: String,
            required: true,
            unique: true
        },
        password: String,
        rol: {
            type: String,
            default: 'user'
        },

    }, { strict: false },
    {
        timestamps: {
            updateAt: "FechaUltMod", createdAt: "FechaAlta"
        }
    }
)
export const usuariosModelo = mongoose.model("usuarios", usuariosEsquema)