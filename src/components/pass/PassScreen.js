import React, { useState } from 'react'
import './login.css';

export const PassScreen = () => {

    const [pass, setPass] = useState('')

    const handlePass = async (e) => {
        e.preventDefault();
        const generatePass = await fetch('https://calendarj.herokuapp.com/api/password').then(res => res.json());
        console.log(generatePass.pass);
        setPass(generatePass.pass);
    }

    return (
        <div className="container login-container">
            <div className="row align-items-center">
                <div className="col-md-4 login-form-2">
                    <h3>{pass}</h3>
                </div>
                <div className="col-md-4">
                    <button className="btn btn-primary"
                        onClick={handlePass}
                    >Generar Password</button>
                </div>
            </div>

        </div>
    )
}
