import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

import '/public/css/productlist.css';

import deskP from '/public/images/mbslider/1.jpg';
import phoneP from '/public/images/mbslider/mb1.jpg';

const Userlogin=()=>{

// Get ID from URL
const params = useParams();
console.log(params.pay);


  const location = useLocation();
  const data = location.state;
  console.log(data);
//  console.log(data.name);


    const nav = useNavigate();
  
    useEffect(()=> {
    if(localStorage.getItem('user-info')){
    nav("/profile");
    window.location.reload(true);
    }
    },[])

    function getDate() {
        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear();
        const date = today.getDate();
        const hours = today.getHours();
        const minutes = today.getMinutes();
        const seconds = today.getSeconds();
        return `${year}-${month}-${date} ${hours}:${minutes}:${seconds}`;
      }
      
      const [currentDate, setCurrentDate] = useState(getDate());
      
      const[inputValue, setInputValue]=useState({
        email:'',
        password:''
      });
      
      const handleInput=(e)=>{
          setInputValue({...inputValue, [e.target.name] : e.target.value});
      }
      
      const handleSubmit= async (e)=>{
          e.preventDefault();
          console.log(inputValue);
          // console.log(inputValue.name);
          // const url="http://localhost:8000/api/login";
          const url="https://oyt.travel/api/login";

          if(inputValue.email.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/) && inputValue.password==null && inputValue.password!=""){

            const res = await axios.post(url,inputValue)
            .then( resp => { console.log(resp);
              
              localStorage.setItem("user-info",JSON.stringify(resp)); 
  
              if(params.pay){
                nav("/payment/"+params.pay,{state:data});
                window.location.reload(true);
              }else{
                window.location.reload(true);
            }
  
          } )
            .catch( err => console.log(err) );

          }else{
            alert("Please Enter Vailed Email and Password !!");
            nav('/login');
          }

      }

    //   const user = JSON.parse(localStorage.getItem('user-info'));
    //   console.log(user);
    //   console.log(user.data.name);
      

//   const capitalizeWords = (str) => {
//     return str
//       .toLowerCase()
//       .split(' ')
//       .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
//       .join(' ');
//   };

//   const [data, setData] = useState([])

//   useEffect(()=> {
//       axios.get(`/api/weddings/`)
//       .then(res => {
//           //console.log(res)
//           //console.log(res.data.data[0].name)
//           //console.log(res.data)
//           setData(res.data.data)
//       })
//       .catch(err =>{
//           console.log(err)
//       })
//   }, [])

        //console.log(data)

    return(
        <>

{/* <!-- --------------------------------------------- Body Start ------------------- --> */}


<div className='deskContent'>
<img src={deskP} class="img-fluid" style={{width:'100%',marginTop:'70px'}} alt="oyt" />
</div>
<div className='phoneContent'>
<img src={phoneP} class="img-fluid" style={{width:'100%'}} alt="oyt" />
</div>

<br/>
<div style={{ textAlign:'center' }}>
<b style={{textAlign:'center',marginTop:'15px',marginBottom:'30px  ',color:'#3c77c9  ',fontSize:'2.5rem'}}>&nbsp; Login &nbsp;
</b>
<br/>
<br/>

<div className='container'>

<form onSubmit={handleSubmit} class="info-box" style={{padding:'10px',border:'1px solid rgba(0,0,0,.03)',borderRadius:'15px',backgroundColor:'rgba(0,0,0,.03)'}}>

<div class="col form-group">
<label style={{ color: '#3c77c9',fontWeight:'700'}}>Enter Your Email </label>
<input type="email" name="email" class="form-control" id="email" placeholder="Email" value={inputValue.email} onChange={handleInput} />
</div> 

<div class="col form-group">
<label style={{ color: '#3c77c9',fontWeight:'700'}}>Password </label>
<input type="password" class="form-control" name="password" id="password" placeholder="Password" value={inputValue.password} onChange={handleInput} />
</div>

<div style={{textAlign:'center'}}><button type="submit" class="btn btn-primary" style={{
    fontSize: '14px',
    marginLeft: '5px',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    borderRadius: '15px'}}>Submit</button></div>

</form>

</div>

</div>

<br/>
<br/>

{/* <!-- --------------------------------------------- Body END ------------------- --> */}
      
        </>
    );
}

export default Userlogin;