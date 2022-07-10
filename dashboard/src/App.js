import './App.css';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import IndexLanding from './landing';
import {
  Routes,
  Route,
} from "react-router-dom";
import IndexSertifikat from './sertifikat';
import SerfitikatHeader from './sertifikat/SerfitikatHeader';
import SertifikatDetail from './sertifikat/SertifikatDetail';


function App() {
  const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Routes>
      <Route path="/" element={<IndexLanding />} />
      <Route path="serti" element={<IndexSertifikat />}>
        <Route path=":sertiId" element={<SerfitikatHeader />} >
          {/* <Route path=":sertiId" element={<SertifikatDetail />} /> */}
        </Route>
      </Route>
      <Route
      path="*"
      element={
        <main style={{ padding: "1rem" }}>
          <p>There's nothing here!</p>
        </main>
      }
    />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
