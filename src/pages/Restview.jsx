import React from 'react'
import { Row,Col } from 'react-bootstrap'
import ListGroup from 'react-bootstrap/ListGroup';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Restreview from '../components/Restreview';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';


function Restview() {
  const {id} = useParams();
  console.log('===id===',id);
  const allRestur = useSelector(state=>state.restSlice.allRest)
  const selectedRest = allRestur?.filter(item=>item.id == id)
  // const newdata = selectedRest[0]
  console.log(selectedRest);


    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
   <>
   <Row className='mt-5 mb-5'>
    <Col md={1}>
    </Col>  
    <Col md={3}>
        <img src={selectedRest[0]?.photograph} alt=""
         width={'100%'} className='rounded' />
    </Col>
    <Col md={7} className='px-5'>
        <h4 className='text-center'> 
            <span className='text-warning' >Restaurant</span>Details
        </h4>
        <hr />
        <ListGroup>
      <ListGroup.Item>Restaurent Name:{selectedRest[0].name}</ListGroup.Item>
      <ListGroup.Item>Neighbourhood:{selectedRest[0].neighborhood}</ListGroup.Item>
      <ListGroup.Item>Cuisine Type:{selectedRest[0].cuisine_type}</ListGroup.Item>
      <ListGroup.Item>Address:{selectedRest[0].address}</ListGroup.Item>
      <ListGroup.Item className='text-center p-3 me-2 mb-2'>
        <button className='btn btn-warning' onClick={handleShow}>Operating Hours</button>
        <Restreview selectedRest= {selectedRest[0]}/>
        {/* <div className='d-flex justify-content-center align-items-center'> */}
      
      {/* </div> */}
      </ListGroup.Item>
    </ListGroup>
    </Col>
    <Col md={1}>
    </Col>

   </Row>
   <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>operating Hour</Modal.Title>

        </Modal.Header>
        <Modal.Body>
        <ListGroup>
      <ListGroup.Item>Monday <span className='ms-3 text-primary'>{selectedRest[0].operating_hours.Monday}</span></ListGroup.Item>
      <ListGroup.Item>Tuesday <span className='ms-3 text-primary'>{selectedRest[0].operating_hours.Tuesday}</span></ListGroup.Item>
      <ListGroup.Item>Wednesday <span className='ms-3 text-primary'>{selectedRest[0].operating_hours.Wednesday}</span></ListGroup.Item>
      <ListGroup.Item>Thursday <span className='ms-3 text-primary'>{selectedRest[0].operating_hours.Thursday}</span></ListGroup.Item>
      <ListGroup.Item>Friday <span className='ms-3 text-primary'>{selectedRest[0].operating_hours.Friday}</span></ListGroup.Item>
      <ListGroup.Item>saturday <span className='ms-3 text-primary'>{selectedRest[0].operating_hours.Saturday}</span></ListGroup.Item>
      <ListGroup.Item>sunday<span className='ms-3 text-primary'>{selectedRest[0].operating_hours.Sunday}</span></ListGroup.Item>
    </ListGroup>
        </Modal.Body>
        
      </Modal>
     
    
   </>
  )
}

export default Restview