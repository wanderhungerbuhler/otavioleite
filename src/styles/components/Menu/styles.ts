import styled from 'styled-components';

export const Menu = styled.div`
  width: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #ccc;

  ul {
    li { list-style: none; display: inline-block; padding: 0 10px; }
    a { color: #999; display: block; text-decoration: none; padding: 5px 10px; transition: all .7s ease-in-out; }
  }

  @media (max-width: 500px) {
    ul {
      li { display: block; text-align: center; margin-bottom: 10px; }
    }
  }
`;

export const Logo = styled.div`
  width: 120px;
  height: 85px;
  background: url('./assets/logo.svg') no-repeat center center;
  background-size: 100%;
  margin: 10px auto;
  margin-right: 30px;
`;
