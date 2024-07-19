import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';

import Item from './Item'
import Item_cruise from './Item_cruise'

// import { ShoppingCart } from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import { useSelector } from 'react-redux';

import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';

import k1 from '/public/images/k1.jpg';
import k2 from '/public/images/k2.jpg';
import k3 from '/public/images/k3.jpg';
import k4 from '/public/images/k4.jpg';

import icon1 from '/public/images/icons/icon1.png';
import icon2 from '/public/images/icons/icon2.png';
import icon3 from '/public/images/icons/icon3.png';
import icon4 from '/public/images/icons/icon4.png';

import bg2 from '/public/images/backgrounds/2.png';
import caravan from '/public/images/icons/caravan.png';
import cruise from '/public/images/icons/cruise.png';
import holiday from '/public/images/icons/holiday.png';
import resort from '/public/images/icons/resort.png';
import golf from '/public/images/icons/golf.png';
import wine from '/public/images/icons/wine.png';
import honeymoon from '/public/images/icons/honeymoon.png';
import hotel from '/public/images/icons/hotel.png';
import wedding from '/public/images/icons/wedding.png';
import plane from '/public/images/icons/plane.png';


import b1 from '/public/images/mbslider/1.jpg';
import b2 from '/public/images/mbslider/2.jpg';
import b3 from '/public/images/mbslider/3.jpg';
import b4 from '/public/images/mbslider/4.jpg';
import b5 from '/public/images/mbslider/5.jpg';
import b6 from '/public/images/mbslider/6.jpg';
import b7 from '/public/images/mbslider/7.jpg';

import mb1 from '/public/images/mbslider/mb1.jpg';
import mb2 from '/public/images/mbslider/mb2.jpg';
import mb3 from '/public/images/mbslider/mb3.jpg';
import mb4 from '/public/images/mbslider/mb4.jpg';
import mb5 from '/public/images/mbslider/mb5.jpg';
import mb6 from '/public/images/mbslider/mb6.jpg';

import Cart from './Cart';
import CartItem from './CartItem';

