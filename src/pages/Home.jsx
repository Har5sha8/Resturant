import React, { useEffect } from 'react'
import { Row,Col } from 'react-bootstrap'
import Cardrest from '../components/Cardrest'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRest } from '../redux/restSlice'


function Home() {
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(fetchRest())
  },[])
  const allRestur = useSelector(state=>state.restSlice.allRest)
  console.log("==1==");
  console.log(allRestur);
  return (
    <>
    <Row>{
      allRestur?.length > 0 ?
      allRestur.map((restaurant)=>(
        <Col className='px-5 py-3' sm={6} md={4} lg={4}>
            <Cardrest restaurant={restaurant} />
        
        </Col>
      )):
      <p>No item to display</p>
      }
        
          

       
    </Row>
    </>

  )
}

export default Home