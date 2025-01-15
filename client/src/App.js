import './App.css';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
import {Login, Dashboard} from "./pages"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
