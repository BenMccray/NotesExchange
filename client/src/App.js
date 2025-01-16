import './styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login, Dashboard, Register} from "./pages"
import ProtectedRoute from './layout/ProtectedRoute';

function App() {
  return (
    <Router>
      <Routes>
      <Route 
          path="/" 
          element={
            <ProtectedRoute>
              <Dashboard/>
            </ProtectedRoute> 
          }/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
        
      </Routes>
    </Router>
  );
}

export default App;
