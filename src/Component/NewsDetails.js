import React, { Fragment } from 'react';
import NewsDetail from './News Detail/NewsDetail'

const NewsDetails = (props) => {
    return (
        <Fragment>
                <NewsDetail beritaDetail={props.match.params.id}/>
        </Fragment>
    );
}

export default NewsDetails;