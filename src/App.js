import React, { Component } from 'react';
import Customer from './components/Customers'
import './App.css';

const customer = [
{
  'id': 1,
  'image': 'https://placeimg.com/64/64/any',
  'name': '고영훈',
  'birtday': '921015',
  'gender': '남자',
  'job': '코린이'
},
{
  'id': 2,
  'image': 'https://placeimg.com/64/64/1',
  'name': '고영훈 one',
  'birtday': '931015',
  'gender': '남자',
  'job': '코린이'
},
{
  'id': 3,
  'image': 'https://placeimg.com/64/64/2',
  'name': '고영훈 two',
  'birtday': '941015',
  'gender': '남자',
  'job': '코린희'
},
]
class App extends Component {
  render () {
    return (
      <div>
        {
        customer.map(c => { return( <Customer id={c.id} image={c.image} name={c.name} birtday={c.birtday} gender={c.gender} job={c.job} /> ); }) }
    </div>
    );
  }
}
     
export default App;
