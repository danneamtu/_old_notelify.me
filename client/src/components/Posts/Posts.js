import React from "react"
import { useSelector } from "react-redux"
import { Grid, CircularProgress } from "@material-ui/core"
import Post from "./Post/Post"
import useStyles from "./styles.js"

const Posts = () => {
  const posts = useSelector((state) => state.posts)
  const classes = useStyles()

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid className={classes.container} container alignItems="stretch" spacing={2}>
      {posts.map((post) => (
        <Grid items key={post._id} xs={12} sm={6} md={3}>
          <Post post={post} />
        </Grid>
      ))}
    </Grid>
  )
}

export default Posts
