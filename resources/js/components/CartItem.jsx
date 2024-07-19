import React from 'react';
import { Link } from "react-router-dom";

import { incrementQuantity, decrementQuantity, removeItem} from '../redux/cartSlice'
import { useDispatch } from 'react-redux'

// const CartItem=({props})=>{

//     return (
//         <>
//            <div className="product-bg text-center">
//                 <h4 style={{color:"#C90110"}}>{ props.name }</h4>
//                 <span> {props.price}  &nbsp; &nbsp;</span>
//                 <button>-</button>
//                 <span> - {props.qty}</span>
//                 <button>+</button>
//            </div>
//         </>
//     );
// }



function CartItem({id, image, name, price, quantity=0,test}) {
    const dispatch = useDispatch()
  
    return (

<>

<tr>
                            <td>
                            <img src={image} style={{maxHeight:'100px',minHeight:'auto',width:'auto',borderRadius:'20px'}} class="img-fluid" />
                            </td>
                            <td>{name}</td>
                            <td>
                            <button class="btn btn-outline-primary" style={{ padding:'5px',lineHeight:'1.2'}} onClick={() => dispatch(decrementQuantity(id))} >-</button>
                            <span> {quantity} </span>
                            <button class="btn btn-outline-primary" style={{ padding:'5px',lineHeight:'1.2'}} onClick={() => dispatch(incrementQuantity(id))} >+</button>
                            </td>
                            <td> {test} </td>
                            <td>{price} /-</td>
                            <td> 
                            <button class="btn btn-primary"
                              onClick={() => dispatch(removeItem(id))}>
                              Remove
                            </button>
                            </td>

                            
                        </tr>

</>

      // <div className="cartItem">
      //   <img className="cartItem__image" src={image} alt='item'/>
      //   <div className="cartItem__info">
      //     <p className="cartItem__title">{title}</p>
      //     <p className="cartItem__price">
      //       <small>Rs.</small>
      //       <strong>{price}</strong>
      //     </p>
      //     <div className='cartItem__incrDec'>
      //       <button onClick={() => dispatch(decrementQuantity(id))}>-</button>
      //       <p>{quantity}</p>
      //       <button onClick={() => dispatch(incrementQuantity(id))}>+</button>
      //     </div>
      //     <button
      //       className='cartItem__removeButton' 
      //       onClick={() => dispatch(removeItem(id))}>
      //         Remove
      //     </button>
      //   </div>
      // </div>
    )
  }
  
  export default CartItem