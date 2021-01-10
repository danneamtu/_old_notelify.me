import React from "react"
import { useSelector } from "react-redux"
import Post from "./Post/Post"

function Posts() {
  const posts = useSelector((state) => state.posts)
  console.log(posts)
  return (
    <>
      <div>Posts</div>
      <Post />
    </>
  )
}

export default Posts
