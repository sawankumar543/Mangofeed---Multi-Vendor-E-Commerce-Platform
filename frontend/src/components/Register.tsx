import React, {useState} from "react";
import axios from "axios";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Register: React.FC = () => {
    const navigate = useNavigate()
    const {login} = useAuth();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: ''
    });
    const [error, setError] = useState<string | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError(null);
        try {
            // withCredentials: true lagana zaroori hai taaki backend cookie set kar sken
            const response = await axios.post('/auth/register', formData, {
                withCredentials: true
            })
            if(response.data.success) {
                // Success hone par context ki global state update karein
                login(response.data.user)
                navigate('/')
            }
        } catch(err: any) {
            setError(err.response?.data?.message || 'Something went wrong')
        }
    }
    return (
        <div style={{ maxWidth: '400px', margin: '2rem auto', padding: '1rem', border: '1px solid #ccc', borderRadius: '8px' }}>
            <h2>Create Account</h2>
            {error && <p  style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <input type="text" name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} required/>
                <input type="email" name="email" placeholder="Email Address" value={formData.email} onChange={handleChange} required/>
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} required/>
                <button type="submit">Register</button>
            </form>
        </div>
    )
}

export default Register