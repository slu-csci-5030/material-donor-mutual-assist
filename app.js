import express from 'express'
import userRouter from './routes/users.js'
import adminRouter from './routes/admin.js'

const app = express()

app.get('/', (req, res) => {
  res.status(200).send('Running Okay')
})

app.use('/users', userRouter)
app.use('/admin', adminRouter)

export default app
