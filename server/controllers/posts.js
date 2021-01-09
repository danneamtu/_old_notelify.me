import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
  } catch (error) {
    console.log(error)
  }
}

export const createPost = async (req, res) => {
  const post = req.body
  // create a new object
  const newPost = new PostMessage(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
