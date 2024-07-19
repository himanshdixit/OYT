import React from 'react';

import '/public/css/productlist.css';

const Productlist=()=>{

  const capitalizeWords = (str) => {
    return str
      .toLowerCase()
      .split(' ')
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

    return(
        <>

{/* <!-- --------------------------------------------- Body Start ------------------- --> */}


<img src="images/banner2.jpg" class="img-fluid" style={{width:'100%'}} alt="oyt" />


    <div class="container">
    <div class="row">
    
	<div class="col-lg-3">
	
	{/* <!-- ---------- start filter section------- --> */}
	
	<div class="" style={{backgroundColor:'#fbfbfb',marginTop:'30px',borderRadius:'5px',border:'1px solid lightgrey'}}>
	<div style={{textAlign:'center',padding:'10px'}}><b style={{color:'#3c77c9'}}>REFINE SEARCH RESULTS</b></div>

<div id="accordion">

  <div class="card" style={{borderRadius:'0',border:'0'}}>
    <div class="card-header" id="headingOne" style={{padding:'0'}}>
      <h5 class="mb-0">
        <a class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{fontWeight:'500',color:'#3c77c9'}}>
          Price Range
        </a>
		<a href="#" class="btn btn-link" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{float:'right',color:'#3c77c9'}}><i class="fa fa-angle-down" style={{fontWeight:'800'}}></i></a>
      </h5>
    </div>

    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="card-body" style={{padding:'1rem'}}>

<div class="slidecontainer">
  <input type="range" min="500" max="10000" value="50" class="slider" id="myRange" />
  <p>Rs: <span id="demo"></span> /-</p>
</div>

{/* <script>
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
  output.innerHTML = this.value;
}
</script> */}

      </div>
    </div>
  </div>
  <div class="card" style={{borderRadius:'0',border:'0'}}>
    <div class="card-header" id="headingTwo" style={{padding:'0'}}>
      <h5 class="mb-0">
        <a class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" style={{fontWeight:'500',color:'#3c77c9'}}>
          Star Rating
        </a>
		<a href="#" class="btn btn-link" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo" style={{float:'right',color:'#3c77c9'}}><i class="fa fa-angle-down" style={{fontWeight:'800'}}></i></a>
      </h5>
    </div>
    <div id="collapseTwo" class="collapse show" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="card-body" style={{padding:'1rem'}}>

		 <div class="rate">
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
		
      </div>
    </div>
  </div>
  <div class="card" style={{borderRadius:'0',border:'0'}}>
    <div class="card-header" id="headingThree" style={{padding:'0'}}>
      <h5 class="mb-0">
        <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{fontWeight:'500',color:'#3c77c9'}}>
          Accommodations Type
        </a>
		<a href="#" class="btn btn-link" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={{float:'right',color:'#3c77c9'}}><i class="fa fa-angle-down" style={{fontWeight:'800'}}></i></a>
      </h5>
    </div>
    <div id="collapseThree" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body" style={{padding:'1rem'}}>
	<fieldset id="group2" style={{marginBottom:'2px'}}>
    <input type="radio" value="value1" name="group2" style={{margin:'5px'}}/>&nbsp; Appartments &nbsp; <br/>
    <input type="radio" value="value1" name="group2" style={{margin:'5px'}}/>&nbsp; Hotels &nbsp; <br/>
    <input type="radio" value="value2" name="group2" style={{margin:'5px'}}/>&nbsp; Gest House &nbsp; <br/>
    <input type="radio" value="value3" name="group2" style={{margin:'5px'}}/>&nbsp; Bed & Breakfast &nbsp; <br/>
	<input type="radio" value="value1" name="group2" style={{margin:'5px'}}/>&nbsp; Farm Stay &nbsp;
 	</fieldset>		
      </div>
    </div>
  </div>
  <div class="card" style={{borderRadius:'0',border:'0'}}>
    <div class="card-header" id="headingThree" style={{padding:'0'}}>
      <h5 class="mb-0">
        <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{fontWeight:'500',color:'#3c77c9'}}>
          Hotel Facilities
        </a>
		<a href="#" class="btn btn-link" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour" style={{float:'right',color:'#3c77c9'}}><i class="fa fa-angle-down" style={{fontWeight:'800'}}></i></a>
      </h5>
    </div>
    <div id="collapseFour" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body" style={{padding:'1rem'}}>
       	<fieldset id="group2" style={{marginBottom:'2px'}}>
    <input type="radio" value="value1" name="group2" style={{margin:'5px'}}/>&nbsp; Wifi &nbsp; <br/>
    <input type="radio" value="value1" name="group2" style={{margin:'5px'}}/>&nbsp; Parking &nbsp; <br/>
    <input type="radio" value="value2" name="group2" style={{margin:'5px'}}/>&nbsp; Airport Shuttle &nbsp; <br/>
    <input type="radio" value="value3" name="group2" style={{margin:'5px'}}/>&nbsp; Restaurant &nbsp; <br/>
	<input type="radio" value="value1" name="group2" style={{margin:'5px'}}/>&nbsp; Family rooms &nbsp; <br/>
	<input type="radio" value="value1" name="group2" style={{margin:'5px'}}/>&nbsp; Pay TV &nbsp;
 	</fieldset>
      </div>
    </div>
  </div>
  <div class="card" style={{borderRadius:'0',border:'0'}}>
    <div class="card-header" id="headingThree" style={{padding:'0'}}>
      <h5 class="mb-0">
        <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{fontWeight:'500',color:'#3c77c9'}}>
          Hotel Theme
        </a>
		<a href="#" class="btn btn-link" data-toggle="collapse" data-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive" style={{float:'right',color:'#3c77c9'}}><i class="fa fa-angle-down" style={{fontWeight:'800'}}></i></a>
      </h5>
    </div>
    <div id="collapseFive" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body" style={{padding:'1rem'}}>
        Cooming Soon..!!
      </div>
    </div>
  </div>
  <div class="card" style={{borderRadius:'0',border:'0'}}>
    <div class="card-header" id="headingThree" style={{padding:'0'}}>
      <h5 class="mb-0">
        <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={{fontWeight:'500',color:'#3c77c9'}}>
          Accessiblity Options
        </a>
		<a href="#" class="btn btn-link" data-toggle="collapse" data-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix" style={{float:'right',color:'#3c77c9'}}><i class="fa fa-angle-down" style={{fontWeight:'800'}}></i></a>
      </h5>
    </div>
    <div id="collapseSix" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body" style={{padding:'1rem'}}>
        Comming Soon..!!
      </div>
    </div>
  </div>
  <div class="card" style={{borderRadius:'0'}}>
    <div class="card-header" id="headingThree" style={{padding:'0'}}>
      <h5 class="mb-0">
        <a class="btn btn-link collapsed" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" style={{fontWeight:'500',color:'#3c77c9'}}>
          Payment Options
        </a>
		<a href="#" class="btn btn-link" data-toggle="collapse" data-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven" style={{float:'right',color:'#3c77c9'}}><i class="fa fa-angle-down" style={{fontWeight:'800'}}></i></a>
      </h5>
    </div>
    <div id="collapseSeven" class="collapse" aria-labelledby="headingThree" data-parent="#accordion">
      <div class="card-body" style={{padding:'1rem'}}>
        Comming Soon..!!
      </div>
    </div>
  </div>

