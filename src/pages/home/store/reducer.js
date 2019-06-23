import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  boardList: [],
  newList: [],
  recommendList: [],
  addPage: 1
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.HOME_INFO:
      return state.merge({
        newList: action.newList,
        boardList: action.boardList,
        recommendList: action.recommendList
      })
    case actionTypes.ADD_NEW_LIST:
      return state.merge({
        newList: state.get('newList').concat(action.data),
        addPage: action.page
      })
    default:
      return state
  }
}