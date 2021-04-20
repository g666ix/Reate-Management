import React, { Component } from 'react';
import Customer from './components/Customers'
import './App.css';
import Paper from '@material-ui/core/paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody'; 
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto'
  },
  table: {
    minWidth: 1080
  }
})

const customer = [
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
},
]
class App extends Component {
  render () {
    const { classes } = this.props;
    return (
        <Paper className={classes.root}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <TableCell>번호</TableCell>
              <TableCell>이미지</TableCell>
              <TableCell>이름</TableCell>
              <TableCell>생년월일</TableCell>
              <TableCell>성별</TableCell>
              <TableCell>직업</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
          { customer.map(c => { return( <Customer id={c.id} image={c.image} name={c.name} birtday={c.birtday} gender={c.gender} job={c.job} /> ); }) }
          </TableBody>
        </Table>
      </Paper>
    );
  }
}
     
export default withStyles(styles)(App);
