import React from "react"
import { Card, Button, CardAction, CardMedia, Typography } from "@material-ui/core"
import StarBorderIcon from "@material-ui/icons/StarBorder"
import { useDispatch } from "react-redux"
import { deletePost, likePost } from "../../../actions/posts"
function Post({ post, setCurrentId }) {
  const dispatch = useDispatch()
  return (
    <>
      <Card>
        <Typography variant="subtitle1">{post.title}</Typography>
        <Typography variant="body2">{post.message}</Typography>
        <Button onClick={() => setCurrentId(post._id)} color="primary" size="small">
          Edit
        </Button>
        <Button onClick={() => dispatch(deletePost(post._id))} color="secondary" size="small">
          Delete
        </Button>
        <Button onClick={() => dispatch(likePost(post._id))} color="secondary">
          <StarBorderIcon></StarBorderIcon>
        </Button>
      </Card>
    </>
  )
}

export default Post
