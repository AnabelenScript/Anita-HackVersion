import Flights from '../components/VuelosOp';
import Navbar from '../components/Navbar';
import OptionsBox from '../components/OptionsBox';
import Footer from '../components/Footer'
import '../styles/Vuelos.css'

function Vuelos() {
    return (
      <>
        <div className='containerFlights'>
            <Navbar/>
          <OptionsBox />
          <Flights/>
          <Footer/>
        </div>
      </>
  
    );
  }




export default Vuelos;