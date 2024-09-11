import React from 'react';
import { Component } from 'react';
import { Link } from 'react-router-dom';
import Logo from '/public/images/logo.png';

class Navbar extends Component{

    
	state = { clicked: false }

	handleClick = ()=>{
		this.setState({clicked:false})
	}
    

  logout=()=>{
  localStorage.clear();
  window.location.reload(true);
  window.history.back();
  }

  // useEffect(()=> {
  //   if(localStorage.getItem('user-info')){
  //   nav("/");
  //   }
  //   },[])

  user = JSON.parse(localStorage.getItem('user-info'));
  //console.log(user);
  // console.log(user.data.name);

  // name="peter";

	render(){

        console.log(this.state.clicked);

    return(
        <>
<header>

<div className="subnav deskContent">
<div className="col-lg-12">
<div className="row">
<div className="col-lg-4">
<div style={{textAlign:'center',marginTop:'10px'}}>
<a href="/cdes" style={{color:'white'}}> &nbsp;&nbsp; +91 9958559845 &nbsp; | </a><a href="#" style={{color:'white'}}>&nbsp; Support@oyt.com </a>
</div>
</div>
<div className="col-lg-4">

</div>
<div className="col-lg-4">

<div style={{textAlign:'center'}} >

{
  localStorage.getItem('user-info')?
<>
<Link style={{ color:'white' }} to="/signup" onClick={this.logout}> &nbsp;&nbsp; Logout &nbsp;&nbsp; | </Link><Link style={{ color:'white' }} to="/profile"> &nbsp;&nbsp; {this.user.data.name} &nbsp;&nbsp; | </Link>  
</>
:
<>
<Link style={{ color:'white' }} to="/login"> &nbsp;&nbsp; Login &nbsp;&nbsp; | </Link><Link style={{ color:'white' }} to="/signup"> &nbsp;&nbsp; Sign Up &nbsp;&nbsp; | </Link>
</>

}


<a href="#"><i class="fa fa-facebook-square" style={{ fontSize:'15px',fontWeight:400,backgroundColor:'#fff',color:'#3c77c9',padding:'8px',borderRadius:'50%',margin:'3px'}} ></i></a>
<a href="#"><i class="fa fa-twitter" style={{ fontSize:'15px',fontWeight:400,backgroundColor:'#fff',color:'#3c77c9',padding:'8px',borderRadius:'50%',margin:'3px'}} ></i></a>
<a href="#"><i class="fa fa-instagram" style={{ fontSize:'15px',fontWeight:400,backgroundColor:'#fff',color:'#3c77c9',padding:'8px',borderRadius:'50%',margin:'3px'}} ></i></a>
<a href="#"><i class="fa fa-youtube" style={{ fontSize:'15px',fontWeight:400,backgroundColor:'#fff',color:'#3c77c9',padding:'8px',borderRadius:'50%',margin:'3px'}} ></i></a>
</div>

</div>
</div>
</div>
</div>

<nav className="navbar navbar-expand-lg navbar-light bg-white tmynav">
  <div className="container">
    
  <Link className="navbar-brand" to="/"><img className="logoalign" src={Logo} style={{height:'50px',width:'auto'}} alt="OYT" /></Link>   

<button style={{ border:'2px solid #3c77c9',transition:'all 5s ease-in'}} type="button" onClick={()=>this.setState({clicked:!this.state.clicked})} data-target="#navbarContent" aria-controls="navbars" aria-expanded="false" aria-label="Toggle navigation" className="navbar-toggler">
    <i className={this.state.clicked ? "fa fa-times" : "fa fa-bars"} style={{ fontSize:'25px',color:'#3c77c9'}}></i>
</button>

    <div id="navbarContent" className={this.state.clicked ? "knav navbar-collapse collapse show" : "collapse knav navbar-collapse"} style={{lineHeight: '40px'}}>
      <ul className="navbar-nav" style={{ marginLeft:'auto'}}>

      <li className="nav-item"> 
            <Link className="nav-link"  onClick={this.handleClick} to="/"><b className="bb">Home</b></Link>
            </li>	  

	        <li className="nav-item"> 
            <Link className="nav-link"  onClick={this.handleClick} to="/about"><b className="bb">About</b></Link>
            </li>
	

        {/* <li className="nav-item dropdown">
          <a id="dropdownMenu1" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"><b className="bb">Pages</b></a>
          <ul aria-labelledby="dropdownMenu1" className="dropdown-menu border-0 shadow">


            <li className="dropdown-submenu">
              <a id="dropdownMenu3" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Page 1</a>
              <ul aria-labelledby="dropdownMenu3" className="dropdown-menu border-0 shadow">
                <li><a href="{{ url('/')}}" className="dropdown-item">Pages</a></li>
                <li><a href="{{ url('/')}}" className="dropdown-item">Pages</a></li>
              </ul>
            </li>

                        <li className="dropdown-submenu">
              <a id="dropdownMenu2" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Page 2</a>
              <ul aria-labelledby="dropdownMenu2" className="dropdown-menu border-0 shadow">
              <li><a href="{{ url('/')}}" className="dropdown-item">Page</a></li>
              <li>
                  <a tabindex="-1" href="{{ url('/')}}" className="dropdown-item">Page</a>
                </li>
                <li><a href="{{ url('/')}}" className="dropdown-item">Page</a></li>
                <li><a href="{{ url('/')}}" className="dropdown-item">Page</a></li>
              </ul>
            </li>

            <li className="dropdown-submenu">
              <a id="dropdownMenu4" href="#" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="dropdown-item dropdown-toggle">Page 3</a>
              <ul aria-labelledby="dropdownMenu4" className="dropdown-menu border-0 shadow">
                <li><a href="#" className="dropdown-item">Pages</a></li>
                <li><a href="#" className="dropdown-item">Pages</a></li>
                <li><a href="#" className="dropdown-item">Pages</a></li>
                <li><a  className="dropdown-item">Pages</a></li>
              </ul>
            </li>


          </ul>
        </li> */}

        <li className="nav-item dropdown">
          <a id="dropdownMenu7" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"><b className="bb">Products</b></a>
          <ul aria-labelledby="dropdownMenu7" className="dropdown-menu border-0 shadow">

          <li><Link to="/hotellist"  onClick={this.handleClick} className="dropdown-item">Hotel </Link></li>
          <li><Link to="/cruiselist"  onClick={this.handleClick} className="dropdown-item">Cruise </Link></li>
          <li><Link to="/weddinglist"  onClick={this.handleClick} className="dropdown-item">Wedding </Link></li>
          <li><Link to="/winelist"  onClick={this.handleClick} className="dropdown-item">Wine </Link></li>
          <li><Link to="/caravanlist"  onClick={this.handleClick} className="dropdown-item">Caravan </Link></li>
          <li><Link to="/honeymoonlist"  onClick={this.handleClick} className="dropdown-item">Honeymoon </Link></li>
          <li><Link to="/holidaylist"  onClick={this.handleClick} className="dropdown-item">Holiday Packages </Link></li>
          <li><Link to="/resortlist"  onClick={this.handleClick} className="dropdown-item">Resorts </Link></li>
          <li><Link to="/planelist"  onClick={this.handleClick} className="dropdown-item">Charted Planes </Link></li>
          <li><Link to="/golflist"  onClick={this.handleClick} className="dropdown-item">Golfs </Link></li>


          </ul>
        </li>

                <li className="nav-item dropdown">
          <a id="dropdownMenu7" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link dropdown-toggle"><b className="bb">Media</b></a>
          <ul aria-labelledby="dropdownMenu7" className="dropdown-menu border-0 shadow">
          {/* <li><Link to="/cruisebookingform" className="dropdown-item">Cruise Form </Link></li>
          <li><Link to="/cart" className="dropdown-item">Cart</Link></li>
          <li><Link to="/checkout" className="dropdown-item">Checkout</Link></li>
          <li><Link to="/page404" className="dropdown-item">404</Link></li> */}
          <li><Link to="/gallery"  onClick={this.handleClick} className="dropdown-item">Gallery</Link></li>

          </ul>
        </li>

            <li className="nav-item">
        <Link to="/blogs"  onClick={this.handleClick} className="nav-link"><b className="bb">Blogs</b></Link>
      </li>

        <li className="nav-item">
        <Link to="/contact" onClick={this.handleClick} className="nav-link"><b className="bb">Contact</b></Link>
      </li>

      
<div className='phoneContent'>
{
  localStorage.getItem('user-info')?
<>
<Link style={{ color:'rgb(60, 119, 201)' }} to="/signup" onClick={this.logout}> &nbsp;&nbsp; Sign out &nbsp;&nbsp; | </Link><Link style={{ color:'rgb(60, 119, 201)' }} onClick={this.handleClick} to="/profile"> &nbsp;&nbsp; {this.user.data.name} &nbsp;&nbsp; </Link>  
</>
:
<>
<Link style={{ color:'rgb(60, 119, 201)' }} onClick={this.handleClick} to="/login"> &nbsp;&nbsp; Sign In &nbsp;&nbsp; | </Link><Link style={{ color:'rgb(60, 119, 201)' }} onClick={this.handleClick} to="/signup"> &nbsp;&nbsp; Sign Up &nbsp;&nbsp; </Link>
</>

}
</div>

      </ul>
    </div>
  </div>
</nav>

</header>
        </>
    );
}
}

export default Navbar;