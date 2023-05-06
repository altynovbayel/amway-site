import React from 'react';
import ReactSlider from 'react-slider';
import './DoubleSlider.scss'

function DoubleSlider({values,setValues, show }) {
  const handleChange = (newValues) => setValues(newValues);
  
  return (
    <div className='slider'>
      <h3>ЦЕНА</h3>
      <ReactSlider
        className="horizontal-slider"
        thumbClassName="example-thumb"
        trackClassName="example-track"
        defaultValue={[6800, 9500]}
        value={[values[0], values[1]]}
        min={6800}
        max={9500}
        ariaLabel={['Lower thumb', 'Upper thumb']}
        pearling
        minDistance={10}
        onChange={(value, index) => setValues(value)}
      />
      <div className='price_inputs' style={{ display: 'flex' }}>
        <div >
          <label htmlFor="minPrice">от</label>
          <input
            type="number"
            id="minPrice"
            value={values[0]}
            onChange={(e) => handleChange([+e.target.value, values[1]])}
          />
        </div>
        <div>
          <label htmlFor="maxPrice">до</label>
          <input
            type="number"
            id="maxPrice"
            value={values[1]}
            onChange={(e) => handleChange([values[0], +e.target.value])}
          />
          <label>Руб</label>
        </div>
      </div>
      <div className='price_btn'>
        <button onClick={show}>
          <span>ПОКАЗАТЬ</span>
        </button>
      </div>
    </div>
  );
}

export default DoubleSlider;