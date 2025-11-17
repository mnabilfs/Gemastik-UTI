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
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/dashboard/Home";
import EksplorasiAI from "./pages/dashboard/EksplorasiAI";
import Internship from "./pages/dashboard/Internship";
import LearningHub from "./pages/dashboard/LearningHub";
import Aktivitas from "./pages/dashboard/Aktivitas";
import Setting from "./pages/Setting";

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
            <Route path="/dashboard" element={<Dashboard />} />
          </Route>

          <Route path="/account" element={<Account />} />
          <Route path="/settings" element={<Setting />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/gemini-ai" element={<GeminiArticle />} />
          <Route path="/blog/chatgpt-ai" element={<ChatGPTArticle />} />
          <Route path="/blog/claude-ai" element={<ClaudeArticle />} />
          <Route path="/blog/qwen-ai" element={<QwenArticle />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
