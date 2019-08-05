import React, { Component } from 'react';
import Header from './Header'
import One from './One'
import Two from './Two'
import Three from './Three'
import Four from './Four'
import Footer from './Footer'


export default class App extends Component {
  render() {
    return (
      <div className="App">
       <Header/>
       <One/>
       <Two/>
       <Three/>
       <Four/>
       <Footer/>
      </div>
    );
  }
}