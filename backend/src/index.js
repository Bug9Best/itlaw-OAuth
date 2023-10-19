import bodyParser from 'body-parser'
import express from 'express'
import cors from "cors"
import auth from "./auth/auth.controller.js"

const port = 8080;
const app = express()
const router = express.Router();

app.use(cors({ "origin": "*", }))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.use("/api",
    router.use("/auth", auth),
);

app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})