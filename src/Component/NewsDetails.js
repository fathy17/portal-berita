import React, { Fragment } from 'react';
import NewsDetail from './News Detail/NewsDetail'
import BeritaContextProvider from '../Store/BeritaContext';
import DetailBeritaContextProvider from '../Store/DetailBeritaContext';

const NewsDetails = (props) => {
    return (
        <Fragment>
            <DetailBeritaContextProvider>
                <NewsDetail berita={props.match.params.id}/>
            </DetailBeritaContextProvider>
        </Fragment>
    );
}

export default NewsDetails;