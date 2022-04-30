import mongoose from 'mongoose'

const user = mongoose.Schema(
    {
        nome: {
            type: String,
            required: true
        },
        username: {
            type: String,
            required: true
        },
        senha: {
            type: String,
            required: true
        },
        dataNasc: {
            type: Date,
            required: false
        },
        genero: {
            type: String,
            required: false
        },
        email: {
            type: String,
            required: true
        },
        cel: {
            type: String,
            required: false
        },
        tel: {
            type: String,
            required: false
        },
        endereco: {
            type: String,
            required: false
        },
        numero: {
            type: Number,
            required: false
        },
        cidade: {
            type: String,
            required: false
        },
        estado: {
            type: String,
            required: false
        },
        registrado: {
            type: Date,
            required: true
        },
    },
    {
        collection: 'user'
    },
    {
        timestamps: true
    }
)

const UserModel = mongoose.model('Users', user)

export { UserModel } 
