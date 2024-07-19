import { useDispatch } from 'react-redux';
import {addToCart} from '../redux/cartSlice';

function Item({id, title, image, price}) {

    const dispatch = useDispatch()
  
    return (
      <div className="item">
        <div className="item__info">
          <b className="item__title">{title}</b>
          <p className="item__price">
            <small>Rs. </small>
            <strong>{price} /-</strong> only
          </p>
        </div>
        <img
          src={image}
          alt="item"
        />
        <button 
          onClick={() => 
            dispatch(addToCart({
              id, title, image, price
            }))
          }>Add to Cart
        </button>
      </div>
    )
  }
  
  export default Item