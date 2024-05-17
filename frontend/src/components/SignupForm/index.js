import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUp } from '../../store/session';

const SignupForm = () => {
    //Remember dude this is how we set up State(the current status of application)
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = async (e) => {
        e.preventDefault();
        dispatch(signUp(username, email, password))
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Username
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    required
                />
            </label>
            <label>
                Email
                <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
            </label>
            <button type="submit">Sign Up</button>
        </form>
    );
};

export default SignupForm;