const Homebanner=()=>{

    const navigate = useNavigate()
    const cart = useSelector((state) => state.cart)
  
    const getTotalQuantity = () => {
      let total = 0
      cart.forEach(item => {
        total += item.quantity
      })
      return total
    }

    const dispatch = useDispatch()

    const capitalizeWords = (str) => {
        return str
          .toLowerCase()
          .split(' ')
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
      };

    const [data1, setData1] = useState([])
    useEffect(()=> {
        axios.get(`/api/hotels/`)
        .then(res => {
            //console.log(res)
            //console.log(res.data.data[0].name)
            //console.log(res.data)
            setData1(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, []) 


    const [data2, setData2] = useState([])
    useEffect(()=> {
        axios.get(`/api/cruises/`)
        .then(res => {
            //console.log(res)
            //console.log(res.data.data[0].name)
            //console.log(res.data)
            setData2(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    const [data3, setData3] = useState([])
    useEffect(()=> {
        axios.get(`/api/weddings/`)
        .then(res => {
            setData3(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])


    const [data4, setData4] = useState([])
    useEffect(()=> {
        axios.get(`/api/wines/`)
        .then(res => {
            setData4(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])




    const [data5, setData5] = useState([])

    useEffect(()=> {
        axios.get(`/api/caravans/`)
        .then(res => {
            setData5(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    const [data6, setData6] = useState([])

    useEffect(()=> {
        axios.get(`/api/honeymoons/`)
        .then(res => {
            setData6(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    const [data8, setData8] = useState([])

    useEffect(()=> {
        axios.get(`/api/resorts/`)
        .then(res => {
            setData8(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    const [data9, setData9] = useState([])
    useEffect(()=> {
        axios.get(`/api/planes/`)
        .then(res => {
            setData9(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    const [data10, setData10] = useState([])
    useEffect(()=> {
        axios.get(`/api/golfs/`)
        .then(res => {
            setData10(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])

    const [data101, setData101] = useState([])
    useEffect(()=> {
        axios.get(`/api/golfs1/`)
        .then(res => {
            setData101(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
    const [data102, setData102] = useState([])
    useEffect(()=> {
        axios.get(`/api/golfs2/`)
        .then(res => {
            setData102(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])
    const [data103, setData103] = useState([])
    useEffect(()=> {
        axios.get(`/api/golfs3/`)
        .then(res => {
            setData103(res.data.data)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [])


    // const [cart, setCart] = useState([])
    // console.log(cart);
    // console.log(cart.length);

    // const addToCart=(data)=>{
    //     //console.log(data);
    //     setCart([...cart,{ ...data , qty : 1 }]);
    // }

    // var cartLenght = cart.length;
    
    // var cartMenu = "";

    // cartMenu = cart.map( (item, index) => {
    //     return (
    //         <>
    //         <CartItem props={item}/>
    //         </>
    //     )
    // })

    // var varOne = 'Mike';

    return (
        <>

{/* <div>
<Cart cart={cart}/>
</div> */}

{/* <div>
<Cart cart={cart}>
{
    (cart)=>{
        return <Link to="/cart">
        My Cart
        </Link>

}}
</Cart>
</div> */}


<div class="uk-position-relative uk-visible-toggle uk-light deskContent" style={{ marginTop:'98px  '}} tabindex="-1" uk-slideshow="max-height: 490;animation: fade;autoplay: true;">
    <ul class="uk-slideshow-items">
        <li>
            <img src={b1} alt="oyt" uk-cover />
        </li>
        <li>
            <img src={b2} alt="oyt" uk-cover />
            {/* <div style={{position:'absolute',marginTop:'-80%',textAlign:'center',zIndex:'11'}}>
        <div class="text1">
			<h2 style={{color:'white  ',fontFamily: 'Konkhmer Sleokchher  ',fontWeight: 'bolder  ',lineHeight: '41px  ',letterSpacing: '2px'}}><u style={{marginTop:'5px'}}>EXPLORE</u> THE <b style={{color:'yellow'}}>WORLD</b> TOGETHER</h2>
        </div>
	  </div> */}
        </li>
        <li>
            <img src={b3} alt="oyt" uk-cover />
            {/* <div style={{position:'absolute',marginTop:'-80%',textAlign:'center',zIndex:'11'}}>
		<div class="wrapper four">
        <div class="type">
			<h1 class="typing" style={{color:'white  ',fontFamily: 'Konkhmer Sleokchher  ',fontWeight: 'bolder  ',lineHeight: '41px  ',letterSpacing: '2px'}}><u style={{marginTop:'5px'}}>EXPLORE</u></h1>
			<h1 class="typing" style={{color:'white  ',fontFamily: 'Konkhmer Sleokchher  ',fontWeight: 'bolder  ',lineHeight: '41px  ',letterSpacing: '2px'}}>THE <b style={{color:'yellow'}}>WORLD</b> TOGETHER...</h1>
        </div>
		</div>	  
	  </div> */}
        </li>
        <li>
            <img src={b4} alt="oyt" uk-cover />
        </li>
        <li>
            <img src={b5} alt="oyt" uk-cover />
        </li>
        <li>
            <img src={b6} alt="oyt" uk-cover />
        </li>
        <li>
            <img src={b7} alt="oyt" uk-cover />
        </li>
    </ul>
    <a class="uk-position-center-left uk-position-small uk-hidden-hover" href uk-slidenav-previous uk-slideshow-item="previous"></a>
    <a class="uk-position-center-right uk-position-small uk-hidden-hover" href uk-slidenav-next uk-slideshow-item="next"></a>
    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center"></ul>
</div>



<div class="uk-position-relative uk-visible-toggle uk-light phoneContent" tabindex="-1" uk-slideshow="max-height: 120;animation: fade;autoplay: true;">
    <ul class="uk-slideshow-items">
        <li>
            <img src={mb1} alt="oyt" uk-cover />
        </li>
        <li>
            <img src={mb2} alt="oyt" uk-cover />
            {/* <div style={{position:'absolute',marginTop:'-80%',textAlign:'center',zIndex:'11'}}>
        <div class="text1">
			<h2 style={{color:'white  ',fontFamily: 'Konkhmer Sleokchher  ',fontWeight: 'bolder  ',lineHeight: '41px  ',letterSpacing: '2px'}}><u style={{marginTop:'5px'}}>EXPLORE</u> THE <b style={{color:'yellow'}}>WORLD</b> TOGETHER</h2>
        </div>
	  </div> */}
        </li>
        <li>
            <img src={mb3} alt="oyt" uk-cover />
            {/* <div style={{position:'absolute',marginTop:'-80%',textAlign:'center',zIndex:'11'}}>
		<div class="wrapper four">
        <div class="type">
			<h1 class="typing" style={{color:'white  ',fontFamily: 'Konkhmer Sleokchher  ',fontWeight: 'bolder  ',lineHeight: '41px  ',letterSpacing: '2px'}}><u style={{marginTop:'5px'}}>EXPLORE</u></h1>
			<h1 class="typing" style={{color:'white  ',fontFamily: 'Konkhmer Sleokchher  ',fontWeight: 'bolder  ',lineHeight: '41px  ',letterSpacing: '2px'}}>THE <b style={{color:'yellow'}}>WORLD</b> TOGETHER...</h1>
        </div>
		</div>	  
	  </div> */}
        </li>
        <li>
            <img src={mb4} alt="oyt" uk-cover />
        </li>
        <li>
            <img src={mb5} alt="oyt" uk-cover />
        </li>
        <li>
            <img src={mb6} alt="oyt" uk-cover />
        </li>

    </ul>
    <ul class="uk-slideshow-nav uk-dotnav uk-flex-center" style={{ marginTop:'5px',marginBottom:'15px' }}></ul>

</div>


{/* { cartMenu }
{ cartLenght } */}



{/* <!-- ------------------ start mobile home slider---------- --> */}



{/* <!-- -----------------------------------Start -------------- --> */}
<div style={{backgroundColor: 'rgb(245, 245, 245)',borderTop: '1px solid lightgrey',borderBottom: '1px solid lightgrey',paddingLeft:'10px',paddingRight:'10px',paddingTop:'10px',paddingBottom:'10px',marginTop:'10px'}}>
<div class="container deskContent">
<div class="row">

<div class="col-lg-1 col-md-6 col-xs-6 col-4">
<div style={{textAlign:'center'}}><img src={hotel} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
<br/><b style={{ color:'#3c77c9'}}>Hotel</b>
</div>
</div>

<div class="col-lg-1 col-md-6 col-xs-6 col-4">
<div style={{textAlign:'center'}}><img src={cruise} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
<br/><b style={{ color:'#3c77c9'}}>Cruise</b>
</div>
</div>

<div class="col-lg-1 col-md-6 col-xs-6 col-4">
<div style={{textAlign:'center'}}><img src={caravan} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
<br/><b style={{ color:'#3c77c9'}}>Caravan</b>
</div>
</div>

<div class="col-lg-1 col-md-6 col-xs-6 col-4">
<div style={{textAlign:'center'}}><img src={holiday} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
<br/><b style={{ color:'#3c77c9'}}>Holiday</b>
</div>
</div>

<div class="col-lg-1 col-md-6 col-xs-6 col-4">
<div style={{textAlign:'center'}}><img src={resort} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
<br/><b style={{ color:'#3c77c9'}}>Resort</b>
</div>
</div>

<div class="col-lg-1 col-md-6 col-xs-6 col-4">
<div style={{textAlign:'center'}}><img src={honeymoon} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
<br/><b style={{ color:'#3c77c9'}}>Honeymoon</b>
</div>
</div>

<div class="col-lg-1 col-md-6 col-xs-6 col-4">
<div style={{textAlign:'center'}}><img src={wine} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
<br/><b style={{ color:'#3c77c9'}}>Wine</b>
</div>
</div>

<div class="col-lg-1 col-md-6 col-xs-6 col-4">
<div style={{textAlign:'center'}}><img src={wedding} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
<br/><b style={{ color:'#3c77c9'}}>Wedding</b>
</div>
</div>

<div class="col-lg-1 col-md-6 col-xs-6 col-4">
<div style={{textAlign:'center'}}><img src={plane} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
<br/><b style={{ color:'#3c77c9'}}>Plane</b>
</div>
</div>

<div class="col-lg-1 col-md-6 col-xs-6 col-4">
<div style={{textAlign:'center'}}><img src={golf} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
<br/><b style={{ color:'#3c77c9'}}>Golf</b>
</div>
</div>

</div>
</div>


<div class="uk-slider-container phoneContent" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-3 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-5@l uk-grid">
         
        <li>
            <div style={{textAlign:'center'}}><img src={hotel} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
            <br/><b style={{ color:'#3c77c9'}}>Hotel</b>
            </div>     
        </li>
        <li>
            <div style={{textAlign:'center'}}><img src={cruise} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
            <br/><b style={{ color:'#3c77c9'}}>Cruise</b>
            </div>     
        </li>
        <li>
            <div style={{textAlign:'center'}}><img src={caravan} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
            <br/><b style={{ color:'#3c77c9'}}>Caravan</b>
            </div>     
        </li>
        <li>
            <div style={{textAlign:'center'}}><img src={holiday} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
            <br/><b style={{ color:'#3c77c9'}}>Holiday</b>
            </div>     
        </li>
        <li>
            <div style={{textAlign:'center'}}><img src={plane} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
            <br/><b style={{ color:'#3c77c9'}}>plane</b>
            </div>     
        </li>
        <li>
            <div style={{textAlign:'center'}}><img src={resort} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
            <br/><b style={{ color:'#3c77c9'}}>Resort</b>
            </div>     
        </li>
        <li>
            <div style={{textAlign:'center'}}><img src={honeymoon} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
            <br/><b style={{ color:'#3c77c9'}}>Honeymoon</b>
            </div>     
        </li>
        <li>
            <div style={{textAlign:'center'}}><img src={wedding} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
            <br/><b style={{ color:'#3c77c9'}}>Wedding</b>
            </div>     
        </li>
        <li>
            <div style={{textAlign:'center'}}><img src={wine} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
            <br/><b style={{ color:'#3c77c9'}}>Wine</b>
            </div>     
        </li>
        <li>
            <div style={{textAlign:'center'}}><img src={golf} class="img-fluid" style={{maxHeight:'40px',width:'auto'}} />
            <br/><b style={{ color:'#3c77c9'}}>Golf</b>
            </div>     
        </li>

            



        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
</div>


</div>
{/* <!-- -----------------------------------End-------------- --> */}


{/* -------------------- Cart start ---------- */}

<div class="container">
<h2 style={{color:'#3c77c9'}}>OYT Traveling Agency</h2>

<div class="row">

<div class="col-lg-3">

<Item
id={4}
title="Cruise"
price={10000}
image="images/cruise.jpg"
/>


<Item_cruise
id={6}
title="Cruise-4"
price={5000}
image="images/cruise4.jpg"
/>

</div>

</div>
</div>

{/* <div className='shopping-cart' onClick={() => navigate('/cart')}>
<p>{getTotalQuantity() || 0}</p>
</div> */}


<div class="">
<button onClick={() => navigate('/cart')} class="btn btn-outline-primary icon-floatq" type="button" style={{ height:'42px',top:'90%',padding:'5px'}}> <i class="fa fa-shopping-cart"></i> 
&nbsp;<span style={{ color:'#fff',backgroundColor:'#3c77c9',padding:'5px',borderRadius:'50%'}}>{getTotalQuantity() || 0}</span>
</button>
</div>

{/* -------------------- Cart end ---------- */}

<div className="deskContent">
<div >
<div className="container">

<br/>
<div style={{ textAlign:'center' }}>
<b style={{textAlign:'center',marginTop:'15px',marginBottom:'30px  ',color:'#3c77c9  ',fontSize:'2.5rem'}}>&nbsp; Why Travel with OYT ? &nbsp;
</b>
</div>
<br/>

<div className="row">

<div className="col-lg-3 col-md-3 col-xs-6">
<div className="card cardkkhh" style={{width: '100%',borderRadius:'10px',border:'0',boxShadow: '2px 5px 20px 5px grey'}}>
  <img className="card-img-top" src={k1} alt="oyt" style={{position:'relative',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}/>
  <div className="card-body" style={{padding:'0.2rem  '}}>
<div style={{textAlign:'center'}}><img className="img-fluid" src={icon1} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-35px'}}/></div>  
    <h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'25px  ',marginBottom:'2px',color:'black',textShadow: '1px 2px 5px grey',fontFamily:"'Comfortaa', sans-serif"}}>2000+ Our Worlwide Guide for Travelers</h5>
  </div>
</div>
</div>

<div className="col-lg-3 col-md-3 col-xs-6">
<div className="card cardkkhh" style={{width: '100%',borderRadius:'10px',border:'0',boxShadow: '2px 5px 20px 5px grey'}}>
  <img className="card-img-top" src={k2} alt="oyt" style={{position:'relative',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}/>
  <div className="card-body" style={{padding:'0.2rem  '}}>
<div style={{textAlign:'center'}}><img className="img-fluid" src={icon2} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-35px'}}/></div>  
    <h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'25px  ',marginBottom:'2px',color:'black',textShadow: '1px 2px 5px grey',fontFamily:"'Comfortaa', sans-serif"}}>100% Trusted Tour Agency since starting</h5>
  </div>
</div>
</div>

<div className="col-lg-3 col-md-3 col-xs-6">
<div className="card cardkkhh" style={{width: '100%',borderRadius:'10px',border:'0',boxShadow: '2px 5px 20px 5px grey'}}>
  <img className="card-img-top" src={k3} alt="oyt" style={{position:'relative',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}/>
  <div className="card-body" style={{padding:'0.2rem  '}}>
<div style={{textAlign:'center'}}><img className="img-fluid" src={icon3} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-35px'}}/></div>  
    <h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'25px  ',marginBottom:'2px',color:'black',textShadow: '1px 2px 5px grey',fontFamily:"'Comfortaa', sans-serif"}}>98% Our Travelers are Happy</h5>
  </div>
</div>
</div>

<div className="col-lg-3 col-md-3 col-xs-6">
<div className="card cardkkhh" style={{width: '100%',borderRadius:'10px',border:'0',boxShadow: '2px 5px 20px 5px grey'}}>
  <img className="card-img-top" src={k4} alt="oyt" style={{position:'relative',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}/>
  <div className="card-body" style={{padding:'0.2rem  '}}>
<div style={{textAlign:'center'}}><img className="img-fluid" src={icon4} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-35px'}}/></div>  
    <h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'25px  ',marginBottom:'2px',color:'black',textShadow: '1px 2px 5px grey',fontFamily:"'Comfortaa', sans-serif"}}>2000+ Our Worlwide Guide for Travelers</h5>
  </div>
</div>
</div>



</div>
</div>
<br/><br/>
</div>
</div>



 {/* -----------------------------------Start FirstSection mobile view --------------  */}


 {/* ------------------------mbslider 3---------------- */}

<div className="phoneContent" style={{padding:'10px'}}>

<div style={{ textAlign:'center' }}>
{/* <b className='mtxt' style={{textAlign:'center',marginTop:'15px',marginBottom:'30px  ',color:'#3c77c9  ',fontSize:'1.8rem'}}>&nbsp; Why Travel with OYT ? &nbsp;</b> */}
<b style={{textAlign:'center',marginTop:'15px',marginBottom:'30px  ',color:'#3c77c9  ',fontSize:'1.8rem'}}>&nbsp; Why Travel with OYT ? &nbsp;</b>
</div>

<br/>


		<div className="container">
        <div className="uk-position-relative uk-visible-toggle uk-light" tabindex="-1" uk-slideshow="animation: scale;autoplay: true;" style={{borderRadius:'10px',boxShadow:'2px 1px 7px 1px slategray'}}>

            <ul className="uk-slideshow-items" style={{borderRadius:'10px'}}>

			<li>
			<img src={k1} alt="oyt" uk-cover />
			<div className="uk-overlay uk-overlay-primary2 uk-position-bottom uk-text-center uk-transition-slide-bottom" style={{borderBottom:'2px solid #3c77c9',borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}>                
				<div className="card-body">
				<div style={{textAlign:'center'}}><img className="img-fluid" src={icon1} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-10px'}}/></div>  
				<h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'50px  ',marginBottom:'-15px',color:'#3c77c9',fontFamily:"'Comfortaa', sans-serif"}}>2000+ Our Worlwide Guide for Travelers</h5>
				</div>					
            </div>
			</li>

            <li>
			<img src={k2} alt="oyt" uk-cover />
			<div className="uk-overlay uk-overlay-primary2 uk-position-bottom uk-text-center uk-transition-slide-bottom" style={{borderBottom:'2px solid #3c77c9',borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}>                
				<div className="card-body">
				<div style={{textAlign:'center'}}><img className="img-fluid" src={icon2} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-10px'}}/></div>  
				<h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'50px  ',marginBottom:'-15px',color:'#3c77c9',fontFamily:"'Comfortaa', sans-serif"}}>2000+ Our Worlwide Guide for Travelers</h5>
				</div>					
            </div>
			</li>

            <li>
			<img src={k3} alt="oyt" uk-cover />
			<div className="uk-overlay uk-overlay-primary2 uk-position-bottom uk-text-center uk-transition-slide-bottom" style={{borderBottom:'2px solid #3c77c9',borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}>                
				<div className="card-body">
				<div style={{textAlign:'center'}}><img className="img-fluid" src={icon3} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-10px'}}/></div>  
				<h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'50px  ',marginBottom:'-15px',color:'#3c77c9',fontFamily:"'Comfortaa', sans-serif"}}>2000+ Our Worlwide Guide for Travelers</h5>
				</div>					
            </div>
			</li>

            <li>
			<img src={k4} alt="oyt" uk-cover />
			<div className="uk-overlay uk-overlay-primary2 uk-position-bottom uk-text-center uk-transition-slide-bottom" style={{borderBottom:'2px solid #3c77c9',borderBottomRightRadius:'10px',borderBottomLeftRadius:'10px'}}>                
				<div className="card-body">
				<div style={{textAlign:'center'}}><img className="img-fluid" src={icon4} style={{maxHeight:'55px',position:'absolute',backgroundColor: 'white',marginLeft:'-10%',borderRadius:'50%',boxShadow: '1px 1px 15px -2px grey',padding:'5px',marginTop:'-10px'}}/></div>  
				<h5 className="card-title" style={{textAlign:'center',fontWeight:'bolder',marginTop:'50px  ',marginBottom:'-15px',color:'#3c77c9',fontFamily:"'Comfortaa', sans-serif"}}>2000+ Our Worlwide Guide for Travelers</h5>
				</div>					
            </div>
			</li>

				

				
            </ul>

            <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slideshow-item="previous"></a>
            <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slideshow-item="next"></a>

        </div>

    </div>
</div>

<br/>



{/* <!-- -----------------------------------Start Cruise view-------------- --> */}
<div>
<div style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<div class="container" style={{ paddingLeft:'1px',paddingRight:'1px' }}>
<br/>
<div>
<h1 class="sectionheading">&nbsp; Cruise &nbsp;</h1>
<div class="line"></div>
</div>

<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-5@l uk-grid">
         

{
    data2.map((item)=>
<li>
<Item_cruise
id={item.id}
title={capitalizeWords(item.name)}
price={item.price}
image={'/uploads/cruise_items/'+item.image}
/>
</li>
)
}


        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>


</div>
</div>

{/* <!-- -----------------------------------END CRUISE view -------------- --> */}



{/* <!-- -----------------------------------Start Cruise view-------------- --> */}
<div>
<div style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<div class="container" style={{ paddingLeft:'1px',paddingRight:'1px' }}>
<br/>
<div>
<h1 class="sectionheading">&nbsp; Cruise &nbsp;</h1>
<div class="line"></div>
</div>

<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-5@l uk-grid">
         
		{
    data2.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <Link to={'/cruisedetailpage/' + item.id}><img src={'/uploads/cruise_items/'+item.image} width="1800" height="1200" alt="oyt" /></Link>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/cruisedetailpage/' + item.id}><h5 class="uk-card-title"> {capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                   {/* <button class="btn btn-primary" onClick={()=> addToCart(item)}>Add To cart</button> */}
                    </div>
                </div>	
            </li>
)
}


        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>


</div>
</div>

{/* <!-- -----------------------------------END CRUISE view -------------- --> */}

<div className='deskContent'>

<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; WELLNESS RESORTS &nbsp;
	</h1>
	<div class="line" style={{margin:'7px auto 5px  '}}></div>
	</div>


<div className='container' style={{marginTop:'2px',marginBottom:'2px'}}>
<div class="row">
<div class="col-3 nopdding1"><img src="images/trips/s2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" /></div>    
<div class="col-3 nopdding1">
      <img src="images/trips/resort1.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-3 nopdding1">
      <img src="images/trips/resort2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-3 nopdding1"><img src="images/trips/s2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" /></div>

</div>
</div>
 
</div>

<div className='container'>
<div class="row">
<div class="col-3 nopdding1">
      <img src="images/trips/resort1.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopdding1"><img src="images/trips/resort4.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" /></div>
<div class="col-3 nopdding1">
      <img src="images/trips/resort2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>

</div>
    
</div>    

<div class="container">
    
    <div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;" style={{ marginTop:'10px',marginBottom:'10px'}}>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-5@l uk-grid">
         
		{
    data8.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <Link to={'/resortdetailpage/' + item.id}><img src={'/uploads/resort/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/resortdetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}

 
          	



        </ul>

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}

    </div>
    {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
</div>

</div>

</div>
    
<div className='phoneContent'>
<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; WELLNESS RESORTS &nbsp;
	</h1>
	<div class="line" style={{margin:'7px auto 5px  '}}></div>
	</div>


<div style={{marginTop:'2px',marginBottom:'2px'}}>
<div class="row">
<div class="col-6 nopdding1">
      <img src="images/trips/resort1.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopdding1">
      <img src="images/trips/resort2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT" />
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Resorts</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>
</div>
 

 

<div class="row">
    
    <div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;" style={{ marginTop:'10px',marginBottom:'10px'}}>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-3@l uk-grid">
         
		{
    data8.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <Link to={'/resortdetailpage/' + item.id}><img src={'/uploads/resort/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/resortdetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}

        </ul>

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}

    </div>
    {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
</div>


</div>
</div>

    <div class="col-12 nopdding1" style={{marginTop:'2px'}}>
      <img src="images/trips/resort4.jpg" class="img-fluid" alt="OYT" />
    </div>
</div>

<br/>



<br/>


<div className='deskContent'>
<img class="img-fluid" src="images/holidaystrip.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px'}} alt="oyt" />
</div>
<div className='phoneContent'>
<img class="img-fluid" src="images/holidaystrip2.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px'}} alt="oyt" />
</div>



<div class="deskContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>

<br/>
<img class="planeimg" src="images/plane.png" alt="oyt"/>

<div class="container">
<div class="row">

<div class="col-lg-6 col-md-6 col-xs-12">

<div>
<h1 style={{textAlign:'left',marginTop:'0',color:'#712b2c',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; HOLIDAY PACKAGES &nbsp;
</h1>
<div class="line" style={{float:'left',marginLeft:'20px',width:'20%'}}></div>
</div>

<div class="">
<br/><br/>
<div class="uk-slider-container" uk-slider="autoplay: true;autoplay-interval: 6000;pause-on-hover: true">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid">
            
			<li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday1.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday1.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
                      					
                       						
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>

</div>



</div>

<div class="col-lg-6 col-md-6 col-xs-12">

<div>
<h1 style={{textAlign:'right',marginTop:'0',color:'#712b2c',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; CARAVAN &nbsp;
</h1>
<div class="line" style={{float:'right',marginRight:'20px',width:'15%'}}></div>
</div>

<div class="">

<br/><br/>

<div class="uk-slider-container" uk-slider="autoplay: true;autoplay-interval: 6000;pause-on-hover: true">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid">
            
        {
    data5.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/caravandetailpage/' + item.id}> <img src={'/uploads/caravan/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/caravandetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. { item.price }/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}
                       						
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>

</div>

<br/><br/>

</div>
</div>
</div>
</div>

{/* <!-- -----------------------------------END pc carasual section -------------- --> */}




{/* <!-- -----------------------------------Start Two carasual Mobile view section -------------- --> */}

<div class="container phoneContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<div class="uk-child-width-expand@s" uk-grid>
    <div>
<br/>
<div>
<h1 class="sectionheading">&nbsp; HOLIDAY PACKAGES &nbsp;</h1>
<div class="line"></div>
</div>

<div class="uk-slider-container" uk-slider="autoplay: true;autoplay-interval: 6000;pause-on-hover: true">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid">
            
			<li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday1.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday1.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
            <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <img src="images/holiday2.jpg" width="1800" height="1200" alt="" />
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                        <h5 class="uk-card-title">Holiday</h5>
                        <p class="card-text" align="justify">4.8/5 Excellent <span style={{color:'darkgrey'}}>(1214 reviews)</span> </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price starts from <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
                      					
                       						
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>    
    </div>
	

    <div>
<br/>
<img class="planeimg" src="images/plane.png" alt="oyt"/>



<div>
<h1 class="sectionheading">&nbsp; CARAVAN &nbsp;</h1>
<div class="line"></div>
</div>

<div class="uk-slider-container" uk-slider="autoplay: true;autoplay-interval: 6000;pause-on-hover: true">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-2@s uk-child-width-1-2@m uk-grid">
            
        {
    data5.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/caravandetailpage/' + item.id}> <img src={'/uploads/caravan/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/caravandetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. { item.price }/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}
            
                       						
        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>
    </div>




{/* <!-- -----------------------------------End Two carasual section -------------- --> */}

<br/>
<div class="phoneContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; CHARTED PLANES &nbsp;
	</h1>
	<div class="line"></div>
	</div>
	
<div class="row">
<div class="col-6 nopddingL" style={{marginBottom:'10px'}}>
<img src="images/trips/cplane2.jpg" alt="" />
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopddingR" style={{marginBottom:'10px'}}>
<img src="images/trips/cplane1.jpg" alt="" />
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>	
	
<div class="row">
<div class="col-12 nopdding" style={{marginBottom:'10px'}}>
<img src="images/trips/cplane4.jpg" alt="" />
</div>
</div>	
	
<div class="row">
<div class="col-6 nopddingL">
<div class="cardnew">
<div class="poster">
<img src="images/trips/cplane3.jpg" alt="" />
</div>
<div class="details">
<b>Charted Planes</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Charted Planes</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'5px'}}>
<b style={{color:'#fff',fontSize:'7px'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon3"></i>
<i class="fa fa-shopping-cart cardicon4"></i>
</div>
</div>
</div>
</div>
<div class="col-6 nopddingR">
<div class="cardnew">
<div class="poster">
<img src="images/trips/trip6n.jpg" alt="" />
</div>
<div class="details">
<b>Charted Planes</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Charted Planes</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'5px'}}>
<b style={{color:'#fff',fontSize:'7px'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon3"></i>
<i class="fa fa-shopping-cart cardicon4"></i>
</div>
</div>
</div>
</div>
</div>

</div>

<div class="col-12" style={{marginTop:'10px'}}>

<div class="row">
<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;" style={{ marginTop:'5px'}}>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-4@l uk-grid">
         
		
        {
    data9.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/planedetailpage/' + item.id}> <img src={'/uploads/plane/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/planedetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. { item.price }/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}	

        </ul>

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}

    </div>
    {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
</div>
</div>
<br/>

</div>
</div>


<div class="deskContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; CHARTED PLANES  &nbsp;
	</h1>
	<div class="line"></div>
	</div>

<div class="container" style={{marginBottom:'10px'}}>

<div class="row">
<div class="col-3 nopddingL">
      <img src="images/trips/cplane2.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-3 nopdding1"><img src="images/trips/s1.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/></div>
<div class="col-3 nopdding1"><img src="images/trips/s1.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/></div>
<div class="col-3 nopddingR">
      <img src="images/trips/cplane1.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/>
	  	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Charted Planes</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>

</div>	

<div class="container"><img src="images/trips/s7.jpg" class="img-fluid nopadding1" style={{borderRadius:'7px 7px 1px 1px  '}} alt="OYT"/></div>
	
<div className="container" style={{padding:'15px'}}>	
<div class="row">
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/cplane3.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff'}}>Charted Planes </b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Charted Planes </span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
<div class="col-3 nopdding1">
<img src="images/trips/trip6n.jpg" alt="oyt" />
</div>
<div class="col-3 nopdding1">
<img src="images/trips/s3.jpg" alt="oyt" />
</div>
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/cplane6.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff'}}>Charted Planes </b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Charted Planes </span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>

</div>

</div>

<div className="container">
<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;" style={{ marginTop:'10px'}}>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-5@l uk-grid">
         
		
        {
    data9.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/planedetailpage/' + item.id}> <img src={'/uploads/plane/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/planedetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. { item.price }/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}

        </ul>

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}

    </div>
    {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
</div>
</div>
<br/>
</div>
</div>


<div className='deskContent'>
<img class="img-fluid" src="images/weddingstrip.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px'}} alt="oyt" />
</div>
<div className='phoneContent'>
<img class="img-fluid" src="images/weddingstrip2.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px'}} alt="oyt" />
</div>


{/* <!-- -----------------------------------Start Wedding view-------------- --> */}
<div>
<div style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<div class="container" style={{ paddingLeft:'1px',paddingRight:'1px' }}>
<br/>
<div>
<h1 class="sectionheading">&nbsp; Wedding &nbsp;</h1>
<div class="line"></div>
</div>

<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-5@l uk-grid">
         
		
        {
    data3.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/weddingdetailpage/' + item.id}> <img src={'/uploads/weddings/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/weddingdetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. { item.price }/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}

        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>


</div>
</div>


{/* <!-- -----------------------------------END Wedding view -------------- --> */}

<div className='deskContent'>
<img class="img-fluid" src="images/honeymoonstrip.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px'}} alt="oyt" />
</div>
<div className='phoneContent'>
<img class="img-fluid" src="images/honeymoonstrip2.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px'}} alt="oyt" />
</div>



{/* <!-- -----------------------------------------------Start Honeymoon section ------ --> */}

<div class="phoneContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; HONEYMOON &nbsp;
	</h1>
	<div class="line"></div>
	</div>


	
<div class="row">
<div class="col-6 nopddingL" style={{marginBottom:'10px'}}>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{borderBottomLeftRadius:'1px  ',borderBottomRightRadius:'1px  ',padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Honeymoon</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
<img src="images/trips/honeymoon1.jpg" style={{border:'2px solid #f5640a',borderRadius:'1px 1px 100px 20px  '}} alt="oyt" /></div>
<div class="col-6 nopddingR" style={{marginBottom:'10px'}}>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{borderBottomLeftRadius:'1px  ',borderBottomRightRadius:'1px  ',padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Honeymoon</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
<img src="images/trips/honeymoon5.jpg" style={{border:'2px solid #f5640a',borderRadius:'1px 1px 10px 100px  '}} alt="oyt" /></div>
</div>	
<div style={{position:'relative',marginTop:'-40px',textAlign:'center',zIndex:'11'}}><img src="images/icons/icon4.png" style={{border:'2px solid #f5640a',background:'white',boxShadow:'0 5px 15px rgba(0,0,0,.08)',borderRadius:'40px 7px 40px 7px  ',height:'100px',width:'100px'}}/></div>

	
<div class="row" style={{marginTop:'-38px'}}>
<div class="col-6 nopddingL">
<img src="images/trips/honeymoon3.jpg" style={{border:'2px solid #f5640a',borderRadius:'7px 100px 1px 1px  '}} class="img-fluid" alt="OYT"/>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Honeymoon</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopddingR">
<img src="images/trips/honeymoon8.jpg" style={{border:'2px solid #f5640a',borderRadius:'109px 1px 1px 1px  '}} class="img-fluid" alt="OYT"/>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Honeymoon</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>

<br/>
<div class="row">
<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;" style={{ marginTop:'1px'}}>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-4@l uk-grid">
         
		
        {
    data6.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/honeymoondetailpage/' + item.id}> <img src={'/uploads/honeymoon/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/honeymoondetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. { item.price }/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}

                    			

        </ul>

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}

    </div>
    {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
</div>
</div>

</div>



<br/>
</div>


<div class="deskContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; HONEYMOON &nbsp;
	</h1>
	<div class="line"></div>
	</div>

<div className='container'>
<div class="row">
<div class="col-3 nopdding1" style={{marginBottom:'10px'}}>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{borderBottomLeftRadius:'1px  ',borderBottomRightRadius:'1px  ',padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Honeymoon</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
<img src="images/trips/hm5.jpg" style={{border:'2px solid #f5640a',borderRadius:'1px 1px 100px 20px  '}} alt="oyt" /></div>
<div class="col-6 nopdding1">
<img src="images/trips/s8.jpg" style={{border:'2px solid #f5640a',borderRadius:'109px 1px 1px 1px  '}} class="img-fluid" alt="OYT"/>    
</div>
<div class="col-3 nopdding1" style={{marginBottom:'10px'}}>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{borderBottomLeftRadius:'1px  ',borderBottomRightRadius:'1px  ',padding:'10px',border:'2px solid lavender',backgroundColor:'#fff'}}>
        <h5 class="uk-card-title">Honeymoon</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
<img src="images/trips/hm3.jpg" style={{border:'2px solid #f5640a',borderRadius:'1px 1px 10px 100px  '}} alt="oyt" /></div>
</div>	
<div style={{position:'relative',marginTop:'-40px',textAlign:'center',zIndex:'1'}}><img src="images/icons/icon4.png" style={{border:'2px solid #f5640a',background:'white',boxShadow:'0 5px 15px rgba(0,0,0,.08)',borderRadius:'40px 7px 40px 7px  ',height:'100px',width:'100px'}}/></div>

	
<div class="row" style={{marginTop:'-38px'}}>
<div class="col-3 nopdding1">
<img src="images/trips/hm2.jpg" style={{border:'2px solid #f5640a',borderRadius:'7px 100px 1px 1px  '}} class="img-fluid" alt="OYT"/>
	  <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Honeymoon</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
<div class="col-6 nopdding1">
<img src="images/trips/hm4.jpg" style={{border:'2px solid #f5640a',borderRadius:'109px 1px 1px 1px  '}} class="img-fluid" alt="OYT"/>    
</div>
<div class="col-3 nopdding1">
<img src="images/trips/hm1.jpg" style={{border:'2px solid #f5640a',borderRadius:'109px 1px 1px 1px  '}} class="img-fluid" alt="OYT"/>
 <div>
		<div class="myicons">
		<i class="fa fa-shopping-cart myicons2"></i>
		<i class="fa fa fa-eye myicons1"></i>
		</div>
		<div class="uk-card-body" style={{backgroundColor:'#fff',padding:'10px',border:'2px solid lavender'}}>
        <h5 class="uk-card-title">Honeymoon</h5>
		<p class="card-text" align="justify"><b>4.8/5 Excellent </b></p>
		<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b><b>price</b> <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
      </div>
	  </div>
</div>
</div>
</div>

<br/>
<div class="container nopdding">
<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;" style={{ marginTop:'1px'}}>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-5@l uk-grid">
         
		
        {
    data6.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/honeymoondetailpage/' + item.id}> <img src={'/uploads/honeymoon/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/honeymoondetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. { item.price }/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}    				

        </ul>

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}

    </div>
    {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
</div>
</div>

</div>


<br/>
</div>


{/* <!-- -----------------------------------------------End Honeymoon section ------ --> */}

<div className='deskContent'>
<img class="img-fluid" src="images/hotelstrip.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px'}} alt="oyt" />
</div>
<div className='phoneContent'>
<img class="img-fluid" src="images/hotelstrip2.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px'}} alt="oyt" />
</div>


<div class="phoneContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
  <h1 style={{textAlign:'center',marginTop:'0',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; HOTELS &nbsp;
	</h1>
	<div class="line" style={{margin:'7px auto 5px  '}}></div>
	</div>
<div class="row">
<div class="col-6 nopddingL">
<div class="cardnew">
<div class="poster">
<img src="images/trips/hotels2.jpg" alt="" />
</div>
<div class="details">
<b>Hotel</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Hotel</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'5px'}}>
<b style={{color:'#fff',fontSize:'7px'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon3"></i>
<i class="fa fa-shopping-cart cardicon4"></i>
</div>
</div>
</div>
</div>
<div class="col-6 nopddingR">
<div class="cardnew">
<div class="poster">
<img src="images/trips/hotels4.jpg" alt="" />
</div>
<div class="details">
<b>Hotel</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Hotel</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'5px'}}>
<b style={{color:'#fff',fontSize:'7px'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon3"></i>
<i class="fa fa-shopping-cart cardicon4"></i>
</div>
</div>
</div>
</div>
</div>

</div>

<div class="w-100" style={{marginTop:'10px',marginBottom:'10px'}}>
      <img src="images/trips/bb1.jpg" style={{width:'100%'}} class="img-fluid" alt="OYT"/>
</div>

<div class="col-12">

<div class="row">
<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;" style={{ marginTop:'1px'}}>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-3@l uk-grid">
         
		
        {
    data1.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/hoteldetailpage/' + item.id}> <img src={'/uploads/hotels/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/hoteldetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. { item.price }/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}

        </ul>

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}

    </div>
    {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
</div>
</div>

<br/>
</div>
</div>



<div class="deskContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>  
<br/>
<div class="col-12">
	<div>
  <h1 style={{textAlign:'center',marginTop:'0',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; HOTELS  &nbsp;
	</h1>
	<div class="line"></div>
	</div>

<div className="container" style={{color:'#fff',fontSize:'0.9em',padding:'15px'}}>	
<div class="row">
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/hotels4.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff',fontSize:'0.9em'}}>Hotel</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Hotel</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
<div class="col-6 nopdding1">
<img src="images/trips/hotels5.jpg" alt="oyt" />
</div>
<div class="col-3 nopdding1">
		<div class="cardnew">
<div class="poster">
<img src="images/trips/hotels4.jpg" alt="oyt" />
</div>
<div class="details">
<b style={{color:'#fff',fontSize:'0.9em'}}>Hotel</b>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>Hotel</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. 9000/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>

</div>
</div>

<div class="container w-100 nopdding1" style={{marginBottom:'15px'}}>
      <img src="images/trips/bb1.jpg" style={{width:'100%',borderRadius:'7px 7px 1px 1px  '}} class="img-fluid" alt="OYT"/>
</div>

<div class="container">

<div class="row">
<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;" style={{ marginTop:'1px'}}>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-4@l uk-grid">
         
		
        {
    data1.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/hoteldetailpage/' + item.id}> <img src={'/uploads/hotels/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/hoteldetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. { item.price }/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}


        </ul>

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}

    </div>
    {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
</div>
</div>


</div>



<br/>
</div>
</div>

<div className='deskContent'>
<img class="img-fluid" src="images/winestrip.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px'}} alt="oyt" />
</div>
<div className='phoneContent'>
<img class="img-fluid" src="images/winestrip2.jpg" style={{width:'auto',marginTop:'5px',marginBottom:'5px'}} alt="oyt" />
</div>



{/* <!-- -----------------------------------Start Wine view-------------- --> */}
<div>
<div style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<div class="container" style={{ paddingLeft:'1px',paddingRight:'1px' }}>
<br/>
<div>
<h1 class="sectionheading">&nbsp; Wine &nbsp;</h1>
<div class="line"></div>
</div>

<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;">
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-5@l uk-grid">
         
		{
    data4.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                    <Link to={'/winedetailpage/' + item.id}><img src={'/uploads/wine/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<b class="cardicontxt">New</b>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/winedetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. { item.price }/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}

        </ul>

        <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a>

    </div>
    <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul>
</div>
</div>


</div>
</div>


{/* <!-- -----------------------------------END Wine view -------------- --> */}






<div style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
	<h1 style={{textAlign:'center',marginTop:'0',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; VIP MEMBERSHIPS  &nbsp;
	</h1>
	<div class="line"></div>
	</div>

    <div class="phoneContent" style={{ textAlign:'center'}}>
<img src="images/vdone2.jpg" class="img-fluid" style={{height:'200px',width:'auto'}}/>
<br/>
<div style={{ position:'absolute',marginTop:'-50%',marginLeft:'2%',textAlign:'center' }}>
<h2 style={{color:'white',fontFamily: 'sans-serif',fontWeight: 'bolder',marginBottom:'3px'}}>VIP MEMBERSHIP </h2>
<button class="btn btn-outline-primary" style={{position:'absolute',color:'#fff',borderColor:'#fff'}}>View More </button>
</div>
</div>

<div class="deskContent" style={{ textAlign:'center'}}>
<img src="images/vdone.jpg" class="img-fluid" style={{height:'auto',width:'100%'}}/>
<br/>
<div style={{ position:'absolute',marginTop:'-8%',marginLeft:'75%',textAlign:'center' }}>
<h2 style={{color:'white',fontFamily: 'sans-serif',fontWeight: 'bolder',marginBottom:'3px'}}>VIP MEMBERSHIP </h2>
<button class="btn btn-outline-primary" style={{position:'absolute',color:'#fff',borderColor:'#fff'}}>View More <i class="fa fa-long-arrow-right"></i> </button>
</div>
</div>

</div>
<br/>
</div>	
	



<br/>
<div class="phoneContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
  <h1 style={{textAlign:'center',marginTop:'0',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; GOLF GROUNDS  &nbsp;
	</h1>
	<div class="line"></div>
	</div>

<div class="row">
<div class="col-12 nopdding" style={{marginBottom:'10px'}}>
<img src="images/trips/golf4.jpg" style={{borderRadius:'1px'}} alt="oyt" />
</div>
</div>	
	
<div class="row">

<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;" style={{ marginTop:'5px',marginBottom:'10px'}}>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-5@m uk-child-width-1-3@l uk-grid">
         
		{
    data10.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <Link to={'/golfdetailpage/' + item.id}><img src={'/uploads/golf/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/golfdetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}


        </ul>

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}

    </div>
    {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
</div>


</div>	
	
<div class="row">
{
    data102.map((item)=>    
<div class="col-6 nopddingL">
<div class="cardnew">
<div class="poster">
<img src={'/uploads/golf/'+item.photo} alt="oyt" />
</div>
<div class="details">
<Link to={'/golfdetailpage/' + item.id}><b style={{color:'#fff'}}> {capitalizeWords(item.name)} </b></Link>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>GOLF GROUNDS</span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'5px'}}>
<b style={{color:'#fff',fontSize:'7px'}}>Rs. { item.price }/- only</b>
<i class="fa fa fa-eye cardicon3"></i>
<i class="fa fa-shopping-cart cardicon4"></i>
</div>
</div>
</div>
</div>
    )}


</div>

</div>

<div class="w-100">
<img src="images/trips/golf3.jpg" style={{marginTop:'10px',borderRadius: '1px'}} class="img-fluid" alt="OYT"/>
</div>

<br/>
</div>


<br/>

<div class="deskContent" style={{background: 'url("images/backgrounds/bg3.jpg")'}}>
<br/>
<div class="col-12">
	<div>
  <h1 style={{textAlign:'center',marginTop:'0',fontFamily:"'Comfortaa', sans-serif"}}>&nbsp; GOLF GROUNDS  &nbsp;
	</h1>
	<div class="line"></div>
	</div>

<div class="container w-100" style={{marginBottom:'10px'}}>
      <img src="images/trips/golf4.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px '}} alt="OYT"/>
</div>	

<div class="container" style={{padding:'15px'}}>	
<div class="row">

{
    data102.map((item)=>
<div class="col-3">
		<div class="cardnew">
<div class="poster">
<img src={'/uploads/golf/'+item.photo} alt="oyt" />
</div>
<div class="details">
<Link to={'/golfdetailpage/' + item.id}><b style={{color:'#fff'}}> {capitalizeWords(item.name)} </b></Link>
<div class="rating">
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star"></i>
<i class="fa fa-star-o"></i>
<span>4/5</span>
</div>
<div class="tags">
<span>GOLF GROUNDS </span>
<span>Holidays</span>
</div>
<div class="cast" style={{marginTop:'15px'}}>
<b style={{color:'#fff',fontSize:'0.9em'}}>Rs. { item.price }/- only</b>
<i class="fa fa fa-eye cardicon1"></i>
<i class="fa fa-shopping-cart cardicon2"></i>
</div>
</div>
</div>
</div>
    
    )
    }

</div>

</div>

<div class="container">
<img src="images/trips/golf3.jpg" class="img-fluid" style={{borderRadius:'7px 7px 1px 1px '}} alt="oyt" />
</div>


<br/>

<div class="container">

<div class="">

<div class="uk-slider-container" uk-slider="autoplay:true;autoplay-interval: 6000;pause-on-hover: true;" style={{ marginTop:'5px',marginBottom:'10px'}}>
    <div class="uk-position-relative uk-visible-toggle uk-light" tabindex="-1">
        <ul class="uk-slider-items uk-child-width-1-2 uk-child-width-1-3@s uk-child-width-1-4@m uk-child-width-1-4@l uk-grid">
         
		{
    data10.map((item)=>
                <li>
                 <div class="uk-card uk-card-default">
                    <div class="uk-card-media-top">
                        <Link to={'/golfdetailpage/' + item.id}><img src={'/uploads/golf/'+item.photo} width="1800" height="1200" alt="oyt" /></Link>
						<i class="fa fa fa-eye cardicon1"></i>
						<i class="fa fa-shopping-cart cardicon2"></i>
                    </div>
                    <div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
                    <Link to={'/golfdetailpage/' + item.id}><h5 class="uk-card-title">{capitalizeWords(item.name)} </h5></Link>
                        <p class="card-text" align="justify">4.8/5 Excellent </p>
    <p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. 9000/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
                    </div>
                </div>	
            </li>
)
}

 
         
        </ul>

        {/* <a class="uk-position-center-left uk-position-small uk-hidden-hover" href="#" uk-slidenav-previous uk-slider-item="previous"></a>
        <a class="uk-position-center-right uk-position-small uk-hidden-hover" href="#" uk-slidenav-next uk-slider-item="next"></a> */}

    </div>
    {/* <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin"></ul> */}
</div>

</div>

</div>	

<br/>
</div>
</div>

<br/>
	

{/* <!-- -----------------------------------Start NEWS -------------- -->	 */}

{/* <!-- -----------------------------------END NEWS -------------- -->	 */}



<img class="arrowimg2" src="images/icons/arrow2.png" alt="oyt"/>

{/* <!-- -----------------------------------Start Email section -------------- -->	 */}
<br/>
<div>
<div class="container" style={{background:'url("images/emailbanner2.jpg")',minHeight:'200px'}}>
<div class="container">
<div class="row">

<div class="col-lg-6 col-md-6 col-xs-6">
<div style={{marginTop:'35px'}}>
<h2 style={{color:'white  ',fontFamily: 'cursive',lineHeight: '50px'}}>Let's Explore the world </h2>
<h2 style={{color:'white  ',fontFamily: 'sans-serif',fontWeight: 'bolder',lineHeight: '30px',marginTop:'20px  '}}>Get Special Offers in Your Inbox </h2>

</div>
</div>
<div class="col-lg-6 col-md-6 col-xs-6">
      <form class="newsletter-form mt-5 mb-5">
              <div class="btn-group" style={{padding:'10px',width:'100%'}}>
                <input type="text" id="search2" style={{height:'45px  ',borderRadius:'5px',borderTopLeftRadius:'10px  ',borderBottomLeftRadius:'10px  '}} class="form-control" placeholder="&nbsp; Submit your email" name="search2" />
<button class="btn btn-primary" style={{backgroundColor:'#fff  ',border:'2px solid #fff  ',borderTopRightRadius:'10px',borderBottomRightRadius:'10px'}}><i class="fa fa-location-arrow" style={{fontSize:'20px',color:'#f5640a',paddingTop:'5px'}}></i></button>
				</div>
            </form>
</div>

</div>
</div>
</div>
</div>
<br/>



        </>
    );
}

export default Homebanner;