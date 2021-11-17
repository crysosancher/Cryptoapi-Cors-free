const express = require('express')
const path=require('path')
const app = express()
const port = process.env.PORT || 3000;
const cors = require('cors');
app.use(cors({
    origin: '*'
}));
app.get('/', (req, res) => {

  res.json({"Himanshu Lomda": 69})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})