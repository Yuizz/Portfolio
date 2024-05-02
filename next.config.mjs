/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
       {
        source: '/',
        destination: 'https://iamyuizzdev.notion.site/Portfolio-ab6282f669234bb784acff04a3bad437',
        permanent: false,
      },
    ]
  }
};

function withSVG(nextConfig) {
  return {
    ...nextConfig,
    webpack(config, options) {
      config.module.rules.push({
        test: /\.svg$/,
        use: [{ loader: "@svgr/webpack", options: {icon:true}}],
      });

      return config;
    }
  };
}

export default withSVG(nextConfig);
