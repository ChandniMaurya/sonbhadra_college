import { Users, Mail, BookOpen, GraduationCap } from 'lucide-react';

const Faculties = () => {
  const departments = [
    {
      name: "Mechanical Production Engineering",
      head: "Prof. R.K. Sharma",
      faculties: [
        { name: "Dr. A.K. Singh", role: "Sr. Lecturer", exp: "15 Years", email: "aksingh@gps.edu" },
        { name: "Er. Vivek Pandey", role: "Lecturer", exp: "8 Years", email: "vpandey@gps.edu" },
        { name: "Er. Ramesh Patel", role: "Workshop Superintendent", exp: "12 Years", email: "rpatel@gps.edu" },
      ]
    },
    {
      name: "Electrical Engineering",
      head: "Dr. S.N. Tripathi",
      faculties: [
        { name: "Er. R.P. Maurya", role: "Sr. Lecturer", exp: "14 Years", email: "rpmaurya@gps.edu" },
        { name: "Er. Neha Gupta", role: "Lecturer", exp: "6 Years", email: "ngupta@gps.edu" },
        { name: "Er. Alok Kumar", role: "Lab Instructor", exp: "10 Years", email: "akumar@gps.edu" },
      ]
    },
    {
      name: "Chemical Engineering",
      head: "Prof. M.L. Verma",
      faculties: [
        { name: "Dr. Sanjay Yadav", role: "Sr. Lecturer", exp: "16 Years", email: "syadav@gps.edu" },
        { name: "Er. Priya Singh", role: "Lecturer", exp: "5 Years", email: "psingh@gps.edu" },
        { name: "Er. Rohit Kumar", role: "Lab Instructor", exp: "9 Years", email: "rkumar@gps.edu" },
      ]
    },
    {
      name: "Applied Sciences & Humanities",
      head: "Dr. V.K. Mishra",
      faculties: [
        { name: "Dr. Amit Shukla", role: "Lecturer - Physics", exp: "12 Years", email: "ashukla@gps.edu" },
        { name: "Dr. Renu Tiwari", role: "Lecturer - Chemistry", exp: "10 Years", email: "rtiwari@gps.edu" },
        { name: "Dr. Suresh Singh", role: "Lecturer - Mathematics", exp: "15 Years", email: "ssingh@gps.edu" },
        { name: "Dr. Meena Kumari", role: "Lecturer - English", exp: "8 Years", email: "mkumari@gps.edu" },
      ]
    }
  ];

  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-slate-900/80" />
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1577412647305-991150c7d163?ixlib=rb-4.0.3')] bg-cover bg-center opacity-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <span className="text-teal-400 font-bold tracking-widest uppercase text-sm mb-2 block">Our Pillars of Wisdom</span>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6">Expert Faculties</h1>
          <div className="w-24 h-1 bg-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light leading-relaxed">
            Our highly qualified, dedicated, and experienced professors are committed to transforming students into industry-ready professionals.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        
        {/* Principal Note */}
        <div className="mb-24">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 flex flex-col md:flex-row gap-10 items-center transform hover:-translate-y-1 transition-transform">
            <div className="flex-shrink-0 text-center relative group">
              <div className="absolute inset-0 bg-teal-500 rounded-full blur-xl opacity-30 group-hover:opacity-60 transition-opacity"></div>
              <img 
                src="https://ui-avatars.com/api/?name=Pramod+Kumar&background=00b894&color=fff&size=200" 
                alt="Principal" 
                className="w-40 h-40 md:w-48 md:h-48 rounded-full relative z-10 shadow-lg border-4 border-white"
              />
            </div>
            <div>
              <h2 className="text-3xl font-extrabold text-slate-900 mb-2">Pramod Kumar</h2>
              <p className="text-teal-600 font-bold text-lg mb-6 uppercase tracking-wider">Principal</p>
              <p className="text-slate-600 text-lg leading-relaxed italic border-l-4 border-teal-200 pl-6">
                "Our faculty members are not just educators but mentors who guide our students throughout their academic journey. Their dedication to teaching and research makes Government Polytechnic Sonbhadra a premier institution for technical education."
              </p>
            </div>
          </div>
        </div>

        {/* Faculties by Department */}
        <div className="space-y-20">
          {departments.map((dept, index) => (
            <div key={index}>
              <div className="flex items-center gap-4 mb-8 border-b border-slate-200 pb-4">
                <div className="bg-slate-200 p-2 rounded-lg text-slate-700">
                  <BookOpen size={24} />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-slate-900">{dept.name}</h3>
                  <p className="text-sm font-semibold text-teal-600">HOD: {dept.head}</p>
                </div>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {dept.faculties.map((faculty, fIndex) => (
                  <div key={fIndex} className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-xl transition-all group flex items-start gap-4">
                    <div className="flex-shrink-0">
                      <img 
                        src={`https://ui-avatars.com/api/?name=${faculty.name.replace(' ', '+')}&background=random&color=fff&size=80`} 
                        alt={faculty.name}
                        className="w-16 h-16 rounded-xl shadow-sm group-hover:scale-110 transition-transform"
                      />
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-slate-900 mb-1 leading-tight group-hover:text-teal-700 transition-colors">
                        {faculty.name}
                      </h4>
                      <p className="text-slate-500 font-medium text-sm mb-3">
                        {faculty.role}
                      </p>
                      
                      <div className="space-y-2 text-xs font-semibold text-slate-400">
                        <div className="flex items-center gap-2">
                          <GraduationCap size={14} className="text-teal-500" />
                          Experience: {faculty.exp}
                        </div>
                        <div className="flex items-center gap-2">
                          <Mail size={14} className="text-teal-500" />
                          <a href={`mailto:${faculty.email}`} className="hover:text-teal-600 transition-colors">{faculty.email}</a>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Faculties;
