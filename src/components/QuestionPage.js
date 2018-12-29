import React, { Component } from 'react';
import autobind from 'react-autobind';
import _ from 'lodash';
import questions from '../constants/questions';
import getFilteredPlants, { getBestNextQuestion, whatIsTheWorstPath } from '../helpers/getPlants';
import AnswerButton from './AnswerButton';

class QuestionPage extends Component {
  componentWillMount() {
    autobind(this);
    this.setState({filters: {}, usedQuestions: []});
  }

  getRemainingPlants() {
    const { filters } = this.state;
    return getFilteredPlants(filters);
  }

  onClick(question, option) {
    const { filterKey } = question;
    const { filterMatches, value, partialMatchOK } = option;

    const filters = _.clone(this.state.filters);
    filters[filterKey] = filters[filterKey] || {};

    filters[filterKey] = {
      value,
      filterMatches,
      partialMatchOK,
    };

    this.setState({filters});
    this.state.usedQuestions.push(question);
  }

  render() {
    const plants = this.getRemainingPlants();
    // TODO: only show options that would leave >0 possibilities
    const question = getBestNextQuestion(plants, this.state.usedQuestions);

    return (
      <div>
        {question.text}
        {_.map(question.options, (option, idx) =>
          <AnswerButton option={option} onClick={() => this.onClick(question, option)} key={idx}/>
        )}
        <div>Possibilties: {_.size(plants)}</div>
        <button>See all possibilities</button>
      </div>
    );
  }
}


export default QuestionPage;
