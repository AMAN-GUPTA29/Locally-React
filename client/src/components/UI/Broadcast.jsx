import React from 'react';
import Navbar from './Navbar';

const Broadcast = () => {
  return (
    <div>
        <Navbar/>
     
        <div className="container my-4">
            <div className="card">
                <div className="card-header">
                    BroadCast
                </div>
                <div className="card-body">
                    <blockquote className="blockquote mb-0">
                        <p>Message: You got 3.5star Rating</p>
                        <p>Message: You have been credted with 50 loyalty points</p>
                        <p>Message: You can improve your carpenting service</p>
                        <p>Message: You can earn upto 1.25 times of original amount</p>

                        
                    </blockquote>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Broadcast