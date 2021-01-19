import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    id: { type: String },
    role: { type: Number, default: 0 },
    cart: { type: Array },
});

export default mongoose.model("User", userSchema);