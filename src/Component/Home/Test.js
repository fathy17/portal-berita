import React from 'react';
import { Link } from 'react-router-dom'
import { Grid, Box } from '@material-ui/core';
import Moment from 'react-moment'

const Test = ({ data }) => {
    return (
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
            <Link to={`/berita/${data.slug}`} >
                <Box className="hover" style={{
                    position: 'relative',
                    height: '320px', borderRadius: '6px',
                    objectFit: 'cover',
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                }}>
                    <img src={data.acf.gambar} alt={data.title.rendered} style={{
                        position: 'relative',
                        backgroundColor: 'grey', height: '320px', borderRadius: '6px',
                        width: '100%',
                        objectFit: 'cover',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        zIndex: '-1'
                    }} />
                    <div style={{
                        textAlign: 'center',
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        color: 'white',
                        width: '80%'
                    }}>
                        <h2 style={{ fontWeight: 'bold', fontSize: '18px', lineHeight: '22px' }} >{data.title.rendered}</h2>
                        <h2 style={{ fontWeight: '500', textTransform: 'uppercase', fontSize: '10px' }}>{data.acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{data.date}</Moment></h2>
                    </div>
                </Box>
            </Link>
        </Grid>
    );
}

export default Test;