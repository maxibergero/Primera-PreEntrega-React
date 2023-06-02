

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import React, { Component } from 'react'

import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer';


class App extends Component {
  render() {
    return (
<div >
<NavBar titulo='HIPERSHOP'/>
<ItemListContainer  greeting='BIENVENIDOS A HIPERSHOP'/>
</div>

     
    )
  }
}
export default App









