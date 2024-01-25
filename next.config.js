/**
 * @type {import('next').NextConfig}
 */
// const nextConfig = {
// 	output: "export",
// 	images: { unoptimized: true },
// };

const nextConfig = {
  webpack: (config, options) => {
    // config.module.rules.push({
    //   test: /\.svg/,
    //   use: {
    //     loader: 'svg-url-loader',
    //   },
    // });
    config.module.rules.push({
      test: /\.(jpe?g|png|svg|eot|woff2?|ttf)$/i,
      use: {
        loader: 'file-loader',
        options: {
          name: '[path][name].[hash].[ext]',
          publicPath: '/_next/static',
          outputPath: 'static',
          emitFile: !options.isServer,
        },
      },
    });
    return config;
  },
};

module.exports = nextConfig;
