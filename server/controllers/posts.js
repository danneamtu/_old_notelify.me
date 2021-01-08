import { Mongoose } from "mongoose"
import PostMessage from "../models/postMessage.js"

const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    console.log(postMessages)
    res.status(200).json(postMessages)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const createPost = async (req, res) => {
  const post = req.body
  const newPost = new PostMessage(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(404).json({ message: error.message })
  }
}

const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const post = req.body
  if (!mongoose.Types.ObjectId.isValid(_id)) {
    return res.status(404).send("no post with that id")
  }
  const post = await PostMessage.findByIdAndUpdate(_id, post, { new: true })
  res.json(updatePost)
}

export { getPosts, createPost, updatePost }
