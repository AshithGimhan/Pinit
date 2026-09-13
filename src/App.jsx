import { HomePage } from './pages/HomePage';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import { MyReportsPage } from './pages/MyReportsPage';
import { AboutPage } from './pages/AboutPage';

import './App.css';
import { SubmitReportPage } from './pages/SubmitReportPage';

function App() {
  return (
    <>
      <Navbar />


      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/submit-report" element={<SubmitReportPage />} />
        <Route path="/my-reports" element={<MyReportsPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
