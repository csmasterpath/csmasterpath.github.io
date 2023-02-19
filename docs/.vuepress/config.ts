import { viteBundler } from "@vuepress/bundler-vite";
import { webpackBundler } from "@vuepress/bundler-webpack";
import { docsearchPlugin } from "@vuepress/plugin-docsearch";
import { defineUserConfig } from "vuepress";
import { gungnirTheme, i18n } from "vuepress-theme-gungnir";
import { navbar, sidebar } from "./configs";

const isProd = process.env.NODE_ENV === "production";

export default defineUserConfig({
  base: "/",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        href: `/img/logo/favicon-16_16.png`
      }
    ],
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        href: `/img/logo/favicon-32_32.png`
      }
    ],
    ["link", { rel: "manifest", href: "/manifest.webmanifest" }],
    ["meta", { name: "application-name", content: "csmasterpath" }],
    ["meta", { name: "apple-mobile-web-app-title", content: "csmasterpath" }],
    ["meta", { name: "apple-mobile-web-app-status-bar-style", content: "black" }],
    ["link", { rel: "apple-touch-icon", href: `/img/logo/apple-touch-icon.png` }],
    ["meta", { name: "theme-color", content: "#1e2124" }],
    ["meta", { name: "msapplication-TileColor", content: "#1e2124" }]
  ],

  // site-level locales config
  locales: {
    "/": {
      lang: "en-US",
      title: "csmasterpath",
      description: "csmasterpath"
    },
    "/zh/": {
      lang: "zh-CN",
      title: "csmasterpath",
      description: "csmasterpath"
    }
  },

  // specify bundler via environment variable
  bundler:
    process.env.DOCS_BUNDLER === "webpack" ? webpackBundler() : viteBundler(),

  // configure default theme
  theme: gungnirTheme({
    repo: "csmasterpath/csmasterpath.github.io",
    // docsDir: "docs",

    hitokoto: "https://v1.hitokoto.cn?c=i", // enable hitokoto (一言) or not?

    // personal information
    personalInfo: {
      name: "Yudong Jin (csmasterpath)",
      avatar: "/img/avatar.png",
      description: "from light comes darkness, from darkness be light",
      sns: {
        github: {
          icon: "bi-github",
          link: "https://github.com/csmasterpath"
        },
        leetcode: {
          icon: "co-code",
          link: "https://leetcode.cn/u/jyd/"
        },
        twitter: "csmasterpath",
        // linkedin: "yudongjin",
        // facebook: "csmasterpath",
        // zhihu: "csmasterpath",
        email: "csmasterpath@163.com"
      }
    },

    // header images on home page
    homeHeaderImages: [
      {
        path: "/img/bg/home_office_white.jpg",
        mask: "rgba(0, 0, 0, .25)"
      }
    ],

    // other pages
    pages: {
      tags: {
        subtitle: "Black Sheep Wall",
        bgImage: {
          path: "/img/pages/tags.jpg",
          mask: "rgba(211, 136, 37, .5)"
        }
      },
      links: {
        subtitle:
          "When you are looking at the stars, please put the brightest star shining night sky as my soul.",
        bgImage: {
          path: "/img/pages/links.jpg",
          mask: "rgba(64, 118, 190, 0.5)"
        }
      }
    },

    // default theme color
    colorMode: "light",

    // theme-level locales config
    locales: {
      /**
       * English locale config
       * As the default locale is English, we don't need to set all of the locale fields
       */
      "/": {
        // navbar
        navbar: navbar.en,
        // sidebar
        sidebar: sidebar.en
      },

      /**
       * Chinese locale config
       */
      "/zh/": {
        // navbar
        navbar: navbar.zh,
        // sidebar
        sidebar: sidebar.zh,
        // i18n
        ...i18n.zh
      }
    },

    themePlugins: {
      // only enable git plugin in production mode
      git: isProd,
      katex: true,
      mermaid: true,
      chartjs: true,
      giscus: {
        repo: "csmasterpath/csmasterpath.github.io",
        repoId: "R_kgDOHvvq6Q",
        category: "Announcements",
        categoryId: "DIC_kwDOHvvq6c4CQjiJ",
        lazyLoad: false
      },
      mdPlus: {
        all: true
      },
      // ga: "G-EE8M2S3MPB",
      // ba: "10b7bc420625758a319d6b23aed4700f",
      rss: {
        siteURL: "https://jyd.pages.dev",
        copyright: "csmasterpath 2023"
      },
      pwa: true,
      readingTime: {
        wordsPerMinuteCN: 100,
        wordsPerMinuteEN: 50,
        excludeCodeBlock: true, 
        excludeTexBlock: true
      }
    },

    footer: `
      &copy; <a href="https://github.com/csmasterpath" target="_blank">csmasterpath</a> 2023
    `
  }),

  markdown: {
    extractHeaders: {
      level: [2, 3]
    }
  },

  plugins: [
  ]
});
