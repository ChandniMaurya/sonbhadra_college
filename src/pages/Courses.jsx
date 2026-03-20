import { BookOpen, Clock, Calendar, CheckCircle, Settings, Zap, FlaskConical, Download } from 'lucide-react';
import { Link } from 'react-router-dom';

const Courses = () => {
  const courses = [
    {
      title: 'Diploma in Production Engineering',
      category: 'Mechanical',
      duration: '3 Years',
      intake: '60 Seats',
      desc: 'Learn practical and theoretical knowledge of manufacturing processes, production technology, and industrial engineering.',
      color: 'bg-blue-50 text-blue-600',
      border: 'hover:border-blue-500',
      icon: Settings,
      syllabus: '/syllabus/production.pdf'
    },
    {
      title: 'Diploma in Electrical Engineering',
      category: 'Electrical',
      duration: '3 Years',
      intake: '60 Seats',
      desc: 'Study electrical power generation, transmission, distribution, and the functioning of electrical machinery and circuits.',
      color: 'bg-yellow-50 text-yellow-600',
      border: 'hover:border-yellow-500',
      icon: Zap,
      syllabus: '/syllabus/electrical.pdf'
    },
    {
      title: 'Diploma in Chemical Engineering',
      category: 'Chemical',
      duration: '3 Years',
      intake: '60 Seats',
      desc: 'Focus on physical and life sciences along with applied mathematics to process, transport, and transform materials.',
      color: 'bg-green-50 text-green-600',
      border: 'hover:border-green-500',
      icon: FlaskConical,
      syllabus: '/syllabus/chemical.pdf'
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-slate-900/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Courses Offered</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">Explore our comprehensive diploma programs approved by AICTE and affiliated to BTEUP.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Course Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {courses.map((course, idx) => (
            <div key={idx} className={`bg-white rounded-2xl p-8 border border-slate-200 transition-all shadow-sm hover:shadow-xl group flex flex-col h-full ${course.border}`}>
              <div className="flex justify-between items-start mb-6">
                <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${course.color}`}>
                  {course.category}
                </span>
                <course.icon className="text-slate-400 group-hover:text-teal-500 transition-colors" size={28} />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:text-teal-700 transition-colors">{course.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow">
                {course.desc}
              </p>
              
              <div className="flex items-center gap-6 mb-8 text-sm text-slate-500 font-medium pt-6 border-t border-slate-100">
                <div className="flex items-center gap-2">
                  <Clock size={16} className="text-teal-500"/>
                  {course.duration}
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} className="text-teal-500"/>
                  {course.intake}
                </div>
              </div>

              <div className="pt-2">
                <a 
                  href={course.syllabus}
                  download
                  className="w-full flex justify-center items-center gap-2 bg-slate-50 hover:bg-teal-50 text-slate-700 hover:text-teal-700 font-semibold py-3 px-4 rounded-xl transition-colors border border-slate-200 hover:border-teal-200"
                >
                  <Download size={18} />
                  Download Syllabus
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Accreditation */}
        <div className="mt-24 p-10 bg-teal-800 text-white rounded-3xl grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-4">Recognized for Excellence</h3>
            <p className="text-teal-100 mb-6 text-lg">All our programs are fully accredited and recognized globally, ensuring that your diploma holds value everywhere you go.</p>
            <ul className="space-y-3 font-medium">
              <li className="flex items-center gap-3"><CheckCircle className="text-teal-300" size={20}/> AICTE Approved Programs</li>
              <li className="flex items-center gap-3"><CheckCircle className="text-teal-300" size={20}/> Affiliated to BTEUP, Lucknow</li>
            </ul>
          </div>
          <div className="text-center bg-white/10 p-10 rounded-2xl backdrop-blur-sm border border-white/20">
            <div className="text-5xl font-black mb-2 text-teal-300">100%</div>
            <div className="text-xl font-semibold mb-2">Placement Assistance</div>
            <p className="text-teal-100 text-sm">Dedicated career counseling and industry tie-ups for all final year students.</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Courses;
