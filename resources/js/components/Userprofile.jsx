import React, { useEffect, useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '/public/css/productlist.css';

const Userprofile=()=>{

    const nav = useNavigate();
  
    useEffect(()=> {
    if(localStorage.getItem('user-info')){
    nav("/profile");
    }else{
    nav("/signup");
    window.location.reload(true);  
    }
    },[])

const user = JSON.parse(localStorage.getItem('user-info'));
//console.log(user);
//console.log(user.data.name);

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
<img src="images/mbslider/1.jpg" class="img-fluid" style={{width:'100%',marginTop:'70px'}} alt="oyt" />
</div>
<div className='phoneContent'>
<img src="images/mbslider/mb1.jpg" class="img-fluid" style={{width:'100%'}} alt="oyt" />
</div>

<br/>
<div style={{ textAlign:'center' }}>
<b style={{textAlign:'center',marginTop:'15px',marginBottom:'30px  ',color:'#3c77c9  ',fontSize:'2.5rem'}}>&nbsp; My Profile &nbsp;
</b>
<br/>
<br/>

<div className='container'>

{
  localStorage.getItem('user-info')?
<>
<b>Name</b> : <b> {user.data.name.toUpperCase()}</b> 
</>
:
<>
<b>Name</b> : <b> None</b>
</>

}


<br/>

</div>

</div>

<br/>
<br/>

{/* <!-- --------------------------------------------- Body END ------------------- --> */}
      
        </>
    );
}

export default Userprofile;