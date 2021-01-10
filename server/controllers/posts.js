import mongoose from "mongoose"
import Post from "../../client/src/components/Posts/Post/Post.js"
import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
  console.log("get this asc")
  try {
    console.log("get this asc")
    const postMessages = await PostMessage.find().sort({ _id: 1 }).limit(5)
    res.status(200).json(postMessages)
  } catch (error) {
    console.log(error)
  }
}
export const createPost = async (req, res) => {
  const post = req.body
  const newPost = new PostMessage(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}

export const updatePost = async (req, res) => {
  const { id: _id } = req.params
  const post = req.body
  if (!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send("no posts with that id")
  // receive updated version of the post
  const updatedPost = await PostMessage.findByIdAndUpdate(_id, { ...post, _id }, { new: true })
  res.json(updatedPost)
}

export const deletePost = async (req, res) => {
  const { id } = req.params
  console.log("this id", id)
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no post to delete")
  await PostMessage.findByIdAndRemove(id)
  // delete all
  // await PostMessage.deleteMany({}, () => {})
  res.json({ message: "deleted succesfully" })
}

export const likePost = async (req, res) => {
  const { id } = req.params
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send("no post with this id")
  const post = await PostMessage.findById(id)
  const updatedPost = await PostMessage.findByIdAndUpdate(id, { likeCount: post.likeCount + 1 }, { new: true })
  res.json(updatedPost)
}
