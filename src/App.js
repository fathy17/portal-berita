import React, { Fragment } from 'react';
import Home from './Component/Home';
import NewsDetails from './Component/NewsDetails';
import { BrowserRouter, Route } from 'react-router-dom'
import Navbar from './Component/Home/Navbar'
import Footer from './Component/Home/Footer'
import BeritaContextProvider from './Store/BeritaContext';
import Olahraga from './Component/Tags/Olahraga'
import Daerah from './Component/Tags/Daerah';
import Sosial from './Component/Tags/Sosial';
import Kriminal from './Component/Tags/Kriminal';
import Politik from './Component/Tags/Politik';

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
            <Route path='/tags/Daerah' component={Daerah} />
            <Route path='/tags/Kriminal' component={Kriminal} />
            <Route path='/tags/Politik' component={Politik} />
            <Route path='/tags/Sosial' component={Sosial} />
          </BeritaContextProvider>
        </div>
        <br />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;