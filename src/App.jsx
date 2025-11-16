import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import GeminiArticle from "./pages/GeminiArticle";
import ChatGPTArticle from "./pages/ChatGPTArticle";
import ClaudeArticle from "./pages/ClaudeArticle";
import QwenArticle from "./pages/QwenArticle";
import LandingPages from "./pages/LandingPages";
import Internship from "./pages/Internship";
import Account from "./pages/Account";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";
import Register from "./pages/Register"; 
import Login from "./pages/Login"; 

// Untul membuat agar mau mengakses halaman tertentu harus login dulu
const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  
  if (!isLoggedIn) {
    // Redirect ke login jika belum login
    return <Navigate to="/login" replace />;
  }
  
  return children;
};

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/gemini-ai" element={<GeminiArticle />} />
          <Route path="/blog/chatgpt-ai" element={<ChatGPTArticle />} />
          <Route path="/blog/claude-ai" element={<ClaudeArticle />} />
          <Route path="/blog/qwen-ai" element={<QwenArticle />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />

          {/* Butuh Login Dashboard */}
          <Route 
            path="/dashboard" 
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          {/* Butuh Login Account */}
          <Route 
            path="/account" 
            element={
              <ProtectedRoute>
                <Account />
              </ProtectedRoute>
            } 
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
