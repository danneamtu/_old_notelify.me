import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getPosts } from "./actions/posts"

import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"

import { Container, Grid, Box } from "@material-ui/core"

function App() {
  const [currentId, setCurrentId] = useState(null)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])
  return (
    <>
      <Container maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item xs={12} md={3}>
            <Form currentId={currentId} setCurrentId={setCurrentId} />
          </Grid>
          <Grid item container xs={12} md={7} spacing={1}>
            <Posts setCurrentId={setCurrentId} />
          </Grid>
          <Grid item xs={12} md={2} spacing={1}>
            filter
          </Grid>
        </Grid>
      </Container>
    </>
  )
}

export default App
