import express from 'express'
// import data from '../datafiles/DonorData.json'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('UserList List of users')
})

router.get('/getmessage/:name', (req, res) => {
  const name = req.params.name
  res.send('Hi ' + name)
  res.send('Getting your details')
})
export default router
