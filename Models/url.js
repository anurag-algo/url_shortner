import mongoose from "mongoose";
mongoose.connect("mongodb://127.0.0.1:27017/urlShortner").then(() => console.log("database connected")).catch((err) => console.log("database connection error " + err))
const urlSchema = new mongoose.Schema({
    shortId: {
        type: String,
        required: true,
        unique: true
    },
    redirectUrl: {
        type: String,
        required: true,
    }
}
)

const URLModel = mongoose.model("url", urlSchema)
export default URLModel
