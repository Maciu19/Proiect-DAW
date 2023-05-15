import express from "express"
import dotenv from "dotenv"
import bodyParser from "body-parser"
import punctRoute from "./routes/punctRoutes.js"
import errorMiddleware from './middleware/errorMiddleware.js'
import cors from "cors"

dotenv.config()

const app = express()
app.use(cors({
    origin: '*'
}));
app.use(bodyParser.json())

const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send("Home page")
})

app.use('/punct', punctRoute)

app.use(errorMiddleware)

app.listen(port, () => {
    console.log(`app listening to http://localhost:${port}`)
})