import axios from "axios"
const url = "http://localhost:5000/posts"

export const getPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatePost) => axios.patch(`${url}/${id}`, updatePost)
export const deletePost = (id) => axios.delete(`${url}/${id}`, deletePost)
export const likePost = (id) => axios.patch(`${url}/${id}`, likePost)
