import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Code2 } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', targetId: 'hero' },
    { name: 'Experience', targetId: 'experience' },
    { name: 'Skills', targetId: 'skills' },
    { name: 'Projects', targetId: 'projects' },
    { name: 'Contact', href: '/contact', type: 'page' },
  ];

  const handleSectionClick = (targetId) => {
    setIsMobileMenuOpen(false);
    
    if (location.pathname === '/') {
      const element = document.getElementById(targetId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 group" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          <div className="p-2 bg-primary-600 rounded-xl text-white group-hover:scale-110 transition-transform">
            <Code2 size={24} />
          </div>
          <span className="font-bold text-xl tracking-tight text-text-main font-sans">AP<span className="text-primary-600">.</span></span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          {navLinks.map((link) => (
            link.type === 'page' ? (
              <Link
                key={link.name}
                to={link.href}
                className={`text-sm font-semibold transition-colors ${location.pathname === link.href ? 'text-primary-600' : 'text-text-muted hover:text-primary-600'}`}
              >
                {link.name}
              </Link>
            ) : (
              <button
                key={link.name}
                onClick={() => handleSectionClick(link.targetId)}
                className="text-sm font-semibold text-text-muted hover:text-primary-600 transition-colors cursor-pointer"
              >
                {link.name}
              </button>
            )
          ))}
          <Link to="/contact" className="btn-primary py-2 px-6">
            Hire Me
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-text-main" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-white shadow-xl absolute top-full left-0 w-full animate-in slide-in-from-top duration-300 border-t border-border-subtle">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              link.type === 'page' ? (
                <Link
                  key={link.name}
                  to={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-lg font-semibold hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => handleSectionClick(link.targetId)}
                  className="text-lg font-semibold text-left hover:text-primary-600 transition-colors"
                >
                  {link.name}
                </button>
              )
            ))}
            <Link
              to="/contact"
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full text-center"
            >
              Hire Me
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
