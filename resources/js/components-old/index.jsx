import React from 'react';
import { Routes, Route } from "react-router-dom";

import '/public/css/main.css';
import '/public/css/pc.css';
import '/public/css/mobile.css';
import '/public/css/common.css';

import '/public/css/slider.css';
import '/public/css/home.css';

import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Blogs from './Blogs';
import Blogdetails from './Blogdetails';

import Productlist from './Productlist';
import Productlist1 from './Productlist1';
import Productlist2 from './Productlist2';
import Productlist3 from './Productlist3';
import Productlist4 from './Productlist4';
import Productlist5 from './Productlist5';
import Productlist6 from './Productlist6';
import Productlist7 from './Productlist7';
import Productlist8 from './Productlist8';
import Productlist9 from './Productlist9';
import Productlist10 from './Productlist10';

import Cart from './Cart';
import CartItem from './CartItem';
import Checkout from './Checkout';
import Cruisebookingform from './Cruisebookingform';
import Gallery from './Gallery';
import Page404 from './Page404';

import Hoteldetailpage from './Hoteldetailpage';
import Cruisedetailpage from './Cruisedetailpage';
import Weddingdetailpage from './Weddingdetailpage';
import Winedetailpage from './Winedetailpage';
import Resortdetailpage from './Resortdetailpage';
import Golfdetailpage from './Golfdetailpage';
import Planedetailpage from './Planedetailpage';
import Holidaysdetailpage from './Holidaysdetailpage';
import Honeymoondetailpage from './Honeymoondetailpage';
import Caravandetailpage from './Caravandetailpage';

function Index() {
  return (
<>
    <Navbar />
    <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/about" exact element={<About />} />
        <Route path="/contact" exact element={<Contact />} />
        <Route path="/blogs" exact element={<Blogs />} />
        <Route path='/blogdetails/:id' exact element={<Blogdetails />} />

        <Route path="/productlist" exact element={<Productlist />} />
        <Route path="/hotellist" exact element={<Productlist1 />} />
        <Route path="/cruiselist" exact element={<Productlist2 />} />
        <Route path="/weddinglist" exact element={<Productlist3 />} />
        <Route path="/winelist" exact element={<Productlist4 />} />
        <Route path="/caravanlist" exact element={<Productlist5 />} />
        <Route path="/honeymoonlist" exact element={<Productlist6 />} />
        <Route path="/holidaylist" exact element={<Productlist7 />} />
        <Route path="/resortlist" exact element={<Productlist8 />} />
        <Route path="/planelist" exact element={<Productlist9 />} />
        <Route path="/golflist" exact element={<Productlist10 />} />

        <Route path="/cart" exact element={<Cart />} />
        <Route path="/cartitem" exact element={<CartItem />} />
        <Route path="/checkout" exact element={<Checkout />} />
        <Route path="/cruisebookingform" exact element={<Cruisebookingform />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/page404" exact element={<Page404 />} />


        <Route path="/hoteldetailpage/:id" exact element={<Hoteldetailpage />} />
        <Route path="/cruisedetailpage/:id" exact element={<Cruisedetailpage />} />
        <Route path="/weddingdetailpage/:id" exact element={<Weddingdetailpage />} />
        <Route path="/winedetailpage/:id" exact element={<Winedetailpage />} />
        <Route path="/resortdetailpage/:id" exact element={<Resortdetailpage />} />
        <Route path="/golfdetailpage/:id" exact element={<Golfdetailpage />} />
        <Route path="/planedetailpage/:id" exact element={<Planedetailpage />} />
        <Route path="/holidaysdetailpage/:id" exact element={<Holidaysdetailpage />} />
        <Route path="/honeymoondetailpage/:id" exact element={<Honeymoondetailpage />} />
        <Route path="/caravandetailpage/:id" exact element={<Caravandetailpage />} />

    </Routes>
    <Footer />
    </>
  );
}

export default Index;
