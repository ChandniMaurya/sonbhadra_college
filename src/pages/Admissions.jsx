import { CheckCircle, ClipboardList, Send, FileText, UserCheck } from 'lucide-react';

const Admissions = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-slate-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-slate-900/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Admissions 2026-27</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">Join the Sonbharda College community. Start your application process today.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="grid lg:grid-cols-3 gap-12">

          {/* How to Apply / Steps */}
          <div className="lg:col-span-1 space-y-8">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-6">How to Apply</h2>
            <div className="space-y-6">
              {[
                { step: '1', title: 'Submit Online Application', desc: 'Fill out the application form with accurate details and upload required documents.', icon: FileText },
                { step: '2', title: 'Application Review', desc: 'Our admissions team will review your application within 5-7 business days.', icon: ClipboardList },
                { step: '3', title: 'Entrance / Interview', desc: 'Shortlisted candidates will be called for a virtual interview or entrance test.', icon: UserCheck },
                { step: '4', title: 'Final Admission', desc: 'Secure your seat by paying the admission fees once selected.', icon: CheckCircle }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-4 group">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 rounded-full bg-teal-100 text-teal-600 flex items-center justify-center font-bold text-xl group-hover:bg-teal-600 group-hover:text-white transition-colors">
                      {item.step}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                    <p className="text-slate-600">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-amber-50 border border-amber-200 p-6 rounded-2xl mt-10">
              <h4 className="font-bold text-amber-800 mb-2">Important Dates</h4>
              <ul className="space-y-2 text-amber-700 text-sm">
                <li className="flex justify-between border-b border-amber-200/50 pb-2">
                  <span>Application Opens:</span> <span className="font-bold">April 1, 2026</span>
                </li>
                <li className="flex justify-between border-b border-amber-200/50 pb-2">
                  <span>Early Bird Deadline:</span> <span className="font-bold">May 15, 2026</span>
                </li>
                <li className="flex justify-between pb-1">
                  <span>Final Deadline:</span> <span className="font-bold">July 31, 2026</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Application Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-100">
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Application Form</h3>
                <p className="text-slate-500">Please fill all the details correctly. Fields marked with * are required.</p>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">First Name *</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="John" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Last Name *</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="Doe" required />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address *</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="john@example.com" required />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Phone Number *</label>
                    <input type="tel" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all" placeholder="+1 (234) 567-890" required />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Select Course *</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all appearance-none" required>
                    <option value="" disabled selected>Choose a program...</option>
                    <option value="cs">B.Tech in Computer Science</option>
                    <option value="ds">B.Sc. in Data Science</option>
                    <option value="bba">Bachelor of Business Administration</option>
                    <option value="psy">B.A. in Psychology</option>
                    <option value="ai">M.Tech in Artificial Intelligence</option>
                    <option value="mba">MBA in Finance</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Previous Education Background *</label>
                  <textarea rows="3" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all resize-none" placeholder="High School details, marks, etc..." required></textarea>
                </div>

                <div className="pt-4">
                  <button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-bold text-lg py-4 rounded-xl flex items-center justify-center gap-2 transition-all shadow-lg hover:shadow-teal-600/30 transform hover:-translate-y-0.5">
                    Submit Application <Send size={20} />
                  </button>
                  <p className="text-center text-xs text-slate-500 mt-4">By submitting this form, you agree to our Terms and Conditions & Privacy Policy.</p>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Admissions;
