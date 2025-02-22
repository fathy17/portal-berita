import React, { useContext } from 'react';
import { Grid, CircularProgress } from '@material-ui/core';
import { BeritaContext } from '../../Store/BeritaContext'
import Test from './Test';

const News = () => {

    const {berita} = useContext(BeritaContext)

    return (
        <div>
            {berita.length ? (
                <div style={{ marginTop: '80px' }}>
                    <Grid container spacing={3}>
                        {berita.slice(0, 2).map(data => {
                            return (
                                
                                    <Test key={data.id} data={data}/>
                                )
                        })}
                    </Grid>
                </div>
            ) : (
                    <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                        <CircularProgress />
                    </div>
                )}
        </div>
    )

}

export default News; 