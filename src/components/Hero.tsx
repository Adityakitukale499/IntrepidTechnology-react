import React from 'react';
import { CheckCircle2, ShoppingBag, Cloud, Star } from 'lucide-react';
import { Button } from './ui';
import { STATS } from '../data/site';

const POINTS = ['Web, WordPress & Shopify builds', 'AWS, DigitalOcean & Hostinger hosting', 'Mobile apps & RPA automation'];

const Hero: React.FC = () => (
  <section id="home" className="relative overflow-hidden bg-slate-50 dark:bg-slate-900/60">
    {/* Soft background accents */}
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,92,245,0.12),transparent_55%),radial-gradient(ellipse_at_bottom_left,rgba(26,92,245,0.06),transparent_50%)]"
    />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 opacity-[0.35] [background-image:linear-gradient(to_right,rgba(100,116,139,0.10)_1px,transparent_1px),linear-gradient(to_bottom,rgba(100,116,139,0.10)_1px,transparent_1px)] [background-size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]"
    />

    <div className="container-x relative grid items-center gap-14 py-16 lg:grid-cols-12 lg:py-24">
      {/* Copy */}
      <div className="lg:col-span-6">
        <span className="eyebrow mb-4 animate-fade-in-up">Technology partner for growing businesses</span>
        <h1 className="animate-fade-in-up delay-100 text-4xl font-bold leading-[1.1] tracking-tight text-slate-900 dark:text-white sm:text-5xl xl:text-6xl">
          Websites, cloud and software that move your business forward.
        </h1>
        <p className="animate-fade-in-up delay-200 mt-6 max-w-xl text-lg leading-relaxed text-slate-600 dark:text-slate-300">
          Intrepid Technology designs, builds and manages the digital systems companies rely on: fast websites,
          reliable online stores, secure cloud hosting and automation that removes repetitive work.
        </p>

        <ul className="animate-fade-in-up delay-200 mt-6 flex flex-col gap-2">
          {POINTS.map((p) => (
            <li key={p} className="flex items-center gap-2 text-sm font-medium text-slate-700 dark:text-slate-200">
              <CheckCircle2 className="h-4 w-4 text-brand-600 dark:text-brand-400" />
              {p}
            </li>
          ))}
        </ul>

        <div className="animate-fade-in-up delay-300 mt-9 flex flex-col gap-3 sm:flex-row">
          <Button to="/contact" size="lg" icon>
            Start a project
          </Button>
          <Button to="/portfolio" variant="secondary" size="lg">
            See our work
          </Button>
        </div>

        <dl className="animate-fade-in-up delay-300 mt-12 grid grid-cols-2 gap-6 border-t border-slate-200 pt-8 dark:border-slate-800 sm:grid-cols-4">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <dd className="text-2xl font-bold text-slate-900 dark:text-white sm:text-3xl">{stat.value}</dd>
              <dt className="mt-0.5 text-xs text-slate-600 dark:text-slate-400 sm:text-sm">{stat.label}</dt>
            </div>
          ))}
        </dl>
      </div>

      {/* Visual composition: overlapping collage */}
      <div className="relative lg:col-span-6">
        <div className="relative mx-auto aspect-[5/4] w-full max-w-xl lg:max-w-none">
          {/* Soft colour blob behind the collage */}
          <div
            aria-hidden
            className="absolute inset-x-[8%] inset-y-[6%] rounded-[3rem] bg-gradient-to-br from-brand-200/70 via-brand-100/40 to-transparent blur-2xl dark:from-brand-700/30 dark:via-brand-900/20"
          />
          <div
            aria-hidden
            className="absolute -right-4 top-4 h-40 w-40 rounded-full [background-image:radial-gradient(rgba(26,92,245,0.35)_1.5px,transparent_1.5px)] [background-size:14px_14px] dark:[background-image:radial-gradient(rgba(140,180,255,0.35)_1.5px,transparent_1.5px)]"
          />

          {/* Main image */}
          <div className="hero-rise absolute right-0 top-0 w-[74%]" style={{ animationDelay: '0.15s' }}>
            <div className="hero-float overflow-hidden rounded-3xl shadow-card-lg ring-1 ring-black/5">
              <img
                src="https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg?auto=compress&cs=tinysrgb&w=1000"
                alt="Intrepid Technology team reviewing a project together"
                loading="eager"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Overlapping image, bottom-left */}
          <div className="hero-rise absolute bottom-[4%] left-0 w-[52%]" style={{ animationDelay: '0.4s' }}>
            <div className="hero-float-slow overflow-hidden rounded-3xl border-[6px] border-white shadow-card-lg dark:border-slate-900">
              <img
                src="https://images.pexels.com/photos/1181354/pexels-photo-1181354.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Cloud engineer working in a data centre"
                loading="eager"
                className="aspect-[4/3] w-full object-cover"
              />
            </div>
          </div>

          {/* Small overlapping image, top-left */}
          <div className="hero-rise absolute left-[6%] top-[10%] w-[30%]" style={{ animationDelay: '0.6s' }}>
            <div className="hero-float-fast overflow-hidden rounded-2xl border-[5px] border-white shadow-card-lg dark:border-slate-900">
              <img
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Developer writing code on multiple monitors"
                loading="eager"
                className="aspect-square w-full object-cover"
              />
            </div>
          </div>

          {/* Stat card, bottom-right */}
          <div className="hero-rise absolute bottom-0 right-[4%] hidden sm:block" style={{ animationDelay: '0.8s' }}>
            <div className="hero-float-fast rounded-2xl border border-slate-200 bg-white/95 p-4 shadow-card-lg backdrop-blur dark:border-slate-700 dark:bg-slate-900/95">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300">
                  <Cloud className="h-5 w-5" />
                </span>
                <div>
                  <div className="text-xl font-bold leading-none text-slate-900 dark:text-white">99.9%</div>
                  <div className="mt-1 text-xs text-slate-500 dark:text-slate-400">uptime on managed hosting</div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating labels */}
          <div className="hero-rise absolute right-[6%] top-[-3%] hidden sm:block" style={{ animationDelay: '0.95s' }}>
            <div className="hero-float-slow flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-card backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-100">
              <ShoppingBag className="h-3.5 w-3.5 text-brand-600" /> Shopify & WooCommerce stores
            </div>
          </div>
          <div className="hero-rise absolute bottom-[26%] left-[42%] hidden sm:block" style={{ animationDelay: '1.1s' }}>
            <div className="hero-float flex items-center gap-2 rounded-full border border-slate-200 bg-white/95 px-3 py-1.5 text-xs font-semibold text-slate-800 shadow-card backdrop-blur dark:border-slate-700 dark:bg-slate-900/95 dark:text-slate-100">
              <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" /> Trusted by 40+ clients
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Hero;
