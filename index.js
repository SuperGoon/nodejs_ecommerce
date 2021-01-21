import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import userRouter from "./router/users.js";

const app = express();
dotenv.config();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

app.get("/", (req, res) => {
    res.send("server is running");
});
app.use("/user", userRouter);

const PORT = process.env.PORT || 5000;

mongoose
    .connect(process.env.CONNECTION_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        app.listen(PORT, () => console.log(`server running on port : ${PORT}`))
    )
    .catch((error) => console.log(error.message));
mongoose.set("useFindAndModify", false);