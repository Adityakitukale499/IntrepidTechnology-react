import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ChevronRight } from 'lucide-react';

/* ------------------------------------------------------------------ */
/* Layout                                                              */
/* ------------------------------------------------------------------ */

type Tone = 'white' | 'muted' | 'dark' | 'brand';

const toneClass: Record<Tone, string> = {
  white: 'bg-white dark:bg-slate-950',
  muted: 'bg-slate-50 dark:bg-slate-900/60',
  dark: 'bg-slate-900 text-white dark:bg-slate-900',
  brand: 'bg-brand-600 text-white',
};

export const Section: React.FC<{
  id?: string;
  tone?: Tone;
  className?: string;
  children: React.ReactNode;
}> = ({ id, tone = 'white', className = '', children }) => (
  <section id={id} className={`py-16 sm:py-20 lg:py-24 ${toneClass[tone]} ${className}`}>
    <div className="container-x">{children}</div>
  </section>
);

export const SectionHeading: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  align?: 'left' | 'center';
  className?: string;
  as?: 'h1' | 'h2';
  light?: boolean;
}> = ({ eyebrow, title, description, align = 'center', className = '', as = 'h2', light }) => {
  const Tag = as;
  return (
    <div className={`${align === 'center' ? 'mx-auto text-center' : ''} max-w-3xl ${className}`}>
      {eyebrow && <span className={`eyebrow mb-3 ${light ? '!text-brand-200' : ''}`}>{eyebrow}</span>}
      <Tag
        className={`text-3xl font-bold tracking-tight sm:text-4xl ${
          light ? 'text-white' : 'text-slate-900 dark:text-white'
        }`}
      >
        {title}
      </Tag>
      {description && (
        <p className={`mt-4 text-lg leading-relaxed ${light ? 'text-slate-300' : 'text-slate-600 dark:text-slate-400'}`}>
          {description}
        </p>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/* Buttons                                                             */
/* ------------------------------------------------------------------ */

type Variant = 'primary' | 'secondary' | 'ghost' | 'white';

const variantClass: Record<Variant, string> = {
  primary:
    'bg-brand-600 text-white hover:bg-brand-700 focus-visible:outline-brand-600 shadow-sm',
  secondary:
    'border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-white dark:hover:bg-slate-800',
  ghost: 'text-brand-700 hover:bg-brand-50 dark:text-brand-300 dark:hover:bg-brand-950/40',
  white: 'bg-white text-brand-700 hover:bg-brand-50 shadow-sm',
};

interface ButtonProps {
  to?: string;
  href?: string;
  variant?: Variant;
  size?: 'md' | 'lg';
  icon?: boolean;
  className?: string;
  children: React.ReactNode;
  type?: 'button' | 'submit';
  disabled?: boolean;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  className = '',
  children,
  type = 'button',
  disabled,
  onClick,
}) => {
  const classes = `group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${
    size === 'lg' ? 'px-6 py-3.5 text-base' : 'px-5 py-2.5 text-sm'
  } ${variantClass[variant]} ${className}`;

  const content = (
    <>
      {children}
      {icon && <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />}
    </>
  );

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    );
  }
  if (href) {
    return (
      <a
        href={href}
        className={classes}
        {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}
        onClick={onClick}
      >
        {content}
      </a>
    );
  }
  return (
    <button type={type} className={classes} disabled={disabled} onClick={onClick}>
      {content}
    </button>
  );
};

/* ------------------------------------------------------------------ */
/* Small pieces                                                        */
/* ------------------------------------------------------------------ */

export const Badge: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
  <span
    className={`inline-flex items-center rounded-full border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs font-medium text-slate-700 dark:border-slate-700 dark:bg-slate-800 dark:text-slate-300 ${className}`}
  >
    {children}
  </span>
);

export const Card: React.FC<{ children: React.ReactNode; className?: string; hover?: boolean }> = ({
  children,
  className = '',
  hover = true,
}) => (
  <div
    className={`rounded-2xl border border-slate-200 bg-white p-7 dark:border-slate-800 dark:bg-slate-900 ${
      hover ? 'transition-all duration-300 hover:-translate-y-1 hover:shadow-card-lg' : ''
    } ${className}`}
  >
    {children}
  </div>
);

export const IconTile: React.FC<{ icon: React.ElementType; className?: string }> = ({ icon: Icon, className = '' }) => (
  <div
    className={`flex h-12 w-12 items-center justify-center rounded-xl bg-brand-50 text-brand-600 dark:bg-brand-950/60 dark:text-brand-300 ${className}`}
  >
    <Icon className="h-6 w-6" />
  </div>
);

export const Breadcrumbs: React.FC<{ items: { name: string; to?: string }[] }> = ({ items }) => (
  <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1 text-sm text-slate-500 dark:text-slate-400">
    <Link to="/" className="hover:text-brand-600">
      Home
    </Link>
    {items.map((item) => (
      <React.Fragment key={item.name}>
        <ChevronRight className="h-3.5 w-3.5" />
        {item.to ? (
          <Link to={item.to} className="hover:text-brand-600">
            {item.name}
          </Link>
        ) : (
          <span className="text-slate-700 dark:text-slate-300">{item.name}</span>
        )}
      </React.Fragment>
    ))}
  </nav>
);

/** Hero used on all inner pages. */
export const PageHero: React.FC<{
  eyebrow?: string;
  title: React.ReactNode;
  description?: React.ReactNode;
  breadcrumbs?: { name: string; to?: string }[];
  children?: React.ReactNode;
  image?: string;
  imageAlt?: string;
}> = ({ eyebrow, title, description, breadcrumbs, children, image, imageAlt }) => (
  <section className="relative overflow-hidden border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60">
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(26,92,245,0.10),transparent_55%)]"
    />
    <div className="container-x relative py-16 sm:py-20">
      <div className={`grid items-center gap-12 ${image ? 'lg:grid-cols-2' : ''}`}>
        <div className="max-w-3xl">
          {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
          {eyebrow && <span className="eyebrow mb-3">{eyebrow}</span>}
          <h1 className="text-4xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-5xl">{title}</h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{description}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </div>
        {image && (
          <div className="relative">
            <img
              src={image}
              alt={imageAlt ?? ''}
              loading="eager"
              className="aspect-[4/3] w-full rounded-2xl object-cover shadow-card-lg"
            />
          </div>
        )}
      </div>
    </div>
  </section>
);

export const CheckItem: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <li className="flex items-start gap-3 text-slate-700 dark:text-slate-300">
    <span className="mt-1.5 inline-block h-2 w-2 flex-shrink-0 rounded-full bg-brand-500" />
    <span>{children}</span>
  </li>
);
