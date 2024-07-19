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
import Payment from './Payment';
import Checkout1 from './Checkout1';
import Checkout2 from './Checkout2';
import Checkout3 from './Checkout3';
import Checkout4 from './Checkout4';
import Checkout5 from './Checkout5';
import Checkout6 from './Checkout6';
import Checkout7 from './Checkout7';
import Checkout8 from './Checkout8';
import Checkout9 from './Checkout9';
import Checkout10 from './Checkout10';
import Cruisebookingform from './Cruisebookingform';
import Gallery from './Gallery';
import Page404 from './Page404';

import Usersignup from './Usersignup';
import Userlogin from './Userlogin';
import Userprofile from './Userprofile';

import Searchlist1 from './Searchlist1';
import Searchlist2 from './Searchlist2';
import Searchlist3 from './Searchlist3';
import Searchlist4 from './Searchlist4';
import Searchlist5 from './Searchlist5';
import Searchlist6 from './Searchlist6';
import Searchlist7 from './Searchlist7';
import Searchlist8 from './Searchlist8';
import Searchlist9 from './Searchlist9';
import Searchlist10 from './Searchlist10';

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

import Test from './Test';

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

        <Route path="/signup" exact element={<Usersignup />} />
        <Route path="/login" exact element={<Userlogin />} />
        <Route path="/profile" exact element={<Userprofile />} />

        <Route path="/signup/:pay" exact element={<Usersignup />} />
        <Route path="/login/:pay" exact element={<Userlogin />} />

        <Route path="/test" exact element={<Test />} />

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
        <Route path="/checkout1" exact element={<Checkout1 />} />
        <Route path="/checkout2" exact element={<Checkout2 />} />
        <Route path="/checkout3" exact element={<Checkout3 />} />
        <Route path="/checkout4" exact element={<Checkout4 />} />
        <Route path="/checkout5" exact element={<Checkout5 />} />
        <Route path="/checkout6" exact element={<Checkout6 />} />
        <Route path="/checkout7" exact element={<Checkout7 />} />
        <Route path="/checkout8" exact element={<Checkout8 />} />
        <Route path="/checkout9" exact element={<Checkout9 />} />
        <Route path="/checkout10" exact element={<Checkout10 />} />
        <Route path="/payment/:pay" exact element={<Payment />} />
        <Route path="/cruisebookingform" exact element={<Cruisebookingform />} />
        <Route path="/gallery" exact element={<Gallery />} />
        <Route path="/page404" exact element={<Page404 />} />

        <Route path="/searchlist1" exact element={<Searchlist1 />} />
        <Route path="/searchlist2" exact element={<Searchlist2 />} />
        <Route path="/searchlist3" exact element={<Searchlist3 />} />
        <Route path="/searchlist4" exact element={<Searchlist4 />} />
        <Route path="/searchlist5" exact element={<Searchlist5 />} />
        <Route path="/searchlist6" exact element={<Searchlist6 />} />
        <Route path="/searchlist7" exact element={<Searchlist7 />} />
        <Route path="/searchlist8" exact element={<Searchlist8 />} />
        <Route path="/searchlist9" exact element={<Searchlist9 />} />
        <Route path="/searchlist10" exact element={<Searchlist10 />} />



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
