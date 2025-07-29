import React, { useEffect } from 'react';
import { useHistory, useLocation } from '@docusaurus/router';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Home(): JSX.Element {
  const { i18n } = useDocusaurusContext();
  const { currentLocale, defaultLocale } = i18n;
  const history = useHistory();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const basePath = '/ofeed-docs/intro/'; // Base path without any locale

    // Check if the current path includes a locale prefix (e.g., /en, /sv)
    const localePrefix = currentPath.split('/')[2]; // Get the third part of the path (locale)
    const hasLocale = !!localePrefix && localePrefix.length === 2; // Check if it's a valid locale (e.g., 'en', 'sv')

    // Define the expected path based on current locale
    const expectedPath =
      currentLocale === defaultLocale
        ? `${basePath}`//Default locale, no locale prefix
        : `/ofeed-docs/${currentLocale}/intro`; // Locale-specific path

    // If the current path does not match the expected path, redirect
    if (hasLocale && localePrefix !== currentLocale) {
      // If the locale is different, update the URL with the new locale
      history.replace(expectedPath); // Use replace to avoid pushing into history
    } else if (!hasLocale && currentLocale !== defaultLocale) {
      // If the locale is missing and we're not on the default locale, add the locale
      history.replace(expectedPath); // Add the locale to the URL
    }
  }, [currentLocale, defaultLocale, location.pathname, history]);

  return null; // This is purely for redirection
}
