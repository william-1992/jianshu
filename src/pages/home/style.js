import styled from 'styled-components';

export const HomeWrapper = styled.div`
  width: 960px;
  margin: 0 auto;
  padding-top: 30px;
`;

export const Main = styled.div`
  width: 640px;
  float: left;
`;

export const Sider = styled.div`
  width: 280px;
  float: right;
`;

export const BannerWrapper = styled.div`
  img {
    width: 100%;
    border-radius: 10px;
  }
`;

export const NewWrapper = styled.div`
  padding-top: 15px;
`;

export const NewItem = styled.div`
  padding: 15px 0 20px;
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;
`;

export const Left = styled.div`
  float: left;
  h4 {
    font-size: 18px;
    color: #333;
    font-weight: 700;
    cursor: pointer;
  }
  h6 {
    font-size: 13px;
    color: #999;
  }
  p {
    span {
      margin-right: 7px;
      .iconfont {
        margin-right: 3px;
        vertical-align: middle;
      }
    }
  }
`;

export const Right = styled.div`
  float: right;
  img {
    width: 150px;
    height: 100px;
  }
`;

export const Addmore = styled.div`
  margin-top: 20px;
  width: 100%;
  height: 40px;
  line-height: 40px;
  border-radius: 20px;
  background: #a5a5a5;
  text-align: center;
  color: #fff;
  font-size: 15px;
  cursor: pointer;
`;

export const NaviWrapper = styled.div`
  width: 100%;
`;

export const NaviItem = styled.div`
  margin-bottom: 10px;
  img {
    width: 100%;
    height: auto;
    cursor: pointer;
  }
`;

export const CodeWrapper = styled.div`
  position: relative;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  padding: 10px 20px;
  cursor: pointer;
  .fade-enter{ opacity: 0 }
  .fade-enter-active { opacity: 1; transition: all 0.2s ease-in }
  .fade-exit { opacity: 1; }
  .fade-exit-active { opacity: 0; transition: all 0.2s ease-in }
`;

export const CodeInfo = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  img {
    width: 60px;
    height: 60px;
  }
`;

export const CodeInfoLeft = styled.div`

`;

export const CodeInfoRight = styled.div`
  h4 {
    margin: 0
    font-size: 15px;
    color: #333;
  }
  p {
    margin: 0
    font-size: 13px;
    color: #999;
  }
`;

export const CodePopover = styled.div`
  position: absolute;
  left: 50%;
  top: 0;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);
  padding: 10px;
  border-radius: 10px;
  background: #fff;
  transform: translate(-50%, -100%);
  img {
    width: 160px;
    height: 160px;
  }
`;

export const RecomWrapper = styled.div`
  width: 100%;
  margin-top: 15px;
`;

export const Title = styled.div`
  overflow: hidden;
`;

export const TitleText = styled.h3`
  float: left;
  font-size: 14px;
  color: #969696;
`;

export const TitleBtn = styled.p`
  float: right;
  font-size: 14px;
  color: #969696;
  cursor: pointer;
  .iconfont {
    margin-right: 3px;
    vertical-align: middle;
    font-size: 13px;
  }
`;

export const RecomItem = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: space-between;
  margin-top: 5px;
  img {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    border: 1px solid #ddd;
  }
`;

export const RecomItemFollow = styled.button`
  height: 25px;
  border: none;
  background: none;
  color: #42c02e;
  cursor: pointer;
`;

export const RecomItemInfo = styled.div`
  margin-left: -40px;
  h5 {
    font-size: 14px;
    color: #333
  }
  p {
    font-size: 12px;
    color: #969696;
  }
`;

export const ToMore = styled.div`
  margin-top: 15px;
  width: 100%;
  height: 36px;
  line-height: 36px;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  background-color: #f7f7f7;
  font-size: 13px;
  color: #787878;
  text-align: center;
  cursor: pointer;
  .iconfont {
    margin-left: 5px;
    font-size: 12px;
  }
`;