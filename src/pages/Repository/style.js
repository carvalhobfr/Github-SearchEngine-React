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

export const IssuesList = styled.ul`
  padding-top: 2em;
  margin-top: 2em;
  border-top: 1px solid #eee;
  list-style: none;

  li {
    display: flex;
    padding: 1em 0.6em;
    border: 1px solid #eee;
    border-radius: 4px;

    & + li {
      margin-top: 0.6em;
    }
  }
  img {
    width: 2vw;
    border-radius: 50%;
    border: 2px solid #eee;
  }
  div {
    flex: 1;
    align-content: center;
    margin-left: 1em;

    strong {
      font-size: 1em;

      a {
        text-decoration: none;
        color: #333;

        &:hover {
          color: #7159c1;
        }
      }
      span {
        background: #eee;
        color: #333;
        border-radius: 2px;
        font-size: 0.8em;
        font-weight: 600;
        height: 1.3em;
        padding: 0.1em 0.11em;
        margin-left: 0.8em;
      }
    }
    p {
      margin-top: 0.3em;
      font-size: 0.8em;
      color: #999;
    }
    span {
    }
  }
`;
