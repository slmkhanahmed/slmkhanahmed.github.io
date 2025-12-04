import emailjs from '@emailjs/browser';
import { motion } from 'framer-motion';
import { Loader2, Mail, MapPin, MessageSquare, Phone, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { content } from '../data/content';

const Contact = () => {
  const { contact } = content;
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    const templateParams = {
      name: form.current.user_name.value,
      email: form.current.user_email.value,
      reply_to: form.current.user_email.value,
      message: form.current.message.value,
      time: new Date().toLocaleString(),
    };

    emailjs.send(
      process.env.REACT_APP_EMAILJS_SERVICE_ID,
      process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
      templateParams,
      process.env.REACT_APP_EMAILJS_PUBLIC_KEY
    )
      .then((result) => {
        setLoading(false);
        setStatus('success');
        form.current.reset();
        setTimeout(() => setStatus(null), 5000);
      }, (error) => {
        setLoading(false);
        setStatus('error');
        setTimeout(() => setStatus(null), 5000);
      });
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-neon-purple/10 rounded-full blur-[120px]" />
        <div className="absolute top-20 left-10 w-[300px] h-[300px] bg-neon-teal/10 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20 text-center"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-6">
            <MessageSquare size={14} className="text-neon-teal" />
            <span className="text-xs font-medium text-gray-400 uppercase tracking-wider">Get in Touch</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 font-heading">
            Let's Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-neon-purple to-neon-teal">Together</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hi? I'd love to hear from you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="bg-[#1a1a1a]/60 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-neon-purple/30 transition-all duration-300 group">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-neon-purple group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-neon-purple/30 shadow-[0_0_20px_rgba(124,58,237,0.1)]">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Email</p>
                  <a href={`mailto:${contact.email}`} className="text-lg text-white hover:text-neon-purple transition-colors font-medium">{contact.email}</a>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a]/60 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-neon-teal/30 transition-all duration-300 group">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-neon-teal group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-neon-teal/30 shadow-[0_0_20px_rgba(45,212,191,0.1)]">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Phone</p>
                  <a href={`tel:${contact.phone}`} className="text-lg text-white hover:text-neon-teal transition-colors font-medium">{contact.phone}</a>
                </div>
              </div>
            </div>

            <div className="bg-[#1a1a1a]/60 backdrop-blur-md p-8 rounded-3xl border border-white/5 hover:border-blue-500/30 transition-all duration-300 group">
              <div className="flex items-center gap-5">
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center text-blue-500 group-hover:scale-110 transition-transform duration-300 border border-white/5 group-hover:border-blue-500/30 shadow-[0_0_20px_rgba(59,130,246,0.1)]">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium mb-1">Location</p>
                  <p className="text-lg text-white font-medium">Rawalpindi, Pakistan</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-[#1a1a1a]/80 backdrop-blur-xl p-8 rounded-[2rem] border border-white/10 shadow-2xl"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Name</label>
                <input
                  type="text"
                  name="user_name"
                  required
                  className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-all text-white placeholder-gray-600 focus:bg-black/60"
                  placeholder="John Doe"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Email</label>
                <input
                  type="email"
                  name="user_email"
                  required
                  aria-label="Email Address"
                  className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-all text-white placeholder-gray-600 focus:bg-black/60"
                  placeholder="john@example.com"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows={4}
                  className="w-full px-5 py-4 bg-black/40 border border-white/10 rounded-xl focus:border-neon-purple focus:ring-1 focus:ring-neon-purple outline-none transition-all text-white resize-none placeholder-gray-600 focus:bg-black/60"
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-gradient-to-r from-neon-purple to-neon-teal text-white rounded-xl font-bold hover:opacity-90 transition-all hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed shadow-lg shadow-neon-purple/20 mt-2"
              >
                {loading ? (
                  <>
                    <Loader2 size={20} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <Send size={18} />
                  </>
                )}
              </button>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-center text-sm font-medium"
                >
                  Message sent successfully! I'll get back to you soon.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-center text-sm font-medium"
                >
                  Failed to send message. Please try again later.
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
