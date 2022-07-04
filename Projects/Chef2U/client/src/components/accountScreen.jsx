import React from 'react'

import '../styles/accountScreen.css';

const AccountScreen = () => {
    return (
        <div className='account-screen'>
            <div className="account-screen-header" />
            <div className="account-screen-body">
                <div className="avatar">
                    <div className="avatar-menu">
                        <div className="avatar-preview-info">
                            <p>dchampen</p>
                        </div>
                        <div className="avatar-dropdown-menu">
                            <a href="#">Account</a>
                            <a href="#">Orders</a>
                            <a href="#">Logout</a>
                        </div>
                    </div>
                    <div className="avatar-icon">
                        <img src="\images\user.png" alt="avatar" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AccountScreen