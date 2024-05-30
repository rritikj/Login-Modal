import React, { useCallback, useState } from 'react';
import './loginModal.css'; // Import your CSS file
import { FaUser, FaLock } from "react-icons/fa";
export const LoginModal = () => {

    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showLoginModal, setShowLoginModal] = useState(false);

    const handleToggleModal = useCallback(() => {
        setShowLoginModal(prevState => !prevState);
    }, [])
    const handleUserName = (event) => {
        setUserName(event.target.value);
    }
    const handlePassword = (event) => {
        setPassword(event.target.value);
    }

    return (
        <>
            {!showLoginModal && (
                <button className="loginButtonTrigger" onClick={handleToggleModal}>
                    Login
                </button>
            )}
            {showLoginModal && (
                    <div className='wrapper'>
                        <div>
                        <span className='close-button' onClick={handleToggleModal}>
                        &times;
                    </span>
                        </div>
                        <form action="">
                            <h1>Login</h1>
                            <div className='input-box'>
                                <input type='text' placeholder='Username' onChange={handleUserName} required />
                                <FaUser className='icon' />
                            </div>
                            <div className='input-box'>
                                <input type='password' placeholder='Password' onChange={handlePassword} required/>
                                <FaLock className='icon' />
                            </div>

                            <div className="remember-forgot">
                                <label><input type='checkbox' />Remember me</label>
                                <a href='#'>Forgot Password</a>
                            </div>
                            <button type="submit">Login</button>
                            <div className='register-link'>
                                <p>Don't have an account?<a href="#">Register</a></p>
                            </div>
                        </form>
                    </div>
            )
            }
        </>
    )
}