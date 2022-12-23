import mongoose from 'mongoose'
const { model, Schema } = mongoose

const userSchema = new Schema(
  {
    _id: {
      type: String,
      _id: false
    },
    firstname: {
      type: String,
      require: true,
      minLength: 2
    },
    lastname: {
      type: String,
      require: true,
      minLength: 2
    },
    username: {
      type: String,
      require: true,
      minLength: 2
    },
    password: {
      type: String,
      minLength: 8,
      require: true
    }
  },
  {
    timestamps: {
      createdAt: 'created_at',
      updatedAt: 'updated_at'
    }
  }
)

const UserModel = model('User', userSchema)

export default UserModel