<br/>

<button class="btn btn-primary" style={{fontSize:'14px',marginLeft:'5px',lineHeight:'1',border:'2px solid #ff3d00',backgroundColor:'#ff3d00',borderRadius:'15px 0 15px 0'}}>Reset All</button>
 
</div>

	
	
	</div>
	{/* <!-- ---------- End filter section------- --> */}
	
	
	</div>
	<div class="col-lg-9">
	
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" style={{marginTop:'30px'}}>
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
  </ol>
  <div class="carousel-inner" style={{borderRadius:'5px'}}>
    <div class="carousel-item active">
      <img src="images/banner1.jpg" class="d-block w-100" alt="oyt"/>
    </div>
    <div class="carousel-item">
      <img src="images/banner2.jpg" class="d-block w-100" alt="oyt"/>
    </div>
    <div class="carousel-item">
      <img src="images/banner3.jpg" class="d-block w-100" alt="oyt"/>
    </div>
  </div>
</div>

<div style={{marginTop:'20px',marginBottom:'10px'}}>


<div class="row">
<div class="col-4" style={{borderBottom:'2px solid lightgrey'}}>
<nav aria-label="..." style={{float:'left'}}>
  <ul class="pagination pagination-sm">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1"><i class="fa fa-angle-left"></i></a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><i class="fa fa-angle-right"></i></a>
    </li>
  </ul>
</nav>

