const { config, sidebarConfig } = require("vuepress-theme-hope");
const sideBarConfig = require("./sidebar.js");

module.exports = config({
  title: "无风引漩的小站",
  // description: "A demo for vuepress-theme-hope",

  dest: "./dist",

  head: [
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/react/umd/react.production.min.js" },
    ],
    [
      "script",
      {
        src: "https://cdn.jsdelivr.net/npm/react-dom/umd/react-dom.production.min.js",
      },
    ],
    ["script", { src: "https://cdn.jsdelivr.net/npm/vue/dist/vue.min.js" }],
    [
      "script",
      { src: "https://cdn.jsdelivr.net/npm/@babel/standalone/babel.min.js" },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
    },
  },

  themeConfig: {
    logo: "/favicon.ico",
    hostname: "http://blog.sciroccogti.top",

    author: false,
    // repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",

    nav: [
      { text: "Home", link: "/", icon: "home" },
      { text: "Notes", icon: "note", link: "/notes/" },
      { text: "Friends", icon: "link", link: "/friends/" },
      {
        text: "Others", icon: "list",
        items: [
          { text: "Minecraft", link: "https://mc.sciroccogti.top", icon: "minecraft" },
          { text: "Pokemon", link: "http://ps.sciroccogti.top-7653.psim.us/", icon: "pokemon" },
          { text: "Bangumis", link: "/bangumis/", icon: "bilibili-fill" },
          { text: "Tieba-Sign", link: "http://tieba.sciroccogti.top", icon: "tieba" },
          { text: "NAS", link: "https://nas.sciroccogti.top", icon: "ts-tubiao_naservice" },
          { text: "Snapdrop", link: "https://snapdrop.sciroccogti.top", icon: "airdrop" },
        ]
    },
      { text: "About", icon: "like", link: "/about/" },
    ],

    sidebar: sideBarConfig,

    displayAllHeaders: true, // 显示所有页面的标题链接
    activeHeaderLinks: false, // 关闭活动的标题链接

    locales: {
      "/": {
        lang: "zh-CN",
      },
    },

    blog: {
      avatar: "avatar.jpg",
      intro: "/about/",
      sidebarDisplay: "mobile",
      links: {
        Email: "scirocco_gti@yeah.net",
        Github: "https://github.com/Sciroccogti",
        Linkedin: "https://www.linkedin.com/in/%E9%80%B8%E5%B8%86-%E5%BC%A0-372819150/",
        Zhihu: "https://www.zhihu.com/people/wu-feng-yin-xuan",
      },
    },

    footer: {
      display: true,
      content: '<a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope">主题 vuepress-theme-hope</a><br><a href="http://beian.miit.gov.cn/" target="_blank">苏ICP备20000268号-1</a>',
    },

    // comment: {
    // type: "waline",
    // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    copyright: {
      status: "global",
    },

    git: {
      timezone: "Asia/Shanghai",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: [
          "highlight",
          "math",
          "search",
          "notes",
          "zoom",
          "anything",
          "audio",
          "chalkboard",
        ],
      },
    },

    pwa: {
      favicon: "/favicon.ico",
      cachePic: true,
      apple: {
        icon: "/pwaicons/512.png",
        statusBarColor: "black",
      },
      msTile: {
        image: "/pwaicons/144.png",
        color: "#ffffff",
      },
      manifest: {
        icons: [
          {
            src: "/pwaicons/maskable_icon.png",
            sizes: "512x512",
            purpose: "maskable",
            type: "image/png",
          },
          // {
          //   src: "/pwaicons/192.png",
          //   sizes: "192x192",
          //   purpose: "maskable",
          //   type: "image/png",
          // },
          {
            src: "/pwaicons/512.png",
            sizes: "512x512",
            type: "image/png",
          },
          {
            src: "/pwaicons/192.png",
            sizes: "192x192",
            type: "image/png",
          },
        ],
        shortcuts: [
          {
            name: "Notes",
            short_name: "Notes",
            url: "/notes/",
            icons: [
              {
                src: "/pwaicons/maskable_icon.png",
                sizes: "512x512",
                purpose: "maskable",
                type: "image/png",
              },
              {
                src: "/pwaicons/512.png",
                sizes: "512x512",
                purpose: "monochrome",
                type: "image/png",
              },
            ],
          },
        ],
      },
    },
  },
});
