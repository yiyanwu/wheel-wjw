module.exports = {
    base:'/wheel-wjw/',
    title: 'wjw-UI',
    description: '一个简单的 UI 框架',
    themeConfig: {
        sidebar: [
            '/',
            {
                title: '入门',
                collapsable: false,
                children: [
                    '/install/',
                    '/get-started/'
                ]
            },
            {
                title: '组件',
                children: [ 
                    '/components/button',
                    '/components/input',
                    '/components/layout',
                    '/components/tab',
                    '/components/toast',
                    '/components/popover',
                    '/components/collapse',
                    '/components/grid',
                ]
            }
        ]
    }
}