import express from 'express'
import writeFile from 'fs/promises'
import DonorList from '../datafiles/DonorData.json' with { type : 'json'}
const router = express.Router()

router.get('/donors', (req, res) => {
  const donorList = DonorList
  res.json(donorList).status(200)
})

router.post('/add-donor', async (req, res) => {
  const newDonor = req.body
  const donorList = DonorList || []
  console.log(newDonor)
  donorList.push(newDonor)
  await writeFile.writeFile('./datafiles/DonorData.json', JSON.stringify(donorList))
  res.json({ message: 'Added donor to the list.' }).status(200)
})

export default router
