import styled from 'styled-components';

export const Menu = styled.div`
  width: 100%;
  position: fixed;
  height: 5rem;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #DBDBDB;

  top: 0;
  z-index: 1;

  a {
    display: inline-block;
    position: relative;
    height: 5rem;
    line-height: 5rem;
    text-decoration: none;
    padding: 0 0.5rem;
    color: #999;
    transition: color .2s;

    & + a  {
      margin-left: 2rem;
    }

    &:hover {
      color: #999;
    }

    &.active::after {
      content: '';
      height: 3px;
      border-radius: 3px 3px 0 0;
      width: 100%;
      position: absolute;
      bottom: 1px;
      left: 0;
      background: #005AFF;
    }
  }
`;

export const Logo = styled.div`
  width: 100px;
  height: 70px;
  background: url('./assets/logo.svg') no-repeat center center;
  background-size: 100%;
  margin: 10px auto;
  margin-right: 30px;
`;
