import mongoose from "mongoose";
const { Schema } = mongoose;

const UserSchema = Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
        avatarUrl: String,
    },
    {
        timestamps: true,
    }
);

export default mongoose.model("User", UserSchema);
