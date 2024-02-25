import express from 'express'
import DList from '../datafiles/DonorData.json' with {type: 'json'}
const router = express.Router()

router.get('/', async (req, res) => {
  const donorList = DList.DonorList
  res.json(donorList).status(200)
})

router.get('/getmessage/:name', (req, res) => {
  const name = req.params.name
  const newUser = findNewUser(name)
  let message = ''
  if (newUser) {
    message = 'Hi ' + name + '! Welcome to the donation club!!!'
  } else {
    message = 'Welcome back ' + name + '!! Check your impact now!'
  }
  res.status(200).send(message)
})

function findNewUser (name) {
  let flag = true
  const userList = DList.DonorList
  console.log(userList)
  userList.forEach((user) => {
    console.log(user.name)
    if (name === user.name) {
      console.log(user.name + 'exists')
      flag = false
    }
  })
  return flag
}
export default router
