import React, { useState } from "react"
import FileBase from "react-file-base64"
import { TextField, Button, Typography, Paper } from "@material-ui/core"
import { useDispatch } from "react-redux"
import { createPost } from "../../actions/posts"

function Form() {
  const [postData, setPostData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: "" })
  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("this is ", postData)
    dispatch(createPost(postData))
  }

  const clear = () => {}

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      <Typography variant="h4">Add your note</Typography>
      <TextField name="creator" fullWidth label="creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} />
      <TextField
        name="title"
        fullWidth
        label="title"
        value={postData.title}
        onChange={(e) => {
          console.log(e.target.value)
          setPostData({ ...postData, title: e.target.value })
        }}
      />

      <TextField name="message" fullWidthvalue={postData.message} label="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />

      <TextField name="tags" variant="outlined" fullWidthvalue={postData.tags} label="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />

      <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}></FileBase>

      <Button color="secondary" size="large" type="submit" fullWidth>
        Submit
      </Button>
      <Button color="primary" variant="contained" size="large" onClick={clear} fullWidth>
        clear
      </Button>
    </form>
  )
}

export default Form
