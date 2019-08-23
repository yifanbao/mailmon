// Shows users their inputs for review
import _ from 'lodash';
import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name} style={styles.confirmField}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div>
      <span style={styles.confirmTitle}>Please confirm your entries</span>
      {reviewFields}
      <button className="btn-flat yellow darken-3 white-text" onClick={onCancel}>
        <i className="material-icons left margin-right-5">arrow_back</i>
        Back
      </button>
      <button className="btn-flat right green darken-2 white-text" onClick={() => submitSurvey(formValues, history)}>
        Send Survey
        <i className="material-icons right margin-left-5">email</i>
      </button>
    </div>
  );
};

const styles = {
  confirmTitle: {
    fontSize: 28
  },
  confirmField: {
    marginBottom: 15
  }
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}

export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
