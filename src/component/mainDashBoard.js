import React from 'react'
import Header from './header';
import Dashboard from './dashboard';

export default function MainDashBoard() {
    return (
        <div className="flex flex-col">
            
            <Header  />
            <Dashboard />
        </div>
    );
}

