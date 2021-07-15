import React, {useEffect, useState}from 'react'
import { Button, Col, Container,Row } from 'react-bootstrap'
import '../css/listCinema.scss'

function ListCinema() {
    const [list, setlist] = useState([]);
    useEffect(() => {
        fetch('http://www.omdbapi.com/?s=marvel&apikey=263d22d8')
                 .then((data)=>{
                            return data.json()
                 })
                 .then((arr)=>{
                          setlist(arr.Search)
                          console.log(arr.Search[1].Title)
                 })
         
    }, [])
    useEffect(() => {
        console.log(list)

    }, [list])
    {list.map(value=>{
        return     <li >
                       <p>{value.Title}</p>
                    </li> })}


    return (
        <Container>
            <div className='listCinema' >
                <ul>
                    <li>
                        <a>Đang Chiếu</a>
                    </li>
                    <li>
                        <a>Sắp chiếu</a>    
                    </li>
                </ul>
                <Row >
     {list.map(value=>{
                return  <Col className="cardcimena" md={3}>
                                <img src={value.Poster}  />
                                <h1>{value.Title}</h1>
                                <p>Release year: {value.Year}</p>
                                <Button >Xem ngay</Button>
                            </Col>
                         })}
                </Row>
            </div>
        </Container>
    )
}

export default ListCinema
