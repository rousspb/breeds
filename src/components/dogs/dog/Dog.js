import React, { Component} from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';
import './Dog.css'

class Dog extends Component {
  state = {
    breeds: [],
    isHover: false
  }
  componentDidMount() {
    axios.get(`https://dog.ceo/api/breed/${this.props.dogName}/images/random/1`)
    .then(res => {
      const breeds = res.data.message;
      this.setState({breeds});
    })
    .catch(error => {
      console.log(error);
    });
  }

  onMouseEnterHandler = () => {
    this.setState({ isHover: true})
  }

  onMouseLeaveHandler = () => {
    this.setState({ isHover: false })
  }
  render() {
    return (
      <Link to={`/dog/${this.props.dogName}`}>
        <div className="dog-card">
          <img src={this.state.breeds[0]} onMouseOver={this.onMouseEnterHandler} onMouseLeave={this.onMouseLeaveHandler} alt="Dog"/>
          {this.state.isHover ? <div className="show-me">Show me more!</div> : ''}
        </div>
      </Link> 
    )
  }
}
export default Dog;
