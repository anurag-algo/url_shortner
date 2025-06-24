import express from "express"
import generateShortUrl from "../Controlers/cotr.js"
const router = express.Router()
router.get("/", (req, res) => {
    res.send("Oho.. it working fine!!!!!!")
})

router.post("/create", generateShortUrl)
export default router