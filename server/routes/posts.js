import express from "express"
import { getPosts, createPost, updatePost } from "../controllers/posts.js"
// in node you need to add.js, in react don't

const router = express.Router()
router.get("/", getPosts)
router.post("/", createPost)

router.patch("/:id", updatePosts)

export default router
