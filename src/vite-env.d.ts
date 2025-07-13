/// <reference types="vite/client" />

declare global {
  interface Window {
    grecaptcha: {
      execute: (siteKey: string, options: { action: string }) => Promise<string>;
      execute: (widgetId: number) => void;
      render: (container: string | HTMLElement, parameters: {
        sitekey: string;
        callback?: (token: string) => void;
        size?: 'normal' | 'compact' | 'invisible';
        theme?: 'light' | 'dark';
      }) => number;
      ready: (callback: () => void) => void;
    };
    recaptchaConfig: {
      invisibleSiteKey: string;
      v3SiteKey: string;
    };
    invisibleRecaptchaWidget: number | null;
    pageRecaptchaToken: string | null;
    executeV3Recaptcha: (action: string) => Promise<string>;
  }
}