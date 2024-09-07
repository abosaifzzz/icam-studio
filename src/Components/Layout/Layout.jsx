import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

export default function Layout() {
    return (
        <div className="flex flex-col min-h-screen">
            <Navbar />
            {/* This div will take up all the remaining space between Navbar and Footer */}
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
}
