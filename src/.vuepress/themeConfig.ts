import { defineThemeConfig } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";

export default defineThemeConfig({
  hostname: "http://blog.sciroccogti.top",

  // author: {
  //   name: "Mr.Hope",
  //   url: "https://mrhope.site",
  // },

  iconPrefix: "iconfont icon-",

  logo: "/favicon.ico",

  // repo: "https://github.com/vuepress-theme-hope/vuepress-theme-hope",
  repoDisplay: false,

  // docsDir: "demo/src", // TODO: ?

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: '<a href="https://github.com/vuepress-theme-hope/vuepress-theme-hope">主题 vuepress-theme-hope</a><br><a href="http://beian.miit.gov.cn/" target="_blank">苏ICP备20000268号-1</a>',

  displayFooter: true,

  // // page meta
  // metaLocales: {
  //   editLink: "在 GitHub 上编辑此页",
  // },

  blog: {
    name: "无风引漩",
    avatar: "/avatar.jpg",
    roundAvatar: true,
    // description: "一个前端开发者",
    intro: "/about/",
    // sidebarDisplay: "mobile",
    timeline: "时间线",
    medias: {
      Email: "scirocco_gti@yeah.net",
      Github: "https://github.com/Sciroccogti",
      Linkedin: "https://www.linkedin.com/in/%E9%80%B8%E5%B8%86-%E5%BC%A0-372819150/",
      Zhihu: "https://www.zhihu.com/people/wu-feng-yin-xuan",
      BiliBili: [
        "https://space.bilibili.com/11850306",
        "bilibili-fill" // TODO
      ]
    },
  },

  // encrypt: {
  //   config: {
  //     "/guide/encrypt.html": ["1234"],
  //   },
  // },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    comment: {
      type: "waline",
      serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    },

    mdEnhance: {
      enableAll: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
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
