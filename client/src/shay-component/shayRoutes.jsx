import CustomerView from "./CustomerView"
import Profile from "./customer-profile/Profile"
import BroadCast from "./broadcast/BroadCast"

export default [
    { path: "/customerview", element: <CustomerView /> },
    { path: "/profile", element: <Profile /> },
    {path: "/broadcast", element: <BroadCast /> },
]