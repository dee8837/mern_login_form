  
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';
import Secret from './pages/Secret';
import {Routes,Route} from "react-router-dom"
import "react-toastify/dist/ReactToastify.css"

function App() {
  return (
    <>
    
   <Routes>
   <Route path='/register' element={<Register />} />
   <Route path='/login' element={<Login />} />
   <Route path='/' element={<Secret />} />
   
   </Routes>
   </>
  
    
  );
}


export default App;
