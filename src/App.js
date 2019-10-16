import React, { Fragment } from 'react';
import Home from './Component/Home';
import NewsDetails from './Component/NewsDetails';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Component/Home/Navbar'
import Footer from './Component/Home/Footer'
import BeritaContextProvider from './Store/BeritaContext';
import Olahraga from './Component/Tags/Olahraga'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <div style={{ margin: '0 10%' }}>
          <BeritaContextProvider>
            <Route exact path='/' component={Home} />
            <Route path='/berita/:id' component={NewsDetails} />
            <Route path='/tags/olahraga' component={Olahraga} />
          </BeritaContextProvider>
        </div>
        <br />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;