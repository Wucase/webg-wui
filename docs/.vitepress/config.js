export default {
  title: 'Web-G',
  base: '/webg-wui/',
  themeConfig: {
    lang: 'zh-CN',
    logo: '/icons/car.svg',
    siteTitle: 'Web-G',
    lastUpdated: true,
    nav: [
      {
        text: '首页',
        link: '/'
      },
      {
        text: '快速开始',
        link: '/starter/starter-install',
        activeMatch: '/starter/'
      },
      { text: '开发文档', link: '/document/index', activeMatch: '/document/' },
      {
        text: '学习文档',
        link: '/document/study/ui/⼀.搭建monorepo环境',
        activeMatch: '/document/study/ui'
      }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2019-present Evan You'
    },
    editLink: {
      pattern: 'https://github.com/vuejs/vitepress/edit/main/docs/:path',
      text: 'Edit this page on GitHub'
    },
    lastUpdatedText: 'Updated Date',
    algolia: {
      appId: 'R2IYF7ETH7',
      apiKey: '599cec31baffa4868cae4e79f180729b',
      indexName: 'index'
    },
    docFooter: {
      prev: 'Prev',
      next: 'Next'
    },
    sidebar: {
      '/document/': [
        {
          text: '学习文档',
          collapsed: true,
          items: [
            {
              text: 'W-UI',
              collapsed: true,
              link: '/document/study/ui/⼀.搭建monorepo环境',
              items: [
                {
                  text: '⼀.搭建monorepo环境',
                  link: '/document/study/ui/⼀.搭建monorepo环境'
                },
                {
                  text: '二.创建组件测试环境',
                  link: '/document/study/ui/二.创建组件测试环境'
                },
                {
                  text: '三.创建组件测试环境',
                  link: '/document/study/ui/三.创建组件测试环境'
                },
                {
                  text: '四.scss编写',
                  link: '/document/study/ui/四.scss编写'
                }
              ]
            }
          ]
        },
        {
          text: '快速开始',
          collapsed: false,
          items: [
            { text: '安装', link: '/starter/starter-install' },
            { text: '设置', link: '/starter/starter-configuration' }
          ]
        },
        {
          text: '快速卸载',
          collapsed: true,
          items: [{ text: '卸载指南', link: '/starter/starter-uninstall' }]
        }
      ]
    }
  },
  cleanUrls: true,
  aside: true,
  outline: 'deep',
  outlineBadges: true,
  outlineTitle: 'just an demo'
}
