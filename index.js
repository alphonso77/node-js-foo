const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const date = new Date('2022-01-23T08:27:00');
  res.send(`Hello World! It\'s 5 o\'clock somewhere! Last updated: ${date.toLocaleTimeString()}`)
})
app.get('/foo', (req, res) => {
    res.json({foo: 'bar', bar: 'baz'})
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})