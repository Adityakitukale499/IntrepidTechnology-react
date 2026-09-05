import React from 'react';
import Seo from '../components/Seo';
import { Button } from '../components/ui';

const NotFound: React.FC = () => (
  <>
    <Seo title="Page not found" description="The page you were looking for does not exist." noIndex />
    <section className="container-x flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <span className="eyebrow">Error 404</span>
      <h1 className="mt-3 text-4xl font-bold text-slate-900 dark:text-white">We could not find that page</h1>
      <p className="mt-4 max-w-md text-slate-600 dark:text-slate-400">
        The link may be out of date or the page may have moved. Try one of the links below.
      </p>
      <div className="mt-8 flex gap-3">
        <Button to="/" icon>
          Go home
        </Button>
        <Button to="/services" variant="secondary">
          Our services
        </Button>
      </div>
    </section>
  </>
);

export default NotFound;
