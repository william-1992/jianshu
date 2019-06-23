import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  height: 56px;
  border-bottom: 1px solid #f0f0f0;
`;

export const HeaderInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
`;

export const Logo = styled.div`
  float: left;
  img {
    height: 56px;
  }
`;

export const Container = styled.div`
  width: 960px;
  margin: 0 auto;
  height: 56px;
`;

export const Item = styled.div`
  float: left;
  margin: 0 15px;
  font-size: 17px;
  line-height: 56px;
  cursor: pointer;
  color: #333;
  &.right {
    float: right;
    font-size: 15px;
    color: #969696;
    span {
      background: #ea6f5a;
      padding: 0 3px;
      color: #fff;
      font-size: 12px;
    }
  }
  &.active {
    color: #ea6f5a
  }
  .iconfont {
    margin-right: 5px;
    font-size: 20px;
    vertical-align: middle;
  }
`;

export const SearchInfo = styled.div`
  display: inline-block;
  margin-top: 9px;
  position: relative;
  .defaulticon {
    position: absolute;
    right: 5px;
    top: 4px;
    width: 30px;
    height: 30px;
    border-radius: 15px;
    text-align: center;
    line-height: 30px;
    transition: all .2s ease-in;
    &.action {
      background: #666;
      color: #fff;
    }
  }
`;

export const SearchInput = styled.input`
  padding: 0 35px 0 12px;
  border: none;
  background: #eee;
  width: 240px;
  height: 38px;
  border-radius: 40px;
  box-sizing: border-box;
  &.action {
    width: 300px;
  }
  &.fade-enter {
    width: 240px;
  }
  &.fade-enter-active {
    width: 300px;
    transition: all 0.2s ease-in
  }
  &.fade-exit {
    width: 300px;
  }
  &.fade-exit-active {
    width: 240px;
    transition: all 0.2s ease-in
  }
`;

export const List = styled.div`
  position: absolute;
  left: 0;
  top: 47px;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  width: 250px;
  background: #fff;
  padding: 10px;
  box-sizing: border-box;
`;

export const ListTitle = styled.div`
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #969696;
  p {
    cursor: pointer;
    .iconfont {
      margin-right: 2px;
      font-size: 13px;
    }
  }
`;

export const ListItem = styled.div`
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
  border: 1px solid #ddd;
  border-radius: 3px;
  padding: 2px 6px;
  color: #787878;
  font-size: 12px;
`;

export const Right = styled.div`
  float: right;
  position: absolute;
  right: 0;
  top: 0
`;

export const RightItem = styled.div`
  margin: 10px 15px 0 0;
  width: 80px;
  height: 38px;
  line-height: 38px;
  float: left;
  background: #ea6f5a;
  border-radius: 20px;
  font-size: 15px;
  color: #fff;
  text-align: center;
  cursor: pointer;
  &.register {
    border: 1px solid #ea6f5a;
    background: none;
    color: #ea6f5a;
  }
`;