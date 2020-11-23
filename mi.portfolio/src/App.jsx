import React from 'react';
import {ThemeProvider} from '@material-ui/core/styles'
import theme from './themeConfig'
import  AppContainer from './components/AppContainer';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppContainer />

    </ThemeProvider>
  );
}

export default App;


