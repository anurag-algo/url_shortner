import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/practice").then(() => {
    console.log("database connected")
}).catch((err) => {
    console.log("mongose conection error " + err)
});
const practiceSchema = mongoose.Schema({
    Name: {
        type: String,
    },
    elmail: {
        type: String,
    },
    id: {
        type: Number
    }
})

const practiceModel = mongoose.model("practice", practiceSchema)
export default practiceModel