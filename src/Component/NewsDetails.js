import React, { Fragment, useEffect } from 'react';
import NewsDetail from './News Detail/NewsDetail'

const NewsDetails = (props) => {
    useEffect(() => {
        window.scrollTo(0, 0)
    });
    return (
        <Fragment>
            <div className="margin">
                <NewsDetail beritaDetail={props.match.params.id} />
            </div>
        </Fragment>
    );
}

export default NewsDetails;