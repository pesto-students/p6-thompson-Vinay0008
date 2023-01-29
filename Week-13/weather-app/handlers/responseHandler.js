import HTTP_STATUS_CODES from "../httpStatusCodes.js";

const headerContentType = {
  "Content-Type": "application/json",
};

export const ok = (res, data) => {
  res.writeHeader(HTTP_STATUS_CODES.OK, headerContentType);
  res.write(JSON.stringify(data));
};

export const badRequest = (res, errorMessage = "Request is invalid") => {
  res.writeHeader(HTTP_STATUS_CODES.BAD_REQUEST, headerContentType);
  res.write(errorMessage);
};

export const notFound = (res) => {
  res.writeHeader(HTTP_STATUS_CODES.NOT_FOUND, headerContentType);
  res.write("Route Not found");
};
