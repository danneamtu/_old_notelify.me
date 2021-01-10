import React from "react"
import { useSelector } from "react-redux"

import { Grid, CircularProgress } from "@material-ui/core"

import Post from "./Post/Post"

function Posts() {
  const posts = useSelector((state) => state.posts)
  console.log(posts)
  return (
    <>
      <div>Posts</div>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        <Grid container alignItems="stretch">
          {posts.map((post) => (
            <Post item xs={12} key={post._id} post={post} />
          ))}
        </Grid>
      )}
    </>
  )
}

export default Posts
