import React from 'react';

const Page404=()=>{
    return(
        <>
           
<img src="images/pagebanners/errorbanner.jpg" class="img-fluid" style={{width:'100%'}} alt="oyt" />

<div class="container">
<br/>
<br/>
<div style={{textAlign:'center',backgroundColor:'#f5f5f5'}}>
<br/>
<img src="images/error.jpg" class="img-fluid" style={{height:'150px',width:'150px',borderRadius:'50%'}} alt="oyt"/>
<h3 style={{marginTop:'15px',fontWeight:'700'}}>Oops looks like a ghost !!</h3>
<p align="justify" style={{textAlign:'center',color:'#837d7d',fontFamily:'revert'}}>The Page you are looking for can't be found. Go Home <a href="#">Click here...</a> </p>
<br/>
</div>

</div>
           
        </>
    );
}

export default Page404;