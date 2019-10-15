import React, { Fragment } from 'react';
import News from './Home/News'
import Populer from './Home/Populer'
import Terbaru from './Home/Terbaru'
import BeritaContextProvider from '../Store/BeritaContext';
import DetailBeritaContextProvider from '../Store/DetailBeritaContext';


const Home = () => {
    return (
        <Fragment>
            <DetailBeritaContextProvider>
                <BeritaContextProvider>
                    <News />
                    <Populer />
                    <Terbaru />
                </BeritaContextProvider>
            </DetailBeritaContextProvider>
        </Fragment>
    );
}

export default Home;