import React, { useEffect } from "react"
import { Container, AppBar, Typography, Grid, Grow } from "@material-ui/core"
import { useDispatch } from "react-redux"

import { getPosts } from "./actions/posts"

import Form from "./components/Form/Form"
import Posts from "./components/Posts/Posts"
import useStyles from "./styles"

function App() {
  const classes = useStyles()
  const dispatch = useDispatch()

  // dispatch
  useEffect(() => {
    dispatch(getPosts)
  }, [dispatch])

  return (
    <>
      <Container maxwidth="lg">
        <AppBar className={classes.AppBar} position="static" color="inherit"></AppBar>
        <Typography variant="h2" align="center">
          Notes
        </Typography>
        <Grow in>
          <Container>
            <Grid container spacing={3} justify="space-between" alignItems="stretch">
              <Grid item xs={12} sm={7}>
                <Posts />
              </Grid>
              <Grid item xs={12} sm={5}>
                <Form />
              </Grid>
            </Grid>
          </Container>
        </Grow>
      </Container>
    </>
  )
}

export default App
