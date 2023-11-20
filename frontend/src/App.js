import './App.css';
import { BrowserRouter, Route , Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Login/Signup';
import ProtectedRoute from './Pages/ProtectedRoute';
import PageLoading from './Pages/PageLoading';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
         <Routes>
            <Route path='/' element={<ProtectedRoute><Home /></ProtectedRoute>} />
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/Page-loading' element={<PageLoading />} />
         </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
