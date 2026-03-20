import { MapPin, Phone, Mail, Send, MessageSquare } from 'lucide-react';

const Contact = () => {
  return (
    <div className="w-full bg-slate-50 min-h-screen pb-20">
      {/* Header */}
      <div className="bg-slate-900 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-teal-900/40 to-slate-900/60" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">Get In Touch</h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto font-light">We are here to help and answer any question you might have. We look forward to hearing from you.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-10 relative z-20">
        
        <div className="grid lg:grid-cols-3 gap-8">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            
            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col gap-6 transform transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-teal-50 rounded-2xl flex items-center justify-center text-teal-600 shadow-sm border border-teal-100">
                <MapPin size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Our Campus</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  123 University Avenue, Knowledge Park<br />
                  Education City, State 10001<br />
                  Sonbharda
                </p>
                <a href="#" className="text-sm font-semibold text-teal-600 hover:text-teal-700 underline underline-offset-4 decoration-2 decoration-teal-600/30">Get Directions</a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col gap-6 transform transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-rose-50 rounded-2xl flex items-center justify-center text-rose-600 shadow-sm border border-rose-100">
                <Phone size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Call Us</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  General Enquiries:<br />
                  <a href="tel:+1234567890" className="text-slate-800 font-medium hover:text-rose-600 transition-colors">+1 (234) 567-890</a>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Admissions Office:<br />
                  <a href="tel:+1987654321" className="text-slate-800 font-medium hover:text-rose-600 transition-colors">+1 (987) 654-321</a>
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl shadow-lg border border-slate-100 flex flex-col gap-6 transform transition-transform hover:-translate-y-1">
              <div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 shadow-sm border border-blue-100">
                <Mail size={28} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 mb-2">Email Us</h3>
                <p className="text-slate-600 leading-relaxed mb-4">
                  Admissions:<br />
                  <a href="mailto:admissions@sonbharda.edu" className="text-slate-800 font-medium hover:text-blue-600 transition-colors">admissions@sonbharda.edu</a>
                </p>
                <p className="text-slate-600 leading-relaxed">
                  Support:<br />
                  <a href="mailto:info@sonbharda.edu" className="text-slate-800 font-medium hover:text-blue-600 transition-colors">info@sonbharda.edu</a>
                </p>
              </div>
            </div>

          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100 h-full">
              <div className="flex items-center gap-4 mb-8">
                <div className="bg-teal-600 p-3 rounded-xl text-white shadow-md">
                  <MessageSquare size={24} />
                </div>
                <div>
                  <h2 className="text-3xl font-extrabold text-slate-900">Send us a Message</h2>
                  <p className="text-slate-500 mt-1">We typically reply within 24 hours.</p>
                </div>
              </div>

              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Your Full Name</label>
                    <input type="text" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all shadow-sm" placeholder="John Doe" required/>
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-slate-700">Email Address</label>
                    <input type="email" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all shadow-sm" placeholder="john@example.com" required/>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Subject / Intent</label>
                  <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all appearance-none shadow-sm" required>
                    <option value="" disabled selected>Select a subject...</option>
                    <option value="admission">Admissions Enquiry</option>
                    <option value="course">Course Details</option>
                    <option value="fees">Fees & Scholarships</option>
                    <option value="campus">Campus Tour</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-slate-700">Your Message</label>
                  <textarea rows="5" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-5 py-4 text-slate-800 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:bg-white transition-all resize-none shadow-sm" placeholder="How can we help you?" required></textarea>
                </div>

                <div className="pt-2">
                  <button type="submit" className="bg-slate-900 hover:bg-slate-800 text-white font-bold text-lg py-4 px-10 rounded-xl flex items-center gap-2 transition-all shadow-lg hover:shadow-slate-500/30 transform hover:-translate-y-0.5">
                    Send Message <Send size={20} />
                  </button>
                </div>
              </form>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Contact;
