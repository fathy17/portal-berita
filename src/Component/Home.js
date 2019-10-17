import React, { Fragment, useContext, useEffect } from 'react';
import News from './Home/News'
import Populer from './Home/Populer'
import Terbaru from './Home/Terbaru'
import BeritaContextProvider, { BeritaContext } from '../Store/BeritaContext';
import { CircularProgress } from '@material-ui/core';


const Home = () => {
    const { berita } = useContext(BeritaContext)
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <BeritaContextProvider>
            {berita.length ? (
                <Fragment>
                    <News />
                    <Populer />
                    <Terbaru />
                </Fragment>
            ) : (
                    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                        <CircularProgress />
                    </div>
                )}
        </BeritaContextProvider>
    );
}

export default Home;