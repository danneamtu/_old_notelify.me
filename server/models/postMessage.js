import mongoose from "mongoose"
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFiles: String,
  date: {
    type: Date,
    default: new Date(),
  },
  likeCount: {
    type: Number,
    default: 0,
  },
})

const PostMessage = mongoose.model("PostMessage", postSchema)
export default PostMessage
