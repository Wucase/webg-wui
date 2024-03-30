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
      { text: '组件', link: '/components/icon', activeMatch: '/components/' },
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
                },
                {
                  text: '五.Eslint配置',
                  link: '/document/study/ui/五.Eslint配置'
                },
                {
                  text: '六.Prettier配置',
                  link: '/document/study/ui/六.Prettier配置'
                },
                {
                  text: '七.编辑器配置',
                  link: '/document/study/ui/七.编辑器配置'
                }
              ]
            },
            {
              text: 'Demo',
              collapsed: true,
              link: '/document/study/demo/CSS文字聚光灯',
              items: [
                {
                  text: 'CSS文字聚光灯',
                  link: '/document/study/demo/CSS文字聚光灯'
                },
                {
                  text: 'echart-环形饼图',
                  link: '/document/study/demo/echart-环形饼图'
                },
                {
                  text: 'CSS实现发光按钮Hover 效果',
                  link: '/document/study/demo/CSS实现发光按钮Hover 效果'
                },
                {
                  text: 'echart-柱状图',
                  link: '/document/study/demo/echart-柱状图'
                },
                {
                  text: 'echarts-折线图线条流光特效',
                  link: '/document/study/demo/echarts-折线图线条流光特效'
                },
                // {
                //   text: '三.创建组件测试环境',
                //   link: '/document/study/ui/三.创建组件测试环境'
                // },
                // {
                //   text: '四.scss编写',
                //   link: '/document/study/ui/四.scss编写'
                // },
                // {
                //   text: '五.Eslint配置',
                //   link: '/document/study/ui/五.Eslint配置'
                // },
                // {
                //   text: '六.Prettier配置',
                //   link: '/document/study/ui/六.Prettier配置'
                // },
                // {
                //   text: '七.编辑器配置',
                //   link: '/document/study/ui/七.编辑器配置'
                // }
              ]
            },
            {
              text: 'js Tool',
              collapsed: true,
              link: '/document/study/js/数组方法reduce',
              items: [
                {
                  text: '数组方法reduce',
                  link: '/document/study/js/数组方法reduce',
                },
                {
                  text: '常用数组方法',
                  link: '/document/study/js/常用数组方法'
                },
                {
                  text: '复制粘贴（vue）',
                  link: '/document/study/js/复制粘贴（vue）'
                },
                {
                  text: '生成随机颜色',
                  link: '/document/study/js/生成随机颜色'
                },
                {
                  text: '文件下载（vue）',
                  link: '/document/study/js/文件下载（vue）'
                },
                {
                  text: '字符串常用方法',
                  link: '/document/study/js/字符串常用方法'
                },
                {
                  text: '树结构数据',
                  link: '/document/study/js/树结构数据'
                },
                {
                  text: '排序',
                  link: '/document/study/js/排序'
                },
                {
                  text: 'encodeURI',
                  link: '/document/study/js/encodeURI'
                },
                {
                  text: '常用正则',
                  link: '/document/study/js/常用正则'
                },
                
              ]
            },
            {
              text: 'Vue2',
              collapsed: true,
              link: '/document/study/vue2/自定义指令',
              items: [
                {
                  text: '自定义指令',
                  link: '/document/study/vue2/自定义指令',
                },
                {
                  text: '不定高虚拟列表',
                  link: '/document/study/vue2/不定高虚拟列表',
                },
              ]
            },
            {
              text: 'Vue3',
              collapsed: true,
              link: '/document/study/vue3/vue3基础',
              items: [
                {
                  text: 'vue3基础',
                  link: '/document/study/vue3/vue3基础',
                },
              ]
            },
            {
              text: 'CSS',
              collapsed: true,
              link: '/document/study/css/滚动条样式',
              items: [
                {
                  text: '滚动条样式',
                  link: '/document/study/css/滚动条样式',
                },
              ]
            },
            {
              text: 'Webpack',
              collapsed: true,
              link: '/document/study/webpack/webpack-config-js',
              items: [
                {
                  text: '滚动条样式',
                  link: '/document/study/webpack/webpack-config-js',
                },
              ]
            },
            {
              text: 'Git',
              collapsed: true,
              link: '/document/study/git/stash',
              items: [
                {
                  text: 'stash',
                  link: '/document/study/git/stash',
                },
              ]
            },
            {
              text: 'Linux',
              collapsed: true,
              link: '/document/study/linux/基础命令',
              items: [
                {
                  text: '基础命令',
                  link: '/document/study/linux/基础命令',
                },
              ]
            }
          ]
        },
        {
          text: '快速开始',
          collapsed: true,
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
      ],
      '/components/': [
        {
          text: 'Icon',
          collapsed: true,
          items: [{ text: 'Icon', link: '/components/icon' }]
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
