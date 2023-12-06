import {AdminLand} from "./adminland";
import {Customer} from "./customer";
import {Worker} from "./worker";
import {RegistrationForm} from "./adminRegister";
import {LoginForm} from "./adminLogin";

export default [
    { path: "/adminLogin", element: <LoginForm /> },
    { path: "/adminRegister", element: <RegistrationForm /> },
    { path: "/adminland", element: <AdminLand /> },
    { path: "/admincustomer", element: <Customer /> },
    { path: "/adminworker", element: <Worker /> },
    { path: "/adminbroadcast", element: <Adminbroadcast /> },
]