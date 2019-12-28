import axios from "axios";
import { toast } from "react-toastify";
import * as Sentry from "@sentry/browser";

Sentry.init({
  dsn: "https://f5064590402c490c97ec46791baa8255@sentry.io/1867784",
  environment: "development-test",
  release: "1-0-0"
});

axios.interceptors.response.use(null, error => {
  const expectedError =
    error.response &&
    error.response.status >= 400 &&
    error.response.status < 500;

  if (!expectedError) {
    // Unexpected Errors (network down, server down, db down, bug)
    // - Log them
    // - Display a generic and friendly error message
    Sentry.captureException(error);
    toast.error("An unexpected error occured");
  }
  return Promise.reject(error);
});

export default {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  delete: axios.delete
};
