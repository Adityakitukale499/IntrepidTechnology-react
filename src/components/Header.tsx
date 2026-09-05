import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Moon, Sun, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import { SERVICES } from '../data/services';
import darkLogo from '../assets/logo-dark.png';
import lightLogo from '../assets/logo-light.png';

const NAV = [
  { name: 'Home', path: '/' },
  { name: 'About', path: '/about' },
  { name: 'Services', path: '/services', hasDropdown: true },
  { name: 'Work', path: '/portfolio' },
  { name: 'Blog', path: '/blog' },
  { name: 'Careers', path: '/careers' },
  { name: 'Contact', path: '/contact' },
];

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
    setIsServicesOpen(false);
  }, [location.pathname]);

  const isActive = (path: string) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  const linkClass = (path: string) =>
    `text-sm font-medium transition-colors duration-200 ${
      isActive(path)
        ? 'text-brand-600 dark:text-brand-400'
        : 'text-slate-700 hover:text-brand-600 dark:text-slate-300 dark:hover:text-brand-400'
    }`;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? 'border-slate-200 bg-white/90 shadow-sm backdrop-blur-md dark:border-slate-800 dark:bg-slate-950/90'
          : 'border-transparent bg-white/70 backdrop-blur-sm dark:bg-slate-950/70'
      }`}
    >
      <div className="container-x">
        <div className="flex h-16 items-center justify-between lg:h-[72px]">
          <Link to="/" className="flex items-center" aria-label="Intrepid Technology home">
            <img className="h-10 w-auto lg:h-11" src={theme === 'dark' ? darkLogo : lightLogo} alt="Intrepid Technology" />
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {NAV.map((item) =>
              item.hasDropdown ? (
                <div
                  key={item.name}
                  className="relative"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  <Link to={item.path} className={`flex items-center gap-1 py-2 ${linkClass(item.path)}`}>
                    {item.name}
                    <ChevronDown className={`h-4 w-4 transition-transform ${isServicesOpen ? 'rotate-180' : ''}`} />
                  </Link>
                  {isServicesOpen && (
                    <div className="absolute left-1/2 top-full w-[640px] -translate-x-1/2 pt-2">
                      <div className="grid grid-cols-2 gap-1 rounded-2xl border border-slate-200 bg-white p-3 shadow-card-lg dark:border-slate-800 dark:bg-slate-900">
                        {SERVICES.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="flex items-start gap-3 rounded-xl p-3 transition-colors hover:bg-slate-50 dark:hover:bg-slate-800"
                          >
                            <span className="mt-0.5 flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-lg bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
                              <service.icon className="h-[18px] w-[18px]" />
                            </span>
                            <span>
                              <span className="block text-sm font-semibold text-slate-900 dark:text-white">{service.shortName}</span>
                              <span className="mt-0.5 block text-xs leading-snug text-slate-500 dark:text-slate-400">
                                {service.summary.length > 70 ? `${service.summary.slice(0, 68)}…` : service.summary}
                              </span>
                            </span>
                          </Link>
                        ))}
                        <Link
                          to="/services"
                          className="col-span-2 mt-1 rounded-xl border-t border-slate-100 px-3 pt-3 text-center text-sm font-semibold text-brand-600 hover:underline dark:border-slate-800 dark:text-brand-400"
                        >
                          View all services
                        </Link>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <Link key={item.name} to={item.path} className={`py-2 ${linkClass(item.path)}`}>
                  {item.name}
                </Link>
              ),
            )}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <button
              onClick={toggleTheme}
              aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
              className="rounded-lg p-2 text-slate-600 transition-colors hover:bg-slate-100 hover:text-slate-900 dark:text-slate-400 dark:hover:bg-slate-800 dark:hover:text-white"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <Link
              to="/contact"
              className="ml-2 rounded-lg bg-brand-600 px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-brand-700"
            >
              Get a quote
            </Link>
          </div>

          {/* Mobile controls */}
          <div className="flex items-center gap-1 lg:hidden">
            <button
              onClick={toggleTheme}
              aria-label="Toggle theme"
              className="rounded-lg p-2 text-slate-600 dark:text-slate-400"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isMenuOpen}
              className="rounded-lg p-2 text-slate-700 dark:text-slate-300"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mb-4 rounded-2xl border border-slate-200 bg-white p-2 shadow-card-lg dark:border-slate-800 dark:bg-slate-900 lg:hidden">
            {NAV.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <>
                    <button
                      onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                      className="flex w-full items-center justify-between rounded-lg px-4 py-3 text-left font-medium text-slate-800 dark:text-slate-200"
                    >
                      {item.name}
                      <ChevronDown className={`h-4 w-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {mobileServicesOpen && (
                      <div className="mb-2 ml-3 border-l border-slate-200 pl-3 dark:border-slate-700">
                        <Link to="/services" className="block rounded-lg px-3 py-2 text-sm font-semibold text-brand-600 dark:text-brand-400">
                          All services
                        </Link>
                        {SERVICES.map((service) => (
                          <Link
                            key={service.slug}
                            to={`/services/${service.slug}`}
                            className="block rounded-lg px-3 py-2 text-sm text-slate-600 hover:bg-slate-50 dark:text-slate-400 dark:hover:bg-slate-800"
                          >
                            {service.shortName}
                          </Link>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <Link
                    to={item.path}
                    className={`block rounded-lg px-4 py-3 font-medium ${
                      isActive(item.path)
                        ? 'bg-brand-50 text-brand-700 dark:bg-brand-950/50 dark:text-brand-300'
                        : 'text-slate-800 hover:bg-slate-50 dark:text-slate-200 dark:hover:bg-slate-800'
                    }`}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <Link
              to="/contact"
              className="mt-2 block rounded-lg bg-brand-600 px-4 py-3 text-center font-semibold text-white"
            >
              Get a quote
            </Link>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
