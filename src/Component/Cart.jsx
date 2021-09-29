import React from 'react';
import "./Cart.css";

function Cart(props) {
    console.log(typeof props.sallary,props);
    const {hire} = props;
    let totalPrice = 0;
    let totalName = " " ;
    for(let writerItems of hire){
        console.log(writerItems.name);
        totalPrice+=writerItems.sallary  ;
        totalName+=`${writerItems.name} `   ;
    }


    return (
        <>
      <h2 >Total Writer: {props.hire.length} </h2>
         <h2>Total Coast:{totalPrice}</h2>
         <p className="writer_list">{`${totalName } `  } </p>
        </>
    )
}

export default Cart;
