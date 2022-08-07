module.exports = {
    theme: 'reco',
    title: 'rtplivelib 文档',
    description: 'rtplivelib 最新官方文档翻译',
    base: '/vuepress-demo/',
    locales: {
        '/': {
            lang: 'zh-CN',
        }
    },
    themeConfig: {
        nav: [
            { text: '首页', link: '/' },
        ],
        subSidebar: 'auto',
        sidebar: [
            {
                title: '关于rtplivelib',
                path: '/',
            },
            {
                title: '目前实现的功能',
                path: '/feature',
            },
            {
                title: '下一步工作',
                path: '/next',
            },
            {
                title: '已知的部分bug',
                path: '/bug',
            },
            {
                title: "上手指南",
                path: '/guide',
                collapsable: false, // 不折叠
                children: [
                    { title: "安装要求", path: "/guide/page1" },
                    { title: "安装步骤", path: "/guide/page2" },
                    { title: "依赖库的构建", path: "/guide/page3" },
                    { title: "其它要求", path: "/guide/page4" },
                    { title: "使用", path: "/guide/page5" },
                ],
            }
        ]
    }
}