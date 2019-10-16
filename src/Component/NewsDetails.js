import React, { Fragment } from 'react';
import NewsDetail from './News Detail/NewsDetail'

const NewsDetails = (props) => {
    return (
        <Fragment>
                <NewsDetail berita={props.match.params.id}/>
        </Fragment>
    );
}

export default NewsDetails;