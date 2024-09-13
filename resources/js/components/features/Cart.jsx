import React from 'react';

import Total from '../Total'
import CartItem from '../CartItem'
import { useSelector } from 'react-redux'

const Cart=()=>{

    const cart = useSelector((state) => state.cart)  

    return(
        <>
          


<img src="images/pagebanners/cart.jpg" class="img-fluid" style={{width:'100%'}} alt="oyt" />

<div class="container">

                          {/* <div class="p-4 mb-3 bg-green-400 rounded">
                              <p class="text-green-800">message</p>
                          </div> */}


            {/* <!-- DATA TABLE--> */}
            <div class="table-responsive" style={{boxShadow:' 0 .5rem 1rem rgba(0,0,0,.15)',marginTop:'50px'}}>
                <table class="table" style={{backgroundColor: '#f5f5f5'}}>
                    <thead style={{backgroundColor:'#3c77c9',color:'#fff'}}>
                        <tr>
							<th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Test</th>
                            <th>Price</th>
                            <th>Action</th>
                    
                        </tr>
                    </thead>
                    <tbody>

            {cart?.map((item) => (
               <CartItem
                key={item.id}
                id={item.id}
                image={item.image}
                name={item.name}
                price={item.price} 
                quantity={item.quantity}
                test={item.test}
               />
            ))}

                    </tbody>
                </table>
				
				<form class="form-inline" style={{paddingLeft:'10px'}}>
  <div class="form-group mb-2">
    <input type="text" class="form-control" id="staticEmail2" placeholder="Coupon code"/>
  </div>
  <button type="submit" class="btn btn-secondary mb-2">Apply Coupon</button>
</form>
				
            </div>
            {/* <!-- END DATA TABLE--> */}
			<br/>
            
                        <div>
                          <form action="{{ route('cart.clear') }}" method="POST">
							 <button type="submit" class="btn btn-primary" 
    style={{fontSize: '14px',
    marginTop:'10px',
    float:'right',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    borderRadius: '15px 0 15px 0'}}>Remove All Cart</button>
                          </form>
                        </div>

<br/>
<b>Cart Totals : </b>
<br/><br/>
<div class="table-responsive" >
<Total/>                
</div>


<div >
<a href="{{ url('checkoutdetails/'.Cart::getTotal() )}}"><button type="submit" class="btn btn-primary" 
style={{fontSize: '14px',
    float:'right',
    lineHeight: '1',
    border: '2px solid #ff3d00',
    backgroundColor: '#ff3d00',
    borderRadius: '15px 0 15px 0'}}>Proceed to Checkout</button></a>
</div>

</div>


<br/>
<br/>
          
        </>
    );
}

// function Cart() {

//     const cart = useSelector((state) => state.cart)
  
//     return (
//       <div className="cart">
//         <div className="cart__left">
//           <div>
//             <h3>OYT Shopping Cart</h3>
//             {cart?.map((item) => (
//               <CartItem
//                 key={item.id}
//                 id={item.id}
//                 image={item.image}
//                 title={item.title}
//                 price={item.price} 
//                 quantity={item.quantity}
//               />
//             ))}
//           </div>
//         </div>
  
//         <div className="cart__right">
//           <Total/>
//         </div>
  
//       </div>
//     )
//   }
  

export default Cart;