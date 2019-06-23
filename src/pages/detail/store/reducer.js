import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  detailInfo: {}
})
export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.GET_DETAIL_INFO:
      return state.set('detailInfo', action.data)
    default: 
      return state 
  }
}