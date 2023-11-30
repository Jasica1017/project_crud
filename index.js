const express = require('express')
const { default: mongoose } = require('mongoose')
const app = express()
const port = 3000

const password = '24sfVFsqwl4mBvn1';
const uri = `mongodb+srv://jasica0680be21:${password}@cluster0.ahwctjc.mongodb.net/bookstore?retryWrites=true&w=majority`

mongoose.connect(uri, {
    useNewUrlParser : true,
    useUnifiedTopology: true
})
.then(() => console.log(`DB connected`))
.catch(() => console.log(`Error`))

app.get('/', (req, res) => {
  res.send('Hello World!');
  console.log("Hello World");
})
app.get('/backend' , (req, res) => {
    res.send("Hello Himanshi you are in backend ");
    console.log("hahaha");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})