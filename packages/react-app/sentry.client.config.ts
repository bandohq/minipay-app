// This file configures the initialization of Sentry on the client.
// The config you add here will be used whenever a users loads a page in their browser.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4b91402757ec2334a34b5c0c856d44e3@o4506577784602624.ingest.us.sentry.io/4508961764409344",

  // Add optional integrations for additional features
  integrations: [
    Sentry.replayIntegration(),
    Sentry.browserTracingIntegration(),
    Sentry.browserApiErrorsIntegration({
      setTimeout: true,
      setInterval: true,
      requestAnimationFrame: true,
      XMLHttpRequest: true,
      eventTarget: true,
    }),
    Sentry.captureConsoleIntegration(["error", "log"]),
  ],

  // Define how likely Replay events are sampled.
  // This sets the sample rate to be 10%. You may want this to be 100% while
  // in development and sample at a lower rate in production
  replaysSessionSampleRate: 0.1,

  // Define how likely Replay events are sampled when an error occurs.
  replaysOnErrorSampleRate: 1.0,

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
