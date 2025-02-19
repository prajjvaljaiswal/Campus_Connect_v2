const express = require("express")
const dbconnect = require("./database/mongodb")
// import AuthRouter from "./routers/auth.js"
// import CollageRouter from "./routers/collage.js"
// import ChatRouter from "./routers/chat.js"
const User = require("./models/user")
const app = express()
app.use(express.json())

try {
    dbconnect().then(() =>{

        // app.get("/", (req, res) => {
        //     res.json("Hello World!!")
        // })
        
        app.get("/users", async (req, res) => {
            try {
                const data = await User.find({ collageName: "University of Mumbai" })
                res.json(data)
            } catch (error) {
                res.status(400).json({ message: error })
            }
        })

    })
} catch (error) {
    console.log(error)
}






// app.use("/auth", AuthRouter)
// app.use("/collage", CollageRouter)
// app.use("/chat", ChatRouter)

app.listen(3000, () => {
    console.log("Server Online!!")
});

