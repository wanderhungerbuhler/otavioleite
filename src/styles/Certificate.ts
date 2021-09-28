import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;

  background: #005AFF;

  button {
    padding: 10px 20px;
    background: #042d7a;
    border: 0px;
    margin-bottom: 10px;
    color: #F0F0F5;
    font-weight: bold;
    cursor: pointer;
    font-size: 1em;
    border-radius: 7px;
  }

  span {
    text-align: center;
    color: #F0F0F5;
    b { margin-bottom: 20px; display: block; font-size: 1.5em; }
  }

  p {
    position: absolute;
    z-index: 1;
    font-size: 2em;
    margin-left: 4rem;
    margin-top: -1rem;
    width: 960px;
    text-align: center;
  }

  form {
    max-width: 780px;
    width: 100%;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    input {
      max-width: 450px;
      width: 100%;
      height: 56px;
      padding: 5px 20px;
      border: 1px solid #ccc;
      border-radius: 7px;
      font-size: 1em;
      color: #042d7a;
    }

    button {
      width: 30%;
      height: 56px;
      background: #0443b8;
      color: #FFF;
      font-weight: bold;
      font-size: 1em;
      cursor: pointer;
      border-radius: 7px;
      border: 0;
      margin-top: 20px;
      transition: all .3s ease-in;

      :hover { background: #042d7a; transition: all .3s ease-in; }
    }
  }
`;
