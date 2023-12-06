import About from "./aboutus/About";
import ContactUs from "./contactus/ContactUs";
import Display from "./sellerprofile/Display";

export default [
    { path: "/about", element: <About /> },
    {path :"/contact" , element:<ContactUs/>},
    {path : "/customerView/display", element: <Display />},
    
]
