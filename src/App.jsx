  import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';

  import { useState } from 'react';
  import HomePage from './pages/HomePage';
  import LoginPage from './pages/LoginPage';
  import { AuthLayout } from './components/AuthSignUp/AuthLayout';
  import LungCancerLayout from './pages/LungCancerLayout';
  import { FileUpload } from './pages/FileUpload'; // Import FileUploadPage
  import TestResultPage from './pages/TestResultPage'; // Import TestResultPage from Builder.io
  import { MedicalResults } from './pages/MedicalResults'; // Import MedicalResults page

  export default function App() {
    const [file, setFile] = useState(null); // Track the file state

    // This function will be used to update the file state
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

          {/* Results Page */}
          {/* Conditionally navigate to the result pages */}
          <Route
            path="/results"
            element={file ? <TestResultPage /> : <Navigate to="/examine" />}
          />
          <Route
            path="/explanation"
            element={file ? <MedicalResults /> : <Navigate to="/examine" />}
          />
        </Routes>
      </Router>
    );
  }
