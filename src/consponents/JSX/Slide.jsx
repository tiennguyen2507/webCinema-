import React,{useState,useEffect}from 'react'
import '../css/slide.scss'

function Slide() {  
    const slide = ["/image/slide/hero1.jpg","/image/slide/hero2.png","/image/slide/hero3.png","/image/slide/hero4.png"]
    
    const [index,setindex] = useState(0);
    useEffect( () => {
        const data01=()=>{
            if (index==3) {
                setindex(0)
            }else{
                setindex(index+1)
            }
           
        }
        setInterval(() => data01, 1000);
    }, [index])
    console.log(index)
    
   
    return (
        <div className='slide'> 
            <img src={slide[index]} onClick={()=>{if (index==3) {
                setindex(0)
            }else{
                setindex(index+1)
                }}} />    
        </div>

    )
}

export default Slide
