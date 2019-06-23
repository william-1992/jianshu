import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { DetailWrapper, DetailInfo } from './style';
import { actionCreators } from './store';

class Detail extends PureComponent {
  render() {
    console.log(this.props)
    const { info } = this.props;
    return (
      <DetailWrapper>
        <h2 dangerouslySetInnerHTML= {{ __html: info.get('title') }}></h2>
        <p dangerouslySetInnerHTML = {{ __html: info.get('time') }}></p>
        <DetailInfo dangerouslySetInnerHTML = {{ __html: info.get('content') }}></DetailInfo>
      </DetailWrapper>
    )
  }

  componentDidMount() {
    // let id = this.props.history.location.search.split('=')[1]
    let id = this.props.match.params.id
    this.props.handleGetInfo(id)
  }

}

const mapState = (state) => ({
  info: state.getIn(['detail', 'detailInfo'])
})

const mapDispatch = (dispatch) => ({
  handleGetInfo(id) {
    const action = actionCreators.getInfo(id)
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(Detail);