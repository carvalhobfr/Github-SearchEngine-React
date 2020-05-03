import styled from 'styled-components';

const Container = styled.div`
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

export default Container;
