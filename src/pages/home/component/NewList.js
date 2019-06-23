import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { actionCreators } from '../store';
import { Link } from 'react-router-dom';
import { NewWrapper, NewItem, Left, Right, Addmore } from '../style';

class NewList extends PureComponent {
  render() {
    const { page, list, handleAddMore } = this.props;
    return (
      <NewWrapper>
        {
          list.map((item, index)=> {
            return (
                <NewItem key={ index }>
                  <Left>
                    <Link to={'/detail/' + item.get('id')}><h4>{ item.get('title') }</h4></Link>
                    {/* <Link to={{
                      pathname: '/detail',
                      search: '?id=' + item.get('id'),
                      hash: '#william'
                    }}><h4>{ item.get('title') }</h4></Link> */}
                    <h6>{ item.get('past') }</h6>
                    <p>
                      <span><i className="iconfont">&#xe63d;</i>{ item.get('score') }</span>
                      <span>{ item.get('author') }</span>
                      <span><i className="iconfont">&#xe668;</i>{ item.get('comment') }</span>
                      <span><i className="iconfont">&#xe632;</i>{ item.get('follow') }</span>
                    </p>
                  </Left>
                  <Right>
                    <img alt="" src={ item.get('picUrl') } />
                  </Right>
                </NewItem>
            )
          })
        }
        <Addmore onClick={ () => handleAddMore(page) }>加载更多</Addmore>
      </NewWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'newList']),
  page: state.getIn(['home', 'addPage'])
})

const mapDispatch = (dispatch) => ({
  handleAddMore(page) {
    const action = actionCreators.getMore(page)
    dispatch(action)
  }
})

export default connect(mapState, mapDispatch)(NewList);