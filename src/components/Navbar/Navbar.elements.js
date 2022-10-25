import styled from "styled-components";
import { BsCodeSlash } from "react-icons/bs";
import { Container } from "../../globalStyles";
import { Link } from "react-router-dom";
import { COLORS } from "../../globalStyles";

const { darkBg, primaryCol } = COLORS;

export const Nav = styled.nav`
  position: absolute;
  background: transparent;
  height: 80px;
  display: flex;
  align-items: center;
  font-size: 1.2rem;
  z-index: 999;
  width: 100%;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  height: 80px;
  ${Container}
`;

export const NavIcon = styled(BsCodeSlash)`
  margin-right: 0.5rem;
  width: 2rem;
  height: 4rem;
`;

export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 960px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: space-evenly;
  flex: 1;
  text-decoration: none;
  list-style: none;
  text-align: center;

  @media screen and (max-width: 960px) {
    display: flex;
    flex-direction: column;
    width: 50%;
    height: 100vh;
    position: absolute;
    top: 0px;
    left: ${({ click }) => (click ? 0 : "-100%")};
    opacity: 1;
    transition: all 0.5s ease;
    background: ${darkBg};
  }
`;

export const NavItem = styled.li`
  height: 80px;
  transition: all 0.3s ease;
  box-shadow: 8px hidden transparent;
  border-bottom: 8px solid transparent;
  &:hover {
    border-bottom: 8px double ${primaryCol};
  }

  @media screen and (max-width: 960px) {
    width: 100%;

    &:hover {
      border: none;
    }
  }
`;
export const NavLinks = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;

  @media screen and (max-width: 960px) {
    text-align: center;
    padding: 2rem;
    width: 100%;
    display: table;

    &:hover {
      color: ${primaryCol};
      transition: all 0.3s ease;
    }
  }
`;

export const NavItemBtn = styled.li`
  @media screen and (max-width: 960px) {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 120px;
  }
`;

export const NavBtnLink = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  padding: 8px 16px;
  height: 100%;
  width: 100%;
  border: none;
  outline: none;
`;
