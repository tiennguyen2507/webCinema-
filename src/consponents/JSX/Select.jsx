import React from 'react'
import { Button, Container } from 'react-bootstrap'
import '../css/select.scss'

function Select() {
    return (
        <Container >
            <div className='select'>
                <select name="tiennguyen" id="" placeholder='tiennguyen'>phim
                    <option value="">Chọn phim</option>
                </select>
                <select name="tiennguyen" id="" placeholder='tiennguyen'>phim
                    <option value="">Chọn rạp</option>  
                </select>
                <select name="tiennguyen" id="" placeholder='tiennguyen'>phim
                    <option value="">Ngày chiếu</option>
                </select>
                <select name="tiennguyen" id="" placeholder='tiennguyen'>phim
                    <option value="">Giờ chiếu</option>
                </select>
                <Button>Mua vé ngay</Button>
            </div>
        </Container>
        
    )
}

export default Select
