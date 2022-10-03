import React from 'react';
import ReactDOM from 'react-dom';
import {differenceBy} from 'lodash/fp'
import './app.css';
import logo from '../public/logo.png'; 
import TestLayoutEffect from './layouteffect'

let a = [{key: '1', active:true}, {key:'2', active: false}, {key: '3', active: true}]
let b = [{key: '1', active:false}, {key:'2', active: true}, {key:'2', active: false}]
try {
  // b = JSON.parse('')
} catch (e) {
  console.log('error')
}

class App extends React.Component {	
  render() {
    console.log(differenceBy('key', a, b));
    return (
      <div className="App">
        <TestLayoutEffect/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
