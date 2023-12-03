import React from 'react';
import './admincss/worker.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Navbar from './navbar';

const Worker = () => {
  const data = [
    { _id: '1', name: 'John Doe', email: 'john@example.com' },
    { _id: '2', name: 'Jane Doe', email: 'jane@example.com' },
    { _id: '3', name: 'Bob Smith', email: 'bob@example.com' },
  ];

  return (
    <div>
      <Navbar/>
      <h1 className="head text-center fw-bold my-4">Workers Of Locally</h1>
      <div className="container d-flex justify-content-center">
        <table className="table-bluprint table table-hover m-1 p-3 rounded-3">
          <thead className="table">
            <tr>
              <th className="col inf-head text-center">#</th>
              <th className="col inf-head text-center">Name</th>
              <th className="col inf-head text-center">Email</th>
              <th className="col inf-head text-center">Id</th>
              <th className="col inf-head text-center">Action</th>
            </tr>
          </thead>
          <tbody className="table-group-divider align-middle text-center">
            {data.map((user, i) => (
              <tr key={i}>
                <td className={`row${i} inf`}>{i + 1}</td>
                <td className={`row${i} inf`}>Mr.{user.name}</td>
                <td className={`row${i} inf`}>{user.email}</td>
                <td className={`row${i} inf`}>{user._id}</td>
                <td>
                  <button
                    type="button"
                    className={`btn btn-outline-success row${i} me-4 px-4 py-2`}
                    data-bs-toggle="modal"
                    data-bs-target={`#viewModalrow${i}`}
                  >
                    View
                  </button>
                  <button
                    type="button"
                    className={`btn btn-outline-danger row${i} px-4 py-2`}
                    data-bs-toggle="modal"
                    data-bs-target={`#deleteModalrow${i}`}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* View modal */}
      {data.map((user, i) => (
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
                {/* Add other details as needed */}
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Delete modal */}
      {data.map((user, i) => (
        <div className="modal fade inf" id={`deleteModalrow${i}`} key={i} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                      <a href={`/customer/delete/${user._id}`} className="btn btn-outline-danger px-5 py-2">
                        Yes
                      </a>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js" integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN" crossorigin="anonymous"></script>
        </div>
      ))}
    </div>
  );
};

export default Worker;
