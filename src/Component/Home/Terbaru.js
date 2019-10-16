import React, { Fragment, useContext } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { BeritaContext } from '../../Store/BeritaContext';

const Terbaru = () => {
    const { berita } = useContext(BeritaContext)
    return (
        <Fragment>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={7}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <h2 style={{ marginRight: '15px', fontSize: '24px', letterSpacing: '0.25em', fontWeight: 'bold' }}>TERBARU</h2>
                        <div style={{ width: '100%', height: '5px', backgroundColor: '#333333' }}></div>
                    </div>
                    {berita.length ? (
                        <Fragment>
                            <Grid container spacing={3}>
                                {berita.slice(0, 7).map(data => {
                                    return (
                                        <Fragment key={data.id}>
                                            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                                                <Box style={{ backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }}>
                                                    <img src={data.acf.gambar} alt={data.title.rendered} style={{ objectFit: 'cover', backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }} />
                                                </Box>
                                            </Grid>
                                            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                                <h2 style={{ marginTop: '10px', fontWeight: '600', fontSize: '12px', fontStyle: 'normal' }}>{data.title.rendered}</h2>
                                                <h2 style={{ fontWeight: '600', fontSize: '9px', color: '#808080' }}>{data.acf.penulis}</h2>
                                                <div style={{ fontSize: '11px' }} dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
                                                <button style={{ width: '62px', height: '17px', backgroundColor: 'grey', fontSize: '7px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>OLAHRAGA</button>
                                            </Grid>
                                            <hr style={{ height: '2px', width: '100%', border: 'none', backgroundColor: 'grey' }} />
                                        </Fragment>
                                    )
                                })}
                            </Grid>
                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
                                <button style={{
                                    width: '160px',
                                    height: '40px',
                                    fontSize: '18px',
                                    letterSpacing: '0.1em',
                                    fontWeight: 'bold',
                                    fontFamily: 'Montserrat',
                                    background: 'none',
                                    border: 'solid 1px black',
                                    margin: '10px',
                                    cursor: 'pointer',
                                }}>LOAD MORE</button>
                            </div>
                        </Fragment>
                    ) : (
                            <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                                <CircularProgress />
                            </div>
                        )}


                </Grid>
                <Grid item xs={12} sm={5}>
                    <Box style={{ backgroundColor: 'grey', height: '100%', marginTop: '30px' }}></Box>
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
        </Fragment>
    );
}

export default Terbaru;