const sw = require( "sw-precache" );

{
    const rootDir = "./";
    const distDir = "./_site";
  
    return sw.write( `${rootDir}/sw.js`, {
      staticFileGlobs: [ distDir + "/**/*.{js,html,css,png,jpg,svg}" ],
      stripPrefix: distDir
    } );
  }