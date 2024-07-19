import React from 'react';
import { Link } from "react-router-dom";

const CartItem=({props})=>{

    return (
        <>
           <div className="product-bg text-center">
                <h4 style={{color:"#C90110"}}>{ props.name }</h4>
                <span> {props.price}  &nbsp; &nbsp;</span>
                <button>-</button>
                <span> - {props.qty}</span>
                <button>+</button>
           </div>
        </>
    );
}

export default CartItem;