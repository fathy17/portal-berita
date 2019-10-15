import React, { Fragment } from 'react';
import Home from './Component/Home';
import NewsDetails from './Component/NewsDetails';
import { BrowserRouter, Route } from 'react-router-dom'
import Tags from './Component/Tags';
import Navbar from './Component/Home/Navbar'
import Footer from './Component/Home/Footer'

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Navbar />
        <div style={{ margin: '0 10%' }}>
            <Route exact path='/' component={Home} />
            <Route path='/berita/:id' component={NewsDetails} />
            <Route path='/tags/:id' component={Tags} />
        </div>
        <br />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;