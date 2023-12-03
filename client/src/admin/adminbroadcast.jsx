import React from 'react';
import './admincss/adminbroadcast.css';
import Navbar from './navbar';

function Adminbroadcast() {
  return (
    <div>
      <Navbar/>
      <div className="container my-2">
        <h1 className="broadcast mb-2">New BroadCast</h1>
        <form action="/sendmsg" method="post" className="shadow-lg p-4 rounded">
          <div className="form-group mb-1">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              placeholder="Enter the message"
              name="message"
              rows="4"
              cols="50"
              required
            ></textarea>
          </div>
          <div className="form-group mb-3">
            {/* <label htmlFor="recipient" className="form-label">
              Recipient
            </label> */}
            <select className="form-select" id="recipient" name="recipient" required>
              {/* <option value="">Select Recipient</option> */}
              <option value="all">All</option>
              <option value="customers">Customers</option>
              <option value="workers">Workers</option>
            </select>
          </div>
          <button type="submit" className="btn btn-primary btn-block py-2 my-2">
            Submit
          </button>
        </form>
      </div>
      <div className="body">
        {/* <h1 className="broadcast mb-2">Past BroadCast</h1> */}
        <div className="button-container">
          <button className="button">All</button>
          <button className="button">Customers</button>
          <button className="button">Workers</button>
        </div>
      </div>
    </div>
  );
}

export default Adminbroadcast;
