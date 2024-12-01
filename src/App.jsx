import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { AuthLayout } from './components/AuthSignUp/AuthLayout';
import LungCancerLayout from './pages/LungCancerLayout';
import { FileUpload } from './pages/FileUpload';
import TestResultPage from './pages/TestResultPage';
import { MedicalResults } from './pages/MedicalResults';

export default function App() {
  const [file, setFile] = useState(null); // Track the file state

  const handleFileUpload = (uploadedFile) => {
    setFile(uploadedFile);
  };

  return (
    <Router>
      <Routes>
        {/* Main Pages */}
        <Route path="/" element={<HomePage />} />
        <Route path="/examine" element={<FileUpload onFileUpload={handleFileUpload} />} />
        <Route path="/information" element={<LungCancerLayout />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<AuthLayout />} />

        {/* Results Pages */}
        <Route path="/results" element={file ? <TestResultPage /> : <Navigate to="/examine" />} />
        <Route path="/explanation" element={file ? <MedicalResults /> : <Navigate to="/examine" />} />
      </Routes>
    </Router>
  );
}
