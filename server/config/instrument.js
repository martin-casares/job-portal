// Import with `import * as Sentry from "@sentry/node"` if you are using ESM
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node";

Sentry.init({
  dsn: "https://e13dfe097518de990c503361c01374f8@o4509505371439104.ingest.us.sentry.io/4509531555233792",
  integrations: [nodeProfilingIntegration(), Sentry.mongooseIntegration()],

  //tracesSampleRate: 1.0,

  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  // sendDefaultPii: true,
});

Sentry.profiler.startProfiler();
