import express, { Router } from 'express'
import { Person } from '@shared/entities'

const app = express()

const router = Router()

router.get('/person', (req, res) => {
  const person = new Person('John', 'Doe')

  return res.status(200).json(person)
})

app.use('/api', router)

app.listen(3000, () => {
  console.log('Server is running !')
})