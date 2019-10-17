import React, { Fragment, useContext } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { BeritaContext } from '../../Store/BeritaContext';
import { Link } from 'react-router-dom'
import Moment from 'react-moment'

const Sosial = () => {
    const { berita } = useContext(BeritaContext)
    const tag = "Sosial"
    let data = berita.filter(item => item.acf.tag[0] === tag || item.acf.tag[1] === tag
        || item.acf.tag[2] === tag || item.acf.tag[3] === tag || item.acf.tag[4] === tag)

    return (
        <Fragment>
            <div style={{ marginTop: '80px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                            <h2 style={{ margin: '0 15px 0 0', fontSize: '24px', letterSpacing: '0.2em', fontWeight: 'bold', color: '#293462' }}>SOSIAL</h2>
                            <div style={{ width: '100%', height: '5px', backgroundColor: '#293462' }}></div>
                        </div>
                        <Grid container spacing={3}>
                            {data.length ? (
                                <Fragment>
                                    {data.map(data => {
                                        return (
                                            <Fragment key={data.id}>
                                                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="gMobile">
                                                    <Box className="boxMobile" style={{ backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }}>
                                                        <img src={data.acf.gambar} alt={data.title.rendered} style={{ objectFit: 'cover', backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }} />
                                                    </Box>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                                    <Link to={`/berita/${data.id}`} style={{ textDecoration: 'none' }}>
                                                        <h2 style={{ marginTop: '10px', marginBottom: '10px', fontWeight: '600', fontSize: '18px', fontStyle: 'normal', color: '#293462' }}>{data.title.rendered}</h2>
                                                    </Link>
                                                    <h2 style={{ fontWeight: '600', fontSize: '12px', color: '#808080' }}>{data.acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{data.date}</Moment></h2>
                                                    <div style={{ fontSize: '12px', height: '50px' }} dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
                                                    {data.acf.tag.map(item => {
                                                        return (
                                                            <Fragment key={item}>
                                                                <Link to={`/tags/${item}`} style={{ textDecoration: 'none' }}><button style={{ width: '70px', marginTop:'5px', height: '25px', backgroundColor: '#EC9B3B', fontSize: '9px', color: 'white', textTransform: 'uppercase', fontWeight: '600', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px' }}>{item}</button></Link>
                                                            </Fragment>
                                                        )
                                                    })}
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

export default Sosial