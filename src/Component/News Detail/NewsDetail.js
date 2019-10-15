import React, { Fragment, useContext, useEffect } from 'react';
import { Grid, Box } from '@material-ui/core';
import { FaFacebook, FaTwitter, FaWhatsapp } from 'react-icons/fa'
import { DetailBeritaContext } from '../../Store/DetailBeritaContext';

const NewsDetail = ({berita}) => {

    const { detailBerita, setBeritaId } = useContext(DetailBeritaContext)

    setBeritaId(berita)

    console.log(detailBerita)

    return (
        <Fragment>
            <div style={{marginTop:'80px'}}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={8}>
                        <Box style={{ backgroundColor: 'grey', width: '100%', height: '500px' }}></Box>
                        <h1 style={{ fontSize: '24px', fontWeight: 'bold', lineHeight:'29px' }}>LOREM IPSUM DOLOR LOREM IPSUM DOLOR LOREM IPSUM DOLOR LOREM IPSUM DOLOR LOREM IPSUM DOLOR</h1>
                        <h5 style={{ textTransform: 'uppercase', fontSize: '9px', fontWeight: '600', color: '#808080' }}>ADMIN - 12 OKTOBER 2019</h5>
                        <button style={{ width: '62px', height: '17px', backgroundColor: 'grey', fontSize: '7px', border: 'none', borderRadius: '3px', cursor: 'pointer' }}>OLAHRAGA</button>
                        <p style={{ fontSize: '14px', fontFamily:'Raleway', lineHeight: '20px' }}>EKSPOSESULSEL.COM - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sagittis blandit semper. Aenean diam nisl, molestie eu mollis non, aliquam vehicula elit. Vivamus in lorem sed diam pretium rhoncus. Nulla facilisi. Pellentesque commodo laoreet ligula, eget mattis sem blandit quis. Aliquam nec felis et elit rhoncus porta. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Ut id urna lacus. Etiam varius ex metus, eu tempor orci cursus eget. In eget tincidunt enim, sit amet elementum enim. Nunc sed dui vel ex auctor molestie. Suspendisse quis nunc at urna mattis eleifend id ut arcu. In hac habitasse platea dictumst. Vestibulum sodales aliquet tincidunt.
    
Mauris malesuada leo mauris, tristique ornare augue tincidunt quis. Etiam et mollis libero, sit amet lacinia dolor. <br /> <br /> Nulla tellus neque, vestibulum in nulla vel, viverra aliquam tellus. Vivamus ornare magna lorem, sed tincidunt lorem consectetur consectetur. Phasellus sodales sollicitudin nunc eget blandit. Suspendisse vitae metus imperdiet, eleifend est vitae, ultricies velit. Sed eget neque urna. Integer et mauris vel ipsum dapibus fringilla eu vitae odio.
                            
Phasellus congue, enim vitae vestibulum ornare, orci lectus fringilla tortor, eget egestas odio purus posuere nulla. <br /> <br /> In quis arcu vel dui efficitur efficitur. Sed fringilla porttitor dapibus. Vivamus vel laoreet mi, in vestibulum dolor. Nullam in aliquet diam. Morbi sit amet semper metus. Pellentesque dignissim ipsum sit amet elit finibus aliquet. Maecenas mattis ante lorem, ac ultrices nunc ornare vel. Sed sed justo neque. Nulla facilisi.
                            
                            Integer pretium malesuada tortor, in varius erat aliquet eget. Nullam semper euismod orci, non sollicitudin sem commodo ac. Curabitur scelerisque auctor odio, sollicitudin lobortis eros rutrum id. Nam rutrum sapien arcu, vel dictum enim efficitur ut. <br /> <br /> Nam pretium lacus a sapien dignissim tincidunt. In hac habitasse platea dictumst. Nulla tristique vestibulum enim ac tristique. Nunc laoreet velit id feugiat laoreet. Maecenas id elementum ipsum. Vestibulum a enim auctor, sollicitudin felis at, varius velit. Pellentesque eget quam vel libero interdum porttitor. Quisque fermentum velit purus, tristique condimentum diam commodo accumsan. Phasellus viverra in enim ut gravida. Aenean pellentesque tortor sem, sit amet gravida lorem convallis in. Fusce sed lorem risus.
                            
Suspendisse viverra mauris varius orci rhoncus, quis pellentesque enim tincidunt. Quisque vitae ornare sem. <br /> <br /> Phasellus laoreet odio quis pellentesque iaculis. Nulla molestie convallis justo et elementum. Etiam nec maximus mauris. Cras laoreet vel dolor sed hendrerit. Quisque blandit sed ipsum ac malesuada.</p>
                        <hr style={{ height: '2px', width: '100%', border: 'none', backgroundColor: 'grey' }} />
                        <div style={{display:'flex', alignItems:'center', justifyContent:'space-between', width:'200px'}}>
                            <h3 style={{fontSize:'14px', fontWeight:'600'}}>BAGIKAN</h3>
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
}

export default NewsDetail;