
// ref: https://umijs.org/config/
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    ['umi-plugin-react', {
      antd: true,
      dva: {
        immer: true
      },
      dynamicImport: true,
      title: 'umi-dva-antd',
      dll: true,
      routes: {
        exclude: [
          /model(s?)\.(j|t)sx?$/,
          /service(s?)\.(j|t)sx?$/,
          /models\//,
          /components\//,
          /untils\//],
      },
      hardSource: false,
    }],
  ],
  outputPath:'/dist/',
  // base:'/dist/',
  publicPath:'/dist/',
  define: {
    'process.env': {},
    'process.env.NODE_ENV': process.env.NODE_ENV,
    'process.env.API_ENV': process.env.API_ENV,
    'process.env.PROXY_ENV': process.env.PROXY_ENV,
  },
  theme: "./theme.config.js",
  targets:{
    ie:9
  },
  hash: true,
  alias:{
    assets: `${__dirname}/src/assets`,
    components: `${__dirname}/src/components`,
    utils: `${__dirname}/src/utils`,
    themes: `${__dirname}/src/themes`,
  },
  proxy: {
    "/api": {
      //"target": "http://192.168.1.210:8080",
      target: process.env.API_ENV,
      // "target": "https://test-Api.yconsume.com",
      changeOrigin: true,
      pathRewrite: { "^/api/" : "/api" }
    }
  },
}
