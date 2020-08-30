const critical = require('critical');

critical.generate( {
    base: "_site/",
    src: "index.html",
    css: [ "assets/css/main.css" ],
    dimensions: [ {
      width: 320,
      height: 480
    }, {
      width: 768,
      height: 1024
    }, {
      width: 1280,
      height: 960
    } ],
    dest: "../_includes/critical.css",
    minify: true,
    extract: false,
    ignore: [ "@font-face" ]
  } )