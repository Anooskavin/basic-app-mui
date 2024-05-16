import './App.css';
import {  RouterProvider  ,BrowserRouter as Router,Routes,Route  } from 'react-router-dom';
import Login from './pages/Login';
import useAuth from './hooks/useAuth';
import Home from './pages/Home';
import { useEffect, useState } from 'react';
import Load from './pages/Load';
import Launch from './pages/Launch';
import router from './components/Route'

function App() {
  const {isAuthenticated} = useAuth();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    });
  }, []);


  return (
    // <Router>
    //   <Routes>
    //     <Route path='/login' element={<Login />} />
    //     {loading ? (  <Route path="*" element={<Load />} />      ) : (<Route  path="/" element={isAuthenticated ?  <Home /> : <Login />} />)}
    //     {loading ? (  <Route path="*" element={<Load />} />      ) : (<Route  path="/launch" element={isAuthenticated ?  <Launch /> : <Login />} />)}

    //   </Routes>
    // </Router>
    <RouterProvider router={router} />
  );
}

export default App;
