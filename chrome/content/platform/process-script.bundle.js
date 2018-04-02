(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (factory((global.CliqzGlobal = global.CliqzGlobal || {})));
}(this, (function (exports) { 'use strict';

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

/* global Components, console */
try {
  Components.utils.import("resource://gre/modules/Console.jsm");
} catch (e) {
  // Older version of Firefox
  Components.utils.import("resource://gre/modules/devtools/Console.jsm");
}

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

/* globals Store */
function unload() {
  // unloading both protocols as we don't know which one was used by previous
  // extension
  try {
    Components.utils.unload('resource://cliqz/store.jsm');
  } catch (e) {
    // may blow if missing
  }
  try {
    Components.utils.unload('chrome://cliqz/content/store.jsm');
  } catch (e) {
    // may blow if missing
  }
}

// unloading in case previous version did not do that
unload();

Components.utils.import(`${config.baseURL}store.jsm`);

var store$1 = Store.state;

function nextTick(fn) {
  for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
    args[_key2 - 1] = arguments[_key2];
  }

  return Promise.resolve().then(() => fn(...args));
}

const listeners = new Set();

var store = {
  update(_ref) {
    let module = _ref.module,
        data = _ref.data;

    store$1[module] = Object.assign(store$1[module] || data, data);

    nextTick(() => {
      listeners.forEach(l => {
        try {
          l(module);
        } catch (e) {
          console$1.error('Content Store error', e);
        }
      });
    });
  },

  get(path) {
    return store$1[path];
  },

  addListener(listener) {
    listeners.add(listener);
  },

  removeListener(listener) {
    listeners.delete(listener);
  },

  unload() {
    if (unload) {
      unload();
    }
  }
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

/* eslint-enable */

/* eslint-disable */
function getWindowId(window) {
  return window.QueryInterface(Components.interfaces.nsIInterfaceRequestor).getInterface(Components.interfaces.nsIDOMWindowUtils).outerWindowID;
}
/* eslint-enable */

const CHROME_MSG_SOURCE = 'cliqz-content-script';

/*
 * This method implements the publish subscribe design pattern
 *
 * Event naming scheme:
 *    cliqz.module_name.event_name
 *
 *  single sender -> multiple potential recipients
 *    for example: cliqz.core.urlbar_focus (inform others about urlbar focus)
 *    module_name describes sender
 *  multiple potential senders -> single recipient
 *    for example: cliqz.msg_center.show_message (tell the message center to show a message)
 *    module_name describes recipient (this is more like a RPC)
 */

var CliqzEvents = CliqzEvents || {
  //use a javascript object to push the message ids and the callbacks
  cache: {},
  tickCallbacks: [],
  /*
   * Publish events of interest with a specific id
   */
  queue: [],

  pub: function pub(id) {
    const args = Array.prototype.slice.call(arguments, 1);

    const callbacks = (CliqzEvents.cache[id] || []).map(ev => {
      return nextTick(() => {
        ev.apply(null, args);
      }).catch(e => {
        console$1.error(`CliqzEvents error: ${id}`, e);
      });
    });

    const finishedPromise = Promise.all(callbacks).then(() => {
      const index = this.queue.indexOf(finishedPromise);
      this.queue.splice(index, 1);
      if (this.queue.length === 0) {
        this.triggerNextTick();
      }
    });
    this.queue.push(finishedPromise);
  },

  triggerNextTick() {
    this.tickCallbacks.forEach(cb => {
      try {
        cb();
      } catch (e) {}
    });
    this.tickCallbacks = [];
  },

  nextTick() {
    let cb = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : () => {};

    this.tickCallbacks = this.tickCallbacks || [];
    this.tickCallbacks.push(cb);
  },

  /* Subscribe to events of interest
   * with a specific id and a callback
   * to be executed when the event is observed
   */
  sub: function sub(id, fn) {
    CliqzEvents.cache[id] = CliqzEvents.cache[id] || [];
    CliqzEvents.cache[id].push(fn);
  },

  subscribe(eventName, callback, that) {
    let cb;
    if (that) {
      cb = callback.bind(that);
    } else {
      cb = callback;
    }

    CliqzEvents.sub(eventName, cb);

    return {
      unsubscribe() {
        CliqzEvents.un_sub(eventName, cb);
      }
    };
  },

  un_sub: function un_sub(id, fn) {
    if (!CliqzEvents.cache[id] || CliqzEvents.cache[id].length === 0) {
      console$1.error(id, "Trying to unsubscribe event that had no subscribers");
      return;
    }

    let index = CliqzEvents.cache[id].indexOf(fn);
    if (index > -1) {
      CliqzEvents.cache[id].splice(index, 1);
    } else {
      console$1.error(id, "Trying to unsubscribe an unknown listener");
    }
  },

  clean_channel: function clean_channel(id) {
    if (!CliqzEvents.cache[id]) {
      throw "Trying to unsubscribe an unknown channel";
    }
    CliqzEvents.cache[id] = [];
  },

  /**
   * Adds a listener to eventTarget for events of type eventType, and republishes them
   *  through CliqzEvents with id cliqzEventName.
   */
  proxyEvent(cliqzEventName, eventTarget, eventType) {
    let propagate = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : false;
    let transform = arguments[4];

    const publisher = CliqzEvents.pub.bind(CliqzEvents, cliqzEventName);

    function handler() {
      const args = transform ? transform.apply(null, arguments) : arguments;
      publisher.apply(null, args);
    }

    eventTarget.addEventListener(eventType, handler, propagate);
    return {
      unsubscribe() {
        eventTarget.removeEventListener(eventType, handler);
      }
    };
  },

  nextId: function nextId() {
    nextId.id = nextId.id || 0;
    nextId.id += 1;
    return nextId.id;
  }
};

/** Returns true if the give windowID represents an open browser tab's windowID.
 */
function isWindowActive(windowID) {
  const wm = Components.classes['@mozilla.org/appshell/window-mediator;1'].getService(Components.interfaces.nsIWindowMediator);
  const browserEnumerator = wm.getEnumerator('navigator:browser');

  // the windowID should be an integer
  const numId = Number(windowID);
  if (numId <= 0) {
    return false;
  }

  while (browserEnumerator.hasMoreElements()) {
    const browserWin = browserEnumerator.getNext();
    const tabbrowser = browserWin.gBrowser;

    // check if tab is open in this window
    const win = tabbrowser.getBrowserForOuterWindowID(numId);

    // check for http URI.
    if (win !== undefined) {
      return win.currentURI && (win.currentURI.schemeIs('http') || win.currentURI.schemeIs('https'));
    }
  }

  return false;
}

function checkIsWindowActive(windowID) {
  return Promise.resolve(isWindowActive(windowID));
}

















/** Reset changed prefs on uninstall */


function getThemeStyle() {
  const selectedThemeID = prefs.get('lightweightThemes.selectedThemeID', '', '');
  return selectedThemeID === 'firefox-compact-dark@mozilla.org' ? 'dark' : 'light';
}

let branch; // cliqz specific prefs
let branchLightweightThemes; // theme specific prefs

const observer = {
  observe: (subject, topic, data) => {
    CliqzEvents.pub('prefchange', data);
  }
};

const observerLightweightThemes = {
  observe: (subject, topic, data) => {
    if (data === 'selectedThemeID') {
      CliqzEvents.pub('hostthemechange', getThemeStyle());
    }
  }
};





function getLang() {
  return prefs.get('general.useragent.locale', 'en', '');
}







function waitForAsync(fn) {
  let depth = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 200;

  if (depth <= 0) {
    return Promise.resolve('waitForAsync max depth');
  }

  return fn().then(value => {
    if (value) {
      return Promise.resolve();
    }
    return Promise.reject();
  }).catch(() => new Promise(resolve => {
    setTimeout(() => {
      resolve(waitForAsync(fn, depth - 1));
    }, 100);
  }));
}

function getCurrentgBrowser() {
  return Components.classes['@mozilla.org/appshell/window-mediator;1'].getService(Components.interfaces.nsIWindowMediator).getMostRecentWindow('navigator:browser').gBrowser;
}

// String compression used Firefox API.
// Based on https://gist.github.com/Endyl/c12438b6e68bbca1bab5
const CC = Components.Constructor;
const Ci = Components.interfaces;
const Cc = Components.classes;

const UncompressConverter = CC('@mozilla.org/streamconv;1?from=gzip&to=uncompressed', 'nsIStreamConverter', 'asyncConvertData');
const CompressConverter = CC('@mozilla.org/streamconv;1?from=uncompressed&to=gzip', 'nsIStreamConverter', 'asyncConvertData');
const StringInputStream = CC('@mozilla.org/io/string-input-stream;1', 'nsIStringInputStream');

/**
 * For request simulation
 */
function Accumulator() {
  this.buffer = [];
}
Accumulator.prototype = {
  buffer: null,
  onStartRequest: function onStartRequest(aRequest, aContext) {},
  onStopRequest: function onStopRequest(aRequest, aContext, aStatusCode) {},
  onDataAvailable: function onDataAvailable(aRequest, aContext, aInputStream, aOffset, aCount) {
    var stream, input;

    stream = Cc["@mozilla.org/binaryinputstream;1"].createInstance(Ci.nsIBinaryInputStream);
    stream.setInputStream(aInputStream);

    input = stream.readByteArray(aCount);

    this.buffer = this.buffer.concat(input);
  }
};

function simulateRequest(aConverter, aStream, aContentLength) {
  aConverter.onStartRequest(null, null);
  aConverter.onDataAvailable(null, null, aStream, 0, aContentLength);
  aConverter.onStopRequest(null, null, 201 /* 417 */);
}

function compressString(aString) {
  var accumulator, converter, stream, utf8String;

  // Converts a Javascript string into UTF-8 encoding
  // (see http://ecmanaut.blogspot.de/2006/07/encoding-decoding-utf8-in-javascript.html)
  utf8String = unescape(encodeURIComponent(aString));
  accumulator = new Accumulator();
  converter = new CompressConverter('uncompresssed', 'gzip', accumulator, null);
  stream = new StringInputStream();
  stream.data = utf8String;
  simulateRequest(converter, stream, utf8String.length);

  return Uint8Array.from(accumulator.buffer);
}

function uncompressString(aString) {
  var accumulator, converter, stream;

  accumulator = new Accumulator();
  converter = new UncompressConverter('gzip', 'uncompressed', accumulator, null);
  stream = new StringInputStream();
  stream.data = String.fromCharCode.apply(null, aString);
  simulateRequest(converter, stream, aString.length);

  return String.fromCharCode.apply(null, accumulator.buffer);
}

function compatabilityCheck() {
  return Uint8Array.from !== undefined;
}

var compress$1 = false;
var decompress$1 = false;

if (compatabilityCheck()) {
  compress$1 = compressString;
  decompress$1 = uncompressString;
}

/**
 *  Compress a string
 *
 *  @param {string} string to compress
 *  @returns {UInt8Array} compressed data
 */
let compress$$1 = compress$1 || false;

/**
 *  Decompress a Gzip compressed string
 *
 *  @param {UInt8Array} gzipped data
 *  @returns {string} decompressed string
 */

const Ci$1 = Components.interfaces;

let XMLHttpRequestFactory = () => {
  if (typeof XMLHttpRequest === 'undefined') {
    // imported by default in bootstrap scope but not present in
    // process scripts by default
    Components.utils.importGlobalProperties(['XMLHttpRequest']);
  }
  return XMLHttpRequest;
};

function setPrivateFlags(request) {
  if (request.channel) {
    request.channel.loadFlags |= Ci$1.nsIRequest.LOAD_ANONYMOUS | Ci$1.nsIRequest.LOAD_BYPASS_CACHE | Ci$1.nsIRequest.INHIBIT_PERSISTENT_CACHING;
  }
}

function setBackgroundRequest(request) {
  req.mozBackgroundRequest = true;
}

const chromeUrlHandler = false;

/* global fetch */
if (typeof fetch === 'undefined') {
  Components.utils.importGlobalProperties(['fetch']);
}

/** Legacy httpHandler implementation, based on XMLHttpRequest.
 *
 *  If you want to make HTTP requests, please check out the fetch API (platform/fetch)
 */
function defaultHttpHandler(method, url, callback, onerror, timeout, data, sync, encoding, background) {
  if (method === 'GET' && url.startsWith('chrome://') && chromeUrlHandler) {
    chromeUrlHandler(url, callback, onerror);
    return;
  }
  const XMLHttpRequest = XMLHttpRequestFactory();
  var req = new XMLHttpRequest();
  req.timestamp = +new Date();
  if (background) {
    setBackgroundRequest(req);
  }
  req.open(method, url, !sync);
  setPrivateFlags(req);
  req.overrideMimeType && req.overrideMimeType('application/json');
  req.setRequestHeader('Content-Type', 'application/json');

  // headers for compressed data
  if (encoding) {
    req.setRequestHeader('Content-Encoding', encoding);
  }

  req.onload = function () {
    if (!parseInt) return; //parseInt is not a function after extension disable/uninstall

    var statusClass = parseInt(req.status / 100);
    if (statusClass == 2 || statusClass == 3 || statusClass == 0 /* local files */) {
        callback && callback(req);
      } else {
      const error = `loaded with non-200 ${url} (status=${req.status} ${req.statusText}) CLIQZEnvironment.httpHandler`;
      console$1.log(error);
      onerror && onerror(error);
    }
  };
  req.onerror = function () {
    const error = `error loading ${url} (status=${req.status} ${req.statusText}) CLIQZEnvironment.httpHandler`;
    console$1.log(error);
    onerror && onerror(error);
  };
  req.ontimeout = function () {
    const error = `timeout for ${url} CLIQZEnvironment.httpHandler`;
    console$1.log(error);
    onerror && onerror(error);
  };

  if (callback) {
    if (timeout) {
      req.timeout = parseInt(timeout);
    } else {
      req.timeout = ['POST', 'PUT'].indexOf(method) >= 0 ? 10000 : 1000;
    }
  }

  req.send(data);
  return req;
}

let activeHandler = defaultHttpHandler;

function httpHandler() {
  return activeHandler(...arguments);
}

/**
 *  Replace default http handler with fn
 */


const compressionAvailable = Boolean(compress$$1);
let compressionExclusions = new Set();

function compressionEnabled(url) {
  return compressionAvailable && !compressionExclusions.has(url);
}

/**
 *  Add a url for which we should not compress when using promiseHttpHandler
 */

var getLocaleObject = function (url) {
  // Warning - sync request
  return JSON.parse(httpHandler('GET', url, null, null, null, null, true).response);
};

const SUPPORTED_LANGS = ['de', 'en', 'fr'];

var getSupportedLanguage = function (lang) {
  if (SUPPORTED_LANGS.indexOf(lang) !== -1) {
    return lang;
  }

  return 'en';
};

const getLanguageFromLocale = locale => locale.match(/([a-z]+)(?:[-_]([A-Z]+))?/)[1];

const i18n = {
  locale: {},
  currLocale: '',
  LOCALE_PATH: `${config.baseURL}static/locale`
};

const getLocaleFile = locale => {
  const url = `${i18n.LOCALE_PATH}/${locale}/cliqz.json`;
  // Warning - sync request
  const localeObject = getLocaleObject(url, locale);
  i18n.currLocale = locale;
  i18n.locale.default = localeObject;
  i18n.locale[locale] = localeObject;
};

const setLang = locale => {
  const lang = getLanguageFromLocale(locale);
  const supportedLang = getSupportedLanguage(lang);

  i18n.PREFERRED_LANGUAGE = locale;
  getLocaleFile(supportedLang);
};

const loadTranslation = () => setLang(getLang());

function getMessage(key) {
  let substitutions = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!key) {
    return '';
  }

  if (Object.keys(i18n.locale).length === 0) {
    loadTranslation();
  }

  const str = (i18n.locale[i18n.currLocale][key] || { message: key }).message || key;

  let subs = substitutions;

  if (!Array.isArray(substitutions)) {
    subs = [substitutions];
  }

  function replacer(matched, index, dollarSigns) {
    if (index) {
      const i = parseInt(index, 10) - 1;
      return i in subs ? subs[i] : '';
    }

    // For any series of contiguous `$`s, the first is dropped, and
    // the rest remain in the output string.
    return dollarSigns;
  }

  return str.replace(/\$(?:([1-9]\d*)|(\$+))/g, replacer);
}

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

/* globals sendAsyncMessage, removeMessageListener, addMessageListener */

const send = sendAsyncMessage.bind(null, 'cliqz');

/**
 * Run function for all existing documents.
 */
function forEachTab(fn) {
  const windowEnumerator = Services.ww.getWindowEnumerator();
  while (windowEnumerator.hasMoreElements()) {
    const window$$1 = windowEnumerator.getNext();

    if (window$$1.gBrowser && window$$1.gBrowser.tabs) {
      // this is a browser (chrome) window so we need to inject the
      // content scripts in all openend tabs
      window$$1.gBrowser.tabs.forEach(tab => {
        try {
          fn(tab.linkedBrowser.contentDocument);
        } catch (e) {
          // failed to load into existing window
        }
      });
    } else {
      // this is a content window so we need to inject content scripts directly
      try {
        fn(window$$1.document);
      } catch (e) {
        // failed to load into existing window
      }
    }
  }
}

const DocumentManager = {

  init() {
    this._windowsInfo = new WeakMap();
    Services.obs.addObserver(this, 'document-element-inserted', false);
    forEachTab(this.observe.bind(this));
  },

  uninit() {
    forEachTab(this.cleanup.bind(this));
    Services.obs.removeObserver(this, 'document-element-inserted');
  },

  cleanup(document) {
    const window$$1 = document && document.defaultView;
    if (!document || !document.location || !window$$1 || !this._windowsInfo.has(window$$1)) {
      return;
    }
    const info = this._windowsInfo.get(window$$1);

    removeMessageListener(`window-${info.windowId}`, info.onMessage);
    removeMessageListener('cliqz:core', info.onMessage);

    if (info.unsafeWindow) {
      delete info.unsafeWindow.chrome;
    }

    info.onUnload();
  },

  observe(document) {
    const window$$1 = document && document.defaultView;
    if (!document || !document.location || !window$$1) {
      return;
    }

    const windowId = getWindowId(window$$1);
    const listeners = new Set();
    let unsafeWindow = null;

    const onMessage = incomingMessage => {
      listeners.forEach(l => {
        try {
          const unsafeMessage = Components.utils.cloneInto(_extends({}, incomingMessage.data, {
            type: 'response'
          }), window$$1);

          l(unsafeMessage);
        } catch (e) {
          // don't throw if any of the listeners thrown
        }
      });
    };

    addMessageListener('cliqz:core', onMessage);
    addMessageListener(`window-${windowId}`, onMessage);

    const onUnload = () => {
      removeMessageListener(`window-${windowId}`, onMessage);
      removeMessageListener('cliqz:core', onMessage);
      this._windowsInfo.delete(window$$1);
    };

    window$$1.addEventListener('unload', onUnload);

    const sender = {
      url: window$$1.location.href,
      tab: {
        id: getWindowId(window$$1.top),
        url: window$$1.top.location.href
      }
    };

    const whitelistedPages = ['resource://cliqz', 'chrome://cliqz', config.settings.NEW_TAB_URL].concat(config.settings.frameScriptWhitelist || []);

    if (whitelistedPages.some(url => window$$1.location.href.indexOf(url) === 0)) {
      const safeChrome = {
        runtime: {
          sendMessage(message) {
            send({
              source: CHROME_MSG_SOURCE,
              origin: 'content',
              windowId,
              payload: message,
              sender
            });
          },
          onMessage: {
            addListener(listener) {
              listeners.add(listener);
            },
            removeListener(listener) {
              listeners.delete(listener);
            }
          }
        },
        i18n: {
          getMessage
        }
      };

      unsafeWindow = Components.utils.waiveXrays(window$$1);
      unsafeWindow.chrome = Components.utils.cloneInto(safeChrome, window$$1, {
        cloneFunctions: true
      });
    }

    const chrome$$1 = {
      runtime: {
        sendMessage(message) {
          send(_extends({}, message, {
            sender,
            source: CHROME_MSG_SOURCE
          }));
        },
        onMessage: {
          addListener(listener) {
            listeners.add(listener);
          },
          removeListener(listener) {
            listeners.delete(listener);
          }
        }
      }
    };
    Services.scriptloader.loadSubScriptWithOptions('chrome://cliqz/content/core/content-script.bundle.js', {
      target: {
        window: window$$1,
        chrome: chrome$$1,
        windowId
      },
      ignoreCache: true
    });

    this._windowsInfo.set(window$$1, {
      windowId,
      onMessage,
      unsafeWindow,
      onUnload
    });
  }
};

DocumentManager.init();

// Create a new processScriptId
const processId = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, c => {
  /* eslint-disable */
  const r = Math.random() * 16 | 0,
        v = c === 'x' ? r : r & 0x3 | 0x8;
  /* eslint-enable */
  return v.toString(16);
});

send({
  payload: {
    module: 'core',
    action: 'notifyProcessInit',
    args: [processId],
    source: CHROME_MSG_SOURCE
  }
});

const dispatchMessage = msg => {
  if (msg.action === 'updateStore') {
    store.update({
      module: msg.args[0].module,
      data: msg.args[0].data
    });
  }
};

addMessageListener(`cliqz:process-script-${processId}`, msg => dispatchMessage(msg.data));

/**
 * make sure to unload propertly
 */
addMessageListener('cliqz:process-script', function ps(msg) {
  const data = typeof msg.data === 'string' ? {
    action: msg.data
  } : msg.data;
  if (data.action === 'unload') {
    store.unload();
    DocumentManager.uninit();
    removeMessageListener('cliqz:process-script', ps);
    removeMessageListener(`cliqz:process-script-${processId}`, dispatchMessage);
  } else {
    dispatchMessage(data);
  }
});

Object.defineProperty(exports, '__esModule', { value: true });

})));
