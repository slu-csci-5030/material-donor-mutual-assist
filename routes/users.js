import express from 'express'
const router = express.Router()

router.get('/', (req, res) => {
  res.send('UserList List of users')
})

export default router
// module.exports = router
