import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://ea2c46b2d8544b6893ec875f64c8f774@sentry.io/1868108",
    environment: "development-test",
    release: "1-0-0"
  });
}

function log(error) {
  Sentry.captureException(error);
}

export default {
  init,
  log
};
