import styled from 'styled-components';

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
  }

  svg {
    margin-right: 1em;
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

export const SubmitButton = styled.button.attrs({ type: 'submit' })`
  background: #7159c1;
  border: 0;
  padding: 0 15px;
  margin-left: 10px;
  border-radius: 4px;

  display: flex;
  justify-content: center;
  align-items: center;

  svg {
    margin: 0;
  }
`;
