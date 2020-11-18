const sw = require( "sw-precache" );

const rootDir = "./";
const distDir = "./_site";

sw.write( `${rootDir}/sw.js`, {
  staticFileGlobs: [ distDir + "/**/*.{js,html,css,png,jpg,svg}" ],
  stripPrefix: distDir
} )