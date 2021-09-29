import React from 'react';
import "./Cart.css";

function Cart(props) {

    const {hire} = props;
    console.log(props.hire.name);
    let totalPrice = 0;
    let totalName = " " ;
    for(let writerItems of hire){

        totalPrice+=writerItems.sallary  ;
        totalName+= writerItems.name    ;

    }







    return (
        <>
      <h2 >Total Writer: {props.hire.length} </h2>
         <h2>Total Coast:{totalPrice}</h2>
         <p className="writer_list">{totalName} </p>
        </>
    )
}

export default Cart;
