import { Link } from "react-router-dom";
import styled from "styled-components";

export const NavigationContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
  border-bottom: 1px solid black;
`;

export const LogoContainer = styled(Link)`
  height: 100%;
  width: 70px;
  margin-top: 3px;
  padding: 15px;
`;

export const NavLinks = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
export const NavLink = styled(Link)`
  padding: 10px 15px;
  cursor: pointer;
  border: 2px solid gray;
  border-radius: 15px;
`;
