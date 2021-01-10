import PostMessage from "../models/postMessage.js"

export const getPosts = async (req, res) => {
  try {
    const postMessages = await PostMessage.find()
    res.status(200).json(postMessages)
  } catch (error) {
    console.log(error)
  }
}

// data is not here from req
export const createPost = async (req, res) => {
  const post = req.body
  // const { title, message, selectedFile, creator, tags } = post

  // create a new object
  const newPost = new PostMessage(post)
  try {
    await newPost.save()
    res.status(201).json(newPost)
  } catch (error) {
    res.status(409).json({ message: error.message })
  }
}
