import styled, { keyframes } from 'styled-components';
// import styled, { keyframes, css } from 'styled-components'; caso queira utilizar o comentado lá em baixo.

export const Container = styled.div`
  max-width: 700px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 1.2em rgba(0, 0, 0, 0.1);
  padding: 2em;
  margin: 5em auto;

  h1 {
    font-size: 1.5em;
    display: flex;
    flex-direction: row;
    align-items: center;
    svg {
      margin-right: 1em;
    }
  }
`;

export const Form = styled.form`
  margin-top: 2em;
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    border: 1px solid #eee;
    padding: 0.8em 1em;
    border-radius: 4px;
    font-size: 1em;
  }
`;

const rotate = keyframes`
from {
transform : rotate(0deg)
}
to {
  transform : rotate(360deg)
}
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  background: #7159c1;
  border: 0;
  padding: 0 1em;
  margin-left: 0.8em;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.6;
    svg {
      animation: ${rotate} 2s linear infinite;
    }
  }
`;

/*
  // pode fazer utilizando o módulo css do styled component também na amimação do 360 do carregar,
  // mas eu achei mais fácil fazer igual SaaS, de qualquer forma o segundo modo seria assim :
  //  ${props =>
  //  props.loading &&
  //   css `
  // svg {annimation: ${rotate} 2s linear infinite  `
*/

export const List = styled.ul`
  list-style: none;
  margin-top: 2em;
  li {
    padding: 1em 0;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    /* ↓ isso serve para pegar a partir do segundo elementod a lista, ou seja pega li que tenha outro li em cima ↓ */
    & + li {
      border-top: 1px solid #eee;
    }
  }
  a {
    color: #7159c1;
    text-decoration: none;
  }
`;
