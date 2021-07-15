import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/listCinema.scss'

function ListCinema() {
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
                
            </div>
        </Container>
    )
}

export default ListCinema
