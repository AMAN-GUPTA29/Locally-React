import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import RootLayout from "./pages/Rootlayout";
import HomePage from "./pages/homePage";
import shayRoutes from "./shay-component/shayRoutes";
import varunRoutes from "./components/varunRoutes";
import pranavRoutes from "./pranav-component/pranavRoutes";
import chaitanyaroutes from "./chaitanya-component/chaitanyaroutes";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Adminbroadcast from "./admin/adminbroadcast";
// import Navbar from "./admin/navbar";
import AdminLand from "./admin/adminland";
import Customer from "./admin/customer";
import Worker from "./admin/worker";
import ConsumerLogin from "./pages/consumerlogin";
import RegistrationForm from "./admin/adminRegister";
import LoginForm from "./admin/adminLogin";

// import { Link,Routes,Route } from 'react-router-dom';
// import { Services } from './Services';
// import { Layout } from './Layout';
// import { AddService } from './AddService';
// import { Footer } from './Footer';

// import ContactUs from "./pages/ContactUs/ContactUs";
// import WishlistPage from "./pages/Wishlist/Wishlist";
// import Instructor from "./pages/Instructor/Instructor";
// import PaymentPage from "./pages/PaymentPage/PaymentPage";
// import Homepage from "./pages/Homepage/homepage";
// import Spotlight from "./pages/Spotlight/Spotlight";
// import Faq from "./pages/Faq/Faq";

// import SigninSignupForm from "./pages/Signup/Signup";

// import Certificate from "./pages/Certificate/Certificate";

// import LoginForm from "./pages/login/Login";

// import ForgotPassword from "./pages/forgotpassword/ForgotPassword";
// import CourseLayout from "./pages/CoursePage/CourseLayout";

function App() {
  const [count, setCount] = useState(0);

  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/consumerlogin", element: <ConsumerLogin></ConsumerLogin> },
        ...shayRoutes,
        ...varunRoutes,
        ...pranavRoutes,
        ...chaitanyaroutes,
        { path: "/adminLogin", element: <LoginForm /> },
        { path: "/adminRegister", element: <RegistrationForm /> },
        { path: "/adminland", element: <AdminLand /> },
        { path: "/admincustomer", element: <Customer /> },
        { path: "/adminworker", element: <Worker /> },
        { path: "/adminbroadcast", element: <Adminbroadcast /> },
        // { path: "/ContactUs", element: <ContactUs /> },
        // { path: "/wishlist", element: <WishlistPage /> },
        // { path: "/instructor", element: <Instructor /> },
        // { path: "/checkout", element: <PaymentPage /> },
        // { path: "/spotlight", element: <Spotlight /> },
        // { path: "/faq", element: <Faq /> },
        // { path: "/Signup", element: <SigninSignupForm /> },
        // { path: "/certificate", element: <Certificate /> },
        // { path: "/login", element: <LoginForm /> },
        // { path: "/forgot", element: <ForgotPassword /> },
        // {
        //   path: "/course/:courseId",
        //   element: <CourseLayout />,
        //   children: [{ path: "/:section", element: <h1>hello</h1> }],
        // },
      ],
    },
  ]);

  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