</div>
<div class="col-4" style={{borderBottom:'2px solid lightgrey'}}>
<div style={{textAlign:'center'}}>
<div class="input-group input-group-sm mb-3">
<label style={{marginTop:'5px',color:'#ff3d00'}}><b style={{fontSize:'14px',fontWeight:'600'}}>Short by : &nbsp;&nbsp;
</b></label>
  <select type="select" name="name" class="form-control" id="name" style={{borderRadius:'5px',color:'#3c77c9',borderColor:'#3c77c9'}}>
    <option selected>Availability</option>
    <option value="1">One</option>
    <option value="2">Two</option>
    <option value="3">Three</option>
</select>
  
</div>

</div>
</div>
<div class="col-4" style={{borderBottom:'2px solid lightgrey'}}>
<div class="btn-group btn-group-sm" role="group" aria-label="Basic example" style={{borderRadius:'5px',float:'right'}}>
  <button type="button" class="btn btn-primary">List</button>
  <button type="button" class="btn btn-outline-primary">Map</button>
</div>
</div>
</div>

</div>


{/* @if(session('message'))
<!-- Modal -->
<div class="modal fade" data-target="#exampleModalCenter" id="myModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle"><i class="fa fa-envelope" style="color:#3c77c9;font-size:20px;"><span style="color:white;background-color:#ff3d00;padding:2px;border-radius:50%;font-size:10px;">1</span></i>&nbsp;&nbsp;Message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p style={{color:'#3c77c9'}}>{{ session('message')}}</p>
      </div>
    </div>
  </div>
</div>
@endif */}

{/* <script>
    $(document).ready(function(){
        $("#myModal").modal('show');
    });
</script> */}


