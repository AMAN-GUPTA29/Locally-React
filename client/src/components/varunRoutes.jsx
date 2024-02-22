import SellerHome from './SellerHome';
import Sellerhome from './UI/Sellerhome';
import Navbar from './UI/Navbar';
import Myrequests from './UI/Myrequests';
import Broadcast from './UI/Broadcast';
import Chat from "./UI/Chat";
import LoginForm from './UI/LoginForm';
import RegistrationForm from './UI/RegistrationForm';

export default [
    { path: "/seller/login", element: <LoginForm /> },
    { path: "/seller/register", element: <RegistrationForm /> },
    { path: "/sellerview", element: <Sellerhome /> },
    { path: "/seller/chat", element: <Chat /> },
    { path: "/seller/request", element: <Myrequests /> },
    { path: "/seller/broadcast", element: <Broadcast /> },
]