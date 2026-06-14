import type React from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
    const {user, logout} = useAuth();
    const navigate = useNavigate()
    const handleLogoutClick = async () => {
    await logout(); // 2. Logout function trigger karein
    navigate('/login'); // 3. Logout hote hi login page par bhej dein
  };
    return (
        <nav style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem', background: '#333', color: '#fff'}}>
            <h2>MangoFeed</h2>
            <div>
                {user? (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                             <div style={{
                                width: '35px', 
                                height: '35px', 
                                borderRadius: '50%', 
                                background: '#00adb5', 
                                display: 'flex', 
                                alignItems: 'center', 
                                justifyContent: 'center',
                                fontWeight: 'bold'
                                }}>
                                {user.name[0].toUpperCase()} {/*Name ka pehla akshar */}
                        </div>
                        <span>Hi, {user.name}</span>
                        </div>
                             <button 
                            onClick={handleLogoutClick}
                            style={{
                                background: '#ff4d4d',
                                color: '#fff',
                                border: 'none',
                                padding: '5px 12px',
                                borderRadius: '4px',
                                cursor: 'pointer',
                                fontWeight: 'bold'
                            }}
                            >
                            Logout
                            </button>
                    </div>
                ): (
                    // AGar user loogged in nhi hai, toh buttons dikhnge
                    <div>
                        <a href="/login"  style={{ color: '#fff', marginRight: '10px' }}>Login</a>
                        <a href="/register" style={{ color: '#fff' }}>Register</a>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar