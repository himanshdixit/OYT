import React from 'react';

const Cart=( {cart} )=>{
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
						<th></th>
							<th>Image</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                    
                        </tr>
                    </thead>
                    <tbody>

                    {/* <tr>
                    {                    
                    cart.map((cartItem,cartIndex)=>{
                        return(
                        <div>
                            <b>{ cartItem.name}</b>
                        </div>
                        )
                    })
                    }
                    </tr> */}

                    {
                    
                    cart.map((cartItem,cartIndex)=>{
                        return(

                        <tr>
						<td>
                            <form action="{{ route('cart.remove') }}" method="POST">

                                  <input type="hidden" value="1" name="id"/>
                                  <button class="btn btn-primary" style={{padding:'1px 8px',borderRadius:'50%',backgroundColor: '#ff3d00',border:'2px solid #ff3d00'}}>x</button>
                              </form>
                            </td>
                            <td>
                            <img src={'/uploads/cruise_items/'+cartItem.image} style={{maxHeight:'100px',minHeight:'auto',width:'auto',borderRadius:'20px'}} class="img-fluid" />
                            </td>
                            <td>{ cartItem.name}</td>
                            <td>
                            <form action="{{ route('cart.update') }}" method="POST">
                            <input type="hidden" name="id" value="1" />
                                    <input type="number" name="quantity" value="1"
                                    class="text-center" style={{padding:'1px 5px',border:' 1px solid #ff3d00',borderRadius:'5px',backgroundColor:'transparent'}} />
                                    <button type="submit" class="btn btn-outline-primary" style={{padding:'1px 5px',fontSize: '14px'}}>update</button>
                                    </form>
                            </td>
                            <td>{ cartItem.price} /-</td>

                            
                        </tr>

                                                )
                    })

                    }

                        {/* <tr>
						<td>
                            <form action="{{ route('cart.remove') }}" method="POST">

                                  <input type="hidden" value="1" name="id"/>
                                  <button class="btn btn-primary" style={{padding:'1px 8px',borderRadius:'50%',backgroundColor: '#ff3d00',border:'2px solid #ff3d00'}}>x</button>
                              </form>
                        </td>
                            <td>
                            <img src="images/k1.jpg" style={{maxHeight:'100px',minHeight:'auto',width:'auto',borderRadius:'20px'}} class="img-fluid" />
                            </td>

                            <td>Hotel1</td>
                            <td>
                            <form action="{{ route('cart.update') }}" method="POST">
                            <input type="hidden" name="id" value="1" />
                                    <input type="number" name="quantity" value="1"
                                    class="text-center" style={{padding:'1px 5px',border:' 1px solid #ff3d00',borderRadius:'5px',backgroundColor:'transparent'}} />
                                    <button type="submit" class="btn btn-outline-primary" style={{padding:'1px 5px',fontSize: '14px'}}>update</button>
                                    </form>
                            </td>
                            <td>Rs.2000/-</td>
                        </tr> */}



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
                <table class="table">
				<tbody>
    <tr>
      <th scope="row">Subtotal</th>
      <td>2000</td>
    </tr>
    <tr>
      <th scope="row">Total</th>
      <td>Rs. 50000/-</td>
    </tr>
   
  </tbody>
</table>
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

export default Cart;