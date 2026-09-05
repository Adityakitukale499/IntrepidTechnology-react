import React from 'react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { Calendar, Clock, User, ArrowLeft } from 'lucide-react';
import Seo from '../components/Seo';
import { Breadcrumbs, Badge, Button } from '../components/ui';
import { BlogPreview, CtaBand } from '../components/home/HomeSections';
import { getPost, formatDate, type Block } from '../data/blog';
import { SITE } from '../data/site';
import { SERVICES } from '../data/services';

const renderBlock = (block: Block, i: number) => {
  switch (block.type) {
    case 'h2':
      return <h2 key={i}>{block.text}</h2>;
    case 'h3':
      return <h3 key={i}>{block.text}</h3>;
    case 'ul':
      return (
        <ul key={i}>
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'quote':
      return <blockquote key={i}>{block.text}</blockquote>;
    default:
      return <p key={i}>{block.text}</p>;
  }
};

const BlogPost: React.FC = () => {
  const { slug = '' } = useParams();
  const post = getPost(slug);
  if (!post) return <Navigate to="/blog" replace />;

  const relatedServices = SERVICES.filter((s) =>
    post.tags.some((t) => s.name.toLowerCase().includes(t.toLowerCase()) || s.technologies.some((x) => x.name.toLowerCase() === t.toLowerCase())),
  ).slice(0, 3);

  return (
    <>
      <Seo
        title={post.title}
        description={post.metaDescription}
        image={post.image}
        type="article"
        publishedTime={post.date}
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'BlogPosting',
          headline: post.title,
          description: post.metaDescription,
          image: post.image,
          datePublished: post.date,
          dateModified: post.date,
          author: { '@type': 'Organization', name: SITE.name },
          publisher: { '@type': 'Organization', name: SITE.name, logo: { '@type': 'ImageObject', url: `${SITE.url}/logo.png` } },
          mainEntityOfPage: `${SITE.url}/blog/${post.slug}`,
          keywords: post.tags.join(', '),
        }}
      />

      <article>
        <header className="border-b border-slate-200 bg-slate-50 dark:border-slate-800 dark:bg-slate-900/60">
          <div className="container-x max-w-4xl py-14">
            <Breadcrumbs items={[{ name: 'Blog', to: '/blog' }, { name: post.category }]} />
            <Badge>{post.category}</Badge>
            <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight text-slate-900 dark:text-white sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-slate-600 dark:text-slate-400">{post.excerpt}</p>
            <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-500 dark:text-slate-400">
              <span className="inline-flex items-center gap-1.5">
                <User className="h-4 w-4" /> {post.author}, {post.authorRole}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Calendar className="h-4 w-4" /> <time dateTime={post.date}>{formatDate(post.date)}</time>
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Clock className="h-4 w-4" /> {post.readTime}
              </span>
            </div>
          </div>
        </header>

        <div className="container-x max-w-4xl py-12">
          <img
            src={post.image}
            alt={post.imageAlt}
            className="aspect-[16/9] w-full rounded-2xl object-cover shadow-card"
          />
          <div className="prose-article mt-10">{post.content.map(renderBlock)}</div>

          <div className="mt-10 flex flex-wrap gap-2">
            {post.tags.map((t) => (
              <Badge key={t}>{t}</Badge>
            ))}
          </div>

          {relatedServices.length > 0 && (
            <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50 p-8 dark:border-slate-800 dark:bg-slate-900/60">
              <h2 className="text-lg font-semibold text-slate-900 dark:text-white">Need help with this?</h2>
              <p className="mt-2 text-sm text-slate-600 dark:text-slate-400">Related services from our team:</p>
              <div className="mt-4 flex flex-wrap gap-3">
                {relatedServices.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-800 transition-colors hover:border-brand-300 hover:text-brand-700 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-200"
                  >
                    {s.shortName}
                  </Link>
                ))}
              </div>
              <div className="mt-6">
                <Button to="/contact" icon>
                  Talk to us
                </Button>
              </div>
            </div>
          )}

          <div className="mt-10">
            <Link to="/blog" className="inline-flex items-center gap-2 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400">
              <ArrowLeft className="h-4 w-4" /> Back to all articles
            </Link>
          </div>
        </div>
      </article>

      <BlogPreview exclude={post.slug} title="More from the blog" />
      <CtaBand />
    </>
  );
};

export default BlogPost;
