import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Blog from "./pages/Blog";
import NotFound from "./pages/NotFound";
import LandingPages from "./pages/LandingPages";
import Dashboard from "./pages/Dashboard";
import ClaudeArticle from "./pages/ClaudeArticle";

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPages />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/claude-ai" element={<ClaudeArticle />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
