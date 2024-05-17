import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../store/session';

const LoginForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(login(email, password));
    };


    return (
        <form onSubmit={handleSubmit}>
            <label>
                Email
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />
            </label>
            <label>
                Password
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />
            </label>
            <button type="submit">Log In</button>
        </form>
    )
}


export default LoginForm;
