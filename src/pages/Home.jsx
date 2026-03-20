import { useState, useEffect } from 'react';
import { ArrowRight, FileText, AlertCircle, MessageSquare, ChevronRight, ChevronLeft, Award, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  const prevSlide = () => setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Hero Slider */}
      <section className="relative h-[500px] md:h-[600px] bg-slate-900 overflow-hidden">
        {slides.map((slide, index) => (
          <div 
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${currentSlide === index ? 'opacity-100' : 'opacity-0'}`}
          >
            <div className="absolute inset-0 bg-black/40 z-10" />
            <img src={slide} alt={`Campus Slide ${index + 1}`} className="w-full h-full object-cover" />
          </div>
        ))}
        
        <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center px-4 max-w-5xl mx-auto">
          <span className="bg-teal-600 text-white px-4 py-1 rounded-full text-sm font-bold tracking-widest uppercase mb-6 animate-fade-in">Welcome To</span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 drop-shadow-xl tracking-tight">
            Government Polytechnic <span className="text-teal-400">Sonbhadra</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-200 font-light mb-10 max-w-3xl drop-shadow-md">
            Approved by AICTE and affiliated to BTEUP, Lucknow. Fostering excellence in technical education since 2009.
          </p>
          <div className="flex gap-4">
            <Link to="/courses" className="bg-teal-600 hover:bg-teal-500 text-white px-8 py-3.5 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-teal-500/50">
              Explore Courses
            </Link>
            <Link to="/about" className="bg-white/20 hover:bg-white/30 backdrop-blur-md text-white border border-white/40 px-8 py-3.5 rounded-full font-bold text-lg transition-all">
              About Us
            </Link>
          </div>
        </div>

        {/* Slider Controls */}
        <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all">
          <ChevronLeft size={32} />
        </button>
        <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 z-30 p-2 bg-black/30 hover:bg-black/50 text-white rounded-full backdrop-blur-sm transition-all">
          <ChevronRight size={32} />
        </button>
        
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex gap-2">
          {slides.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${currentSlide === index ? 'bg-teal-400 w-8' : 'bg-white/50 hover:bg-white'}`}
            />
          ))}
        </div>
      </section>

      {/* Main Content Area */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Left Column: Quick Links & Important Docs */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
              <div className="bg-slate-900 p-4">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <BookOpen size={20} className="text-teal-400" />
                  Important Links
                </h3>
              </div>
              <div className="p-2">
                <a href="#" className="flex items-start gap-3 p-4 hover:bg-slate-50 rounded-xl transition-colors group">
                  <FileText className="text-blue-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="block font-bold text-slate-800 group-hover:text-blue-600 transition-colors">AICTE Approvals</span>
                    <span className="text-sm text-slate-500">(Letter of Approvals & Extension)</span>
                  </div>
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLScUf7JeRO1fRoZRRCuIjWEbZJXrRQz1J8xh0VH1PEmQJwqocQ/viewform?usp=sf_link" target="_blank" rel="noreferrer" className="flex items-start gap-3 p-4 hover:bg-slate-50 rounded-xl transition-colors group">
                  <AlertCircle className="text-rose-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="block font-bold text-slate-800 group-hover:text-rose-600 transition-colors">Grievance Redressal</span>
                    <span className="text-sm text-slate-500">Submit your grievances here</span>
                  </div>
                </a>
                <a href="https://docs.google.com/forms/d/e/1FAIpQLSd5dwCUVYq0tecdDUFFVbvG7t9QokzE7sUzHUwXQ-LgJRItwA/viewform?usp=sf_link" target="_blank" rel="noreferrer" className="flex items-start gap-3 p-4 hover:bg-slate-50 rounded-xl transition-colors group">
                  <MessageSquare className="text-teal-600 mt-1 flex-shrink-0" size={20} />
                  <div>
                    <span className="block font-bold text-slate-800 group-hover:text-teal-600 transition-colors">Your Feedback</span>
                    <span className="text-sm text-slate-500">Share your experience with us</span>
                  </div>
                </a>
              </div>
            </div>

            {/* News and Events */}
            <div className="bg-amber-50 rounded-2xl shadow-sm border border-amber-200 overflow-hidden">
              <div className="bg-amber-500 p-4 border-b border-amber-600">
                <h3 className="text-white font-bold text-lg flex items-center gap-2">
                  <Award size={20} />
                  News & Events
                </h3>
              </div>
              <div className="h-64 overflow-hidden relative p-4 group">
                <div className="animate-[marquee_10s_linear_infinite] group-hover:[animation-play-state:paused] flex flex-col gap-4">
                  <a href="https://jeecup.admissions.nic.in/" target="_blank" rel="noreferrer" className="block bg-white p-4 rounded-xl shadow-sm border border-amber-100 hover:border-amber-400 transition-colors hover:shadow-md">
                    <span className="text-xs font-bold text-amber-600 mb-1 block">New</span>
                    <p className="text-sm text-slate-800 font-medium">JEECUP Counselling related queries & important documents for verification 2025. Click here...</p>
                  </a>
                  <a href="#" className="block bg-white p-4 rounded-xl shadow-sm border border-amber-100 hover:border-amber-400 transition-colors hover:shadow-md">
                    <p className="text-sm text-slate-800 font-medium">JEECUP Counselling related List of documents required for Admission 2025. Click here...</p>
                  </a>
                  <a href="#" className="block bg-white p-4 rounded-xl shadow-sm border border-amber-100 hover:border-amber-400 transition-colors hover:shadow-md">
                    <p className="text-sm text-slate-800 font-medium">JEECUP Counselling related Fee Structure for Admission 2025. Click here to view...</p>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: About & Officials */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-3xl font-extrabold text-slate-900 mb-6 border-b border-slate-100 pb-4">Government Polytechnic Sonbhadra</h2>
              <p className="text-slate-700 text-lg leading-relaxed mb-6 text-justify">
                Government Polytechnic Sonbhadra, established in 2009, is a renowned polytechnic institute in Uttar Pradesh. It is affiliated with the Board of Technical Education, Uttar Pradesh (BTEUP), Lucknow, and offers undergraduate diplomas in Mechanical Production Engineering, Electrical Engineering and Chemical Engineering.
              </p>
              <p className="text-slate-700 text-lg leading-relaxed text-justify mb-8">
                The institution is recognized as one of the best government polytechnic institutes in Uttar Pradesh. In addition to its academic programs, Government Polytechnic Sonbhadra emphasizes co-curricular activities, including sports, cultural events, and social service, fostering a well-rounded educational experience for its students.
              </p>
              
              <div className="pt-6 border-t border-slate-100">
                <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">Our Administration</h3>
                
                <div className="grid md:grid-cols-2 gap-8 mb-10">
                  <div className="flex flex-col items-center text-center bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <img src="https://ui-avatars.com/api/?name=Narendra+Bhooshan&background=0D8ABC&color=fff&size=150" alt="Shri Narendra Bhooshan" className="w-32 h-32 rounded-full shadow-lg border-4 border-white mb-4" />
                    <h4 className="text-lg font-bold text-slate-900">Shri Narendra Bhooshan (IAS)</h4>
                    <p className="text-sm text-teal-600 font-medium mb-2">Add. Chief Secretary, Technical Education</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Uttar Pradesh</p>
                  </div>
                  <div className="flex flex-col items-center text-center bg-slate-50 p-6 rounded-2xl border border-slate-200">
                    <img src="https://ui-avatars.com/api/?name=Aziz+Ahmad&background=E17055&color=fff&size=150" alt="Shri Aziz Ahmad" className="w-32 h-32 rounded-full shadow-lg border-4 border-white mb-4" />
                    <h4 className="text-lg font-bold text-slate-900">Shri Aziz Ahmad</h4>
                    <p className="text-sm text-teal-600 font-medium mb-2">Director, Directorate of Technical Education</p>
                    <p className="text-xs text-slate-500 uppercase tracking-widest">Uttar Pradesh</p>
                  </div>
                </div>

                {/* Principal Section */}
                <div className="bg-teal-50 rounded-2xl p-8 border border-teal-100 flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="flex-shrink-0 flex flex-col items-center text-center">
                    <img src="https://ui-avatars.com/api/?name=Pramod+Kumar&background=00b894&color=fff&size=150" alt="Pramod Kumar" className="w-36 h-36 rounded-2xl shadow-lg border-4 border-white mb-4 object-cover" />
                    <h4 className="text-lg font-bold text-slate-900">Pramod Kumar</h4>
                    <div className="bg-teal-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mt-1">Principal</div>
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-teal-800 mb-4 flex items-center gap-2">
                      <Users size={24} /> Let's Hear from Principal
                    </h4>
                    <div className="relative">
                      <span className="text-6xl text-teal-200 absolute -top-4 -left-4 font-serif">"</span>
                      <p className="text-slate-700 leading-relaxed italic relative z-10 text-justify mb-4">
                        Education plays a key role in the overall development of the society. The role of education is definitely not limited to giving and grasping knowledge and theory. The true goal of education transcends much beyond just awarding degree and certificate to the students. The ultimate goal of education is the discovery of the meaning of life and the fulfillment of life and all mankind as well as for oneself. 
                      </p>
                      <p className="text-slate-700 leading-relaxed italic relative z-10 text-justify">
                        The quest of education is knowledge, humanity, culture, wisdom and sharpness but it should be noted that knowledge is not given but earned and character is not granted but cultivated. GPS not only focuses on the theoretical curriculum, but also help in the development of a student personality, extra-curricular activities and over all perspective. I wish all the students a grand success in their career and prosperity in their future life.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
