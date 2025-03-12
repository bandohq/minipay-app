// This file configures the initialization of Sentry for edge features (middleware, edge routes, and so on).
// The config you add here will be used whenever one of the edge features is loaded.
// Note that this config is unrelated to the Vercel Edge Runtime and is also required when running locally.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4b91402757ec2334a34b5c0c856d44e3@o4506577784602624.ingest.us.sentry.io/4508961764409344",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
