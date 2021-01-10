import React from "react"
import { Grid, Typography } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { deletePost } from "../../../actions/posts"
import IconButton from "@material-ui/core/IconButton"
import MoreHorizIcon from "@material-ui/icons/MoreHoriz"
import Menu from "@material-ui/core/Menu"
import MenuItem from "@material-ui/core/MenuItem"

const ITEM_HEIGHT = 48

function Post({ post, setCurrentId }) {
  const dispatch = useDispatch()
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Grid container>
      <Grid item sm={11}>
        <Typography variant="subtitle1">{post.title}</Typography>
        <Typography variant="body2">{post.message}</Typography>
        {/* <Typography variant="body2">{post.tags}</Typography> */}
      </Grid>
      <Grid item sm={1}>
        <IconButton size="small" aria-label="more" aria-controls="long-menu" aria-haspopup="true" onClick={handleClick}>
          <MoreHorizIcon size="small" />
        </IconButton>
        <Menu id="long-menu" anchorEl={anchorEl} keepMounted open={open} onClose={handleClose}>
          <MenuItem
            onClick={() => {
              handleClose()
              setCurrentId(post._id)
            }}
          >
            <Typography variant="body2">Edit</Typography>
          </MenuItem>
          <MenuItem
            onClick={() => {
              handleClose()
              dispatch(deletePost(post._id))
            }}
          >
            <Typography variant="body2">Delete</Typography>
          </MenuItem>
        </Menu>
      </Grid>
    </Grid>
  )
}

export default Post
