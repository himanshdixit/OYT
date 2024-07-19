import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';
import { Link } from "react-router-dom";

function Item_cruise({id, name, image, price}) {

    const dispatch = useDispatch()
  
    return (
      
    //   <div className="item">
    //     <div className="item__info">
    //       <b className="item__title">{title}</b>
    //       <p className="item__price">
    //         <small>Rs. </small>
    //         <strong>{price} /-</strong> only
    //       </p>
    //     </div>
    //     <img
    //       src={image}
    //       alt="item"
    //     />
    //     <button 
    //       onClick={() => 
    //         dispatch(addToCart({
    //           id, title, image, price
    //         }))
    //       }>Add to Cart
    //     </button>
    //   </div>

<div class="uk-card uk-card-default">
<div class="uk-card-media-top">
    <Link to={'/cruisedetailpage/' + id}><img src={image} width="1800" height="1200" alt="oyt" /></Link>
    <b class="cardicontxt">New</b>
    <i class="fa fa fa-eye cardicon1"></i>
    <a href="#" data-toggle="modal" data-target="#exampleModalCenter11">
    <i class="fa fa-shopping-cart cardicon2" onClick={() => 
             dispatch(addToCart({
               id, name, image, price
            }))
           } ></i>
    </a>
</div>
<div class="uk-card-body" style={{padding:'10px',border:'2px solid lavender'}}>
<Link to={'/cruisedetailpage/' + id}><h5 class="uk-card-title"> {name} </h5></Link>
    <p class="card-text" align="justify">4.8/5 Excellent </p>
<p class="card-text" style={{marginBottom:'2px',marginTop: '5px',fontSize:'14px',color:'#3c77c9'}}><b class="price">Rs. {price}/- </b>price <a href="#"><i class="fa fa-long-arrow-right cardlink" style={{color:'#f5640a',marginTop:'3px',float:'right'}}></i></a></p>
</div>
</div>


    )
  }



  
  export default Item_cruise