import React from 'react';
import './Loader.css'
function Loader(props) {
  return (
    <div className="lds-ripple">
      <div></div>
      <div></div>
    </div>
  );
}

export default Loader;