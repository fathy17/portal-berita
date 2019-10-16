import React from 'react';
import {Link} from 'react-router-dom'
import { Grid, Box } from '@material-ui/core';

const Test = ({data}) => {
    
    return ( 
        <Grid item xs={12} sm={6} md={6} lg={6} xl={6} >
                                <Link to={`/berita/${data.id}`} >
                                    <Box style={{
                                        position: 'relative',
                                        backgroundColor: 'grey', height: '320px', borderRadius: '6px',
                                        objectFit: 'cover',
                                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url("https://truffle-assets.imgix.net/e5c5e4c0-landscape.png")',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat'
                                    }}>
                                        <div style={{
                                            textAlign: 'center',
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: 'white'
                                        }}>
                                            <h2 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '15px' }} >{data.title.rendered}</h2>
                                            <h2 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '10px' }}>{data.acf.penulis}</h2>
                                        </div>
                                    </Box>
                                </Link>
                            </Grid>
     );
}
 
export default Test;