import "./App.css";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";

function App() {
  return (
    <div className="container">
      <header>
        <Navbar />
      </header>

      <main>
        <Home />
        <About />
        <Portfolio />
        <Contact />
      </main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
