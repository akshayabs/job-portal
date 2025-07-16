// config/instrument.js
import * as Sentry from "@sentry/node";
import { nodeProfilingIntegration } from "@sentry/profiling-node"; // ✅ named import is OK

Sentry.init({
  dsn: "https://f65615f843b181e24b7d125d0645ed90@o4509656547983360.ingest.us.sentry.io/4509656551653376",
  integrations: [nodeProfilingIntegration()],
//   tracesSampleRate: 1.0,
  profilesSampleRate: 1.0,
  sendDefaultPii: true,
});

export const Handlers = Sentry.Handlers;
export default Sentry;
