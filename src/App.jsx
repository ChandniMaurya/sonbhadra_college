import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Courses from './pages/Courses';
import Admissions from './pages/Admissions';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';
import Placement from './pages/Placement';
import Faculties from './pages/Faculties';

function App() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-50">
      <Navbar />
      <main className="flex-grow pt-24">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/placement" element={<Placement />} />
          <Route path="/faculties" element={<Faculties />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
