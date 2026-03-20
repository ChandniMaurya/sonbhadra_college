import { Award, BookOpen, Users } from 'lucide-react';

const About = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-slate-900" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight">About Us</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">Government Polytechnic Sonbhadra - A premier center for technological advancement.</p>
        </div>
      </div>

      {/* Main Content */}
      <div className="py-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section 1 */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-teal-100 p-3 rounded-xl text-teal-600">
              <BookOpen size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-relaxed">
              Government Polytechnic Sonbhadra is a premier Polytechnic institute in Uttar Pradesh, established in 2009. It is affiliated with the Board of Technical Education, Uttar Pradesh Lucknow.
            </h2>
          </div>
          
          <div className="rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Campus View 1" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

        {/* Highlight Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 px-4">
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
             <div className="text-3xl font-black text-teal-600 mb-1">2009</div>
             <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Established</div>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
             <div className="text-3xl font-black text-teal-600 mb-1">BTEUP</div>
             <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Affiliated</div>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
             <div className="text-3xl font-black text-teal-600 mb-1">3</div>
             <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Diploma Courses</div>
           </div>
           <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-center">
             <div className="text-3xl font-black text-teal-600 mb-1">Top</div>
             <div className="text-xs font-bold text-slate-500 uppercase tracking-widest">Govt Institute</div>
           </div>
        </div>

        {/* Section 2 */}
        <div>
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-teal-100 p-3 rounded-xl text-teal-600">
              <Award size={28} />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 leading-relaxed">
              And it provides UG Diploma courses in Production, Electrical and Chemical Engineering. It is one of the best government Institute amongst the polytechnics in Uttar Pradesh.
            </h2>
          </div>
          
          <p className="text-xl text-slate-600 leading-relaxed mb-10 pl-16 border-l-4 border-teal-200">
            Apart from academic activities, the co-curricular activities, sports, cultural, and social service activities form an integral part of the Institute.
          </p>

          <div className="rounded-3xl overflow-hidden shadow-2xl relative">
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Campus View 2" 
              className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-700"
            />
          </div>
        </div>

      </div>
    </div>
  );
};

export default About;
