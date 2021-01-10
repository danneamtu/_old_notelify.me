import express from "express"
import { getPosts, createPost, updatePost, deletePost, likePost } from "../controllers/posts.js"
const router = express.Router()

// function will be executed, one someone acces this route "/"
router.get("/", getPosts)
router.post("/", createPost)
router.patch("/:id", updatePost)
router.delete("/:id", deletePost)
router.patch("/:id/like", likePost)

export default router
