import React from "react"
import { useSelector } from "react-redux"

import { Grid, CircularProgress } from "@material-ui/core"

import Post from "./Post/Post"

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts)
  return (
    <>
      {!posts.length ? (
        <CircularProgress />
      ) : (
        posts.map((post) => (
          <Grid sm={12} item xs={12} alignItems="stretch">
            <Post setCurrentId={setCurrentId} key={post._id} post={post} />
          </Grid>
        ))
      )}
    </>
  )
}

export default Posts
