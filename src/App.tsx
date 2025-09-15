import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Career from './pages/Career';
import Contact from './pages/Contact';
import WebDevelopment from './pages/services/WebDevelopment';
import MobileApp from './pages/services/MobileApp';
// removed DigitalMarketing route for now
import ECommerce from './pages/services/ECommerce';
// removed CloudServices route for now
import ITConsulting from './pages/services/ITConsulting';
import SoftwareDevelopment from './pages/services/SoftwareDevelopment';
import RPAAutomation from './pages/services/RPAAutomation';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
          <Header />
          <main className="pt-16">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/services/web-development" element={<WebDevelopment />} />
              <Route path="/services/mobile-app" element={<MobileApp />} />
              <Route path="/services/software-development" element={<SoftwareDevelopment />} />
              <Route path="/services/ecommerce" element={<ECommerce />} />
              <Route path="/services/rpa-automation" element={<RPAAutomation />} />
              <Route path="/services/it-consulting" element={<ITConsulting />} />
              <Route path="/products" element={<Products />} />
              <Route path="/career" element={<Career />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;