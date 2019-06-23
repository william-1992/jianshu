import * as actionTypes from './actionTypes';
import axios from 'axios';

export const clickTabs = (page, total) => ({
  type: actionTypes.HANDLE_TABS_PAGE,
  page: page
});

export const focusFn = () => ({
  type: actionTypes.HANDLE_FOCUS
});

export const blurFn = () => ({
  type: actionTypes.HANDLE_BLUR
});

export const mouseEnterFn = () => ({
  type: actionTypes.HANDLE_MOUSE_ENTER
});

export const mouseLeaveFn = () => ({
  type: actionTypes.HANDLE_MOUSE_LEAVE
});

export const signOut = () => ({
  type: actionTypes.HANDLE_OUT
})

export const getinfo = () => {
  return (dispatch) => {
    axios.get('/api/searchlist.json').then((res) => {
      const action = {
        type: actionTypes.GET_INFO,
        data: res.data.data,
        total: Math.ceil(res.data.data.length / 10)
      }
      dispatch(action)
    }).catch((res) => {
      alert(res.data)
    })
  }
};

export const handleLogin = (user, pass) => {
  return (dispatch) => {
    axios.get('/api/login.json', {
      params: {
        user,
        pass
      }
    }).then((res) => {
      const action = {
        type: actionTypes.HANDLE_LOGIN
      }
      dispatch(action)
    }).catch(()=> {
      alert('error')
    })
    // axios.post('/api/login.json', {
    //     user,
    //     pass
    // }).then((res)=> {
    //   console.log(user, pass)
    // }).catch(()=> {
    //   alert('登录失败！')
    // })
  }
}