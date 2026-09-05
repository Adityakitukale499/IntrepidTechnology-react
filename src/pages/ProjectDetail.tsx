import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CheckCircle2, ExternalLink, Lock } from 'lucide-react';
import Seo from '../components/Seo';
import { PageHero, Section, Badge, Button } from '../components/ui';
import { CtaBand } from '../components/home/HomeSections';
import { PROJECTS } from '../data/content';
import { SERVICES } from '../data/services';

const ProjectDetail: React.FC = () => {
  const { slug = '' } = useParams();
  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) return <Navigate to="/portfolio" replace />;

  const service = SERVICES.find((s) => s.name.includes(project.service) || s.shortName === project.service.replace(' Development', ''));
  const others = PROJECTS.filter((p) => p.slug !== project.slug).slice(0, 3);

  return (
    <>
      <Seo
        title={`${project.title} | Case Study`}
        description={project.summary}
        type="article"
      />
      <PageHero
        eyebrow={`${project.category} · ${project.service}`}
        title={project.title}
        description={project.summary}
        breadcrumbs={[{ name: 'Work', to: '/portfolio' }, { name: project.category }]}
        image={project.image}
        imageAlt={project.title}
      >
        <Button to="/contact" icon>
          Discuss a similar project
        </Button>
        {project.url && (
          <Button href={project.url} variant="secondary">
            Visit live site <ExternalLink className="h-4 w-4" />
          </Button>
        )}
      </PageHero>

      <Section>
        <div className="grid gap-12 lg:grid-cols-3">
          <div className="space-y-10 lg:col-span-2">
            {project.confidential && (
              <div className="flex items-start gap-3 rounded-xl border border-slate-200 bg-slate-50 p-4 text-sm text-slate-600 dark:border-slate-800 dark:bg-slate-900/60 dark:text-slate-400">
                <Lock className="mt-0.5 h-4 w-4 flex-shrink-0 text-slate-500" />
                <span>
                  This system was delivered under a non-disclosure agreement. The client name, screenshots and exact
                  figures are withheld; the description is anonymised.
                </span>
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">The challenge</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.challenge}</p>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">What we did</h2>
              <p className="mt-4 text-base leading-relaxed text-slate-600 dark:text-slate-400">{project.solution}</p>
            </div>
            {project.mobileImage && (
              <div className="grid gap-6 sm:grid-cols-[2fr_1fr] sm:items-start">
                <img src={project.image} alt={`${project.title} on desktop`} loading="lazy" className="w-full rounded-2xl border border-slate-200 shadow-card dark:border-slate-800" />
                <img src={project.mobileImage} alt={`${project.title} on mobile`} loading="lazy" className="mx-auto w-full max-w-[220px] rounded-2xl border border-slate-200 shadow-card dark:border-slate-800" />
              </div>
            )}
            <div>
              <h2 className="text-2xl font-bold text-slate-900 dark:text-white">Results</h2>
              <ul className="mt-4 space-y-3">
                {project.results.map((r) => (
                  <li key={r} className="flex items-start gap-3 text-base text-slate-700 dark:text-slate-300">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-emerald-600 dark:text-emerald-400" />
                    {r}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <aside className="space-y-8">
            <div className="rounded-2xl border border-slate-200 p-6 dark:border-slate-800">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Client</h3>
              <p className="mt-2 text-base font-medium text-slate-900 dark:text-white">{project.client}</p>
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Service</h3>
              {service ? (
                <Link to={`/services/${service.slug}`} className="mt-2 block text-base font-medium text-brand-600 hover:underline dark:text-brand-400">
                  {service.name}
                </Link>
              ) : (
                <p className="mt-2 text-base font-medium text-slate-900 dark:text-white">{project.service}</p>
              )}
              <h3 className="mt-6 text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">Technologies</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <Badge key={t}>{t}</Badge>
                ))}
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">More work</h3>
              <ul className="mt-4 space-y-4">
                {others.map((o) => (
                  <li key={o.slug}>
                    <Link to={`/portfolio/${o.slug}`} className="flex gap-4 group">
                      <img src={o.image} alt="" loading="lazy" className="h-16 w-20 flex-shrink-0 rounded-lg object-cover" />
                      <span>
                        <span className="block text-sm font-semibold text-slate-900 group-hover:text-brand-600 dark:text-white">{o.title}</span>
                        <span className="block text-xs text-slate-500 dark:text-slate-400">{o.category}</span>
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </aside>
        </div>
      </Section>
      <CtaBand />
    </>
  );
};

export default ProjectDetail;
