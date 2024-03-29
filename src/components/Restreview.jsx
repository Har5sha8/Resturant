import React from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';




function Restreview() {
  const {id} = useParams();
 
  const allRestur = useSelector(state=>state.restSlice.allRest)
  const selectedRest = allRestur?.filter(item=>item.id == id)
  
  // const newdata = selectedRest[0]
  const reviews=(selectedRest[0].reviews);
  console.log(reviews);
  console.log("reviews");


  
  const [open, setOpen] = useState(false);
  return (
    <>
    <button className='btn btn-warning ms-3'  onClick={() => setOpen(!open)}>Click here to see Review</button>
    <Collapse in={open}>
      
    <div className='my-2'>
        <hr />
        {
        reviews?.length>0?
        reviews.map((item)=>(
          <div className='mt-5'>
            <h6>Name: <span className='ms-3 text-warning'>{item.name}</span></h6>
            <h6>date: <span className='ms-3 text-warning'>{item.date}</span></h6>
            <h6>Rating: <span className='ms-3 text-warning'>{item.rating}</span></h6>
            <p>Description: <span className='ms-3 text-warning'>{item.comments}</span></p>
        </div>
          
        )):
        <p>no reviews found</p>
      }
      
      
        
    </div>
    </Collapse>
    </>
  )
}

export default Restreview