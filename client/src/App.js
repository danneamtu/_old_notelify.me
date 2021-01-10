import React, { useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import { getPosts } from "./actions/posts"

import Posts from "./components/Posts/Posts"
import Form from "./components/Form/Form"

function App() {
  const [currentId, setCurrentId] = useState(null)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getPosts())
  }, [currentId, dispatch])

  return (
    <>
      <Form currentId={currentId} setCurrentId={setCurrentId} />
      <Posts setCurrentId={setCurrentId} />
    </>
  )
}

export default App
