import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IndexLanding from './landing';
function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <IndexLanding />
    </ThemeProvider>
  );
}

export default App;
