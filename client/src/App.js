import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { getPosts } from "./actions/posts"

import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"

function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [dispatch])

  return (
    <>
      <Form />
      <Posts />
    </>
  )
}

export default App
