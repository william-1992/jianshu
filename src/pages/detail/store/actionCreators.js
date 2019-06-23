import * as actionTypes from './actionTypes';
import { fromJS } from 'immutable';
import Axios from 'axios';

export const getInfo = (id) => {
  return (dispatch) => {
    Axios.get('/api/detailInfo.json?id=' + id).then((res)=> {
      const action = {
        type: actionTypes.GET_DETAIL_INFO,
        data: fromJS(res.data.data)
      }
      dispatch(action)
    }).catch(()=> {
      alert('error')
    })
  }
}