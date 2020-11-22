/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["/404.html","3b385a45d5d15d63bfee515ff9abc2ab"],["/about-lifa/index.html","6cb5970eff907aad3016294395a8f271"],["/assets/css/main.css","3794211d724a948dee5e75b41c0b659e"],["/assets/img/favicon.jpg","f997bc2f20fcd3ad544c33a602ee35c4"],["/assets/img/icons/android-icon-144x144.png","483e100056913bb6286d3c7a8c14d4eb"],["/assets/img/icons/android-icon-192x192.png","29b48dc43a1704505c287f5dbc1ec9f8"],["/assets/img/icons/android-icon-36x36.png","0ac4cfb7eb9a588f0d3885a5530685de"],["/assets/img/icons/android-icon-48x48.png","1d2ec3032a3100ed84b1f28fa043637a"],["/assets/img/icons/android-icon-72x72.png","fc7b52b65bc2a33ff39cfedc9009e424"],["/assets/img/icons/android-icon-96x96.png","46ee02c18cee1583dfcc1a1a50bc8e09"],["/assets/img/icons/apple-icon-114x114.png","5b53de8e74292860c1bb710526d1984c"],["/assets/img/icons/apple-icon-120x120.png","58e6cfdb7611c7f75ad40f06ae57248b"],["/assets/img/icons/apple-icon-144x144.png","483e100056913bb6286d3c7a8c14d4eb"],["/assets/img/icons/apple-icon-152x152.png","5d3b56e0463e48fe1e35d390533aa28b"],["/assets/img/icons/apple-icon-180x180.png","189c8345fcb786ec2ea95546c494a717"],["/assets/img/icons/apple-icon-57x57.png","24adbaed9fa9f0fedf4a7c51084d1218"],["/assets/img/icons/apple-icon-60x60.png","c60f73708b6acbff0e44d43f32236d66"],["/assets/img/icons/apple-icon-72x72.png","fc7b52b65bc2a33ff39cfedc9009e424"],["/assets/img/icons/apple-icon-76x76.png","fe86cef32220961ad73722e6e7b4bd29"],["/assets/img/icons/apple-icon-precomposed.png","6167e0e2528f881d873738408ef40574"],["/assets/img/icons/apple-icon.png","6167e0e2528f881d873738408ef40574"],["/assets/img/icons/favicon-16x16.png","48ebe8b94b2a8a7e8635f086f9951e2c"],["/assets/img/icons/favicon-32x32.png","138a1a0b5766dc4dd154ccb183509ba6"],["/assets/img/icons/favicon-96x96.png","46ee02c18cee1583dfcc1a1a50bc8e09"],["/assets/img/icons/icon-github.svg","4e06335104a29f91e08d4ef420da7679"],["/assets/img/icons/icon-instagram.svg","1e1119e2628235ee4c8771bff15eb2ca"],["/assets/img/icons/icon-twitter.svg","30551913d5399d6520e8a74b6f1e23f0"],["/assets/img/icons/ms-icon-144x144.png","483e100056913bb6286d3c7a8c14d4eb"],["/assets/img/icons/ms-icon-150x150.png","36d925c1aa6e2477b624a0f9dfcfc9a0"],["/assets/img/icons/ms-icon-310x310.png","b47014f6eaf21869c9a65b12406d4a1f"],["/assets/img/icons/ms-icon-70x70.png","9efe9fb1b1760eeba1e7b61b48585ae6"],["/assets/img/icons/safari-pinned-tab.svg","398ef6b25c0f7f3f6e54c112a8facc5f"],["/assets/img/logo-bw.png","ac5050ce2872cb7a5a234a175ac6f789"],["/assets/img/logo.jpg","66e4b24e113df60afb0e855944ab540f"],["/assets/img/pages/lifa.png","272156b06712380c1e90bab0ac3681cd"],["/assets/img/pages/lifa_lg.png","88b073f92137a90421ce631423d8857a"],["/assets/img/pages/lifa_md.png","4637465288e5a8efe146954968f0c740"],["/assets/img/pages/lifa_sm.png","4b7c2907930ff81a926e78ba8a1b1892"],["/assets/img/pages/lifa_xl.png","7b3b379f32d217992539a663742c6d9c"],["/assets/img/posts/lifa.png","272156b06712380c1e90bab0ac3681cd"],["/assets/img/posts/lifa_lg.png","88b073f92137a90421ce631423d8857a"],["/assets/img/posts/lifa_md.png","4637465288e5a8efe146954968f0c740"],["/assets/img/posts/lifa_placehold.png","0023cdfb00593f9349cdad0b6955106e"],["/assets/img/posts/lifa_sm.png","34601c167d60e24c347cd9312fce5d01"],["/assets/img/posts/lifa_thumb.png","6d8dc75b0735ee9c6a905599d15fca3c"],["/assets/img/posts/lifa_thumb@2x.png","86420a5bf1ea05e053d84bd8f8885b02"],["/assets/img/posts/lifa_xl.png","7b3b379f32d217992539a663742c6d9c"],["/assets/img/posts/lifa_xs.png","6d8dc75b0735ee9c6a905599d15fca3c"],["/assets/img/posts/sleek.jpg","a32252a618ffe8ae57c9ce9ab157a01b"],["/assets/img/posts/sleek_lg.jpg","95a1338aa524727f34950f269133e904"],["/assets/img/posts/sleek_md.jpg","4e35ceb2f5fffd3d758fade699b0b85a"],["/assets/img/posts/sleek_placehold.jpg","0f48050cd7776895b98c6ce21597ff39"],["/assets/img/posts/sleek_sm.jpg","f30af3d30b7df905d962e494750f5da0"],["/assets/img/posts/sleek_thumb.jpg","f7b8a94ac9da8e5ea36bb9e459872400"],["/assets/img/posts/sleek_thumb@2x.jpg","e67e2129dc58a100b98a5e027c964dbc"],["/assets/img/posts/sleek_xs.jpg","c8212cace6d446950556a3bf6efe4520"],["/assets/js/bundle.js","4f400206c7f377a3e8a10e011686b94e"],["/browsify.js","ae63457385576d746ec69bf76e0838c6"],["/business/index.html","778d65d2edf72ad8d83c146bc3bf67fc"],["/career/index.html","f43c0d3fdddabf89b758a4a6129af66a"],["/categories/index.html","429b692d9c0c1b1bfe2ff59a965a59f3"],["/chain-responsibility/index.html","1fd16691794cbcb13dea1a49de88b0e4"],["/circular-economy/index.html","99e9b190f02d73af059058d4d4d343a7"],["/climate-change/index.html","f14f1b75d435cafb7c2e9c84e70e1256"],["/community-work/index.html","fa9450ca679c4f25745f334d4487779c"],["/contact/index.html","09439314e94ad279c7f8679608bb811c"],["/energy/index.html","52c3b7b73fe115b02c3f28d94d5782c2"],["/ethanol/index.html","92be3ea01d917912310170f397c9f3d0"],["/foundation/index.html","a0da8ee05d17624d1aad9e88fac2c205"],["/fuel-distribution/index.html","13b5c1e94ab952a3efd8bd7b474163e0"],["/generate_critical.js","6fd1715aaa5da9efa96a11e0dbe1a28e"],["/gulpfile.babel.js","499ef2edde6e9b4fbafcb7c6f0cbc725"],["/index.html","0dfc142513179221d8d3eeb08140b707"],["/investors/index.html","b67910f6aecf7add4012f85d3c80bb5e"],["/sugar/index.html","e29da9a3669e6af23c1189de61e5ee09"],["/sustainability/index.html","404ea6b335c6d75efcb25dd6b9dde328"],["/sw.js","e0d72036925eb925acfdd444015259ed"],["/write_sw.js","6af96374717eeb60ecf020076d20bd58"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});







