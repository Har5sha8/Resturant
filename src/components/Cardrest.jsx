import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


function Cardrest({restaurant}) {
  return (
   <>
   <Link to={`/Restview/${restaurant?.id}`} style={{textDecoration:"none"}}>
   <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" height={"300px"} width={"100%"} src={restaurant?.photograph} />
      <Card.Body>
        <Card.Title>{restaurant?.name}</Card.Title>
        <Card.Title>{restaurant?.address}</Card.Title>
        <Card.Text>{restaurant?.neighborhood}</Card.Text>
      
       
      </Card.Body>
    </Card>
   </Link>

   
   </>
  )
}

export default Cardrest