import React, { Fragment, useContext } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom'
import { BeritaContext } from '../../Store/BeritaContext';


const Populer = () => {
    const { berita } = useContext(BeritaContext)
    return (
        <Fragment>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ marginRight: '15px', fontSize: '24px', letterSpacing: '0.25em', fontWeight: 'bold' }}>POPULER</h2>
                <div style={{ width: '100%', height: '5px', backgroundColor: '#333333' }}></div>
            </div>
            {berita.length ? (
                <Fragment>
                    <div>
                        <Grid container spacing={3}>
                            {berita.slice(0, 3).map(data => {
                                return (
                                    <Grid key={data.id} item xs={12} sm={4} md={4} lg={4} xl={4}>
                                        <Box style={{ height: '215px', borderRadius: '6px', backgroundColor: 'grey' }}>
                                            <img src={data.acf.gambar} alt={data.title.rendered} style={{ height: '215px', width: '100%', borderRadius: '6px', objectFit: 'cover' }} />
                                        </Box>
                                        <Link to={`/berita/${data.id}`} style={{ textDecoration: 'none', color: 'black' }}>
                                            <h2 style={{ marginTop: '10px', fontWeight: '600', fontSize: '18px', fontStyle: 'normal' }}>{data.title.rendered}</h2>
                                        </Link>
                                        <h2 style={{ fontWeight: '600', fontSize: '12px', color: '#808080' }}>{data.acf.penulis}</h2>
                                        <div style={{ height: '100px' }}>
                                            <div style={{ fontFamily: 'Raleway', fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
                                        </div>
                                        {data.acf.tag.map(item=>{
                                            return (
                                                <button key={item} style={{ width: '62px', height: '17px', backgroundColor: 'grey', fontSize: '7px', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight:'5px' }}>{item}</button>
                                            )
                                        })}
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                </Fragment>
            ) : (
                    <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                        <CircularProgress />
                    </div>
                )}

        </Fragment>
    );
}

export default Populer;