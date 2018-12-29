import * as plants from '../constants/plants.json';
import questions from '../constants/questions';
import _ from 'lodash';

const getFilteredPlants = (filters, filteredPlants = plants) => {
  return _.filter(filteredPlants, plant => {
    if(!plant.data) return false; // TODO: make sure this doesn't happen for any of the plants!
    const plantData = plant.data[0];

    return _.every(Object.keys(filters), (key) => {
      // needs to be every item doesn't match if it is about not matching,
      // or one item does match if it is about matching.
      // return _.every(Object.keys(filters[key]), (value) => {
        // const { filterMatches, partialMatchOK } = filters[key][value]
        const { filterMatches, partialMatchOK, value } = filters[key];
        if(partialMatchOK && typeof(value) === 'string') {
          // TODO: this could give weird bugs with partial word just flagging that is all
          return !!plantData[key] && (plantData[key].indexOf(value) !== -1) === filterMatches;
        } else if(typeof(value) !== 'string') {
          return (value.indexOf(plantData[key]) !== -1) === filterMatches;
        } else {
          return (value === plantData[key]) === filterMatches;
        }

      });
    // });
  });
};

export const getFilterForOption = (question, option) => {
  // TODO: breaks when multiple `Family` options have been selected
  return {
    [question.filterKey]: {
      value: option.value,
      filterMatches: option.filterMatches,
      partialMatchOK: option.partialMatchOK,
    },
  };
}

export const getBestNextQuestion = (plants, usedQuestions) => {
  const usedQuestionIds = usedQuestions.map(q => q.id);
  const unusedQuestions = questions.filter(q => usedQuestionIds.indexOf(q.id) === -1);

  const maxRemainingGroupSizes = unusedQuestions.map(question => {
    const remainingGroupSizes = question.options.map(option => {
      const filters = getFilterForOption(question, option);
      return getFilteredPlants(filters, plants).length;
    });

    return Math.max(...remainingGroupSizes);
  });

  const minBiggestRemainingGroupSize = Math.min(...maxRemainingGroupSizes);
  const bestQuestionIdx = maxRemainingGroupSizes.indexOf(minBiggestRemainingGroupSize);
  return unusedQuestions[bestQuestionIdx];
}

export default getFilteredPlants;
