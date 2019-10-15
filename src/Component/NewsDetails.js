import React, { Fragment } from 'react';
import NewsDetail from './News Detail/NewsDetail'
import BeritaContextProvider from '../Store/BeritaContext';
import DetailBeritaContextProvider from '../Store/DetailBeritaContext';

const NewsDetails = () => {
    return (
        <Fragment>
            <DetailBeritaContextProvider>
                <NewsDetail />
            </DetailBeritaContextProvider>
        </Fragment>
    );
}

export default NewsDetails;