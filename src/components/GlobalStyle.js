import {createGlobalStyle} from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
    ${reset};
    a{
        text-decoration:none;
        color:inherit;
    }
    *{
        box-sizing:border-box;
    }
    body{
        font-family:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        padding:30px;
        background-color:black;
        color:white;
        text-align:center;
        margin-top:70px;
    }
    h1 {
        font-size:40px;
        margin-bottom:15px;
        font-weight: bold;
    }
    h2 {
      margin-top:50px;
      font-size:30px;
      font-weight:bold;
      margin-bottom:20px;

    }
    form {
        all: unset;
    } 
    ul {
      font-size:25px;
    }
input {
  all: unset;
  padding: 10px;
  border: 3px solid white;
  border-radius: 10px;
  width: 300px;
  font-size: 25px;
}
button {
  all: unset;
  background-color: black;
  border: 3px solid transparent;
  border-radius: 10px;
  font-size: 30px;
  width: 50px;
  height: 50px;
  transition: all 300ms ease-in-out;
  &:hover {
    background-color: white;
    color: black;
    border: 3px solid white;
  }
}`;

export default GlobalStyles;
