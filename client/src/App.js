import './styles/App.css';
import {Outlet, BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {Login, Dashboard, Register, Chat} from "./pages"
import ProtectedRoute from './layout/ProtectedRoute';
import TopNav from './layout/TopNav';
import Sidebar from './layout/Sidebar';
import ChatContent from './layout/ChatContent';

function App() {
  return (
    <Router>
      <Routes>
        <Route 
          path="/"
          element={<MainComponents/>}
        >
          <Route index element={<Dashboard/>} />
          <Route path="/chat" element={<Chat/>} />
        </Route>

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

const MainComponents = () => {
  return (
      <ProtectedRoute>
        <TopNav/>
        <div className='container'>
          <Sidebar/>
          <Outlet/>
        </div>
      </ProtectedRoute>
    
  )
}

export default App;
