const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers', (req, res) => {
  res.send([
    {
      'id': '1',
      'image': 'https://placeimg.com/64/64/any',
      'name': '고영훈',
      'birtday': '921015',
      'gender': '남자',
      'job': '코린이'
    },
    {
      'id': '2',
      'image': 'https://placeimg.com/64/64/1',
      'name': '고영훈 one',
      'birtday': '931015',
      'gender': '남자',
      'job': '코린이'
    },
    {
      'id': '3',
      'image': 'https://placeimg.com/64/64/2',
      'name': '고영훈 two',
      'birtday': '941015',
      'gender': '남자',
      'job': '코린희'
    }
  ]);
})

app.listen(port, () => console.log(`Listening on port ${port}`))