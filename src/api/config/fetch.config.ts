// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { urlApiPath } from "@/common/constants/urlApiPath";

const originalFetch = fetch;
// eslint-disable-next-line no-native-reassign,no-global-assign
fetch = (...args: [input: RequestInfo | URL, init?: RequestInit | undefined]): Promise<Response> => {
  return originalFetch.apply(this, args).then(async (data) => {
    if (data.status === 401) {
      const response = await originalFetch(process.env.BASE_URL + urlApiPath.auth.refresh, {
        method: "GET",
        credentials: "include",
      });

      if (response.status === 403 || response.status === 401) {
        // here logout
        return data;
      }

      const { access_token } = await response.json();

      return fetch(args[0], { ...args[1], headers: { ...args[1]?.headers, Authorization: `Bearer ${access_token}` } });
    }
    return data;
  });
};

export default fetch;
