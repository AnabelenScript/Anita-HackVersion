import React, { useEffect } from 'react';
import '../styles/EarthSection.css';

function EarthSection() {
  useEffect(() => {
    if (window.initialize) {
      window.initialize();
    }
  }, []);

  return (
    <section id="section_earth">
      <div id="earth_div"></div>
    </section>
  );
}

export default EarthSection;
