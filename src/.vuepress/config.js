const { description } = require('../../package')

module.exports = {
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#title
   */
  title: 'Eagler Reborn',
  /**
   * Ref：https://v1.vuepress.vuejs.org/config/#description
   */
  description: description,

  /**
   * Extra tags to be injected to the page HTML `<head>`
   *
   * ref：https://v1.vuepress.vuejs.org/config/#head
   */
  head: [
    ['meta', { name: 'theme-color', content: '#22282e' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'icon', href: '/favicon.ico' }],
    ['meta', {
			name: 'theme-color',
			content: '#22282e',
			media: '(prefers-color-scheme: light)'
		}],
    ['meta', {
			name: 'theme-color',
			content: '#22282e',
			media: '(prefers-color-scheme: dark)'
		}]
  ],

  /**
   * Theme configuration, here is the default theme configuration for VuePress.
   *
   * ref：https://v1.vuepress.vuejs.org/theme/default-theme-config.html
   */
  themeConfig: {
    smoothScroll: true,
    repo: 'https://github.com/EaglerReborn/EaglerReborn.github.io',
    editLinks: false,
    docsDir: '',
    docsBranch: 'main',
    editLinkText: '',
    lastUpdated: true,
    nav: [
      {
        text: 'Guide',
        link: '/guide/',
      },
    ],
    sidebar: {
      '/guide/': [
        {
		
          title: 'Guide',
          collapsable: false,
	  children: [
            '',
            'non-eagler',
	    'making-patch-files',
	  
          ]
        }
      ],
    }
  },

  /**
   * Apply plugins，ref：https://v1.vuepress.vuejs.org/zh/plugin/
   */
    plugins: [
    '@vuepress/plugin-back-to-top',
    '@vuepress/plugin-medium-zoom',
  ]
}
