import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from 'axios';

import '/public/css/blogs.css';

import blogsp from '/public/images/pagebanners/blogs.jpg';
import k1 from '/public/images/k1.jpg';
import k2 from '/public/images/k2.jpg';
import k3 from '/public/images/k3.jpg';
import k4 from '/public/images/k4.jpg';

const Blogdetails=()=>{

    // Get ID from URL
    const params = useParams();
    
    // console.log(params.id);

    // const [data, setData] = useState([]);
    
    // useEffect(() => {

    //     axios.get(`/api/blogdetails/`+params.id).then(res=>{
    //         if(res.status === 200)
    //         {
    //             setData(res.data.blogdetails)
    //             // setLoading(false);
    //         }
    //     });

    // }, []);
    
const [posts, setPosts] = useState([])

    useEffect(()=> {
        axios.get(`/api/blogdetails/`+params.id)
        .then(res => {
            console.log(res)
            // console.log(res.data.blog[0].name)
            setPosts(res.data.blog)
        })
        .catch(err =>{
            console.log(err)
        })
    }, [params.id])

        // console.log(params.id);
        // console.log(posts);


    return(
        <>
          
          <img src={blogsp} class="img-fluid" style={{width:'100%'}} alt="oyt"/>

<div class="container">

<div style={{textAlign:'center'}}>
<h1 style={{color:'#3c77c9',marginTop:'20px'}}>&nbsp; Blogs &nbsp;</h1>
<div class="line" style={{backgroundColor:'#ff3d00'}}></div>
</div>

<div class="row">

<div class="col-lg-8 col-md-8 col-xs-12">

<div class="row">


{/* {
    posts.map((item, index)=>{
        return (
            <>
           { item.name }
            </>
        )
    })
} */}



{
    posts.map((item, index)=>

<div class="col-lg-12 col-md-12 col-xs-12">
<div class="card" style={{marginBottom:'10px'}}>
<img src={'/uploads/blogs/'+item.photo} class="img-fluid" style={{width:'100%'}} alt="oyt"/>
<div style={{padding:'10px 15px',backgroundColor:'#f7f7f7cc'}}>
<br/>
<span style={{padding:'1px 5px',marginTop:'2px'}}><i class="fa fa-calendar" style={{color:'#ff3d00'}}> 26 Dec 2023 &nbsp; </i><i class="fa fa-comment" style={{color:'#ff3d00'}}>&nbsp; 0 comments</i></span>
<h3 style={{marginTop:'15px',fontWeight:'700',color:'#3c77c9',lineHeight:'1'}}> {item.name} </h3>
<p align="justify" style={{color:'#837d7d',fontFamily:'revert'}}>
{ item.des1.replace( /(<([^>]+)>)/ig, '') }
</p>
<div style={{float:'right',borderLeft:'1px solid lightgrey'}}><b style={{color:'#3c77c9',marginLeft:'10px'}}>Share &nbsp;&nbsp; <i class="fa fa-envelope" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-facebook" style={{color:'#ff3d00',margin:'2px'}}></i><i class="fa fa-twitter" style={{color:'#ff3d00',margin:'2px'}}></i></b></div>
</div>
</div>
</div>
)
}





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
<div style={{textAlign:'center'}}><img src={k1} class="img-fluid" style={{width:'auto',height:'auto',borderRadius:'5%'}} alt="oyt" /></div>
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
<div style={{textAlign:'center'}}><img src={k2} class="img-fluid" style={{width:'auto',height:'auto',borderRadius:'5%'}} alt="oyt" /></div>
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
<div style={{textAlign:'center'}}><img src={k3} class="img-fluid" style={{width:'auto',height:'auto',borderRadius:'5%'}} alt="oyt" /></div>
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
<img src={k1} class="img-fluid" style={{width:'80px',height:'80px',borderRadius:'50%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt" />
<img src={k2} class="img-fluid" style={{width:'80px',height:'80px',borderRadius:'50%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt" />
<img src={k3} class="img-fluid" style={{width:'80px',height:'80px',borderRadius:'50%',padding:'0px',border:'1px solid #3c77c9'}} alt="oyt" />

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

export default Blogdetails;