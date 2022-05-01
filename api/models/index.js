import mongoose from 'mongoose';

const user = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        cpf: {
            type: Number,
            required: false,
        },
        password: {
            type: String,
            required: true
        }
    },
    {
        collection: 'user'
    },
    {
        timestamps: true
    }
);

const UserModel = mongoose.model('Users', user);

export { UserModel };
