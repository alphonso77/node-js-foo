const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const date = new Date('2022-01-31T14:00:00');
  res.send(`Hello World! It\'s 5 o\'clock somewhere! Last updated: ${date.toLocaleDateString()}`)
})
app.get('/foo', (req, res) => {
    res.json({foo: 'bar', bar: 'baz'})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})