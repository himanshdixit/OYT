import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import axios from 'axios';


import '/public/css/blogs.css';

const Blogs=()=>{

    const [data, setData] = useState([]);
    
    useEffect(() => {

        axios.get(`/api/blogs`).then(res=>{
            if(res.status === 200)
            {
                setData(res.data.blogs)
                // setLoading(false);
            }
        });

    }, []);

    return(
        <>
           
<img src="images/pagebanners/blogs.jpg" class="img-fluid" style={{width:'100%'}} alt="oyt"/>

<div class="container">

<div style={{textAlign:'center'}}>
<h1 style={{color:'#3c77c9',marginTop:'20px'}}>&nbsp; Blogs &nbsp;</h1>
<div class="line" style={{backgroundColor:'#ff3d00'}}></div>
</div>

<div class="row">

<div class="col-lg-8 col-md-8 col-xs-12">

<div class="row">

{/* {
    data.map((item, index)=>{
        return (
            <>
           { item.name }
            </>
        )
    })
} */}



{
    data.map((item)=>

<div class="col-lg-12 col-md-12 col-xs-12">
<div class="card" style={{marginBottom:'10px'}}>
<img src={'uploads/blogs/'+item.photo} class="img-fluid" style={{width:'100%'}} alt="oyt"/>
<div style={{padding:'10px 15px',backgroundColor:'#f7f7f7cc'}}>
<br/>
<span style={{padding:'1px 5px',marginTop:'2px'}}><i class="fa fa-calendar" style={{color:'#ff3d00'}}> 26 Dec 2023 &nbsp; </i><i class="fa fa-comment" style={{color:'#ff3d00'}}>&nbsp; 0 comments</i></span>
<Link to={'/blogdetails/' + item.id}><h3 style={{marginTop:'15px',fontWeight:'700',color:'#3c77c9',lineHeight:'1'}}>{ item.name }</h3></Link>
<p align="justify" style={{color:'#837d7d',fontFamily:'revert'}}> { item.des1.replace( /(<([^>]+)>)/ig, '') } </p>
<a href="{{ url('/blogdetails')}}"><b style={{fontWeight:'500',fontSize:'14px',color:'#ff3d00'}}>Read More &nbsp; <i class="fa fa-long-arrow-right"></i></b></a>
<div style={{float:'right',borderLeft:'1px solid lightgrey'}}><b style={{color:'#3c77c9',marginLeft:'10px'}}>Share &nbsp;&nbsp; <i class="fa fa-envelope" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-facebook" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-twitter" style={{color:'#ff3d00',margin:'2px'}}></i></b></div>
</div>
</div>
</div>

)
}

{/* <!-- ------- Start blog post ----------> */}
<div class="col-lg-12 col-md-12 col-xs-12">
<div class="card" style={{marginBottom:'10px'}}>
<img src="images/k3.jpg" class="img-fluid" style={{width:'100%'}} alt="oyt"/>
<div style={{padding:'10px 15px',backgroundColor:'#f7f7f7cc'}}>
<br/>
<span style={{padding:'1px 5px',marginTop:'2px'}}><i class="fa fa-calendar" style={{color:'#ff3d00'}}> 26 Dec 2023 &nbsp; </i><i class="fa fa-comment" style={{color:'#ff3d00'}}>&nbsp; 0 comments</i></span>
<a href="blogdetails.html"><h3 style={{marginTop:'15px',fontWeight:'700',color:'#3c77c9',lineHeight:'1'}}>This is Blog Heading</h3></a>
<p align="justify" style={{color:'#837d7d',fontFamily:'revert'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus enim felis, egestas a dolor et, convallis aliquam...</p>
<a href="#"><b style={{fontWeight:'500',fontSize:'14px',color:'#ff3d00'}}>Read More &nbsp; <i class="fa fa-long-arrow-right"></i></b></a>
<div style={{float:'right',borderLeft:'1px solid lightgrey'}}><b style={{color:'#3c77c9',marginLeft:'10px'}}>Share &nbsp;&nbsp; <i class="fa fa-envelope" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-facebook" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-twitter" style={{color:'#ff3d00',margin:'2px'}}></i></b></div>
</div>
</div>
</div>
{/* <!-- ------- End blog post ----------> */}
{/* <!-- ------- Start blog post ----------> */}
<div class="col-lg-12 col-md-12 col-xs-12">
<div class="card" style={{marginBottom:'10px'}}>
<img src="images/k2.jpg" class="img-fluid" style={{width:'100%'}} alt="oyt"/>
<div style={{padding:'10px 15px',backgroundColor:'#f7f7f7cc'}}>
<br/>
<span style={{padding:'1px 5px',marginTop:'2px'}}><i class="fa fa-calendar" style={{color:'#ff3d00'}}> 26 Dec 2023 &nbsp; </i><i class="fa fa-comment" style={{color:'#ff3d00'}}>&nbsp; 0 comments</i></span>
<a href="blogdetails.html"><h3 style={{marginTop:'15px',fontWeight:'700',color:'#3c77c9',lineHeight:'1'}}>This is Blog Heading</h3></a>
<p align="justify" style={{color:'#837d7d',fontFamily:'revert'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus enim felis, egestas a dolor et, convallis aliquam...</p>
<a href="#"><b style={{fontWeight:'500',fontSize:'14px',color:'#ff3d00'}}>Read More &nbsp; <i class="fa fa-long-arrow-right"></i></b></a>
<div style={{float:'right',borderLeft:'1px solid lightgrey'}}><b style={{color:'#3c77c9',marginLeft:'10px'}}>Share &nbsp;&nbsp; <i class="fa fa-envelope" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-facebook" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-twitter" style={{color:'#ff3d00',margin:'2px'}}></i></b></div>
</div>
</div>
</div>
{/* <!-- ------- End blog post ----------> */}



</div>
</div>

<div class="col-lg-4 col-md-4 col-xs-12">
<div>


{/* <!-- ------- Start card 1----------> */}
<div class="card" style={{marginBottom:'20px'}}>
<div style={{padding:'10px 15px',backgroundColor:'#f5f5f5'}}>
<b style={{fontSize:'16px',color:'#3c77c9',margin:'5px'}}>Newsletter &nbsp;</b>
<hr style={{marginTop:'5px'}}/>
<p align="justify" style={{color:'#837d7d',fontFamily:'revert'}}>Don't miss the daily deals hurry up Do sign up </p>
<form>
<div class="form-group">
<input name="email" type="email" class="form-control" placeholder="Your Email Address" style={{padding: '0.375rem 3.75rem',fontSize: '14px'}} />
</div>
<div style={{textAlign:'center'}}><button type="submit" class="btn btn-primary" style={{ 
    fontSize: '14px',
    width:'100%',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    borderRadius: '7px' }}>Submit</button>
</div>
</form>
</div>
</div>
{/* <!-- ------- End card 1 ----------> */}


{/* <!-- ------- Start card 2 ----------> */}
<div class="card" style={{marginBottom:'20px'}}>
<div style={{padding:'10px 15px',backgroundColor:'#fff'}}>
<b style={{fontSize:'16px',color:'#3c77c9',margin:'5px'}}>Travel Tips &nbsp;</b>
<hr style={{marginTop:'5px'}} />

<div style={{marginBottom:'10px'}}>
<div class="row">
<div class="col-4">
<div style={{textAlign:'center'}}><img src="images/k1.jpg" class="img-fluid" style={{width:'auto',height:'auto',borderRadius:'5%'}} alt="oyt" /></div>
</div>
<div class="col-8">
<div style={{padding:'1px'}}>
<b style={{fontWeight:'600',fontSize:'14px'}}>This is side Heading 1</b>
<br/>
<span style={{fontSize:'12px'}}>Dec 20, 2023</span>
</div>
</div>
</div>
</div>
<div style={{marginBottom:'10px'}}>
<div class="row">
<div class="col-4">
<div style={{textAlign:'center'}}><img src="images/k2.jpg" class="img-fluid" style={{width:'auto',height:'auto',borderRadius:'5%'}} alt="oyt" /></div>
</div>
<div class="col-8">
<div style={{padding:'1px'}}>
<b style={{fontWeight:'600',fontSize:'14px'}}>This is side Heading 2</b>
<br/>
<span style={{fontSize:'12px'}}>Dec 20, 2023</span>
</div>
</div>
</div>
</div>
<div style={{marginBottom:'10px'}}>
<div class="row">
<div class="col-4">
<div style={{textAlign:'center'}}><img src="images/k3.jpg" class="img-fluid" style={{width:'auto',height:'auto',borderRadius:'5%'}} alt="oyt" /></div>
</div>
<div class="col-8">
<div style={{padding:'1px'}}>
<b style={{fontWeight:'600',fontSize:'14px'}}>This is side Heading 3</b>
<br/>
<span style={{fontSize:'12px'}}>Dec 20, 2023</span>
</div>
</div>
</div>
</div>


</div>
</div>
{/* <!-- ------- end card 2 ----------> */}

{/* <!-- ------- Start card 3----------> */}
<div class="card" style={{marginBottom:'20px'}}>
<div style={{padding:'10px 15px',backgroundColor:'#f5f5f5'}}>
<b style={{fontSize:'16px',color:'#3c77c9',margin:'5px'}}>Flicker &nbsp;</b>
<hr style={{marginTop:'5px'}} />

<div style={{textAlign:'center'}}>
<img src="images/k1.jpg" class="img-fluid" style={{width:'80px',height:'80px',borderRadius:'50%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt" />
<img src="images/k2.jpg" class="img-fluid" style={{width:'80px',height:'80px',borderRadius:'50%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt" />
<img src="images/k3.jpg" class="img-fluid" style={{width:'80px',height:'80px',borderRadius:'50%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt" />

</div>

</div>
</div>
{/* <!-- ------- End card 3 ----------> */}


</div>


</div>
</div>
</div>


<br/>
<br/>

           
        </>
    );
}

export default Blogs;