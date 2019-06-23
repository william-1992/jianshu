import * as actionTypes from './actionTypes';
import axios from 'axios';
import { fromJS } from 'immutable';

export const gethomeinfo = () => {
  return (dispatch) => {
    axios.get('/api/homeList.json').then((res)=> {
      const action = {
        type: actionTypes.HOME_INFO,
        newList: fromJS(res.data.data.articalList),
        boardList: fromJS(res.data.data.boardList),
        recommendList: fromJS(res.data.data.recommendList)
      }
      dispatch(action)
    }).catch(()=> {
      alert('error')
    })
  }
};

export const getMore = (page) => {
  return (dispatch) => {
    axios.get('/api/addNewList.json?page=' + page).then((res)=> {
      const action = {
        type: actionTypes.ADD_NEW_LIST,
        data: fromJS(res.data.data),
        page: page + 1
      }
      dispatch(action)
    }).catch(()=> {
      alert('加载错误！请检出网络')
    })
  }
}