import { fromJS } from 'immutable';
import * as actionTypes from './actionTypes';

const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  total: 1,
  homeShow: true
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case actionTypes.HANDLE_FOCUS:
      return state.set('focused', true)
    case actionTypes.HANDLE_BLUR:
      return state.set('focused', false)
    case actionTypes.HANDLE_MOUSE_ENTER:
      return state.set('mouseIn', true)
    case actionTypes.HANDLE_MOUSE_LEAVE:
      return state.set('mouseIn', false)
    case actionTypes.GET_INFO:
      return state.merge({
        'list': action.data,
        'total': action.total
      })
    case actionTypes.HANDLE_TABS_PAGE:
      return state.set('page', action.page)
    case actionTypes.HANDLE_LOGIN:
      return state.set('homeShow', false)
    case actionTypes.HANDLE_OUT:
      return state.set('homeShow', true)
    default: 
      return state
  }
}