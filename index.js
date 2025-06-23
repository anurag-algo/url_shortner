import express from "express"
import router from "./Routes/url.js"
const app = express()


const PORT = 3000;
app.use(express.json())
app.use("/user", router)

app.listen(PORT, () => {
    console.log("server is started now!")
})

