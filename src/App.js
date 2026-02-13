import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BhumiProvider } from "./context/BhumiContext";
import TabNav from "./components/TabNav";
import MainPage from "./pages/MainPage";
import GamePage from "./pages/GamePage";
import ReferencesPage from "./pages/ReferencesPage";
import AboutPage from "./pages/AboutPage";
import "./App.css";

export default function App() {
  return (
    <BhumiProvider>
      <BrowserRouter>
        <div className="app">
          <TabNav />
          <main className="app-main">
            <Routes>
              <Route path="/" element={<MainPage />} />
              <Route path="/game" element={<GamePage />} />
              <Route path="/references" element={<ReferencesPage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </main>
        </div>
      </BrowserRouter>
    </BhumiProvider>
  );
}
