import styled, { keyframes } from 'styled-components';

const rotate = keyframes`
from {
transform : rotate(0deg)
}
to {
  transform : rotate(360deg)
}
`;
export const Loading = styled.div`
  color: #fff;
  font-size: 2em;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  svg {
    margin-left: 0.5em;
    animation: ${rotate} 2s linear infinite;
  }
`;

export const Owner = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 8em;
    border-radius: 50%;
    margin-top: 1.5em;
  }

  a {
    color: #7159c1;
    font-size: 1em;
    text-decoration: none;
    align-self: flex-start;
  }
  h1 {
    font-size: 1.6em;
    margin-top: 0.6em;
  }
  p {
    font-size: 0.8em;
    margin-top: 0.3em;
    color: #665;
    line-height: 1.4;
    text-align: center;
    max-width: 400px;
  }
`;
