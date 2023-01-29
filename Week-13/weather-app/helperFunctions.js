import url from "url";

export const getQueryParam = (requestUrl, paramName) => {
  const urlSearchParams = new URLSearchParams(url.parse(requestUrl).query);
  return urlSearchParams.get(paramName);
};
