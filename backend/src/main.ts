import { toNodeHandler } from "better-auth/node"
import { auth } from "../packages/lib/auth"
import express from "express"
import cors from "cors"

const app = express()
const PORT = (() => {
    const URL = process.env.BACKEND_URL as string
    const elements = URL.split(":")
    return elements.pop()
})()

app.use(
  cors({
    origin: process.env.BETTER_AUTH_URL as string, 
    methods: ["GET", "POST", "PUT", "DELETE"], 
    credentials: true,
  })
);

app.all("/api/auth/{*any}", (req, res, next) => {
    console.log(req.url)
    next()
}, toNodeHandler(auth))

app.use(express.json())
app.listen(PORT, () => {
    console.log("server running at port", PORT)
})


export default app