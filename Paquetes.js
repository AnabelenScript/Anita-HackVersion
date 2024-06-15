import PaqOaxaca from "../components/PaqOaxaca";
import Navbar from "../components/Navbar";
import OptionsBox from "../components/OptionsBox";

function Paquetes() {
    return (
  
      <>
        <div className='Paqcontainer'>
            <Navbar/>
          <OptionsBox />
          <PaqOaxaca/>
        </div>
      </>
  
    );
  }
  
  export default Paquetes;
  