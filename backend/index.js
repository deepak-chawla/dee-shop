import express from 'express'

const app = express()

app.get('/', (req, res) => {
  res.send('Api is runing')
})

app.listen(2000, () => {
  console.log('Server is running on port 2000')
})
