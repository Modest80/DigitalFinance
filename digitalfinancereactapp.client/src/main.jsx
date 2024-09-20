import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Reg from './Reg.jsx'
import Auth from './Auth.jsx'
import Cabinet from './Cabinet.jsx';
import Index from './Index.jsx';
import Rules from './Rules.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
        <Router>
            <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/auth" element={<Auth />} />
                <Route path="/reg" element={<Reg />} />
                <Route path="/rules" element={<Rules />} />
                <Route path="/cabinet" element={<Cabinet />} />
            </Routes>
        </Router>
  </StrictMode>,
)
