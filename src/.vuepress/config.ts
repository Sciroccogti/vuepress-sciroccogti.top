import { defineHopeConfig } from "vuepress-theme-hope";
import themeConfig from "./themeConfig";

export default defineHopeConfig({
  base: "/",

  dest: "./dist",

  head: [
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
      },
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_1933138_c8e4ncmn8ro.css",
      },
    ],
  ],

  locales: {
    "/": {
      lang: "zh-CN",
      // title: "主题演示",
      // description: "vuepress-theme-hope 的演示",
    },
  },

  themeConfig,
});
