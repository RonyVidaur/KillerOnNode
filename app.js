const express = require('express')
const path = require('path')
const app = express()


app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'pug')

app.get('/', (req, res) => {
  res.render('index', { title: "Articles"})
})

app.get('/articles/add', (req, res)=> {
  res.render('add', { title: "add"})
})
app.listen(3000, () => {
  console.log('server started on port 3000')
})
