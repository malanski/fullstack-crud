import './App.scss';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { ThemeProvider } from '@mui/material';
import { theme } from './components/responsive';

import { Header } from './components/Header';
import { Footer } from './components/Footer';

// import { ClientRegister } from './components/ClientRegister';



// Navigation
import { Home } from './pages/home'
import { About } from './pages/about'
import { Register } from './pages/register'
import { ViewClients } from './pages/viewClients'
import { EditClient } from './pages/editClient';
import { Client } from './pages/client';

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
              <Route path='/viewClients' element={<ViewClients />} />
              <Route path='/editClient/:id' element={<EditClient />} />
              <Route path='/client/:id' element={<Client />} />
            </Routes>
          </main>


          <Footer component={Footer} exact />
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
