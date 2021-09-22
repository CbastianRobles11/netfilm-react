import React,{useState,useEffect} from 'react';
import './Navbar.css'

export default function Navbar() {

    //para ver el menu en todo momento
    const [show, handleShow] = useState(false);
    const [opa,setOpa]=useState(0)
    


    useEffect(()=>{
        window.addEventListener("scroll", () =>{
            if(window.scrollY > 50){
                handleShow(true);
                setOpa(1)
             
            }else{
                handleShow(false);
               setOpa(0.5)
                
               
            }
            
        });
        return () => {
            window.removeEventListener("scroll",()=>{})
        }
    }, [])

    return (
        <div className={`nav ${show && "nav__black"}`}
            style={{
                opacity:`${opa}`
            }}
        >
            
            <img
                alt="Netflix logo"
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/170px-Netflix_2015_logo.svg.png"
                className="nav__logo"
               
            />
            <img
                alt="User logged"
                src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png"
                className="nav__avatar"
               
            />
                        
        </div>
    )
}