{/* <!-- ------------------------  Start card------------- --> */}
<div style={{borderBottom:'2px dotted lightgrey',marginTop:'10px',marginBottom:'10px'}}>
<div class="row">
<div class="col-lg-3">
<div style={{textAlign:'center'}}>
<img src="images/k3.jpg" class="img-fluid" style={{borderRadius:'7px'}} alt=""/>
</div>
</div>
<div class="col-lg-6">
<div style={{paddingTop:'7px'}}>
<b style={{color:'#3c77c9'}}>OYT Hotel &nbsp;&nbsp; 
<br/><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i></b>
&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-map-marker" style={{color:'#ff3d00'}}>&nbsp; Delhi NCR</i>
<p align="justify" style={{margin:'5px',marginBottom:'10px',fontFamily:'system-ui'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus enim felis, egestas a dolor et, 
convallis aliquam...
<a href="#" style={{float:'right',color:'#3c77c9',fontWeight:'600'}}>view details <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
</p>
<div style={{paddingLeft:'5px'}}>
<div class="input-group input-group-sm">
<label style={{marginTop:'5px',color:'#ff3d00'}}><b style={{fontSize:'14px',fontWeight:'600'}}>User Rating : &nbsp;&nbsp;
</b></label>
 <div class="rate" style={{padding: '5px 1px'}}>
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
  
</div>
</div>

</div>
</div>
<div class="col-lg-3">

<div class="container" style={{textAlign:'center',marginBottom:'10px'}}>
<div class="row" style={{overflow:'hidden'}}>
<div class="col-2" style={{paddingRight:'0'}}>
<div style={{
marginTop:'10px',
backgroundColor:'#fff',
height:'0',
width:'0',
float:'right',
borderBottom: 'solid 50px transparent',
borderRight: 'solid 25px #ff3d00',
borderTop: 'solid 50px transparent'
}}>
</div>
</div>
<div class="col-10" style={{paddingLeft:'0'}}>
<div style={{backgroundColor:'#f75724',height:'100px',paddingTop:'10px',marginTop:'10px',borderBottomRightRadius:'10px',borderTopRightRadius:'10px'}}>
<h1 style={{color:'#fff',fontFamily:'arial',marginTop:'15px',fontWeight:'800'}}><i class="fa fa-inr" aria-hidden="true" style={{fontSize:'1.5rem',color:'#fff'}}></i>&nbsp;5000/-</h1>
<a href="#" ><button class="btn btn-primary" style={{backgroundColor:'#e72c2c',borderColor:'#e72c2c',marginTop:'11px',padding:'2px 11px',paddingBottom:'1px',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>Book now</button></a>
</div>
<span style={{
fontSize: '14px',
    color: '#fff',
    backgroundColor: '#3c77c9',
    top: '-11px',
    right: '-22px',
    padding: '18px 18px 2px 30px',
    position: 'absolute',
    transform: 'rotate(41deg)'
}}>HOT</span>
</div>
</div>
</div>

</div>
</div>
</div>
{/* <!-- ------------------------  end card------------- --> */}

{/* <!-- ------------------------  Start card------------- --> */}
<div style={{borderBottom:'2px dotted lightgrey',marginTop:'10px',marginBottom:'10px'}}>
<div class="row">
<div class="col-lg-3">
<div style={{textAlign:'center'}}>
<img src="images/cruise4.jpg" class="img-fluid" style={{borderRadius:'7px'}} alt=""/>
</div>
</div>
<div class="col-lg-6">
<div style={{paddingTop:'7px'}}>
<b style={{color:'#3c77c9'}}>OYT Hotel &nbsp;&nbsp; 
<br/><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i><i class="fa fa-star" style={{color:'lightgrey',margin:'2px'}}></i></b>
&nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-map-marker" style={{color:'#ff3d00'}}>&nbsp; Delhi NCR</i>
<p align="justify" style={{margin:'5px',marginBottom:'10px',fontFamily:'system-ui'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus enim felis, egestas a dolor et, 
convallis aliquam...
<a href="#" style={{float:'right',color:'#3c77c9',fontWeight:'600'}}>view details <i class="fa fa-angle-double-right" aria-hidden="true"></i></a>
</p>
<div style={{paddingLeft:'5px'}}>
<div class="input-group input-group-sm">
<label style={{marginTop:'5px',color:'#ff3d00'}}><b style={{fontSize:'14px',fontWeight:'600'}}>User Rating : &nbsp;&nbsp;
</b></label>
 <div class="rate" style={{padding: '5px 1px'}}>
    <input type="radio" id="star5" name="rate" value="5" />
    <label for="star5" title="text">5 stars</label>
    <input type="radio" id="star4" name="rate" value="4" />
    <label for="star4" title="text">4 stars</label>
    <input type="radio" id="star3" name="rate" value="3" />
    <label for="star3" title="text">3 stars</label>
    <input type="radio" id="star2" name="rate" value="2" />
    <label for="star2" title="text">2 stars</label>
    <input type="radio" id="star1" name="rate" value="1" />
    <label for="star1" title="text">1 star</label>
  </div>
  
</div>
</div>

</div>
</div>
<div class="col-lg-3">

<div class="container" style={{textAlign:'center',marginBottom:'10px'}}>
<div class="row" style={{overflow:'hidden'}}>
<div class="col-2" style={{paddingRight:'0'}}>
<div style={{
marginTop:'10px',
backgroundColor:'#fff',
height:'0',
width:'0',
float:'right',
borderBottom: 'solid 50px transparent',
borderRight: 'solid 25px #ff3d00',
borderTop: 'solid 50px transparent'
}}>
</div>
</div>
<div class="col-10" style={{paddingLeft:'0'}}>
<div style={{backgroundColor:'#f75724',height:'100px',paddingTop:'10px',marginTop:'10px',borderBottomRightRadius:'10px',borderTopRightRadius:'10px'}}>
<h1 style={{color:'#fff',fontFamily:'arial',marginTop:'15px',fontWeight:'800'}}><i class="fa fa-inr" aria-hidden="true" style={{fontSize:'1.5rem',color:'#fff'}}></i>&nbsp;5000/-</h1>
<a href="#" ><button class="btn btn-primary" style={{backgroundColor:'#e72c2c',borderColor:'#e72c2c',marginTop:'11px',padding:'2px 11px',paddingBottom:'1px',borderTopLeftRadius:'10px',borderTopRightRadius:'10px'}}>Book now</button></a>
</div>


</div>
</div>
</div>

</div>
</div>
</div>
{/* <!-- ------------------------  end card------------- --> */}



<div style={{float:'right'}}>
<nav aria-label="..." style={{float:'left'}}>
  <ul class="pagination pagination-sm">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1"><i class="fa fa-angle-left"></i></a>
    </li>
    <li class="page-item active"><a class="page-link" href="#">1</a></li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#"><i class="fa fa-angle-right"></i></a>
    </li>
  </ul>
</nav>
</div>




	<br/>
	</div>
	
	</div>
	</div>


{/* <!-- --------------------------------------------- Body END ------------------- --> */}
           
        </>
    );
}

export default Productlist;