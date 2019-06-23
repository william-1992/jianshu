import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { 
  RecomWrapper,
  Title, 
  TitleText, 
  TitleBtn,
  RecomItem,
  RecomItemFollow,
  RecomItemInfo,
  ToMore
} from '../style';

class Recommand extends PureComponent {
  render() {
    const { list } = this.props;
    return (
      <RecomWrapper>
        <Title>
          <TitleText>推荐作者</TitleText>
          <TitleBtn><i className="iconfont">&#xe6a7;</i>换一批</TitleBtn>
        </Title>
        {
          list.map((item) => {
            return (
              <RecomItem key={ item.get('id') }>
                <img src={ item.get('picurl') } alt="" />
                <RecomItemInfo>
                  <h5>{ item.get('author') }</h5>
                  <p>写了{ item.get('wordNumber') }k字 · { item.get('comment') }喜欢</p>
                </RecomItemInfo>
                <RecomItemFollow><i className="iconfont">&#xeaf3;</i>关注</RecomItemFollow>
              </RecomItem>
            )
          })
        }
        <ToMore>查看全部<i className="iconfont">&#xe602;</i></ToMore>
      </RecomWrapper>
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'recommendList'])
})

export default connect( mapState, null )(Recommand);