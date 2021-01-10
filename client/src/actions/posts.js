import * as api from "../api"

export const getPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts()
    dispatch({ type: "FETCH_ALL", payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const createPost = (post) => async (dispatch) => {
  try {
    const { data } = await api.createPost(post)
    dispatch({ type: "CREATE", payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const updatePost = (id, updatePost) => async (dispatch) => {
  try {
    const { data } = await api.updatePost(id, updatePost)
    console.log("update", data)

    dispatch({ type: "UPDATE", payload: data })
  } catch (error) {
    console.log(error)
  }
}

export const deletePost = (id) => async (dispatch) => {
  console.log("delete ", id)
  try {
    await api.deletePost(id)
    dispatch({ type: "DELETE", payload: id })
  } catch (error) {
    console.log(error)
  }
}

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id)
    console.log("like2", data)
    dispatch({ type: "LIKE", payload: data })
  } catch (error) {
    console.log(error)
  }
}
