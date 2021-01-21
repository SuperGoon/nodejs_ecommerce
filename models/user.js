import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    password: { type: String, required: true, minLength: 8 },
    id: { type: String },
    role: { type: Number, default: 0 },
    cart: { type: Array },
});

export default mongoose.model("User", userSchema);