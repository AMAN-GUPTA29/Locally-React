import About from "./aboutus/About";
import ContactUs from "./contactus/ContactUs";
import Display from "./sellerprofile/Display";
import Customerrequest  from "./customer_request/Customerrequest";
import History from "./History/History";
import RegisterCustomer from "./cust_reg_detail";
import RegisterSeller from "./sell_reg_detail";

export default [
    { path: "/about", element: <About /> },
    {path :"/contact" , element:<ContactUs/>},
    {path : "/customerView/display", element: <Display />},
    {path :"/customerrequest" , element:<Customerrequest/>},
    {path :"/history" , element:<History/>},
    {path :"/consumerlogin/welcome" , element:<RegisterCustomer/>},
    {path :"seller/register/welcome" , element:<RegisterSeller/>}



    
    
]
