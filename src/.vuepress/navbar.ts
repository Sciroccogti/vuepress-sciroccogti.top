import { defineNavbarConfig } from "vuepress-theme-hope";

export default defineNavbarConfig([
  { text: "Home", link: "/", icon: "home" },
  { text: "Notes", icon: "note", link: "/notes/" },
  { text: "Friends", icon: "link", link: "/friends/" },
  {
    text: "Others", icon: "list",
    children: [
      { text: "Minecraft", link: "https://mc.sciroccogti.top", icon: "minecraft" },
      { text: "Pokemon", link: "http://ps.sciroccogti.top-7653.psim.us/", icon: "pokemon" },
      { text: "Bangumis", link: "/bangumis/", icon: "bilibili-fill" },
      { text: "Tieba-Sign", link: "http://tieba.sciroccogti.top", icon: "tieba" },
      { text: "NAS", link: "https://nas.sciroccogti.top", icon: "ts-tubiao_naservice" },
      { text: "Snapdrop", link: "https://snapdrop.sciroccogti.top", icon: "airdrop" },
    ]
},
  { text: "About", icon: "like", link: "/about.html" },
],);
