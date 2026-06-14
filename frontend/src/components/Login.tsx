import type React from "react";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login: React.FC = () => {
    const {login} = useAuth();
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const [error, setError] = useState<string | null>(null);
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e: React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault()
        setError(null);
        try {
            const response = await axios.post('/auth/login', formData, {
                withCredentials: true
            })
            if(response.data.success){
                login(response.data.user)
                alert(response.data.message)
                navigate('/')
            }
        } catch(err: any) {
            setError(err.response?.data?.message || 'Invalid Credentials');
        }
    }
    return (
        <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="email" name="email" value={formData.email} onChange={handleChange}/>
                <input type="password" name="password" value={formData.password} id="" onChange={handleChange}/>
                <button type="submit" style={{ padding: '0.5rem', background: '#00adb5', color: '#fff', border: 'none', cursor: 'pointer' }}>Sign In</button>
            </form>
        </div>
    )
}

export default Login