import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1120px;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
`;

export const ContentPost = styled.div`
  max-width: 720px;
  margin: 5rem auto 0;

  a {
    display: block;

    & + a {
      margin-top: 2rem;
      padding-top: 2rem;
      border-top: 1px solid #111;
    }


  time {
    font-size: 1rem;
    display: flex;
    align-items: center;
    color: #313131;
  }

  strong {
    display: block;
    font-size: 1.5rem;
    margin-top: 1rem;
    line-height: 2rem;
    transition: color 0.2s;
  }

  p {
    color: #929292;
    margin-top: 0.5rem;
    line-height: 1.625rem;
  }

  &:hover strong {
    color: green;
  }
}
`;
