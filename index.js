 const connectToMongo =  require('./db');
 const express = require('express')
connectToMongo(); 
const app = express()
const port = 3000
//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', (req, res) => {               
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
// remove
 const connectToMongo =  require('./db');
 const express = require('express')
connectToMongo(); 
const app = express()
const port = 3000
//available routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))
app.get('/', (req, res) => {               
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
