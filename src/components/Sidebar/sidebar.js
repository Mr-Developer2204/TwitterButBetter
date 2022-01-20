import React from 'react';

export default function Sidebar({icon,icontext,status}) {
  
  return( 
  <div className={`sidebaroption ${status && "sidebaroption--active"}`}>
    {icon}
    <h2>{icontext}</h2>     
  </div>
  );
}
