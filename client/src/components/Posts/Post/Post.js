import React from "react"
import moment from "moment"
import { Card, CardActions, CardMedia, Button, Typography, CardContent } from "@material-ui/core"
import ThumbUpAltIcon from "@material-ui/icons/ThumbUpAlt"
import DeleteIcon from "@material-ui/icons/Delete"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import useStyles from "./styles"

function Post({ post }) {
  const classes = useStyles()
  return (
    <Card className={classes.card}>
      <CardMedia title={post.title} image={post.selectedFile} className={classes.cardMedia}></CardMedia>
      <div className={classes.overlat}>
        <Typography variant="h6">{post.creator}</Typography>
        <Typography variant="body2">{moment(post.created).fromNow()}</Typography>
      </div>
      <div className={classes.overlay2}>
        <Button style={{ color: "white" }} size="small" onClick={() => {}}>
          <MoreHorizIcon fontSize="default" />
        </Button>
      </div>
      <div className={classes.details}>
        <Typography variant="body2" color="textSecondary">
          {post.tags.map((tag) => `#${tag} `)}
        </Typography>
      </div>
      <CardContent>
        <Typography variant="h5" gutterBottom>
          {post.message}
        </Typography>
      </CardContent>
      <CardActions className={classes.cardActions}>
        <Button size="small" color="primary" onClick={() => {}}>
          <ThumbUpAltIcon fontSize="small"></ThumbUpAltIcon>
          Like {post.likeCount}
        </Button>
        <Button size="small" color="primary" onClick={() => {}}>
          Delete
        </Button>
      </CardActions>
    </Card>
  )
}

export default Post
