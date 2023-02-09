import express from 'express'

import users from '../models/userModel.js';

const userRouter = express.Router()

userRouter
  // Get all users for temporary purposes to get ids
  .get('/', async (req, res) => {
    const allUsers = await users.find()
    if (allUsers.length > 0) {
      return res.status(200).json({
        users: allUsers
      })
    }
    return res.status(400).json({ message: 'No Users Found'})
  })
  // Sign Up a user
  .post('/signUp', async (req, res) => {
    const { name, email, password } = req?.body
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, Email, Password are mandatory' })
    }
    const insertedUser = await users.create({name, email, password})
    if (insertedUser) {
      return res.status(201).json(insertedUser)
    }
    return res.status(400).json({ message: 'Something went wrong' })
  })
  // Login a user
  .post('/login', async (req, res) => {
    const { name, password } = req?.body
    if (!name || !password) {
      return res.status(400).json({ message: 'Name, Password are mandatory' })
    }
    const user = await users.findOne({ name, password })
    if (user?.name !== name || user?.password !== password) {
      return res.status(400).json({ message: 'Username and password donot match' })
    }
    if (user) {
      return res.status(200).json({ userId: user?.id })
    }
    return res.status(200).json({ message: 'No User Found' })
  })

export { userRouter }