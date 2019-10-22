import React, { Fragment } from 'react';
import Home from './Component/Home';
import NewsDetails from './Component/NewsDetails';
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Navbar from './Component/Home/Navbar'
import Footer from './Component/Home/Footer'
import BeritaContextProvider from './Store/BeritaContext';
import Daerah from './Component/Tags/Daerah';
import Ekobis from './Component/Tags/Ekobis';
import HukumKriminal from './Component/Tags/HukumKriminal';
import Nasional from './Component/Tags/Nasional';
import Peristiwa from './Component/Tags/Peristiwa';
import Politik from './Component/Tags/Politik';
import Ragam from './Component/Tags/Ragam';
import Sport from './Component/Tags/Sport';
import Teknologi from './Component/Tags/Teknologi';
import { Helmet } from "react-helmet";
import SearchPage from './Component/Home/SearchPage';
import TagsContextProvider from './Store/TagsContext';

function App() {
  return (
    <Fragment>
      <Helmet>
        <title>Ekspose Sulsel</title>
        <link rel="canonical" href="https://eksposesulsel.com/" />
        <meta name="description" content="Portal Berita Sulawesi Selatan" />
        <meta name="keywords" content="Portal Berita Sulawesi Selatan" />
      </Helmet>
      <BrowserRouter>
        <Navbar />
        <TagsContextProvider>
          <BeritaContextProvider>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route path='/berita/:id' component={NewsDetails} />
                <Route path='/tags/Daerah' component={Daerah} />
                <Route path='/tags/Ekobis' component={Ekobis} />
                <Route path='/tags/Hukum Kriminal' component={HukumKriminal} />
                <Route path='/tags/Nasional' component={Nasional} />
                <Route path='/tags/Peristiwa' component={Peristiwa} />
                <Route path='/tags/Politik' component={Politik} />
                <Route path='/tags/Ragam' component={Ragam} />
                <Route path='/tags/Sport' component={Sport} />
                <Route path='/tags/Teknologi' component={Teknologi} />
                <Route exact path='/search/:id' component={SearchPage} />
              </Switch>
          </BeritaContextProvider>
        </TagsContextProvider>
        <br />
        <Footer />
      </BrowserRouter>
    </Fragment>
  );
}

export default App;