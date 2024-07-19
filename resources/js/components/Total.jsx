import {useSelector} from 'react-redux'

function Total() {

    const cart = useSelector((state) => state.cart)
  
    const getTotal = () => {
      let totalQuantity = 0
      let totalPrice = 0
      cart.forEach(item => {
        totalQuantity += item.quantity
        totalPrice += item.price * item.quantity
      })
      return {totalPrice, totalQuantity}
    }
   
    return (

     <>
     
     <table class="table">
				<tbody>
        <tr>
      <th scope="row">Total No. of items</th>
      <td>
      <p className="total__p"> 
           <strong>{getTotal().totalQuantity} items </strong>
          </p>
      </td>
    </tr>
    <tr>
      <th scope="row">GST</th>
      <td>0/-</td>
    </tr>
    <tr>
      <th scope="row">Total</th>
      <td> <p className="total__p"> 
           <strong>Rs. {getTotal().totalPrice} /- </strong>
          </p>
       </td>
    </tr>
   
  </tbody>
</table>

      {/* <div className="total">
        <div>
          <p className="total__p"> 
           <strong>Rs. {getTotal().totalPrice}</strong>
          </p>
          <p className="total__p"> 
           <strong>Total No. of items : {getTotal().totalQuantity} items </strong>
          </p>
        </div>
      </div> */}

     </> 

    )
  }
  
  export default Total