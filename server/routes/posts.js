import express from "express"
import { getPosts, createPost } from "../controllers/posts.js"
const router = express.Router()

// function will be executed, one someone acces this route "/"
router.get("/", getPosts)
router.post("/", createPost)

export default router
