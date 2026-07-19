import React from 'react';
import { useNavigate } from 'react-router-dom';
import Icon from '../components/ui/AppIcon';

export default function NotFound() {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate('/');
  };

  const handleGoBack = () => {
    if (typeof window !== 'undefined') {
      window.history?.back();
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="text-center max-w-md">
        <div className="flex justify-center mb-6">
          <div className="relative">
            <h1 className="text-9xl font-bold text-primary opacity-20">404</h1>
          </div>
        </div>

        <h2 className="text-2xl font-medium text-brand-dark mb-2">Page Not Found</h2>
        <p className="text-brand-text mb-8">
          The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back!
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={handleGoBack}
            className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 font-medium hover:bg-primary-light transition-colors duration-200"
          >
            <Icon name="ArrowLeftIcon" size={16} />
            Go Back
          </button>

          <button
            onClick={handleGoHome}
            className="inline-flex items-center justify-center gap-2 border border-brand-border bg-white text-brand-dark px-6 py-3 font-medium hover:bg-secondary transition-colors duration-200"
          >
            <Icon name="HomeIcon" size={16} />
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
