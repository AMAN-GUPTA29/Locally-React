import AdminLand from "./adminland";
import Adminbroadcast from './adminbroadcast';
import Customer from "./customer";
import Worker from "./worker";
import Requests from './requests';
import AdminRegister from './adminRegister';

import Nav from './nav';
import Photos from './photos';
import AdminLogin from './adminLogin';

export default [
    { path: "/adminLogin", element: <AdminLogin /> },
        { path: "/adminRegister", element: <AdminRegister /> },
        { path: "/adminland", element: <AdminLand /> },
        { path: "/adminbroadcast", element: <Adminbroadcast /> },
        { path: "/admincustomer", element: <Customer /> },
        { path: "/adminworker", element: <Worker /> },
        {path:"/nav",element:<Nav/>},
        {path:"/photos",element:<Photos/>},
        {path:"/requests",element:<Requests/>}
];