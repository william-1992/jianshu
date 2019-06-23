import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import CodePic from '../../../statics/code.png';
import { CSSTransition } from 'react-transition-group';
import { NaviWrapper,
  NaviItem,
  CodeWrapper,
  CodeInfo, 
  CodeInfoLeft, 
  CodeInfoRight, 
  CodePopover 
} from '../style';

class Navigation extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      codeShow: false
    }
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
    this.handleMouseLeave = this.handleMouseLeave.bind(this)
  }
  render() {
    const { list } = this.props;
    return (
      <NaviWrapper>
        {
          list.map((item) => {
            return (
              <NaviItem key={ item.get('id') }>
                <img alt="" src={ item.get('picUrl') } />
              </NaviItem>
            )
          })
        }
        <CodeWrapper>
          {
            this.state.codeShow ? this.getCodeInfo() : null
          }
          <CodeInfo onMouseEnter={ this.handleMouseEnter } onMouseLeave={ this.handleMouseLeave }>
            <CodeInfoLeft>
              <img src={ CodePic } alt="" />
            </CodeInfoLeft>
            <CodeInfoRight>
              <h4>下载简书手机App<i className="iconfont">&#xe602;</i></h4>
              <p>随时随地发现和创作内容</p>
            </CodeInfoRight>
          </CodeInfo>
        </CodeWrapper>
      </NaviWrapper>
    )
  }
  getCodeInfo() {
    return (
      <CSSTransition timeout={ 200 } classNames="fade" in={ this.state.codeShow }>
        <CodePopover>
          <img src={ CodePic } alt="" />
        </CodePopover>
      </CSSTransition>
    )
  }
  handleMouseEnter() {
    this.setState({
      codeShow: true
    })
  }
  handleMouseLeave() {
    console.log('1')
    this.setState({
      codeShow: false
    })
  }
}

const mapState = (state) => ({
  list: state.getIn(['home', 'boardList'])
})

export default connect(mapState, null)(Navigation);