import React from "react"
import { Card, Button, CardAction, CardMedia, Typography } from "@material-ui/core"

function Post({ post }) {
  return (
    <>
      <Card>
        <Typography variant="subtitle1">{post.title}</Typography>
        <Typography variant="body2">{post.message}</Typography>
        <Button onClick={() => {}} color="primary" size="small">
          Edit
        </Button>
        <Button onClick={() => {}} color="secondary" size="small">
          Delete
        </Button>
      </Card>
    </>
  )
}

export default Post
