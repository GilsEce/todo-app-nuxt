export default {
  vue: {
    config: {
      productionTip: true,
      devtools: false
    }
  },
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: process.env.npm_package_name || "",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: { color: "#fff" },
  /*
   ** Global CSS
   */
  css: ["~assets/scss/global.scss"],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss",
    "@nuxtjs/composition-api"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/style-resources"],

  /*
   ** style resource
   */
  styleResources: {
    scss: ["./assets/scss/*.scss"]
  },
  /*
   ** Build configuration
   */
  build: {
    transpile: [new RegExp(".*@babel/runtime/helpers/esm/.*", "ig")],
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
};
