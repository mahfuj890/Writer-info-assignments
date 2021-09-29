import React,{useState, useEffect} from 'react';
import "./WriterContainer.css";
import Writer from './Writer.jsx';
import Cart from './Cart.jsx';
// import writerInfo from './WriterInfoData';

function WriterContainer() {
  const [writer, setwriter] = useState([]);
  const [hire, sethire] = useState([]);
  useEffect(() => {
    fetch("./writerInfo.json" )
  .then(res => res.json())
  .then(data => setwriter(data))
  }, [ ])
  let handleHire = (props)=>{
   let newWriter = [...hire, props];
   sethire(newWriter);
  }

    return (
        <div className="writer_info_wrapper">
        <div className="writter_area">
         {
           writer.map((value,index ) => {
             return(
               <Writer key={index} writerInfo = {value} handleClick ={handleHire} ></Writer>
             )
           } )

           }

        </div>
      <div className="card_area">
<Cart hire={hire}></Cart>
      </div>
        </div>
    )
}

export default WriterContainer;
