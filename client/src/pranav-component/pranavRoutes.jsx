import About from "./aboutus/About";
import ContactUs from "./contactus/ContactUs";
import Display from "./sellerprofile/Display";
import Customerrequest  from "./customer_request/Customerrequest";

export default [
    { path: "/about", element: <About /> },
    {path :"/contact" , element:<ContactUs/>},
    {path : "/customerView/display", element: <Display />},
    {path :"/customerrequest" , element:<Customerrequest/>},
    
    
]
