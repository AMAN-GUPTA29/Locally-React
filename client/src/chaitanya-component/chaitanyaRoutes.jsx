import { useState } from 'react';
import { Navbar } from './Navbar';
import { Services } from './Services';
import { Layout } from './Layout';
import { AddService } from './AddService';
import { Footer } from './Footer';
import SellerProfile from './SellerProfile';

export default [
    { path: "/seller/services", element: <Services /> },
    { path: "/addservices", element: <AddService /> },
    { path: "/seller/profile", element: <SellerProfile /> }
]
