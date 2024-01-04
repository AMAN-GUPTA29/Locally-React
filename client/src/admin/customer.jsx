// customer.jsx
import React, { useEffect, useState } from 'react';
import './admincss/customer.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './navbar';

const Customer = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('../../src/admin/customerData.json');
        const fetchedData = await res.json();
        setData(fetchedData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleBlock = (userId) => {
    setData((prevData) => {
      return prevData.map((user) =>
        user._id === userId ? { ...user, blocked: !user.blocked } : user
      );
    });
  };

  const handleUnblock = (userId) => {
    setData((prevData) => {
      return prevData.map((user) =>
        user._id === userId ? { ...user, blocked: false } : user
      );
    });
  };

  return (
    <div>
      <Navbar />
      <h1 className="head text-center fw-bold my-4">Customers Of Locally</h1>

      {data && (
        <div className="container d-flex justify-content-center">
          {/* Use Bootstrap classes directly, remove unnecessary classes */}
          <table className="table table-hover m-1 p-3 rounded-3">
            <thead className="table">
              <tr>
                <th className="inf-head text-center">#</th>
                <th className="inf-head text-center">Name</th>
                <th className="inf-head text-center">Email</th>
                <th className="inf-head text-center">Id</th>
                <th className="inf-head text-center">Action</th>
              </tr>
            </thead>
            <tbody className="table-group-divider align-middle text-center">
              {data.map((user, i) => (
                <tr key={i}>
                  <td className="inf">{i + 1}</td>
                  <td className="inf">Mr.{user.name}</td>
                  <td className="inf">{user.email}</td>
                  <td className="inf">{user._id}</td>
                  <td className='row d-flex justify-content-center'>
                    {user.blocked ? (
                      <button
                        className="btn btn-danger col-5"
                        data-bs-toggle="modal"
                        data-bs-target={`#unblockModalrow${i}`}
                      >
                        Blocked
                      </button>
                    ) : (
                      <>
                        <button
                          type="button"
                          className="btn btn-outline-success me-4 px-4 py-2 col-4"
                          data-bs-toggle="modal"
                          data-bs-target={`#viewModalrow${i}`}
                        >
                          View
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger px-4 py-2 col-4"
                          data-bs-toggle="modal"
                          data-bs-target={`#deleteModalrow${i}`}
                        >
                          Block
                        </button>
                      </>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

        {/* View modal */}
        { data.length !== 0 && (data.map((user, i) => (
        <div className="modal fade inf" id={`viewModalrow${i}`} key={i} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-lg modal-dialog-centered">
            <div className="modal-content">
              <div className="modal-header">
                <div className="modal-title fs-5" id="exampleModalLabel">
                  <h1>User Details</h1>
                </div>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                <p><span className='viewmodal-names'>ID : </span> {user._id}</p>
                <p><span className='viewmodal-names'>Name : </span> Mr.{user.name}</p>
                <p><span className='viewmodal-names'>Email : </span> {user.email}</p>
              </div>
            </div>
          </div>
        </div>
      )))}

      {/* Unblock modal */}
      {data.length !== 0 &&
        data.map((user, i) => (
          <div
            className="modal fade inf"
            id={`unblockModalrow${i}`}
            key={i}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title fs-5" id="exampleModalLabel">
                    <h1>Unblock User</h1>
                  </div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body fs-3">
                  {user && (
                    <div>
                      <p>Are you sure you want to unblock this user {user.name}?</p>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-outline-success px-5 py-2" data-bs-dismiss="modal">
                          No
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger px-5 py-2"
                          onClick={() => handleUnblock(user._id)}
                          data-bs-dismiss="modal"
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

      {/* Delete modal */}
      {data.length !== 0 &&
        data.map((user, i) => (
          <div
            className="modal fade inf"
            id={`deleteModalrow${i}`}
            key={i}
            tabIndex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div className="modal-dialog modal-dialog-centered">
              <div className="modal-content">
                <div className="modal-header">
                  <div className="modal-title fs-5" id="exampleModalLabel">
                    <h1>Block User</h1>
                  </div>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body fs-3">
                  {user && (
                    <div>
                      <p>Are you sure you want to block this user {user.name}?</p>
                      <div className="modal-footer">
                        <button type="button" className="btn btn-outline-success px-5 py-2" data-bs-dismiss="modal">
                          No
                        </button>
                        <button
                          type="button"
                          className="btn btn-outline-danger px-5 py-2"
                          onClick={() => handleBlock(user._id)}
                          data-bs-dismiss="modal"
                        >
                          Yes
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};


export default Customer;