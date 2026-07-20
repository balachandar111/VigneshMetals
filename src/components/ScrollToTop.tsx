import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * React Router doesn't reset scroll position between route changes.
 * This component watches the current path and scrolls the window back
 * to the top whenever it changes, so pages like Privacy Policy, Terms
 * & Conditions, and Disclaimer always open at the top instead of
 * inheriting the scroll position from the page you navigated from.
 */
export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [pathname]);

  return null;
}