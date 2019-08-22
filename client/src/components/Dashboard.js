import React from 'react';
import { Link } from 'react-router-dom';
import SurveyList from './surveys/SurveyList';

const Dashboard = () => {
  return (
    <div>
      <div style={styles.headerWrapper}>
        <span style={styles.headerText}>
          <i className="material-icons left" style={styles.headerIcon}>assignment</i>
          My Surveys
        </span>
        <Link to="/surveys/new" className="waves-effect waves-light btn orange darken-3 z-depth-1">
          <i className="material-icons left" style={styles.buttonIcon}>add</i>New
        </Link>
      </div>
      <SurveyList />
    </div>
  );
};

const styles = {
  headerWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    height: 75
  },
  headerText: {
    lineHeight: "50px",
    fontSize: 40
  },
  headerIcon: {
    marginRight: 10,
    lineHeight: "55px",
    fontSize: 40
  },
  buttonIcon: {
    marginRight: 5
  }
};

export default Dashboard;
