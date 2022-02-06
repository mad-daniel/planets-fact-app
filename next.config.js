const withImages = require("next-images");
module.exports = withImages();

module.exports = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: "/",
        destination: "/Earth",
        permanent: true,
      },
    ];
  },
};
