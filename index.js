require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  const date = new Date('2022-02-22T18:54:00');
  res.send(`Hello World! It\'s 5 o\'clock somewhere! Last updated: ${date.toLocaleDateString()}`)
})
app.get('/foo', (req, res) => {
    res.json({foo: 'bar', bar: 'baz'})
});

app.use(
  express.urlencoded({
    extended: true
  })
)

app.use(express.json())

require('./jsontoyaml.js')(app);
require('./transpose.js')(app);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  if(process.env.NODE_ENV==='development') console.log('running in development mode');
})