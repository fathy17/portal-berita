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
                                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                    }}>
                                        <img src={data.acf.gambar} alt={data.title.rendered} style={{
                                        position: 'relative',
                                        backgroundColor: 'grey', height: '320px', borderRadius: '6px',
                                        width:'100%',
                                        objectFit: 'cover',
                                        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7))',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat',
                                        zIndex:'2',
                                        opacity:'0.2'
                                    }}/>
                                        <div style={{
                                            textAlign: 'center',
                                            position: 'absolute',
                                            top: '50%',
                                            left: '50%',
                                            transform: 'translate(-50%, -50%)',
                                            color: 'white',
                                            zIndex:'3'
                                        }}>
                                            <h2 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '18px', lineHeight:'22px' }} >{data.title.rendered}</h2>
                                            <h2 style={{ fontWeight: 'bold', textTransform: 'uppercase', fontSize: '10px' }}>{data.acf.penulis}</h2>
                                        </div>
                                    </Box>
                                </Link>
                            </Grid>
     );
}
 
export default Test;