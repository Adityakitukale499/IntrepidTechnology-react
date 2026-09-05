import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { SITE } from '../data/site';
import { SERVICES } from '../data/services';

type Status = 'idle' | 'submitting' | 'success' | 'error';

const inputClass =
  'w-full rounded-lg border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 placeholder-slate-400 transition-colors focus:border-brand-500 focus:outline-none focus:ring-2 focus:ring-brand-500/30 dark:border-slate-700 dark:bg-slate-950 dark:text-white dark:placeholder-slate-500';

const labelClass = 'mb-1.5 block text-sm font-medium text-slate-700 dark:text-slate-300';

const ContactForm: React.FC<{ compact?: boolean }> = ({ compact }) => {
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '', service: '', message: '' });
  const [status, setStatus] = useState<Status>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status === 'submitting') return;
    setStatus('submitting');
    setErrorMessage('');

    try {
      const data = new URLSearchParams();
      data.append('fullname', form.name);
      data.append('email', form.email);
      data.append('phone', form.phone);
      data.append('subject', form.service ? `Enquiry: ${form.service}` : 'Website enquiry');
      data.append('message', form.company ? `Company: ${form.company}\n\n${form.message}` : form.message);

      const response = await fetch(SITE.contactEndpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: data.toString(),
      });
      if (!response.ok) throw new Error(`HTTP ${response.status}`);
      const result = await response.json();
      if (!result.success) throw new Error(result.message || 'Submission failed');

      setStatus('success');
      setForm({ name: '', email: '', phone: '', company: '', service: '', message: '' });
    } catch (err) {
      setStatus('error');
      setErrorMessage(
        err instanceof Error && err.message && !err.message.startsWith('HTTP')
          ? err.message
          : 'We could not send your message. Please try again or email us directly.',
      );
    }
  };

  if (status === 'success') {
    return (
      <div className="flex flex-col items-center rounded-2xl border border-emerald-200 bg-emerald-50 p-10 text-center dark:border-emerald-900 dark:bg-emerald-950/40">
        <CheckCircle2 className="h-10 w-10 text-emerald-600 dark:text-emerald-400" />
        <h3 className="mt-4 text-xl font-semibold text-slate-900 dark:text-white">Thank you, we have your message.</h3>
        <p className="mt-2 max-w-md text-sm text-slate-600 dark:text-slate-400">{SITE.responseTime}</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-sm font-semibold text-brand-600 hover:underline dark:text-brand-400"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="space-y-5" noValidate={false}>
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Full name <span className="text-red-500">*</span>
          </label>
          <input id="name" name="name" type="text" required value={form.name} onChange={onChange} className={inputClass} placeholder="Your name" autoComplete="name" />
        </div>
        <div>
          <label htmlFor="email" className={labelClass}>
            Work email <span className="text-red-500">*</span>
          </label>
          <input id="email" name="email" type="email" required value={form.email} onChange={onChange} className={inputClass} placeholder="you@company.com" autoComplete="email" />
        </div>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input id="phone" name="phone" type="tel" value={form.phone} onChange={onChange} className={inputClass} placeholder="+91 98765 43210" autoComplete="tel" />
        </div>
        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input id="company" name="company" type="text" value={form.company} onChange={onChange} className={inputClass} placeholder="Company name" autoComplete="organization" />
        </div>
      </div>

      {!compact && (
        <div>
          <label htmlFor="service" className={labelClass}>
            What do you need help with?
          </label>
          <select id="service" name="service" value={form.service} onChange={onChange} className={inputClass}>
            <option value="">Select a service</option>
            {SERVICES.map((s) => (
              <option key={s.slug} value={s.shortName}>
                {s.shortName}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>
      )}

      <div>
        <label htmlFor="message" className={labelClass}>
          Project details <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={compact ? 4 : 6}
          value={form.message}
          onChange={onChange}
          className={`${inputClass} resize-none`}
          placeholder="Tell us about your goals, timeline and anything you already have in place."
        />
      </div>

      {status === 'error' && (
        <div role="alert" className="flex items-start gap-3 rounded-lg border border-red-200 bg-red-50 p-4 text-sm text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-300">
          <AlertCircle className="mt-0.5 h-4 w-4 flex-shrink-0" />
          <span>
            {errorMessage} You can also reach us at{' '}
            <a href={`mailto:${SITE.email}`} className="font-semibold underline">
              {SITE.email}
            </a>
            .
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={status === 'submitting'}
        className="group inline-flex w-full items-center justify-center gap-2 rounded-lg bg-brand-600 px-6 py-3.5 font-semibold text-white shadow-sm transition-colors hover:bg-brand-700 disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === 'submitting' ? 'Sending…' : 'Send message'}
        <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
      </button>
      <p className="text-xs text-slate-500 dark:text-slate-400">
        By submitting this form you agree to our{' '}
        <a href="/privacy-policy" className="underline">
          privacy policy
        </a>
        . We never share your details.
      </p>
    </form>
  );
};

export default ContactForm;
