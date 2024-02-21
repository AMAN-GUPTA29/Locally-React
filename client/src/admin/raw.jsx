// import React, { useState } from 'react';
// import './admincss/customer.css';

// function Customer() {
//   const [isOpen, setIsOpen] = useState(false);

//   const openModal = () => {
//     setIsOpen(true);
//   };

//   const closeModal = () => {
//     setIsOpen(false);
//   };

//   return (
//     <div>
//       <button onClick={openModal}>Open Modal</button>
//       {isOpen && (
//         <div className="modal-overlay">
//           <div className="modal">
//             <div className="modal-header">
//               <h2>Modal Header</h2>
//               <button className="close-button" onClick={closeModal}>
//                 &times;
//               </button>
//             </div>
//             <div className="modal-body">
//               <p>Modal Content Here</p>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Customer;


// <style>
// .modal-overlay {
//   position: fixed;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-color: rgba(0, 0, 0, 0.5);
//   display: flex;
//   justify-content: center;
//   align-items: center;
// }

// .modal {
//   background-color: white;
//   padding: 20px;
//   border-radius: 5px;
//   box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
// }

// .modal-header {
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin-bottom: 10px;
// }

// .close-button {
//   background: none;
//   border: none;
//   font-size: 20px;
//   cursor: pointer;
// }

// .modal-body {
//   line-height: 1.5;
// }
// </style>