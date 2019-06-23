import React, { PureComponent } from 'react';
import Button from 'antd/es/button';
import Input from 'antd/es/input';
import Icon from 'antd/es/icon';
import Checkbox from 'antd/es/checkbox';
import { connect } from 'react-redux';
import { actionCreators } from '../../common/header/store';
import { Redirect } from 'react-router-dom';
import { 
  LoginBox, 
  LoginWrapper, 
  LoginItem 
} from './style';

class Login extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      userValue: '',
      passValue: ''
    }
    this.getUser = this.getUser.bind(this)
    this.getPass = this.getPass.bind(this)
  }
  render() {
    const { homeShow, toLogin }  = this.props;
    if(homeShow) {
      return (
        <LoginBox>
          <LoginWrapper>
            <h1>登录</h1>
            <LoginItem>
              <Input 
                value= { this.state.userValue } 
                onChange={ this.getUser } 
                prefix={ <Icon type="user" style={{ color: 'rgba(0, 0, 0, .3)' }} /> } 
                placeholder="手机号或邮箱"
              ></Input>
            </LoginItem>
            <LoginItem>
              <Input 
                type="password"
                value= { this.state.passValue }
                onChange= { this.getPass }
                prefix={ <Icon type="lock" style={{ color: 'rgba(0, 0, 0, .3)' }} /> } 
                placeholder="密码"
              ></Input>
            </LoginItem>
            <LoginItem>
              <Checkbox>记住我</Checkbox>
              <a href="www.baidu.com">登录遇到问题？</a>
            </LoginItem>
            <LoginItem>
              <Button type="primary" onClick= { () => toLogin(this.state.userValue, this.state.passValue) }>登录</Button>
            </LoginItem>
          </LoginWrapper>
        </LoginBox>
      )
    }else {
      return <Redirect to="/"></Redirect>
    }
  }
  getUser(e) {
    this.setState({
      userValue: e.target.value
    })
  }
  getPass(e) {
    this.setState({
      passValue: e.target.value
    })
  }
}

const mapState = (state) => ({
  homeShow: state.getIn(['header', 'homeShow'])
})

const mapDispatch = (dispatch) => ({
  toLogin(user, pass) {
    const action = actionCreators.handleLogin(user, pass)
    dispatch(action)
  }
})

export default connect( mapState, mapDispatch )(Login);