(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.CliqzGlobal = global.CliqzGlobal || {})));
}(this, (function (exports) { 'use strict';

var config = {
  "platform": "firefox",
  "baseURL": "chrome://cliqz/content/",
  "testsBasePath": "./build/cliqz@cliqz.com/chrome/content",
  "testem_launchers": ["unit-node", "Chrome"],
  "testem_launchers_ci": ["unit-node"],
  "pack": "cd build && fab package:version=$VERSION,cert_path=$CLIQZ_CERT_PATH,cert_pass_path=$CLIQZ_CERT_PASS_PATH",
  "publish": "cd build && fab publish:beta=$CLIQZ_BETA,channel=$CLIQZ_CHANNEL,pre=$CLIQZ_PRE_RELEASE,version=$VERSION,cert_path=$CLIQZ_CERT_PATH,cert_pass_path=$CLIQZ_CERT_PASS_PATH",
  "settings": {
    "id": "cliqz@cliqz.com",
    "name": "Cliqz",
    "channel": "04",
    "homepageURL": "https://cliqz.com/",
    "freshTabNews": true,
    "showDataCollectionMessage": true,
    "antitrackingButton": true,
    "showNewBrandAlert": false,
    "suggestions": false,
    "ENDPOINT_BLIND_SIGNER": "https://hpn-sign.cliqz.com/sign",
    "ENDPOINT_USER_REG": "https://hpn-sign.cliqz.com/register",
    "ENDPOINT_SOURCE_MAP_PROVIDER": "https://hpn-collector.cliqz.com/sourcemapjson?q=1",
    "ENDPOINT_LOOKUP_TABLE_PROVIDER": "https://hpn-collector.cliqz.com/v2/lookuptable?q=1",
    "ENDPOINT_KEYS_PROVIDER": "https://hpn-collector.cliqz.com/signerKey?q=1",
    "ENDPOINT_PROXY_LIST_PROVIDER": "https://hpn-collector.cliqz.com/v2/proxyList?q=1",
    "ENDPOINT_PATTERNSURL": "https://cdn.cliqz.com/human-web/patterns",
    "ENDPOINT_ANONPATTERNSURL": "https://cdn.cliqz.com/human-web/patterns-anon",
    "ENDPOINT_CONFIGURL": "https://safe-browsing.cliqz.com/config",
    "ENDPOINT_SAFE_QUORUM_ENDPOINT": "https://safe-browsing-quorum.cliqz.com/",
    "ENDPOINT_SAFE_QUORUM_PROVIDER": "https://safe-browsing-quorum.cliqz.com/config",
    "KEY_DS_PUBKEY": "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAwXo4hXvboKHCggNJ0UNFvZQfDWi0jNcF1kBHthxilMu6LB/hFrSMQ+/FgTqVE36cCezWE0K1UcwmYGVsuqxcvql82RfCmYUVBroJ3UFG8qnetYfU5FOk43C555p5l5HzlF8QilcCUBCO4SCj9lEZ3/8FJboCupTqxEUq7nwUgaNZOiGKMdDUBZJO1tW4LSH4lj9IAZccEJ5HKVmJKopQ3hmzWgDqowxni4NQz+0DnsSfCGAupKaJDxjfajJosX5i674rgdHbZGtgHB3M9jhc6HFNPcmtUgLwgtUtRwMhSnya6q/O06euouNi1h0m5eRrWeMRlJSdUnelLSU8QNy7LQIDAQAB",
    "KEY_SECURE_LOGGER_PUBKEY": "MIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAh5HhcRAn6+6woXQXl/NtZ+fOooNglZct/HSpYuqkcmrPauHW7EuOSq5bvpBZRTDROjR/kUPomqVZIzqhdCFPA8BwXSCz7hAel2Q157vtBvh9sngMMLXb5Fgzef5N4EuKO8pL5KrS+I9tfZac41vFJSdpgAirZYhh+tdcQQ1z0Qv/Rw0zOXjfvddCz3gEv2gB9KsLMVnTS1J4YOOgfza2adg9Ebz1z99DiF4vtCwn0IUwH/3ToTBwJLbMnC3Ol43yBNk8rgK2mkgCi614vOSD3hnVmio+iW6+AUklM8VPl6l7hEK9cljJY+9UsMVmTrvaFbMPwS6AdZCXKTmNdaMJcy3zSOXu5zvzihoQLwAu9LM3l2eVk0Mw0K7JXOP20fc8BtzWCOLYVP32r4R0BNuhTtvGqjHNZHPJN5OwaxkLpn2dujL9uDWGjRiOItKMVq/nOqmNGghrbf8IOaKT7VQhqOU4cXRkB/uF1UjYETBavwUZAxx9Wd/cMcAGmKiDxighxxQ29jDufl+2WG065tmJz+zCxmgrPh6Zb3KFUxPTe6yksAhWJhmGShA9v20t84M5c6NpZXoUsFcVja6XxzHeSB8dWq9Uu5QcZ83Gz/ronwdEjT2OGTtBgOFeTDqLYUgphC1gcUEHOCnTNXRMQOXqGwBfZHp+Mq61QcMq2rNS7xECAwEAAQ==",
    "HW_CHANNEL": "ff-amo",
    "HPN_CHANNEL": "cliqz",
    "NEW_TAB_URL": "chrome://cliqz/content/freshtab/home.html",
    "ICONS": {
      "active": {
        "default": "control-center/images/cc-active.svg",
        "dark": "control-center/images/cc-active-dark.svg"
      },
      "inactive": {
        "default": "control-center/images/cc-critical.svg",
        "dark": "control-center/images/cc-critical-dark.svg"
      },
      "critical": {
        "default": "control-center/images/cc-critical.svg",
        "dark": "control-center/images/cc-critical-dark.svg"
      }
    },
    "BACKGROUNDS": {
      "active": "#471647",
      "inactive": "#471647",
      "critical": "#471647",
      "off": "#471647"
    },
    "CONFIG_PROVIDER": "https://api.cliqz.com/api/v1/config",
    "OFFERS_BE_BASE_URL": "https://offers-api.cliqz.com",
    "CDN_BASEURL": "https://cdn.cliqz.com",
    "ALLOWED_COUNTRY_CODES": ["de", "at", "ch", "es", "us", "fr", "nl", "gb", "it", "se"],
    "frameScriptWhitelist": []
  },
  "default_prefs": {
    "modules.history-analyzer.enabled": false
  },
  "modules": ["core", "core-cliqz", "dropdown", "firefox-specific", "static", "autocomplete", "geolocation", "ui", "last-query", "human-web", "anti-phishing", "context-menu", "freshtab", "webrequest-pipeline", "antitracking", "performance", "hpn", "control-center", "offers-v2", "history-analyzer", "offers-cc", "browser-panel", "message-center", "offboarding", "anolysis", "market-analysis", "abtests"],
  "subprojects": [{
    "src": "node_modules/@cliqz-oss/pouchdb/dist",
    "include": ["pouchdb.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/handlebars/dist",
    "include": ["handlebars.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/jquery/dist",
    "include": ["jquery.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/mathjs/dist",
    "include": ["math.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/moment/min",
    "include": ["moment.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/moment-range/dist",
    "include": ["moment-range.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/pako/dist",
    "include": ["pako.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/react/umd",
    "include": ["react.production.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/react-dom/umd",
    "include": ["react-dom.production.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/simple-statistics/dist",
    "include": ["simple-statistics.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/ua-parser-js/dist",
    "include": ["ua-parser.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/rxjs/bundles",
    "include": ["Rx.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/tooltipster/dist/css/plugins/tooltipster/sideTip/themes",
    "include": ["tooltipster-sideTip-shadow.min.css"],
    "dest": "vendor"
  }, {
    "src": "node_modules/tooltipster/dist/js",
    "include": ["tooltipster.bundle.min.js"],
    "dest": "vendor"
  }, {
    "src": "node_modules/tooltipster/dist/css",
    "include": ["tooltipster.bundle.min.css"],
    "dest": "vendor"
  }],
  "systemDefault": {
    "transpiler": false,
    "packageConfigPaths": ["node_modules/*/package.json"],
    "map": {
      "handlebars": "node_modules/handlebars/dist/handlebars.min.js",
      "jquery": "node_modules/jquery/dist/jquery.min.js",
      "mathjs": "node_modules/mathjs/dist/math.min.js",
      "BigInt": "node_modules/BigInt/src/BigInt.js",
      "react": "node_modules/react/cjs/react.production.min.js",
      "chai": "node_modules/chai/chai.js",
      "chai-dom": "node_modules/chai-dom/chai-dom.js",
      "react-dom": "node_modules/react-dom/cjs/react-dom.production.min.js",
      "qrcodejs": "node_modules/qrcodejs/qrcode.min.js",
      "plugin-json": "node_modules/systemjs-plugin-json/json.js"
    },
    "paths": {
      "specific/*": "./specific/firefox/*",
      "modules/*": "modules/*",
      "modules": "modules",
      "node_modules/*": "./node_modules/*",
      "*": "./node_modules/*"
    },
    "meta": {
      "specific/*": {
        "format": "global"
      },
      "BigInt": {
        "format": "cjs"
      },
      "*.json": {
        "loader": "plugin-json"
      }
    },
    "packages": {
      "object-assign": {
        "main": "./index.js"
      },
      "modules": {
        "defaultJSExtensions": true,
        "map": {
          "./platform/tldjs": "node_modules/tldjs/index.js"
        },
        "meta": {
          "./platform/lib/zlib.lib.js": {
            "format": "cjs"
          },
          "./platform/lib/sanitize-filename.js": {
            "format": "system"
          },
          "./platform/lib/cron-parser.js": {
            "format": "system"
          },
          "./platform/video-downloader/lib/ytdl-core.js": {
            "format": "system"
          },
          "./platform/fast-url-parser.js": {
            "format": "system"
          },
          "./platform/lib/deep-equal.js": {
            "format": "system"
          },
          "./platform/lib/ajv.js": {
            "format": "system"
          },
          "./platform/lib/jsep.js": {
            "format": "system"
          },
          "*/templates.js": {
            "format": "system"
          }
        }
      }
    }
  },
  "builderDefault": {
    "externals": ["react", "react-dom", "jquery", "handlebars", "mathjs"],
    "globalDeps": {
      "react": "React",
      "react-dom": "ReactDOM",
      "jquery": "$",
      "handlebars": "Handlebars",
      "mathjs": "mathLib"
    },
    "sourceMaps": false,
    "lowResSourceMaps": true,
    "sourceMapContents": true,
    "globalName": "CliqzGlobal",
    "rollup": true
  },
  "bundleConfigs": {
    "modules/core/app.bundle.js": {
      "systemConfig": {
        "transpiler": false,
        "packageConfigPaths": ["node_modules/*/package.json"],
        "map": {
          "handlebars": "node_modules/handlebars/dist/handlebars.min.js",
          "jquery": "node_modules/jquery/dist/jquery.min.js",
          "mathjs": "node_modules/mathjs/dist/math.min.js",
          "BigInt": "node_modules/BigInt/src/BigInt.js",
          "react": "node_modules/react/cjs/react.production.min.js",
          "chai": "node_modules/chai/chai.js",
          "chai-dom": "node_modules/chai-dom/chai-dom.js",
          "react-dom": "node_modules/react-dom/cjs/react-dom.production.min.js",
          "qrcodejs": "node_modules/qrcodejs/qrcode.min.js",
          "plugin-json": "node_modules/systemjs-plugin-json/json.js"
        },
        "paths": {
          "specific/*": "./specific/firefox/*",
          "modules/*": "modules/*",
          "modules": "modules",
          "node_modules/*": "./node_modules/*",
          "*": "./node_modules/*"
        },
        "meta": {
          "specific/*": {
            "format": "global"
          },
          "BigInt": {
            "format": "cjs"
          },
          "*.json": {
            "loader": "plugin-json"
          }
        },
        "packages": {
          "object-assign": {
            "main": "./index.js"
          },
          "modules": {
            "defaultJSExtensions": true,
            "map": {
              "./platform/tldjs": "node_modules/tldjs/index.js"
            },
            "meta": {
              "./platform/lib/zlib.lib.js": {
                "format": "cjs"
              },
              "./platform/lib/sanitize-filename.js": {
                "format": "system"
              },
              "./platform/lib/cron-parser.js": {
                "format": "system"
              },
              "./platform/video-downloader/lib/ytdl-core.js": {
                "format": "system"
              },
              "./platform/fast-url-parser.js": {
                "format": "system"
              },
              "./platform/lib/deep-equal.js": {
                "format": "system"
              },
              "./platform/lib/ajv.js": {
                "format": "system"
              },
              "./platform/lib/jsep.js": {
                "format": "system"
              },
              "*/templates.js": {
                "format": "system"
              }
            }
          },
          "modules/dropdown": {
            "handlebars": "../platform/lib/handlebars"
          }
        }
      },
      "builderConfig": {
        "externals": ["mathjs"],
        "globalDeps": {
          "mathjs": "mathLib"
        },
        "sourceMaps": false,
        "lowResSourceMaps": true,
        "sourceMapContents": true,
        "globalName": "CliqzGlobal",
        "rollup": true
      }
    }
  },
  "environment": "production",
  "sourceMaps": false,
  "debugPages": true,
  "EXTENSION_VERSION": "2.24.8",
  "instrumentFunctions": ""
};

/* eslint-disable */
/*
 Copyright (c) 2013, Nick Fitzgerald

  All rights reserved.

  Redistribution and use in source and binary forms, with or without modification, are permitted provided that the following conditions are met:

      Redistributions of source code must retain the above copyright notice, this list of conditions and the following disclaimer.

      Redistributions in binary form must reproduce the above copyright notice, this list of conditions and the following disclaimer in the documentation and/or other materials provided with the distribution.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
*/
// https://developer.chrome.com/extensions/content_scripts#match-patterns-globs
// source: https://github.com/fitzgen/glob-to-regexp
function globToRegexp(glob, opts) {
  if (typeof glob !== 'string') {
    throw new TypeError('Expected a string');
  }

  var str = String(glob);

  // The regexp we are building, as a string.
  var reStr = "";

  // Whether we are matching so called "extended" globs (like bash) and should
  // support single character matching, matching ranges of characters, group
  // matching, etc.
  var extended = opts ? !!opts.extended : false;

  // When globstar is _false_ (default), '/foo/*' is translated a regexp like
  // '^\/foo\/.*$' which will match any string beginning with '/foo/'
  // When globstar is _true_, '/foo/*' is translated to regexp like
  // '^\/foo\/[^/]*$' which will match any string beginning with '/foo/' BUT
  // which does not have a '/' to the right of it.
  // E.g. with '/foo/*' these will match: '/foo/bar', '/foo/bar.txt' but
  // these will not '/foo/bar/baz', '/foo/bar/baz.txt'
  // Lastely, when globstar is _true_, '/foo/**' is equivelant to '/foo/*' when
  // globstar is _false_
  var globstar = opts ? !!opts.globstar : false;

  // If we are doing extended matching, this boolean is true when we are inside
  // a group (eg {*.html,*.js}), and false otherwise.
  var inGroup = false;

  // RegExp flags (eg "i" ) to pass in to RegExp constructor.
  var flags = opts && typeof opts.flags === "string" ? opts.flags : "";

  var c;
  for (var i = 0, len = str.length; i < len; i++) {
    c = str[i];

    switch (c) {
      case "\\":
      case "/":
      case "$":
      case "^":
      case "+":
      case ".":
      case "(":
      case ")":
      case "=":
      case "!":
      case "|":
        reStr += "\\" + c;
        break;

      case "?":
        if (extended) {
          reStr += ".";
          break;
        }

      case "[":
      case "]":
        if (extended) {
          reStr += c;
          break;
        }

      case "{":
        if (extended) {
          inGroup = true;
          reStr += "(";
          break;
        }

      case "}":
        if (extended) {
          inGroup = false;
          reStr += ")";
          break;
        }

      case ",":
        if (inGroup) {
          reStr += "|";
          break;
        }
        reStr += "\\" + c;
        break;

      case "*":
        // Move over all consecutive "*"'s.
        // Also store the previous and next characters
        var prevChar = str[i - 1];
        var starCount = 1;
        while (str[i + 1] === "*") {
          starCount++;
          i++;
        }
        var nextChar = str[i + 1];

        if (!globstar) {
          // globstar is disabled, so treat any number of "*" as one
          reStr += ".*";
        } else {
          // globstar is enabled, so determine if this is a globstar segment
          var isGlobstar = starCount > 1 // multiple "*"'s
          && (prevChar === "/" || prevChar === undefined) // from the start of the segment
          && (nextChar === "/" || nextChar === undefined); // to the end of the segment

          if (isGlobstar) {
            // it's a globstar, so match zero or more path segments
            reStr += "((?:[^/]*(?:\/|$))*)";
            i++; // move over the "/"
          } else {
            // it's not a globstar, so only match one path segment
            reStr += "([^/]*)";
          }
        }
        break;

      default:
        reStr += c;
    }
  }

  // When regexp 'g' flag is specified don't
  // constrain the regular expression with ^ & $
  if (!flags || !~flags.indexOf('g')) {
    reStr = "^" + reStr + "$";
  }

  return new RegExp(reStr, flags);
}
/* eslint-enable */

/* eslint-disable */
function getWindowId(window) {
  return window.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIDOMWindowUtils).outerWindowID;
}
/* eslint-enable */

const CONTENT_SCRIPTS = {};

function registerContentScript(urlPattern, script) {
  CONTENT_SCRIPTS[urlPattern] = CONTENT_SCRIPTS[urlPattern] || [];
  CONTENT_SCRIPTS[urlPattern].push(script);
}

function runContentScripts(window, chrome, windowId) {
  const currentUrl = window.location.href;
  const matchingPatterns = Object.keys(CONTENT_SCRIPTS).filter(pattern => {
    const regexp = globToRegexp(pattern);
    return regexp.test(currentUrl);
  });
  matchingPatterns.forEach(pattern => {
    CONTENT_SCRIPTS[pattern].forEach(contentScript => {
      try {
        contentScript(window, chrome, windowId);
      } catch (e) {
        window.console.error(`CLIQZ content-script failed: ${e} ${e.stack}`);
      }
    });
  });
}

function getWindowTreeInformation(window) {
  let currentWindow = window;

  // Keep track of window IDs
  let currentId = getWindowId(window);
  const windowId = currentId;
  let parentFrameId;

  while (currentId !== getWindowId(currentWindow.parent)) {
    // Go up one level
    parentFrameId = currentId;
    currentWindow = currentWindow.parent;
    currentId = getWindowId(currentWindow);
  }

  return {
    tabId: currentId,
    parentFrameId,
    frameId: windowId
  };
}



const CHROME_MSG_SOURCE = 'cliqz-content-script';

function isCliqzContentScriptMsg(msg) {
  return msg.source && msg.source === CHROME_MSG_SOURCE;
}

/* global Components, console */
try {
  Components.utils.import("resource://gre/modules/Console.jsm");
} catch (e) {
  // Older version of Firefox
  Components.utils.import("resource://gre/modules/devtools/Console.jsm");
}

/* global window */

/* global global, Services, Components, XPCOMUtils, debugModules */

Components.utils.import('resource://gre/modules/XPCOMUtils.jsm');
Components.utils.import('resource://gre/modules/Services.jsm');



// TODO: @remusao webrequest-pipeline/page-store require chrome


const fakeGlobal = Object.create(null);
/**
 * exporting a global object to allow access to javascript buildins like
 * Object, Symbol
 */
/* eslint-disable func-names, prefer-arrow-callback, new-cap */
const safeGlobal = new Proxy(fakeGlobal, {
  get(target, key) {
    if (fakeGlobal[key]) {
      return fakeGlobal[key];
    }

    if (typeof window !== "undefined") {
      return window[key];
    }

    if (typeof global !== "undefined") {
      return global[key];
    }
  }
});

const prefs$1 = Services.prefs.getBranch('');
const complexRegEx = /^chrome:\/\/.+\/locale\/.+\.properties/;

function prefixPref(pref) {
  let prefix = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'extensions.cliqz.';

  return `${prefix}${pref}`;
}

function getPref(key, defaultValue, prefix) {
  const pref = prefixPref(key, prefix);
  try {
    switch (prefs$1.getPrefType(pref)) {
      case 128:
        return prefs$1.getBoolPref(pref);
      case 32:
        {
          let charVal = prefs$1.getCharPref(pref);

          // it might be a complex value
          if (complexRegEx.test(charVal)) {
            try {
              charVal = prefs$1.getComplexValue(pref, Components.interfaces.nsIPrefLocalizedString).data;
            } catch (e) {
              console.log(`Error fetching pref: ${pref}`);
            }
          }

          return charVal;
        }
      case 64:
        return prefs$1.getIntPref(pref);
      default:
        return defaultValue;
    }
  } catch (e) {
    return defaultValue;
  }
}

function setPref(key, value, prefix) {
  const pref = prefixPref(key, prefix);

  switch (typeof value) {
    case 'boolean':
      prefs$1.setBoolPref(pref, value);break;
    case 'number':
      prefs$1.setIntPref(pref, value);break;
    case 'string':
      prefs$1.setCharPref(pref, value);break;
    default:
      Services.console.logStringMessage('WARNING: Unable to save "' + pref);break;
  }
}

function hasPref(key, prefix) {
  const pref = prefixPref(key, prefix);
  return prefs$1.getPrefType(pref) !== 0;
}

function clearPref(key, prefix) {
  const pref = prefixPref(key, prefix);
  prefs$1.clearUserPref(pref);
}

function enableChangeEvents() {}

function disableChangeEvents() {}

function init() {
  return Promise.resolve();
}

var prefs = {
  /**
   * Get a value from preferences db
   * @param {string}  pref - preference identifier
   * @param {*=}      defautlValue - returned value in case pref is not defined
   * @param {string=} prefix - prefix for pref
   */
  get: getPref,
  /**
   * Set a value in preferences db
   * @param {string}  pref - preference identifier
   * @param {string=} prefix - prefix for pref
   */
  set: setPref,
  /**
   * Check if there is a value in preferences db
   * @param {string}  pref - preference identifier
   * @param {string=} prefix - prefix for pref
   */
  has: hasPref,
  /**
   * Clear value in preferences db
   * @param {string}  pref - preference identifier
   * @param {string=} prefix - prefix for pref
   */
  clear: clearPref,

  enableChangeEvents,

  disableChangeEvents,

  /**
   * Set a value of type object in preferences db
   * @param {string}  pref - preference identifier
   */
  getObject(key) {
    return JSON.parse(this.get(key, '{}'));
  },

  /**
   * Set a value in preferences db
   * @param {string}  pref - preference identifier
   * @param {object|function}
   */
  setObject(key, value) {
    if (value instanceof Function) {
      const prevValue = this.getObject(key);
      const newValue = value(prevValue);
      this.setObject(key, newValue);
    } else if (typeof value === 'object') {
      this.set(key, JSON.stringify(value));
    } else {
      throw new TypeError();
    }
  },

  init

};

/* globals __DEV__ */
// detect dev flag on react-native
const devMode = typeof global !== 'undefined' && global.__DEV__ === true;
// either take flag from prefs, or global dev mode flag
// We need to put a try, catch, to avoid content-scripts throwing error, while trying to get the prefs.
// Should look for a cleaner solutions at some point. for isLoggingEnabled, isDeveloper.

function isLoggingEnabled() {
  try {
    return prefs.get('showConsoleLogs', devMode || false);
  } catch (ee) {
    return false;
  }
}

function isDeveloper() {
  try {
    return prefs.get('developer', devMode || false);
  } catch (ee) {
    return false;
  }
}

let log;
let error;
let debug;
let warn;

if (isLoggingEnabled()) {
  log = console.log.bind(console, 'Cliqz');
  error = console.error.bind(console, 'Cliqz error');
  warn = console.warn.bind(console, 'Cliqz warning');
  if (isDeveloper()) {
    debug = log;
  } else {
    debug = () => {};
  }
} else {
  log = () => {};
  error = () => {};
  debug = () => {};
  warn = () => {};
}

var console$1 = {
  log,
  error,
  debug,
  warn
};

// This is needed for now, else get's in circular dependecy and fails to load content script.
const SPECIAL_KEYS = [8, 9, 13, 16, 17, 18, 19, 20, 27, 33, 34, 35, 36, 37, 38, 39, 40, 91, 224];

function queryCliqz(q, windowId) {
  chrome.runtime.sendMessage({
    source: CHROME_MSG_SOURCE,
    windowId,
    payload: {
      module: 'core',
      action: 'queryCliqz',
      args: [decodeURIComponent(q)]
    }
  });
}

function addListeners(window, windowId, targetID) {
  const target = window.document.getElementById(targetID);
  if (!target) return;

  target.addEventListener('keydown', ev => {
    if (SPECIAL_KEYS.indexOf(ev.which) !== -1) return;

    queryCliqz(ev.key, windowId);
    target.parentElement.style.visibility = 'hidden';
    ev.preventDefault();
  });

  window.addEventListener('click', () => {
    target.parentElement.style.visibility = 'visible';
  });
}

function interceptKeyDown(window, windowId, targetID) {
  if (prefs.get('focusUrlbar', 0) !== 1) {
    return;
  }

  if (window.document && window.document.readyState === 'complete') {
    addListeners(window, windowId, targetID);
  } else {
    window.addEventListener('DOMContentLoaded', () => {
      addListeners(window, windowId, targetID);
    });
  }
}

registerContentScript('about:newtab', (window, _, windowId) => {
  interceptKeyDown(window, windowId, 'newtab-search-text');
});

registerContentScript('about:home', (window, _, windowId) => {
  interceptKeyDown(window, windowId, 'searchText');
});

/* eslint-disable import/prefer-default-export */

/**
 * Google pagead aclk look like this:
 * https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwjNi5bcsbPWAhUW4BsKHUePBAwYABARGgJ3bA&ohost=www.google.de&cid=CAASEuRo7v8yDlI1j5_Xe3oAtyANqQ&sig=AOD64_0I3As2z06whZRtfqOC3PGdhk9SIQ&ctype=5&q=&ved=0ahUKEwjc7JLcsbPWAhVLuhQKHQWpCRcQ9aACCKIB&adurl=
 *
 * This function takes such an url and returns a normalized string
 * (which is no longer an url). Links to identical ads should be
 * normalized to the same string while links to different ads
 * should be mapped to different keys.
 */
function normalizeAclkUrl(url) {
  const parts = url.split('aclk?');
  if (parts.length !== 2) {
    throw new Error(`Expected Google pagead "aclk" URL. Instead got: ${url}`);
  }

  // Ignore the "ved" code, as it seems to change between clicks.
  //
  // For background information about the "ved" code, see
  // https://deedpolloffice.com/blog/articles/decoding-ved-parameter
  const noVed = parts[1].replace(/ved=.*&/, '');

  // TODO: hack, needs to be replaced by a more robust solution
  return noVed.replace(/&q=&adurl=$/, '').replace(/&adurl=&q=$/, '');
}

/**
 * No-op function.
 */
function noop() {}

function multiArgsDump() {
  if (arguments.length > 0) {
    dump(arguments.length <= 0 ? undefined : arguments[0]);

    for (let i = 1; i < arguments.length; i += 1) {
      dump(' ');
      dump(arguments.length <= i ? undefined : arguments[i]);
    }

    dump('\n');
  }
}

function Logger(options) {
  const useDump = options.useDump === true;
  const level = options.level || 'log';
  const prefix = options.prefix;

  let debug = console$1.debug;
  let log = console$1.log;
  let error = console$1.error;

  if (useDump) {
    debug = multiArgsDump.bind(null, '[DEBUG]');
    log = multiArgsDump.bind(null, '[LOG]');
    error = multiArgsDump.bind(null, '[ERROR]');
  }

  if (prefix) {
    debug = debug.bind(null, prefix);
    log = log.bind(null, prefix);
    error = error.bind(null, prefix);
  }

  if (level === 'log') {
    debug = noop;
  }

  if (level === 'error') {
    debug = noop;
    log = noop;
  }

  return {
    debug,
    log,
    error
  };
}

var logger = Logger({
  useDump: false,
  level: 'error',
  prefix: '[human-web]'
});

function logException(e) {
  logger.error('Exception caught:', e, e.stack);
}

function parseDom(url, window, windowId) {
  const document = window.document;

  // Let's try and get META refresh to detect javascript redirects.
  try {
    let jsRef = null;
    jsRef = document.querySelector('script');
    if (jsRef && jsRef.innerHTML.indexOf('location.replace') > -1) {
      const location = document.querySelector('title').textContent;
      chrome.runtime.sendMessage({
        source: CHROME_MSG_SOURCE,
        windowId,
        payload: {
          module: 'human-web',
          action: 'jsRedirect',
          args: [{
            message: {
              location,
              url: document.location.href
            }
          }]
        }
      });
    }
  } catch (ee) {
    logException(ee);
  }

  try {
    let _ad = '';
    let _h = false;

    if (document.querySelector('#s0p1c0')) {
      _ad = document.querySelector('#s0p1c0').href;
    }

    if (document.querySelector('#tads .ads-ad')) {
      if (document.querySelector('#tads .ads-ad').offsetParent === null) _h = true;
    }

    const additionalInfo = {
      type: 'dom',
      ad: _ad,
      hidden: _h
    };

    chrome.runtime.sendMessage({
      source: CHROME_MSG_SOURCE,
      windowId,
      payload: {
        module: 'human-web',
        action: 'contentScriptTopAds',
        args: [{
          message: additionalInfo
        }]
      }
    });
  } catch (ee) {
    logException(ee);
  }

  // We need to get all the ADS from this page.
  try {
    const adDetails = {};
    const doc = window.document;
    let noAdsOnThisPage = 0;
    const detectAdRules = {
      query: {
        element: '#ires',
        attribute: 'data-async-context'
      },
      adSections: ['.ads-ad', '.pla-unit-container', '.pla-hovercard-content-ellip', '.cu-container tr'],
      0: {
        cu: ".ad_cclk h3 a[id^='s0p'],.ad_cclk h3 a[id^='n1s0p'],.ad_cclk h3 a[id^='s3p']",
        fu: ".ad_cclk h3 a[id^='vs0p'],.ad_cclk h3 a[id^='vn1s0p'],.ad_cclk h3 a[id^='vs3p']"
      },
      1: {
        cu: "a[id^='plaurlg']",
        fu: "a[id^='vplaurlg']"
      },
      2: {
        cu: "a[id^='plaurlh']",
        fu: "a[id^='vplaurlh']"
      },
      3: {
        cu: "a[id^='plaurlt']",
        fu: "a[id^='vplaurlt']"
      }
    };

    // We need to scrape the query too.
    const queryElement = doc.querySelector(detectAdRules.query.element);
    let query = '';

    if (queryElement) {
      query = queryElement.getAttribute(detectAdRules.query.attribute).replace('query:', '');

      try {
        query = decodeURIComponent(query);
      } catch (ee) {}
    }

    // Let's iterate over each possible section of the ads.
    detectAdRules.adSections.forEach((eachAdSection, idx) => {
      const adNodes = Array.prototype.slice.call(doc.querySelectorAll(eachAdSection));

      adNodes.forEach(eachAd => {
        const cuRule = detectAdRules[idx].cu;
        const fuRule = detectAdRules[idx].fu;

        const clink = eachAd.querySelector(cuRule);
        const flink = eachAd.querySelector(fuRule);

        if (clink && flink) {
          const clickPattern = normalizeAclkUrl(clink.href);

          adDetails[clickPattern] = {
            ts: Date.now(),
            query,
            furl: [flink.getAttribute('data-preconnect-urls'), flink.href] // At times there is a redirect chain, we only want the final domain.
          };

          noAdsOnThisPage += 1;
        }
      });
    });

    if (noAdsOnThisPage > 0) {
      chrome.runtime.sendMessage({
        source: CHROME_MSG_SOURCE,
        windowId,
        payload: {
          module: 'human-web',
          action: 'adClick',
          args: [{
            ads: adDetails
          }]
        }
      });
    }
  } catch (ee) {
    logException(ee);
  }
}

registerContentScript('http*', (window, chrome, windowId) => {
  const url = window.location.href;

  // Only add for main pages.
  if (window.top === window) {
    window.addEventListener('DOMContentLoaded', () => {
      parseDom(url, window, windowId);
    });
  }
});

var platform = {
  isMobile: false,
  isFirefox: true,
  isChromium: false,
  platformName: 'firefox'
};

const appInfo = Components.classes['@mozilla.org/xre/app-info;1'];
const versionChecker = Components.classes['@mozilla.org/xpcom/version-comparator;1'].getService(Components.interfaces.nsIVersionComparator);



const OS = appInfo.getService(Components.interfaces.nsIXULRuntime).OS.toLowerCase();
const OS_VERSION = Services.sysinfo.getProperty('version');

registerContentScript('http*', (window, chrome, windowId) => {
  let url = window.location.href;

  // do not check for iframes
  if (window.parent && window.parent === window) {
    let payload = {
      module: 'anti-phishing',
      action: 'isPhishingURL',
      args: [url]
    };

    chrome.runtime.sendMessage({
      source: CHROME_MSG_SOURCE,
      windowId,
      payload
    });
  }

  chrome.runtime.onMessage.addListener(msg => {
    if (!isCliqzContentScriptMsg(msg)) {
      return;
    }

    let WARNINGURL = `chrome://cliqz/content/anti-phishing/phishing-warning.html?u=`;
    // On chromium platform the windowid is a fake on (always === 1),
    // instead the message is sent to the tab through `tabs.sendMessage`
    const sameSourceWindow = msg.windowId === windowId || platform.isChromium;
    if (sameSourceWindow) {
      if (msg && msg.response && msg.response.type === 'phishingURL') {
        if (msg.response.block) {
          if (!platform.isChromium) {
            window.location = WARNINGURL + encodeURIComponent(window.location);
          }
        }
      }
    }
  });
});

function throttle$1(window, fn, threshhold) {
  let last;
  let timer;
  return function () {
    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    const now = Date.now();
    if (last && now < last + threshhold) {
      // reset timeout
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        last = now;
        fn(...args);
      }, threshhold);
    } else {
      last = now;
      fn(...args);
    }
  };
}

/* global window, chrome */
// Load content scripts from modules
if (typeof windowId === 'undefined') {
  window.windowId = getWindowId();
}

function getContextHTML(ev) {
  var target = ev.target,
      count = 0,
      html;

  try {
    while (true) {
      html = target.innerHTML;

      if (html.indexOf('http://') !== -1 || html.indexOf('https://') !== -1) {

        return html;
      }

      target = target.parentNode;

      count += 1;
      if (count > 4) break;
    }
  } catch (ee) {}
}

const whitelist = ['chrome://cliqz/', 'resource://cliqz/'].concat(config.settings.frameScriptWhitelist);

(function onDOMWindowCreated() {
  try {

    // we only handle HTML documents for now
    if (window.document.documentElement.nodeName.toLowerCase() !== 'html') {
      return;
    }

    runContentScripts(window, chrome, windowId);

    const windowTreeInformation = getWindowTreeInformation(window);
    const currentURL = () => window.location.href;
    const url = currentURL();

    let onMessage = function onMessage(ev) {
      let href = ev.target.location.href;

      let message = {};

      try {
        message = JSON.parse(ev.data);
      } catch (e) {
        // non Cliqz or invalid message should be ignored
      }

      if (!whitelist.some(function (url) {
        return href.indexOf(url) === 0;
      })) {
        return;
      }

      if (message.target !== 'cliqz') {
        return;
      }

      if (message.type === 'response') {
        return;
      }

      chrome.runtime.sendMessage({
        source: CHROME_MSG_SOURCE,
        origin: 'content',
        windowId: windowId,
        payload: message
      });
    };

    function onCallback(msg) {
      if (isDead()) {
        return;
      }

      if (!whitelist.some(function (url) {
        return currentURL().indexOf(url) === 0;
      })) {
        return;
      }

      if (msg.origin === 'content') {
        window.postMessage(JSON.stringify({
          target: 'cliqz',
          type: 'response',
          response: msg.response,
          action: msg.action,
          module: msg.module,
          requestId: msg.requestId
        }), '*');
      }
    }

    let fns = {
      postMessage: function postMessage(message) {
        window.postMessage(message, '*');
      },
      getHTML: function getHTML() {
        return window.document.documentElement.outerHTML;
      },
      queryHTML: function queryHTML(selector, attribute) {
        let attributes = attribute.split(',');

        return Array.prototype.map.call(window.document.querySelectorAll(selector), function (el) {
          if (attributes.length > 1) {
            return attributes.reduce(function (hash, attr) {
              hash[attr] = el[attr];
              return hash;
            }, {});
          } else {
            return el[attribute];
          }
        });
      },
      getCookie: function getCookie() {
        try {
          return window.document.cookie;
        } catch (e) {
          if (e instanceof DOMException && e.name == 'SecurityError') {
            return null;
          } else {
            throw e; // let others bubble up
          }
        }
      }
    };

    function onCore(msg) {
      let payload;

      if (isDead()) {
        return;
      }

      if (msg.action === 'unload') {
        stop();
        return;
      }

      var normalizedCurrentURL;
      if (msg.action === 'getHTML') {
        // Human web decodes the URI for internal storage.
        // Otherwise, searches containing special characters
        // (e.g., Umlaute, '&') will not be matched.
        msg.url = decodeURIComponent(msg.url);
        normalizedCurrentURL = decodeURIComponent(currentURL());
      } else {
        normalizedCurrentURL = currentURL();
      }

      let matchesCurrentUrl = msg.url === normalizedCurrentURL;
      // wild card for cliqz URLS
      if (msg.url && (msg.url.indexOf('resource://cliqz') === 0 || msg.url.indexOf('chrome://cliqz') === 0)) {
        if (normalizedCurrentURL.indexOf(msg.url) === 0) {
          matchesCurrentUrl = true;
        }
      }

      if (!matchesCurrentUrl) {
        return;
      }

      if (!(msg.action in fns)) {
        return;
      }

      try {
        payload = fns[msg.action].apply(null, msg.args || []);
        if (payload === null) {
          return;
        }
      } catch (e) {
        window.console.error('cliqz framescript:', e);
      }

      chrome.runtime.sendMessage({
        source: CHROME_MSG_SOURCE,
        origin: 'content',
        payload: payload,
        requestId: msg.requestId
      });
    }

    function proxyWindowEvent(action) {
      return function (ev) {
        chrome.runtime.sendMessage({
          source: CHROME_MSG_SOURCE,
          windowId: windowId,
          payload: {
            module: 'core',
            action: action,
            args: [{
              target: {
                baseURI: ev.target.baseURI,
                windowTreeInformation: windowTreeInformation
              }
            }]
          }
        });
      };
    }

    let onMouseDown = function onMouseDown(ev) {
      const linksSrc = [];
      if (window.parent !== window) {
        // collect srcipt links only for frames
        if (window.document && window.document.scripts) {
          for (let i = 0; i < window.document.scripts.length; i += 1) {
            const src = window.document.scripts[i].src;
            if (src.startsWith('http')) {
              linksSrc.push(src);
            }
          }
        }
      }

      let node = ev.target;
      if (node.nodeType !== 1) {
        node = node.parentNode;
      }

      let href = null;

      if (node.closest('a[href]')) {
        href = node.closest('a[href]').getAttribute('href');
      }

      chrome.runtime.sendMessage({
        source: CHROME_MSG_SOURCE,
        windowId: windowId,
        payload: {
          module: 'core',
          action: 'recordMouseDown',
          args: [{
            target: {
              windowTreeInformation: windowTreeInformation,
              baseURI: ev.target.baseURI,
              value: ev.target.value,
              href: ev.target.href,
              parentNode: {
                href: ev.target.parentNode.href
              },
              linksSrc
            }
          }, getContextHTML(ev), href]
        }
      });
    };

    let onReady = function onReady(event) {
      // ReportLang
      let lang = window.document.getElementsByTagName('html').item(0).getAttribute('lang');
      // don't analyse language for (i)frames
      let isTopWindow = !event.target.defaultView.frameElement;

      if (isTopWindow && lang) {
        chrome.runtime.sendMessage({
          source: CHROME_MSG_SOURCE,
          windowId: windowId,
          payload: {
            module: 'core',
            action: 'recordLang',
            args: [currentURL(), lang]
          }
        });
      }

      // ReportMeta
      let title = window.document.querySelector('title'),
          description = window.document.querySelector('meta[name=description]'),
          ogTitle = window.document.querySelector('meta[property="og:title"]'),
          ogDescription = window.document.querySelector('meta[property="og:description"]'),
          ogImage = window.document.querySelector('meta[property="og:image"]');

      if (isTopWindow) {
        chrome.runtime.sendMessage({
          source: CHROME_MSG_SOURCE,
          windowId: windowId,
          payload: {
            module: 'core',
            action: 'recordMeta',
            args: [currentURL(), {
              title: title && title.innerHTML,
              description: description && description.content,
              ogTitle: ogTitle && ogTitle.content,
              ogDescription: ogDescription && ogDescription.content,
              ogImage: ogImage && ogImage.content
            }]
          }
        });
      }
    };

    function onBackgroundMessage(message) {
      if (!isCliqzContentScriptMsg(message)) {
        return;
      }
      if (message.windowId === windowId) {
        onCallback(message);
      } else {
        onCore(message);
      }
    }

    window.addEventListener('message', onMessage);

    const onKeyPress = throttle$1(window, proxyWindowEvent('recordKeyPress'), 250);
    const onMouseMove = throttle$1(window, proxyWindowEvent('recordMouseMove'), 250);
    const onScroll = throttle$1(window, proxyWindowEvent('recordScroll'), 250);
    const onCopy = throttle$1(window, proxyWindowEvent('recordCopy'), 250);

    window.addEventListener('keypress', onKeyPress);
    window.addEventListener('mousemove', onMouseMove);
    window.addEventListener('mousedown', onMouseDown);
    window.addEventListener('scroll', onScroll);
    window.addEventListener('copy', onCopy);
    window.addEventListener('DOMContentLoaded', onReady);
    chrome.runtime.onMessage.addListener(onBackgroundMessage);

    function stop(ev) {
      if (ev && ev.target !== window.document) {
        return;
      }

      // detect dead windows
      // https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Errors/Dead_object
      try {
        String(window);
      } catch (e) {
        return;
      }

      chrome.runtime.onMessage.removeListener(onBackgroundMessage);
      window.removeEventListener('message', onMessage);
      window.removeEventListener('keypress', onKeyPress);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('mousedown', onMouseDown);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('copy', onCopy);
      window.removeEventListener('DOMContentLoaded', onReady);
    }

    function isDead() {
      try {
        currentURL();
        return false;
      } catch (e) {
        stop();
        return true;
      }
    }

    window.addEventListener('unload', stop);
  } catch (e) {
    window.console.error('Content Script error', e);
  }
})(undefined);

Object.defineProperty(exports, '__esModule', { value: true });

})));
