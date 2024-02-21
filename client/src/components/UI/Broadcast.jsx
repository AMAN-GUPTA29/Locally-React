import React from 'react';
import Navbar from './Navbar';

const Broadcast = () => {
  return (
    <div>
      <Navbar/>
      <div className="container my-4">
        <div className="flex flex-col bg-blue-400 shadow-md p-4 rounded-md">
          <div className="font-bold text-lg mb-2 w-fit m-auto">BroadCast</div>
          <div className="blockquote mb-0 w-fit m-auto">
            <p>Message: data[i].message</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Broadcast;



