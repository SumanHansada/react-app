import * as Sentry from "@sentry/browser";

function init() {
  Sentry.init({
    dsn: "https://f5064590402c490c97ec46791baa8255@sentry.io/1867784",
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
