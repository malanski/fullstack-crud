import './App.scss';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/responsive';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

// import { PatientRegister } from './components/PatientRegister';



// Navigation
import { Home } from './pages/home'
import { About } from './pages/about'
import { Register } from './pages/register'
import { ViewPatients } from './pages/viewPatients'
import { EditPatient } from './pages/editPatient';
import { Patient } from './pages/patient';

function App() {
  return (

    <div className="App">
      <HashRouter>
        <ThemeProvider theme={theme}>
          <Header component={ Header } exact />

          <main>
            <Routes>
              <Route path='/' element={<Home />} />
              <Route path='/about' element={<About />} />
              <Route path='/register' element={<Register />} />
              <Route path='/viewPatients' element={<ViewPatients />} />
              <Route path='/editPatient/:id' element={<EditPatient />} />
              <Route path='/patient/:id' element={<Patient />} />
            </Routes>
          </main>


          <Footer component={Footer} exact />
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
