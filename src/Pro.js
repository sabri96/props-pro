import React, { Component } from 'react';
import PropTypes from 'prop-types';
import logo from './img/ipad.jpg'


class Profile extends Component {
  render(props) {
    this.props.handleName()

    return (
      <div className="App" style={{ display: "flex", justifyContent: "center" }}>
        <h1>{this.props.fullName}</h1>
        <br />
        <h2> {this.props.bio}</h2>
        <br />
        <h3>{this.props.profession}</h3>
        <div>
          <img src={logo} alt="ipad.jpg" width="320" height="360" />
        </div>
      </div>

    )
  }
}
Profile.propTypes = {
  fullName: PropTypes.string,
  bio: PropTypes.string,
  profession: PropTypes.string
}

export default Profile;