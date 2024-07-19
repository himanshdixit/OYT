import React from 'react';
import { Component } from 'react';
import Logo from '/public/images/logo.png';
import photo2 from '/public/images/photo2.jpg';

class Footer extends Component{
    render() { 
    return (
        <>
<footer class="footer">
    <div class="container">
    <div class="col-lg-12">
    <div class="row" style={{marginTop:'60px'}}>
<div class="col-lg-3 col-xs-12 col-md-3" style={{marginLeft:'auto',marginRight:'auto',textAlign:'left',marginTop:'20px',}}>
    <div class=" ">
    <a class="navbar-brand" href="{{ url('/')}}"><img src={Logo} style={{height:'50px',width:'auto'}} alt="Oyt" /></a>
<br/>

<div style={{ marginLeft:'auto',marginRight:'auto',textAlign:'center'}}>
<p align="justify" style={{color:'#c2c2bc',fontSize:'14px',lineHeight:'1.5'}}>
Plot No. 35 , Ecotech-II , Udyog Vihar Extension. Greater Noida Uttar Pradesh-201306
</p>
</div>

<a href="#"><i class="fa fa-youtube" style={{fontSize:'15px',fonWeight:'400',backgroundColor:'#4a4a48',color:'#fff',padding:'8px',borderRadius:'50%',margin:'5px'}}></i></a>
<a href="#"><i class="fa fa-instagram" style={{fontSize:'15px',fonWeight:'400',backgroundColor:'#4a4a48',color:'#fff',padding:'8px',borderRadius:'50%',margin:'5px'}}></i></a>
<a href="#"><i class="fa fa-pinterest" style={{fontSize:'15px',fonWeight:'400',backgroundColor:'#4a4a48',color:'#fff',padding:'8px',borderRadius:'50%',margin:'5px'}}></i></a>
<a href="#"><i class="fa fa-twitter" style={{fontSize:'15px',fonWeight:'400',backgroundColor:'#4a4a48',color:'#fff',padding:'8px',borderRadius:'50%',margin:'5px'}}></i></a>
<a href="#"><i class="fa fa-facebook-square" style={{fontSize:'15px',fonWeight:'400',backgroundColor:'#4a4a48',color:'#fff',padding:'8px',borderRadius:'50%',margin:'5px'}}></i></a>

<br/>

</div>
</div>
<div class="col-lg-2 col-xs-12 col-md-3" style={{marginLeft:'auto',marginRight:'auto',textAlign:'left',marginTop:'20px',}}>
<div class="footer-title">Services</div>

    <p class="footer-li"><a href="{{ url('/')}}" class="footer-a">About Us</a></p>
	<p class="footer-li"><a href="{{ url('/')}}" class="footer-a">How it works</a></p>
	<p class="footer-li"><a href="{{ url('/')}}" class="footer-a">Our Blogs</a></p>
	<p class="footer-li"><a href="{{ url('/')}}" class="footer-a">Our Services</a></p>
	<p class="footer-li"><a href="{{ url('/')}}" class="footer-a">Contact Us</a></p>

</div>

<div class="col-lg-4 col-xs-12 col-md-3" style={{marginLeft:'auto',marginRight:'auto',textAlign:'left',marginTop:'20px',}}>
<div class="footer-title">Gallery</div>
<img src={photo2} class="img-fluid" style={{height:'50px',width:'auto',margin:'5px',borderRadius:'5px'}}/>
<img src={photo2} class="img-fluid" style={{height:'50px',width:'auto',margin:'5px',borderRadius:'5px'}}/>
<img src={photo2} class="img-fluid" style={{height:'50px',width:'auto',margin:'5px',borderRadius:'5px'}}/>
<img src={photo2} class="img-fluid" style={{height:'50px',width:'auto',margin:'5px',borderRadius:'5px'}}/>
<img src={photo2} class="img-fluid" style={{height:'50px',width:'auto',margin:'5px',borderRadius:'5px'}}/>
<img src={photo2} class="img-fluid" style={{height:'50px',width:'auto',margin:'5px',borderRadius:'5px'}}/>
</div>

<div class="col-lg-3 col-xs-12 col-md-3" style={{marginLeft:'auto',marginRight:'auto',textAlign:'left',marginTop:'20px',}}>
<div class="footer-title">Contacts</div>

<i class="fa fa-map-marker" style={{fontSize:'20px',fontWeight:'400',color:'#3c77c9',padding:'5px',borderRadius:'50%',margin:'5px'}}></i><a href="#" style={{color:'#c2c2bc',fontSize:'14px'}}>Plot no. 20 , North America , pin - 201452</a>
<br/>
<i class="fa fa-phone" style={{fontSize:'20px',fontWeight:'400',color:'#3c77c9',padding:'5px',borderRadius:'50%',margin:'5px'}}></i><a href="#" style={{color:'#c2c2bc',fontSize:'14px'}}>+91 999999999</a>
<br/>
<i class="fa fa-envelope" style={{fontSize:'20px',fontWeight:'400',color:'#3c77c9',padding:'5px',borderRadius:'50%',margin:'5px'}}></i><a href="#" style={{color:'#c2c2bc',fontSize:'14px'}}>feedback@oyt.com</a>


</div>

</div>
    </div>
</div>
</footer>
<div className="col-lg-12 col-xs-12" style={{backgroundColor:'#3c77c9'}}>
<div className="container" style={{color:'#fff',paddingTop:'15px',paddingBottom:'15px',fontSize:'12px'}} >©<span className="copyright-year">2023</span> OYT. | Website by <a href="#" target="_blank" style={{color:'#fff'}}>LTS</a> | <a href="/sitemap.xml" style={{color:'#fff'}}>Sitemap </a>| <a href="#"></a><br/></div>
</div>
        </>
    );
}
}

export default Footer;