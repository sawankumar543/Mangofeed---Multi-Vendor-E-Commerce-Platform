import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/NavBar"
import { AuthProvider } from "./context/AuthContext"
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navbar />
        <Routes>
           <Route path='/' element={<div style={{textAlign: 'center', marginTop:'2rem'}}><h1>Welcome to MangoFeed</h1></div>}></Route>
           <Route path='/login' element={<Login></Login>}></Route>
           <Route path='/register' element={<Register></Register>}></Route>
        </Routes>
      </Router>
      {/* baki routes yahan hongi */}
    </AuthProvider>
  )
}

export default App
