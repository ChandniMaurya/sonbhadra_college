import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-900 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          {/* Brand Info */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-3">
              <div className="bg-teal-500 p-2 rounded-xl text-slate-900">
                <GraduationCap size={28} />
              </div>
              <div>
                <span className="block font-bold text-xl text-white leading-tight">Govt. Polytechnic</span>
                <span className="block text-sm font-bold tracking-wider text-teal-400 leading-tight">SONBHADRA</span>
              </div>
            </Link>
            <p className="text-slate-400 leading-relaxed text-sm">
              Established in 2009. Affiliated to Board of Technical Education, Uttar Pradesh (BTEUP), Lucknow.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
              Quick Links
            </h3>
            <ul className="space-y-3">
              {['Home', 'About Us', 'Courses', 'Photo Gallery', 'Contact'].map((link) => (
                <li key={link}>
                  <Link to={link === 'Home' ? '/' : `/${link.toLowerCase().replace(' ', '-')}`} className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 group text-sm font-medium">
                    <ArrowRight size={14} className="opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all text-teal-400"/>
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Important Docs */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
              Important Links
            </h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 text-sm font-medium">
                   AICTE Approvals
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScUf7JeRO1fRoZRRCuIjWEbZJXrRQz1J8xh0VH1PEmQJwqocQ/viewform?usp=sf_link" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 text-sm font-medium">
                   Grievance Redressal
                </a>
              </li>
              <li>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5dwCUVYq0tecdDUFFVbvG7t9QokzE7sUzHUwXQ-LgJRItwA/viewform?usp=sf_link" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-teal-400 transition-colors flex items-center gap-2 text-sm font-medium">
                   Your Feedback
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold text-lg mb-6 flex items-center gap-2">
              <span className="w-8 h-1 bg-teal-500 rounded-full"></span>
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-4 text-slate-400 text-sm">
                <div className="mt-1 bg-slate-800 p-2 rounded-lg text-teal-400">
                  <MapPin size={16} />
                </div>
                <span>Government Polytechnic Sonbhadra, Uttar Pradesh</span>
              </li>
              <li className="flex items-start gap-4 text-slate-400 text-sm">
                <div className="mt-1 bg-slate-800 p-2 rounded-lg text-teal-400">
                  <Phone size={16} />
                </div>
                <div className="flex flex-col">
                  <a href="tel:+910000000000" className="hover:text-teal-400 transition-colors">+91 0000000000</a>
                </div>
              </li>
            </ul>
          </div>
          
        </div>
        
        {/* Copyright */}
        <div className="pt-8 border-t border-slate-800 flex flex-col justify-center items-center gap-2 text-center text-sm font-medium">
          <p className="text-slate-400">
            &copy; {new Date().getFullYear()} ALL RIGHTS RESERVED GOVT. POLYTECHNIC SONBHADRA
          </p>
          <p className="text-teal-500/80">
            (Maintained By Dr. Vivek Srivastava, Computer Science)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
