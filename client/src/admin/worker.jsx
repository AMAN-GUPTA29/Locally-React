import React, { useEffect, useState } from 'react';
import './admincss/customer.css';
import Navbar from './navbar';

const Worker = () => {
  // const [data, setData] = useState([]);
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [modalType, setModalType] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);


  useEffect(() => {
    fetch('http://localhost:8080/api/sellerDetails')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
    console.log(users);
  }, []);

  const handleBlock = (userId) => {
    setUsers((preUsers) => {
      return preUsers.map((user) =>
        user._id === userId ? { ...user, blocked: !user.blocked } : user
      );
    });
  };

  const handleUnblock = (userId) => {
    setUsers((preUsers) => {
      return preUsers.map((user) =>
        user._id === userId ? { ...user, blocked: false } : user
      );
    });
  };

  const openModal = (user, type) => {
    setSelectedUser(user);
    setModalType(type);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedUser(null);
    setModalType(null);
    setIsModalOpen(false);
  };

  return (
    <div>
      <Navbar />
      <h1 className="head text-center font-bold my-4 text-2xl">Sellers Of Locally</h1>

      {users && (
        <div className="container mx-auto">
          <table className="table-auto w-full">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Email</th>
                <th className="px-4 py-2">Id</th>
                <th className="px-4 py-2">Action</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, i) => (
                <tr key={i}>
                  <td className="border px-4 py-2">Mr.{user.name}</td>
                  <td className="border px-4 py-2">{user.email}</td>
                  <td className="border px-4 py-2">{user._id}</td>
                  <td className="border px-4 py-2">
                    {user.blocked ? (
                      <button
                        className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                        onClick={() => openModal(user, 'unblock')}
                      >
                        Blocked
                      </button>
                    ) : (
                      <>
                        <button
                          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded mr-2"
                          onClick={() => openModal(user, 'view')}
                        >
                          View
                        </button>
                        <button
                          className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => openModal(user, 'block')}
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

      {/* Modal and Overlay */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-header">
              <h1 className="modal-title">{modalType === 'view' ? 'User Details' : modalType === 'unblock' ? 'Unblock User' : 'Block User'}</h1>
              <button type="button" className="btn-close" onClick={closeModal} aria-label="Close">X</button>
            </div>
            <div className="modal-body">
              {modalType === 'view' && (
                <>
                  <p><span className='viewmodal-names'>ID : </span> {selectedUser._id}</p>
                  <p><span className='viewmodal-names'>Name : </span> Mr.{selectedUser.name}</p>
                  <p><span className='viewmodal-names'>Email : </span> {selectedUser.email}</p>
                </>
              )}
              {modalType === 'unblock' && (
                <p>Are you sure you want to unblock this user {selectedUser.name}?</p>
              )}
              {modalType === 'block' && (
                <p>Are you sure you want to block this user {selectedUser.name}?</p>
              )}
            </div>
            {modalType !== 'view' && (
              <div className="modal-footer">
                <button
                  type="button"
                  className="bg-red-500 px-5 py-2"
                  onClick={closeModal}
                >
                  No
                </button>
                <button
                  type="button"
                  className="bg-green-500 px-5 py-2"
                  onClick={() => {
                    modalType === 'unblock' ? handleUnblock(selectedUser._id) : handleBlock(selectedUser._id);
                    closeModal();
                  }}
                >
                  Yes
                </button>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
};

export default Worker;
