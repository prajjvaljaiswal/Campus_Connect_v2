import express from "express"
import dbconnect from "./database/mongodb.js"
// import AuthRouter from "./routers/auth.js"
// import CollageRouter from "./routers/collage.js"
// import ChatRouter from "./routers/chat.js"
const app = express()

try {
    await dbconnect()
    console.log("connected")
} catch (error) {
    console.log(error)
}

app.use(express.json())

app.get("/",(req,res)=>{
    res.json("Hello World!!")
})



// app.use("/auth", AuthRouter)
// app.use("/collage", CollageRouter)
// app.use("/chat", ChatRouter)

app.listen(3000, () => {
    console.log("Server Online!!")
});

