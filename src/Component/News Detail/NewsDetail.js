import React, { Fragment, useEffect, useState } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import Axios from 'axios'

const NewsDetail = ({ berita }) => {
    const [detail, setDetail] = useState([])
    useEffect(() => {
        Axios.get(`/wp-json/wp/v2/berita/${berita}`)
            .then(res => setDetail([res.data]))
            .catch(err => console.log(err))
    }, [berita])

    if (detail.length) {
        return (
            <Fragment>
                <div style={{ marginTop: '80px' }}>
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} md={8}>
                            <img src={detail[0].acf.gambar} alt="anjing" style={{
                                objectFit: 'cover',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat', backgroundColor: 'grey', width: '100%', height: '500px'
                            }} />
                            <h1 style={{ fontSize: '24px', fontWeight: 'bold', lineHeight: '29px' }}>{detail[0].title.rendered}</h1>
                            <h5 style={{ textTransform: 'uppercase', fontSize: '9px', fontWeight: '600', color: '#808080' }}>mawang</h5>
                            <button style={{ width: '62px', height: '17px', backgroundColor: 'grey', fontSize: '7px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>OLAHRAGA</button>
                            <p style={{ fontSize: '14px', fontFamily: 'Raleway', lineHeight: '20px' }} />
                            <hr style={{ height: '2px', width: '100%', border: 'none', backgroundColor: 'grey' }} />
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '200px' }}>
                                <h3 style={{ fontSize: '14px', fontWeight: '600' }}>BAGIKAN</h3>
                                <FaFacebook />
                                <FaTwitter />
                                <FaWhatsapp />
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                                <h2 style={{ fontWeight: 'bold', marginRight: '15px', fontSize: '18px', letterSpacing: '0.15em', marginTop: '0', marginBottom: '0' }}>TERBARU</h2>
                                <div style={{ width: '100%', height: '5px', backgroundColor: '#333333' }}></div>
                            </div>
                            <div>
                                <Box style={{ backgroundColor: 'grey', height: '190px', borderRadius: '6px' }}></Box>
                                <h3 style={{ textTransform: 'uppercase', fontWeight: '600', fontSize: '12px' }}>Lorem Ipsum Bla Bla Bla</h3>
                                <hr style={{ height: '2px', width: '100%', border: 'none', backgroundColor: 'grey' }} />
                            </div>
                            <Box style={{ backgroundColor: 'grey', height: '500px' }}></Box>
                        </Grid>
                    </Grid>
                </div>
            </Fragment>
        );

    } return <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
        <CircularProgress />
    </div>

}

export default NewsDetail;