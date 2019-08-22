// Shows SurveyForm and SurveyFormReview
import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends Component {
  state = { showReview: false };

  renderContent() {
    return this.state.showReview ? (
      <SurveyFormReview onCancel={() => this.setState({ showReview: false })} />
    ) : (
      <SurveyForm onSurveySubmit={() => this.setState({ showReview: true })} />
    );
  }

  render() {
    return (
      <div>
        <div style={styles.headerWrapper}>
          <span style={styles.headerText}>
            <i className="material-icons left" style={styles.headerIcon}>create</i>
            New Survey
          </span>
        </div>
        {this.renderContent()}
      </div>
    );
  }
}

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
  }
};

export default reduxForm({
  form: 'surveyForm'
})(SurveyNew);
