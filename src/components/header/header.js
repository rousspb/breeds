import React, { Component } from 'react';
import './header.css';
import { Link } from "react-router-dom";

class Header extends Component {
    state = {
      searchVal: ''
    }

    onChangeHanglder = (event) => {
      this.setState({ searchVal: event.target.value});
      this.props.onSearch(this.state.searchVal);
    }

    render() {
      return (
        <section className="header-container">
          <header className="header"> <Link to="/"> Dog breeds </Link></header>
          <div className="created-by">
              <input type="search" value={this.state.searchVal} onChange={this.onChangeHanglder} />
          </div>
        </section>
      )
    }
}

export default Header;