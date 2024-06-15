import React from 'react';
import OptionsBox from '../components/OptionsBox';
import Navbar from '../components/Navbar';
import '../styles/Compra.css';
import AnimatedContainer from '../components/AnimatedContainer';

function Compra() {
    return (
        <div className='payPage'>
            <AnimatedContainer/>
            <Navbar/> 
            <OptionsBox/>
             <div className='contenido'>
                 <h1>
                Compra
             </h1>

             </div>
            
        </div>
        
    );
  
}

export default Compra;
