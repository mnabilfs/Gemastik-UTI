import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import GeminiArticle from "./pages/GeminiArticle";
import ChatGPTArticle from "./pages/ChatGPTArticle";
import ClaudeArticle from "./pages/ClaudeArticle";
import QwenArticle from "./pages/QwenArticle";
import LandingPages from "./pages/LandingPages";

import Account from "./pages/Account";
import Register from "./pages/Register";
import Login from "./pages/Login";
import TentangKami from "./pages/TentangKami";
import Rekomendasi from "./pages/Rekomendasi";
import Kontak from "./pages/Kontak";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/dashboard/Home";
import EksplorasiAI from "./pages/dashboard/EksplorasiAI";
import Internship from "./pages/dashboard/Internship";
import LearningHub from "./pages/dashboard/LearningHub";
import Aktivitas from "./pages/dashboard/Aktivitas";
import Setting from "./pages/Setting";

const ProtectedRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

  if (!isLoggedIn) {
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

          <Route element={<MainLayout />}>
            <Route path="/home" element={<Home />} />
            <Route path="/eksplorasi-ai" element={<EksplorasiAI />} />
            <Route path="/internship" element={<Internship />} />
            <Route path="/learning-hub" element={<LearningHub />} />
            <Route path="/aktifitas" element={<Aktivitas />} />
          </Route>

          <Route path="/settings" element={<Setting />} />

          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/gemini-ai" element={<GeminiArticle />} />
          <Route path="/blog/chatgpt-ai" element={<ChatGPTArticle />} />
          <Route path="/blog/claude-ai" element={<ClaudeArticle />} />
          <Route path="/blog/qwen-ai" element={<QwenArticle />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/tentang-kami" element={<TentangKami />} />
          <Route path="/rekomendasi" element={<Rekomendasi />} />
          <Route path="/kontak" element={<Kontak />} />

          {/* Butuh Login Dashboard */}
          <Route
            path="/home"
            element={
              <ProtectedRoute>
                <Route element={<MainLayout />}>
                  <Route path="/home" element={<Home />} />
                  <Route path="/eksplorasi-ai" element={<EksplorasiAI />} />
                  <Route path="/internship" element={<Internship />} />
                  <Route path="/learning-hub" element={<LearningHub />} />
                  <Route path="/aktifitas" element={<Aktivitas />} />
                </Route>
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
