import styled from "styled-components";

const Login = styled.div`
  font-weight: 700;
  font-size: 26px;
  margin: 30vh 0 0 0;
  text-align: center;
`;

const LoginButton = styled.a`
  font-size: 30px;
  padding: 6px 18px;
  border-radius: 4px;
  cursor: pointer;
  color: white;
  background-color: #ffcc00;
  text-decoration: none;
  box-shadow: 4px 4px 6px rgba(0, 0, 0, 0.5);
  :hover {
    background-color: #ffdd11;
  }
  :active {
    box-shadow: 1px 1px 6px rgba(0, 0, 0, 0.5);
  }
`;

export { Login, LoginButton };
