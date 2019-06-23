import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Banner from './component/Banner';
import NewList from './component/NewList';
import Navigation from './component/Navigation';
import Recommand from './component/Recommand';
import { HomeWrapper, Main, Sider } from './style';
import { actionCreators } from './store';
import { Redirect } from 'react-router-dom';

class Home extends PureComponent {
  render() {
    const { homeShow } = this.props;
    if(!homeShow) {
      return (
        <HomeWrapper>
          <Main>
            <Banner />
            <NewList />
          </Main>
          <Sider>
            <Navigation />
            <Recommand />
          </Sider>
        </HomeWrapper>
      )
    }else {
      return <Redirect to="/login"></Redirect>
    }
  }

  componentDidMount() {
    this.props.getHomeInfo()
  }

}

const mapState = (state) => ({
  homeShow: state.getIn(['header', 'homeShow'])
})

const mapDispatch = (dispatch) => ({
  getHomeInfo() {
    const action = actionCreators.gethomeinfo()
    dispatch(action)
  }
})


export default connect(mapState, mapDispatch)(Home);