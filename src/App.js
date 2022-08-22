import { Footer, Navbar } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import GlobalStyle from "./globalStyles";
import Home from "./pages/HomePage/Home";
import ScrollToTop from "./components/ScrollToTop";
import { About } from "./pages/About/About";

function App() {
  return (
    <div className="App">
      <Router>
        <GlobalStyle />
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
