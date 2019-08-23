import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import axios from 'axios';
import DogList from './components/dogs/dog-list/DogList';
import DogDetails from './components/dogs/dog-details/DogDetail';

import Header from './components/header/header';
class App extends Component {
  state = {
    dogs: [],
    allDogs: []
  }

  componentDidMount() {
    axios.get('https://dog.ceo/api/breeds/list/all')
      .then(res => {
        const dogs = Object.keys(res.data.message).filter(() =>Boolean);
        this.setState({ dogs, allDogs: dogs });
      })
  }

  retrieveSearchParam = (param) => {
    console.log(param);
    
    if (!param) {
      this.setState({ dogs: this.state.allDogs })
    } else {
      let dogs = this.state.allDogs.filter(dog => {
        return dog.toLowerCase().indexOf(param.toLocaleLowerCase()) !== -1;
      });
      this.setState({ dogs })
    }
  }

  render() {
    return (
      <Router>
        <div className="App">
          <Header onSearch={this.retrieveSearchParam}/>
          <Route path='/' exact render={(props) => <DogList {...props} dogs={this.state.dogs} />} />
          <Route path="/dog/:id" component={DogDetails} />
        </div>
      </Router>
    );
  }
}

export default App;