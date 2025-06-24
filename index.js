import express from "express"
import router from "./Routes/url.js"
const app = express()

// 👇 for JSON input
app.use(express.json())

// 👇 for form-data / x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

const PORT = 3000;

app.use("/user", router)

app.listen(PORT, () => {
    console.log("server is started now!")
})

