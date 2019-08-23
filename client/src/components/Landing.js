import React, { Component } from 'react';
import {Link} from "react-router-dom";

class Landing extends Component {
  render() {
    return (
      <div className="container" style={styles.container}>
        <div className="card green darken-3 z-depth-3" style={styles.content}>
          <div className="card-content white-text">
            <div className="row">
              <div className="col s offset-s1">
                <i className="material-icons" style={styles.logoIcon}>send</i>
              </div>
              <div className="col s8">
                <p className="logo" style={styles.title}>Mailmon</p>
                <p style={styles.subtitle}>Collect feedback from your users</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };
}

const styles = {
  container: {
    height: window.innerHeight - 74
  },
  content: {
    top: "50%",
    transform: "translate(0, -50%)",
    padding: "75px 0"
  },
  logoIcon: {
    marginRight: 5,
    transform: "rotate(-0.125turn)",
    fontSize: "8.6rem"
  },
  title: {
    fontSize: "5rem"
  },
  subtitle: {
    fontSize: "1.6rem"
  }
};

export default Landing;
