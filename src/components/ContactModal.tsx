import React, { useEffect, useState } from 'react';

interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const APPSCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzP7ARODcBL894vGh_prBkAtboC2WRrcWzwlafYckVIdv6SkTKHy0Zc4TJi6uLrBYyW/exec';
const COOKIE_KEY = 'intrepid_contact_captured';

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    useEffect(() => {
        const onEsc = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };
        document.addEventListener('keydown', onEsc);
        return () => document.removeEventListener('keydown', onEsc);
    }, [onClose]);

    if (!isOpen) return null;

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (isSubmitting) return;

        try {
            setIsSubmitting(true);
            const data = new URLSearchParams();
            data.append('fullname', name || '');
            data.append('email', email || '');
            data.append('subject', 'First-visit capture');
            data.append('message', 'First-visit modal submission');
            data.append('phone', '');

            await fetch(APPSCRIPT_URL, {
                method: 'POST',
                mode: 'no-cors',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: data.toString(),
            });

            // Set cookie and localStorage so we do not show again
            const expires = new Date();
            expires.setDate(expires.getDate() + 180);
            document.cookie = `${COOKIE_KEY}=1; expires=${expires.toUTCString()}; path=/`;
            try { localStorage.setItem(COOKIE_KEY, '1'); } catch { }

            onClose();
        } catch (err) {
            onClose();
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="fixed inset-0 z-[1000] flex items-center justify-center">
            <div className="absolute inset-0 bg-black/50" onClick={onClose} />
            <div className="relative w-full max-w-lg mx-4 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-2xl">
                <button
                    aria-label="Close"
                    onClick={onClose}
                    className="absolute top-3 right-3 px-2 py-1 rounded-md text-gray-500 hover:text-gray-900 dark:hover:text-white"
                >
                    ×
                </button>
                <div className="p-6 sm:p-8">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Stay in touch</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-6">Share your details so we can reach out with relevant updates.</p>

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Full Name</label>
                            <input
                                type="text"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                                placeholder="Your Name"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">Email Address *</label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-4 py-3 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500"
                                placeholder="you@email.com"
                            />
                        </div>

                        <button
                            type="submit"
                            disabled={isSubmitting}
                            className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg hover:scale-[1.02] transition-all duration-300 disabled:opacity-70"
                        >
                            {isSubmitting ? 'Submitting...' : 'Submit'}
                        </button>
                        <p className="text-xs text-gray-500 dark:text-gray-400 text-center">We respect your privacy. Read our <a href="/privacy-policy" className="underline">Privacy Policy</a>.</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default ContactModal;
