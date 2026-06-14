import { createContext, useContext, useEffect, useState } from "react"
import type{ AuthContextType, UserProfile } from "../types/auth"
import axios from "axios";

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children })=> {
    const [user, setUser] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState<boolean>(true);

    // Page load hote hi check karein ki user logged in hai ya nhi
    useEffect(() => {
        const checkAuthStatus = async () => {
            try {
                // Backend se user profile mangwayein (cookie auto send hogi widthCredentials se)
                const response = await axios.get('/user/profile', {withCredentials: true});
                if(response.data.success) {
                    setUser(response.data.user)
                }
            } catch(error) {
                setUser(null); // Agar cookie nhi hai ya expire ho gayi hai
            } finally{
                setLoading(false)
            }
        };
        checkAuthStatus();
    }, []);
    const login = (userData: UserProfile) => setUser(userData);
    const logout =  async () => {
         try {
    // 1. Backend ke logout API ko hit karein taaki cookie clear ho sake
    // withCredentials true rakhna zaroori hai taaki cookie remove ho sake
    await axios.post('/user/logout', {}, { withCredentials: true });
  } catch (error) {
    console.error("Logout error:", error);
  } finally {
    // 2. Global state ko null karein (chahe API fail ho ya pass, frontend se user hatna chahiye)
    setUser(null);
    alert("Logged out successfully! 👋");
  }
    }
    return (
        <AuthContext.Provider value={{ user, loading, login, logout}}> 
            {!loading && children}
        </AuthContext.Provider> 
    )
} 
export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context) throw new Error('useAuth must be used within an AuthProvider');
    return context;
}