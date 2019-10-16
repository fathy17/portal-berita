import React, { Fragment, useContext } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { BeritaContext } from '../../Store/BeritaContext';

const Politik = () => {
    const { berita } = useContext(BeritaContext)

    const tag = "Politik"
    let data = berita.filter(item => item.acf.tag[0] === tag || item.acf.tag[1] === tag 
    || item.acf.tag[2] === tag || item.acf.tag[3] === tag || item.acf.tag[4] === tag)

    return (
        <Fragment>
            <div style={{ marginTop: '80px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                            <h2 style={{ margin: '0 15px 0 0', fontSize: '24px', letterSpacing: '0.25em', fontWeight: 'bold' }}>POLITIK</h2>
                            <div style={{ width: '100%', height: '5px', backgroundColor: '#333333' }}></div>
                        </div>
                        <Grid container spacing={3}>
                        {data.length ? (
                            <Fragment>
                            {data.map(item => {
                                return (
                                    <Fragment key={item.id}>
                                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} >
                                        <Box style={{ backgroundColor: 'grey', height: '120px', borderRadius: '6px' }}></Box>
                                    </Grid>
                                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                        <h2 style={{ marginTop: '10px', fontWeight: '600', fontSize: '12px', fontStyle: 'normal' }}>{item.title.rendered}</h2>
                                        <h2 style={{ fontWeight: '600', fontSize: '9px', color: '#808080' }}>{item.acf.penulis}</h2>
                                        <p style={{ fontSize: '11px' }}>Lorem ipsum dolor sit amet Lorem ipsum dolor</p>
                                        <button style={{ width: '62px', height: '17px', backgroundColor: 'grey', fontSize: '7px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>OLAHRAGA</button>
                                    </Grid>
                                    <hr style={{ height: '2px', width: '100%', border: 'none', backgroundColor: 'grey' }} />
                                </Fragment>
                                )
                            })}
                            </Fragment>
            ) : (
                    <div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                        <CircularProgress />
                    </div>
                )}

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
                        </Grid>
                    </Grid>
                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                        <Box style={{ backgroundColor: 'grey', height: '100%' }}></Box>
                    </Grid>
                </Grid>
                <br />
                <br />
            </div>
        </Fragment>
    );
}

export default Politik