import React  from 'react';
import "./Writer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'



function Writer(props) {

    const {img,name,book,age,country,sallary} = props.writerInfo;
    return (
        <div className="writer_info_items">
      <div className="writer_img">
      <img src={img} alt="" />
      </div>
     <ul className="list">
         <li>
         <p>Name:</p>
         <p>{name}</p></li>
         <li>
             <p>Number of Book:</p>
             <p>{book}</p>
         </li>
         <li>
             <p>Age:</p>
             <p>{age}</p>
         </li>
         <li>
             <p>Country:</p>
             <p>{country}</p>
         </li>
         <li>
             <p>Sallary:</p>
             <p>${sallary}</p>
         </li>
     </ul>

     <div className="cart_btn">

<button onClick={()=> props.handleClick(props.writerInfo)}   > <FontAwesomeIcon icon={faShoppingCart} />  Hire Me </button>
</div>
        </div>
    )
}

export default Writer;
