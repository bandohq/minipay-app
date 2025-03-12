// This file configures the initialization of Sentry on the server.
// The config you add here will be used whenever the server handles a request.
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://4b91402757ec2334a34b5c0c856d44e3@o4506577784602624.ingest.us.sentry.io/4508961764409344",

  // Setting this option to true will print useful information to the console while you're setting up Sentry.
  debug: false,
});
