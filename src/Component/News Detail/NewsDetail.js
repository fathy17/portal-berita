import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { BeritaContext } from '../../Store/BeritaContext';
import Moment from 'react-moment'
import { Helmet } from "react-helmet";

const NewsDetail = ({ beritaDetail }) => {
    const { berita } = useContext(BeritaContext)

    const [detail, setDetail] = useState([])
    useEffect(() => {
        Axios.get(`https://admin.eksposesulsel.com/wp-json/wp/v2/berita?slug=${beritaDetail}`)
            .then(res => setDetail(res.data))
            .catch(err => console.log(err))
    }, [beritaDetail])

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);


    if (detail.length) {
        return (
            <Fragment>
            <Helmet>
                <title>Ekspose Sulsel - {detail[0].title.rendered}</title>
                <link rel="canonical" href={`https://eksposesulsel.com/berita/${detail[0].slug}`} />
                <meta name="description" content={detail[0].content.rendered} />
                <meta name="keywords" content={detail[0].title.rendered}/>
                <meta name="image" content={detail[0].acf.gambar}/>
            </Helmet>
                <div style={{ marginTop: '80px' }} >
                    <Grid container >
                        <Grid item xs={12} sm={12} md={8} style={{ paddingRight: '150px' }} className="gridMobile">
                            <img className="detailGambar" src={detail[0].acf.gambar} alt="anjing" style={{
                                objectFit: 'cover',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat', backgroundColor: 'grey', width: '100%', height: '380px'
                            }} />
                            <h1 style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '37px', color: '#293462' }}>{detail[0].title.rendered}</h1>
                            <h5 style={{ textTransform: 'uppercase', fontSize: '10px', fontWeight: '600', color: '#808080' }}>{detail[0].acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{detail[0].date}</Moment></h5>
                            <div style={{display:'flex', alignItems:'center', flexWrap:'wrap'}}>
                            {detail[0].acf.tag.map(item => {
                                return (
                                    <Fragment key={item}>
                                        <Link to={`/tags/${item}`} style={{ textDecoration: 'none', display:'flex', alignItems:'center' }}><button style={{ marginBottom:'4px', width: '70px', height: '25px', backgroundColor: '#EC9B3B', fontSize: '9px', color: 'white', textTransform: 'uppercase', fontWeight: '600', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px' }}>{item}</button></Link>
                                    </Fragment>
                                )
                            })}
                            </div>
                            <p style={{ marginTop: '30px', fontSize: '16px', fontFamily: 'Roboto', lineHeight: '25px' }} dangerouslySetInnerHTML={{ __html: detail[0].content.rendered }} />
                            <hr style={{ height: '1px', width: '100%', border: 'none', backgroundColor: '#C4C4C4' }} />
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '170px' }}>
                                <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#293462' }}>BAGIKAN</h3>
                                <FacebookShareButton style={{pointer:'cursor'}} url= {window.location.href}>
                                    <FacebookIcon size={28}/>
                                </FacebookShareButton>
                                <TwitterShareButton style={{pointer:'cursor'}} url= {window.location.href}>
                                    <TwitterIcon size={28} />
                                </TwitterShareButton>
                                <WhatsappShareButton style={{pointer:'cursor'}} url= {window.location.href}>
                                    <WhatsappIcon size={28} />
                                </WhatsappShareButton>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={12} md={4}>
                            <div className="terbaru-detail" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px'}}>
                                <h2 style={{ fontWeight: 'bold', marginRight: '15px', fontSize: '24px', letterSpacing: '0.1em', marginTop: '0', marginBottom: '0', color: '#293462' }}>TERBARU</h2>
                                <div style={{ width: '100%', height: '3px', backgroundColor: '#293462' }}></div>
                            </div>
                            {berita.slice(0, 5).map(data => {
                                return (
                                    <div key={data.id} style={{paddingBottom:'10px'}}>
                                        <Link to={`/berita/${data.slug}`} style={{ textDecoration: 'none' }}>
                                            <Box style={{ backgroundColor: 'grey', height: '240px', borderRadius: '6px' }}>
                                                <img src={data.acf.gambar} alt={data.title.rendered} style={{ height: '240px', width: '100%', borderRadius: '6px', objectFit: 'cover' }} />
                                            </Box>
                                            <h3 style={{ fontWeight: '600', fontSize: '18px', lineHeight: '20px', color: '#293462' }}>{data.title.rendered}</h3>
                                        </Link>
                                        {/* <hr style={{ height: '1px', width: '100%', border: 'none', backgroundColor: '#C4C4C4' }} /> */}
                                    </div>
                                )
                            })}
                            {/* <Box style={{ height: '200px', marginTop: '30px', border: '1px solid grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <h3>SPACE IKLAN</h3>
                            </Box> */}
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