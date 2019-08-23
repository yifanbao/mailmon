import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Payments from './Payments';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li><a href="/auth/google" className="waves-effect waves-light btn green darken-4 z-depth-0">
            Login With Google
          </a></li>
        );
      default:
        return [
          <li key="1"><Payments /></li>,
          <li key="3" style={{ margin: '0 10px' }}>
            <i className="material-icons outline left" style={styles.navItemIcon}>monetization_on</i>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">
              <i className="material-icons left" style={styles.navItemIcon}>exit_to_app</i>
              Sign Out
            </a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav className="z-depth-0">
        <div className="nav-wrapper green darken-3" style={styles.navWrapper}>
          <Link to={this.props.auth ? '/surveys' : '/'} className="left brand-logo logo">
            Mailmon
            <i className="material-icons" style={styles.logoIcon}>send</i>
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}

const styles = {
  navWrapper: {
    paddingLeft: 15
  },
  logoIcon: {
    marginRight: 5,
    transform: "rotate(-0.125turn)",
    fontSize: "1.7rem"
  },
  navItemIcon: {
    marginRight: 5
  }
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
