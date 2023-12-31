import express from "express"
import db from "./config/db.js"
import UserRouter from "./users/userRouter.js"


const app = express()
app.use(express.json())

const port = process.env.PORT

db.connect()

app.use("/user", UserRouter)


app.get('*', (req, res) => {
    return res.status(404).json({
        data: null,
        error: 'route not found'
    })
})


app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).json({
        data: null,
        error: 'Server Error'
    })
})
app.listen(port, () => console.log(`listening on port: ${port}`))


export default app