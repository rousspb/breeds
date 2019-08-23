import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

class DogDetails extends Component {
  state = {
    breeds: []
  }
  componentDidMount() {
    axios.get(`https://dog.ceo/api/breed/${this.props.match.params.id}/images/random/20`)
      .then(res => {
        const breeds = res.data.message;
        this.setState({ breeds });
      })
  }

  render() {
    return (
      <section>
        <Link to="/" className="cucum">Return to see All dogs</Link>
        <div className="dog-details-header">
          <div>These are 20 fotos of others just like me, a <span className="pink">{this.props.match.params.id}</span> dog.</div>
          <div>We are so cute, hu?</div>
        </div>
        <section className="all-dogs">
            {
              this.state.breeds.map((dog) => (
                <div className="dog-container" key={dog}>
                  <div className="dog-card no-hover">
                    <img src={dog} alt="Dog" />
                  </div>
                </div>
              ))
            }
        </section>
      </section>
    )
  }
}
export default DogDetails;
