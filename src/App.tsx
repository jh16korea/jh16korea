import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Globe, ChevronRight, Menu, X, MapPin, Phone, Mail, Award, TrendingUp, Users } from 'lucide-react';
import { translations, Language } from './translations';

export default function App() {
  const [lang, setLang] = useState<Language>('en');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  const t = translations[lang];

  const heroImages = [
    'https://lh3.googleusercontent.com/d/1LURHrocUa1AeP3y8-wnZ7Cx-yPEBXxrD',
    'https://lh3.googleusercontent.com/d/1QroXTdGP7N7Kk2rAR1p8W1sAH0ytqwU9',
    'https://lh3.googleusercontent.com/d/1KgjO37fOhaf1cQsbVis8jJKYK-uqymvh',
    'https://lh3.googleusercontent.com/d/1Kf-N-1MSMVSguxcqcCA-Kl_TCKYrVP55'
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    
    const interval = setInterval(() => {
      setHeroIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, [heroImages.length]);

  // Demo image URLs - User can replace these with Google Drive direct links
  // Tip for User: Use https://lh3.googleusercontent.com/d/{FILE_ID} for direct Google Drive image links
  const images = {
    hero: 'https://picsum.photos/seed/seafood-hero/1920/1080',
    office: 'https://lh3.googleusercontent.com/d/18sZM991K7M8O6FiMebvxEjIscgZt8PLB',
    dookki: 'https://aeonmall-review-rikkei.cdn.vccloud.vn/website/21/articles/April2025/wBXJT6cjNq9cNWEuZu2R.png',
    products: 'https://aeonmall-haiphong-lechan.com.vn/wp-content/uploads/2025/11/hankki-deli-1000x625px.png',
    sashimi: 'https://scontent.fsgn5-9.fna.fbcdn.net/v/t39.30808-6/476389353_122134690538556999_8555352134634556340_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=105&ccb=1-7&_nc_sid=2a1932&_nc_ohc=pgWT7MNzpmoQ7kNvwGID1TE&_nc_oc=AdmLRnu-3EydarvAmkOKNSPwNkhvVskyuf3rhz-R29Q2QjnJ-WZWakBAb3FAchmrVqE&_nc_zt=23&_nc_ht=scontent.fsgn5-9.fna&_nc_gid=7dXeMKKNLBpuModZReYLPQ&_nc_ss=8&oh=00_AfzkGf1qXTOKk3y-M5GtPTdDWgL8SU172bx_YPdTtmTSEQ&oe=69AF04E5',
    mikado: 'https://scontent.fsgn5-5.fna.fbcdn.net/v/t39.30808-6/534572207_122219155334250231_7581474248482457484_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=13d280&_nc_ohc=kGZhlcLLEmYQ7kNvwE97Ip0&_nc_oc=AdktOJ70Ef4UvhL_gdbQmE6Zv9BRoZunGR9OHIKFZfxQI9B42x-uqtAJJmdWerwKN98&_nc_zt=23&_nc_ht=scontent.fsgn5-5.fna&_nc_gid=Qe0TFAF3SjuF4oFaoGxKPA&_nc_ss=8&oh=00_Afxq2lD5001yzKiwifzPFGSK6TZixDpuosVcrWeB5jgm9A&oe=69AEED1A',
    samjin: 'https://scontent.fsgn5-12.fna.fbcdn.net/v/t39.30808-6/474079373_122210503028019336_1746888839341655404_n.jpg?stp=dst-jpg_p526x296_tt6&_nc_cat=103&ccb=1-7&_nc_sid=13d280&_nc_ohc=mU_d-RTYRsMQ7kNvwHTmkJN&_nc_oc=Adn4aQkMVnBc0LPp1S1XLCnmN2oIxy5C8skh32ILEPvV_49YUdunmJi2EuLNNSTB-JA&_nc_zt=23&_nc_ht=scontent.fsgn5-12.fna&_nc_gid=aUPVBzX8idsCp9t9uA_BTA&_nc_ss=8&oh=00_AfylZ7CwPKW5PjNhzBT7_Mq5K4xbxksSAjd2UxAFa7HdEw&oe=69AF0830',
    songsabu: 'https://scontent.fsgn5-3.fna.fbcdn.net/v/t39.30808-6/605117139_122159220248841723_1161957545130489379_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=13d280&_nc_ohc=O_2yBp6MEM4Q7kNvwGxC3m8&_nc_oc=AdkuDOjzLJnwSLyYrj7fvCjHQ9iFxpNsFaQ_brHJp3dwL5wcsngn0sQkKtAumAqkxeE&_nc_zt=23&_nc_ht=scontent.fsgn5-3.fna&_nc_gid=CO3cuC-cyRpd6YmOMfWFkg&_nc_ss=8&oh=00_AfxAtUcfEj0JT2g-5Iohn0kTjKhtS3JNb9zW1x83r6VWvQ&oe=69AEF2BA',
    zero: 'https://scontent.fsgn5-10.fna.fbcdn.net/v/t39.30808-6/473803409_122173222646279471_2862135461868326247_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=13d280&_nc_ohc=IILIYbK4H60Q7kNvwEr0--0&_nc_oc=AdlYNxuSezihSWP4n6gU2OpwulfpVx--VMmCULwtEyrSxrTSABQC7PCctWPYKzsE3bI&_nc_zt=23&_nc_ht=scontent.fsgn5-10.fna&_nc_gid=Pb3t63VnR2zo0ITs9FCvPg&_nc_ss=8&oh=00_AfyiRASqWwqNoed0k8SlxVuBmWcBVJeiLOmX3ZxVkSxvWw&oe=69AEEAFB',
  };

  const navItems = [
    { name: t.nav.home, href: '#home' },
    { name: t.nav.about, href: '#about' },
    { name: t.nav.history, href: '#history' },
    { name: t.nav.products, href: '#products' },
    { name: t.nav.contact, href: '#contact' },
  ];

  return (
    <div className="min-h-screen bg-[#F5F2ED] text-[#1A1A1A] font-sans selection:bg-[#FF6321] selection:text-white">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#FF6321] rounded-lg flex items-center justify-center text-white font-bold text-xl">JH</div>
            <span className="font-bold text-xl tracking-tight">JH16 KOREA</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.href} className="text-sm font-medium hover:text-[#FF6321] transition-colors uppercase tracking-wider">
                {item.name}
              </a>
            ))}
            <div className="flex items-center gap-1 ml-4 border-l pl-6 border-black/10">
              {(['en', 'vi', 'th'] as const).map((l) => (
                <button
                  key={l}
                  onClick={() => setLang(l)}
                  className={`px-2 py-1 text-[10px] font-bold uppercase transition-all rounded ${
                    lang === l 
                      ? 'bg-[#FF6321] text-white' 
                      : 'text-black/40 hover:text-[#FF6321]'
                  }`}
                >
                  {l}
                </button>
              ))}
            </div>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {navItems.map((item) => (
                <a 
                  key={item.name} 
                  href={item.href} 
                  onClick={() => setIsMenuOpen(false)}
                  className="text-2xl font-bold uppercase tracking-tighter"
                >
                  {item.name}
                </a>
              ))}
              <div className="flex items-center gap-4 mt-8 pt-8 border-t border-black/5">
                <button onClick={() => setLang('en')} className={`text-sm font-bold ${lang === 'en' ? 'text-[#FF6321]' : ''}`}>ENGLISH</button>
                <button onClick={() => setLang('vi')} className={`text-sm font-bold ${lang === 'vi' ? 'text-[#FF6321]' : ''}`}>TIẾNG VIỆT</button>
                <button onClick={() => setLang('th')} className={`text-sm font-bold ${lang === 'th' ? 'text-[#FF6321]' : ''}`}>ไทย</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="home" className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <AnimatePresence mode="wait">
            <motion.img 
              key={heroIndex}
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1.5 }}
              src={heroImages[heroIndex]} 
              alt="Hero Background" 
              className="absolute inset-0 w-full h-full object-cover brightness-50"
              referrerPolicy="no-referrer"
            />
          </AnimatePresence>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="inline-block bg-[#FF6321] text-white px-3 py-1 text-xs font-bold uppercase tracking-widest mb-6">
              K-Food Global Specialist
            </span>
            <h1 className="text-6xl md:text-8xl font-bold text-white leading-[0.9] mb-8 uppercase tracking-tighter">
              {t.hero.title}
            </h1>
            <p className="text-xl text-white/80 mb-10 leading-relaxed font-light">
              {t.hero.subtitle}
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#products" className="bg-white text-black px-8 py-4 rounded-full font-bold uppercase text-sm flex items-center gap-2 hover:bg-[#FF6321] hover:text-white transition-all group">
                {t.hero.cta} <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a href="#contact" className="border border-white/30 text-white px-8 py-4 rounded-full font-bold uppercase text-sm hover:bg-white/10 transition-all">
                {t.nav.contact}
              </a>
            </div>
          </motion.div>
        </div>
        
        {/* Vertical Rail Text */}
        <div className="absolute right-8 bottom-24 hidden lg:block">
          <div className="writing-mode-vertical rotate-180 text-[10px] uppercase tracking-[0.5em] text-white/40 font-bold">
            ESTABLISHED 2019 • JEONJU KOREA • GLOBAL EXPORT
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-12 border-b border-black/5">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF6321] mb-1">$5.9M</div>
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">2025 Revenue</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF6321] mb-1">180%</div>
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">Target Achievement</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF6321] mb-1">15+</div>
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">Lotte Mart Locations</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-[#FF6321] mb-1">ASEAN</div>
            <div className="text-[10px] uppercase tracking-widest font-bold opacity-50">Core Market Focus</div>
          </div>
        </div>
      </section>

      {/* About Section - Redesigned */}
      <section id="about" className="relative bg-white overflow-hidden">
        <div className="flex flex-col lg:flex-row min-h-[80vh]">
          {/* Left Pane: Visuals */}
          <div className="lg:w-1/2 relative h-[50vh] lg:h-auto overflow-hidden">
            <motion.img 
              initial={{ scale: 1.1 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 1.5 }}
              src={images.office} 
              alt="JH16 Office" 
              className="absolute inset-0 w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/20" />
            
            {/* Floating Badge */}
            <motion.div 
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="absolute bottom-12 left-12 right-12 bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-2xl text-white"
            >
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 bg-[#FF6321] rounded-full flex items-center justify-center shrink-0">
                  <Award size={32} />
                </div>
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] font-bold opacity-60 mb-1">Quality Standard</div>
                  <div className="text-xl font-bold uppercase tracking-tighter">Premium K-Food Export Specialist</div>
                </div>
              </div>
            </motion.div>

            {/* Vertical Rail Text */}
            <div className="absolute left-6 top-1/2 -translate-y-1/2 hidden lg:block">
              <div className="writing-mode-vertical rotate-180 text-[9px] uppercase tracking-[0.6em] text-white/40 font-bold">
                INNOVATION • TRADITION • GLOBAL REACH
              </div>
            </div>
          </div>

          {/* Right Pane: Content */}
          <div className="lg:w-1/2 flex items-center p-8 lg:p-24 bg-[#F5F2ED]">
            <div className="max-w-xl">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center gap-4 mb-8">
                  <div className="h-px w-12 bg-[#FF6321]" />
                  <span className="text-xs font-bold uppercase tracking-[0.4em] text-[#FF6321]">{t.nav.about}</span>
                </div>
                
                <h3 className="text-6xl lg:text-7xl font-bold mb-10 tracking-tighter leading-[0.9] uppercase">
                  {t.about.title.split(' ').map((word, i) => (
                    <span key={i} className={i === 1 ? "text-[#FF6321]" : ""}>{word} </span>
                  ))}
                </h3>
                
                <p className="text-xl text-black/70 leading-relaxed mb-12 font-light">
                  {t.about.content}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
                  <div className="group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#FF6321] group-hover:border-[#FF6321] group-hover:text-white transition-all">
                        <TrendingUp size={18} />
                      </div>
                      <h4 className="font-bold text-xs uppercase tracking-widest">Market Analysis</h4>
                    </div>
                    <p className="text-sm text-black/50 leading-relaxed">Data-driven trend analysis for successful localization in ASEAN markets.</p>
                  </div>
                  
                  <div className="group">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-[#FF6321] group-hover:border-[#FF6321] group-hover:text-white transition-all">
                        <Users size={18} />
                      </div>
                      <h4 className="font-bold text-xs uppercase tracking-widest">Franchise Support</h4>
                    </div>
                    <p className="text-sm text-black/50 leading-relaxed">Tailored recipe development and menu proposals for global franchises.</p>
                  </div>
                </div>

                <motion.div 
                  whileHover={{ x: 10 }}
                  className="mt-16 inline-flex items-center gap-4 text-xs font-bold uppercase tracking-widest cursor-pointer group"
                >
                  <span>Learn more about our mission</span>
                  <div className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center group-hover:bg-[#FF6321] transition-colors">
                    <ChevronRight size={16} />
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section id="history" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF6321] mb-4">{t.nav.history}</h2>
            <h3 className="text-5xl font-bold tracking-tighter uppercase">{t.history.title}</h3>
          </div>
          
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-black/10 -translate-x-1/2 hidden md:block" />
            
            <div className="space-y-12">
              {t.history.items.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row gap-8 items-start md:items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  <div className="flex-1 w-full md:text-right">
                    <div className={`md:px-12 ${index % 2 === 0 ? 'md:text-left' : 'md:text-right'}`}>
                      <span className="text-3xl font-black text-[#FF6321] mb-2 block">{item.year}</span>
                      <p className="text-lg font-medium text-black/80">{item.content}</p>
                    </div>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-[#FF6321] border-4 border-white shadow-sm relative z-10 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Products/Brands Section */}
      <section id="products" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
            <div className="max-w-2xl">
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF6321] mb-4">{t.nav.products}</h2>
              <h3 className="text-5xl font-bold tracking-tighter uppercase mb-6">{t.brands.title}</h3>
              <p className="text-lg text-black/60">{t.brands.description}</p>
            </div>
            <div className="flex gap-2">
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                <ChevronRight className="rotate-180" />
              </div>
              <div className="w-12 h-12 rounded-full border border-black/10 flex items-center justify-center hover:bg-black hover:text-white transition-colors cursor-pointer">
                <ChevronRight />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { name: 'HANKKI', img: images.products, desc: 'Premium K-Seafood Brand', href: 'https://www.facebook.com/Hankkideli' },
              { name: 'DOOKKI', img: images.dookki, desc: 'Franchise Partner Menu', href: 'https://www.facebook.com/DookkiVietnam' },
              { name: 'GOURMET SASHIMI', img: images.sashimi, desc: 'Premium Seafood Fillets', href: 'https://www.facebook.com/GourmetsashimiVietnam1' },
              { name: 'MIKADO', img: images.mikado, desc: 'Premium Sushi Franchise', href: 'https://www.facebook.com/mikadosushivietnam' },
              { name: 'SAMJIN AMOOK', img: images.samjin, desc: 'Authentic Korean Fish Cake', href: 'https://www.facebook.com/SamjinAmookVietnam' },
              { name: 'SONGSABU', img: images.songsabu, desc: 'Premium Croquette & Bakery', href: 'https://www.facebook.com/songsabuvietnam' },
              { name: '0 ĐỘ C', img: images.zero, desc: 'Premium Korean BBQ', href: 'https://www.facebook.com/khongdocKoreanBBQDiningRestaurant' },
            ].map((brand) => (
              <motion.a 
                key={brand.name}
                href={brand.href}
                target={brand.href.startsWith('http') ? '_blank' : '_self'}
                rel="noopener noreferrer"
                whileHover={{ y: -10 }}
                className="group cursor-pointer block"
              >
                <div className="relative overflow-hidden rounded-3xl aspect-[4/5] mb-6">
                  <img 
                    src={brand.img} 
                    alt={brand.name} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-8">
                    <span className="bg-white text-black px-6 py-3 rounded-full font-bold text-xs uppercase">View Details</span>
                  </div>
                </div>
                <h4 className="text-2xl font-bold uppercase tracking-tighter mb-1">{brand.name}</h4>
                <p className="text-sm text-black/40 font-medium uppercase tracking-widest">{brand.desc}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#1A1A1A] text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-24">
            <div>
              <h2 className="text-sm font-bold uppercase tracking-[0.3em] text-[#FF6321] mb-6">Get in Touch</h2>
              <h3 className="text-6xl font-bold tracking-tighter uppercase mb-12 leading-none">Let's build the future of K-Food together.</h3>
              
              <div className="space-y-8">
                <div className="flex gap-6 items-start">
                  <MapPin className="text-[#FF6321] shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Headquarters</h4>
                    <p className="text-lg">{t.footer.address}</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Phone className="text-[#FF6321] shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Phone</h4>
                    <p className="text-lg">+82 (0)63 123 4567</p>
                  </div>
                </div>
                <div className="flex gap-6 items-start">
                  <Mail className="text-[#FF6321] shrink-0" />
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-widest text-white/40 mb-2">Email</h4>
                    <p className="text-lg">info@jh16korea.com</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/5 p-12 rounded-3xl border border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">First Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[#FF6321] transition-colors" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Last Name</label>
                    <input type="text" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[#FF6321] transition-colors" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Email Address</label>
                  <input type="email" className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[#FF6321] transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold tracking-widest text-white/40">Message</label>
                  <textarea rows={4} className="w-full bg-transparent border-b border-white/20 py-2 focus:outline-none focus:border-[#FF6321] transition-colors resize-none" />
                </div>
                <button className="w-full bg-[#FF6321] text-white py-4 rounded-xl font-bold uppercase text-sm tracking-widest hover:bg-[#FF7A42] transition-colors">
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-black/5">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#FF6321] rounded flex items-center justify-center text-white font-bold text-sm">JH</div>
            <span className="font-bold text-lg tracking-tight">JH16 KOREA</span>
          </div>
          <p className="text-xs text-black/40 font-medium uppercase tracking-widest">
            {t.footer.rights}
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-[#FF6321]">LinkedIn</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-[#FF6321]">TikTok</a>
            <a href="#" className="text-xs font-bold uppercase tracking-widest hover:text-[#FF6321]">Instagram</a>
          </div>
        </div>
      </footer>

      {/* Google Drive Image Instructions Overlay (Dev Only) */}
      <div className="fixed bottom-4 left-4 z-50 group">
        <div className="bg-black text-white p-2 rounded-full cursor-help shadow-lg">
          <Globe size={20} />
        </div>
        <div className="absolute bottom-full left-0 mb-2 w-80 bg-white p-4 rounded-xl shadow-2xl border border-black/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none text-xs">
          <p className="font-bold mb-2 text-[#FF6321]">How to use Google Drive Images:</p>
          <ol className="list-decimal ml-4 space-y-1 text-black/70">
            <li>Upload image to Google Drive.</li>
            <li>Right-click {'>'} Share {'>'} Anyone with link (Viewer).</li>
            <li>Copy the File ID from the link.</li>
            <li>Use this URL format in the code:<br/>
              <code className="bg-black/5 p-1 rounded block mt-1">https://lh3.googleusercontent.com/d/FILE_ID</code>
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}
