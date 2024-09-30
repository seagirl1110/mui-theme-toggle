import './App.css';
import React, { useState } from 'react';
import {
  ThemeProvider,
  createTheme,
  CssBaseline,
  Typography,
} from '@mui/material';
import styled from '@emotion/styled';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#2196f3',
      hover: '#4a8ec3',
      contrastText: 'white',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#c4e5ff',
      hover: '#d5e9f8',
      contrastText: 'black',
    },
  },
});

const Button = styled.button`
  background-color: ${(props) => props.theme.palette.primary.main};
  color: ${(props) => props.theme.palette.primary.contrastText};
  border-radius: 5px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.palette.primary.hover};
  }
`;

function App() {
  const [theme, setTheme] = useState(lightTheme);

  const toggleTheme = () =>
    setTheme((prev) => (prev === lightTheme ? darkTheme : lightTheme));

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <Typography variant="h4">
          {theme === lightTheme ? 'Light Theme' : 'Dark Theme'}
        </Typography>
        <Button onClick={toggleTheme}>Toggle Theme</Button>
      </div>
    </ThemeProvider>
  );
}

export default App;
