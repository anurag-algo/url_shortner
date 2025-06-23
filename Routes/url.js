import express from "express"
// import mongoose from "mongoose"
// import urlModel from "../Models/url.js"
import practiceModel from "../Models/practice.js"
const router = express.Router()
let id = 0;
//create user
router.get("/create", async (req, res) => {
    const userCreated = await practiceModel.create({
        Name: "Anurag Prajapati",
        id: id++,
        email: "Anurag@gmail.com"
    })
    res.send(userCreated)
})

//read data
router.get("/read", async (req, res) => {
    const userCreated = await practiceModel.find()
    res.send(userCreated)
})


//read data
router.get("/readOne/:id", async (req, res) => {
    const userCreated = await practiceModel.find({ id: req.params.id })
    res.send(userCreated)
})

router.get("/update", async (req, res) => {
    let updatedUser = await practiceModel.findOneAndUpdate({ id: 2 }, { id: 333 }, { new: true })
    res.send(updatedUser)
})

router.get("/delete/:id", async (req, res) => {
    let deletedUser = await practiceModel.findOneAndDelete({ id: req.params.id })
    res.send(deletedUser)
})
router.get("/", (req, res) => {
    res.send("working fine in the  route folder ")
})
// router.post("/:shortId", (req, res) => {
//     const id = req.params.shortId;
//     res.send(`sort Id is created ${id}`)
//     // console.log(id)
// })

export default router