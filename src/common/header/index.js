import React, { PureComponent } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { CSSTransition } from 'react-transition-group';
import { 
  HeaderWrapper, 
  HeaderInner, 
  Logo, 
  Container, 
  Item, 
  SearchInfo, 
  SearchInput, 
  Right, 
  RightItem,
  List,
  ListTitle,
  ListItem
} from './style';
import logo from '../../statics/logo.png';

class Header extends PureComponent {

  render() {
    const { homeShow, slist, focused, handleFocus, handleBlur, handleSignOut } = this.props;
    return (
      <HeaderWrapper>
        <HeaderInner>
          <Logo>
            <Link to="/"><img src={ logo } alt="" /></Link>
          </Logo>
          <Container>
            <Item className="active"><i className="iconfont">&#xe667;</i>首页</Item>
            <Item><i className="iconfont">&#xe784;</i>下载App</Item>
            {
              homeShow ? <Link to="/login"><Item className="right">登录</Item></Link> : <Item onClick={ handleSignOut } className="right">退出</Item>
            }
            
            
            <Item className="right active"><i className="iconfont">&#xe63d;</i><span>beta</span></Item>
            <Item className="right"><i className="iconfont">&#xe636;</i></Item>
            <SearchInfo>
              <CSSTransition in={ focused } timeout={ 200 } classNames="fade">
                <SearchInput
                  className={ focused ? 'action' : '' }
                  onFocus={ () => handleFocus(slist) }
                  onBlur={ handleBlur }
                ></SearchInput>
              </CSSTransition>
              <i className={ focused ? 'iconfont action defaulticon' : 'iconfont defaulticon' }>&#xe613;</i>
              { this.getList() }
            </SearchInfo>
          </Container>
          <Right>
            <RightItem className="register">注册</RightItem>
            <RightItem>写文章</RightItem>
          </Right>
        </HeaderInner>
      </HeaderWrapper>
    )
  }

  getList() {
    const { page, total, focused, mouseIn, slist, handleMouseEnter, handleMouseLeave, handleTabs } = this.props;
    
    
    let newList = [...slist]
    let pageList = []
    for(let i = (page-1)*10; i <  page*10; i++ ) {
      if(newList[i]) {
        pageList.push(<ListItem key={ newList[i] }>{ newList[i] }</ListItem>)
      }
    }

    if(focused || mouseIn) {
      return (
        <List
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <ListTitle>
            <h5>热门搜索</h5>
            <p onClick={ () => handleTabs(page, total) }><i className="iconfont">&#xe6a7;</i>换一批</p>
          </ListTitle>
          {
            pageList
          }
        </List>
      )
    }
  }

}
const mapState = (state) => ({
  focused: state.getIn(['header', 'focused']),
  mouseIn: state.getIn(['header', 'mouseIn']),
  slist: state.getIn(['header', 'list']),
  page: state.getIn(['header', 'page']),
  total: state.getIn(['header', 'total']),
  homeShow: state.getIn(['header', 'homeShow'])
})

const mapDispatch = (dispatch) => ({
  handleTabs(page, total) {
    if(page < total) {
      const action = actionCreators.clickTabs(page + 1, total)
      dispatch(action)
    }else {
      const action = actionCreators.clickTabs(1, total)
      dispatch(action)
    }
  },
  handleFocus(list) {
    if(list.size === 0) {
      dispatch(actionCreators.getinfo())
    }
    
    dispatch(actionCreators.focusFn())
  },
  handleBlur() {
    const action = actionCreators.blurFn()
    dispatch(action)
  },
  handleMouseEnter() {
    const action = actionCreators.mouseEnterFn()
    dispatch(action)
  },
  handleMouseLeave() {
    const action = actionCreators.mouseLeaveFn()
    dispatch(action)
  },
  getlistInfo() {
    const action = actionCreators.getinfo()
    dispatch(action)
  },
  handleSignOut() {
    const action = actionCreators.signOut()
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(Header);