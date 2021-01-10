import React, { useState, useEffect } from "react"
import FileBase from "react-file-base64"
import { TextField, TextareaAutosize, Button, Typography, Box, Paper } from "@material-ui/core"
import { useDispatch, useSelector } from "react-redux"
import { createPost, updatePost } from "../../actions/posts"

function Form({ currentId, setCurrentId }) {
  const [postData, setPostData] = useState({ creator: "", title: "", message: "", tags: "", selectedFile: "" })

  const dispatch = useDispatch()
  // use Select just one post with the id

  const post = useSelector((state) => (currentId ? state.posts.find((p) => p._id === currentId) : null))

  const handleSubmit = (e) => {
    e.preventDefault()
    if (currentId) {
      console.log("this is post data updated!", postData)
      dispatch(updatePost(currentId, postData))
    } else {
      console.log("this is post data", postData)
      dispatch(createPost(postData))
    }
    clear()
  }
  const clear = () => {
    setCurrentId(null)
    setPostData({ creator: "", title: "", message: "", tags: "" })
  }
  useEffect(() => {
    if (post) {
      setPostData(post)
    }
  }, [post])

  return (
    <form autoComplete="off" noValidate onSubmit={handleSubmit}>
      {/* <Typography variant="h6">
        {currentId ? "Edit " : "Add "}
        your note
      </Typography> */}
      {/* <TextField name="creator" fullWidth label="creator" value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value })} /> */}
      <TextField
        name="New note"
        fullWidth
        label="New note"
        value={postData.title}
        onChange={(e) => {
          console.log(e.target.value)
          setPostData({ ...postData, title: e.target.value })
        }}
      />
      <Box mt={3}>
        <TextareaAutosize placeholder="Note" style={{ width: "100%" }} rowsMin={3} fullWidth name="message" label="message" value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value })} />
      </Box>
      <TextField fullWidth name="tags" label="tags" value={postData.tags} onChange={(e) => setPostData({ ...postData, tags: e.target.value })} />
      {/* <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}></FileBase> */}
      <Box mt={3}>
        <Button variant="contained" color="primary" size="large" type="submit" fullWidth>
          {currentId ? "Edit this note" : "Add this note"}
        </Button>
      </Box>
    </form>
  )
}

export default Form
