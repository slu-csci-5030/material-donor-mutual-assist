import express from 'express'
import userRouter from './routes/users.js'
import adminRouter from './routes/admin.js'

const app = express()
app.listen(3000)
app.get('/', (req, res) => {
  res.send('Running Okay')
})

// const userRouter = require('./routes/users')

app.use('/users', userRouter)
app.use('/admin', adminRouter)
