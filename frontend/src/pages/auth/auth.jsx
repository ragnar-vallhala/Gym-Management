import React, { useState } from 'react';
import './Auth.css'; // Ensure you have your CSS file imported

function Auth() {
    const [isSignUp, setIsSignUp] = useState(false);
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isSignUp) {
            // Handle signup logic here
            if (password !== confirmPassword) {
                console.log('Passwords do not match');
                return;
            }
            console.log('Sign Up - Username:', username);
            console.log('Sign Up - Email:', email);
            console.log('Sign Up - Password:', password);
        } else {
            // Handle login logic here
            console.log('Login - Username:', username);
            console.log('Login - Password:', password);
        }
    };

    return (
        <div className="auth-card">
            <h2>{isSignUp ? 'Sign Up' : 'Login'}</h2>
            <form onSubmit={handleSubmit}>
                
                    <div>
                        <label htmlFor="username">Username:</label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                    </div>

                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                {isSignUp && (
                    <div>
                        <label htmlFor="confirmPassword">Confirm Password:</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                        />
                    </div>
                )}
                <button type="submit">{isSignUp ? 'Sign Up' : 'Login'}</button>
            </form>
            <button onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? 'Already have an account? Login' : 'Need an account? Sign Up'}
            </button>
        </div>
    );
}

export default Auth;