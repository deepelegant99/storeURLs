const url = require("url");

const urlInfo = (url) => {
  const curl = new URL(url);
  const url_data = {
    "url": curl.toString(),
    "host": curl.host,
    "host name": curl.hostname,
    "path name": curl.pathname,
    "search": curl.search,
  };
  return url_data;
};

module.exports = urlInfo;
