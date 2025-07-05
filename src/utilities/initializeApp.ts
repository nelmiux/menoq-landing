import { setupWorker } from 'msw/browser';

import { appName, environment, urlBase } from '@/config';

const prependBaseAppInfo = () => {
  document.querySelectorAll('base').forEach((link) => link.setAttribute('href', `/${urlBase}/`));
  document.title = appName;
};

export const initializeApiMock = async (worker: ReturnType<typeof setupWorker>) => {
  if (process.env.REACT_APP_ENV === environment.Local) {
    // Mocking back-end apis
    await worker.start({
      onUnhandledRequest: 'bypass',
      serviceWorker: {
        url: `${window.location.origin}/${urlBase}/mockServiceWorker.js`,
      },
    });
  }
};

export const initializeApp = async (worker: ReturnType<typeof setupWorker>) => {
  // Injecting app name
  prependBaseAppInfo();

  // Mocking back-end apis
  if (worker) {
    await initializeApiMock(worker);
  }
};
