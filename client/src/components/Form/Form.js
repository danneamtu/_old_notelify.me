import React, { useState } from "react"
import { TextField, Button, Typography, Paper } from "@material-ui/core"
import FileBase from "react-file-base64"
import { useDispatch } from "react-redux"

import useStyles from "./styles.js"
import { createPost } from "../../actions/posts"

function Form() {
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(createPost(postData))
  }

  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  })

  const clear = () => {}
  return (
    <Paper className={classes.paper}>
      <form autoComplete="off" noValidate className={classes.form} onSubmit={handleSubmit}>
        <Typography variant="h6">Create a note</Typography>
        <TextField fullWidth name="creator" label="creator" variant="outlined" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
        <TextField fullWidth name="title" label="title" variant="outlined" value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value })} />

        <TextField fullWidth name="message" label="message" variant="outlined" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

        <TextField fullWidth name="tags" label="tags" variant="outlined" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />

        <div className={classes.fileInput}>
          <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })} />
        </div>
        <Button className={classes.buttonSubmit} color="primary" size="large" type="submit" fullWidth>
          Submit
        </Button>
        <Button className={classes.buttonSubmit} color="secondary" size="large" type="submit" fullWidth onClick={clear}>
          Submit
        </Button>
      </form>
    </Paper>
  )
}

export default Form
