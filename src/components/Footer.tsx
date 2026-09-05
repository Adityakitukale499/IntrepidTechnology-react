import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin, Twitter, Facebook, Github } from 'lucide-react';
import { SITE } from '../data/site';
import { SERVICES } from '../data/services';
import { POSTS } from '../data/blog';
import darkLogo from '../assets/logo-dark.png';

const Footer: React.FC = () => {
  const company = [
    { name: 'About us', to: '/about' },
    { name: 'Our work', to: '/portfolio' },
    { name: 'Blog', to: '/blog' },
    { name: 'Careers', to: '/careers' },
    { name: 'Contact', to: '/contact' },
  ];

  const socials = [
    { icon: Linkedin, href: SITE.social.linkedin, label: 'LinkedIn' },
    { icon: Twitter, href: SITE.social.twitter, label: 'Twitter' },
    { icon: Facebook, href: SITE.social.facebook, label: 'Facebook' },
    { icon: Github, href: SITE.social.github, label: 'GitHub' },
  ];

  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-slate-300">
      <div className="container-x py-16">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-4">
            <img className="h-11 w-auto" src={darkLogo} alt="Intrepid Technology" />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              A Pune-based technology partner for web and mobile development, WordPress and Shopify stores, cloud hosting
              on AWS, DigitalOcean and Hostinger, and business automation.
            </p>
            <div className="mt-6 flex gap-2">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="rounded-lg border border-slate-800 p-2.5 text-slate-400 transition-colors hover:border-slate-600 hover:text-white"
                >
                  <s.icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Services</h3>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {s.shortName}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company + Blog */}
          <div className="lg:col-span-2">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Company</h3>
            <ul className="mt-5 space-y-2.5">
              {company.map((l) => (
                <li key={l.to}>
                  <Link to={l.to} className="text-sm text-slate-400 transition-colors hover:text-white">
                    {l.name}
                  </Link>
                </li>
              ))}
            </ul>
            <h3 className="mt-8 text-sm font-semibold uppercase tracking-wider text-white">Latest articles</h3>
            <ul className="mt-5 space-y-2.5">
              {POSTS.slice(0, 3).map((p) => (
                <li key={p.slug}>
                  <Link to={`/blog/${p.slug}`} className="line-clamp-2 text-sm text-slate-400 transition-colors hover:text-white">
                    {p.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="lg:col-span-3">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">Contact</h3>
            <ul className="mt-5 space-y-4 text-sm">
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <a href={`mailto:${SITE.email}`} className="text-slate-400 hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <a href={SITE.phoneHref} className="text-slate-400 hover:text-white">
                  {SITE.phone}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand-400" />
                <span className="text-slate-400">
                  {SITE.address.line1}, {SITE.address.line2}
                </span>
              </li>
            </ul>
            <p className="mt-6 text-xs text-slate-500">{SITE.hours}</p>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-slate-800 pt-8 text-xs text-slate-500 md:flex-row">
          <p>© {new Date().getFullYear()} {SITE.legalName}. All rights reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy-policy" className="hover:text-white">
              Privacy Policy
            </Link>
            <Link to="/terms-conditions" className="hover:text-white">
              Terms & Conditions
            </Link>
            <Link to="/cookie-policy" className="hover:text-white">
              Cookie Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
