import React from 'react';
import styled from 'styled-components';
import { darkTheme, lightTheme } from '../../themes';
import { useAppDispatch } from '../../hooks';
import { changeTheme } from '../../models/themeToggle';

const StyledButton = styled.button`
  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.primary};
  box-shadow: none;
  border: 0px;
  border-radius: 4px;
  font-size: 0.5 em;
  min-width: 120px;
  padding: 5px;
  margin: 5px;
`;

const ThemeSelector = () => {

  const dispatch = useAppDispatch()

  const handlechangeTheme = (theme: any) => {
    dispatch(changeTheme(theme))
  }

  return (
    <div>
      <StyledButton onClick={() => handlechangeTheme(darkTheme)}>Dark</StyledButton>
      <StyledButton onClick={() => handlechangeTheme(lightTheme)}>Light</StyledButton>
    </div>
  );
}

export default ThemeSelector;