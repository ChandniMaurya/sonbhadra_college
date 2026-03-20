import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GraduationCap, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white shadow-md border-b border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="bg-teal-600 p-2.5 rounded-xl text-white group-hover:bg-teal-700 transition-colors">
              <GraduationCap size={32} />
            </div>
            <div>
              <span className="block font-bold text-2xl text-slate-900 leading-tight">Govt. Polytechnic</span>
              <span className="block text-sm font-bold text-teal-600 leading-tight tracking-wider">SONBHADRA</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-5">
            <Link to="/" className="font-semibold text-slate-700 hover:text-teal-600 transition-colors">Home</Link>
            <Link to="/about" className="font-semibold text-slate-700 hover:text-teal-600 transition-colors">About</Link>
            <Link to="/faculties" className="font-semibold text-slate-700 hover:text-teal-600 transition-colors">Faculties</Link>
            <Link to="/gallery" className="font-semibold text-slate-700 hover:text-teal-600 transition-colors">Gallery</Link>
            <Link to="/placement" className="font-semibold text-slate-700 hover:text-teal-600 transition-colors">Placement</Link>
            
            {/* Dropdown */}
            <div className="relative group" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
              <Link to="/courses" className="flex items-center gap-1 font-semibold text-slate-700 hover:text-teal-600 transition-colors py-2">
                Courses <ChevronDown size={14} />
              </Link>
              <div className={`absolute top-full left-0 w-48 bg-white border border-slate-100 shadow-xl rounded-xl overflow-hidden transition-all duration-200 transform origin-top-left ${dropdownOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}>
                <div className="py-2">
                  <Link to="/courses" className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-700 font-medium">Production</Link>
                  <Link to="/courses" className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-700 font-medium">Electrical</Link>
                  <Link to="/courses" className="block px-4 py-2 text-slate-700 hover:bg-teal-50 hover:text-teal-700 font-medium">Chemical</Link>
                </div>
              </div>
            </div>

            <Link to="/contact" className="font-semibold text-slate-700 hover:text-teal-600 transition-colors">Contact</Link>
            
            <Link
              to="/admissions"
              className="bg-teal-600 hover:bg-teal-700 text-white px-5 py-2.5 rounded-full font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5 border-2 border-transparent"
            >
              Apply Now
            </Link>
          </div>

          {/* Mobile Nav Toggle */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-600 hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-teal-500 rounded-lg p-2"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-24 left-0 w-full bg-white border-b border-slate-100 shadow-xl overflow-hidden animate-in slide-in-from-top-4 fade-in duration-200 h-screen overflow-y-auto pb-32">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link to="/" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700">Home</Link>
            <Link to="/about" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700">About Us</Link>
            <Link to="/faculties" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700">Faculties</Link>
            <Link to="/gallery" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700">Photo Gallery</Link>
            <Link to="/placement" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700">Placement</Link>
            
            <div className="px-4 py-2 font-bold text-slate-400 uppercase text-xs tracking-wider">Courses</div>
            <Link to="/courses" onClick={() => setIsOpen(false)} className="block px-8 py-2 rounded-xl font-medium text-slate-600 hover:bg-teal-50 hover:text-teal-700">• Production</Link>
            <Link to="/courses" onClick={() => setIsOpen(false)} className="block px-8 py-2 rounded-xl font-medium text-slate-600 hover:bg-teal-50 hover:text-teal-700">• Electrical</Link>
            <Link to="/courses" onClick={() => setIsOpen(false)} className="block px-8 py-2 rounded-xl font-medium text-slate-600 hover:bg-teal-50 hover:text-teal-700">• Chemical</Link>
            
            <div className="my-2 border-t border-slate-100"></div>
            <Link to="/contact" onClick={() => setIsOpen(false)} className="block px-4 py-3 rounded-xl font-medium text-slate-700 hover:bg-teal-50 hover:text-teal-700">Contact Us</Link>

            <div className="pt-4 pb-2 px-4">
              <Link
                to="/admissions"
                onClick={() => setIsOpen(false)}
                className="block w-full text-center bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-xl font-bold transition-colors shadow-md"
              >
                Apply Now
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
