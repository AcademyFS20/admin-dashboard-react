import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import 'bootswatch/dist/lux/bootstrap.css';
import Heading from './components/Heading';
import Books  from './containers/Books';
import Buttons from './components/Button';
import AddForm from './containers/AddForm';

export class App extends Component {

  render() {
    return (
      <>
        <table className="table table-dark">
          <Heading/>
          <tbody>
             <Books/> 
          </tbody>
        </table>
      </>

    )};
  
}

export default App
