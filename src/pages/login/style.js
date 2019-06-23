import styled from 'styled-components';

export const LoginBox = styled.div`
  width: 100%;
  height: 100%;
  background: #f1f1f1;
`;

export const LoginWrapper = styled.div`
  width: 400px;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  box-shadow: 0 0 8px rgba(0, 0, 0, .1);
  padding: 20px;
  h1 {
    font-size: 24px;
    text-align: center;
  }
`;

export const LoginItem = styled.div`
  margin-bottom: 20px;
  color: #969696;
  button {
    width: 100%;
  }
  a {
    float: right;
    color: #969696;
  }
  &:last-child {
    margin: 0
  }
`;