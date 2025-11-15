import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import LandingPages from "./pages/LandingPages";
import Account from "./pages/Account";
import Chat from "./pages/Chat";
import Dashboard from "./pages/Dashboard";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/account" element={<Account />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/gemini-ai" element={<GeminiArticle />} />
          <Route path="/blog/chatgpt-ai" element={<ChatGPTArticle />} />
          <Route path="/blog/claude-ai" element={<ClaudeArticle />} />
          <Route path="/blog/qwen-ai" element={<QwenArticle />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/intern" element={<Intern />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
