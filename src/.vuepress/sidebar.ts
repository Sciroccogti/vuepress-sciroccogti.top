import { defineSidebarConfig } from "vuepress-theme-hope";

export default defineSidebarConfig({
  "/notes/": [
      "",
      {
          text: "信息论与编码",
          prefix: "信息论与编码/",
          children: [
              "",
              "info1.md",
              "info2.md",
          ]
      },
      {
          text: "英文技术写作",
          prefix: "英文技术写作/",
          children: [
              "",
              "刷题笔记.md",
          ]
      },
      {
          text: "随机过程",
          prefix: "随机过程/",
          children: [
              "",
              "random-1.md",
              "random-2-3.md",
              "random-4-5.md",
              "random-6.md",
              "random-7.md",
              "random-8-9.md",
              "random-10-11-12.md",
              "random-13-14-15.md",
          ]
      },
      "现代数字通信技术/",
      "并发/",
      {
          text: "工程矩阵",
          prefix: "工程矩阵/",
          children: [
              "",
              "matrix-0.md",
              "matrix-1.md",
              "matrix-2.md",
              "matrix-3.md",
              "matrix-4.md",
              "matrix-5.md",
              "matrix-6.md",
          ]
      },
      {
          text: "集成电路CAD",
          prefix: "集成电路CAD/",
          children: [
              "cad-0.md",
              "cad-1.md",
              "cad-2.md",
              "cad-3.md",
              "cad-4.md",
              "cad-5.md",]
      },
      "计算机视觉/",
      {
          text: "计网",
          prefix: "计网/",
          children: [
              "",
              "cn-0.md",
              "cn-1.md",
              "cn-3.md",
              "cn-4.md",
              "cn-5.md",
              "cn-6.md",]
      },
      {
          text: "模电",
          prefix: "模电/",
          children: [
              "",
              "AC-0.md",
              "AC-1.md",
              "AC-2.md",
              "AC-3.md",]
      },
      {
          text: "信号与系统",
          prefix: "信号与系统/",
          children: [
              "",
              "Signals&Systems.md",]
      },
      "Circuit.md",
  ],

  "/": [
      "" /* / */,
      "notes/" /* /contact.html */,
  ],

});
