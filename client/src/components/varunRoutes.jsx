import React from 'react';
import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import Navbar from './UI/Navbar';
import SellerHome from './UI/Sellerhome';
import Myrequests from './UI/Myrequests';
import Broadcast from './UI/Broadcast';
import Chat from './UI/Chat';
import LoginForm from './UI/LoginForm';
import RegistrationForm from './UI/RegistrationForm';
import { useLocation } from 'react-router-dom';


export default [
    { path: "/seller/login", element: <LoginForm /> },
    { path: "/seller/register", element: <RegistrationForm /> },
    { path: "/sellerview", element: <SellerHome /> },
    { path: "/seller/chat", element: <Chat /> },
    { path: "/seller/request", element: <Myrequests /> },
    { path: "/seller/broadcast", element: <Broadcast /> },
]




// import React from 'react';
// import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
// import Navbar from './components/UI/Navbar';
// import Sellerhome from './components/UI/Sellerhome';
// import Myrequests from './components/UI/Myrequests';
// import Broadcast from './components/UI/Broadcast';
// import Chat from './components/UI/Chat';
// import LoginForm from './components/UI/LoginForm';
// import RegistrationForm from './components/UI/RegistrationForm';
// import { useLocation } from 'react-router-dom';

// const Seller = ()=>{
//   const location = useLocation();
//   const pathsWithoutNavbar = ["/seller/login","/seller/register"];
//   const hideNavbar = pathsWithoutNavbar.includes(location.pathname);
//   return(
//     <React.Fragment>
//       {
//         !hideNavbar && <Navbar/>
//       }
//       <Outlet/>
//     </React.Fragment>
//   )
// }

// const App = () => {
//   return (
//     <Router>
//        <div className="">
        
//         <Routes>
//           <Route path='/seller' element={<Seller/>}>
//             <Route index element={<Sellerhome />} />
//             <Route path="request" element={<Myrequests />} />
//             <Route path="broadcast" element={<Broadcast />} />
//             <Route path="chat" element={<Chat />} />
//             <Route path="login" element={<LoginForm/>} />
//             <Route path="register" element={<RegistrationForm />} />
//           </Route>
//         </Routes>
//       </div>
//     </Router>
//   );
// };

// export default App;
