import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useRef, useState } from "react";
import AuthProviders from "./AuthProviders";
import { _userAuth } from "../../functions/_userAuth";

export default function LoginAuthForm({ setAuthState }) {
    const [passwordShow, setPasswordShow] = useState(false);
    const passwordRef = useRef(null);

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState("")

    const handlePasswordShow = () => {
        setPasswordShow(!passwordShow);
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        _userAuth(e, 'login', email, password, '', setError, undefined)
    }

    return (
        <div className="auth_form">
            <div className="form_info">
                <h2>Login to your account</h2>
                <p>Fill the inputs below to login to your account</p>
            </div>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div className="input">
                    <span>Email</span>
                    <div className="_input">
                        <input type="email" id="_email" placeholder="xyz@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                </div>
                <div className="input">
                    <span>Password</span>
                    <div className="_input">
                        <input
                            ref={passwordRef}
                            type={passwordShow ? 'text' : 'password'}
                            placeholder="Your password"
                            id="_password"
                            value={password} onChange={(e) => setPassword(e.target.value)}
                        />
                        <label onClick={() => handlePasswordShow()}>
                            <FontAwesomeIcon
                                icon={passwordShow ? faEye : faEyeSlash}
                            />
                        </label>
                    </div>
                </div>
                {error !== "" && <div className="error">{error}</div>}
                <div className="buttons">
                    <button id="_auth">Login</button>
                </div>
                <AuthProviders />
            </form>
            <div className="other">
                <p>Don't have an account? <span onClick={() => setAuthState('register')}>Register</span></p>
            </div>
        </div>
    );
}
