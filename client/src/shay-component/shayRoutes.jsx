import CustomerView from "./CustomerView";
import Profile from "./customer-profile/Profile";
import BroadCast from "./broadcast/BroadCast";

// import Footerland from "./landingpage/footer";

export default [
  { path: "/customerview", element: <CustomerView /> },
  { path: "/profile", element: <Profile /> },
  { path: "/broadcast", element: <BroadCast /> },
];
