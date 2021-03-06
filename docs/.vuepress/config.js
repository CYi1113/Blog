module.exports = {
    title: "cyi1113",
    description: 'Life may be a self-rescue.',
    //dest: 'public',
    head: [
      ['link', { rel: 'icon', href: '/favicon.ico' }],
      ['meta', { name: 'viewport', content: 'width=device-width,initial-scale=1,user-scalable=no' }]
    ],
    theme: 'reco',
    base: '/Blog/',
    themeConfig: {
      nav: [
        { text: 'Home', link: '/', icon: 'reco-home' },
        { text: '时间轴', link: '/timeline/', icon: 'reco-date' },
        { text: '资源', 
          icon: 'reco-message',
          link: '/resources/'
        }
        // { text: 'Contact', 
        //   icon: 'reco-message',
        //   // items: [
        //   //   // { text: 'GitHub', link: 'https://github.com/zerocola777', icon: 'reco-github' },
        //   //   // { text: '联系', link: '/blogs/life/resume.md', icon: 'reco-account' },
        //   //   // { text: '个人简历', link: '/blogs/life/about.md', icon: 'reco-blog' }
        //   // ]
        // }
      ],
      // keyPage: {
      //   keys: ['7fac061bf481c205ae7b649c9174177f'],
      //   color: '#42b983', // 登录页动画球的颜色
      //   lineColor: '#42b983' // 登录页动画线的颜色
      // },
     // sidebarDepth:2,
     sidebar: 'auto',
      type: 'blog',
      // 博客设置
      blogConfig: {
        category: {
          location: 2, // 在导航栏菜单中所占的位置，默认2
          text: '分类' // 默认 “分类”
        },
        tag: {
          location: 3, // 在导航栏菜单中所占的位置，默认3
          text: '标签' // 默认 “标签”
        }
      },
      friendLink: [
        {
          title: '午后南杂',
          desc: 'Enjoy when you can, and endure when you must.',
          email: 'recoluan@qq.com',
          link: 'https://www.recoluan.com'
        },
        {
          title: 'vuepress-theme-reco',
          desc: 'A simple and beautiful vuepress Blog & Doc theme.',
          avatar: "https://vuepress-theme-reco.recoluan.com/icon_vuepress_reco.png",
          link: 'https://vuepress-theme-reco.recoluan.com'
        },
      ],
      // logo: '/logo.png',
      // 搜索设置
      search: true,
      searchMaxSuggestions: 10,
      // 自动形成侧边导航
      //sidebar: 'auto',
      // 最后更新时间
      lastUpdated: 'Last Updated',
      // 作者
      author: '11月',
      // 作者头像
      authorAvatar: '/avatar.jpeg',
      // 备案号
      // record: '鄂ICP备20008479号',
      // 项目开始时间
      startYear: '2019'
      /**
       * 密钥 (if your blog is private)
       */
  
      // keyPage: {
      //   keys: ['your password'],
      //   color: '#42b983',
      //   lineColor: '#42b983'
      // },
  
      /**
       * valine 设置 (if you need valine comment )
       */
  
      // valineConfig: {
      //   appId: 'Hap8l2AYAMASvbuoAmlFWkV6-gzGzoHsz',// your appId
      //   appKey: 'Rxr05UGHCprhMtcKgxNNWNn1', // your appKey
      //   placeholder:'填写邮箱，收到回复会发送邮件提醒'
      // }
    },
    plugins: [
      [
        "@vuepress-reco/vuepress-plugin-bgm-player",
        {
          audios: [
            // 网络文件示例
            {
              name: '강남역 4번 출구',
              artist: 'Plastic / Fallin` Dild',
              url: 'https://assets.smallsunnyfox.com/music/2.mp3',
              cover: 'https://assets.smallsunnyfox.com/music/2.jpg'
            },
            {
              name: '用胳膊当枕头',
              artist: '최낙타',
              url: 'https://assets.smallsunnyfox.com/music/3.mp3',
              cover: 'https://assets.smallsunnyfox.com/music/3.jpg'
            },
            {
              name: '能够成家吗',
              artist: '咖啡少年',
              url: 'https://assets.smallsunnyfox.com/music/1.mp3',
              cover: 'https://assets.smallsunnyfox.com/music/1.jpg'
            }
          ]
        }
      ],
      "vuepress-plugin-boxx",
      "flowchart",
    ],
    markdown: {
      lineNumbers: false
    }
  }  
  