const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World! It\'s 5 o\'clock somewhere! Can I get a witness?')
})
app.get('/foo', (req, res) => {
    res.json({foo: 'bar', bar: 'baz'})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})