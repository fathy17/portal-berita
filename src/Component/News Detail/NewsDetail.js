import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { BeritaContext } from '../../Store/BeritaContext';
import Moment from 'react-moment'

const NewsDetail = ({ beritaDetail }) => {
    const { berita } = useContext(BeritaContext)

    const [detail, setDetail] = useState([])
    useEffect(() => {
        Axios.get(`/wp-json/wp/v2/berita/${beritaDetail}`)
            .then(res => setDetail([res.data]))
            .catch(err => console.log(err))
    }, [beritaDetail])

    useEffect(() => {
        window.scrollTo(0, 0)
    },[]);

    if (detail.length) {
        return (
            <Fragment>
                <div style={{ marginTop: '80px' }}>
                    <Grid container >
                        <Grid item xs={12} sm={12} md={8} style={{ paddingRight: '150px' }} className="gridMobile">
                            <img src={detail[0].acf.gambar} alt="anjing" style={{
                                objectFit: 'cover',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat', backgroundColor: 'grey', width: '100%', height: '380px'
                            }} />
                            <h1 style={{ fontSize: '24px', fontWeight: 'bold', lineHeight: '29px' }}>{detail[0].title.rendered}</h1>
                            <h5 style={{ textTransform: 'uppercase', fontSize: '10px', fontWeight: '600', color: '#808080' }}>{detail[0].acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{detail[0].date}</Moment></h5>
                            {detail[0].acf.tag.map(item => {
                                return (
                                    <Fragment key={item}>
                                    <Link to={`/tags/${item}`} style={{ textDecoration: 'none' }}><button style={{ width: '70px', height: '25px', backgroundColor: '#EC9B3B', fontSize: '9px', color: 'white', textTransform: 'uppercase', fontWeight: '600', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px' }}>{item}</button></Link>
                                    </Fragment>
                                )
                            })}
                            <p style={{ fontSize: '14px', fontFamily: 'Raleway', lineHeight: '20px' }} dangerouslySetInnerHTML={{ __html: detail[0].content.rendered }} />
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
                                <h2 style={{ fontWeight: 'bold', marginRight: '15px', fontSize: '24px', letterSpacing: '0.2em', marginTop: '0', marginBottom: '0', color: '#293462' }}>TERBARU</h2>
                                <div style={{ width: '100%', height: '5px', backgroundColor: '#293462' }}></div>
                            </div>
                            {berita.slice(0, 7).map(data => {
                                return (
                                    <div key={data.id}>
                                        <Box style={{ backgroundColor: 'grey', height: '240px', borderRadius: '6px' }}>
                                        <img src={data.acf.gambar} alt={data.title.rendered} style={{ height: '240px', width: '100%', borderRadius: '6px', objectFit: 'cover' }} />
                                        </Box>
                                        <Link to={`/berita/${data.id}`} style={{ textDecoration: 'none' }}><h3 style={{ textTransform: 'uppercase', fontWeight: '600', fontSize: '14px', lineHeight:'17px' }}>{data.title.rendered}</h3></Link>
                                        <hr style={{ height: '2px', width: '100%', border: 'none', backgroundColor: 'grey' }} />
                                    </div>
                                )
                            })}
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