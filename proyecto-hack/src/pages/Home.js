import React from 'react';
import OptionsBox from '../components/OptionsBox';
import EarthSection from '../components/EarthSection';
import Navbar from '../components/Navbar';
function Home() {
  return (
    <>
 <Navbar/>
    <div className='container'>
    <OptionsBox/>
    <EarthSection/>
    </div>

    </>

  );
}

export default Home;
