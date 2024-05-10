import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import QuotesPage from './components/Quotes/QuotesPage';
import Navbar from './components/Navbar';


import Home from './components/Home/Home'
import './App.css'

function App() {
  return (
   <>
   <Navbar />
     <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/quotes" element={<QuotesPage />} />
      </Routes>
    </Router>
   </>
  )
}

export default App
