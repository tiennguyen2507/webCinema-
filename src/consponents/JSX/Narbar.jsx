import React from 'react'
import { Container } from 'react-bootstrap'
import '../css/narbar.scss'



function Narbar() {
    return (
        <div className="narbar">
            <Container fluid className ='narbar_flex'>
                <a href=''>
                    <img src ="\image\logo_white.png" />
                </a>    
                <ul className='ulcenter'>
                    <li>
                        <a href ='' >Lịch chiếu</a>
                    </li>
                    <li>
                        <a href ='' >Cụm rạp</a>
                    </li>
                    <li>
                        <a href ='' >Tin tức</a>
                    </li>
                    <li>
                        <a href ='' >Ứng dụng</a>
                    </li> 
                </ul>
                 <ul className='ulright'>
                 <li>
                        <a href ='' >Đăng Nhập</a>
                    </li>
                    <li>
                        <a href ='' >Đăng ký</a>
                    </li>
                </ul>   
            </Container>
                        
            
        </div>
    )
}

export default Narbar
