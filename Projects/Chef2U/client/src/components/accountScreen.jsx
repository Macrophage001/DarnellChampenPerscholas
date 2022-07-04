import React from 'react'
import { useLocation } from 'react-router-dom';
import Avatar from './avatar';

import '../styles/accountScreen.css';


const AccountScreen = ({ navLinks }) => {
    const { user } = useLocation().state;
    return (
        <div className='account-screen'>
            <div className="account-screen-header" />
            <div className="account-screen-body">
                <Avatar user={user} navLinks={navLinks} />
            </div>
        </div>
    )
}

export default AccountScreen