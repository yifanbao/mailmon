import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    if (!this.props.surveys.length) {
      return (
        <div className="progress light-green lighten-3">
          <div className="indeterminate green darken-2"></div>
        </div>
      );
    }
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card" key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>
              {survey.body}
            </p>
            <p className="right grey-text lighten-1">
              Sent On: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action orange-text">
            <span style={styles.cardMetaTag}>Yes: {survey.yes}</span>
            <span style={styles.cardMetaTag}>No: {survey.no}</span>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        {this.renderSurveys()}
      </div>
    );
  };
}

const styles = {
  cardMetaTag: {
    marginRight: 15
  }
};

function mapStateToProps({ surveys }) {
  return { surveys };
}

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
