module.exports = {
    // ...other vue-cli plugin options...
    pwa: {
      name: 'Wep',
      themeColor: '#fc6262',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',
      manifestOptions: {
         short_name: "wep",
         start_url: '/Main',
         display: 'fullscreen'
    },
    iconPaths:{

        favicon32: 'img/icon-72x72.png',
        favicon16: 'img/icon-72x72.png',
        appleTouchIcon: 'img/icon-152x152',
        maskIcon: 'img/safari-pinned-tab.svg',
        msTileImage: 'img/icon-144x144.png'
      }
      
  }
}