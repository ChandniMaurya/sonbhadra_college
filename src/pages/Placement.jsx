import { Briefcase, TrendingUp, Users, Building, CheckCircle, Target, Award } from 'lucide-react';

const Placement = () => {
  const recruiters = [
    { name: "L&T Construction", logo: "L&T" },
    { name: "Reliance Industries", logo: "RIL" },
    { name: "Mahindra & Mahindra", logo: "M&M" },
    { name: "Tata Motors", logo: "TATA" },
    { name: "Aditya Birla Group", logo: "ABG" },
    { name: "Honda", logo: "Honda" },
    { name: "Maruti Suzuki", logo: "Maruti" },
    { name: "Jindal Steel", logo: "JSW" }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-slate-900 py-20 lg:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-slate-900" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3')] bg-cover bg-center opacity-20" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-2 block">Training & Placement Cell</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">Career & Placement</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Bridging the gap between our talented students and top-tier industries. We ensure 100% placement assistance.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-20 -mt-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
          {[
            { label: 'Highest Package', value: '4.5+ LPA', icon: TrendingUp },
            { label: 'Students Placed', value: '85%+', icon: Users },
            { label: 'Top Recruiters', value: '50+', icon: Building },
            { label: 'Placement Drives', value: '20+', icon: Briefcase },
          ].map((stat, idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-slate-100 flex flex-col items-center text-center transform hover:-translate-y-1 transition-all group">
              <div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 mb-4 group-hover:bg-teal-600 group-hover:text-white transition-colors">
                <stat.icon size={24} />
              </div>
              <p className="text-2xl md:text-3xl font-black text-slate-900 mb-1">{stat.value}</p>
              <p className="text-xs md:text-sm font-bold text-slate-500 uppercase tracking-wide">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Placement Cell Details */}
      <div className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-6">
            <h2 className="text-teal-600 font-bold uppercase tracking-wider text-sm flex items-center gap-2">
              <Target size={18} /> Our Objective
            </h2>
            <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 leading-tight">
              Shaping Your Career Goals
            </h3>
            <p className="text-lg text-slate-600 leading-relaxed text-justify mb-4">
              The Training and Placement Cell at Government Polytechnic Sonbhadra is highly active and acts as a crucial link between the academic curriculum and the industrial demands. Our primary goal is to guide students towards choosing the right career path and providing them with opportunities to jumpstart their professional journey.
            </p>
            
            <ul className="space-y-4 pt-4">
              {[
                "Organizing regular industrial visits and training programs.",
                "Conducting mock interviews, Group Discussions, and Soft Skills classes.",
                "Inviting top corporate companies for ON-Campus recruitment drives.",
                "Providing career counseling for higher education."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle className="text-teal-500 mt-1 flex-shrink-0" size={20} />
                  <span className="text-slate-700 font-medium">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative">
            <div className="absolute inset-0 bg-teal-600 transform translate-x-4 translate-y-4 rounded-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1573164713988-8665fc963095?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Placement Training" 
              className="rounded-3xl relative z-10 shadow-2xl w-full object-cover h-[450px]"
            />
            {/* Overlay Badge */}
            <div className="absolute bottom-6 left-6 z-20 bg-white p-4 rounded-xl shadow-xl flex items-center gap-4">
              <div className="bg-teal-100 p-3 rounded-xl text-teal-600">
                <Award size={28} />
              </div>
              <div>
                <p className="text-sm font-bold text-slate-500">Excellence in</p>
                <p className="text-lg font-black text-slate-900">Placements 2025</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Top Recruiters */}
      <div className="bg-slate-100 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-teal-600 font-bold uppercase tracking-wider text-sm mb-2">Industry Partners</h2>
          <h3 className="text-3xl md:text-4xl font-extrabold text-slate-900 mb-12">Our Top Recruiters</h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {recruiters.map((company, idx) => (
              <div key={idx} className="bg-white py-10 px-6 rounded-2xl shadow-sm border border-slate-200 flex items-center justify-center hover:shadow-xl transition-all transform hover:-translate-y-1">
                <span className="text-2xl font-black text-slate-400 opacity-60 hover:opacity-100 hover:text-teal-600 transition-colors">
                  {company.logo}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};

export default Placement;
