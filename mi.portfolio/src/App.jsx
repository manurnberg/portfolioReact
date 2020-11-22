import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig'
import NavBar from './components/NavBar'


function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavBar>


      </NavBar>
      
    </ThemeProvider>
  );
}

export default App;


