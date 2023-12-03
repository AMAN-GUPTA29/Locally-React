import React from 'react'
import '../CSS/sellerhome.css'
import Transactions from './Transactions';
const sellerhome = () => {
  return (
    <div>   
    <div className="container position-relative">
        <div className="buttons my-3 d-flex justify-content-evenly">
            <a className="btn btn-dark px-4" href="#" role="button">New</a>
            <a className="btn btn-dark px-4" href="#" role="button">Total</a>
            <a className="btn btn-dark px-4" href="#" role="button">Stars</a>
            <a className="btn btn-dark px-4" href="/seller/reviews" role="button">Reviews</a>            
        </div>
        <div className="trade border border-dark rounded">
            <h2 className="mx-5 my-3 text">Trade</h2>   <hr className="border border-secondary opacity-100"/>
            <div className="content text-center m-3">
                <div className="row justify-content-center m-1">
                    <div className="col-6 bg-dark-subtle p-3"> Net income ---- </div>
                    <div className="col-3 bg-dark opacity-75 text-white p-3">&#8377;12000</div>
                  </div>
                  <div className="row justify-content-center m-1">
                    <div className="col-6 bg-dark-subtle p-3"> Daily income ---- </div>
                    <div className="col-3 bg-dark opacity-75 text-white p-3">&#8377;400</div>
                  </div>
                  <hr className="border border-secondary opacity-100"/>
                  <h3 className="text-primary">Graph</h3>
              </div>
        </div>
<Transactions/>

    </div>
    </div>
  )
}

export default sellerhome;