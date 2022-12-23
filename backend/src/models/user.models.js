import mongoose from 'mongoose'
const { model, Schema } = mongoose

const userSchema = new Schema({
  _id: {
    type: String,
    _id: false
  },
  name: {
    type: String,
    require: true,
    minLength: 2
  },
  surname: {
    type: String,
    require: true,
    minLength: 2
  },
  username: {
    type: String,
    require: true,
    minLength: 2
  },
  email: {
    type: String,
    require: true,
    uniq: true
  },
  password: {
    minLength: 8,
    type: String,
    require: true
  }
})

const UserModel = model('User', userSchema)

export default UserModel
