import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import ThemeSelector from '../ThemeSelector';


const NavbarContainer = styled.nav`
  background-color: ${(props: any) => props.theme.navbar};
  color: white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-family: 'Sans Serif';
`;

const NavLinks = styled.div`
  a {
    color: white;
    text-decoration: none;
    margin-right: 1rem;

    &:hover {
      text-decoration: underline;
    }
  }
`;


function Navbar() {
    return (
        <NavbarContainer>
          <ThemeSelector />
          <Logo>Task</Logo>
          <NavLinks>
            <Link to="/">Home</Link>
            <Link to="/users">Users</Link>
          </NavLinks>
        </NavbarContainer>
      );
  }
  
  export default Navbar;