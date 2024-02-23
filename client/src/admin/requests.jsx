import Navbar from './navbar';
import { useState, useEffect } from 'react';

export default function Requests() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('http://localhost:8080/api/requests')
      .then(response => response.json())
      .then(data => setUsers(data))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <div>
      <Navbar />
      <div className="relative overflow-x-auto m-5 container">
        <table className="w-full text-sm text-left ">
          <thead className="text-xs  uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Customer Name
              </th>
              <th scope="col" className="px-6 py-3">
                Seller Name
              </th>
              <th scope="col" className="px-6 py-3">
                Service Name
              </th>
              <th scope="col" className="px-6 py-3">
                Time
              </th>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user._id} className="bg-white border-b">
                <td className="px-6 py-4">{user.customerid ? user.customerid.name : 'N/A'}</td>
                <td className="px-6 py-4">{user.sellerid ? user.sellerid.name : 'N/A'}</td>
                <td className="px-6 py-4">{user.serviceid.tag}</td>
                <td className="px-6 py-4">{new Date(user.time).toLocaleString([], { year: 'numeric', month: 'numeric', day: 'numeric', hour: '2-digit', minute: '2-digit' })}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
