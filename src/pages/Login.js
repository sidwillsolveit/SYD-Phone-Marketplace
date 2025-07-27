
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [isRegister, setIsRegister] = useState(false);
  const [form, setForm] = useState({ username: '', password: '' });

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Call backend API here for login or register
    alert(isRegister ? 'Register clicked!' : 'Login clicked!');
    // onLogin && onLogin(form); // Use this to update app state after login
  };

  return (
    <div style={{
      paddingTop: '110px',
      minHeight: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      background: 'linear-gradient(135deg, #0a3d62, #1e5799)'
    }}>
      <form
        onSubmit={handleSubmit}
        style={{
          background: '#1e2a47',
          padding: '2.5rem 2rem',
          borderRadius: '15px',
          minWidth: 320,
          boxShadow: '0 4px 24px rgba(0,0,0,0.14)'
        }}
      >
        <h2 style={{ color: '#4bcffa', marginBottom: '1.5rem', textAlign: 'center' }}>
          {isRegister ? 'Register' : 'Login'}
        </h2>
        <input
          type="text"
          name="username"
          placeholder="Username"
          required
          value={form.username}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '0.7rem',
            marginBottom: '1.1rem',
            borderRadius: '8px',
            border: 'none',
            background: '#222c3d',
            color: '#fff'
          }}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          required
          value={form.password}
          onChange={handleChange}
          style={{
            width: '100%',
            padding: '0.7rem',
            marginBottom: '1.5rem',
            borderRadius: '8px',
            border: 'none',
            background: '#222c3d',
            color: '#fff'
          }}
        />
        <button
          type="submit"
          style={{
            width: '100%',
            padding: '0.8rem',
            background: '#0be881',
            color: '#1e272e',
            border: 'none',
            borderRadius: '10px',
            fontWeight: 'bold',
            fontSize: '1.1rem',
            marginBottom: '1.2rem',
            cursor: 'pointer'
          }}
        >
          {isRegister ? 'Register' : 'Login'}
        </button>
        <div style={{ textAlign: 'center' }}>
          <button
            type="button"
            onClick={() => setIsRegister(!isRegister)}
            style={{
              background: 'none',
              border: 'none',
              color: '#4bcffa',
              cursor: 'pointer',
              textDecoration: 'underline',
              fontSize: '1rem'
            }}
          >
            {isRegister ? 'Already have an account? Login' : 'New user? Register'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
