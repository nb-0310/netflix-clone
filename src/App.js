import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home"
import { AuthContextProvider } from "./Contexts/AuthContext";
import Login from './Pages/Login'
import Signup from './Pages/Signup'
import Account from './Pages/Account'
import ProtectedRoute from "./Components/ProtectedRoute";

function App() {
  return (
    <div className="App text-white relative w-full">
      <AuthContextProvider>
        <Navbar className='sticky top-0 left-0' />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/account' element={
            <ProtectedRoute>
              <Account />
            </ProtectedRoute>
          } />
        </Routes>
      </AuthContextProvider>
    </div>
  );
}

export default App;
