!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], [], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;
$__System.registerDynamic('b', [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  var VALID_HOSTNAME_VALUE = 0;

  /**
   * Return min(a, b), handling possible `null` values.
   *
   * @param {number|null} a
   * @param {number|null} b
   * @return {number|null}
   */
  function minIndex(a, b) {
    if (a === null) {
      return b;
    } else if (b === null) {
      return a;
    }

    return a < b ? a : b;
  }

  /**
   * Insert a public suffix rule in the `trie`.
   *
   * @param {object} rule
   * @param {object} trie
   * @return {object} trie (updated)
   */
  function insertInTrie(rule, trie) {
    var parts = rule.parts;
    var node = trie;

    for (var i = 0; i < parts.length; i += 1) {
      var part = parts[i];
      var nextNode = node[part];
      if (nextNode === undefined) {
        nextNode = Object.create(null);
        node[part] = nextNode;
      }

      node = nextNode;
    }

    node.$ = VALID_HOSTNAME_VALUE;

    return trie;
  }

  /**
   * Recursive lookup of `parts` (starting at `index`) in the tree.
   *
   * @param {array} parts
   * @param {object} trie
   * @param {number} index - when to start in `parts` (initially: length - 1)
   * @return {number} size of the suffix found (in number of parts matched)
   */
  function lookupInTrie(parts, trie, index) {
    var part;
    var nextNode;
    var publicSuffixIndex = null;

    // We have a match!
    if (trie.$ !== undefined) {
      publicSuffixIndex = index + 1;
    }

    // No more `parts` to look for
    if (index === -1) {
      return publicSuffixIndex;
    }

    part = parts[index];

    // Check branch corresponding to next part of hostname
    nextNode = trie[part];
    if (nextNode !== undefined) {
      publicSuffixIndex = minIndex(publicSuffixIndex, lookupInTrie(parts, nextNode, index - 1));
    }

    // Check wildcard branch
    nextNode = trie['*'];
    if (nextNode !== undefined) {
      publicSuffixIndex = minIndex(publicSuffixIndex, lookupInTrie(parts, nextNode, index - 1));
    }

    return publicSuffixIndex;
  }

  /**
   * Contains the public suffix ruleset as a Trie for efficient look-up.
   *
   * @constructor
   */
  function SuffixTrie(rules) {
    this.exceptions = Object.create(null);
    this.rules = Object.create(null);

    if (rules) {
      for (var i = 0; i < rules.length; i += 1) {
        var rule = rules[i];
        if (rule.exception) {
          insertInTrie(rule, this.exceptions);
        } else {
          insertInTrie(rule, this.rules);
        }
      }
    }
  }

  /**
   * Load the trie from JSON (as serialized by JSON.stringify).
   */
  SuffixTrie.fromJson = function (json) {
    var trie = new SuffixTrie();

    trie.exceptions = json.exceptions;
    trie.rules = json.rules;

    return trie;
  };

  /**
   * Check if `value` is a valid TLD.
   */
  SuffixTrie.prototype.hasTld = function (value) {
    // All TLDs are at the root of the Trie.
    return this.rules[value] !== undefined;
  };

  /**
   * Check if `hostname` has a valid public suffix in `trie`.
   *
   * @param {string} hostname
   * @return {string|null} public suffix
   */
  SuffixTrie.prototype.suffixLookup = function (hostname) {
    var parts = hostname.split('.');

    // Look for a match in rules
    var publicSuffixIndex = lookupInTrie(parts, this.rules, parts.length - 1);

    if (publicSuffixIndex === null) {
      return null;
    }

    // Look for exceptions
    var exceptionIndex = lookupInTrie(parts, this.exceptions, parts.length - 1);

    if (exceptionIndex !== null) {
      return parts.slice(exceptionIndex + 1).join('.');
    }

    return parts.slice(publicSuffixIndex).join('.');
  };

  module.exports = SuffixTrie;
});
$__System.registerDynamic("c", [], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  module.exports = { "exceptions": { "ck": { "www": { "$": 0 } }, "jp": { "kawasaki": { "city": { "$": 0 } }, "kitakyushu": { "city": { "$": 0 } }, "kobe": { "city": { "$": 0 } }, "nagoya": { "city": { "$": 0 } }, "sapporo": { "city": { "$": 0 } }, "sendai": { "city": { "$": 0 } }, "yokohama": { "city": { "$": 0 } } } }, "rules": { "ac": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "mil": { "$": 0 }, "org": { "$": 0 } }, "ad": { "$": 0, "nom": { "$": 0 } }, "ae": { "$": 0, "co": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "sch": { "$": 0 }, "ac": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "blogspot": { "$": 0 }, "nom": { "$": 0 } }, "aero": { "$": 0, "accident-investigation": { "$": 0 }, "accident-prevention": { "$": 0 }, "aerobatic": { "$": 0 }, "aeroclub": { "$": 0 }, "aerodrome": { "$": 0 }, "agents": { "$": 0 }, "aircraft": { "$": 0 }, "airline": { "$": 0 }, "airport": { "$": 0 }, "air-surveillance": { "$": 0 }, "airtraffic": { "$": 0 }, "air-traffic-control": { "$": 0 }, "ambulance": { "$": 0 }, "amusement": { "$": 0 }, "association": { "$": 0 }, "author": { "$": 0 }, "ballooning": { "$": 0 }, "broker": { "$": 0 }, "caa": { "$": 0 }, "cargo": { "$": 0 }, "catering": { "$": 0 }, "certification": { "$": 0 }, "championship": { "$": 0 }, "charter": { "$": 0 }, "civilaviation": { "$": 0 }, "club": { "$": 0 }, "conference": { "$": 0 }, "consultant": { "$": 0 }, "consulting": { "$": 0 }, "control": { "$": 0 }, "council": { "$": 0 }, "crew": { "$": 0 }, "design": { "$": 0 }, "dgca": { "$": 0 }, "educator": { "$": 0 }, "emergency": { "$": 0 }, "engine": { "$": 0 }, "engineer": { "$": 0 }, "entertainment": { "$": 0 }, "equipment": { "$": 0 }, "exchange": { "$": 0 }, "express": { "$": 0 }, "federation": { "$": 0 }, "flight": { "$": 0 }, "freight": { "$": 0 }, "fuel": { "$": 0 }, "gliding": { "$": 0 }, "government": { "$": 0 }, "groundhandling": { "$": 0 }, "group": { "$": 0 }, "hanggliding": { "$": 0 }, "homebuilt": { "$": 0 }, "insurance": { "$": 0 }, "journal": { "$": 0 }, "journalist": { "$": 0 }, "leasing": { "$": 0 }, "logistics": { "$": 0 }, "magazine": { "$": 0 }, "maintenance": { "$": 0 }, "media": { "$": 0 }, "microlight": { "$": 0 }, "modelling": { "$": 0 }, "navigation": { "$": 0 }, "parachuting": { "$": 0 }, "paragliding": { "$": 0 }, "passenger-association": { "$": 0 }, "pilot": { "$": 0 }, "press": { "$": 0 }, "production": { "$": 0 }, "recreation": { "$": 0 }, "repbody": { "$": 0 }, "res": { "$": 0 }, "research": { "$": 0 }, "rotorcraft": { "$": 0 }, "safety": { "$": 0 }, "scientist": { "$": 0 }, "services": { "$": 0 }, "show": { "$": 0 }, "skydiving": { "$": 0 }, "software": { "$": 0 }, "student": { "$": 0 }, "trader": { "$": 0 }, "trading": { "$": 0 }, "trainer": { "$": 0 }, "union": { "$": 0 }, "workinggroup": { "$": 0 }, "works": { "$": 0 } }, "af": { "$": 0, "gov": { "$": 0 }, "com": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 }, "edu": { "$": 0 } }, "ag": { "$": 0, "com": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 }, "co": { "$": 0 }, "nom": { "$": 0 } }, "ai": { "$": 0, "off": { "$": 0 }, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "nom": { "$": 0 } }, "al": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "blogspot": { "$": 0 }, "nom": { "$": 0 } }, "am": { "$": 0, "blogspot": { "$": 0 } }, "ao": { "$": 0, "ed": { "$": 0 }, "gv": { "$": 0 }, "og": { "$": 0 }, "co": { "$": 0 }, "pb": { "$": 0 }, "it": { "$": 0 } }, "aq": { "$": 0 }, "ar": { "$": 0, "com": { "$": 0, "blogspot": { "$": 0 } }, "edu": { "$": 0 }, "gob": { "$": 0 }, "gov": { "$": 0 }, "int": { "$": 0 }, "mil": { "$": 0 }, "musica": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "tur": { "$": 0 } }, "arpa": { "$": 0, "e164": { "$": 0 }, "in-addr": { "$": 0 }, "ip6": { "$": 0 }, "iris": { "$": 0 }, "uri": { "$": 0 }, "urn": { "$": 0 } }, "as": { "$": 0, "gov": { "$": 0 } }, "asia": { "$": 0, "cloudns": { "$": 0 } }, "at": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0, "blogspot": { "$": 0 } }, "gv": { "$": 0 }, "or": { "$": 0 }, "futurecms": { "*": { "$": 0 } }, "futurehosting": { "$": 0 }, "futuremailing": { "$": 0 }, "ortsinfo": { "ex": { "*": { "$": 0 } }, "kunden": { "*": { "$": 0 } } }, "biz": { "$": 0 }, "info": { "$": 0 }, "priv": { "$": 0 }, "12hp": { "$": 0 }, "2ix": { "$": 0 }, "4lima": { "$": 0 }, "lima-city": { "$": 0 } }, "au": { "$": 0, "com": { "$": 0, "blogspot": { "$": 0 } }, "net": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0, "act": { "$": 0 }, "nsw": { "$": 0 }, "nt": { "$": 0 }, "qld": { "$": 0 }, "sa": { "$": 0 }, "tas": { "$": 0 }, "vic": { "$": 0 }, "wa": { "$": 0 } }, "gov": { "$": 0, "qld": { "$": 0 }, "sa": { "$": 0 }, "tas": { "$": 0 }, "vic": { "$": 0 }, "wa": { "$": 0 } }, "asn": { "$": 0 }, "id": { "$": 0 }, "info": { "$": 0 }, "conf": { "$": 0 }, "oz": { "$": 0 }, "act": { "$": 0 }, "nsw": { "$": 0 }, "nt": { "$": 0 }, "qld": { "$": 0 }, "sa": { "$": 0 }, "tas": { "$": 0 }, "vic": { "$": 0 }, "wa": { "$": 0 } }, "aw": { "$": 0, "com": { "$": 0 } }, "ax": { "$": 0 }, "az": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "int": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "info": { "$": 0 }, "pp": { "$": 0 }, "mil": { "$": 0 }, "name": { "$": 0 }, "pro": { "$": 0 }, "biz": { "$": 0 } }, "ba": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "blogspot": { "$": 0 } }, "bb": { "$": 0, "biz": { "$": 0 }, "co": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "info": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "store": { "$": 0 }, "tv": { "$": 0 } }, "bd": { "*": { "$": 0 } }, "be": { "$": 0, "ac": { "$": 0 }, "blogspot": { "$": 0 }, "transurl": { "*": { "$": 0 } } }, "bf": { "$": 0, "gov": { "$": 0 } }, "bg": { "0": { "$": 0 }, "1": { "$": 0 }, "2": { "$": 0 }, "3": { "$": 0 }, "4": { "$": 0 }, "5": { "$": 0 }, "6": { "$": 0 }, "7": { "$": 0 }, "8": { "$": 0 }, "9": { "$": 0 }, "$": 0, "a": { "$": 0 }, "b": { "$": 0 }, "c": { "$": 0 }, "d": { "$": 0 }, "e": { "$": 0 }, "f": { "$": 0 }, "g": { "$": 0 }, "h": { "$": 0 }, "i": { "$": 0 }, "j": { "$": 0 }, "k": { "$": 0 }, "l": { "$": 0 }, "m": { "$": 0 }, "n": { "$": 0 }, "o": { "$": 0 }, "p": { "$": 0 }, "q": { "$": 0 }, "r": { "$": 0 }, "s": { "$": 0 }, "t": { "$": 0 }, "u": { "$": 0 }, "v": { "$": 0 }, "w": { "$": 0 }, "x": { "$": 0 }, "y": { "$": 0 }, "z": { "$": 0 }, "blogspot": { "$": 0 }, "barsy": { "$": 0 } }, "bh": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gov": { "$": 0 } }, "bi": { "$": 0, "co": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "or": { "$": 0 }, "org": { "$": 0 } }, "biz": { "$": 0, "cloudns": { "$": 0 }, "dyndns": { "$": 0 }, "for-better": { "$": 0 }, "for-more": { "$": 0 }, "for-some": { "$": 0 }, "for-the": { "$": 0 }, "selfip": { "$": 0 }, "webhop": { "$": 0 }, "mmafan": { "$": 0 }, "myftp": { "$": 0 }, "no-ip": { "$": 0 }, "dscloud": { "$": 0 } }, "bj": { "$": 0, "asso": { "$": 0 }, "barreau": { "$": 0 }, "gouv": { "$": 0 }, "blogspot": { "$": 0 } }, "bm": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "bn": { "*": { "$": 0 } }, "bo": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "gob": { "$": 0 }, "int": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 }, "mil": { "$": 0 }, "tv": { "$": 0 } }, "br": { "$": 0, "adm": { "$": 0 }, "adv": { "$": 0 }, "agr": { "$": 0 }, "am": { "$": 0 }, "arq": { "$": 0 }, "art": { "$": 0 }, "ato": { "$": 0 }, "b": { "$": 0 }, "belem": { "$": 0 }, "bio": { "$": 0 }, "blog": { "$": 0 }, "bmd": { "$": 0 }, "cim": { "$": 0 }, "cng": { "$": 0 }, "cnt": { "$": 0 }, "com": { "$": 0, "blogspot": { "$": 0 } }, "coop": { "$": 0 }, "cri": { "$": 0 }, "def": { "$": 0 }, "ecn": { "$": 0 }, "eco": { "$": 0 }, "edu": { "$": 0 }, "emp": { "$": 0 }, "eng": { "$": 0 }, "esp": { "$": 0 }, "etc": { "$": 0 }, "eti": { "$": 0 }, "far": { "$": 0 }, "flog": { "$": 0 }, "floripa": { "$": 0 }, "fm": { "$": 0 }, "fnd": { "$": 0 }, "fot": { "$": 0 }, "fst": { "$": 0 }, "g12": { "$": 0 }, "ggf": { "$": 0 }, "gov": { "$": 0, "ac": { "$": 0 }, "al": { "$": 0 }, "am": { "$": 0 }, "ap": { "$": 0 }, "ba": { "$": 0 }, "ce": { "$": 0 }, "df": { "$": 0 }, "es": { "$": 0 }, "go": { "$": 0 }, "ma": { "$": 0 }, "mg": { "$": 0 }, "ms": { "$": 0 }, "mt": { "$": 0 }, "pa": { "$": 0 }, "pb": { "$": 0 }, "pe": { "$": 0 }, "pi": { "$": 0 }, "pr": { "$": 0 }, "rj": { "$": 0 }, "rn": { "$": 0 }, "ro": { "$": 0 }, "rr": { "$": 0 }, "rs": { "$": 0 }, "sc": { "$": 0 }, "se": { "$": 0 }, "sp": { "$": 0 }, "to": { "$": 0 } }, "imb": { "$": 0 }, "ind": { "$": 0 }, "inf": { "$": 0 }, "jampa": { "$": 0 }, "jor": { "$": 0 }, "jus": { "$": 0 }, "leg": { "$": 0, "ac": { "$": 0 }, "al": { "$": 0 }, "am": { "$": 0 }, "ap": { "$": 0 }, "ba": { "$": 0 }, "ce": { "$": 0 }, "df": { "$": 0 }, "es": { "$": 0 }, "go": { "$": 0 }, "ma": { "$": 0 }, "mg": { "$": 0 }, "ms": { "$": 0 }, "mt": { "$": 0 }, "pa": { "$": 0 }, "pb": { "$": 0 }, "pe": { "$": 0 }, "pi": { "$": 0 }, "pr": { "$": 0 }, "rj": { "$": 0 }, "rn": { "$": 0 }, "ro": { "$": 0 }, "rr": { "$": 0 }, "rs": { "$": 0 }, "sc": { "$": 0 }, "se": { "$": 0 }, "sp": { "$": 0 }, "to": { "$": 0 } }, "lel": { "$": 0 }, "mat": { "$": 0 }, "med": { "$": 0 }, "mil": { "$": 0 }, "mp": { "$": 0 }, "mus": { "$": 0 }, "net": { "$": 0 }, "nom": { "*": { "$": 0 } }, "not": { "$": 0 }, "ntr": { "$": 0 }, "odo": { "$": 0 }, "org": { "$": 0 }, "poa": { "$": 0 }, "ppg": { "$": 0 }, "pro": { "$": 0 }, "psc": { "$": 0 }, "psi": { "$": 0 }, "qsl": { "$": 0 }, "radio": { "$": 0 }, "rec": { "$": 0 }, "recife": { "$": 0 }, "slg": { "$": 0 }, "srv": { "$": 0 }, "taxi": { "$": 0 }, "teo": { "$": 0 }, "tmp": { "$": 0 }, "trd": { "$": 0 }, "tur": { "$": 0 }, "tv": { "$": 0 }, "vet": { "$": 0 }, "vix": { "$": 0 }, "vlog": { "$": 0 }, "wiki": { "$": 0 }, "zlg": { "$": 0 } }, "bs": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "we": { "$": 0 } }, "bt": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "bv": { "$": 0 }, "bw": { "$": 0, "co": { "$": 0 }, "org": { "$": 0 } }, "by": { "$": 0, "gov": { "$": 0 }, "mil": { "$": 0 }, "com": { "$": 0, "blogspot": { "$": 0 } }, "of": { "$": 0 }, "nym": { "$": 0 } }, "bz": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "za": { "$": 0 }, "nym": { "$": 0 } }, "ca": { "$": 0, "ab": { "$": 0 }, "bc": { "$": 0 }, "mb": { "$": 0 }, "nb": { "$": 0 }, "nf": { "$": 0 }, "nl": { "$": 0 }, "ns": { "$": 0 }, "nt": { "$": 0 }, "nu": { "$": 0 }, "on": { "$": 0 }, "pe": { "$": 0 }, "qc": { "$": 0 }, "sk": { "$": 0 }, "yk": { "$": 0 }, "gc": { "$": 0 }, "awdev": { "*": { "$": 0 } }, "co": { "$": 0 }, "blogspot": { "$": 0 }, "no-ip": { "$": 0 } }, "cat": { "$": 0 }, "cc": { "$": 0, "cloudns": { "$": 0 }, "ftpaccess": { "$": 0 }, "game-server": { "$": 0 }, "myphotos": { "$": 0 }, "scrapping": { "$": 0 }, "twmail": { "$": 0 }, "fantasyleague": { "$": 0 } }, "cd": { "$": 0, "gov": { "$": 0 } }, "cf": { "$": 0, "blogspot": { "$": 0 } }, "cg": { "$": 0 }, "ch": { "$": 0, "square7": { "$": 0 }, "blogspot": { "$": 0 }, "gotdns": { "$": 0 }, "12hp": { "$": 0 }, "2ix": { "$": 0 }, "4lima": { "$": 0 }, "lima-city": { "$": 0 } }, "ci": { "$": 0, "org": { "$": 0 }, "or": { "$": 0 }, "com": { "$": 0 }, "co": { "$": 0 }, "edu": { "$": 0 }, "ed": { "$": 0 }, "ac": { "$": 0 }, "net": { "$": 0 }, "go": { "$": 0 }, "asso": { "$": 0 }, "xn--aroport-bya": { "$": 0 }, "int": { "$": 0 }, "presse": { "$": 0 }, "md": { "$": 0 }, "gouv": { "$": 0 } }, "ck": { "*": { "$": 0 } }, "cl": { "$": 0, "gov": { "$": 0 }, "gob": { "$": 0 }, "co": { "$": 0 }, "mil": { "$": 0 }, "blogspot": { "$": 0 }, "nom": { "$": 0 } }, "cm": { "$": 0, "co": { "$": 0 }, "com": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 } }, "cn": { "$": 0, "ac": { "$": 0 }, "com": { "$": 0, "amazonaws": { "compute": { "*": { "$": 0 } }, "eb": { "cn-north-1": { "$": 0 } }, "elb": { "*": { "$": 0 } }, "cn-north-1": { "s3": { "$": 0 } } } }, "edu": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "mil": { "$": 0 }, "xn--55qx5d": { "$": 0 }, "xn--io0a7i": { "$": 0 }, "xn--od0alg": { "$": 0 }, "ah": { "$": 0 }, "bj": { "$": 0 }, "cq": { "$": 0 }, "fj": { "$": 0 }, "gd": { "$": 0 }, "gs": { "$": 0 }, "gz": { "$": 0 }, "gx": { "$": 0 }, "ha": { "$": 0 }, "hb": { "$": 0 }, "he": { "$": 0 }, "hi": { "$": 0 }, "hl": { "$": 0 }, "hn": { "$": 0 }, "jl": { "$": 0 }, "js": { "$": 0 }, "jx": { "$": 0 }, "ln": { "$": 0 }, "nm": { "$": 0 }, "nx": { "$": 0 }, "qh": { "$": 0 }, "sc": { "$": 0 }, "sd": { "$": 0 }, "sh": { "$": 0 }, "sn": { "$": 0 }, "sx": { "$": 0 }, "tj": { "$": 0 }, "xj": { "$": 0 }, "xz": { "$": 0 }, "yn": { "$": 0 }, "zj": { "$": 0 }, "hk": { "$": 0 }, "mo": { "$": 0 }, "tw": { "$": 0 } }, "co": { "$": 0, "arts": { "$": 0 }, "com": { "$": 0, "blogspot": { "$": 0 } }, "edu": { "$": 0 }, "firm": { "$": 0 }, "gov": { "$": 0 }, "info": { "$": 0 }, "int": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "nom": { "$": 0 }, "org": { "$": 0 }, "rec": { "$": 0 }, "web": { "$": 0 }, "nodum": { "$": 0 } }, "com": { "$": 0, "amazonaws": { "compute": { "*": { "$": 0 } }, "compute-1": { "*": { "$": 0 } }, "us-east-1": { "$": 0, "dualstack": { "s3": { "$": 0 } } }, "elb": { "*": { "$": 0 } }, "s3": { "$": 0 }, "s3-ap-northeast-1": { "$": 0 }, "s3-ap-northeast-2": { "$": 0 }, "s3-ap-south-1": { "$": 0 }, "s3-ap-southeast-1": { "$": 0 }, "s3-ap-southeast-2": { "$": 0 }, "s3-ca-central-1": { "$": 0 }, "s3-eu-central-1": { "$": 0 }, "s3-eu-west-1": { "$": 0 }, "s3-eu-west-2": { "$": 0 }, "s3-external-1": { "$": 0 }, "s3-fips-us-gov-west-1": { "$": 0 }, "s3-sa-east-1": { "$": 0 }, "s3-us-gov-west-1": { "$": 0 }, "s3-us-east-2": { "$": 0 }, "s3-us-west-1": { "$": 0 }, "s3-us-west-2": { "$": 0 }, "ap-northeast-2": { "s3": { "$": 0 }, "dualstack": { "s3": { "$": 0 } }, "s3-website": { "$": 0 } }, "ap-south-1": { "s3": { "$": 0 }, "dualstack": { "s3": { "$": 0 } }, "s3-website": { "$": 0 } }, "ca-central-1": { "s3": { "$": 0 }, "dualstack": { "s3": { "$": 0 } }, "s3-website": { "$": 0 } }, "eu-central-1": { "s3": { "$": 0 }, "dualstack": { "s3": { "$": 0 } }, "s3-website": { "$": 0 } }, "eu-west-2": { "s3": { "$": 0 }, "dualstack": { "s3": { "$": 0 } }, "s3-website": { "$": 0 } }, "us-east-2": { "s3": { "$": 0 }, "dualstack": { "s3": { "$": 0 } }, "s3-website": { "$": 0 } }, "ap-northeast-1": { "dualstack": { "s3": { "$": 0 } } }, "ap-southeast-1": { "dualstack": { "s3": { "$": 0 } } }, "ap-southeast-2": { "dualstack": { "s3": { "$": 0 } } }, "eu-west-1": { "dualstack": { "s3": { "$": 0 } } }, "sa-east-1": { "dualstack": { "s3": { "$": 0 } } }, "s3-website-us-east-1": { "$": 0 }, "s3-website-us-west-1": { "$": 0 }, "s3-website-us-west-2": { "$": 0 }, "s3-website-ap-northeast-1": { "$": 0 }, "s3-website-ap-southeast-1": { "$": 0 }, "s3-website-ap-southeast-2": { "$": 0 }, "s3-website-eu-west-1": { "$": 0 }, "s3-website-sa-east-1": { "$": 0 } }, "elasticbeanstalk": { "$": 0, "ap-northeast-1": { "$": 0 }, "ap-northeast-2": { "$": 0 }, "ap-south-1": { "$": 0 }, "ap-southeast-1": { "$": 0 }, "ap-southeast-2": { "$": 0 }, "ca-central-1": { "$": 0 }, "eu-central-1": { "$": 0 }, "eu-west-1": { "$": 0 }, "eu-west-2": { "$": 0 }, "sa-east-1": { "$": 0 }, "us-east-1": { "$": 0 }, "us-east-2": { "$": 0 }, "us-gov-west-1": { "$": 0 }, "us-west-1": { "$": 0 }, "us-west-2": { "$": 0 } }, "on-aptible": { "$": 0 }, "myasustor": { "$": 0 }, "betainabox": { "$": 0 }, "bplaced": { "$": 0 }, "ar": { "$": 0 }, "br": { "$": 0 }, "cn": { "$": 0 }, "de": { "$": 0 }, "eu": { "$": 0 }, "gb": { "$": 0 }, "hu": { "$": 0 }, "jpn": { "$": 0 }, "kr": { "$": 0 }, "mex": { "$": 0 }, "no": { "$": 0 }, "qc": { "$": 0 }, "ru": { "$": 0 }, "sa": { "$": 0 }, "se": { "$": 0 }, "uk": { "$": 0 }, "us": { "$": 0 }, "uy": { "$": 0 }, "za": { "$": 0 }, "africa": { "$": 0 }, "gr": { "$": 0 }, "co": { "$": 0 }, "xenapponazure": { "$": 0 }, "jdevcloud": { "$": 0 }, "wpdevcloud": { "$": 0 }, "cloudcontrolled": { "$": 0 }, "cloudcontrolapp": { "$": 0 }, "drayddns": { "$": 0 }, "dreamhosters": { "$": 0 }, "mydrobo": { "$": 0 }, "dyndns-at-home": { "$": 0 }, "dyndns-at-work": { "$": 0 }, "dyndns-blog": { "$": 0 }, "dyndns-free": { "$": 0 }, "dyndns-home": { "$": 0 }, "dyndns-ip": { "$": 0 }, "dyndns-mail": { "$": 0 }, "dyndns-office": { "$": 0 }, "dyndns-pics": { "$": 0 }, "dyndns-remote": { "$": 0 }, "dyndns-server": { "$": 0 }, "dyndns-web": { "$": 0 }, "dyndns-wiki": { "$": 0 }, "dyndns-work": { "$": 0 }, "blogdns": { "$": 0 }, "cechire": { "$": 0 }, "dnsalias": { "$": 0 }, "dnsdojo": { "$": 0 }, "doesntexist": { "$": 0 }, "dontexist": { "$": 0 }, "doomdns": { "$": 0 }, "dyn-o-saur": { "$": 0 }, "dynalias": { "$": 0 }, "est-a-la-maison": { "$": 0 }, "est-a-la-masion": { "$": 0 }, "est-le-patron": { "$": 0 }, "est-mon-blogueur": { "$": 0 }, "from-ak": { "$": 0 }, "from-al": { "$": 0 }, "from-ar": { "$": 0 }, "from-ca": { "$": 0 }, "from-ct": { "$": 0 }, "from-dc": { "$": 0 }, "from-de": { "$": 0 }, "from-fl": { "$": 0 }, "from-ga": { "$": 0 }, "from-hi": { "$": 0 }, "from-ia": { "$": 0 }, "from-id": { "$": 0 }, "from-il": { "$": 0 }, "from-in": { "$": 0 }, "from-ks": { "$": 0 }, "from-ky": { "$": 0 }, "from-ma": { "$": 0 }, "from-md": { "$": 0 }, "from-mi": { "$": 0 }, "from-mn": { "$": 0 }, "from-mo": { "$": 0 }, "from-ms": { "$": 0 }, "from-mt": { "$": 0 }, "from-nc": { "$": 0 }, "from-nd": { "$": 0 }, "from-ne": { "$": 0 }, "from-nh": { "$": 0 }, "from-nj": { "$": 0 }, "from-nm": { "$": 0 }, "from-nv": { "$": 0 }, "from-oh": { "$": 0 }, "from-ok": { "$": 0 }, "from-or": { "$": 0 }, "from-pa": { "$": 0 }, "from-pr": { "$": 0 }, "from-ri": { "$": 0 }, "from-sc": { "$": 0 }, "from-sd": { "$": 0 }, "from-tn": { "$": 0 }, "from-tx": { "$": 0 }, "from-ut": { "$": 0 }, "from-va": { "$": 0 }, "from-vt": { "$": 0 }, "from-wa": { "$": 0 }, "from-wi": { "$": 0 }, "from-wv": { "$": 0 }, "from-wy": { "$": 0 }, "getmyip": { "$": 0 }, "gotdns": { "$": 0 }, "hobby-site": { "$": 0 }, "homelinux": { "$": 0 }, "homeunix": { "$": 0 }, "iamallama": { "$": 0 }, "is-a-anarchist": { "$": 0 }, "is-a-blogger": { "$": 0 }, "is-a-bookkeeper": { "$": 0 }, "is-a-bulls-fan": { "$": 0 }, "is-a-caterer": { "$": 0 }, "is-a-chef": { "$": 0 }, "is-a-conservative": { "$": 0 }, "is-a-cpa": { "$": 0 }, "is-a-cubicle-slave": { "$": 0 }, "is-a-democrat": { "$": 0 }, "is-a-designer": { "$": 0 }, "is-a-doctor": { "$": 0 }, "is-a-financialadvisor": { "$": 0 }, "is-a-geek": { "$": 0 }, "is-a-green": { "$": 0 }, "is-a-guru": { "$": 0 }, "is-a-hard-worker": { "$": 0 }, "is-a-hunter": { "$": 0 }, "is-a-landscaper": { "$": 0 }, "is-a-lawyer": { "$": 0 }, "is-a-liberal": { "$": 0 }, "is-a-libertarian": { "$": 0 }, "is-a-llama": { "$": 0 }, "is-a-musician": { "$": 0 }, "is-a-nascarfan": { "$": 0 }, "is-a-nurse": { "$": 0 }, "is-a-painter": { "$": 0 }, "is-a-personaltrainer": { "$": 0 }, "is-a-photographer": { "$": 0 }, "is-a-player": { "$": 0 }, "is-a-republican": { "$": 0 }, "is-a-rockstar": { "$": 0 }, "is-a-socialist": { "$": 0 }, "is-a-student": { "$": 0 }, "is-a-teacher": { "$": 0 }, "is-a-techie": { "$": 0 }, "is-a-therapist": { "$": 0 }, "is-an-accountant": { "$": 0 }, "is-an-actor": { "$": 0 }, "is-an-actress": { "$": 0 }, "is-an-anarchist": { "$": 0 }, "is-an-artist": { "$": 0 }, "is-an-engineer": { "$": 0 }, "is-an-entertainer": { "$": 0 }, "is-certified": { "$": 0 }, "is-gone": { "$": 0 }, "is-into-anime": { "$": 0 }, "is-into-cars": { "$": 0 }, "is-into-cartoons": { "$": 0 }, "is-into-games": { "$": 0 }, "is-leet": { "$": 0 }, "is-not-certified": { "$": 0 }, "is-slick": { "$": 0 }, "is-uberleet": { "$": 0 }, "is-with-theband": { "$": 0 }, "isa-geek": { "$": 0 }, "isa-hockeynut": { "$": 0 }, "issmarterthanyou": { "$": 0 }, "likes-pie": { "$": 0 }, "likescandy": { "$": 0 }, "neat-url": { "$": 0 }, "saves-the-whales": { "$": 0 }, "selfip": { "$": 0 }, "sells-for-less": { "$": 0 }, "sells-for-u": { "$": 0 }, "servebbs": { "$": 0 }, "simple-url": { "$": 0 }, "space-to-rent": { "$": 0 }, "teaches-yoga": { "$": 0 }, "writesthisblog": { "$": 0 }, "ddnsfree": { "$": 0 }, "ddnsgeek": { "$": 0 }, "giize": { "$": 0 }, "gleeze": { "$": 0 }, "kozow": { "$": 0 }, "loseyourip": { "$": 0 }, "ooguy": { "$": 0 }, "theworkpc": { "$": 0 }, "mytuleap": { "$": 0 }, "evennode": { "eu-1": { "$": 0 }, "eu-2": { "$": 0 }, "eu-3": { "$": 0 }, "eu-4": { "$": 0 }, "us-1": { "$": 0 }, "us-2": { "$": 0 }, "us-3": { "$": 0 }, "us-4": { "$": 0 } }, "fbsbx": { "apps": { "$": 0 } }, "firebaseapp": { "$": 0 }, "flynnhub": { "$": 0 }, "freebox-os": { "$": 0 }, "freeboxos": { "$": 0 }, "githubusercontent": { "$": 0 }, "0emm": { "*": { "$": 0 } }, "appspot": { "$": 0 }, "blogspot": { "$": 0 }, "codespot": { "$": 0 }, "googleapis": { "$": 0 }, "googlecode": { "$": 0 }, "pagespeedmobilizer": { "$": 0 }, "publishproxy": { "$": 0 }, "withgoogle": { "$": 0 }, "withyoutube": { "$": 0 }, "herokuapp": { "$": 0 }, "herokussl": { "$": 0 }, "pixolino": { "$": 0 }, "joyent": { "cns": { "*": { "$": 0 } } }, "barsyonline": { "$": 0 }, "meteorapp": { "$": 0, "eu": { "$": 0 } }, "bitballoon": { "$": 0 }, "netlify": { "$": 0 }, "4u": { "$": 0 }, "nfshost": { "$": 0 }, "blogsyte": { "$": 0 }, "ciscofreak": { "$": 0 }, "damnserver": { "$": 0 }, "ditchyourip": { "$": 0 }, "dnsiskinky": { "$": 0 }, "dynns": { "$": 0 }, "geekgalaxy": { "$": 0 }, "health-carereform": { "$": 0 }, "homesecuritymac": { "$": 0 }, "homesecuritypc": { "$": 0 }, "myactivedirectory": { "$": 0 }, "mysecuritycamera": { "$": 0 }, "net-freaks": { "$": 0 }, "onthewifi": { "$": 0 }, "point2this": { "$": 0 }, "quicksytes": { "$": 0 }, "securitytactics": { "$": 0 }, "serveexchange": { "$": 0 }, "servehumour": { "$": 0 }, "servep2p": { "$": 0 }, "servesarcasm": { "$": 0 }, "stufftoread": { "$": 0 }, "unusualperson": { "$": 0 }, "workisboring": { "$": 0 }, "3utilities": { "$": 0 }, "ddnsking": { "$": 0 }, "myvnc": { "$": 0 }, "servebeer": { "$": 0 }, "servecounterstrike": { "$": 0 }, "serveftp": { "$": 0 }, "servegame": { "$": 0 }, "servehalflife": { "$": 0 }, "servehttp": { "$": 0 }, "serveirc": { "$": 0 }, "servemp3": { "$": 0 }, "servepics": { "$": 0 }, "servequake": { "$": 0 }, "operaunite": { "$": 0 }, "outsystemscloud": { "$": 0 }, "ownprovider": { "$": 0 }, "pgfog": { "$": 0 }, "pagefrontapp": { "$": 0 }, "gotpantheon": { "$": 0 }, "prgmr": { "xen": { "$": 0 } }, "qa2": { "$": 0 }, "dev-myqnapcloud": { "$": 0 }, "alpha-myqnapcloud": { "$": 0 }, "myqnapcloud": { "$": 0 }, "quipelements": { "*": { "$": 0 } }, "rackmaze": { "$": 0 }, "rhcloud": { "$": 0 }, "logoip": { "$": 0 }, "firewall-gateway": { "$": 0 }, "myshopblocks": { "$": 0 }, "1kapp": { "$": 0 }, "appchizi": { "$": 0 }, "applinzi": { "$": 0 }, "sinaapp": { "$": 0 }, "vipsinaapp": { "$": 0 }, "bounty-full": { "$": 0, "alpha": { "$": 0 }, "beta": { "$": 0 } }, "temp-dns": { "$": 0 }, "dsmynas": { "$": 0 }, "familyds": { "$": 0 }, "bloxcms": { "$": 0 }, "townnews-staging": { "$": 0 }, "hk": { "$": 0 }, "remotewd": { "$": 0 }, "yolasite": { "$": 0 } }, "coop": { "$": 0 }, "cr": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0 }, "ed": { "$": 0 }, "fi": { "$": 0 }, "go": { "$": 0 }, "or": { "$": 0 }, "sa": { "$": 0 } }, "cu": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 }, "gov": { "$": 0 }, "inf": { "$": 0 } }, "cv": { "$": 0, "blogspot": { "$": 0 } }, "cw": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "cx": { "$": 0, "gov": { "$": 0 }, "ath": { "$": 0 }, "info": { "$": 0 } }, "cy": { "$": 0, "ac": { "$": 0 }, "biz": { "$": 0 }, "com": { "$": 0, "blogspot": { "$": 0 } }, "ekloges": { "$": 0 }, "gov": { "$": 0 }, "ltd": { "$": 0 }, "name": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "parliament": { "$": 0 }, "press": { "$": 0 }, "pro": { "$": 0 }, "tm": { "$": 0 } }, "cz": { "$": 0, "co": { "$": 0 }, "realm": { "$": 0 }, "e4": { "$": 0 }, "blogspot": { "$": 0 }, "metacentrum": { "cloud": { "$": 0 }, "custom": { "$": 0 } } }, "de": { "$": 0, "bplaced": { "$": 0 }, "square7": { "$": 0 }, "com": { "$": 0 }, "cosidns": { "dyn": { "$": 0 } }, "dynamisches-dns": { "$": 0 }, "dnsupdater": { "$": 0 }, "internet-dns": { "$": 0 }, "l-o-g-i-n": { "$": 0 }, "dnshome": { "$": 0 }, "fuettertdasnetz": { "$": 0 }, "isteingeek": { "$": 0 }, "istmein": { "$": 0 }, "lebtimnetz": { "$": 0 }, "leitungsen": { "$": 0 }, "traeumtgerade": { "$": 0 }, "ddnss": { "$": 0, "dyn": { "$": 0 }, "dyndns": { "$": 0 } }, "dyndns1": { "$": 0 }, "dyn-ip24": { "$": 0 }, "home-webserver": { "$": 0, "dyn": { "$": 0 } }, "myhome-server": { "$": 0 }, "goip": { "$": 0 }, "blogspot": { "$": 0 }, "keymachine": { "$": 0 }, "git-repos": { "$": 0 }, "lcube-server": { "$": 0 }, "svn-repos": { "$": 0 }, "barsy": { "$": 0 }, "logoip": { "$": 0 }, "firewall-gateway": { "$": 0 }, "my-gateway": { "$": 0 }, "my-router": { "$": 0 }, "spdns": { "$": 0 }, "taifun-dns": { "$": 0 }, "12hp": { "$": 0 }, "2ix": { "$": 0 }, "4lima": { "$": 0 }, "lima-city": { "$": 0 }, "dd-dns": { "$": 0 }, "dray-dns": { "$": 0 }, "draydns": { "$": 0 }, "dyn-vpn": { "$": 0 }, "dynvpn": { "$": 0 }, "mein-vigor": { "$": 0 }, "my-vigor": { "$": 0 }, "my-wan": { "$": 0 }, "syno-ds": { "$": 0 }, "synology-diskstation": { "$": 0 }, "synology-ds": { "$": 0 } }, "dj": { "$": 0 }, "dk": { "$": 0, "biz": { "$": 0 }, "co": { "$": 0 }, "firm": { "$": 0 }, "reg": { "$": 0 }, "store": { "$": 0 }, "blogspot": { "$": 0 } }, "dm": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 } }, "do": { "$": 0, "art": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "gob": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "sld": { "$": 0 }, "web": { "$": 0 } }, "dz": { "$": 0, "com": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 }, "gov": { "$": 0 }, "edu": { "$": 0 }, "asso": { "$": 0 }, "pol": { "$": 0 }, "art": { "$": 0 } }, "ec": { "$": 0, "com": { "$": 0 }, "info": { "$": 0 }, "net": { "$": 0 }, "fin": { "$": 0 }, "k12": { "$": 0 }, "med": { "$": 0 }, "pro": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "gob": { "$": 0 }, "mil": { "$": 0 } }, "edu": { "$": 0 }, "ee": { "$": 0, "edu": { "$": 0 }, "gov": { "$": 0 }, "riik": { "$": 0 }, "lib": { "$": 0 }, "med": { "$": 0 }, "com": { "$": 0, "blogspot": { "$": 0 } }, "pri": { "$": 0 }, "aip": { "$": 0 }, "org": { "$": 0 }, "fie": { "$": 0 } }, "eg": { "$": 0, "com": { "$": 0, "blogspot": { "$": 0 } }, "edu": { "$": 0 }, "eun": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "name": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "sci": { "$": 0 } }, "er": { "*": { "$": 0 } }, "es": { "$": 0, "com": { "$": 0, "blogspot": { "$": 0 } }, "nom": { "$": 0 }, "org": { "$": 0 }, "gob": { "$": 0 }, "edu": { "$": 0 } }, "et": { "$": 0, "com": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "biz": { "$": 0 }, "name": { "$": 0 }, "info": { "$": 0 }, "net": { "$": 0 } }, "eu": { "$": 0, "mycd": { "$": 0 }, "cloudns": { "$": 0 }, "barsy": { "$": 0 }, "wellbeingzone": { "$": 0 }, "spdns": { "$": 0 }, "transurl": { "*": { "$": 0 } }, "diskstation": { "$": 0 } }, "fi": { "$": 0, "aland": { "$": 0 }, "dy": { "$": 0 }, "blogspot": { "$": 0 }, "iki": { "$": 0 } }, "fj": { "*": { "$": 0 } }, "fk": { "*": { "$": 0 } }, "fm": { "$": 0 }, "fo": { "$": 0 }, "fr": { "$": 0, "com": { "$": 0 }, "asso": { "$": 0 }, "nom": { "$": 0 }, "prd": { "$": 0 }, "presse": { "$": 0 }, "tm": { "$": 0 }, "aeroport": { "$": 0 }, "assedic": { "$": 0 }, "avocat": { "$": 0 }, "avoues": { "$": 0 }, "cci": { "$": 0 }, "chambagri": { "$": 0 }, "chirurgiens-dentistes": { "$": 0 }, "experts-comptables": { "$": 0 }, "geometre-expert": { "$": 0 }, "gouv": { "$": 0 }, "greta": { "$": 0 }, "huissier-justice": { "$": 0 }, "medecin": { "$": 0 }, "notaires": { "$": 0 }, "pharmacien": { "$": 0 }, "port": { "$": 0 }, "veterinaire": { "$": 0 }, "fbx-os": { "$": 0 }, "fbxos": { "$": 0 }, "freebox-os": { "$": 0 }, "freeboxos": { "$": 0 }, "blogspot": { "$": 0 }, "on-web": { "$": 0 }, "chirurgiens-dentistes-en-france": { "$": 0 } }, "ga": { "$": 0 }, "gb": { "$": 0 }, "gd": { "$": 0, "nom": { "$": 0 } }, "ge": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "pvt": { "$": 0 } }, "gf": { "$": 0 }, "gg": { "$": 0, "co": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "cya": { "$": 0 } }, "gh": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "mil": { "$": 0 } }, "gi": { "$": 0, "com": { "$": 0 }, "ltd": { "$": 0 }, "gov": { "$": 0 }, "mod": { "$": 0 }, "edu": { "$": 0 }, "org": { "$": 0 } }, "gl": { "$": 0, "co": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "nom": { "$": 0 } }, "gm": { "$": 0 }, "gn": { "$": 0, "ac": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 } }, "gov": { "$": 0 }, "gp": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "mobi": { "$": 0 }, "edu": { "$": 0 }, "org": { "$": 0 }, "asso": { "$": 0 } }, "gq": { "$": 0 }, "gr": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gov": { "$": 0 }, "blogspot": { "$": 0 }, "nym": { "$": 0 } }, "gs": { "$": 0 }, "gt": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gob": { "$": 0 }, "ind": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "nom": { "$": 0 } }, "gu": { "*": { "$": 0 } }, "gw": { "$": 0 }, "gy": { "$": 0, "co": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "hk": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "idv": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "xn--55qx5d": { "$": 0 }, "xn--wcvs22d": { "$": 0 }, "xn--lcvr32d": { "$": 0 }, "xn--mxtq1m": { "$": 0 }, "xn--gmqw5a": { "$": 0 }, "xn--ciqpn": { "$": 0 }, "xn--gmq050i": { "$": 0 }, "xn--zf0avx": { "$": 0 }, "xn--io0a7i": { "$": 0 }, "xn--mk0axi": { "$": 0 }, "xn--od0alg": { "$": 0 }, "xn--od0aq3b": { "$": 0 }, "xn--tn0ag": { "$": 0 }, "xn--uc0atv": { "$": 0 }, "xn--uc0ay4a": { "$": 0 }, "blogspot": { "$": 0 }, "ltd": { "$": 0 }, "inc": { "$": 0 } }, "hm": { "$": 0 }, "hn": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 }, "mil": { "$": 0 }, "gob": { "$": 0 }, "nom": { "$": 0 } }, "hr": { "$": 0, "iz": { "$": 0 }, "from": { "$": 0 }, "name": { "$": 0 }, "com": { "$": 0 }, "blogspot": { "$": 0 } }, "ht": { "$": 0, "com": { "$": 0 }, "shop": { "$": 0 }, "firm": { "$": 0 }, "info": { "$": 0 }, "adult": { "$": 0 }, "net": { "$": 0 }, "pro": { "$": 0 }, "org": { "$": 0 }, "med": { "$": 0 }, "art": { "$": 0 }, "coop": { "$": 0 }, "pol": { "$": 0 }, "asso": { "$": 0 }, "edu": { "$": 0 }, "rel": { "$": 0 }, "gouv": { "$": 0 }, "perso": { "$": 0 } }, "hu": { "2000": { "$": 0 }, "$": 0, "co": { "$": 0 }, "info": { "$": 0 }, "org": { "$": 0 }, "priv": { "$": 0 }, "sport": { "$": 0 }, "tm": { "$": 0 }, "agrar": { "$": 0 }, "bolt": { "$": 0 }, "casino": { "$": 0 }, "city": { "$": 0 }, "erotica": { "$": 0 }, "erotika": { "$": 0 }, "film": { "$": 0 }, "forum": { "$": 0 }, "games": { "$": 0 }, "hotel": { "$": 0 }, "ingatlan": { "$": 0 }, "jogasz": { "$": 0 }, "konyvelo": { "$": 0 }, "lakas": { "$": 0 }, "media": { "$": 0 }, "news": { "$": 0 }, "reklam": { "$": 0 }, "sex": { "$": 0 }, "shop": { "$": 0 }, "suli": { "$": 0 }, "szex": { "$": 0 }, "tozsde": { "$": 0 }, "utazas": { "$": 0 }, "video": { "$": 0 }, "blogspot": { "$": 0 } }, "id": { "$": 0, "ac": { "$": 0 }, "biz": { "$": 0 }, "co": { "$": 0, "blogspot": { "$": 0 } }, "desa": { "$": 0 }, "go": { "$": 0 }, "mil": { "$": 0 }, "my": { "$": 0 }, "net": { "$": 0 }, "or": { "$": 0 }, "sch": { "$": 0 }, "web": { "$": 0 } }, "ie": { "$": 0, "gov": { "$": 0 }, "blogspot": { "$": 0 } }, "il": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0, "blogspot": { "$": 0 } }, "gov": { "$": 0 }, "idf": { "$": 0 }, "k12": { "$": 0 }, "muni": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "im": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0, "ltd": { "$": 0 }, "plc": { "$": 0 } }, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "tt": { "$": 0 }, "tv": { "$": 0 }, "ro": { "$": 0 }, "nom": { "$": 0 } }, "in": { "$": 0, "co": { "$": 0 }, "firm": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gen": { "$": 0 }, "ind": { "$": 0 }, "nic": { "$": 0 }, "ac": { "$": 0 }, "edu": { "$": 0 }, "res": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "cloudns": { "$": 0 }, "blogspot": { "$": 0 }, "barsy": { "$": 0 } }, "info": { "$": 0, "cloudns": { "$": 0 }, "dynamic-dns": { "$": 0 }, "dyndns": { "$": 0 }, "barrel-of-knowledge": { "$": 0 }, "barrell-of-knowledge": { "$": 0 }, "for-our": { "$": 0 }, "groks-the": { "$": 0 }, "groks-this": { "$": 0 }, "here-for-more": { "$": 0 }, "knowsitall": { "$": 0 }, "selfip": { "$": 0 }, "webhop": { "$": 0 }, "nsupdate": { "$": 0 }, "dvrcam": { "$": 0 }, "ilovecollege": { "$": 0 }, "no-ip": { "$": 0 }, "v-info": { "$": 0 } }, "int": { "$": 0, "eu": { "$": 0 } }, "io": { "$": 0, "com": { "$": 0 }, "backplaneapp": { "$": 0 }, "boxfuse": { "$": 0 }, "browsersafetymark": { "$": 0 }, "dedyn": { "$": 0 }, "drud": { "$": 0 }, "definima": { "$": 0 }, "enonic": { "$": 0, "customer": { "$": 0 } }, "github": { "$": 0 }, "gitlab": { "$": 0 }, "hasura-app": { "$": 0 }, "ngrok": { "$": 0 }, "nodeart": { "stage": { "$": 0 } }, "nodum": { "$": 0 }, "nid": { "$": 0 }, "pantheonsite": { "$": 0 }, "protonet": { "$": 0 }, "vaporcloud": { "$": 0 }, "hzc": { "$": 0 }, "sandcats": { "$": 0 }, "shiftedit": { "$": 0 }, "lair": { "apps": { "$": 0 } }, "stolos": { "*": { "$": 0 } }, "spacekit": { "$": 0 }, "thingdust": { "dev": { "cust": { "$": 0 } }, "disrec": { "cust": { "$": 0 } }, "prod": { "cust": { "$": 0 } }, "testing": { "cust": { "$": 0 } } }, "wedeploy": { "$": 0 } }, "iq": { "$": 0, "gov": { "$": 0 }, "edu": { "$": 0 }, "mil": { "$": 0 }, "com": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 } }, "ir": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0 }, "gov": { "$": 0 }, "id": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "sch": { "$": 0 }, "xn--mgba3a4f16a": { "$": 0 }, "xn--mgba3a4fra": { "$": 0 } }, "is": { "$": 0, "net": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "int": { "$": 0 }, "cupcake": { "$": 0 }, "blogspot": { "$": 0 } }, "it": { "$": 0, "gov": { "$": 0 }, "edu": { "$": 0 }, "abr": { "$": 0 }, "abruzzo": { "$": 0 }, "aosta-valley": { "$": 0 }, "aostavalley": { "$": 0 }, "bas": { "$": 0 }, "basilicata": { "$": 0 }, "cal": { "$": 0 }, "calabria": { "$": 0 }, "cam": { "$": 0 }, "campania": { "$": 0 }, "emilia-romagna": { "$": 0 }, "emiliaromagna": { "$": 0 }, "emr": { "$": 0 }, "friuli-v-giulia": { "$": 0 }, "friuli-ve-giulia": { "$": 0 }, "friuli-vegiulia": { "$": 0 }, "friuli-venezia-giulia": { "$": 0 }, "friuli-veneziagiulia": { "$": 0 }, "friuli-vgiulia": { "$": 0 }, "friuliv-giulia": { "$": 0 }, "friulive-giulia": { "$": 0 }, "friulivegiulia": { "$": 0 }, "friulivenezia-giulia": { "$": 0 }, "friuliveneziagiulia": { "$": 0 }, "friulivgiulia": { "$": 0 }, "fvg": { "$": 0 }, "laz": { "$": 0 }, "lazio": { "$": 0 }, "lig": { "$": 0 }, "liguria": { "$": 0 }, "lom": { "$": 0 }, "lombardia": { "$": 0 }, "lombardy": { "$": 0 }, "lucania": { "$": 0 }, "mar": { "$": 0 }, "marche": { "$": 0 }, "mol": { "$": 0 }, "molise": { "$": 0 }, "piedmont": { "$": 0 }, "piemonte": { "$": 0 }, "pmn": { "$": 0 }, "pug": { "$": 0 }, "puglia": { "$": 0 }, "sar": { "$": 0 }, "sardegna": { "$": 0 }, "sardinia": { "$": 0 }, "sic": { "$": 0 }, "sicilia": { "$": 0 }, "sicily": { "$": 0 }, "taa": { "$": 0 }, "tos": { "$": 0 }, "toscana": { "$": 0 }, "trentino-a-adige": { "$": 0 }, "trentino-aadige": { "$": 0 }, "trentino-alto-adige": { "$": 0 }, "trentino-altoadige": { "$": 0 }, "trentino-s-tirol": { "$": 0 }, "trentino-stirol": { "$": 0 }, "trentino-sud-tirol": { "$": 0 }, "trentino-sudtirol": { "$": 0 }, "trentino-sued-tirol": { "$": 0 }, "trentino-suedtirol": { "$": 0 }, "trentinoa-adige": { "$": 0 }, "trentinoaadige": { "$": 0 }, "trentinoalto-adige": { "$": 0 }, "trentinoaltoadige": { "$": 0 }, "trentinos-tirol": { "$": 0 }, "trentinostirol": { "$": 0 }, "trentinosud-tirol": { "$": 0 }, "trentinosudtirol": { "$": 0 }, "trentinosued-tirol": { "$": 0 }, "trentinosuedtirol": { "$": 0 }, "tuscany": { "$": 0 }, "umb": { "$": 0 }, "umbria": { "$": 0 }, "val-d-aosta": { "$": 0 }, "val-daosta": { "$": 0 }, "vald-aosta": { "$": 0 }, "valdaosta": { "$": 0 }, "valle-aosta": { "$": 0 }, "valle-d-aosta": { "$": 0 }, "valle-daosta": { "$": 0 }, "valleaosta": { "$": 0 }, "valled-aosta": { "$": 0 }, "valledaosta": { "$": 0 }, "vallee-aoste": { "$": 0 }, "valleeaoste": { "$": 0 }, "vao": { "$": 0 }, "vda": { "$": 0 }, "ven": { "$": 0 }, "veneto": { "$": 0 }, "ag": { "$": 0 }, "agrigento": { "$": 0 }, "al": { "$": 0 }, "alessandria": { "$": 0 }, "alto-adige": { "$": 0 }, "altoadige": { "$": 0 }, "an": { "$": 0 }, "ancona": { "$": 0 }, "andria-barletta-trani": { "$": 0 }, "andria-trani-barletta": { "$": 0 }, "andriabarlettatrani": { "$": 0 }, "andriatranibarletta": { "$": 0 }, "ao": { "$": 0 }, "aosta": { "$": 0 }, "aoste": { "$": 0 }, "ap": { "$": 0 }, "aq": { "$": 0 }, "aquila": { "$": 0 }, "ar": { "$": 0 }, "arezzo": { "$": 0 }, "ascoli-piceno": { "$": 0 }, "ascolipiceno": { "$": 0 }, "asti": { "$": 0 }, "at": { "$": 0 }, "av": { "$": 0 }, "avellino": { "$": 0 }, "ba": { "$": 0 }, "balsan": { "$": 0 }, "bari": { "$": 0 }, "barletta-trani-andria": { "$": 0 }, "barlettatraniandria": { "$": 0 }, "belluno": { "$": 0 }, "benevento": { "$": 0 }, "bergamo": { "$": 0 }, "bg": { "$": 0 }, "bi": { "$": 0 }, "biella": { "$": 0 }, "bl": { "$": 0 }, "bn": { "$": 0 }, "bo": { "$": 0 }, "bologna": { "$": 0 }, "bolzano": { "$": 0 }, "bozen": { "$": 0 }, "br": { "$": 0 }, "brescia": { "$": 0 }, "brindisi": { "$": 0 }, "bs": { "$": 0 }, "bt": { "$": 0 }, "bz": { "$": 0 }, "ca": { "$": 0 }, "cagliari": { "$": 0 }, "caltanissetta": { "$": 0 }, "campidano-medio": { "$": 0 }, "campidanomedio": { "$": 0 }, "campobasso": { "$": 0 }, "carbonia-iglesias": { "$": 0 }, "carboniaiglesias": { "$": 0 }, "carrara-massa": { "$": 0 }, "carraramassa": { "$": 0 }, "caserta": { "$": 0 }, "catania": { "$": 0 }, "catanzaro": { "$": 0 }, "cb": { "$": 0 }, "ce": { "$": 0 }, "cesena-forli": { "$": 0 }, "cesenaforli": { "$": 0 }, "ch": { "$": 0 }, "chieti": { "$": 0 }, "ci": { "$": 0 }, "cl": { "$": 0 }, "cn": { "$": 0 }, "co": { "$": 0 }, "como": { "$": 0 }, "cosenza": { "$": 0 }, "cr": { "$": 0 }, "cremona": { "$": 0 }, "crotone": { "$": 0 }, "cs": { "$": 0 }, "ct": { "$": 0 }, "cuneo": { "$": 0 }, "cz": { "$": 0 }, "dell-ogliastra": { "$": 0 }, "dellogliastra": { "$": 0 }, "en": { "$": 0 }, "enna": { "$": 0 }, "fc": { "$": 0 }, "fe": { "$": 0 }, "fermo": { "$": 0 }, "ferrara": { "$": 0 }, "fg": { "$": 0 }, "fi": { "$": 0 }, "firenze": { "$": 0 }, "florence": { "$": 0 }, "fm": { "$": 0 }, "foggia": { "$": 0 }, "forli-cesena": { "$": 0 }, "forlicesena": { "$": 0 }, "fr": { "$": 0 }, "frosinone": { "$": 0 }, "ge": { "$": 0 }, "genoa": { "$": 0 }, "genova": { "$": 0 }, "go": { "$": 0 }, "gorizia": { "$": 0 }, "gr": { "$": 0 }, "grosseto": { "$": 0 }, "iglesias-carbonia": { "$": 0 }, "iglesiascarbonia": { "$": 0 }, "im": { "$": 0 }, "imperia": { "$": 0 }, "is": { "$": 0 }, "isernia": { "$": 0 }, "kr": { "$": 0 }, "la-spezia": { "$": 0 }, "laquila": { "$": 0 }, "laspezia": { "$": 0 }, "latina": { "$": 0 }, "lc": { "$": 0 }, "le": { "$": 0 }, "lecce": { "$": 0 }, "lecco": { "$": 0 }, "li": { "$": 0 }, "livorno": { "$": 0 }, "lo": { "$": 0 }, "lodi": { "$": 0 }, "lt": { "$": 0 }, "lu": { "$": 0 }, "lucca": { "$": 0 }, "macerata": { "$": 0 }, "mantova": { "$": 0 }, "massa-carrara": { "$": 0 }, "massacarrara": { "$": 0 }, "matera": { "$": 0 }, "mb": { "$": 0 }, "mc": { "$": 0 }, "me": { "$": 0 }, "medio-campidano": { "$": 0 }, "mediocampidano": { "$": 0 }, "messina": { "$": 0 }, "mi": { "$": 0 }, "milan": { "$": 0 }, "milano": { "$": 0 }, "mn": { "$": 0 }, "mo": { "$": 0 }, "modena": { "$": 0 }, "monza-brianza": { "$": 0 }, "monza-e-della-brianza": { "$": 0 }, "monza": { "$": 0 }, "monzabrianza": { "$": 0 }, "monzaebrianza": { "$": 0 }, "monzaedellabrianza": { "$": 0 }, "ms": { "$": 0 }, "mt": { "$": 0 }, "na": { "$": 0 }, "naples": { "$": 0 }, "napoli": { "$": 0 }, "no": { "$": 0 }, "novara": { "$": 0 }, "nu": { "$": 0 }, "nuoro": { "$": 0 }, "og": { "$": 0 }, "ogliastra": { "$": 0 }, "olbia-tempio": { "$": 0 }, "olbiatempio": { "$": 0 }, "or": { "$": 0 }, "oristano": { "$": 0 }, "ot": { "$": 0 }, "pa": { "$": 0 }, "padova": { "$": 0 }, "padua": { "$": 0 }, "palermo": { "$": 0 }, "parma": { "$": 0 }, "pavia": { "$": 0 }, "pc": { "$": 0 }, "pd": { "$": 0 }, "pe": { "$": 0 }, "perugia": { "$": 0 }, "pesaro-urbino": { "$": 0 }, "pesarourbino": { "$": 0 }, "pescara": { "$": 0 }, "pg": { "$": 0 }, "pi": { "$": 0 }, "piacenza": { "$": 0 }, "pisa": { "$": 0 }, "pistoia": { "$": 0 }, "pn": { "$": 0 }, "po": { "$": 0 }, "pordenone": { "$": 0 }, "potenza": { "$": 0 }, "pr": { "$": 0 }, "prato": { "$": 0 }, "pt": { "$": 0 }, "pu": { "$": 0 }, "pv": { "$": 0 }, "pz": { "$": 0 }, "ra": { "$": 0 }, "ragusa": { "$": 0 }, "ravenna": { "$": 0 }, "rc": { "$": 0 }, "re": { "$": 0 }, "reggio-calabria": { "$": 0 }, "reggio-emilia": { "$": 0 }, "reggiocalabria": { "$": 0 }, "reggioemilia": { "$": 0 }, "rg": { "$": 0 }, "ri": { "$": 0 }, "rieti": { "$": 0 }, "rimini": { "$": 0 }, "rm": { "$": 0 }, "rn": { "$": 0 }, "ro": { "$": 0 }, "roma": { "$": 0 }, "rome": { "$": 0 }, "rovigo": { "$": 0 }, "sa": { "$": 0 }, "salerno": { "$": 0 }, "sassari": { "$": 0 }, "savona": { "$": 0 }, "si": { "$": 0 }, "siena": { "$": 0 }, "siracusa": { "$": 0 }, "so": { "$": 0 }, "sondrio": { "$": 0 }, "sp": { "$": 0 }, "sr": { "$": 0 }, "ss": { "$": 0 }, "suedtirol": { "$": 0 }, "sv": { "$": 0 }, "ta": { "$": 0 }, "taranto": { "$": 0 }, "te": { "$": 0 }, "tempio-olbia": { "$": 0 }, "tempioolbia": { "$": 0 }, "teramo": { "$": 0 }, "terni": { "$": 0 }, "tn": { "$": 0 }, "to": { "$": 0 }, "torino": { "$": 0 }, "tp": { "$": 0 }, "tr": { "$": 0 }, "trani-andria-barletta": { "$": 0 }, "trani-barletta-andria": { "$": 0 }, "traniandriabarletta": { "$": 0 }, "tranibarlettaandria": { "$": 0 }, "trapani": { "$": 0 }, "trentino": { "$": 0 }, "trento": { "$": 0 }, "treviso": { "$": 0 }, "trieste": { "$": 0 }, "ts": { "$": 0 }, "turin": { "$": 0 }, "tv": { "$": 0 }, "ud": { "$": 0 }, "udine": { "$": 0 }, "urbino-pesaro": { "$": 0 }, "urbinopesaro": { "$": 0 }, "va": { "$": 0 }, "varese": { "$": 0 }, "vb": { "$": 0 }, "vc": { "$": 0 }, "ve": { "$": 0 }, "venezia": { "$": 0 }, "venice": { "$": 0 }, "verbania": { "$": 0 }, "vercelli": { "$": 0 }, "verona": { "$": 0 }, "vi": { "$": 0 }, "vibo-valentia": { "$": 0 }, "vibovalentia": { "$": 0 }, "vicenza": { "$": 0 }, "viterbo": { "$": 0 }, "vr": { "$": 0 }, "vs": { "$": 0 }, "vt": { "$": 0 }, "vv": { "$": 0 }, "blogspot": { "$": 0 } }, "je": { "$": 0, "co": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "jm": { "*": { "$": 0 } }, "jo": { "$": 0, "com": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 }, "edu": { "$": 0 }, "sch": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "name": { "$": 0 } }, "jobs": { "$": 0 }, "jp": { "$": 0, "ac": { "$": 0 }, "ad": { "$": 0 }, "co": { "$": 0 }, "ed": { "$": 0 }, "go": { "$": 0 }, "gr": { "$": 0 }, "lg": { "$": 0 }, "ne": { "$": 0 }, "or": { "$": 0 }, "aichi": { "$": 0, "aisai": { "$": 0 }, "ama": { "$": 0 }, "anjo": { "$": 0 }, "asuke": { "$": 0 }, "chiryu": { "$": 0 }, "chita": { "$": 0 }, "fuso": { "$": 0 }, "gamagori": { "$": 0 }, "handa": { "$": 0 }, "hazu": { "$": 0 }, "hekinan": { "$": 0 }, "higashiura": { "$": 0 }, "ichinomiya": { "$": 0 }, "inazawa": { "$": 0 }, "inuyama": { "$": 0 }, "isshiki": { "$": 0 }, "iwakura": { "$": 0 }, "kanie": { "$": 0 }, "kariya": { "$": 0 }, "kasugai": { "$": 0 }, "kira": { "$": 0 }, "kiyosu": { "$": 0 }, "komaki": { "$": 0 }, "konan": { "$": 0 }, "kota": { "$": 0 }, "mihama": { "$": 0 }, "miyoshi": { "$": 0 }, "nishio": { "$": 0 }, "nisshin": { "$": 0 }, "obu": { "$": 0 }, "oguchi": { "$": 0 }, "oharu": { "$": 0 }, "okazaki": { "$": 0 }, "owariasahi": { "$": 0 }, "seto": { "$": 0 }, "shikatsu": { "$": 0 }, "shinshiro": { "$": 0 }, "shitara": { "$": 0 }, "tahara": { "$": 0 }, "takahama": { "$": 0 }, "tobishima": { "$": 0 }, "toei": { "$": 0 }, "togo": { "$": 0 }, "tokai": { "$": 0 }, "tokoname": { "$": 0 }, "toyoake": { "$": 0 }, "toyohashi": { "$": 0 }, "toyokawa": { "$": 0 }, "toyone": { "$": 0 }, "toyota": { "$": 0 }, "tsushima": { "$": 0 }, "yatomi": { "$": 0 } }, "akita": { "$": 0, "akita": { "$": 0 }, "daisen": { "$": 0 }, "fujisato": { "$": 0 }, "gojome": { "$": 0 }, "hachirogata": { "$": 0 }, "happou": { "$": 0 }, "higashinaruse": { "$": 0 }, "honjo": { "$": 0 }, "honjyo": { "$": 0 }, "ikawa": { "$": 0 }, "kamikoani": { "$": 0 }, "kamioka": { "$": 0 }, "katagami": { "$": 0 }, "kazuno": { "$": 0 }, "kitaakita": { "$": 0 }, "kosaka": { "$": 0 }, "kyowa": { "$": 0 }, "misato": { "$": 0 }, "mitane": { "$": 0 }, "moriyoshi": { "$": 0 }, "nikaho": { "$": 0 }, "noshiro": { "$": 0 }, "odate": { "$": 0 }, "oga": { "$": 0 }, "ogata": { "$": 0 }, "semboku": { "$": 0 }, "yokote": { "$": 0 }, "yurihonjo": { "$": 0 } }, "aomori": { "$": 0, "aomori": { "$": 0 }, "gonohe": { "$": 0 }, "hachinohe": { "$": 0 }, "hashikami": { "$": 0 }, "hiranai": { "$": 0 }, "hirosaki": { "$": 0 }, "itayanagi": { "$": 0 }, "kuroishi": { "$": 0 }, "misawa": { "$": 0 }, "mutsu": { "$": 0 }, "nakadomari": { "$": 0 }, "noheji": { "$": 0 }, "oirase": { "$": 0 }, "owani": { "$": 0 }, "rokunohe": { "$": 0 }, "sannohe": { "$": 0 }, "shichinohe": { "$": 0 }, "shingo": { "$": 0 }, "takko": { "$": 0 }, "towada": { "$": 0 }, "tsugaru": { "$": 0 }, "tsuruta": { "$": 0 } }, "chiba": { "$": 0, "abiko": { "$": 0 }, "asahi": { "$": 0 }, "chonan": { "$": 0 }, "chosei": { "$": 0 }, "choshi": { "$": 0 }, "chuo": { "$": 0 }, "funabashi": { "$": 0 }, "futtsu": { "$": 0 }, "hanamigawa": { "$": 0 }, "ichihara": { "$": 0 }, "ichikawa": { "$": 0 }, "ichinomiya": { "$": 0 }, "inzai": { "$": 0 }, "isumi": { "$": 0 }, "kamagaya": { "$": 0 }, "kamogawa": { "$": 0 }, "kashiwa": { "$": 0 }, "katori": { "$": 0 }, "katsuura": { "$": 0 }, "kimitsu": { "$": 0 }, "kisarazu": { "$": 0 }, "kozaki": { "$": 0 }, "kujukuri": { "$": 0 }, "kyonan": { "$": 0 }, "matsudo": { "$": 0 }, "midori": { "$": 0 }, "mihama": { "$": 0 }, "minamiboso": { "$": 0 }, "mobara": { "$": 0 }, "mutsuzawa": { "$": 0 }, "nagara": { "$": 0 }, "nagareyama": { "$": 0 }, "narashino": { "$": 0 }, "narita": { "$": 0 }, "noda": { "$": 0 }, "oamishirasato": { "$": 0 }, "omigawa": { "$": 0 }, "onjuku": { "$": 0 }, "otaki": { "$": 0 }, "sakae": { "$": 0 }, "sakura": { "$": 0 }, "shimofusa": { "$": 0 }, "shirako": { "$": 0 }, "shiroi": { "$": 0 }, "shisui": { "$": 0 }, "sodegaura": { "$": 0 }, "sosa": { "$": 0 }, "tako": { "$": 0 }, "tateyama": { "$": 0 }, "togane": { "$": 0 }, "tohnosho": { "$": 0 }, "tomisato": { "$": 0 }, "urayasu": { "$": 0 }, "yachimata": { "$": 0 }, "yachiyo": { "$": 0 }, "yokaichiba": { "$": 0 }, "yokoshibahikari": { "$": 0 }, "yotsukaido": { "$": 0 } }, "ehime": { "$": 0, "ainan": { "$": 0 }, "honai": { "$": 0 }, "ikata": { "$": 0 }, "imabari": { "$": 0 }, "iyo": { "$": 0 }, "kamijima": { "$": 0 }, "kihoku": { "$": 0 }, "kumakogen": { "$": 0 }, "masaki": { "$": 0 }, "matsuno": { "$": 0 }, "matsuyama": { "$": 0 }, "namikata": { "$": 0 }, "niihama": { "$": 0 }, "ozu": { "$": 0 }, "saijo": { "$": 0 }, "seiyo": { "$": 0 }, "shikokuchuo": { "$": 0 }, "tobe": { "$": 0 }, "toon": { "$": 0 }, "uchiko": { "$": 0 }, "uwajima": { "$": 0 }, "yawatahama": { "$": 0 } }, "fukui": { "$": 0, "echizen": { "$": 0 }, "eiheiji": { "$": 0 }, "fukui": { "$": 0 }, "ikeda": { "$": 0 }, "katsuyama": { "$": 0 }, "mihama": { "$": 0 }, "minamiechizen": { "$": 0 }, "obama": { "$": 0 }, "ohi": { "$": 0 }, "ono": { "$": 0 }, "sabae": { "$": 0 }, "sakai": { "$": 0 }, "takahama": { "$": 0 }, "tsuruga": { "$": 0 }, "wakasa": { "$": 0 } }, "fukuoka": { "$": 0, "ashiya": { "$": 0 }, "buzen": { "$": 0 }, "chikugo": { "$": 0 }, "chikuho": { "$": 0 }, "chikujo": { "$": 0 }, "chikushino": { "$": 0 }, "chikuzen": { "$": 0 }, "chuo": { "$": 0 }, "dazaifu": { "$": 0 }, "fukuchi": { "$": 0 }, "hakata": { "$": 0 }, "higashi": { "$": 0 }, "hirokawa": { "$": 0 }, "hisayama": { "$": 0 }, "iizuka": { "$": 0 }, "inatsuki": { "$": 0 }, "kaho": { "$": 0 }, "kasuga": { "$": 0 }, "kasuya": { "$": 0 }, "kawara": { "$": 0 }, "keisen": { "$": 0 }, "koga": { "$": 0 }, "kurate": { "$": 0 }, "kurogi": { "$": 0 }, "kurume": { "$": 0 }, "minami": { "$": 0 }, "miyako": { "$": 0 }, "miyama": { "$": 0 }, "miyawaka": { "$": 0 }, "mizumaki": { "$": 0 }, "munakata": { "$": 0 }, "nakagawa": { "$": 0 }, "nakama": { "$": 0 }, "nishi": { "$": 0 }, "nogata": { "$": 0 }, "ogori": { "$": 0 }, "okagaki": { "$": 0 }, "okawa": { "$": 0 }, "oki": { "$": 0 }, "omuta": { "$": 0 }, "onga": { "$": 0 }, "onojo": { "$": 0 }, "oto": { "$": 0 }, "saigawa": { "$": 0 }, "sasaguri": { "$": 0 }, "shingu": { "$": 0 }, "shinyoshitomi": { "$": 0 }, "shonai": { "$": 0 }, "soeda": { "$": 0 }, "sue": { "$": 0 }, "tachiarai": { "$": 0 }, "tagawa": { "$": 0 }, "takata": { "$": 0 }, "toho": { "$": 0 }, "toyotsu": { "$": 0 }, "tsuiki": { "$": 0 }, "ukiha": { "$": 0 }, "umi": { "$": 0 }, "usui": { "$": 0 }, "yamada": { "$": 0 }, "yame": { "$": 0 }, "yanagawa": { "$": 0 }, "yukuhashi": { "$": 0 } }, "fukushima": { "$": 0, "aizubange": { "$": 0 }, "aizumisato": { "$": 0 }, "aizuwakamatsu": { "$": 0 }, "asakawa": { "$": 0 }, "bandai": { "$": 0 }, "date": { "$": 0 }, "fukushima": { "$": 0 }, "furudono": { "$": 0 }, "futaba": { "$": 0 }, "hanawa": { "$": 0 }, "higashi": { "$": 0 }, "hirata": { "$": 0 }, "hirono": { "$": 0 }, "iitate": { "$": 0 }, "inawashiro": { "$": 0 }, "ishikawa": { "$": 0 }, "iwaki": { "$": 0 }, "izumizaki": { "$": 0 }, "kagamiishi": { "$": 0 }, "kaneyama": { "$": 0 }, "kawamata": { "$": 0 }, "kitakata": { "$": 0 }, "kitashiobara": { "$": 0 }, "koori": { "$": 0 }, "koriyama": { "$": 0 }, "kunimi": { "$": 0 }, "miharu": { "$": 0 }, "mishima": { "$": 0 }, "namie": { "$": 0 }, "nango": { "$": 0 }, "nishiaizu": { "$": 0 }, "nishigo": { "$": 0 }, "okuma": { "$": 0 }, "omotego": { "$": 0 }, "ono": { "$": 0 }, "otama": { "$": 0 }, "samegawa": { "$": 0 }, "shimogo": { "$": 0 }, "shirakawa": { "$": 0 }, "showa": { "$": 0 }, "soma": { "$": 0 }, "sukagawa": { "$": 0 }, "taishin": { "$": 0 }, "tamakawa": { "$": 0 }, "tanagura": { "$": 0 }, "tenei": { "$": 0 }, "yabuki": { "$": 0 }, "yamato": { "$": 0 }, "yamatsuri": { "$": 0 }, "yanaizu": { "$": 0 }, "yugawa": { "$": 0 } }, "gifu": { "$": 0, "anpachi": { "$": 0 }, "ena": { "$": 0 }, "gifu": { "$": 0 }, "ginan": { "$": 0 }, "godo": { "$": 0 }, "gujo": { "$": 0 }, "hashima": { "$": 0 }, "hichiso": { "$": 0 }, "hida": { "$": 0 }, "higashishirakawa": { "$": 0 }, "ibigawa": { "$": 0 }, "ikeda": { "$": 0 }, "kakamigahara": { "$": 0 }, "kani": { "$": 0 }, "kasahara": { "$": 0 }, "kasamatsu": { "$": 0 }, "kawaue": { "$": 0 }, "kitagata": { "$": 0 }, "mino": { "$": 0 }, "minokamo": { "$": 0 }, "mitake": { "$": 0 }, "mizunami": { "$": 0 }, "motosu": { "$": 0 }, "nakatsugawa": { "$": 0 }, "ogaki": { "$": 0 }, "sakahogi": { "$": 0 }, "seki": { "$": 0 }, "sekigahara": { "$": 0 }, "shirakawa": { "$": 0 }, "tajimi": { "$": 0 }, "takayama": { "$": 0 }, "tarui": { "$": 0 }, "toki": { "$": 0 }, "tomika": { "$": 0 }, "wanouchi": { "$": 0 }, "yamagata": { "$": 0 }, "yaotsu": { "$": 0 }, "yoro": { "$": 0 } }, "gunma": { "$": 0, "annaka": { "$": 0 }, "chiyoda": { "$": 0 }, "fujioka": { "$": 0 }, "higashiagatsuma": { "$": 0 }, "isesaki": { "$": 0 }, "itakura": { "$": 0 }, "kanna": { "$": 0 }, "kanra": { "$": 0 }, "katashina": { "$": 0 }, "kawaba": { "$": 0 }, "kiryu": { "$": 0 }, "kusatsu": { "$": 0 }, "maebashi": { "$": 0 }, "meiwa": { "$": 0 }, "midori": { "$": 0 }, "minakami": { "$": 0 }, "naganohara": { "$": 0 }, "nakanojo": { "$": 0 }, "nanmoku": { "$": 0 }, "numata": { "$": 0 }, "oizumi": { "$": 0 }, "ora": { "$": 0 }, "ota": { "$": 0 }, "shibukawa": { "$": 0 }, "shimonita": { "$": 0 }, "shinto": { "$": 0 }, "showa": { "$": 0 }, "takasaki": { "$": 0 }, "takayama": { "$": 0 }, "tamamura": { "$": 0 }, "tatebayashi": { "$": 0 }, "tomioka": { "$": 0 }, "tsukiyono": { "$": 0 }, "tsumagoi": { "$": 0 }, "ueno": { "$": 0 }, "yoshioka": { "$": 0 } }, "hiroshima": { "$": 0, "asaminami": { "$": 0 }, "daiwa": { "$": 0 }, "etajima": { "$": 0 }, "fuchu": { "$": 0 }, "fukuyama": { "$": 0 }, "hatsukaichi": { "$": 0 }, "higashihiroshima": { "$": 0 }, "hongo": { "$": 0 }, "jinsekikogen": { "$": 0 }, "kaita": { "$": 0 }, "kui": { "$": 0 }, "kumano": { "$": 0 }, "kure": { "$": 0 }, "mihara": { "$": 0 }, "miyoshi": { "$": 0 }, "naka": { "$": 0 }, "onomichi": { "$": 0 }, "osakikamijima": { "$": 0 }, "otake": { "$": 0 }, "saka": { "$": 0 }, "sera": { "$": 0 }, "seranishi": { "$": 0 }, "shinichi": { "$": 0 }, "shobara": { "$": 0 }, "takehara": { "$": 0 } }, "hokkaido": { "$": 0, "abashiri": { "$": 0 }, "abira": { "$": 0 }, "aibetsu": { "$": 0 }, "akabira": { "$": 0 }, "akkeshi": { "$": 0 }, "asahikawa": { "$": 0 }, "ashibetsu": { "$": 0 }, "ashoro": { "$": 0 }, "assabu": { "$": 0 }, "atsuma": { "$": 0 }, "bibai": { "$": 0 }, "biei": { "$": 0 }, "bifuka": { "$": 0 }, "bihoro": { "$": 0 }, "biratori": { "$": 0 }, "chippubetsu": { "$": 0 }, "chitose": { "$": 0 }, "date": { "$": 0 }, "ebetsu": { "$": 0 }, "embetsu": { "$": 0 }, "eniwa": { "$": 0 }, "erimo": { "$": 0 }, "esan": { "$": 0 }, "esashi": { "$": 0 }, "fukagawa": { "$": 0 }, "fukushima": { "$": 0 }, "furano": { "$": 0 }, "furubira": { "$": 0 }, "haboro": { "$": 0 }, "hakodate": { "$": 0 }, "hamatonbetsu": { "$": 0 }, "hidaka": { "$": 0 }, "higashikagura": { "$": 0 }, "higashikawa": { "$": 0 }, "hiroo": { "$": 0 }, "hokuryu": { "$": 0 }, "hokuto": { "$": 0 }, "honbetsu": { "$": 0 }, "horokanai": { "$": 0 }, "horonobe": { "$": 0 }, "ikeda": { "$": 0 }, "imakane": { "$": 0 }, "ishikari": { "$": 0 }, "iwamizawa": { "$": 0 }, "iwanai": { "$": 0 }, "kamifurano": { "$": 0 }, "kamikawa": { "$": 0 }, "kamishihoro": { "$": 0 }, "kamisunagawa": { "$": 0 }, "kamoenai": { "$": 0 }, "kayabe": { "$": 0 }, "kembuchi": { "$": 0 }, "kikonai": { "$": 0 }, "kimobetsu": { "$": 0 }, "kitahiroshima": { "$": 0 }, "kitami": { "$": 0 }, "kiyosato": { "$": 0 }, "koshimizu": { "$": 0 }, "kunneppu": { "$": 0 }, "kuriyama": { "$": 0 }, "kuromatsunai": { "$": 0 }, "kushiro": { "$": 0 }, "kutchan": { "$": 0 }, "kyowa": { "$": 0 }, "mashike": { "$": 0 }, "matsumae": { "$": 0 }, "mikasa": { "$": 0 }, "minamifurano": { "$": 0 }, "mombetsu": { "$": 0 }, "moseushi": { "$": 0 }, "mukawa": { "$": 0 }, "muroran": { "$": 0 }, "naie": { "$": 0 }, "nakagawa": { "$": 0 }, "nakasatsunai": { "$": 0 }, "nakatombetsu": { "$": 0 }, "nanae": { "$": 0 }, "nanporo": { "$": 0 }, "nayoro": { "$": 0 }, "nemuro": { "$": 0 }, "niikappu": { "$": 0 }, "niki": { "$": 0 }, "nishiokoppe": { "$": 0 }, "noboribetsu": { "$": 0 }, "numata": { "$": 0 }, "obihiro": { "$": 0 }, "obira": { "$": 0 }, "oketo": { "$": 0 }, "okoppe": { "$": 0 }, "otaru": { "$": 0 }, "otobe": { "$": 0 }, "otofuke": { "$": 0 }, "otoineppu": { "$": 0 }, "oumu": { "$": 0 }, "ozora": { "$": 0 }, "pippu": { "$": 0 }, "rankoshi": { "$": 0 }, "rebun": { "$": 0 }, "rikubetsu": { "$": 0 }, "rishiri": { "$": 0 }, "rishirifuji": { "$": 0 }, "saroma": { "$": 0 }, "sarufutsu": { "$": 0 }, "shakotan": { "$": 0 }, "shari": { "$": 0 }, "shibecha": { "$": 0 }, "shibetsu": { "$": 0 }, "shikabe": { "$": 0 }, "shikaoi": { "$": 0 }, "shimamaki": { "$": 0 }, "shimizu": { "$": 0 }, "shimokawa": { "$": 0 }, "shinshinotsu": { "$": 0 }, "shintoku": { "$": 0 }, "shiranuka": { "$": 0 }, "shiraoi": { "$": 0 }, "shiriuchi": { "$": 0 }, "sobetsu": { "$": 0 }, "sunagawa": { "$": 0 }, "taiki": { "$": 0 }, "takasu": { "$": 0 }, "takikawa": { "$": 0 }, "takinoue": { "$": 0 }, "teshikaga": { "$": 0 }, "tobetsu": { "$": 0 }, "tohma": { "$": 0 }, "tomakomai": { "$": 0 }, "tomari": { "$": 0 }, "toya": { "$": 0 }, "toyako": { "$": 0 }, "toyotomi": { "$": 0 }, "toyoura": { "$": 0 }, "tsubetsu": { "$": 0 }, "tsukigata": { "$": 0 }, "urakawa": { "$": 0 }, "urausu": { "$": 0 }, "uryu": { "$": 0 }, "utashinai": { "$": 0 }, "wakkanai": { "$": 0 }, "wassamu": { "$": 0 }, "yakumo": { "$": 0 }, "yoichi": { "$": 0 } }, "hyogo": { "$": 0, "aioi": { "$": 0 }, "akashi": { "$": 0 }, "ako": { "$": 0 }, "amagasaki": { "$": 0 }, "aogaki": { "$": 0 }, "asago": { "$": 0 }, "ashiya": { "$": 0 }, "awaji": { "$": 0 }, "fukusaki": { "$": 0 }, "goshiki": { "$": 0 }, "harima": { "$": 0 }, "himeji": { "$": 0 }, "ichikawa": { "$": 0 }, "inagawa": { "$": 0 }, "itami": { "$": 0 }, "kakogawa": { "$": 0 }, "kamigori": { "$": 0 }, "kamikawa": { "$": 0 }, "kasai": { "$": 0 }, "kasuga": { "$": 0 }, "kawanishi": { "$": 0 }, "miki": { "$": 0 }, "minamiawaji": { "$": 0 }, "nishinomiya": { "$": 0 }, "nishiwaki": { "$": 0 }, "ono": { "$": 0 }, "sanda": { "$": 0 }, "sannan": { "$": 0 }, "sasayama": { "$": 0 }, "sayo": { "$": 0 }, "shingu": { "$": 0 }, "shinonsen": { "$": 0 }, "shiso": { "$": 0 }, "sumoto": { "$": 0 }, "taishi": { "$": 0 }, "taka": { "$": 0 }, "takarazuka": { "$": 0 }, "takasago": { "$": 0 }, "takino": { "$": 0 }, "tamba": { "$": 0 }, "tatsuno": { "$": 0 }, "toyooka": { "$": 0 }, "yabu": { "$": 0 }, "yashiro": { "$": 0 }, "yoka": { "$": 0 }, "yokawa": { "$": 0 } }, "ibaraki": { "$": 0, "ami": { "$": 0 }, "asahi": { "$": 0 }, "bando": { "$": 0 }, "chikusei": { "$": 0 }, "daigo": { "$": 0 }, "fujishiro": { "$": 0 }, "hitachi": { "$": 0 }, "hitachinaka": { "$": 0 }, "hitachiomiya": { "$": 0 }, "hitachiota": { "$": 0 }, "ibaraki": { "$": 0 }, "ina": { "$": 0 }, "inashiki": { "$": 0 }, "itako": { "$": 0 }, "iwama": { "$": 0 }, "joso": { "$": 0 }, "kamisu": { "$": 0 }, "kasama": { "$": 0 }, "kashima": { "$": 0 }, "kasumigaura": { "$": 0 }, "koga": { "$": 0 }, "miho": { "$": 0 }, "mito": { "$": 0 }, "moriya": { "$": 0 }, "naka": { "$": 0 }, "namegata": { "$": 0 }, "oarai": { "$": 0 }, "ogawa": { "$": 0 }, "omitama": { "$": 0 }, "ryugasaki": { "$": 0 }, "sakai": { "$": 0 }, "sakuragawa": { "$": 0 }, "shimodate": { "$": 0 }, "shimotsuma": { "$": 0 }, "shirosato": { "$": 0 }, "sowa": { "$": 0 }, "suifu": { "$": 0 }, "takahagi": { "$": 0 }, "tamatsukuri": { "$": 0 }, "tokai": { "$": 0 }, "tomobe": { "$": 0 }, "tone": { "$": 0 }, "toride": { "$": 0 }, "tsuchiura": { "$": 0 }, "tsukuba": { "$": 0 }, "uchihara": { "$": 0 }, "ushiku": { "$": 0 }, "yachiyo": { "$": 0 }, "yamagata": { "$": 0 }, "yawara": { "$": 0 }, "yuki": { "$": 0 } }, "ishikawa": { "$": 0, "anamizu": { "$": 0 }, "hakui": { "$": 0 }, "hakusan": { "$": 0 }, "kaga": { "$": 0 }, "kahoku": { "$": 0 }, "kanazawa": { "$": 0 }, "kawakita": { "$": 0 }, "komatsu": { "$": 0 }, "nakanoto": { "$": 0 }, "nanao": { "$": 0 }, "nomi": { "$": 0 }, "nonoichi": { "$": 0 }, "noto": { "$": 0 }, "shika": { "$": 0 }, "suzu": { "$": 0 }, "tsubata": { "$": 0 }, "tsurugi": { "$": 0 }, "uchinada": { "$": 0 }, "wajima": { "$": 0 } }, "iwate": { "$": 0, "fudai": { "$": 0 }, "fujisawa": { "$": 0 }, "hanamaki": { "$": 0 }, "hiraizumi": { "$": 0 }, "hirono": { "$": 0 }, "ichinohe": { "$": 0 }, "ichinoseki": { "$": 0 }, "iwaizumi": { "$": 0 }, "iwate": { "$": 0 }, "joboji": { "$": 0 }, "kamaishi": { "$": 0 }, "kanegasaki": { "$": 0 }, "karumai": { "$": 0 }, "kawai": { "$": 0 }, "kitakami": { "$": 0 }, "kuji": { "$": 0 }, "kunohe": { "$": 0 }, "kuzumaki": { "$": 0 }, "miyako": { "$": 0 }, "mizusawa": { "$": 0 }, "morioka": { "$": 0 }, "ninohe": { "$": 0 }, "noda": { "$": 0 }, "ofunato": { "$": 0 }, "oshu": { "$": 0 }, "otsuchi": { "$": 0 }, "rikuzentakata": { "$": 0 }, "shiwa": { "$": 0 }, "shizukuishi": { "$": 0 }, "sumita": { "$": 0 }, "tanohata": { "$": 0 }, "tono": { "$": 0 }, "yahaba": { "$": 0 }, "yamada": { "$": 0 } }, "kagawa": { "$": 0, "ayagawa": { "$": 0 }, "higashikagawa": { "$": 0 }, "kanonji": { "$": 0 }, "kotohira": { "$": 0 }, "manno": { "$": 0 }, "marugame": { "$": 0 }, "mitoyo": { "$": 0 }, "naoshima": { "$": 0 }, "sanuki": { "$": 0 }, "tadotsu": { "$": 0 }, "takamatsu": { "$": 0 }, "tonosho": { "$": 0 }, "uchinomi": { "$": 0 }, "utazu": { "$": 0 }, "zentsuji": { "$": 0 } }, "kagoshima": { "$": 0, "akune": { "$": 0 }, "amami": { "$": 0 }, "hioki": { "$": 0 }, "isa": { "$": 0 }, "isen": { "$": 0 }, "izumi": { "$": 0 }, "kagoshima": { "$": 0 }, "kanoya": { "$": 0 }, "kawanabe": { "$": 0 }, "kinko": { "$": 0 }, "kouyama": { "$": 0 }, "makurazaki": { "$": 0 }, "matsumoto": { "$": 0 }, "minamitane": { "$": 0 }, "nakatane": { "$": 0 }, "nishinoomote": { "$": 0 }, "satsumasendai": { "$": 0 }, "soo": { "$": 0 }, "tarumizu": { "$": 0 }, "yusui": { "$": 0 } }, "kanagawa": { "$": 0, "aikawa": { "$": 0 }, "atsugi": { "$": 0 }, "ayase": { "$": 0 }, "chigasaki": { "$": 0 }, "ebina": { "$": 0 }, "fujisawa": { "$": 0 }, "hadano": { "$": 0 }, "hakone": { "$": 0 }, "hiratsuka": { "$": 0 }, "isehara": { "$": 0 }, "kaisei": { "$": 0 }, "kamakura": { "$": 0 }, "kiyokawa": { "$": 0 }, "matsuda": { "$": 0 }, "minamiashigara": { "$": 0 }, "miura": { "$": 0 }, "nakai": { "$": 0 }, "ninomiya": { "$": 0 }, "odawara": { "$": 0 }, "oi": { "$": 0 }, "oiso": { "$": 0 }, "sagamihara": { "$": 0 }, "samukawa": { "$": 0 }, "tsukui": { "$": 0 }, "yamakita": { "$": 0 }, "yamato": { "$": 0 }, "yokosuka": { "$": 0 }, "yugawara": { "$": 0 }, "zama": { "$": 0 }, "zushi": { "$": 0 } }, "kochi": { "$": 0, "aki": { "$": 0 }, "geisei": { "$": 0 }, "hidaka": { "$": 0 }, "higashitsuno": { "$": 0 }, "ino": { "$": 0 }, "kagami": { "$": 0 }, "kami": { "$": 0 }, "kitagawa": { "$": 0 }, "kochi": { "$": 0 }, "mihara": { "$": 0 }, "motoyama": { "$": 0 }, "muroto": { "$": 0 }, "nahari": { "$": 0 }, "nakamura": { "$": 0 }, "nankoku": { "$": 0 }, "nishitosa": { "$": 0 }, "niyodogawa": { "$": 0 }, "ochi": { "$": 0 }, "okawa": { "$": 0 }, "otoyo": { "$": 0 }, "otsuki": { "$": 0 }, "sakawa": { "$": 0 }, "sukumo": { "$": 0 }, "susaki": { "$": 0 }, "tosa": { "$": 0 }, "tosashimizu": { "$": 0 }, "toyo": { "$": 0 }, "tsuno": { "$": 0 }, "umaji": { "$": 0 }, "yasuda": { "$": 0 }, "yusuhara": { "$": 0 } }, "kumamoto": { "$": 0, "amakusa": { "$": 0 }, "arao": { "$": 0 }, "aso": { "$": 0 }, "choyo": { "$": 0 }, "gyokuto": { "$": 0 }, "kamiamakusa": { "$": 0 }, "kikuchi": { "$": 0 }, "kumamoto": { "$": 0 }, "mashiki": { "$": 0 }, "mifune": { "$": 0 }, "minamata": { "$": 0 }, "minamioguni": { "$": 0 }, "nagasu": { "$": 0 }, "nishihara": { "$": 0 }, "oguni": { "$": 0 }, "ozu": { "$": 0 }, "sumoto": { "$": 0 }, "takamori": { "$": 0 }, "uki": { "$": 0 }, "uto": { "$": 0 }, "yamaga": { "$": 0 }, "yamato": { "$": 0 }, "yatsushiro": { "$": 0 } }, "kyoto": { "$": 0, "ayabe": { "$": 0 }, "fukuchiyama": { "$": 0 }, "higashiyama": { "$": 0 }, "ide": { "$": 0 }, "ine": { "$": 0 }, "joyo": { "$": 0 }, "kameoka": { "$": 0 }, "kamo": { "$": 0 }, "kita": { "$": 0 }, "kizu": { "$": 0 }, "kumiyama": { "$": 0 }, "kyotamba": { "$": 0 }, "kyotanabe": { "$": 0 }, "kyotango": { "$": 0 }, "maizuru": { "$": 0 }, "minami": { "$": 0 }, "minamiyamashiro": { "$": 0 }, "miyazu": { "$": 0 }, "muko": { "$": 0 }, "nagaokakyo": { "$": 0 }, "nakagyo": { "$": 0 }, "nantan": { "$": 0 }, "oyamazaki": { "$": 0 }, "sakyo": { "$": 0 }, "seika": { "$": 0 }, "tanabe": { "$": 0 }, "uji": { "$": 0 }, "ujitawara": { "$": 0 }, "wazuka": { "$": 0 }, "yamashina": { "$": 0 }, "yawata": { "$": 0 } }, "mie": { "$": 0, "asahi": { "$": 0 }, "inabe": { "$": 0 }, "ise": { "$": 0 }, "kameyama": { "$": 0 }, "kawagoe": { "$": 0 }, "kiho": { "$": 0 }, "kisosaki": { "$": 0 }, "kiwa": { "$": 0 }, "komono": { "$": 0 }, "kumano": { "$": 0 }, "kuwana": { "$": 0 }, "matsusaka": { "$": 0 }, "meiwa": { "$": 0 }, "mihama": { "$": 0 }, "minamiise": { "$": 0 }, "misugi": { "$": 0 }, "miyama": { "$": 0 }, "nabari": { "$": 0 }, "shima": { "$": 0 }, "suzuka": { "$": 0 }, "tado": { "$": 0 }, "taiki": { "$": 0 }, "taki": { "$": 0 }, "tamaki": { "$": 0 }, "toba": { "$": 0 }, "tsu": { "$": 0 }, "udono": { "$": 0 }, "ureshino": { "$": 0 }, "watarai": { "$": 0 }, "yokkaichi": { "$": 0 } }, "miyagi": { "$": 0, "furukawa": { "$": 0 }, "higashimatsushima": { "$": 0 }, "ishinomaki": { "$": 0 }, "iwanuma": { "$": 0 }, "kakuda": { "$": 0 }, "kami": { "$": 0 }, "kawasaki": { "$": 0 }, "marumori": { "$": 0 }, "matsushima": { "$": 0 }, "minamisanriku": { "$": 0 }, "misato": { "$": 0 }, "murata": { "$": 0 }, "natori": { "$": 0 }, "ogawara": { "$": 0 }, "ohira": { "$": 0 }, "onagawa": { "$": 0 }, "osaki": { "$": 0 }, "rifu": { "$": 0 }, "semine": { "$": 0 }, "shibata": { "$": 0 }, "shichikashuku": { "$": 0 }, "shikama": { "$": 0 }, "shiogama": { "$": 0 }, "shiroishi": { "$": 0 }, "tagajo": { "$": 0 }, "taiwa": { "$": 0 }, "tome": { "$": 0 }, "tomiya": { "$": 0 }, "wakuya": { "$": 0 }, "watari": { "$": 0 }, "yamamoto": { "$": 0 }, "zao": { "$": 0 } }, "miyazaki": { "$": 0, "aya": { "$": 0 }, "ebino": { "$": 0 }, "gokase": { "$": 0 }, "hyuga": { "$": 0 }, "kadogawa": { "$": 0 }, "kawaminami": { "$": 0 }, "kijo": { "$": 0 }, "kitagawa": { "$": 0 }, "kitakata": { "$": 0 }, "kitaura": { "$": 0 }, "kobayashi": { "$": 0 }, "kunitomi": { "$": 0 }, "kushima": { "$": 0 }, "mimata": { "$": 0 }, "miyakonojo": { "$": 0 }, "miyazaki": { "$": 0 }, "morotsuka": { "$": 0 }, "nichinan": { "$": 0 }, "nishimera": { "$": 0 }, "nobeoka": { "$": 0 }, "saito": { "$": 0 }, "shiiba": { "$": 0 }, "shintomi": { "$": 0 }, "takaharu": { "$": 0 }, "takanabe": { "$": 0 }, "takazaki": { "$": 0 }, "tsuno": { "$": 0 } }, "nagano": { "$": 0, "achi": { "$": 0 }, "agematsu": { "$": 0 }, "anan": { "$": 0 }, "aoki": { "$": 0 }, "asahi": { "$": 0 }, "azumino": { "$": 0 }, "chikuhoku": { "$": 0 }, "chikuma": { "$": 0 }, "chino": { "$": 0 }, "fujimi": { "$": 0 }, "hakuba": { "$": 0 }, "hara": { "$": 0 }, "hiraya": { "$": 0 }, "iida": { "$": 0 }, "iijima": { "$": 0 }, "iiyama": { "$": 0 }, "iizuna": { "$": 0 }, "ikeda": { "$": 0 }, "ikusaka": { "$": 0 }, "ina": { "$": 0 }, "karuizawa": { "$": 0 }, "kawakami": { "$": 0 }, "kiso": { "$": 0 }, "kisofukushima": { "$": 0 }, "kitaaiki": { "$": 0 }, "komagane": { "$": 0 }, "komoro": { "$": 0 }, "matsukawa": { "$": 0 }, "matsumoto": { "$": 0 }, "miasa": { "$": 0 }, "minamiaiki": { "$": 0 }, "minamimaki": { "$": 0 }, "minamiminowa": { "$": 0 }, "minowa": { "$": 0 }, "miyada": { "$": 0 }, "miyota": { "$": 0 }, "mochizuki": { "$": 0 }, "nagano": { "$": 0 }, "nagawa": { "$": 0 }, "nagiso": { "$": 0 }, "nakagawa": { "$": 0 }, "nakano": { "$": 0 }, "nozawaonsen": { "$": 0 }, "obuse": { "$": 0 }, "ogawa": { "$": 0 }, "okaya": { "$": 0 }, "omachi": { "$": 0 }, "omi": { "$": 0 }, "ookuwa": { "$": 0 }, "ooshika": { "$": 0 }, "otaki": { "$": 0 }, "otari": { "$": 0 }, "sakae": { "$": 0 }, "sakaki": { "$": 0 }, "saku": { "$": 0 }, "sakuho": { "$": 0 }, "shimosuwa": { "$": 0 }, "shinanomachi": { "$": 0 }, "shiojiri": { "$": 0 }, "suwa": { "$": 0 }, "suzaka": { "$": 0 }, "takagi": { "$": 0 }, "takamori": { "$": 0 }, "takayama": { "$": 0 }, "tateshina": { "$": 0 }, "tatsuno": { "$": 0 }, "togakushi": { "$": 0 }, "togura": { "$": 0 }, "tomi": { "$": 0 }, "ueda": { "$": 0 }, "wada": { "$": 0 }, "yamagata": { "$": 0 }, "yamanouchi": { "$": 0 }, "yasaka": { "$": 0 }, "yasuoka": { "$": 0 } }, "nagasaki": { "$": 0, "chijiwa": { "$": 0 }, "futsu": { "$": 0 }, "goto": { "$": 0 }, "hasami": { "$": 0 }, "hirado": { "$": 0 }, "iki": { "$": 0 }, "isahaya": { "$": 0 }, "kawatana": { "$": 0 }, "kuchinotsu": { "$": 0 }, "matsuura": { "$": 0 }, "nagasaki": { "$": 0 }, "obama": { "$": 0 }, "omura": { "$": 0 }, "oseto": { "$": 0 }, "saikai": { "$": 0 }, "sasebo": { "$": 0 }, "seihi": { "$": 0 }, "shimabara": { "$": 0 }, "shinkamigoto": { "$": 0 }, "togitsu": { "$": 0 }, "tsushima": { "$": 0 }, "unzen": { "$": 0 } }, "nara": { "$": 0, "ando": { "$": 0 }, "gose": { "$": 0 }, "heguri": { "$": 0 }, "higashiyoshino": { "$": 0 }, "ikaruga": { "$": 0 }, "ikoma": { "$": 0 }, "kamikitayama": { "$": 0 }, "kanmaki": { "$": 0 }, "kashiba": { "$": 0 }, "kashihara": { "$": 0 }, "katsuragi": { "$": 0 }, "kawai": { "$": 0 }, "kawakami": { "$": 0 }, "kawanishi": { "$": 0 }, "koryo": { "$": 0 }, "kurotaki": { "$": 0 }, "mitsue": { "$": 0 }, "miyake": { "$": 0 }, "nara": { "$": 0 }, "nosegawa": { "$": 0 }, "oji": { "$": 0 }, "ouda": { "$": 0 }, "oyodo": { "$": 0 }, "sakurai": { "$": 0 }, "sango": { "$": 0 }, "shimoichi": { "$": 0 }, "shimokitayama": { "$": 0 }, "shinjo": { "$": 0 }, "soni": { "$": 0 }, "takatori": { "$": 0 }, "tawaramoto": { "$": 0 }, "tenkawa": { "$": 0 }, "tenri": { "$": 0 }, "uda": { "$": 0 }, "yamatokoriyama": { "$": 0 }, "yamatotakada": { "$": 0 }, "yamazoe": { "$": 0 }, "yoshino": { "$": 0 } }, "niigata": { "$": 0, "aga": { "$": 0 }, "agano": { "$": 0 }, "gosen": { "$": 0 }, "itoigawa": { "$": 0 }, "izumozaki": { "$": 0 }, "joetsu": { "$": 0 }, "kamo": { "$": 0 }, "kariwa": { "$": 0 }, "kashiwazaki": { "$": 0 }, "minamiuonuma": { "$": 0 }, "mitsuke": { "$": 0 }, "muika": { "$": 0 }, "murakami": { "$": 0 }, "myoko": { "$": 0 }, "nagaoka": { "$": 0 }, "niigata": { "$": 0 }, "ojiya": { "$": 0 }, "omi": { "$": 0 }, "sado": { "$": 0 }, "sanjo": { "$": 0 }, "seiro": { "$": 0 }, "seirou": { "$": 0 }, "sekikawa": { "$": 0 }, "shibata": { "$": 0 }, "tagami": { "$": 0 }, "tainai": { "$": 0 }, "tochio": { "$": 0 }, "tokamachi": { "$": 0 }, "tsubame": { "$": 0 }, "tsunan": { "$": 0 }, "uonuma": { "$": 0 }, "yahiko": { "$": 0 }, "yoita": { "$": 0 }, "yuzawa": { "$": 0 } }, "oita": { "$": 0, "beppu": { "$": 0 }, "bungoono": { "$": 0 }, "bungotakada": { "$": 0 }, "hasama": { "$": 0 }, "hiji": { "$": 0 }, "himeshima": { "$": 0 }, "hita": { "$": 0 }, "kamitsue": { "$": 0 }, "kokonoe": { "$": 0 }, "kuju": { "$": 0 }, "kunisaki": { "$": 0 }, "kusu": { "$": 0 }, "oita": { "$": 0 }, "saiki": { "$": 0 }, "taketa": { "$": 0 }, "tsukumi": { "$": 0 }, "usa": { "$": 0 }, "usuki": { "$": 0 }, "yufu": { "$": 0 } }, "okayama": { "$": 0, "akaiwa": { "$": 0 }, "asakuchi": { "$": 0 }, "bizen": { "$": 0 }, "hayashima": { "$": 0 }, "ibara": { "$": 0 }, "kagamino": { "$": 0 }, "kasaoka": { "$": 0 }, "kibichuo": { "$": 0 }, "kumenan": { "$": 0 }, "kurashiki": { "$": 0 }, "maniwa": { "$": 0 }, "misaki": { "$": 0 }, "nagi": { "$": 0 }, "niimi": { "$": 0 }, "nishiawakura": { "$": 0 }, "okayama": { "$": 0 }, "satosho": { "$": 0 }, "setouchi": { "$": 0 }, "shinjo": { "$": 0 }, "shoo": { "$": 0 }, "soja": { "$": 0 }, "takahashi": { "$": 0 }, "tamano": { "$": 0 }, "tsuyama": { "$": 0 }, "wake": { "$": 0 }, "yakage": { "$": 0 } }, "okinawa": { "$": 0, "aguni": { "$": 0 }, "ginowan": { "$": 0 }, "ginoza": { "$": 0 }, "gushikami": { "$": 0 }, "haebaru": { "$": 0 }, "higashi": { "$": 0 }, "hirara": { "$": 0 }, "iheya": { "$": 0 }, "ishigaki": { "$": 0 }, "ishikawa": { "$": 0 }, "itoman": { "$": 0 }, "izena": { "$": 0 }, "kadena": { "$": 0 }, "kin": { "$": 0 }, "kitadaito": { "$": 0 }, "kitanakagusuku": { "$": 0 }, "kumejima": { "$": 0 }, "kunigami": { "$": 0 }, "minamidaito": { "$": 0 }, "motobu": { "$": 0 }, "nago": { "$": 0 }, "naha": { "$": 0 }, "nakagusuku": { "$": 0 }, "nakijin": { "$": 0 }, "nanjo": { "$": 0 }, "nishihara": { "$": 0 }, "ogimi": { "$": 0 }, "okinawa": { "$": 0 }, "onna": { "$": 0 }, "shimoji": { "$": 0 }, "taketomi": { "$": 0 }, "tarama": { "$": 0 }, "tokashiki": { "$": 0 }, "tomigusuku": { "$": 0 }, "tonaki": { "$": 0 }, "urasoe": { "$": 0 }, "uruma": { "$": 0 }, "yaese": { "$": 0 }, "yomitan": { "$": 0 }, "yonabaru": { "$": 0 }, "yonaguni": { "$": 0 }, "zamami": { "$": 0 } }, "osaka": { "$": 0, "abeno": { "$": 0 }, "chihayaakasaka": { "$": 0 }, "chuo": { "$": 0 }, "daito": { "$": 0 }, "fujiidera": { "$": 0 }, "habikino": { "$": 0 }, "hannan": { "$": 0 }, "higashiosaka": { "$": 0 }, "higashisumiyoshi": { "$": 0 }, "higashiyodogawa": { "$": 0 }, "hirakata": { "$": 0 }, "ibaraki": { "$": 0 }, "ikeda": { "$": 0 }, "izumi": { "$": 0 }, "izumiotsu": { "$": 0 }, "izumisano": { "$": 0 }, "kadoma": { "$": 0 }, "kaizuka": { "$": 0 }, "kanan": { "$": 0 }, "kashiwara": { "$": 0 }, "katano": { "$": 0 }, "kawachinagano": { "$": 0 }, "kishiwada": { "$": 0 }, "kita": { "$": 0 }, "kumatori": { "$": 0 }, "matsubara": { "$": 0 }, "minato": { "$": 0 }, "minoh": { "$": 0 }, "misaki": { "$": 0 }, "moriguchi": { "$": 0 }, "neyagawa": { "$": 0 }, "nishi": { "$": 0 }, "nose": { "$": 0 }, "osakasayama": { "$": 0 }, "sakai": { "$": 0 }, "sayama": { "$": 0 }, "sennan": { "$": 0 }, "settsu": { "$": 0 }, "shijonawate": { "$": 0 }, "shimamoto": { "$": 0 }, "suita": { "$": 0 }, "tadaoka": { "$": 0 }, "taishi": { "$": 0 }, "tajiri": { "$": 0 }, "takaishi": { "$": 0 }, "takatsuki": { "$": 0 }, "tondabayashi": { "$": 0 }, "toyonaka": { "$": 0 }, "toyono": { "$": 0 }, "yao": { "$": 0 } }, "saga": { "$": 0, "ariake": { "$": 0 }, "arita": { "$": 0 }, "fukudomi": { "$": 0 }, "genkai": { "$": 0 }, "hamatama": { "$": 0 }, "hizen": { "$": 0 }, "imari": { "$": 0 }, "kamimine": { "$": 0 }, "kanzaki": { "$": 0 }, "karatsu": { "$": 0 }, "kashima": { "$": 0 }, "kitagata": { "$": 0 }, "kitahata": { "$": 0 }, "kiyama": { "$": 0 }, "kouhoku": { "$": 0 }, "kyuragi": { "$": 0 }, "nishiarita": { "$": 0 }, "ogi": { "$": 0 }, "omachi": { "$": 0 }, "ouchi": { "$": 0 }, "saga": { "$": 0 }, "shiroishi": { "$": 0 }, "taku": { "$": 0 }, "tara": { "$": 0 }, "tosu": { "$": 0 }, "yoshinogari": { "$": 0 } }, "saitama": { "$": 0, "arakawa": { "$": 0 }, "asaka": { "$": 0 }, "chichibu": { "$": 0 }, "fujimi": { "$": 0 }, "fujimino": { "$": 0 }, "fukaya": { "$": 0 }, "hanno": { "$": 0 }, "hanyu": { "$": 0 }, "hasuda": { "$": 0 }, "hatogaya": { "$": 0 }, "hatoyama": { "$": 0 }, "hidaka": { "$": 0 }, "higashichichibu": { "$": 0 }, "higashimatsuyama": { "$": 0 }, "honjo": { "$": 0 }, "ina": { "$": 0 }, "iruma": { "$": 0 }, "iwatsuki": { "$": 0 }, "kamiizumi": { "$": 0 }, "kamikawa": { "$": 0 }, "kamisato": { "$": 0 }, "kasukabe": { "$": 0 }, "kawagoe": { "$": 0 }, "kawaguchi": { "$": 0 }, "kawajima": { "$": 0 }, "kazo": { "$": 0 }, "kitamoto": { "$": 0 }, "koshigaya": { "$": 0 }, "kounosu": { "$": 0 }, "kuki": { "$": 0 }, "kumagaya": { "$": 0 }, "matsubushi": { "$": 0 }, "minano": { "$": 0 }, "misato": { "$": 0 }, "miyashiro": { "$": 0 }, "miyoshi": { "$": 0 }, "moroyama": { "$": 0 }, "nagatoro": { "$": 0 }, "namegawa": { "$": 0 }, "niiza": { "$": 0 }, "ogano": { "$": 0 }, "ogawa": { "$": 0 }, "ogose": { "$": 0 }, "okegawa": { "$": 0 }, "omiya": { "$": 0 }, "otaki": { "$": 0 }, "ranzan": { "$": 0 }, "ryokami": { "$": 0 }, "saitama": { "$": 0 }, "sakado": { "$": 0 }, "satte": { "$": 0 }, "sayama": { "$": 0 }, "shiki": { "$": 0 }, "shiraoka": { "$": 0 }, "soka": { "$": 0 }, "sugito": { "$": 0 }, "toda": { "$": 0 }, "tokigawa": { "$": 0 }, "tokorozawa": { "$": 0 }, "tsurugashima": { "$": 0 }, "urawa": { "$": 0 }, "warabi": { "$": 0 }, "yashio": { "$": 0 }, "yokoze": { "$": 0 }, "yono": { "$": 0 }, "yorii": { "$": 0 }, "yoshida": { "$": 0 }, "yoshikawa": { "$": 0 }, "yoshimi": { "$": 0 } }, "shiga": { "$": 0, "aisho": { "$": 0 }, "gamo": { "$": 0 }, "higashiomi": { "$": 0 }, "hikone": { "$": 0 }, "koka": { "$": 0 }, "konan": { "$": 0 }, "kosei": { "$": 0 }, "koto": { "$": 0 }, "kusatsu": { "$": 0 }, "maibara": { "$": 0 }, "moriyama": { "$": 0 }, "nagahama": { "$": 0 }, "nishiazai": { "$": 0 }, "notogawa": { "$": 0 }, "omihachiman": { "$": 0 }, "otsu": { "$": 0 }, "ritto": { "$": 0 }, "ryuoh": { "$": 0 }, "takashima": { "$": 0 }, "takatsuki": { "$": 0 }, "torahime": { "$": 0 }, "toyosato": { "$": 0 }, "yasu": { "$": 0 } }, "shimane": { "$": 0, "akagi": { "$": 0 }, "ama": { "$": 0 }, "gotsu": { "$": 0 }, "hamada": { "$": 0 }, "higashiizumo": { "$": 0 }, "hikawa": { "$": 0 }, "hikimi": { "$": 0 }, "izumo": { "$": 0 }, "kakinoki": { "$": 0 }, "masuda": { "$": 0 }, "matsue": { "$": 0 }, "misato": { "$": 0 }, "nishinoshima": { "$": 0 }, "ohda": { "$": 0 }, "okinoshima": { "$": 0 }, "okuizumo": { "$": 0 }, "shimane": { "$": 0 }, "tamayu": { "$": 0 }, "tsuwano": { "$": 0 }, "unnan": { "$": 0 }, "yakumo": { "$": 0 }, "yasugi": { "$": 0 }, "yatsuka": { "$": 0 } }, "shizuoka": { "$": 0, "arai": { "$": 0 }, "atami": { "$": 0 }, "fuji": { "$": 0 }, "fujieda": { "$": 0 }, "fujikawa": { "$": 0 }, "fujinomiya": { "$": 0 }, "fukuroi": { "$": 0 }, "gotemba": { "$": 0 }, "haibara": { "$": 0 }, "hamamatsu": { "$": 0 }, "higashiizu": { "$": 0 }, "ito": { "$": 0 }, "iwata": { "$": 0 }, "izu": { "$": 0 }, "izunokuni": { "$": 0 }, "kakegawa": { "$": 0 }, "kannami": { "$": 0 }, "kawanehon": { "$": 0 }, "kawazu": { "$": 0 }, "kikugawa": { "$": 0 }, "kosai": { "$": 0 }, "makinohara": { "$": 0 }, "matsuzaki": { "$": 0 }, "minamiizu": { "$": 0 }, "mishima": { "$": 0 }, "morimachi": { "$": 0 }, "nishiizu": { "$": 0 }, "numazu": { "$": 0 }, "omaezaki": { "$": 0 }, "shimada": { "$": 0 }, "shimizu": { "$": 0 }, "shimoda": { "$": 0 }, "shizuoka": { "$": 0 }, "susono": { "$": 0 }, "yaizu": { "$": 0 }, "yoshida": { "$": 0 } }, "tochigi": { "$": 0, "ashikaga": { "$": 0 }, "bato": { "$": 0 }, "haga": { "$": 0 }, "ichikai": { "$": 0 }, "iwafune": { "$": 0 }, "kaminokawa": { "$": 0 }, "kanuma": { "$": 0 }, "karasuyama": { "$": 0 }, "kuroiso": { "$": 0 }, "mashiko": { "$": 0 }, "mibu": { "$": 0 }, "moka": { "$": 0 }, "motegi": { "$": 0 }, "nasu": { "$": 0 }, "nasushiobara": { "$": 0 }, "nikko": { "$": 0 }, "nishikata": { "$": 0 }, "nogi": { "$": 0 }, "ohira": { "$": 0 }, "ohtawara": { "$": 0 }, "oyama": { "$": 0 }, "sakura": { "$": 0 }, "sano": { "$": 0 }, "shimotsuke": { "$": 0 }, "shioya": { "$": 0 }, "takanezawa": { "$": 0 }, "tochigi": { "$": 0 }, "tsuga": { "$": 0 }, "ujiie": { "$": 0 }, "utsunomiya": { "$": 0 }, "yaita": { "$": 0 } }, "tokushima": { "$": 0, "aizumi": { "$": 0 }, "anan": { "$": 0 }, "ichiba": { "$": 0 }, "itano": { "$": 0 }, "kainan": { "$": 0 }, "komatsushima": { "$": 0 }, "matsushige": { "$": 0 }, "mima": { "$": 0 }, "minami": { "$": 0 }, "miyoshi": { "$": 0 }, "mugi": { "$": 0 }, "nakagawa": { "$": 0 }, "naruto": { "$": 0 }, "sanagochi": { "$": 0 }, "shishikui": { "$": 0 }, "tokushima": { "$": 0 }, "wajiki": { "$": 0 } }, "tokyo": { "$": 0, "adachi": { "$": 0 }, "akiruno": { "$": 0 }, "akishima": { "$": 0 }, "aogashima": { "$": 0 }, "arakawa": { "$": 0 }, "bunkyo": { "$": 0 }, "chiyoda": { "$": 0 }, "chofu": { "$": 0 }, "chuo": { "$": 0 }, "edogawa": { "$": 0 }, "fuchu": { "$": 0 }, "fussa": { "$": 0 }, "hachijo": { "$": 0 }, "hachioji": { "$": 0 }, "hamura": { "$": 0 }, "higashikurume": { "$": 0 }, "higashimurayama": { "$": 0 }, "higashiyamato": { "$": 0 }, "hino": { "$": 0 }, "hinode": { "$": 0 }, "hinohara": { "$": 0 }, "inagi": { "$": 0 }, "itabashi": { "$": 0 }, "katsushika": { "$": 0 }, "kita": { "$": 0 }, "kiyose": { "$": 0 }, "kodaira": { "$": 0 }, "koganei": { "$": 0 }, "kokubunji": { "$": 0 }, "komae": { "$": 0 }, "koto": { "$": 0 }, "kouzushima": { "$": 0 }, "kunitachi": { "$": 0 }, "machida": { "$": 0 }, "meguro": { "$": 0 }, "minato": { "$": 0 }, "mitaka": { "$": 0 }, "mizuho": { "$": 0 }, "musashimurayama": { "$": 0 }, "musashino": { "$": 0 }, "nakano": { "$": 0 }, "nerima": { "$": 0 }, "ogasawara": { "$": 0 }, "okutama": { "$": 0 }, "ome": { "$": 0 }, "oshima": { "$": 0 }, "ota": { "$": 0 }, "setagaya": { "$": 0 }, "shibuya": { "$": 0 }, "shinagawa": { "$": 0 }, "shinjuku": { "$": 0 }, "suginami": { "$": 0 }, "sumida": { "$": 0 }, "tachikawa": { "$": 0 }, "taito": { "$": 0 }, "tama": { "$": 0 }, "toshima": { "$": 0 } }, "tottori": { "$": 0, "chizu": { "$": 0 }, "hino": { "$": 0 }, "kawahara": { "$": 0 }, "koge": { "$": 0 }, "kotoura": { "$": 0 }, "misasa": { "$": 0 }, "nanbu": { "$": 0 }, "nichinan": { "$": 0 }, "sakaiminato": { "$": 0 }, "tottori": { "$": 0 }, "wakasa": { "$": 0 }, "yazu": { "$": 0 }, "yonago": { "$": 0 } }, "toyama": { "$": 0, "asahi": { "$": 0 }, "fuchu": { "$": 0 }, "fukumitsu": { "$": 0 }, "funahashi": { "$": 0 }, "himi": { "$": 0 }, "imizu": { "$": 0 }, "inami": { "$": 0 }, "johana": { "$": 0 }, "kamiichi": { "$": 0 }, "kurobe": { "$": 0 }, "nakaniikawa": { "$": 0 }, "namerikawa": { "$": 0 }, "nanto": { "$": 0 }, "nyuzen": { "$": 0 }, "oyabe": { "$": 0 }, "taira": { "$": 0 }, "takaoka": { "$": 0 }, "tateyama": { "$": 0 }, "toga": { "$": 0 }, "tonami": { "$": 0 }, "toyama": { "$": 0 }, "unazuki": { "$": 0 }, "uozu": { "$": 0 }, "yamada": { "$": 0 } }, "wakayama": { "$": 0, "arida": { "$": 0 }, "aridagawa": { "$": 0 }, "gobo": { "$": 0 }, "hashimoto": { "$": 0 }, "hidaka": { "$": 0 }, "hirogawa": { "$": 0 }, "inami": { "$": 0 }, "iwade": { "$": 0 }, "kainan": { "$": 0 }, "kamitonda": { "$": 0 }, "katsuragi": { "$": 0 }, "kimino": { "$": 0 }, "kinokawa": { "$": 0 }, "kitayama": { "$": 0 }, "koya": { "$": 0 }, "koza": { "$": 0 }, "kozagawa": { "$": 0 }, "kudoyama": { "$": 0 }, "kushimoto": { "$": 0 }, "mihama": { "$": 0 }, "misato": { "$": 0 }, "nachikatsuura": { "$": 0 }, "shingu": { "$": 0 }, "shirahama": { "$": 0 }, "taiji": { "$": 0 }, "tanabe": { "$": 0 }, "wakayama": { "$": 0 }, "yuasa": { "$": 0 }, "yura": { "$": 0 } }, "yamagata": { "$": 0, "asahi": { "$": 0 }, "funagata": { "$": 0 }, "higashine": { "$": 0 }, "iide": { "$": 0 }, "kahoku": { "$": 0 }, "kaminoyama": { "$": 0 }, "kaneyama": { "$": 0 }, "kawanishi": { "$": 0 }, "mamurogawa": { "$": 0 }, "mikawa": { "$": 0 }, "murayama": { "$": 0 }, "nagai": { "$": 0 }, "nakayama": { "$": 0 }, "nanyo": { "$": 0 }, "nishikawa": { "$": 0 }, "obanazawa": { "$": 0 }, "oe": { "$": 0 }, "oguni": { "$": 0 }, "ohkura": { "$": 0 }, "oishida": { "$": 0 }, "sagae": { "$": 0 }, "sakata": { "$": 0 }, "sakegawa": { "$": 0 }, "shinjo": { "$": 0 }, "shirataka": { "$": 0 }, "shonai": { "$": 0 }, "takahata": { "$": 0 }, "tendo": { "$": 0 }, "tozawa": { "$": 0 }, "tsuruoka": { "$": 0 }, "yamagata": { "$": 0 }, "yamanobe": { "$": 0 }, "yonezawa": { "$": 0 }, "yuza": { "$": 0 } }, "yamaguchi": { "$": 0, "abu": { "$": 0 }, "hagi": { "$": 0 }, "hikari": { "$": 0 }, "hofu": { "$": 0 }, "iwakuni": { "$": 0 }, "kudamatsu": { "$": 0 }, "mitou": { "$": 0 }, "nagato": { "$": 0 }, "oshima": { "$": 0 }, "shimonoseki": { "$": 0 }, "shunan": { "$": 0 }, "tabuse": { "$": 0 }, "tokuyama": { "$": 0 }, "toyota": { "$": 0 }, "ube": { "$": 0 }, "yuu": { "$": 0 } }, "yamanashi": { "$": 0, "chuo": { "$": 0 }, "doshi": { "$": 0 }, "fuefuki": { "$": 0 }, "fujikawa": { "$": 0 }, "fujikawaguchiko": { "$": 0 }, "fujiyoshida": { "$": 0 }, "hayakawa": { "$": 0 }, "hokuto": { "$": 0 }, "ichikawamisato": { "$": 0 }, "kai": { "$": 0 }, "kofu": { "$": 0 }, "koshu": { "$": 0 }, "kosuge": { "$": 0 }, "minami-alps": { "$": 0 }, "minobu": { "$": 0 }, "nakamichi": { "$": 0 }, "nanbu": { "$": 0 }, "narusawa": { "$": 0 }, "nirasaki": { "$": 0 }, "nishikatsura": { "$": 0 }, "oshino": { "$": 0 }, "otsuki": { "$": 0 }, "showa": { "$": 0 }, "tabayama": { "$": 0 }, "tsuru": { "$": 0 }, "uenohara": { "$": 0 }, "yamanakako": { "$": 0 }, "yamanashi": { "$": 0 } }, "xn--4pvxs": { "$": 0 }, "xn--vgu402c": { "$": 0 }, "xn--c3s14m": { "$": 0 }, "xn--f6qx53a": { "$": 0 }, "xn--8pvr4u": { "$": 0 }, "xn--uist22h": { "$": 0 }, "xn--djrs72d6uy": { "$": 0 }, "xn--mkru45i": { "$": 0 }, "xn--0trq7p7nn": { "$": 0 }, "xn--8ltr62k": { "$": 0 }, "xn--2m4a15e": { "$": 0 }, "xn--efvn9s": { "$": 0 }, "xn--32vp30h": { "$": 0 }, "xn--4it797k": { "$": 0 }, "xn--1lqs71d": { "$": 0 }, "xn--5rtp49c": { "$": 0 }, "xn--5js045d": { "$": 0 }, "xn--ehqz56n": { "$": 0 }, "xn--1lqs03n": { "$": 0 }, "xn--qqqt11m": { "$": 0 }, "xn--kbrq7o": { "$": 0 }, "xn--pssu33l": { "$": 0 }, "xn--ntsq17g": { "$": 0 }, "xn--uisz3g": { "$": 0 }, "xn--6btw5a": { "$": 0 }, "xn--1ctwo": { "$": 0 }, "xn--6orx2r": { "$": 0 }, "xn--rht61e": { "$": 0 }, "xn--rht27z": { "$": 0 }, "xn--djty4k": { "$": 0 }, "xn--nit225k": { "$": 0 }, "xn--rht3d": { "$": 0 }, "xn--klty5x": { "$": 0 }, "xn--kltx9a": { "$": 0 }, "xn--kltp7d": { "$": 0 }, "xn--uuwu58a": { "$": 0 }, "xn--zbx025d": { "$": 0 }, "xn--ntso0iqx3a": { "$": 0 }, "xn--elqq16h": { "$": 0 }, "xn--4it168d": { "$": 0 }, "xn--klt787d": { "$": 0 }, "xn--rny31h": { "$": 0 }, "xn--7t0a264c": { "$": 0 }, "xn--5rtq34k": { "$": 0 }, "xn--k7yn95e": { "$": 0 }, "xn--tor131o": { "$": 0 }, "xn--d5qv7z876c": { "$": 0 }, "kawasaki": { "*": { "$": 0 } }, "kitakyushu": { "*": { "$": 0 } }, "kobe": { "*": { "$": 0 } }, "nagoya": { "*": { "$": 0 } }, "sapporo": { "*": { "$": 0 } }, "sendai": { "*": { "$": 0 } }, "yokohama": { "*": { "$": 0 } }, "blogspot": { "$": 0 } }, "ke": { "*": { "$": 0 }, "co": { "blogspot": { "$": 0 } } }, "kg": { "$": 0, "org": { "$": 0 }, "net": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 } }, "kh": { "*": { "$": 0 } }, "ki": { "$": 0, "edu": { "$": 0 }, "biz": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gov": { "$": 0 }, "info": { "$": 0 }, "com": { "$": 0 } }, "km": { "$": 0, "org": { "$": 0 }, "nom": { "$": 0 }, "gov": { "$": 0 }, "prd": { "$": 0 }, "tm": { "$": 0 }, "edu": { "$": 0 }, "mil": { "$": 0 }, "ass": { "$": 0 }, "com": { "$": 0 }, "coop": { "$": 0 }, "asso": { "$": 0 }, "presse": { "$": 0 }, "medecin": { "$": 0 }, "notaires": { "$": 0 }, "pharmaciens": { "$": 0 }, "veterinaire": { "$": 0 }, "gouv": { "$": 0 } }, "kn": { "$": 0, "net": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 } }, "kp": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "rep": { "$": 0 }, "tra": { "$": 0 } }, "kr": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0 }, "es": { "$": 0 }, "go": { "$": 0 }, "hs": { "$": 0 }, "kg": { "$": 0 }, "mil": { "$": 0 }, "ms": { "$": 0 }, "ne": { "$": 0 }, "or": { "$": 0 }, "pe": { "$": 0 }, "re": { "$": 0 }, "sc": { "$": 0 }, "busan": { "$": 0 }, "chungbuk": { "$": 0 }, "chungnam": { "$": 0 }, "daegu": { "$": 0 }, "daejeon": { "$": 0 }, "gangwon": { "$": 0 }, "gwangju": { "$": 0 }, "gyeongbuk": { "$": 0 }, "gyeonggi": { "$": 0 }, "gyeongnam": { "$": 0 }, "incheon": { "$": 0 }, "jeju": { "$": 0 }, "jeonbuk": { "$": 0 }, "jeonnam": { "$": 0 }, "seoul": { "$": 0 }, "ulsan": { "$": 0 }, "blogspot": { "$": 0 } }, "kw": { "*": { "$": 0 } }, "ky": { "$": 0, "edu": { "$": 0 }, "gov": { "$": 0 }, "com": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 } }, "kz": { "$": 0, "org": { "$": 0 }, "edu": { "$": 0 }, "net": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "com": { "$": 0 }, "nym": { "$": 0 } }, "la": { "$": 0, "int": { "$": 0 }, "net": { "$": 0 }, "info": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "per": { "$": 0 }, "com": { "$": 0 }, "org": { "$": 0 }, "bnr": { "$": 0 }, "c": { "$": 0 }, "nym": { "$": 0 } }, "lb": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "lc": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "co": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "oy": { "$": 0 } }, "li": { "$": 0, "blogspot": { "$": 0 }, "nom": { "$": 0 }, "nym": { "$": 0 } }, "lk": { "$": 0, "gov": { "$": 0 }, "sch": { "$": 0 }, "net": { "$": 0 }, "int": { "$": 0 }, "com": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "ngo": { "$": 0 }, "soc": { "$": 0 }, "web": { "$": 0 }, "ltd": { "$": 0 }, "assn": { "$": 0 }, "grp": { "$": 0 }, "hotel": { "$": 0 }, "ac": { "$": 0 } }, "lr": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 } }, "ls": { "$": 0, "co": { "$": 0 }, "org": { "$": 0 } }, "lt": { "$": 0, "gov": { "$": 0 }, "blogspot": { "$": 0 }, "nym": { "$": 0 } }, "lu": { "$": 0, "blogspot": { "$": 0 }, "nym": { "$": 0 } }, "lv": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "mil": { "$": 0 }, "id": { "$": 0 }, "net": { "$": 0 }, "asn": { "$": 0 }, "conf": { "$": 0 } }, "ly": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "gov": { "$": 0 }, "plc": { "$": 0 }, "edu": { "$": 0 }, "sch": { "$": 0 }, "med": { "$": 0 }, "org": { "$": 0 }, "id": { "$": 0 } }, "ma": { "$": 0, "co": { "$": 0 }, "net": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "ac": { "$": 0 }, "press": { "$": 0 } }, "mc": { "$": 0, "tm": { "$": 0 }, "asso": { "$": 0 } }, "md": { "$": 0, "blogspot": { "$": 0 } }, "me": { "$": 0, "co": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "ac": { "$": 0 }, "gov": { "$": 0 }, "its": { "$": 0 }, "priv": { "$": 0 }, "c66": { "$": 0 }, "daplie": { "$": 0, "localhost": { "$": 0 } }, "filegear": { "$": 0 }, "brasilia": { "$": 0 }, "ddns": { "$": 0 }, "dnsfor": { "$": 0 }, "hopto": { "$": 0 }, "loginto": { "$": 0 }, "noip": { "$": 0 }, "webhop": { "$": 0 }, "nym": { "$": 0 }, "diskstation": { "$": 0 }, "dscloud": { "$": 0 }, "i234": { "$": 0 }, "myds": { "$": 0 }, "synology": { "$": 0 }, "wedeploy": { "$": 0 }, "yombo": { "$": 0 } }, "mg": { "$": 0, "org": { "$": 0 }, "nom": { "$": 0 }, "gov": { "$": 0 }, "prd": { "$": 0 }, "tm": { "$": 0 }, "edu": { "$": 0 }, "mil": { "$": 0 }, "com": { "$": 0 }, "co": { "$": 0 } }, "mh": { "$": 0 }, "mil": { "$": 0 }, "mk": { "$": 0, "com": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "inf": { "$": 0 }, "name": { "$": 0 }, "blogspot": { "$": 0 }, "nom": { "$": 0 } }, "ml": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gouv": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "presse": { "$": 0 } }, "mm": { "*": { "$": 0 } }, "mn": { "$": 0, "gov": { "$": 0 }, "edu": { "$": 0 }, "org": { "$": 0 }, "nyc": { "$": 0 } }, "mo": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 } }, "mobi": { "$": 0, "dscloud": { "$": 0 } }, "mp": { "$": 0 }, "mq": { "$": 0 }, "mr": { "$": 0, "gov": { "$": 0 }, "blogspot": { "$": 0 } }, "ms": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "mt": { "$": 0, "com": { "$": 0, "blogspot": { "$": 0 } }, "edu": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "mu": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gov": { "$": 0 }, "ac": { "$": 0 }, "co": { "$": 0 }, "or": { "$": 0 } }, "museum": { "$": 0, "academy": { "$": 0 }, "agriculture": { "$": 0 }, "air": { "$": 0 }, "airguard": { "$": 0 }, "alabama": { "$": 0 }, "alaska": { "$": 0 }, "amber": { "$": 0 }, "ambulance": { "$": 0 }, "american": { "$": 0 }, "americana": { "$": 0 }, "americanantiques": { "$": 0 }, "americanart": { "$": 0 }, "amsterdam": { "$": 0 }, "and": { "$": 0 }, "annefrank": { "$": 0 }, "anthro": { "$": 0 }, "anthropology": { "$": 0 }, "antiques": { "$": 0 }, "aquarium": { "$": 0 }, "arboretum": { "$": 0 }, "archaeological": { "$": 0 }, "archaeology": { "$": 0 }, "architecture": { "$": 0 }, "art": { "$": 0 }, "artanddesign": { "$": 0 }, "artcenter": { "$": 0 }, "artdeco": { "$": 0 }, "arteducation": { "$": 0 }, "artgallery": { "$": 0 }, "arts": { "$": 0 }, "artsandcrafts": { "$": 0 }, "asmatart": { "$": 0 }, "assassination": { "$": 0 }, "assisi": { "$": 0 }, "association": { "$": 0 }, "astronomy": { "$": 0 }, "atlanta": { "$": 0 }, "austin": { "$": 0 }, "australia": { "$": 0 }, "automotive": { "$": 0 }, "aviation": { "$": 0 }, "axis": { "$": 0 }, "badajoz": { "$": 0 }, "baghdad": { "$": 0 }, "bahn": { "$": 0 }, "bale": { "$": 0 }, "baltimore": { "$": 0 }, "barcelona": { "$": 0 }, "baseball": { "$": 0 }, "basel": { "$": 0 }, "baths": { "$": 0 }, "bauern": { "$": 0 }, "beauxarts": { "$": 0 }, "beeldengeluid": { "$": 0 }, "bellevue": { "$": 0 }, "bergbau": { "$": 0 }, "berkeley": { "$": 0 }, "berlin": { "$": 0 }, "bern": { "$": 0 }, "bible": { "$": 0 }, "bilbao": { "$": 0 }, "bill": { "$": 0 }, "birdart": { "$": 0 }, "birthplace": { "$": 0 }, "bonn": { "$": 0 }, "boston": { "$": 0 }, "botanical": { "$": 0 }, "botanicalgarden": { "$": 0 }, "botanicgarden": { "$": 0 }, "botany": { "$": 0 }, "brandywinevalley": { "$": 0 }, "brasil": { "$": 0 }, "bristol": { "$": 0 }, "british": { "$": 0 }, "britishcolumbia": { "$": 0 }, "broadcast": { "$": 0 }, "brunel": { "$": 0 }, "brussel": { "$": 0 }, "brussels": { "$": 0 }, "bruxelles": { "$": 0 }, "building": { "$": 0 }, "burghof": { "$": 0 }, "bus": { "$": 0 }, "bushey": { "$": 0 }, "cadaques": { "$": 0 }, "california": { "$": 0 }, "cambridge": { "$": 0 }, "can": { "$": 0 }, "canada": { "$": 0 }, "capebreton": { "$": 0 }, "carrier": { "$": 0 }, "cartoonart": { "$": 0 }, "casadelamoneda": { "$": 0 }, "castle": { "$": 0 }, "castres": { "$": 0 }, "celtic": { "$": 0 }, "center": { "$": 0 }, "chattanooga": { "$": 0 }, "cheltenham": { "$": 0 }, "chesapeakebay": { "$": 0 }, "chicago": { "$": 0 }, "children": { "$": 0 }, "childrens": { "$": 0 }, "childrensgarden": { "$": 0 }, "chiropractic": { "$": 0 }, "chocolate": { "$": 0 }, "christiansburg": { "$": 0 }, "cincinnati": { "$": 0 }, "cinema": { "$": 0 }, "circus": { "$": 0 }, "civilisation": { "$": 0 }, "civilization": { "$": 0 }, "civilwar": { "$": 0 }, "clinton": { "$": 0 }, "clock": { "$": 0 }, "coal": { "$": 0 }, "coastaldefence": { "$": 0 }, "cody": { "$": 0 }, "coldwar": { "$": 0 }, "collection": { "$": 0 }, "colonialwilliamsburg": { "$": 0 }, "coloradoplateau": { "$": 0 }, "columbia": { "$": 0 }, "columbus": { "$": 0 }, "communication": { "$": 0 }, "communications": { "$": 0 }, "community": { "$": 0 }, "computer": { "$": 0 }, "computerhistory": { "$": 0 }, "xn--comunicaes-v6a2o": { "$": 0 }, "contemporary": { "$": 0 }, "contemporaryart": { "$": 0 }, "convent": { "$": 0 }, "copenhagen": { "$": 0 }, "corporation": { "$": 0 }, "xn--correios-e-telecomunicaes-ghc29a": { "$": 0 }, "corvette": { "$": 0 }, "costume": { "$": 0 }, "countryestate": { "$": 0 }, "county": { "$": 0 }, "crafts": { "$": 0 }, "cranbrook": { "$": 0 }, "creation": { "$": 0 }, "cultural": { "$": 0 }, "culturalcenter": { "$": 0 }, "culture": { "$": 0 }, "cyber": { "$": 0 }, "cymru": { "$": 0 }, "dali": { "$": 0 }, "dallas": { "$": 0 }, "database": { "$": 0 }, "ddr": { "$": 0 }, "decorativearts": { "$": 0 }, "delaware": { "$": 0 }, "delmenhorst": { "$": 0 }, "denmark": { "$": 0 }, "depot": { "$": 0 }, "design": { "$": 0 }, "detroit": { "$": 0 }, "dinosaur": { "$": 0 }, "discovery": { "$": 0 }, "dolls": { "$": 0 }, "donostia": { "$": 0 }, "durham": { "$": 0 }, "eastafrica": { "$": 0 }, "eastcoast": { "$": 0 }, "education": { "$": 0 }, "educational": { "$": 0 }, "egyptian": { "$": 0 }, "eisenbahn": { "$": 0 }, "elburg": { "$": 0 }, "elvendrell": { "$": 0 }, "embroidery": { "$": 0 }, "encyclopedic": { "$": 0 }, "england": { "$": 0 }, "entomology": { "$": 0 }, "environment": { "$": 0 }, "environmentalconservation": { "$": 0 }, "epilepsy": { "$": 0 }, "essex": { "$": 0 }, "estate": { "$": 0 }, "ethnology": { "$": 0 }, "exeter": { "$": 0 }, "exhibition": { "$": 0 }, "family": { "$": 0 }, "farm": { "$": 0 }, "farmequipment": { "$": 0 }, "farmers": { "$": 0 }, "farmstead": { "$": 0 }, "field": { "$": 0 }, "figueres": { "$": 0 }, "filatelia": { "$": 0 }, "film": { "$": 0 }, "fineart": { "$": 0 }, "finearts": { "$": 0 }, "finland": { "$": 0 }, "flanders": { "$": 0 }, "florida": { "$": 0 }, "force": { "$": 0 }, "fortmissoula": { "$": 0 }, "fortworth": { "$": 0 }, "foundation": { "$": 0 }, "francaise": { "$": 0 }, "frankfurt": { "$": 0 }, "franziskaner": { "$": 0 }, "freemasonry": { "$": 0 }, "freiburg": { "$": 0 }, "fribourg": { "$": 0 }, "frog": { "$": 0 }, "fundacio": { "$": 0 }, "furniture": { "$": 0 }, "gallery": { "$": 0 }, "garden": { "$": 0 }, "gateway": { "$": 0 }, "geelvinck": { "$": 0 }, "gemological": { "$": 0 }, "geology": { "$": 0 }, "georgia": { "$": 0 }, "giessen": { "$": 0 }, "glas": { "$": 0 }, "glass": { "$": 0 }, "gorge": { "$": 0 }, "grandrapids": { "$": 0 }, "graz": { "$": 0 }, "guernsey": { "$": 0 }, "halloffame": { "$": 0 }, "hamburg": { "$": 0 }, "handson": { "$": 0 }, "harvestcelebration": { "$": 0 }, "hawaii": { "$": 0 }, "health": { "$": 0 }, "heimatunduhren": { "$": 0 }, "hellas": { "$": 0 }, "helsinki": { "$": 0 }, "hembygdsforbund": { "$": 0 }, "heritage": { "$": 0 }, "histoire": { "$": 0 }, "historical": { "$": 0 }, "historicalsociety": { "$": 0 }, "historichouses": { "$": 0 }, "historisch": { "$": 0 }, "historisches": { "$": 0 }, "history": { "$": 0 }, "historyofscience": { "$": 0 }, "horology": { "$": 0 }, "house": { "$": 0 }, "humanities": { "$": 0 }, "illustration": { "$": 0 }, "imageandsound": { "$": 0 }, "indian": { "$": 0 }, "indiana": { "$": 0 }, "indianapolis": { "$": 0 }, "indianmarket": { "$": 0 }, "intelligence": { "$": 0 }, "interactive": { "$": 0 }, "iraq": { "$": 0 }, "iron": { "$": 0 }, "isleofman": { "$": 0 }, "jamison": { "$": 0 }, "jefferson": { "$": 0 }, "jerusalem": { "$": 0 }, "jewelry": { "$": 0 }, "jewish": { "$": 0 }, "jewishart": { "$": 0 }, "jfk": { "$": 0 }, "journalism": { "$": 0 }, "judaica": { "$": 0 }, "judygarland": { "$": 0 }, "juedisches": { "$": 0 }, "juif": { "$": 0 }, "karate": { "$": 0 }, "karikatur": { "$": 0 }, "kids": { "$": 0 }, "koebenhavn": { "$": 0 }, "koeln": { "$": 0 }, "kunst": { "$": 0 }, "kunstsammlung": { "$": 0 }, "kunstunddesign": { "$": 0 }, "labor": { "$": 0 }, "labour": { "$": 0 }, "lajolla": { "$": 0 }, "lancashire": { "$": 0 }, "landes": { "$": 0 }, "lans": { "$": 0 }, "xn--lns-qla": { "$": 0 }, "larsson": { "$": 0 }, "lewismiller": { "$": 0 }, "lincoln": { "$": 0 }, "linz": { "$": 0 }, "living": { "$": 0 }, "livinghistory": { "$": 0 }, "localhistory": { "$": 0 }, "london": { "$": 0 }, "losangeles": { "$": 0 }, "louvre": { "$": 0 }, "loyalist": { "$": 0 }, "lucerne": { "$": 0 }, "luxembourg": { "$": 0 }, "luzern": { "$": 0 }, "mad": { "$": 0 }, "madrid": { "$": 0 }, "mallorca": { "$": 0 }, "manchester": { "$": 0 }, "mansion": { "$": 0 }, "mansions": { "$": 0 }, "manx": { "$": 0 }, "marburg": { "$": 0 }, "maritime": { "$": 0 }, "maritimo": { "$": 0 }, "maryland": { "$": 0 }, "marylhurst": { "$": 0 }, "media": { "$": 0 }, "medical": { "$": 0 }, "medizinhistorisches": { "$": 0 }, "meeres": { "$": 0 }, "memorial": { "$": 0 }, "mesaverde": { "$": 0 }, "michigan": { "$": 0 }, "midatlantic": { "$": 0 }, "military": { "$": 0 }, "mill": { "$": 0 }, "miners": { "$": 0 }, "mining": { "$": 0 }, "minnesota": { "$": 0 }, "missile": { "$": 0 }, "missoula": { "$": 0 }, "modern": { "$": 0 }, "moma": { "$": 0 }, "money": { "$": 0 }, "monmouth": { "$": 0 }, "monticello": { "$": 0 }, "montreal": { "$": 0 }, "moscow": { "$": 0 }, "motorcycle": { "$": 0 }, "muenchen": { "$": 0 }, "muenster": { "$": 0 }, "mulhouse": { "$": 0 }, "muncie": { "$": 0 }, "museet": { "$": 0 }, "museumcenter": { "$": 0 }, "museumvereniging": { "$": 0 }, "music": { "$": 0 }, "national": { "$": 0 }, "nationalfirearms": { "$": 0 }, "nationalheritage": { "$": 0 }, "nativeamerican": { "$": 0 }, "naturalhistory": { "$": 0 }, "naturalhistorymuseum": { "$": 0 }, "naturalsciences": { "$": 0 }, "nature": { "$": 0 }, "naturhistorisches": { "$": 0 }, "natuurwetenschappen": { "$": 0 }, "naumburg": { "$": 0 }, "naval": { "$": 0 }, "nebraska": { "$": 0 }, "neues": { "$": 0 }, "newhampshire": { "$": 0 }, "newjersey": { "$": 0 }, "newmexico": { "$": 0 }, "newport": { "$": 0 }, "newspaper": { "$": 0 }, "newyork": { "$": 0 }, "niepce": { "$": 0 }, "norfolk": { "$": 0 }, "north": { "$": 0 }, "nrw": { "$": 0 }, "nuernberg": { "$": 0 }, "nuremberg": { "$": 0 }, "nyc": { "$": 0 }, "nyny": { "$": 0 }, "oceanographic": { "$": 0 }, "oceanographique": { "$": 0 }, "omaha": { "$": 0 }, "online": { "$": 0 }, "ontario": { "$": 0 }, "openair": { "$": 0 }, "oregon": { "$": 0 }, "oregontrail": { "$": 0 }, "otago": { "$": 0 }, "oxford": { "$": 0 }, "pacific": { "$": 0 }, "paderborn": { "$": 0 }, "palace": { "$": 0 }, "paleo": { "$": 0 }, "palmsprings": { "$": 0 }, "panama": { "$": 0 }, "paris": { "$": 0 }, "pasadena": { "$": 0 }, "pharmacy": { "$": 0 }, "philadelphia": { "$": 0 }, "philadelphiaarea": { "$": 0 }, "philately": { "$": 0 }, "phoenix": { "$": 0 }, "photography": { "$": 0 }, "pilots": { "$": 0 }, "pittsburgh": { "$": 0 }, "planetarium": { "$": 0 }, "plantation": { "$": 0 }, "plants": { "$": 0 }, "plaza": { "$": 0 }, "portal": { "$": 0 }, "portland": { "$": 0 }, "portlligat": { "$": 0 }, "posts-and-telecommunications": { "$": 0 }, "preservation": { "$": 0 }, "presidio": { "$": 0 }, "press": { "$": 0 }, "project": { "$": 0 }, "public": { "$": 0 }, "pubol": { "$": 0 }, "quebec": { "$": 0 }, "railroad": { "$": 0 }, "railway": { "$": 0 }, "research": { "$": 0 }, "resistance": { "$": 0 }, "riodejaneiro": { "$": 0 }, "rochester": { "$": 0 }, "rockart": { "$": 0 }, "roma": { "$": 0 }, "russia": { "$": 0 }, "saintlouis": { "$": 0 }, "salem": { "$": 0 }, "salvadordali": { "$": 0 }, "salzburg": { "$": 0 }, "sandiego": { "$": 0 }, "sanfrancisco": { "$": 0 }, "santabarbara": { "$": 0 }, "santacruz": { "$": 0 }, "santafe": { "$": 0 }, "saskatchewan": { "$": 0 }, "satx": { "$": 0 }, "savannahga": { "$": 0 }, "schlesisches": { "$": 0 }, "schoenbrunn": { "$": 0 }, "schokoladen": { "$": 0 }, "school": { "$": 0 }, "schweiz": { "$": 0 }, "science": { "$": 0 }, "scienceandhistory": { "$": 0 }, "scienceandindustry": { "$": 0 }, "sciencecenter": { "$": 0 }, "sciencecenters": { "$": 0 }, "science-fiction": { "$": 0 }, "sciencehistory": { "$": 0 }, "sciences": { "$": 0 }, "sciencesnaturelles": { "$": 0 }, "scotland": { "$": 0 }, "seaport": { "$": 0 }, "settlement": { "$": 0 }, "settlers": { "$": 0 }, "shell": { "$": 0 }, "sherbrooke": { "$": 0 }, "sibenik": { "$": 0 }, "silk": { "$": 0 }, "ski": { "$": 0 }, "skole": { "$": 0 }, "society": { "$": 0 }, "sologne": { "$": 0 }, "soundandvision": { "$": 0 }, "southcarolina": { "$": 0 }, "southwest": { "$": 0 }, "space": { "$": 0 }, "spy": { "$": 0 }, "square": { "$": 0 }, "stadt": { "$": 0 }, "stalbans": { "$": 0 }, "starnberg": { "$": 0 }, "state": { "$": 0 }, "stateofdelaware": { "$": 0 }, "station": { "$": 0 }, "steam": { "$": 0 }, "steiermark": { "$": 0 }, "stjohn": { "$": 0 }, "stockholm": { "$": 0 }, "stpetersburg": { "$": 0 }, "stuttgart": { "$": 0 }, "suisse": { "$": 0 }, "surgeonshall": { "$": 0 }, "surrey": { "$": 0 }, "svizzera": { "$": 0 }, "sweden": { "$": 0 }, "sydney": { "$": 0 }, "tank": { "$": 0 }, "tcm": { "$": 0 }, "technology": { "$": 0 }, "telekommunikation": { "$": 0 }, "television": { "$": 0 }, "texas": { "$": 0 }, "textile": { "$": 0 }, "theater": { "$": 0 }, "time": { "$": 0 }, "timekeeping": { "$": 0 }, "topology": { "$": 0 }, "torino": { "$": 0 }, "touch": { "$": 0 }, "town": { "$": 0 }, "transport": { "$": 0 }, "tree": { "$": 0 }, "trolley": { "$": 0 }, "trust": { "$": 0 }, "trustee": { "$": 0 }, "uhren": { "$": 0 }, "ulm": { "$": 0 }, "undersea": { "$": 0 }, "university": { "$": 0 }, "usa": { "$": 0 }, "usantiques": { "$": 0 }, "usarts": { "$": 0 }, "uscountryestate": { "$": 0 }, "usculture": { "$": 0 }, "usdecorativearts": { "$": 0 }, "usgarden": { "$": 0 }, "ushistory": { "$": 0 }, "ushuaia": { "$": 0 }, "uslivinghistory": { "$": 0 }, "utah": { "$": 0 }, "uvic": { "$": 0 }, "valley": { "$": 0 }, "vantaa": { "$": 0 }, "versailles": { "$": 0 }, "viking": { "$": 0 }, "village": { "$": 0 }, "virginia": { "$": 0 }, "virtual": { "$": 0 }, "virtuel": { "$": 0 }, "vlaanderen": { "$": 0 }, "volkenkunde": { "$": 0 }, "wales": { "$": 0 }, "wallonie": { "$": 0 }, "war": { "$": 0 }, "washingtondc": { "$": 0 }, "watchandclock": { "$": 0 }, "watch-and-clock": { "$": 0 }, "western": { "$": 0 }, "westfalen": { "$": 0 }, "whaling": { "$": 0 }, "wildlife": { "$": 0 }, "williamsburg": { "$": 0 }, "windmill": { "$": 0 }, "workshop": { "$": 0 }, "york": { "$": 0 }, "yorkshire": { "$": 0 }, "yosemite": { "$": 0 }, "youth": { "$": 0 }, "zoological": { "$": 0 }, "zoology": { "$": 0 }, "xn--9dbhblg6di": { "$": 0 }, "xn--h1aegh": { "$": 0 } }, "mv": { "$": 0, "aero": { "$": 0 }, "biz": { "$": 0 }, "com": { "$": 0 }, "coop": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "info": { "$": 0 }, "int": { "$": 0 }, "mil": { "$": 0 }, "museum": { "$": 0 }, "name": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "pro": { "$": 0 } }, "mw": { "$": 0, "ac": { "$": 0 }, "biz": { "$": 0 }, "co": { "$": 0 }, "com": { "$": 0 }, "coop": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "int": { "$": 0 }, "museum": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "mx": { "$": 0, "com": { "$": 0 }, "org": { "$": 0 }, "gob": { "$": 0 }, "edu": { "$": 0 }, "net": { "$": 0 }, "blogspot": { "$": 0 }, "nym": { "$": 0 } }, "my": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gov": { "$": 0 }, "edu": { "$": 0 }, "mil": { "$": 0 }, "name": { "$": 0 }, "blogspot": { "$": 0 } }, "mz": { "$": 0, "ac": { "$": 0 }, "adv": { "$": 0 }, "co": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "na": { "$": 0, "info": { "$": 0 }, "pro": { "$": 0 }, "name": { "$": 0 }, "school": { "$": 0 }, "or": { "$": 0 }, "dr": { "$": 0 }, "us": { "$": 0 }, "mx": { "$": 0 }, "ca": { "$": 0 }, "in": { "$": 0 }, "cc": { "$": 0 }, "tv": { "$": 0 }, "ws": { "$": 0 }, "mobi": { "$": 0 }, "co": { "$": 0 }, "com": { "$": 0 }, "org": { "$": 0 } }, "name": { "$": 0, "her": { "forgot": { "$": 0 } }, "his": { "forgot": { "$": 0 } } }, "nc": { "$": 0, "asso": { "$": 0 }, "nom": { "$": 0 } }, "ne": { "$": 0 }, "net": { "$": 0, "alwaysdata": { "*": { "$": 0 } }, "cloudfront": { "$": 0 }, "t3l3p0rt": { "$": 0 }, "myfritz": { "$": 0 }, "boomla": { "$": 0 }, "bplaced": { "$": 0 }, "square7": { "$": 0 }, "gb": { "$": 0 }, "hu": { "$": 0 }, "jp": { "$": 0 }, "se": { "$": 0 }, "uk": { "$": 0 }, "in": { "$": 0 }, "cloudaccess": { "$": 0 }, "cdn77-ssl": { "$": 0 }, "cdn77": { "r": { "$": 0 } }, "feste-ip": { "$": 0 }, "knx-server": { "$": 0 }, "static-access": { "$": 0 }, "cryptonomic": { "*": { "$": 0 } }, "debian": { "$": 0 }, "at-band-camp": { "$": 0 }, "blogdns": { "$": 0 }, "broke-it": { "$": 0 }, "buyshouses": { "$": 0 }, "dnsalias": { "$": 0 }, "dnsdojo": { "$": 0 }, "does-it": { "$": 0 }, "dontexist": { "$": 0 }, "dynalias": { "$": 0 }, "dynathome": { "$": 0 }, "endofinternet": { "$": 0 }, "from-az": { "$": 0 }, "from-co": { "$": 0 }, "from-la": { "$": 0 }, "from-ny": { "$": 0 }, "gets-it": { "$": 0 }, "ham-radio-op": { "$": 0 }, "homeftp": { "$": 0 }, "homeip": { "$": 0 }, "homelinux": { "$": 0 }, "homeunix": { "$": 0 }, "in-the-band": { "$": 0 }, "is-a-chef": { "$": 0 }, "is-a-geek": { "$": 0 }, "isa-geek": { "$": 0 }, "kicks-ass": { "$": 0 }, "office-on-the": { "$": 0 }, "podzone": { "$": 0 }, "scrapper-site": { "$": 0 }, "selfip": { "$": 0 }, "sells-it": { "$": 0 }, "servebbs": { "$": 0 }, "serveftp": { "$": 0 }, "thruhere": { "$": 0 }, "webhop": { "$": 0 }, "definima": { "$": 0 }, "casacam": { "$": 0 }, "dynu": { "$": 0 }, "dynv6": { "$": 0 }, "twmail": { "$": 0 }, "ru": { "$": 0 }, "channelsdvr": { "$": 0 }, "fastlylb": { "$": 0, "map": { "$": 0 } }, "fastly": { "freetls": { "$": 0 }, "map": { "$": 0 }, "prod": { "a": { "$": 0 }, "global": { "$": 0 } }, "ssl": { "a": { "$": 0 }, "b": { "$": 0 }, "global": { "$": 0 } } }, "flynnhosting": { "$": 0 }, "cloudfunctions": { "$": 0 }, "moonscale": { "$": 0 }, "ipifony": { "$": 0 }, "barsy": { "$": 0 }, "azurewebsites": { "$": 0 }, "azure-mobile": { "$": 0 }, "cloudapp": { "$": 0 }, "eating-organic": { "$": 0 }, "mydissent": { "$": 0 }, "myeffect": { "$": 0 }, "mymediapc": { "$": 0 }, "mypsx": { "$": 0 }, "mysecuritycamera": { "$": 0 }, "nhlfan": { "$": 0 }, "no-ip": { "$": 0 }, "pgafan": { "$": 0 }, "privatizehealthinsurance": { "$": 0 }, "bounceme": { "$": 0 }, "ddns": { "$": 0 }, "redirectme": { "$": 0 }, "serveblog": { "$": 0 }, "serveminecraft": { "$": 0 }, "sytes": { "$": 0 }, "rackmaze": { "$": 0 }, "firewall-gateway": { "$": 0 }, "dsmynas": { "$": 0 }, "familyds": { "$": 0 }, "za": { "$": 0 } }, "nf": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "per": { "$": 0 }, "rec": { "$": 0 }, "web": { "$": 0 }, "arts": { "$": 0 }, "firm": { "$": 0 }, "info": { "$": 0 }, "other": { "$": 0 }, "store": { "$": 0 } }, "ng": { "$": 0, "com": { "$": 0, "blogspot": { "$": 0 } }, "edu": { "$": 0 }, "gov": { "$": 0 }, "i": { "$": 0 }, "mil": { "$": 0 }, "mobi": { "$": 0 }, "name": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "sch": { "$": 0 } }, "ni": { "$": 0, "ac": { "$": 0 }, "biz": { "$": 0 }, "co": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "gob": { "$": 0 }, "in": { "$": 0 }, "info": { "$": 0 }, "int": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "nom": { "$": 0 }, "org": { "$": 0 }, "web": { "$": 0 } }, "nl": { "$": 0, "bv": { "$": 0 }, "virtueeldomein": { "$": 0 }, "co": { "$": 0 }, "blogspot": { "$": 0 }, "transurl": { "*": { "$": 0 } }, "cistron": { "$": 0 }, "demon": { "$": 0 } }, "no": { "$": 0, "fhs": { "$": 0 }, "vgs": { "$": 0 }, "fylkesbibl": { "$": 0 }, "folkebibl": { "$": 0 }, "museum": { "$": 0 }, "idrett": { "$": 0 }, "priv": { "$": 0 }, "mil": { "$": 0 }, "stat": { "$": 0 }, "dep": { "$": 0 }, "kommune": { "$": 0 }, "herad": { "$": 0 }, "aa": { "$": 0, "gs": { "$": 0 } }, "ah": { "$": 0, "gs": { "$": 0 } }, "bu": { "$": 0, "gs": { "$": 0 } }, "fm": { "$": 0, "gs": { "$": 0 } }, "hl": { "$": 0, "gs": { "$": 0 } }, "hm": { "$": 0, "gs": { "$": 0 } }, "jan-mayen": { "$": 0, "gs": { "$": 0 } }, "mr": { "$": 0, "gs": { "$": 0 } }, "nl": { "$": 0, "gs": { "$": 0 } }, "nt": { "$": 0, "gs": { "$": 0 } }, "of": { "$": 0, "gs": { "$": 0 } }, "ol": { "$": 0, "gs": { "$": 0 } }, "oslo": { "$": 0, "gs": { "$": 0 } }, "rl": { "$": 0, "gs": { "$": 0 } }, "sf": { "$": 0, "gs": { "$": 0 } }, "st": { "$": 0, "gs": { "$": 0 } }, "svalbard": { "$": 0, "gs": { "$": 0 } }, "tm": { "$": 0, "gs": { "$": 0 } }, "tr": { "$": 0, "gs": { "$": 0 } }, "va": { "$": 0, "gs": { "$": 0 } }, "vf": { "$": 0, "gs": { "$": 0 } }, "akrehamn": { "$": 0 }, "xn--krehamn-dxa": { "$": 0 }, "algard": { "$": 0 }, "xn--lgrd-poac": { "$": 0 }, "arna": { "$": 0 }, "brumunddal": { "$": 0 }, "bryne": { "$": 0 }, "bronnoysund": { "$": 0 }, "xn--brnnysund-m8ac": { "$": 0 }, "drobak": { "$": 0 }, "xn--drbak-wua": { "$": 0 }, "egersund": { "$": 0 }, "fetsund": { "$": 0 }, "floro": { "$": 0 }, "xn--flor-jra": { "$": 0 }, "fredrikstad": { "$": 0 }, "hokksund": { "$": 0 }, "honefoss": { "$": 0 }, "xn--hnefoss-q1a": { "$": 0 }, "jessheim": { "$": 0 }, "jorpeland": { "$": 0 }, "xn--jrpeland-54a": { "$": 0 }, "kirkenes": { "$": 0 }, "kopervik": { "$": 0 }, "krokstadelva": { "$": 0 }, "langevag": { "$": 0 }, "xn--langevg-jxa": { "$": 0 }, "leirvik": { "$": 0 }, "mjondalen": { "$": 0 }, "xn--mjndalen-64a": { "$": 0 }, "mo-i-rana": { "$": 0 }, "mosjoen": { "$": 0 }, "xn--mosjen-eya": { "$": 0 }, "nesoddtangen": { "$": 0 }, "orkanger": { "$": 0 }, "osoyro": { "$": 0 }, "xn--osyro-wua": { "$": 0 }, "raholt": { "$": 0 }, "xn--rholt-mra": { "$": 0 }, "sandnessjoen": { "$": 0 }, "xn--sandnessjen-ogb": { "$": 0 }, "skedsmokorset": { "$": 0 }, "slattum": { "$": 0 }, "spjelkavik": { "$": 0 }, "stathelle": { "$": 0 }, "stavern": { "$": 0 }, "stjordalshalsen": { "$": 0 }, "xn--stjrdalshalsen-sqb": { "$": 0 }, "tananger": { "$": 0 }, "tranby": { "$": 0 }, "vossevangen": { "$": 0 }, "afjord": { "$": 0 }, "xn--fjord-lra": { "$": 0 }, "agdenes": { "$": 0 }, "al": { "$": 0 }, "xn--l-1fa": { "$": 0 }, "alesund": { "$": 0 }, "xn--lesund-hua": { "$": 0 }, "alstahaug": { "$": 0 }, "alta": { "$": 0 }, "xn--lt-liac": { "$": 0 }, "alaheadju": { "$": 0 }, "xn--laheadju-7ya": { "$": 0 }, "alvdal": { "$": 0 }, "amli": { "$": 0 }, "xn--mli-tla": { "$": 0 }, "amot": { "$": 0 }, "xn--mot-tla": { "$": 0 }, "andebu": { "$": 0 }, "andoy": { "$": 0 }, "xn--andy-ira": { "$": 0 }, "andasuolo": { "$": 0 }, "ardal": { "$": 0 }, "xn--rdal-poa": { "$": 0 }, "aremark": { "$": 0 }, "arendal": { "$": 0 }, "xn--s-1fa": { "$": 0 }, "aseral": { "$": 0 }, "xn--seral-lra": { "$": 0 }, "asker": { "$": 0 }, "askim": { "$": 0 }, "askvoll": { "$": 0 }, "askoy": { "$": 0 }, "xn--asky-ira": { "$": 0 }, "asnes": { "$": 0 }, "xn--snes-poa": { "$": 0 }, "audnedaln": { "$": 0 }, "aukra": { "$": 0 }, "aure": { "$": 0 }, "aurland": { "$": 0 }, "aurskog-holand": { "$": 0 }, "xn--aurskog-hland-jnb": { "$": 0 }, "austevoll": { "$": 0 }, "austrheim": { "$": 0 }, "averoy": { "$": 0 }, "xn--avery-yua": { "$": 0 }, "balestrand": { "$": 0 }, "ballangen": { "$": 0 }, "balat": { "$": 0 }, "xn--blt-elab": { "$": 0 }, "balsfjord": { "$": 0 }, "bahccavuotna": { "$": 0 }, "xn--bhccavuotna-k7a": { "$": 0 }, "bamble": { "$": 0 }, "bardu": { "$": 0 }, "beardu": { "$": 0 }, "beiarn": { "$": 0 }, "bajddar": { "$": 0 }, "xn--bjddar-pta": { "$": 0 }, "baidar": { "$": 0 }, "xn--bidr-5nac": { "$": 0 }, "berg": { "$": 0 }, "bergen": { "$": 0 }, "berlevag": { "$": 0 }, "xn--berlevg-jxa": { "$": 0 }, "bearalvahki": { "$": 0 }, "xn--bearalvhki-y4a": { "$": 0 }, "bindal": { "$": 0 }, "birkenes": { "$": 0 }, "bjarkoy": { "$": 0 }, "xn--bjarky-fya": { "$": 0 }, "bjerkreim": { "$": 0 }, "bjugn": { "$": 0 }, "bodo": { "$": 0 }, "xn--bod-2na": { "$": 0 }, "badaddja": { "$": 0 }, "xn--bdddj-mrabd": { "$": 0 }, "budejju": { "$": 0 }, "bokn": { "$": 0 }, "bremanger": { "$": 0 }, "bronnoy": { "$": 0 }, "xn--brnny-wuac": { "$": 0 }, "bygland": { "$": 0 }, "bykle": { "$": 0 }, "barum": { "$": 0 }, "xn--brum-voa": { "$": 0 }, "telemark": { "bo": { "$": 0 }, "xn--b-5ga": { "$": 0 } }, "nordland": { "bo": { "$": 0 }, "xn--b-5ga": { "$": 0 }, "heroy": { "$": 0 }, "xn--hery-ira": { "$": 0 } }, "bievat": { "$": 0 }, "xn--bievt-0qa": { "$": 0 }, "bomlo": { "$": 0 }, "xn--bmlo-gra": { "$": 0 }, "batsfjord": { "$": 0 }, "xn--btsfjord-9za": { "$": 0 }, "bahcavuotna": { "$": 0 }, "xn--bhcavuotna-s4a": { "$": 0 }, "dovre": { "$": 0 }, "drammen": { "$": 0 }, "drangedal": { "$": 0 }, "dyroy": { "$": 0 }, "xn--dyry-ira": { "$": 0 }, "donna": { "$": 0 }, "xn--dnna-gra": { "$": 0 }, "eid": { "$": 0 }, "eidfjord": { "$": 0 }, "eidsberg": { "$": 0 }, "eidskog": { "$": 0 }, "eidsvoll": { "$": 0 }, "eigersund": { "$": 0 }, "elverum": { "$": 0 }, "enebakk": { "$": 0 }, "engerdal": { "$": 0 }, "etne": { "$": 0 }, "etnedal": { "$": 0 }, "evenes": { "$": 0 }, "evenassi": { "$": 0 }, "xn--eveni-0qa01ga": { "$": 0 }, "evje-og-hornnes": { "$": 0 }, "farsund": { "$": 0 }, "fauske": { "$": 0 }, "fuossko": { "$": 0 }, "fuoisku": { "$": 0 }, "fedje": { "$": 0 }, "fet": { "$": 0 }, "finnoy": { "$": 0 }, "xn--finny-yua": { "$": 0 }, "fitjar": { "$": 0 }, "fjaler": { "$": 0 }, "fjell": { "$": 0 }, "flakstad": { "$": 0 }, "flatanger": { "$": 0 }, "flekkefjord": { "$": 0 }, "flesberg": { "$": 0 }, "flora": { "$": 0 }, "fla": { "$": 0 }, "xn--fl-zia": { "$": 0 }, "folldal": { "$": 0 }, "forsand": { "$": 0 }, "fosnes": { "$": 0 }, "frei": { "$": 0 }, "frogn": { "$": 0 }, "froland": { "$": 0 }, "frosta": { "$": 0 }, "frana": { "$": 0 }, "xn--frna-woa": { "$": 0 }, "froya": { "$": 0 }, "xn--frya-hra": { "$": 0 }, "fusa": { "$": 0 }, "fyresdal": { "$": 0 }, "forde": { "$": 0 }, "xn--frde-gra": { "$": 0 }, "gamvik": { "$": 0 }, "gangaviika": { "$": 0 }, "xn--ggaviika-8ya47h": { "$": 0 }, "gaular": { "$": 0 }, "gausdal": { "$": 0 }, "gildeskal": { "$": 0 }, "xn--gildeskl-g0a": { "$": 0 }, "giske": { "$": 0 }, "gjemnes": { "$": 0 }, "gjerdrum": { "$": 0 }, "gjerstad": { "$": 0 }, "gjesdal": { "$": 0 }, "gjovik": { "$": 0 }, "xn--gjvik-wua": { "$": 0 }, "gloppen": { "$": 0 }, "gol": { "$": 0 }, "gran": { "$": 0 }, "grane": { "$": 0 }, "granvin": { "$": 0 }, "gratangen": { "$": 0 }, "grimstad": { "$": 0 }, "grong": { "$": 0 }, "kraanghke": { "$": 0 }, "xn--kranghke-b0a": { "$": 0 }, "grue": { "$": 0 }, "gulen": { "$": 0 }, "hadsel": { "$": 0 }, "halden": { "$": 0 }, "halsa": { "$": 0 }, "hamar": { "$": 0 }, "hamaroy": { "$": 0 }, "habmer": { "$": 0 }, "xn--hbmer-xqa": { "$": 0 }, "hapmir": { "$": 0 }, "xn--hpmir-xqa": { "$": 0 }, "hammerfest": { "$": 0 }, "hammarfeasta": { "$": 0 }, "xn--hmmrfeasta-s4ac": { "$": 0 }, "haram": { "$": 0 }, "hareid": { "$": 0 }, "harstad": { "$": 0 }, "hasvik": { "$": 0 }, "aknoluokta": { "$": 0 }, "xn--koluokta-7ya57h": { "$": 0 }, "hattfjelldal": { "$": 0 }, "aarborte": { "$": 0 }, "haugesund": { "$": 0 }, "hemne": { "$": 0 }, "hemnes": { "$": 0 }, "hemsedal": { "$": 0 }, "more-og-romsdal": { "heroy": { "$": 0 }, "sande": { "$": 0 } }, "xn--mre-og-romsdal-qqb": { "xn--hery-ira": { "$": 0 }, "sande": { "$": 0 } }, "hitra": { "$": 0 }, "hjartdal": { "$": 0 }, "hjelmeland": { "$": 0 }, "hobol": { "$": 0 }, "xn--hobl-ira": { "$": 0 }, "hof": { "$": 0 }, "hol": { "$": 0 }, "hole": { "$": 0 }, "holmestrand": { "$": 0 }, "holtalen": { "$": 0 }, "xn--holtlen-hxa": { "$": 0 }, "hornindal": { "$": 0 }, "horten": { "$": 0 }, "hurdal": { "$": 0 }, "hurum": { "$": 0 }, "hvaler": { "$": 0 }, "hyllestad": { "$": 0 }, "hagebostad": { "$": 0 }, "xn--hgebostad-g3a": { "$": 0 }, "hoyanger": { "$": 0 }, "xn--hyanger-q1a": { "$": 0 }, "hoylandet": { "$": 0 }, "xn--hylandet-54a": { "$": 0 }, "ha": { "$": 0 }, "xn--h-2fa": { "$": 0 }, "ibestad": { "$": 0 }, "inderoy": { "$": 0 }, "xn--indery-fya": { "$": 0 }, "iveland": { "$": 0 }, "jevnaker": { "$": 0 }, "jondal": { "$": 0 }, "jolster": { "$": 0 }, "xn--jlster-bya": { "$": 0 }, "karasjok": { "$": 0 }, "karasjohka": { "$": 0 }, "xn--krjohka-hwab49j": { "$": 0 }, "karlsoy": { "$": 0 }, "galsa": { "$": 0 }, "xn--gls-elac": { "$": 0 }, "karmoy": { "$": 0 }, "xn--karmy-yua": { "$": 0 }, "kautokeino": { "$": 0 }, "guovdageaidnu": { "$": 0 }, "klepp": { "$": 0 }, "klabu": { "$": 0 }, "xn--klbu-woa": { "$": 0 }, "kongsberg": { "$": 0 }, "kongsvinger": { "$": 0 }, "kragero": { "$": 0 }, "xn--krager-gya": { "$": 0 }, "kristiansand": { "$": 0 }, "kristiansund": { "$": 0 }, "krodsherad": { "$": 0 }, "xn--krdsherad-m8a": { "$": 0 }, "kvalsund": { "$": 0 }, "rahkkeravju": { "$": 0 }, "xn--rhkkervju-01af": { "$": 0 }, "kvam": { "$": 0 }, "kvinesdal": { "$": 0 }, "kvinnherad": { "$": 0 }, "kviteseid": { "$": 0 }, "kvitsoy": { "$": 0 }, "xn--kvitsy-fya": { "$": 0 }, "kvafjord": { "$": 0 }, "xn--kvfjord-nxa": { "$": 0 }, "giehtavuoatna": { "$": 0 }, "kvanangen": { "$": 0 }, "xn--kvnangen-k0a": { "$": 0 }, "navuotna": { "$": 0 }, "xn--nvuotna-hwa": { "$": 0 }, "kafjord": { "$": 0 }, "xn--kfjord-iua": { "$": 0 }, "gaivuotna": { "$": 0 }, "xn--givuotna-8ya": { "$": 0 }, "larvik": { "$": 0 }, "lavangen": { "$": 0 }, "lavagis": { "$": 0 }, "loabat": { "$": 0 }, "xn--loabt-0qa": { "$": 0 }, "lebesby": { "$": 0 }, "davvesiida": { "$": 0 }, "leikanger": { "$": 0 }, "leirfjord": { "$": 0 }, "leka": { "$": 0 }, "leksvik": { "$": 0 }, "lenvik": { "$": 0 }, "leangaviika": { "$": 0 }, "xn--leagaviika-52b": { "$": 0 }, "lesja": { "$": 0 }, "levanger": { "$": 0 }, "lier": { "$": 0 }, "lierne": { "$": 0 }, "lillehammer": { "$": 0 }, "lillesand": { "$": 0 }, "lindesnes": { "$": 0 }, "lindas": { "$": 0 }, "xn--linds-pra": { "$": 0 }, "lom": { "$": 0 }, "loppa": { "$": 0 }, "lahppi": { "$": 0 }, "xn--lhppi-xqa": { "$": 0 }, "lund": { "$": 0 }, "lunner": { "$": 0 }, "luroy": { "$": 0 }, "xn--lury-ira": { "$": 0 }, "luster": { "$": 0 }, "lyngdal": { "$": 0 }, "lyngen": { "$": 0 }, "ivgu": { "$": 0 }, "lardal": { "$": 0 }, "lerdal": { "$": 0 }, "xn--lrdal-sra": { "$": 0 }, "lodingen": { "$": 0 }, "xn--ldingen-q1a": { "$": 0 }, "lorenskog": { "$": 0 }, "xn--lrenskog-54a": { "$": 0 }, "loten": { "$": 0 }, "xn--lten-gra": { "$": 0 }, "malvik": { "$": 0 }, "masoy": { "$": 0 }, "xn--msy-ula0h": { "$": 0 }, "muosat": { "$": 0 }, "xn--muost-0qa": { "$": 0 }, "mandal": { "$": 0 }, "marker": { "$": 0 }, "marnardal": { "$": 0 }, "masfjorden": { "$": 0 }, "meland": { "$": 0 }, "meldal": { "$": 0 }, "melhus": { "$": 0 }, "meloy": { "$": 0 }, "xn--mely-ira": { "$": 0 }, "meraker": { "$": 0 }, "xn--merker-kua": { "$": 0 }, "moareke": { "$": 0 }, "xn--moreke-jua": { "$": 0 }, "midsund": { "$": 0 }, "midtre-gauldal": { "$": 0 }, "modalen": { "$": 0 }, "modum": { "$": 0 }, "molde": { "$": 0 }, "moskenes": { "$": 0 }, "moss": { "$": 0 }, "mosvik": { "$": 0 }, "malselv": { "$": 0 }, "xn--mlselv-iua": { "$": 0 }, "malatvuopmi": { "$": 0 }, "xn--mlatvuopmi-s4a": { "$": 0 }, "namdalseid": { "$": 0 }, "aejrie": { "$": 0 }, "namsos": { "$": 0 }, "namsskogan": { "$": 0 }, "naamesjevuemie": { "$": 0 }, "xn--nmesjevuemie-tcba": { "$": 0 }, "laakesvuemie": { "$": 0 }, "nannestad": { "$": 0 }, "narvik": { "$": 0 }, "narviika": { "$": 0 }, "naustdal": { "$": 0 }, "nedre-eiker": { "$": 0 }, "akershus": { "nes": { "$": 0 } }, "buskerud": { "nes": { "$": 0 } }, "nesna": { "$": 0 }, "nesodden": { "$": 0 }, "nesseby": { "$": 0 }, "unjarga": { "$": 0 }, "xn--unjrga-rta": { "$": 0 }, "nesset": { "$": 0 }, "nissedal": { "$": 0 }, "nittedal": { "$": 0 }, "nord-aurdal": { "$": 0 }, "nord-fron": { "$": 0 }, "nord-odal": { "$": 0 }, "norddal": { "$": 0 }, "nordkapp": { "$": 0 }, "davvenjarga": { "$": 0 }, "xn--davvenjrga-y4a": { "$": 0 }, "nordre-land": { "$": 0 }, "nordreisa": { "$": 0 }, "raisa": { "$": 0 }, "xn--risa-5na": { "$": 0 }, "nore-og-uvdal": { "$": 0 }, "notodden": { "$": 0 }, "naroy": { "$": 0 }, "xn--nry-yla5g": { "$": 0 }, "notteroy": { "$": 0 }, "xn--nttery-byae": { "$": 0 }, "odda": { "$": 0 }, "oksnes": { "$": 0 }, "xn--ksnes-uua": { "$": 0 }, "oppdal": { "$": 0 }, "oppegard": { "$": 0 }, "xn--oppegrd-ixa": { "$": 0 }, "orkdal": { "$": 0 }, "orland": { "$": 0 }, "xn--rland-uua": { "$": 0 }, "orskog": { "$": 0 }, "xn--rskog-uua": { "$": 0 }, "orsta": { "$": 0 }, "xn--rsta-fra": { "$": 0 }, "hedmark": { "os": { "$": 0 }, "valer": { "$": 0 }, "xn--vler-qoa": { "$": 0 } }, "hordaland": { "os": { "$": 0 } }, "osen": { "$": 0 }, "osteroy": { "$": 0 }, "xn--ostery-fya": { "$": 0 }, "ostre-toten": { "$": 0 }, "xn--stre-toten-zcb": { "$": 0 }, "overhalla": { "$": 0 }, "ovre-eiker": { "$": 0 }, "xn--vre-eiker-k8a": { "$": 0 }, "oyer": { "$": 0 }, "xn--yer-zna": { "$": 0 }, "oygarden": { "$": 0 }, "xn--ygarden-p1a": { "$": 0 }, "oystre-slidre": { "$": 0 }, "xn--ystre-slidre-ujb": { "$": 0 }, "porsanger": { "$": 0 }, "porsangu": { "$": 0 }, "xn--porsgu-sta26f": { "$": 0 }, "porsgrunn": { "$": 0 }, "radoy": { "$": 0 }, "xn--rady-ira": { "$": 0 }, "rakkestad": { "$": 0 }, "rana": { "$": 0 }, "ruovat": { "$": 0 }, "randaberg": { "$": 0 }, "rauma": { "$": 0 }, "rendalen": { "$": 0 }, "rennebu": { "$": 0 }, "rennesoy": { "$": 0 }, "xn--rennesy-v1a": { "$": 0 }, "rindal": { "$": 0 }, "ringebu": { "$": 0 }, "ringerike": { "$": 0 }, "ringsaker": { "$": 0 }, "rissa": { "$": 0 }, "risor": { "$": 0 }, "xn--risr-ira": { "$": 0 }, "roan": { "$": 0 }, "rollag": { "$": 0 }, "rygge": { "$": 0 }, "ralingen": { "$": 0 }, "xn--rlingen-mxa": { "$": 0 }, "rodoy": { "$": 0 }, "xn--rdy-0nab": { "$": 0 }, "romskog": { "$": 0 }, "xn--rmskog-bya": { "$": 0 }, "roros": { "$": 0 }, "xn--rros-gra": { "$": 0 }, "rost": { "$": 0 }, "xn--rst-0na": { "$": 0 }, "royken": { "$": 0 }, "xn--ryken-vua": { "$": 0 }, "royrvik": { "$": 0 }, "xn--ryrvik-bya": { "$": 0 }, "rade": { "$": 0 }, "xn--rde-ula": { "$": 0 }, "salangen": { "$": 0 }, "siellak": { "$": 0 }, "saltdal": { "$": 0 }, "salat": { "$": 0 }, "xn--slt-elab": { "$": 0 }, "xn--slat-5na": { "$": 0 }, "samnanger": { "$": 0 }, "vestfold": { "sande": { "$": 0 } }, "sandefjord": { "$": 0 }, "sandnes": { "$": 0 }, "sandoy": { "$": 0 }, "xn--sandy-yua": { "$": 0 }, "sarpsborg": { "$": 0 }, "sauda": { "$": 0 }, "sauherad": { "$": 0 }, "sel": { "$": 0 }, "selbu": { "$": 0 }, "selje": { "$": 0 }, "seljord": { "$": 0 }, "sigdal": { "$": 0 }, "siljan": { "$": 0 }, "sirdal": { "$": 0 }, "skaun": { "$": 0 }, "skedsmo": { "$": 0 }, "ski": { "$": 0 }, "skien": { "$": 0 }, "skiptvet": { "$": 0 }, "skjervoy": { "$": 0 }, "xn--skjervy-v1a": { "$": 0 }, "skierva": { "$": 0 }, "xn--skierv-uta": { "$": 0 }, "skjak": { "$": 0 }, "xn--skjk-soa": { "$": 0 }, "skodje": { "$": 0 }, "skanland": { "$": 0 }, "xn--sknland-fxa": { "$": 0 }, "skanit": { "$": 0 }, "xn--sknit-yqa": { "$": 0 }, "smola": { "$": 0 }, "xn--smla-hra": { "$": 0 }, "snillfjord": { "$": 0 }, "snasa": { "$": 0 }, "xn--snsa-roa": { "$": 0 }, "snoasa": { "$": 0 }, "snaase": { "$": 0 }, "xn--snase-nra": { "$": 0 }, "sogndal": { "$": 0 }, "sokndal": { "$": 0 }, "sola": { "$": 0 }, "solund": { "$": 0 }, "songdalen": { "$": 0 }, "sortland": { "$": 0 }, "spydeberg": { "$": 0 }, "stange": { "$": 0 }, "stavanger": { "$": 0 }, "steigen": { "$": 0 }, "steinkjer": { "$": 0 }, "stjordal": { "$": 0 }, "xn--stjrdal-s1a": { "$": 0 }, "stokke": { "$": 0 }, "stor-elvdal": { "$": 0 }, "stord": { "$": 0 }, "stordal": { "$": 0 }, "storfjord": { "$": 0 }, "omasvuotna": { "$": 0 }, "strand": { "$": 0 }, "stranda": { "$": 0 }, "stryn": { "$": 0 }, "sula": { "$": 0 }, "suldal": { "$": 0 }, "sund": { "$": 0 }, "sunndal": { "$": 0 }, "surnadal": { "$": 0 }, "sveio": { "$": 0 }, "svelvik": { "$": 0 }, "sykkylven": { "$": 0 }, "sogne": { "$": 0 }, "xn--sgne-gra": { "$": 0 }, "somna": { "$": 0 }, "xn--smna-gra": { "$": 0 }, "sondre-land": { "$": 0 }, "xn--sndre-land-0cb": { "$": 0 }, "sor-aurdal": { "$": 0 }, "xn--sr-aurdal-l8a": { "$": 0 }, "sor-fron": { "$": 0 }, "xn--sr-fron-q1a": { "$": 0 }, "sor-odal": { "$": 0 }, "xn--sr-odal-q1a": { "$": 0 }, "sor-varanger": { "$": 0 }, "xn--sr-varanger-ggb": { "$": 0 }, "matta-varjjat": { "$": 0 }, "xn--mtta-vrjjat-k7af": { "$": 0 }, "sorfold": { "$": 0 }, "xn--srfold-bya": { "$": 0 }, "sorreisa": { "$": 0 }, "xn--srreisa-q1a": { "$": 0 }, "sorum": { "$": 0 }, "xn--srum-gra": { "$": 0 }, "tana": { "$": 0 }, "deatnu": { "$": 0 }, "time": { "$": 0 }, "tingvoll": { "$": 0 }, "tinn": { "$": 0 }, "tjeldsund": { "$": 0 }, "dielddanuorri": { "$": 0 }, "tjome": { "$": 0 }, "xn--tjme-hra": { "$": 0 }, "tokke": { "$": 0 }, "tolga": { "$": 0 }, "torsken": { "$": 0 }, "tranoy": { "$": 0 }, "xn--trany-yua": { "$": 0 }, "tromso": { "$": 0 }, "xn--troms-zua": { "$": 0 }, "tromsa": { "$": 0 }, "romsa": { "$": 0 }, "trondheim": { "$": 0 }, "troandin": { "$": 0 }, "trysil": { "$": 0 }, "trana": { "$": 0 }, "xn--trna-woa": { "$": 0 }, "trogstad": { "$": 0 }, "xn--trgstad-r1a": { "$": 0 }, "tvedestrand": { "$": 0 }, "tydal": { "$": 0 }, "tynset": { "$": 0 }, "tysfjord": { "$": 0 }, "divtasvuodna": { "$": 0 }, "divttasvuotna": { "$": 0 }, "tysnes": { "$": 0 }, "tysvar": { "$": 0 }, "xn--tysvr-vra": { "$": 0 }, "tonsberg": { "$": 0 }, "xn--tnsberg-q1a": { "$": 0 }, "ullensaker": { "$": 0 }, "ullensvang": { "$": 0 }, "ulvik": { "$": 0 }, "utsira": { "$": 0 }, "vadso": { "$": 0 }, "xn--vads-jra": { "$": 0 }, "cahcesuolo": { "$": 0 }, "xn--hcesuolo-7ya35b": { "$": 0 }, "vaksdal": { "$": 0 }, "valle": { "$": 0 }, "vang": { "$": 0 }, "vanylven": { "$": 0 }, "vardo": { "$": 0 }, "xn--vard-jra": { "$": 0 }, "varggat": { "$": 0 }, "xn--vrggt-xqad": { "$": 0 }, "vefsn": { "$": 0 }, "vaapste": { "$": 0 }, "vega": { "$": 0 }, "vegarshei": { "$": 0 }, "xn--vegrshei-c0a": { "$": 0 }, "vennesla": { "$": 0 }, "verdal": { "$": 0 }, "verran": { "$": 0 }, "vestby": { "$": 0 }, "vestnes": { "$": 0 }, "vestre-slidre": { "$": 0 }, "vestre-toten": { "$": 0 }, "vestvagoy": { "$": 0 }, "xn--vestvgy-ixa6o": { "$": 0 }, "vevelstad": { "$": 0 }, "vik": { "$": 0 }, "vikna": { "$": 0 }, "vindafjord": { "$": 0 }, "volda": { "$": 0 }, "voss": { "$": 0 }, "varoy": { "$": 0 }, "xn--vry-yla5g": { "$": 0 }, "vagan": { "$": 0 }, "xn--vgan-qoa": { "$": 0 }, "voagat": { "$": 0 }, "vagsoy": { "$": 0 }, "xn--vgsy-qoa0j": { "$": 0 }, "vaga": { "$": 0 }, "xn--vg-yiab": { "$": 0 }, "ostfold": { "valer": { "$": 0 } }, "xn--stfold-9xa": { "xn--vler-qoa": { "$": 0 } }, "co": { "$": 0 }, "blogspot": { "$": 0 } }, "np": { "*": { "$": 0 } }, "nr": { "$": 0, "biz": { "$": 0 }, "info": { "$": 0 }, "gov": { "$": 0 }, "edu": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 }, "com": { "$": 0 } }, "nu": { "$": 0, "merseine": { "$": 0 }, "mine": { "$": 0 }, "shacknet": { "$": 0 }, "nom": { "$": 0 } }, "nz": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0, "blogspot": { "$": 0 } }, "cri": { "$": 0 }, "geek": { "$": 0 }, "gen": { "$": 0 }, "govt": { "$": 0 }, "health": { "$": 0 }, "iwi": { "$": 0 }, "kiwi": { "$": 0 }, "maori": { "$": 0 }, "mil": { "$": 0 }, "xn--mori-qsa": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "parliament": { "$": 0 }, "school": { "$": 0 }, "nym": { "$": 0 } }, "om": { "$": 0, "co": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "med": { "$": 0 }, "museum": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "pro": { "$": 0 } }, "onion": { "$": 0 }, "org": { "$": 0, "amune": { "tele": { "$": 0 } }, "pimienta": { "$": 0 }, "poivron": { "$": 0 }, "potager": { "$": 0 }, "sweetpepper": { "$": 0 }, "ae": { "$": 0 }, "us": { "$": 0 }, "certmgr": { "$": 0 }, "cdn77": { "c": { "$": 0 }, "rsc": { "$": 0 } }, "cdn77-secure": { "origin": { "ssl": { "$": 0 } } }, "cloudns": { "$": 0 }, "duckdns": { "$": 0 }, "tunk": { "$": 0 }, "dyndns": { "$": 0, "go": { "$": 0 }, "home": { "$": 0 } }, "blogdns": { "$": 0 }, "blogsite": { "$": 0 }, "boldlygoingnowhere": { "$": 0 }, "dnsalias": { "$": 0 }, "dnsdojo": { "$": 0 }, "doesntexist": { "$": 0 }, "dontexist": { "$": 0 }, "doomdns": { "$": 0 }, "dvrdns": { "$": 0 }, "dynalias": { "$": 0 }, "endofinternet": { "$": 0 }, "endoftheinternet": { "$": 0 }, "from-me": { "$": 0 }, "game-host": { "$": 0 }, "gotdns": { "$": 0 }, "hobby-site": { "$": 0 }, "homedns": { "$": 0 }, "homeftp": { "$": 0 }, "homelinux": { "$": 0 }, "homeunix": { "$": 0 }, "is-a-bruinsfan": { "$": 0 }, "is-a-candidate": { "$": 0 }, "is-a-celticsfan": { "$": 0 }, "is-a-chef": { "$": 0 }, "is-a-geek": { "$": 0 }, "is-a-knight": { "$": 0 }, "is-a-linux-user": { "$": 0 }, "is-a-patsfan": { "$": 0 }, "is-a-soxfan": { "$": 0 }, "is-found": { "$": 0 }, "is-lost": { "$": 0 }, "is-saved": { "$": 0 }, "is-very-bad": { "$": 0 }, "is-very-evil": { "$": 0 }, "is-very-good": { "$": 0 }, "is-very-nice": { "$": 0 }, "is-very-sweet": { "$": 0 }, "isa-geek": { "$": 0 }, "kicks-ass": { "$": 0 }, "misconfused": { "$": 0 }, "podzone": { "$": 0 }, "readmyblog": { "$": 0 }, "selfip": { "$": 0 }, "sellsyourhome": { "$": 0 }, "servebbs": { "$": 0 }, "serveftp": { "$": 0 }, "servegame": { "$": 0 }, "stuff-4-sale": { "$": 0 }, "webhop": { "$": 0 }, "ddnss": { "$": 0 }, "accesscam": { "$": 0 }, "camdvr": { "$": 0 }, "freeddns": { "$": 0 }, "mywire": { "$": 0 }, "webredirect": { "$": 0 }, "eu": { "$": 0, "al": { "$": 0 }, "asso": { "$": 0 }, "at": { "$": 0 }, "au": { "$": 0 }, "be": { "$": 0 }, "bg": { "$": 0 }, "ca": { "$": 0 }, "cd": { "$": 0 }, "ch": { "$": 0 }, "cn": { "$": 0 }, "cy": { "$": 0 }, "cz": { "$": 0 }, "de": { "$": 0 }, "dk": { "$": 0 }, "edu": { "$": 0 }, "ee": { "$": 0 }, "es": { "$": 0 }, "fi": { "$": 0 }, "fr": { "$": 0 }, "gr": { "$": 0 }, "hr": { "$": 0 }, "hu": { "$": 0 }, "ie": { "$": 0 }, "il": { "$": 0 }, "in": { "$": 0 }, "int": { "$": 0 }, "is": { "$": 0 }, "it": { "$": 0 }, "jp": { "$": 0 }, "kr": { "$": 0 }, "lt": { "$": 0 }, "lu": { "$": 0 }, "lv": { "$": 0 }, "mc": { "$": 0 }, "me": { "$": 0 }, "mk": { "$": 0 }, "mt": { "$": 0 }, "my": { "$": 0 }, "net": { "$": 0 }, "ng": { "$": 0 }, "nl": { "$": 0 }, "no": { "$": 0 }, "nz": { "$": 0 }, "paris": { "$": 0 }, "pl": { "$": 0 }, "pt": { "$": 0 }, "q-a": { "$": 0 }, "ro": { "$": 0 }, "ru": { "$": 0 }, "se": { "$": 0 }, "si": { "$": 0 }, "sk": { "$": 0 }, "tr": { "$": 0 }, "uk": { "$": 0 }, "us": { "$": 0 } }, "twmail": { "$": 0 }, "fedorainfracloud": { "$": 0 }, "fedorapeople": { "$": 0 }, "fedoraproject": { "cloud": { "$": 0 } }, "hepforge": { "$": 0 }, "js": { "$": 0 }, "bmoattachments": { "$": 0 }, "cable-modem": { "$": 0 }, "collegefan": { "$": 0 }, "couchpotatofries": { "$": 0 }, "mlbfan": { "$": 0 }, "mysecuritycamera": { "$": 0 }, "nflfan": { "$": 0 }, "read-books": { "$": 0 }, "ufcfan": { "$": 0 }, "hopto": { "$": 0 }, "myftp": { "$": 0 }, "no-ip": { "$": 0 }, "zapto": { "$": 0 }, "my-firewall": { "$": 0 }, "myfirewall": { "$": 0 }, "spdns": { "$": 0 }, "dsmynas": { "$": 0 }, "familyds": { "$": 0 }, "tuxfamily": { "$": 0 }, "diskstation": { "$": 0 }, "hk": { "$": 0 }, "wmflabs": { "$": 0 }, "za": { "$": 0 } }, "pa": { "$": 0, "ac": { "$": 0 }, "gob": { "$": 0 }, "com": { "$": 0 }, "org": { "$": 0 }, "sld": { "$": 0 }, "edu": { "$": 0 }, "net": { "$": 0 }, "ing": { "$": 0 }, "abo": { "$": 0 }, "med": { "$": 0 }, "nom": { "$": 0 } }, "pe": { "$": 0, "edu": { "$": 0 }, "gob": { "$": 0 }, "nom": { "$": 0 }, "mil": { "$": 0 }, "org": { "$": 0 }, "com": { "$": 0 }, "net": { "$": 0 }, "blogspot": { "$": 0 }, "nym": { "$": 0 } }, "pf": { "$": 0, "com": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 } }, "pg": { "*": { "$": 0 } }, "ph": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gov": { "$": 0 }, "edu": { "$": 0 }, "ngo": { "$": 0 }, "mil": { "$": 0 }, "i": { "$": 0 } }, "pk": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "edu": { "$": 0 }, "org": { "$": 0 }, "fam": { "$": 0 }, "biz": { "$": 0 }, "web": { "$": 0 }, "gov": { "$": 0 }, "gob": { "$": 0 }, "gok": { "$": 0 }, "gon": { "$": 0 }, "gop": { "$": 0 }, "gos": { "$": 0 }, "info": { "$": 0 } }, "pl": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "aid": { "$": 0 }, "agro": { "$": 0 }, "atm": { "$": 0 }, "auto": { "$": 0 }, "biz": { "$": 0 }, "edu": { "$": 0 }, "gmina": { "$": 0 }, "gsm": { "$": 0 }, "info": { "$": 0 }, "mail": { "$": 0 }, "miasta": { "$": 0 }, "media": { "$": 0 }, "mil": { "$": 0 }, "nieruchomosci": { "$": 0 }, "nom": { "$": 0 }, "pc": { "$": 0 }, "powiat": { "$": 0 }, "priv": { "$": 0 }, "realestate": { "$": 0 }, "rel": { "$": 0 }, "sex": { "$": 0 }, "shop": { "$": 0 }, "sklep": { "$": 0 }, "sos": { "$": 0 }, "szkola": { "$": 0 }, "targi": { "$": 0 }, "tm": { "$": 0 }, "tourism": { "$": 0 }, "travel": { "$": 0 }, "turystyka": { "$": 0 }, "gov": { "$": 0, "ap": { "$": 0 }, "ic": { "$": 0 }, "is": { "$": 0 }, "us": { "$": 0 }, "kmpsp": { "$": 0 }, "kppsp": { "$": 0 }, "kwpsp": { "$": 0 }, "psp": { "$": 0 }, "wskr": { "$": 0 }, "kwp": { "$": 0 }, "mw": { "$": 0 }, "ug": { "$": 0 }, "um": { "$": 0 }, "umig": { "$": 0 }, "ugim": { "$": 0 }, "upow": { "$": 0 }, "uw": { "$": 0 }, "starostwo": { "$": 0 }, "pa": { "$": 0 }, "po": { "$": 0 }, "psse": { "$": 0 }, "pup": { "$": 0 }, "rzgw": { "$": 0 }, "sa": { "$": 0 }, "so": { "$": 0 }, "sr": { "$": 0 }, "wsa": { "$": 0 }, "sko": { "$": 0 }, "uzs": { "$": 0 }, "wiih": { "$": 0 }, "winb": { "$": 0 }, "pinb": { "$": 0 }, "wios": { "$": 0 }, "witd": { "$": 0 }, "wzmiuw": { "$": 0 }, "piw": { "$": 0 }, "wiw": { "$": 0 }, "griw": { "$": 0 }, "wif": { "$": 0 }, "oum": { "$": 0 }, "sdn": { "$": 0 }, "zp": { "$": 0 }, "uppo": { "$": 0 }, "mup": { "$": 0 }, "wuoz": { "$": 0 }, "konsulat": { "$": 0 }, "oirm": { "$": 0 } }, "augustow": { "$": 0 }, "babia-gora": { "$": 0 }, "bedzin": { "$": 0 }, "beskidy": { "$": 0 }, "bialowieza": { "$": 0 }, "bialystok": { "$": 0 }, "bielawa": { "$": 0 }, "bieszczady": { "$": 0 }, "boleslawiec": { "$": 0 }, "bydgoszcz": { "$": 0 }, "bytom": { "$": 0 }, "cieszyn": { "$": 0 }, "czeladz": { "$": 0 }, "czest": { "$": 0 }, "dlugoleka": { "$": 0 }, "elblag": { "$": 0 }, "elk": { "$": 0 }, "glogow": { "$": 0 }, "gniezno": { "$": 0 }, "gorlice": { "$": 0 }, "grajewo": { "$": 0 }, "ilawa": { "$": 0 }, "jaworzno": { "$": 0 }, "jelenia-gora": { "$": 0 }, "jgora": { "$": 0 }, "kalisz": { "$": 0 }, "kazimierz-dolny": { "$": 0 }, "karpacz": { "$": 0 }, "kartuzy": { "$": 0 }, "kaszuby": { "$": 0 }, "katowice": { "$": 0 }, "kepno": { "$": 0 }, "ketrzyn": { "$": 0 }, "klodzko": { "$": 0 }, "kobierzyce": { "$": 0 }, "kolobrzeg": { "$": 0 }, "konin": { "$": 0 }, "konskowola": { "$": 0 }, "kutno": { "$": 0 }, "lapy": { "$": 0 }, "lebork": { "$": 0 }, "legnica": { "$": 0 }, "lezajsk": { "$": 0 }, "limanowa": { "$": 0 }, "lomza": { "$": 0 }, "lowicz": { "$": 0 }, "lubin": { "$": 0 }, "lukow": { "$": 0 }, "malbork": { "$": 0 }, "malopolska": { "$": 0 }, "mazowsze": { "$": 0 }, "mazury": { "$": 0 }, "mielec": { "$": 0 }, "mielno": { "$": 0 }, "mragowo": { "$": 0 }, "naklo": { "$": 0 }, "nowaruda": { "$": 0 }, "nysa": { "$": 0 }, "olawa": { "$": 0 }, "olecko": { "$": 0 }, "olkusz": { "$": 0 }, "olsztyn": { "$": 0 }, "opoczno": { "$": 0 }, "opole": { "$": 0 }, "ostroda": { "$": 0 }, "ostroleka": { "$": 0 }, "ostrowiec": { "$": 0 }, "ostrowwlkp": { "$": 0 }, "pila": { "$": 0 }, "pisz": { "$": 0 }, "podhale": { "$": 0 }, "podlasie": { "$": 0 }, "polkowice": { "$": 0 }, "pomorze": { "$": 0 }, "pomorskie": { "$": 0 }, "prochowice": { "$": 0 }, "pruszkow": { "$": 0 }, "przeworsk": { "$": 0 }, "pulawy": { "$": 0 }, "radom": { "$": 0 }, "rawa-maz": { "$": 0 }, "rybnik": { "$": 0 }, "rzeszow": { "$": 0 }, "sanok": { "$": 0 }, "sejny": { "$": 0 }, "slask": { "$": 0 }, "slupsk": { "$": 0 }, "sosnowiec": { "$": 0 }, "stalowa-wola": { "$": 0 }, "skoczow": { "$": 0 }, "starachowice": { "$": 0 }, "stargard": { "$": 0 }, "suwalki": { "$": 0 }, "swidnica": { "$": 0 }, "swiebodzin": { "$": 0 }, "swinoujscie": { "$": 0 }, "szczecin": { "$": 0 }, "szczytno": { "$": 0 }, "tarnobrzeg": { "$": 0 }, "tgory": { "$": 0 }, "turek": { "$": 0 }, "tychy": { "$": 0 }, "ustka": { "$": 0 }, "walbrzych": { "$": 0 }, "warmia": { "$": 0 }, "warszawa": { "$": 0 }, "waw": { "$": 0 }, "wegrow": { "$": 0 }, "wielun": { "$": 0 }, "wlocl": { "$": 0 }, "wloclawek": { "$": 0 }, "wodzislaw": { "$": 0 }, "wolomin": { "$": 0 }, "wroclaw": { "$": 0 }, "zachpomor": { "$": 0 }, "zagan": { "$": 0 }, "zarow": { "$": 0 }, "zgora": { "$": 0 }, "zgorzelec": { "$": 0 }, "beep": { "$": 0 }, "co": { "$": 0 }, "art": { "$": 0 }, "gliwice": { "$": 0 }, "krakow": { "$": 0 }, "poznan": { "$": 0 }, "wroc": { "$": 0 }, "zakopane": { "$": 0 }, "gda": { "$": 0 }, "gdansk": { "$": 0 }, "gdynia": { "$": 0 }, "med": { "$": 0 }, "sopot": { "$": 0 } }, "pm": { "$": 0 }, "pn": { "$": 0, "gov": { "$": 0 }, "co": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "net": { "$": 0 } }, "post": { "$": 0 }, "pr": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gov": { "$": 0 }, "edu": { "$": 0 }, "isla": { "$": 0 }, "pro": { "$": 0 }, "biz": { "$": 0 }, "info": { "$": 0 }, "name": { "$": 0 }, "est": { "$": 0 }, "prof": { "$": 0 }, "ac": { "$": 0 } }, "pro": { "$": 0, "aaa": { "$": 0 }, "aca": { "$": 0 }, "acct": { "$": 0 }, "avocat": { "$": 0 }, "bar": { "$": 0 }, "cpa": { "$": 0 }, "eng": { "$": 0 }, "jur": { "$": 0 }, "law": { "$": 0 }, "med": { "$": 0 }, "recht": { "$": 0 }, "cloudns": { "$": 0 } }, "ps": { "$": 0, "edu": { "$": 0 }, "gov": { "$": 0 }, "sec": { "$": 0 }, "plo": { "$": 0 }, "com": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 } }, "pt": { "$": 0, "net": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "int": { "$": 0 }, "publ": { "$": 0 }, "com": { "$": 0 }, "nome": { "$": 0 }, "blogspot": { "$": 0 }, "nym": { "$": 0 } }, "pw": { "$": 0, "co": { "$": 0 }, "ne": { "$": 0 }, "or": { "$": 0 }, "ed": { "$": 0 }, "go": { "$": 0 }, "belau": { "$": 0 }, "cloudns": { "$": 0 }, "nom": { "$": 0 } }, "py": { "$": 0, "com": { "$": 0 }, "coop": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "qa": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "name": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "sch": { "$": 0 }, "blogspot": { "$": 0 }, "nom": { "$": 0 } }, "re": { "$": 0, "asso": { "$": 0 }, "com": { "$": 0 }, "nom": { "$": 0 }, "blogspot": { "$": 0 } }, "ro": { "$": 0, "arts": { "$": 0 }, "com": { "$": 0 }, "firm": { "$": 0 }, "info": { "$": 0 }, "nom": { "$": 0 }, "nt": { "$": 0 }, "org": { "$": 0 }, "rec": { "$": 0 }, "store": { "$": 0 }, "tm": { "$": 0 }, "www": { "$": 0 }, "shop": { "$": 0 }, "blogspot": { "$": 0 } }, "rs": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "in": { "$": 0 }, "org": { "$": 0 }, "blogspot": { "$": 0 }, "nom": { "$": 0 } }, "ru": { "$": 0, "ac": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "int": { "$": 0 }, "mil": { "$": 0 }, "test": { "$": 0 }, "adygeya": { "$": 0 }, "bashkiria": { "$": 0 }, "bir": { "$": 0 }, "cbg": { "$": 0 }, "com": { "$": 0 }, "dagestan": { "$": 0 }, "grozny": { "$": 0 }, "kalmykia": { "$": 0 }, "kustanai": { "$": 0 }, "marine": { "$": 0 }, "mordovia": { "$": 0 }, "msk": { "$": 0 }, "mytis": { "$": 0 }, "nalchik": { "$": 0 }, "nov": { "$": 0 }, "pyatigorsk": { "$": 0 }, "spb": { "$": 0 }, "vladikavkaz": { "$": 0 }, "vladimir": { "$": 0 }, "blogspot": { "$": 0 }, "cldmail": { "hb": { "$": 0 } }, "net": { "$": 0 }, "org": { "$": 0 }, "pp": { "$": 0 } }, "rw": { "$": 0, "gov": { "$": 0 }, "net": { "$": 0 }, "edu": { "$": 0 }, "ac": { "$": 0 }, "com": { "$": 0 }, "co": { "$": 0 }, "int": { "$": 0 }, "mil": { "$": 0 }, "gouv": { "$": 0 } }, "sa": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gov": { "$": 0 }, "med": { "$": 0 }, "pub": { "$": 0 }, "edu": { "$": 0 }, "sch": { "$": 0 } }, "sb": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "sc": { "$": 0, "com": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 } }, "sd": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "med": { "$": 0 }, "tv": { "$": 0 }, "gov": { "$": 0 }, "info": { "$": 0 } }, "se": { "$": 0, "a": { "$": 0 }, "ac": { "$": 0 }, "b": { "$": 0 }, "bd": { "$": 0 }, "brand": { "$": 0 }, "c": { "$": 0 }, "d": { "$": 0 }, "e": { "$": 0 }, "f": { "$": 0 }, "fh": { "$": 0 }, "fhsk": { "$": 0 }, "fhv": { "$": 0 }, "g": { "$": 0 }, "h": { "$": 0 }, "i": { "$": 0 }, "k": { "$": 0 }, "komforb": { "$": 0 }, "kommunalforbund": { "$": 0 }, "komvux": { "$": 0 }, "l": { "$": 0 }, "lanbib": { "$": 0 }, "m": { "$": 0 }, "n": { "$": 0 }, "naturbruksgymn": { "$": 0 }, "o": { "$": 0 }, "org": { "$": 0 }, "p": { "$": 0 }, "parti": { "$": 0 }, "pp": { "$": 0 }, "press": { "$": 0 }, "r": { "$": 0 }, "s": { "$": 0 }, "t": { "$": 0 }, "tm": { "$": 0 }, "u": { "$": 0 }, "w": { "$": 0 }, "x": { "$": 0 }, "y": { "$": 0 }, "z": { "$": 0 }, "com": { "$": 0 }, "blogspot": { "$": 0 } }, "sg": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gov": { "$": 0 }, "edu": { "$": 0 }, "per": { "$": 0 }, "blogspot": { "$": 0 } }, "sh": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 }, "mil": { "$": 0 }, "hashbang": { "$": 0 }, "platform": { "*": { "$": 0 } }, "wedeploy": { "$": 0 }, "now": { "$": 0 } }, "si": { "$": 0, "blogspot": { "$": 0 }, "nom": { "$": 0 } }, "sj": { "$": 0 }, "sk": { "$": 0, "blogspot": { "$": 0 }, "nym": { "$": 0 } }, "sl": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "org": { "$": 0 } }, "sm": { "$": 0 }, "sn": { "$": 0, "art": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "gouv": { "$": 0 }, "org": { "$": 0 }, "perso": { "$": 0 }, "univ": { "$": 0 }, "blogspot": { "$": 0 } }, "so": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "sr": { "$": 0 }, "st": { "$": 0, "co": { "$": 0 }, "com": { "$": 0 }, "consulado": { "$": 0 }, "edu": { "$": 0 }, "embaixada": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "principe": { "$": 0 }, "saotome": { "$": 0 }, "store": { "$": 0 } }, "su": { "$": 0, "abkhazia": { "$": 0 }, "adygeya": { "$": 0 }, "aktyubinsk": { "$": 0 }, "arkhangelsk": { "$": 0 }, "armenia": { "$": 0 }, "ashgabad": { "$": 0 }, "azerbaijan": { "$": 0 }, "balashov": { "$": 0 }, "bashkiria": { "$": 0 }, "bryansk": { "$": 0 }, "bukhara": { "$": 0 }, "chimkent": { "$": 0 }, "dagestan": { "$": 0 }, "east-kazakhstan": { "$": 0 }, "exnet": { "$": 0 }, "georgia": { "$": 0 }, "grozny": { "$": 0 }, "ivanovo": { "$": 0 }, "jambyl": { "$": 0 }, "kalmykia": { "$": 0 }, "kaluga": { "$": 0 }, "karacol": { "$": 0 }, "karaganda": { "$": 0 }, "karelia": { "$": 0 }, "khakassia": { "$": 0 }, "krasnodar": { "$": 0 }, "kurgan": { "$": 0 }, "kustanai": { "$": 0 }, "lenug": { "$": 0 }, "mangyshlak": { "$": 0 }, "mordovia": { "$": 0 }, "msk": { "$": 0 }, "murmansk": { "$": 0 }, "nalchik": { "$": 0 }, "navoi": { "$": 0 }, "north-kazakhstan": { "$": 0 }, "nov": { "$": 0 }, "obninsk": { "$": 0 }, "penza": { "$": 0 }, "pokrovsk": { "$": 0 }, "sochi": { "$": 0 }, "spb": { "$": 0 }, "tashkent": { "$": 0 }, "termez": { "$": 0 }, "togliatti": { "$": 0 }, "troitsk": { "$": 0 }, "tselinograd": { "$": 0 }, "tula": { "$": 0 }, "tuva": { "$": 0 }, "vladikavkaz": { "$": 0 }, "vladimir": { "$": 0 }, "vologda": { "$": 0 }, "nym": { "$": 0 } }, "sv": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gob": { "$": 0 }, "org": { "$": 0 }, "red": { "$": 0 } }, "sx": { "$": 0, "gov": { "$": 0 }, "nym": { "$": 0 } }, "sy": { "$": 0, "edu": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "mil": { "$": 0 }, "com": { "$": 0 }, "org": { "$": 0 } }, "sz": { "$": 0, "co": { "$": 0 }, "ac": { "$": 0 }, "org": { "$": 0 } }, "tc": { "$": 0 }, "td": { "$": 0, "blogspot": { "$": 0 } }, "tel": { "$": 0 }, "tf": { "$": 0 }, "tg": { "$": 0 }, "th": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0 }, "go": { "$": 0 }, "in": { "$": 0 }, "mi": { "$": 0 }, "net": { "$": 0 }, "or": { "$": 0 } }, "tj": { "$": 0, "ac": { "$": 0 }, "biz": { "$": 0 }, "co": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "go": { "$": 0 }, "gov": { "$": 0 }, "int": { "$": 0 }, "mil": { "$": 0 }, "name": { "$": 0 }, "net": { "$": 0 }, "nic": { "$": 0 }, "org": { "$": 0 }, "test": { "$": 0 }, "web": { "$": 0 } }, "tk": { "$": 0 }, "tl": { "$": 0, "gov": { "$": 0 } }, "tm": { "$": 0, "com": { "$": 0 }, "co": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 }, "nom": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "edu": { "$": 0 } }, "tn": { "$": 0, "com": { "$": 0 }, "ens": { "$": 0 }, "fin": { "$": 0 }, "gov": { "$": 0 }, "ind": { "$": 0 }, "intl": { "$": 0 }, "nat": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "info": { "$": 0 }, "perso": { "$": 0 }, "tourism": { "$": 0 }, "edunet": { "$": 0 }, "rnrt": { "$": 0 }, "rns": { "$": 0 }, "rnu": { "$": 0 }, "mincom": { "$": 0 }, "agrinet": { "$": 0 }, "defense": { "$": 0 }, "turen": { "$": 0 } }, "to": { "$": 0, "com": { "$": 0 }, "gov": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "mil": { "$": 0 }, "vpnplus": { "$": 0 } }, "tr": { "$": 0, "com": { "$": 0, "blogspot": { "$": 0 } }, "info": { "$": 0 }, "biz": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "web": { "$": 0 }, "gen": { "$": 0 }, "tv": { "$": 0 }, "av": { "$": 0 }, "dr": { "$": 0 }, "bbs": { "$": 0 }, "name": { "$": 0 }, "tel": { "$": 0 }, "gov": { "$": 0 }, "bel": { "$": 0 }, "pol": { "$": 0 }, "mil": { "$": 0 }, "k12": { "$": 0 }, "edu": { "$": 0 }, "kep": { "$": 0 }, "nc": { "$": 0, "gov": { "$": 0 } } }, "travel": { "$": 0 }, "tt": { "$": 0, "co": { "$": 0 }, "com": { "$": 0 }, "org": { "$": 0 }, "net": { "$": 0 }, "biz": { "$": 0 }, "info": { "$": 0 }, "pro": { "$": 0 }, "int": { "$": 0 }, "coop": { "$": 0 }, "jobs": { "$": 0 }, "mobi": { "$": 0 }, "travel": { "$": 0 }, "museum": { "$": 0 }, "aero": { "$": 0 }, "name": { "$": 0 }, "gov": { "$": 0 }, "edu": { "$": 0 } }, "tv": { "$": 0, "dyndns": { "$": 0 }, "better-than": { "$": 0 }, "on-the-web": { "$": 0 }, "worse-than": { "$": 0 } }, "tw": { "$": 0, "edu": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "com": { "$": 0, "mymailer": { "$": 0 } }, "net": { "$": 0 }, "org": { "$": 0 }, "idv": { "$": 0 }, "game": { "$": 0 }, "ebiz": { "$": 0 }, "club": { "$": 0 }, "xn--zf0ao64a": { "$": 0 }, "xn--uc0atv": { "$": 0 }, "xn--czrw28b": { "$": 0 }, "url": { "$": 0 }, "blogspot": { "$": 0 }, "nym": { "$": 0 } }, "tz": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0 }, "go": { "$": 0 }, "hotel": { "$": 0 }, "info": { "$": 0 }, "me": { "$": 0 }, "mil": { "$": 0 }, "mobi": { "$": 0 }, "ne": { "$": 0 }, "or": { "$": 0 }, "sc": { "$": 0 }, "tv": { "$": 0 } }, "ua": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "in": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "cherkassy": { "$": 0 }, "cherkasy": { "$": 0 }, "chernigov": { "$": 0 }, "chernihiv": { "$": 0 }, "chernivtsi": { "$": 0 }, "chernovtsy": { "$": 0 }, "ck": { "$": 0 }, "cn": { "$": 0 }, "cr": { "$": 0 }, "crimea": { "$": 0 }, "cv": { "$": 0 }, "dn": { "$": 0 }, "dnepropetrovsk": { "$": 0 }, "dnipropetrovsk": { "$": 0 }, "dominic": { "$": 0 }, "donetsk": { "$": 0 }, "dp": { "$": 0 }, "if": { "$": 0 }, "ivano-frankivsk": { "$": 0 }, "kh": { "$": 0 }, "kharkiv": { "$": 0 }, "kharkov": { "$": 0 }, "kherson": { "$": 0 }, "khmelnitskiy": { "$": 0 }, "khmelnytskyi": { "$": 0 }, "kiev": { "$": 0 }, "kirovograd": { "$": 0 }, "km": { "$": 0 }, "kr": { "$": 0 }, "krym": { "$": 0 }, "ks": { "$": 0 }, "kv": { "$": 0 }, "kyiv": { "$": 0 }, "lg": { "$": 0 }, "lt": { "$": 0 }, "lugansk": { "$": 0 }, "lutsk": { "$": 0 }, "lv": { "$": 0 }, "lviv": { "$": 0 }, "mk": { "$": 0 }, "mykolaiv": { "$": 0 }, "nikolaev": { "$": 0 }, "od": { "$": 0 }, "odesa": { "$": 0 }, "odessa": { "$": 0 }, "pl": { "$": 0 }, "poltava": { "$": 0 }, "rivne": { "$": 0 }, "rovno": { "$": 0 }, "rv": { "$": 0 }, "sb": { "$": 0 }, "sebastopol": { "$": 0 }, "sevastopol": { "$": 0 }, "sm": { "$": 0 }, "sumy": { "$": 0 }, "te": { "$": 0 }, "ternopil": { "$": 0 }, "uz": { "$": 0 }, "uzhgorod": { "$": 0 }, "vinnica": { "$": 0 }, "vinnytsia": { "$": 0 }, "vn": { "$": 0 }, "volyn": { "$": 0 }, "yalta": { "$": 0 }, "zaporizhzhe": { "$": 0 }, "zaporizhzhia": { "$": 0 }, "zhitomir": { "$": 0 }, "zhytomyr": { "$": 0 }, "zp": { "$": 0 }, "zt": { "$": 0 }, "cc": { "$": 0 }, "inf": { "$": 0 }, "ltd": { "$": 0 }, "biz": { "$": 0 }, "co": { "$": 0 }, "pp": { "$": 0 } }, "ug": { "$": 0, "co": { "$": 0 }, "or": { "$": 0 }, "ac": { "$": 0 }, "sc": { "$": 0 }, "go": { "$": 0 }, "ne": { "$": 0 }, "com": { "$": 0 }, "org": { "$": 0 }, "blogspot": { "$": 0 }, "nom": { "$": 0 } }, "uk": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0, "blogspot": { "$": 0 }, "no-ip": { "$": 0 }, "wellbeingzone": { "$": 0 } }, "gov": { "$": 0, "service": { "$": 0 }, "homeoffice": { "$": 0 } }, "ltd": { "$": 0 }, "me": { "$": 0 }, "net": { "$": 0 }, "nhs": { "$": 0 }, "org": { "$": 0 }, "plc": { "$": 0 }, "police": { "$": 0 }, "sch": { "*": { "$": 0 } } }, "us": { "$": 0, "dni": { "$": 0 }, "fed": { "$": 0 }, "isa": { "$": 0 }, "kids": { "$": 0 }, "nsn": { "$": 0 }, "ak": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "al": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ar": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "as": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "az": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ca": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "co": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ct": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "dc": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "de": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "fl": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ga": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "gu": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "hi": { "$": 0, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ia": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "id": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "il": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "in": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ks": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ky": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "la": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ma": { "$": 0, "k12": { "$": 0, "pvt": { "$": 0 }, "chtr": { "$": 0 }, "paroch": { "$": 0 } }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "md": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "me": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "mi": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 }, "ann-arbor": { "$": 0 }, "cog": { "$": 0 }, "dst": { "$": 0 }, "eaton": { "$": 0 }, "gen": { "$": 0 }, "mus": { "$": 0 }, "tec": { "$": 0 }, "washtenaw": { "$": 0 } }, "mn": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "mo": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ms": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "mt": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "nc": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "nd": { "$": 0, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ne": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "nh": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "nj": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "nm": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "nv": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ny": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "oh": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ok": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "or": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "pa": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "pr": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ri": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "sc": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "sd": { "$": 0, "cc": { "$": 0 }, "lib": { "$": 0 } }, "tn": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "tx": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "ut": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "vi": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "vt": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "va": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "wa": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "wi": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "wv": { "$": 0, "cc": { "$": 0 } }, "wy": { "$": 0, "k12": { "$": 0 }, "cc": { "$": 0 }, "lib": { "$": 0 } }, "cloudns": { "$": 0 }, "drud": { "$": 0 }, "is-by": { "$": 0 }, "land-4-sale": { "$": 0 }, "stuff-4-sale": { "$": 0 }, "golffan": { "$": 0 }, "noip": { "$": 0 }, "pointto": { "$": 0 } }, "uy": { "$": 0, "com": { "$": 0, "blogspot": { "$": 0 } }, "edu": { "$": 0 }, "gub": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "nom": { "$": 0 } }, "uz": { "$": 0, "co": { "$": 0 }, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "va": { "$": 0 }, "vc": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "edu": { "$": 0 }, "nom": { "$": 0 } }, "ve": { "$": 0, "arts": { "$": 0 }, "co": { "$": 0 }, "com": { "$": 0 }, "e12": { "$": 0 }, "edu": { "$": 0 }, "firm": { "$": 0 }, "gob": { "$": 0 }, "gov": { "$": 0 }, "info": { "$": 0 }, "int": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "rec": { "$": 0 }, "store": { "$": 0 }, "tec": { "$": 0 }, "web": { "$": 0 } }, "vg": { "$": 0, "nom": { "$": 0 } }, "vi": { "$": 0, "co": { "$": 0 }, "com": { "$": 0 }, "k12": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "vn": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "int": { "$": 0 }, "ac": { "$": 0 }, "biz": { "$": 0 }, "info": { "$": 0 }, "name": { "$": 0 }, "pro": { "$": 0 }, "health": { "$": 0 }, "blogspot": { "$": 0 } }, "vu": { "$": 0, "com": { "$": 0 }, "edu": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 } }, "wf": { "$": 0 }, "ws": { "$": 0, "com": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "gov": { "$": 0 }, "edu": { "$": 0 }, "advisor": { "*": { "$": 0 } }, "dyndns": { "$": 0 }, "mypets": { "$": 0 } }, "yt": { "$": 0 }, "xn--mgbaam7a8h": { "$": 0 }, "xn--y9a3aq": { "$": 0 }, "xn--54b7fta0cc": { "$": 0 }, "xn--90ae": { "$": 0 }, "xn--90ais": { "$": 0 }, "xn--fiqs8s": { "$": 0 }, "xn--fiqz9s": { "$": 0 }, "xn--lgbbat1ad8j": { "$": 0 }, "xn--wgbh1c": { "$": 0 }, "xn--e1a4c": { "$": 0 }, "xn--node": { "$": 0 }, "xn--qxam": { "$": 0 }, "xn--j6w193g": { "$": 0 }, "xn--2scrj9c": { "$": 0 }, "xn--3hcrj9c": { "$": 0 }, "xn--45br5cyl": { "$": 0 }, "xn--h2breg3eve": { "$": 0 }, "xn--h2brj9c8c": { "$": 0 }, "xn--mgbgu82a": { "$": 0 }, "xn--rvc1e0am3e": { "$": 0 }, "xn--h2brj9c": { "$": 0 }, "xn--mgbbh1a71e": { "$": 0 }, "xn--fpcrj9c3d": { "$": 0 }, "xn--gecrj9c": { "$": 0 }, "xn--s9brj9c": { "$": 0 }, "xn--45brj9c": { "$": 0 }, "xn--xkc2dl3a5ee0h": { "$": 0 }, "xn--mgba3a4f16a": { "$": 0 }, "xn--mgba3a4fra": { "$": 0 }, "xn--mgbtx2b": { "$": 0 }, "xn--mgbayh7gpa": { "$": 0 }, "xn--3e0b707e": { "$": 0 }, "xn--80ao21a": { "$": 0 }, "xn--fzc2c9e2c": { "$": 0 }, "xn--xkc2al3hye2a": { "$": 0 }, "xn--mgbc0a9azcg": { "$": 0 }, "xn--d1alf": { "$": 0 }, "xn--l1acc": { "$": 0 }, "xn--mix891f": { "$": 0 }, "xn--mix082f": { "$": 0 }, "xn--mgbx4cd0ab": { "$": 0 }, "xn--mgb9awbf": { "$": 0 }, "xn--mgbai9azgqp6j": { "$": 0 }, "xn--mgbai9a5eva00b": { "$": 0 }, "xn--ygbi2ammx": { "$": 0 }, "xn--90a3ac": { "$": 0, "xn--o1ac": { "$": 0 }, "xn--c1avg": { "$": 0 }, "xn--90azh": { "$": 0 }, "xn--d1at": { "$": 0 }, "xn--o1ach": { "$": 0 }, "xn--80au": { "$": 0 } }, "xn--p1ai": { "$": 0 }, "xn--wgbl6a": { "$": 0 }, "xn--mgberp4a5d4ar": { "$": 0 }, "xn--mgberp4a5d4a87g": { "$": 0 }, "xn--mgbqly7c0a67fbc": { "$": 0 }, "xn--mgbqly7cvafr": { "$": 0 }, "xn--mgbpl2fh": { "$": 0 }, "xn--yfro4i67o": { "$": 0 }, "xn--clchc0ea0b2g2a9gcd": { "$": 0 }, "xn--ogbpf8fl": { "$": 0 }, "xn--mgbtf8fl": { "$": 0 }, "xn--o3cw4h": { "$": 0, "xn--12c1fe0br": { "$": 0 }, "xn--12co0c3b4eva": { "$": 0 }, "xn--h3cuzk1di": { "$": 0 }, "xn--o3cyx2a": { "$": 0 }, "xn--m3ch0j3a": { "$": 0 }, "xn--12cfi8ixb8l": { "$": 0 } }, "xn--pgbs0dh": { "$": 0 }, "xn--kpry57d": { "$": 0 }, "xn--kprw13d": { "$": 0 }, "xn--nnx388a": { "$": 0 }, "xn--j1amh": { "$": 0 }, "xn--mgb2ddes": { "$": 0 }, "xxx": { "$": 0 }, "ye": { "*": { "$": 0 } }, "za": { "ac": { "$": 0 }, "agric": { "$": 0 }, "alt": { "$": 0 }, "co": { "$": 0, "blogspot": { "$": 0 } }, "edu": { "$": 0 }, "gov": { "$": 0 }, "grondar": { "$": 0 }, "law": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "ngo": { "$": 0 }, "nis": { "$": 0 }, "nom": { "$": 0 }, "org": { "$": 0 }, "school": { "$": 0 }, "tm": { "$": 0 }, "web": { "$": 0 } }, "zm": { "$": 0, "ac": { "$": 0 }, "biz": { "$": 0 }, "co": { "$": 0 }, "com": { "$": 0 }, "edu": { "$": 0 }, "gov": { "$": 0 }, "info": { "$": 0 }, "mil": { "$": 0 }, "net": { "$": 0 }, "org": { "$": 0 }, "sch": { "$": 0 } }, "zw": { "$": 0, "ac": { "$": 0 }, "co": { "$": 0 }, "gov": { "$": 0 }, "mil": { "$": 0 }, "org": { "$": 0 } }, "aaa": { "$": 0 }, "aarp": { "$": 0 }, "abarth": { "$": 0 }, "abb": { "$": 0 }, "abbott": { "$": 0 }, "abbvie": { "$": 0 }, "abc": { "$": 0 }, "able": { "$": 0 }, "abogado": { "$": 0 }, "abudhabi": { "$": 0 }, "academy": { "$": 0 }, "accenture": { "$": 0 }, "accountant": { "$": 0 }, "accountants": { "$": 0 }, "aco": { "$": 0 }, "active": { "$": 0 }, "actor": { "$": 0 }, "adac": { "$": 0 }, "ads": { "$": 0 }, "adult": { "$": 0 }, "aeg": { "$": 0 }, "aetna": { "$": 0 }, "afamilycompany": { "$": 0 }, "afl": { "$": 0 }, "africa": { "$": 0 }, "agakhan": { "$": 0 }, "agency": { "$": 0 }, "aig": { "$": 0 }, "aigo": { "$": 0 }, "airbus": { "$": 0 }, "airforce": { "$": 0 }, "airtel": { "$": 0 }, "akdn": { "$": 0 }, "alfaromeo": { "$": 0 }, "alibaba": { "$": 0 }, "alipay": { "$": 0 }, "allfinanz": { "$": 0 }, "allstate": { "$": 0 }, "ally": { "$": 0 }, "alsace": { "$": 0 }, "alstom": { "$": 0 }, "americanexpress": { "$": 0 }, "americanfamily": { "$": 0 }, "amex": { "$": 0 }, "amfam": { "$": 0 }, "amica": { "$": 0 }, "amsterdam": { "$": 0 }, "analytics": { "$": 0 }, "android": { "$": 0 }, "anquan": { "$": 0 }, "anz": { "$": 0 }, "aol": { "$": 0 }, "apartments": { "$": 0 }, "app": { "$": 0 }, "apple": { "$": 0 }, "aquarelle": { "$": 0 }, "arab": { "$": 0 }, "aramco": { "$": 0 }, "archi": { "$": 0 }, "army": { "$": 0 }, "art": { "$": 0 }, "arte": { "$": 0 }, "asda": { "$": 0 }, "associates": { "$": 0 }, "athleta": { "$": 0 }, "attorney": { "$": 0 }, "auction": { "$": 0 }, "audi": { "$": 0 }, "audible": { "$": 0 }, "audio": { "$": 0 }, "auspost": { "$": 0 }, "author": { "$": 0 }, "auto": { "$": 0 }, "autos": { "$": 0 }, "avianca": { "$": 0 }, "aws": { "$": 0 }, "axa": { "$": 0 }, "azure": { "$": 0 }, "baby": { "$": 0 }, "baidu": { "$": 0 }, "banamex": { "$": 0 }, "bananarepublic": { "$": 0 }, "band": { "$": 0 }, "bank": { "$": 0 }, "bar": { "$": 0 }, "barcelona": { "$": 0 }, "barclaycard": { "$": 0 }, "barclays": { "$": 0 }, "barefoot": { "$": 0 }, "bargains": { "$": 0 }, "baseball": { "$": 0 }, "basketball": { "$": 0 }, "bauhaus": { "$": 0 }, "bayern": { "$": 0 }, "bbc": { "$": 0 }, "bbt": { "$": 0 }, "bbva": { "$": 0 }, "bcg": { "$": 0 }, "bcn": { "$": 0 }, "beats": { "$": 0 }, "beauty": { "$": 0 }, "beer": { "$": 0 }, "bentley": { "$": 0 }, "berlin": { "$": 0 }, "best": { "$": 0 }, "bestbuy": { "$": 0 }, "bet": { "$": 0 }, "bharti": { "$": 0 }, "bible": { "$": 0 }, "bid": { "$": 0 }, "bike": { "$": 0 }, "bing": { "$": 0 }, "bingo": { "$": 0 }, "bio": { "$": 0 }, "black": { "$": 0 }, "blackfriday": { "$": 0 }, "blanco": { "$": 0 }, "blockbuster": { "$": 0 }, "blog": { "$": 0 }, "bloomberg": { "$": 0 }, "blue": { "$": 0 }, "bms": { "$": 0 }, "bmw": { "$": 0 }, "bnl": { "$": 0 }, "bnpparibas": { "$": 0 }, "boats": { "$": 0 }, "boehringer": { "$": 0 }, "bofa": { "$": 0 }, "bom": { "$": 0 }, "bond": { "$": 0 }, "boo": { "$": 0 }, "book": { "$": 0 }, "booking": { "$": 0 }, "boots": { "$": 0 }, "bosch": { "$": 0 }, "bostik": { "$": 0 }, "boston": { "$": 0 }, "bot": { "$": 0 }, "boutique": { "$": 0 }, "box": { "$": 0 }, "bradesco": { "$": 0 }, "bridgestone": { "$": 0 }, "broadway": { "$": 0 }, "broker": { "$": 0 }, "brother": { "$": 0 }, "brussels": { "$": 0 }, "budapest": { "$": 0 }, "bugatti": { "$": 0 }, "build": { "$": 0 }, "builders": { "$": 0 }, "business": { "$": 0 }, "buy": { "$": 0 }, "buzz": { "$": 0 }, "bzh": { "$": 0 }, "cab": { "$": 0 }, "cafe": { "$": 0 }, "cal": { "$": 0 }, "call": { "$": 0 }, "calvinklein": { "$": 0 }, "cam": { "$": 0 }, "camera": { "$": 0 }, "camp": { "$": 0 }, "cancerresearch": { "$": 0 }, "canon": { "$": 0 }, "capetown": { "$": 0 }, "capital": { "$": 0 }, "capitalone": { "$": 0 }, "car": { "$": 0 }, "caravan": { "$": 0 }, "cards": { "$": 0 }, "care": { "$": 0 }, "career": { "$": 0 }, "careers": { "$": 0 }, "cars": { "$": 0 }, "cartier": { "$": 0 }, "casa": { "$": 0 }, "case": { "$": 0 }, "caseih": { "$": 0 }, "cash": { "$": 0 }, "casino": { "$": 0 }, "catering": { "$": 0 }, "catholic": { "$": 0 }, "cba": { "$": 0 }, "cbn": { "$": 0 }, "cbre": { "$": 0 }, "cbs": { "$": 0 }, "ceb": { "$": 0 }, "center": { "$": 0 }, "ceo": { "$": 0 }, "cern": { "$": 0 }, "cfa": { "$": 0 }, "cfd": { "$": 0 }, "chanel": { "$": 0 }, "channel": { "$": 0 }, "chase": { "$": 0 }, "chat": { "$": 0 }, "cheap": { "$": 0 }, "chintai": { "$": 0 }, "chloe": { "$": 0 }, "christmas": { "$": 0 }, "chrome": { "$": 0 }, "chrysler": { "$": 0 }, "church": { "$": 0 }, "cipriani": { "$": 0 }, "circle": { "$": 0 }, "cisco": { "$": 0 }, "citadel": { "$": 0 }, "citi": { "$": 0 }, "citic": { "$": 0 }, "city": { "$": 0 }, "cityeats": { "$": 0 }, "claims": { "$": 0 }, "cleaning": { "$": 0 }, "click": { "$": 0 }, "clinic": { "$": 0 }, "clinique": { "$": 0 }, "clothing": { "$": 0 }, "cloud": { "$": 0, "myfusion": { "$": 0 }, "statics": { "*": { "$": 0 } }, "magentosite": { "*": { "$": 0 } }, "vapor": { "$": 0 }, "sensiosite": { "*": { "$": 0 } }, "trafficplex": { "$": 0 } }, "club": { "$": 0, "cloudns": { "$": 0 } }, "clubmed": { "$": 0 }, "coach": { "$": 0 }, "codes": { "$": 0 }, "coffee": { "$": 0 }, "college": { "$": 0 }, "cologne": { "$": 0 }, "comcast": { "$": 0 }, "commbank": { "$": 0 }, "community": { "$": 0 }, "company": { "$": 0 }, "compare": { "$": 0 }, "computer": { "$": 0 }, "comsec": { "$": 0 }, "condos": { "$": 0 }, "construction": { "$": 0 }, "consulting": { "$": 0 }, "contact": { "$": 0 }, "contractors": { "$": 0 }, "cooking": { "$": 0 }, "cookingchannel": { "$": 0 }, "cool": { "$": 0, "de": { "$": 0 } }, "corsica": { "$": 0 }, "country": { "$": 0 }, "coupon": { "$": 0 }, "coupons": { "$": 0 }, "courses": { "$": 0 }, "credit": { "$": 0 }, "creditcard": { "$": 0 }, "creditunion": { "$": 0 }, "cricket": { "$": 0 }, "crown": { "$": 0 }, "crs": { "$": 0 }, "cruise": { "$": 0 }, "cruises": { "$": 0 }, "csc": { "$": 0 }, "cuisinella": { "$": 0 }, "cymru": { "$": 0 }, "cyou": { "$": 0 }, "dabur": { "$": 0 }, "dad": { "$": 0 }, "dance": { "$": 0 }, "data": { "$": 0 }, "date": { "$": 0 }, "dating": { "$": 0 }, "datsun": { "$": 0 }, "day": { "$": 0 }, "dclk": { "$": 0 }, "dds": { "$": 0 }, "deal": { "$": 0 }, "dealer": { "$": 0 }, "deals": { "$": 0 }, "degree": { "$": 0 }, "delivery": { "$": 0 }, "dell": { "$": 0 }, "deloitte": { "$": 0 }, "delta": { "$": 0 }, "democrat": { "$": 0 }, "dental": { "$": 0 }, "dentist": { "$": 0 }, "desi": { "$": 0 }, "design": { "$": 0 }, "dev": { "$": 0 }, "dhl": { "$": 0 }, "diamonds": { "$": 0 }, "diet": { "$": 0 }, "digital": { "$": 0 }, "direct": { "$": 0 }, "directory": { "$": 0 }, "discount": { "$": 0 }, "discover": { "$": 0 }, "dish": { "$": 0 }, "diy": { "$": 0 }, "dnp": { "$": 0 }, "docs": { "$": 0 }, "doctor": { "$": 0 }, "dodge": { "$": 0 }, "dog": { "$": 0 }, "doha": { "$": 0 }, "domains": { "$": 0 }, "dot": { "$": 0 }, "download": { "$": 0 }, "drive": { "$": 0 }, "dtv": { "$": 0 }, "dubai": { "$": 0 }, "duck": { "$": 0 }, "dunlop": { "$": 0 }, "duns": { "$": 0 }, "dupont": { "$": 0 }, "durban": { "$": 0 }, "dvag": { "$": 0 }, "dvr": { "$": 0 }, "earth": { "$": 0 }, "eat": { "$": 0 }, "eco": { "$": 0 }, "edeka": { "$": 0 }, "education": { "$": 0 }, "email": { "$": 0 }, "emerck": { "$": 0 }, "energy": { "$": 0 }, "engineer": { "$": 0 }, "engineering": { "$": 0 }, "enterprises": { "$": 0 }, "epost": { "$": 0 }, "epson": { "$": 0 }, "equipment": { "$": 0 }, "ericsson": { "$": 0 }, "erni": { "$": 0 }, "esq": { "$": 0 }, "estate": { "$": 0, "compute": { "*": { "$": 0 } } }, "esurance": { "$": 0 }, "etisalat": { "$": 0 }, "eurovision": { "$": 0 }, "eus": { "$": 0, "party": { "user": { "$": 0 } } }, "events": { "$": 0 }, "everbank": { "$": 0 }, "exchange": { "$": 0 }, "expert": { "$": 0 }, "exposed": { "$": 0 }, "express": { "$": 0 }, "extraspace": { "$": 0 }, "fage": { "$": 0 }, "fail": { "$": 0 }, "fairwinds": { "$": 0 }, "faith": { "$": 0, "ybo": { "$": 0 } }, "family": { "$": 0 }, "fan": { "$": 0 }, "fans": { "$": 0 }, "farm": { "$": 0, "storj": { "$": 0 } }, "farmers": { "$": 0 }, "fashion": { "$": 0 }, "fast": { "$": 0 }, "fedex": { "$": 0 }, "feedback": { "$": 0 }, "ferrari": { "$": 0 }, "ferrero": { "$": 0 }, "fiat": { "$": 0 }, "fidelity": { "$": 0 }, "fido": { "$": 0 }, "film": { "$": 0 }, "final": { "$": 0 }, "finance": { "$": 0 }, "financial": { "$": 0 }, "fire": { "$": 0 }, "firestone": { "$": 0 }, "firmdale": { "$": 0 }, "fish": { "$": 0 }, "fishing": { "$": 0 }, "fit": { "$": 0, "ptplus": { "$": 0 } }, "fitness": { "$": 0 }, "flickr": { "$": 0 }, "flights": { "$": 0 }, "flir": { "$": 0 }, "florist": { "$": 0 }, "flowers": { "$": 0 }, "fly": { "$": 0 }, "foo": { "$": 0 }, "food": { "$": 0 }, "foodnetwork": { "$": 0 }, "football": { "$": 0 }, "ford": { "$": 0 }, "forex": { "$": 0 }, "forsale": { "$": 0 }, "forum": { "$": 0 }, "foundation": { "$": 0 }, "fox": { "$": 0 }, "free": { "$": 0 }, "fresenius": { "$": 0 }, "frl": { "$": 0 }, "frogans": { "$": 0 }, "frontdoor": { "$": 0 }, "frontier": { "$": 0 }, "ftr": { "$": 0 }, "fujitsu": { "$": 0 }, "fujixerox": { "$": 0 }, "fun": { "$": 0 }, "fund": { "$": 0 }, "furniture": { "$": 0 }, "futbol": { "$": 0 }, "fyi": { "$": 0 }, "gal": { "$": 0 }, "gallery": { "$": 0 }, "gallo": { "$": 0 }, "gallup": { "$": 0 }, "game": { "$": 0 }, "games": { "$": 0 }, "gap": { "$": 0 }, "garden": { "$": 0 }, "gbiz": { "$": 0 }, "gdn": { "$": 0 }, "gea": { "$": 0 }, "gent": { "$": 0 }, "genting": { "$": 0 }, "george": { "$": 0 }, "ggee": { "$": 0 }, "gift": { "$": 0 }, "gifts": { "$": 0 }, "gives": { "$": 0 }, "giving": { "$": 0 }, "glade": { "$": 0 }, "glass": { "$": 0 }, "gle": { "$": 0 }, "global": { "$": 0 }, "globo": { "$": 0 }, "gmail": { "$": 0 }, "gmbh": { "$": 0 }, "gmo": { "$": 0 }, "gmx": { "$": 0 }, "godaddy": { "$": 0 }, "gold": { "$": 0 }, "goldpoint": { "$": 0 }, "golf": { "$": 0 }, "goo": { "$": 0 }, "goodhands": { "$": 0 }, "goodyear": { "$": 0 }, "goog": { "$": 0, "cloud": { "$": 0 } }, "google": { "$": 0 }, "gop": { "$": 0 }, "got": { "$": 0 }, "grainger": { "$": 0 }, "graphics": { "$": 0 }, "gratis": { "$": 0 }, "green": { "$": 0 }, "gripe": { "$": 0 }, "grocery": { "$": 0 }, "group": { "$": 0 }, "guardian": { "$": 0 }, "gucci": { "$": 0 }, "guge": { "$": 0 }, "guide": { "$": 0 }, "guitars": { "$": 0 }, "guru": { "$": 0 }, "hair": { "$": 0 }, "hamburg": { "$": 0 }, "hangout": { "$": 0 }, "haus": { "$": 0 }, "hbo": { "$": 0 }, "hdfc": { "$": 0 }, "hdfcbank": { "$": 0 }, "health": { "$": 0 }, "healthcare": { "$": 0 }, "help": { "$": 0 }, "helsinki": { "$": 0 }, "here": { "$": 0 }, "hermes": { "$": 0 }, "hgtv": { "$": 0 }, "hiphop": { "$": 0 }, "hisamitsu": { "$": 0 }, "hitachi": { "$": 0 }, "hiv": { "$": 0 }, "hkt": { "$": 0 }, "hockey": { "$": 0 }, "holdings": { "$": 0 }, "holiday": { "$": 0 }, "homedepot": { "$": 0 }, "homegoods": { "$": 0 }, "homes": { "$": 0 }, "homesense": { "$": 0 }, "honda": { "$": 0 }, "honeywell": { "$": 0 }, "horse": { "$": 0 }, "hospital": { "$": 0 }, "host": { "$": 0, "cloudaccess": { "$": 0 }, "freesite": { "$": 0 } }, "hosting": { "$": 0, "opencraft": { "$": 0 } }, "hot": { "$": 0 }, "hoteles": { "$": 0 }, "hotels": { "$": 0 }, "hotmail": { "$": 0 }, "house": { "$": 0 }, "how": { "$": 0 }, "hsbc": { "$": 0 }, "htc": { "$": 0 }, "hughes": { "$": 0 }, "hyatt": { "$": 0 }, "hyundai": { "$": 0 }, "ibm": { "$": 0 }, "icbc": { "$": 0 }, "ice": { "$": 0 }, "icu": { "$": 0 }, "ieee": { "$": 0 }, "ifm": { "$": 0 }, "ikano": { "$": 0 }, "imamat": { "$": 0 }, "imdb": { "$": 0 }, "immo": { "$": 0 }, "immobilien": { "$": 0 }, "industries": { "$": 0 }, "infiniti": { "$": 0 }, "ing": { "$": 0 }, "ink": { "$": 0 }, "institute": { "$": 0 }, "insurance": { "$": 0 }, "insure": { "$": 0 }, "intel": { "$": 0 }, "international": { "$": 0 }, "intuit": { "$": 0 }, "investments": { "$": 0 }, "ipiranga": { "$": 0 }, "irish": { "$": 0 }, "iselect": { "$": 0 }, "ismaili": { "$": 0 }, "ist": { "$": 0 }, "istanbul": { "$": 0 }, "itau": { "$": 0 }, "itv": { "$": 0 }, "iveco": { "$": 0 }, "iwc": { "$": 0 }, "jaguar": { "$": 0 }, "java": { "$": 0 }, "jcb": { "$": 0 }, "jcp": { "$": 0 }, "jeep": { "$": 0 }, "jetzt": { "$": 0 }, "jewelry": { "$": 0 }, "jio": { "$": 0 }, "jlc": { "$": 0 }, "jll": { "$": 0 }, "jmp": { "$": 0 }, "jnj": { "$": 0 }, "joburg": { "$": 0 }, "jot": { "$": 0 }, "joy": { "$": 0 }, "jpmorgan": { "$": 0 }, "jprs": { "$": 0 }, "juegos": { "$": 0 }, "juniper": { "$": 0 }, "kaufen": { "$": 0 }, "kddi": { "$": 0 }, "kerryhotels": { "$": 0 }, "kerrylogistics": { "$": 0 }, "kerryproperties": { "$": 0 }, "kfh": { "$": 0 }, "kia": { "$": 0 }, "kim": { "$": 0 }, "kinder": { "$": 0 }, "kindle": { "$": 0 }, "kitchen": { "$": 0 }, "kiwi": { "$": 0 }, "koeln": { "$": 0 }, "komatsu": { "$": 0 }, "kosher": { "$": 0 }, "kpmg": { "$": 0 }, "kpn": { "$": 0 }, "krd": { "$": 0, "co": { "$": 0 }, "edu": { "$": 0 } }, "kred": { "$": 0 }, "kuokgroup": { "$": 0 }, "kyoto": { "$": 0 }, "lacaixa": { "$": 0 }, "ladbrokes": { "$": 0 }, "lamborghini": { "$": 0 }, "lamer": { "$": 0 }, "lancaster": { "$": 0 }, "lancia": { "$": 0 }, "lancome": { "$": 0 }, "land": { "$": 0, "static": { "$": 0, "dev": { "$": 0 }, "sites": { "$": 0 } } }, "landrover": { "$": 0 }, "lanxess": { "$": 0 }, "lasalle": { "$": 0 }, "lat": { "$": 0 }, "latino": { "$": 0 }, "latrobe": { "$": 0 }, "law": { "$": 0 }, "lawyer": { "$": 0 }, "lds": { "$": 0 }, "lease": { "$": 0 }, "leclerc": { "$": 0 }, "lefrak": { "$": 0 }, "legal": { "$": 0 }, "lego": { "$": 0 }, "lexus": { "$": 0 }, "lgbt": { "$": 0 }, "liaison": { "$": 0 }, "lidl": { "$": 0 }, "life": { "$": 0 }, "lifeinsurance": { "$": 0 }, "lifestyle": { "$": 0 }, "lighting": { "$": 0 }, "like": { "$": 0 }, "lilly": { "$": 0 }, "limited": { "$": 0 }, "limo": { "$": 0 }, "lincoln": { "$": 0 }, "linde": { "$": 0 }, "link": { "$": 0, "cyon": { "$": 0 }, "mypep": { "$": 0 } }, "lipsy": { "$": 0 }, "live": { "$": 0 }, "living": { "$": 0 }, "lixil": { "$": 0 }, "loan": { "$": 0 }, "loans": { "$": 0 }, "locker": { "$": 0 }, "locus": { "$": 0 }, "loft": { "$": 0 }, "lol": { "$": 0 }, "london": { "$": 0 }, "lotte": { "$": 0 }, "lotto": { "$": 0 }, "love": { "$": 0 }, "lpl": { "$": 0 }, "lplfinancial": { "$": 0 }, "ltd": { "$": 0 }, "ltda": { "$": 0 }, "lundbeck": { "$": 0 }, "lupin": { "$": 0 }, "luxe": { "$": 0 }, "luxury": { "$": 0 }, "macys": { "$": 0 }, "madrid": { "$": 0 }, "maif": { "$": 0 }, "maison": { "$": 0 }, "makeup": { "$": 0 }, "man": { "$": 0 }, "management": { "$": 0, "router": { "$": 0 } }, "mango": { "$": 0 }, "map": { "$": 0 }, "market": { "$": 0 }, "marketing": { "$": 0 }, "markets": { "$": 0 }, "marriott": { "$": 0 }, "marshalls": { "$": 0 }, "maserati": { "$": 0 }, "mattel": { "$": 0 }, "mba": { "$": 0 }, "mcd": { "$": 0 }, "mcdonalds": { "$": 0 }, "mckinsey": { "$": 0 }, "med": { "$": 0 }, "media": { "$": 0 }, "meet": { "$": 0 }, "melbourne": { "$": 0 }, "meme": { "$": 0 }, "memorial": { "$": 0 }, "men": { "$": 0 }, "menu": { "$": 0 }, "meo": { "$": 0 }, "merckmsd": { "$": 0 }, "metlife": { "$": 0 }, "miami": { "$": 0 }, "microsoft": { "$": 0 }, "mini": { "$": 0 }, "mint": { "$": 0 }, "mit": { "$": 0 }, "mitsubishi": { "$": 0 }, "mlb": { "$": 0 }, "mls": { "$": 0 }, "mma": { "$": 0 }, "mobile": { "$": 0 }, "mobily": { "$": 0 }, "moda": { "$": 0 }, "moe": { "$": 0 }, "moi": { "$": 0 }, "mom": { "$": 0 }, "monash": { "$": 0 }, "money": { "$": 0 }, "monster": { "$": 0 }, "montblanc": { "$": 0 }, "mopar": { "$": 0 }, "mormon": { "$": 0 }, "mortgage": { "$": 0 }, "moscow": { "$": 0 }, "moto": { "$": 0 }, "motorcycles": { "$": 0 }, "mov": { "$": 0 }, "movie": { "$": 0 }, "movistar": { "$": 0 }, "msd": { "$": 0 }, "mtn": { "$": 0 }, "mtpc": { "$": 0 }, "mtr": { "$": 0 }, "mutual": { "$": 0 }, "nab": { "$": 0 }, "nadex": { "$": 0 }, "nagoya": { "$": 0 }, "nationwide": { "$": 0 }, "natura": { "$": 0 }, "navy": { "$": 0 }, "nba": { "$": 0 }, "nec": { "$": 0 }, "netbank": { "$": 0 }, "netflix": { "$": 0 }, "network": { "$": 0, "alces": { "*": { "$": 0 } } }, "neustar": { "$": 0 }, "new": { "$": 0 }, "newholland": { "$": 0 }, "news": { "$": 0 }, "next": { "$": 0 }, "nextdirect": { "$": 0 }, "nexus": { "$": 0 }, "nfl": { "$": 0 }, "ngo": { "$": 0 }, "nhk": { "$": 0 }, "nico": { "$": 0 }, "nike": { "$": 0 }, "nikon": { "$": 0 }, "ninja": { "$": 0 }, "nissan": { "$": 0 }, "nissay": { "$": 0 }, "nokia": { "$": 0 }, "northwesternmutual": { "$": 0 }, "norton": { "$": 0 }, "now": { "$": 0 }, "nowruz": { "$": 0 }, "nowtv": { "$": 0 }, "nra": { "$": 0 }, "nrw": { "$": 0 }, "ntt": { "$": 0 }, "nyc": { "$": 0 }, "obi": { "$": 0 }, "observer": { "$": 0 }, "off": { "$": 0 }, "office": { "$": 0 }, "okinawa": { "$": 0 }, "olayan": { "$": 0 }, "olayangroup": { "$": 0 }, "oldnavy": { "$": 0 }, "ollo": { "$": 0 }, "omega": { "$": 0 }, "one": { "$": 0, "homelink": { "$": 0 } }, "ong": { "$": 0 }, "onl": { "$": 0 }, "online": { "$": 0, "barsy": { "$": 0 } }, "onyourside": { "$": 0 }, "ooo": { "$": 0 }, "open": { "$": 0 }, "oracle": { "$": 0 }, "orange": { "$": 0 }, "organic": { "$": 0 }, "origins": { "$": 0 }, "osaka": { "$": 0 }, "otsuka": { "$": 0 }, "ott": { "$": 0 }, "ovh": { "$": 0, "nerdpol": { "$": 0 } }, "page": { "$": 0 }, "pamperedchef": { "$": 0 }, "panasonic": { "$": 0 }, "panerai": { "$": 0 }, "paris": { "$": 0 }, "pars": { "$": 0 }, "partners": { "$": 0 }, "parts": { "$": 0 }, "party": { "$": 0, "ybo": { "$": 0 } }, "passagens": { "$": 0 }, "pay": { "$": 0 }, "pccw": { "$": 0 }, "pet": { "$": 0 }, "pfizer": { "$": 0 }, "pharmacy": { "$": 0 }, "phd": { "$": 0 }, "philips": { "$": 0 }, "phone": { "$": 0 }, "photo": { "$": 0 }, "photography": { "$": 0 }, "photos": { "$": 0 }, "physio": { "$": 0 }, "piaget": { "$": 0 }, "pics": { "$": 0 }, "pictet": { "$": 0 }, "pictures": { "1337": { "$": 0 }, "$": 0 }, "pid": { "$": 0 }, "pin": { "$": 0 }, "ping": { "$": 0 }, "pink": { "$": 0 }, "pioneer": { "$": 0 }, "pizza": { "$": 0 }, "place": { "$": 0 }, "play": { "$": 0 }, "playstation": { "$": 0 }, "plumbing": { "$": 0 }, "plus": { "$": 0 }, "pnc": { "$": 0 }, "pohl": { "$": 0 }, "poker": { "$": 0 }, "politie": { "$": 0 }, "porn": { "$": 0 }, "pramerica": { "$": 0 }, "praxi": { "$": 0 }, "press": { "$": 0 }, "prime": { "$": 0 }, "prod": { "$": 0 }, "productions": { "$": 0 }, "prof": { "$": 0 }, "progressive": { "$": 0 }, "promo": { "$": 0 }, "properties": { "$": 0 }, "property": { "$": 0 }, "protection": { "$": 0 }, "pru": { "$": 0 }, "prudential": { "$": 0 }, "pub": { "$": 0 }, "pwc": { "$": 0 }, "qpon": { "$": 0 }, "quebec": { "$": 0 }, "quest": { "$": 0 }, "qvc": { "$": 0 }, "racing": { "$": 0 }, "radio": { "$": 0 }, "raid": { "$": 0 }, "read": { "$": 0 }, "realestate": { "$": 0 }, "realtor": { "$": 0 }, "realty": { "$": 0 }, "recipes": { "$": 0 }, "red": { "$": 0 }, "redstone": { "$": 0 }, "redumbrella": { "$": 0 }, "rehab": { "$": 0 }, "reise": { "$": 0 }, "reisen": { "$": 0 }, "reit": { "$": 0 }, "reliance": { "$": 0 }, "ren": { "$": 0 }, "rent": { "$": 0 }, "rentals": { "$": 0 }, "repair": { "$": 0 }, "report": { "$": 0 }, "republican": { "$": 0 }, "rest": { "$": 0 }, "restaurant": { "$": 0 }, "review": { "$": 0, "ybo": { "$": 0 } }, "reviews": { "$": 0 }, "rexroth": { "$": 0 }, "rich": { "$": 0 }, "richardli": { "$": 0 }, "ricoh": { "$": 0 }, "rightathome": { "$": 0 }, "ril": { "$": 0 }, "rio": { "$": 0 }, "rip": { "$": 0, "clan": { "$": 0 } }, "rmit": { "$": 0 }, "rocher": { "$": 0 }, "rocks": { "$": 0, "myddns": { "$": 0 }, "lima-city": { "$": 0 }, "webspace": { "$": 0 } }, "rodeo": { "$": 0 }, "rogers": { "$": 0 }, "room": { "$": 0 }, "rsvp": { "$": 0 }, "rugby": { "$": 0 }, "ruhr": { "$": 0 }, "run": { "$": 0 }, "rwe": { "$": 0 }, "ryukyu": { "$": 0 }, "saarland": { "$": 0 }, "safe": { "$": 0 }, "safety": { "$": 0 }, "sakura": { "$": 0 }, "sale": { "$": 0 }, "salon": { "$": 0 }, "samsclub": { "$": 0 }, "samsung": { "$": 0 }, "sandvik": { "$": 0 }, "sandvikcoromant": { "$": 0 }, "sanofi": { "$": 0 }, "sap": { "$": 0 }, "sapo": { "$": 0 }, "sarl": { "$": 0 }, "sas": { "$": 0 }, "save": { "$": 0 }, "saxo": { "$": 0 }, "sbi": { "$": 0 }, "sbs": { "$": 0 }, "sca": { "$": 0 }, "scb": { "$": 0 }, "schaeffler": { "$": 0 }, "schmidt": { "$": 0 }, "scholarships": { "$": 0 }, "school": { "$": 0 }, "schule": { "$": 0 }, "schwarz": { "$": 0 }, "science": { "$": 0, "ybo": { "$": 0 } }, "scjohnson": { "$": 0 }, "scor": { "$": 0 }, "scot": { "$": 0 }, "search": { "$": 0 }, "seat": { "$": 0 }, "secure": { "$": 0 }, "security": { "$": 0 }, "seek": { "$": 0 }, "select": { "$": 0 }, "sener": { "$": 0 }, "services": { "$": 0 }, "ses": { "$": 0 }, "seven": { "$": 0 }, "sew": { "$": 0 }, "sex": { "$": 0 }, "sexy": { "$": 0 }, "sfr": { "$": 0 }, "shangrila": { "$": 0 }, "sharp": { "$": 0 }, "shaw": { "$": 0 }, "shell": { "$": 0 }, "shia": { "$": 0 }, "shiksha": { "$": 0 }, "shoes": { "$": 0 }, "shop": { "$": 0 }, "shopping": { "$": 0 }, "shouji": { "$": 0 }, "show": { "$": 0 }, "showtime": { "$": 0 }, "shriram": { "$": 0 }, "silk": { "$": 0 }, "sina": { "$": 0 }, "singles": { "$": 0 }, "site": { "$": 0, "cyon": { "$": 0 }, "platformsh": { "*": { "$": 0 } }, "byen": { "$": 0 } }, "ski": { "$": 0 }, "skin": { "$": 0 }, "sky": { "$": 0 }, "skype": { "$": 0 }, "sling": { "$": 0 }, "smart": { "$": 0 }, "smile": { "$": 0 }, "sncf": { "$": 0 }, "soccer": { "$": 0 }, "social": { "$": 0 }, "softbank": { "$": 0 }, "software": { "$": 0 }, "sohu": { "$": 0 }, "solar": { "$": 0 }, "solutions": { "$": 0 }, "song": { "$": 0 }, "sony": { "$": 0 }, "soy": { "$": 0 }, "space": { "$": 0, "stackspace": { "$": 0 }, "uber": { "$": 0 }, "xs4all": { "$": 0 } }, "spiegel": { "$": 0 }, "spot": { "$": 0 }, "spreadbetting": { "$": 0 }, "srl": { "$": 0 }, "srt": { "$": 0 }, "stada": { "$": 0 }, "staples": { "$": 0 }, "star": { "$": 0 }, "starhub": { "$": 0 }, "statebank": { "$": 0 }, "statefarm": { "$": 0 }, "statoil": { "$": 0 }, "stc": { "$": 0 }, "stcgroup": { "$": 0 }, "stockholm": { "$": 0 }, "storage": { "$": 0 }, "store": { "$": 0 }, "stream": { "$": 0 }, "studio": { "$": 0 }, "study": { "$": 0 }, "style": { "$": 0 }, "sucks": { "$": 0 }, "supplies": { "$": 0 }, "supply": { "$": 0 }, "support": { "$": 0, "barsy": { "$": 0 } }, "surf": { "$": 0 }, "surgery": { "$": 0 }, "suzuki": { "$": 0 }, "swatch": { "$": 0 }, "swiftcover": { "$": 0 }, "swiss": { "$": 0 }, "sydney": { "$": 0 }, "symantec": { "$": 0 }, "systems": { "$": 0, "knightpoint": { "$": 0 } }, "tab": { "$": 0 }, "taipei": { "$": 0 }, "talk": { "$": 0 }, "taobao": { "$": 0 }, "target": { "$": 0 }, "tatamotors": { "$": 0 }, "tatar": { "$": 0 }, "tattoo": { "$": 0 }, "tax": { "$": 0 }, "taxi": { "$": 0 }, "tci": { "$": 0 }, "tdk": { "$": 0 }, "team": { "$": 0 }, "tech": { "$": 0 }, "technology": { "$": 0 }, "telecity": { "$": 0 }, "telefonica": { "$": 0 }, "temasek": { "$": 0 }, "tennis": { "$": 0 }, "teva": { "$": 0 }, "thd": { "$": 0 }, "theater": { "$": 0 }, "theatre": { "$": 0 }, "tiaa": { "$": 0 }, "tickets": { "$": 0 }, "tienda": { "$": 0 }, "tiffany": { "$": 0 }, "tips": { "$": 0 }, "tires": { "$": 0 }, "tirol": { "$": 0 }, "tjmaxx": { "$": 0 }, "tjx": { "$": 0 }, "tkmaxx": { "$": 0 }, "tmall": { "$": 0 }, "today": { "$": 0 }, "tokyo": { "$": 0 }, "tools": { "$": 0 }, "top": { "$": 0 }, "toray": { "$": 0 }, "toshiba": { "$": 0 }, "total": { "$": 0 }, "tours": { "$": 0 }, "town": { "$": 0 }, "toyota": { "$": 0 }, "toys": { "$": 0 }, "trade": { "$": 0, "ybo": { "$": 0 } }, "trading": { "$": 0 }, "training": { "$": 0 }, "travelchannel": { "$": 0 }, "travelers": { "$": 0 }, "travelersinsurance": { "$": 0 }, "trust": { "$": 0 }, "trv": { "$": 0 }, "tube": { "$": 0 }, "tui": { "$": 0 }, "tunes": { "$": 0 }, "tushu": { "$": 0 }, "tvs": { "$": 0 }, "ubank": { "$": 0 }, "ubs": { "$": 0 }, "uconnect": { "$": 0 }, "unicom": { "$": 0 }, "university": { "$": 0 }, "uno": { "$": 0 }, "uol": { "$": 0 }, "ups": { "$": 0 }, "vacations": { "$": 0 }, "vana": { "$": 0 }, "vanguard": { "$": 0 }, "vegas": { "$": 0 }, "ventures": { "$": 0 }, "verisign": { "$": 0 }, "versicherung": { "$": 0 }, "vet": { "$": 0 }, "viajes": { "$": 0 }, "video": { "$": 0 }, "vig": { "$": 0 }, "viking": { "$": 0 }, "villas": { "$": 0 }, "vin": { "$": 0 }, "vip": { "$": 0 }, "virgin": { "$": 0 }, "visa": { "$": 0 }, "vision": { "$": 0 }, "vista": { "$": 0 }, "vistaprint": { "$": 0 }, "viva": { "$": 0 }, "vivo": { "$": 0 }, "vlaanderen": { "$": 0 }, "vodka": { "$": 0 }, "volkswagen": { "$": 0 }, "volvo": { "$": 0 }, "vote": { "$": 0 }, "voting": { "$": 0 }, "voto": { "$": 0 }, "voyage": { "$": 0 }, "vuelos": { "$": 0 }, "wales": { "$": 0 }, "walmart": { "$": 0 }, "walter": { "$": 0 }, "wang": { "$": 0 }, "wanggou": { "$": 0 }, "warman": { "$": 0 }, "watch": { "$": 0 }, "watches": { "$": 0 }, "weather": { "$": 0 }, "weatherchannel": { "$": 0 }, "webcam": { "$": 0 }, "weber": { "$": 0 }, "website": { "$": 0 }, "wed": { "$": 0 }, "wedding": { "$": 0 }, "weibo": { "$": 0 }, "weir": { "$": 0 }, "whoswho": { "$": 0 }, "wien": { "$": 0 }, "wiki": { "$": 0 }, "williamhill": { "$": 0 }, "win": { "$": 0 }, "windows": { "$": 0 }, "wine": { "$": 0 }, "winners": { "$": 0 }, "wme": { "$": 0 }, "wolterskluwer": { "$": 0 }, "woodside": { "$": 0 }, "work": { "$": 0 }, "works": { "$": 0 }, "world": { "$": 0 }, "wow": { "$": 0 }, "wtc": { "$": 0 }, "wtf": { "$": 0 }, "xbox": { "$": 0 }, "xerox": { "$": 0 }, "xfinity": { "$": 0 }, "xihuan": { "$": 0 }, "xin": { "$": 0 }, "xn--11b4c3d": { "$": 0 }, "xn--1ck2e1b": { "$": 0 }, "xn--1qqw23a": { "$": 0 }, "xn--30rr7y": { "$": 0 }, "xn--3bst00m": { "$": 0 }, "xn--3ds443g": { "$": 0 }, "xn--3oq18vl8pn36a": { "$": 0 }, "xn--3pxu8k": { "$": 0 }, "xn--42c2d9a": { "$": 0 }, "xn--45q11c": { "$": 0 }, "xn--4gbrim": { "$": 0 }, "xn--55qw42g": { "$": 0 }, "xn--55qx5d": { "$": 0 }, "xn--5su34j936bgsg": { "$": 0 }, "xn--5tzm5g": { "$": 0 }, "xn--6frz82g": { "$": 0 }, "xn--6qq986b3xl": { "$": 0 }, "xn--80adxhks": { "$": 0 }, "xn--80aqecdr1a": { "$": 0 }, "xn--80asehdb": { "$": 0 }, "xn--80aswg": { "$": 0 }, "xn--8y0a063a": { "$": 0 }, "xn--9dbq2a": { "$": 0 }, "xn--9et52u": { "$": 0 }, "xn--9krt00a": { "$": 0 }, "xn--b4w605ferd": { "$": 0 }, "xn--bck1b9a5dre4c": { "$": 0 }, "xn--c1avg": { "$": 0 }, "xn--c2br7g": { "$": 0 }, "xn--cck2b3b": { "$": 0 }, "xn--cg4bki": { "$": 0 }, "xn--czr694b": { "$": 0 }, "xn--czrs0t": { "$": 0 }, "xn--czru2d": { "$": 0 }, "xn--d1acj3b": { "$": 0 }, "xn--eckvdtc9d": { "$": 0 }, "xn--efvy88h": { "$": 0 }, "xn--estv75g": { "$": 0 }, "xn--fct429k": { "$": 0 }, "xn--fhbei": { "$": 0 }, "xn--fiq228c5hs": { "$": 0 }, "xn--fiq64b": { "$": 0 }, "xn--fjq720a": { "$": 0 }, "xn--flw351e": { "$": 0 }, "xn--fzys8d69uvgm": { "$": 0 }, "xn--g2xx48c": { "$": 0 }, "xn--gckr3f0f": { "$": 0 }, "xn--gk3at1e": { "$": 0 }, "xn--hxt814e": { "$": 0 }, "xn--i1b6b1a6a2e": { "$": 0 }, "xn--imr513n": { "$": 0 }, "xn--io0a7i": { "$": 0 }, "xn--j1aef": { "$": 0 }, "xn--jlq61u9w7b": { "$": 0 }, "xn--jvr189m": { "$": 0 }, "xn--kcrx77d1x4a": { "$": 0 }, "xn--kpu716f": { "$": 0 }, "xn--kput3i": { "$": 0 }, "xn--mgba3a3ejt": { "$": 0 }, "xn--mgba7c0bbn0a": { "$": 0 }, "xn--mgbaakc7dvf": { "$": 0 }, "xn--mgbab2bd": { "$": 0 }, "xn--mgbb9fbpob": { "$": 0 }, "xn--mgbca7dzdo": { "$": 0 }, "xn--mgbi4ecexp": { "$": 0 }, "xn--mgbt3dhd": { "$": 0 }, "xn--mk1bu44c": { "$": 0 }, "xn--mxtq1m": { "$": 0 }, "xn--ngbc5azd": { "$": 0 }, "xn--ngbe9e0a": { "$": 0 }, "xn--ngbrx": { "$": 0 }, "xn--nqv7f": { "$": 0 }, "xn--nqv7fs00ema": { "$": 0 }, "xn--nyqy26a": { "$": 0 }, "xn--p1acf": { "$": 0 }, "xn--pbt977c": { "$": 0 }, "xn--pssy2u": { "$": 0 }, "xn--q9jyb4c": { "$": 0 }, "xn--qcka1pmc": { "$": 0 }, "xn--rhqv96g": { "$": 0 }, "xn--rovu88b": { "$": 0 }, "xn--ses554g": { "$": 0 }, "xn--t60b56a": { "$": 0 }, "xn--tckwe": { "$": 0 }, "xn--tiq49xqyj": { "$": 0 }, "xn--unup4y": { "$": 0 }, "xn--vermgensberater-ctb": { "$": 0 }, "xn--vermgensberatung-pwb": { "$": 0 }, "xn--vhquv": { "$": 0 }, "xn--vuq861b": { "$": 0 }, "xn--w4r85el8fhu5dnra": { "$": 0 }, "xn--w4rs40l": { "$": 0 }, "xn--xhq521b": { "$": 0 }, "xn--zfr164b": { "$": 0 }, "xperia": { "$": 0 }, "xyz": { "$": 0, "blogsite": { "$": 0 }, "fhapp": { "$": 0 } }, "yachts": { "$": 0 }, "yahoo": { "$": 0 }, "yamaxun": { "$": 0 }, "yandex": { "$": 0 }, "yodobashi": { "$": 0 }, "yoga": { "$": 0 }, "yokohama": { "$": 0 }, "you": { "$": 0 }, "youtube": { "$": 0 }, "yun": { "$": 0 }, "zappos": { "$": 0 }, "zara": { "$": 0 }, "zero": { "$": 0 }, "zip": { "$": 0 }, "zippo": { "$": 0 }, "zone": { "$": 0, "triton": { "*": { "$": 0 } }, "lima": { "$": 0 } }, "zuerich": { "$": 0 } } };
});
/*! https://mths.be/punycode v1.4.1 by @mathias */
;(function (root) {

	/** Detect free variables */
	var freeExports = typeof exports == 'object' && exports && !exports.nodeType && exports;
	var freeModule = typeof module == 'object' && module && !module.nodeType && module;
	var freeGlobal = typeof global == 'object' && global;
	if (freeGlobal.global === freeGlobal || freeGlobal.window === freeGlobal || freeGlobal.self === freeGlobal) {
		root = freeGlobal;
	}

	/**
  * The `punycode` object.
  * @name punycode
  * @type Object
  */
	var punycode,


	/** Highest positive signed 32-bit float value */
	maxInt = 2147483647,
	    // aka. 0x7FFFFFFF or 2^31-1

	/** Bootstring parameters */
	base = 36,
	    tMin = 1,
	    tMax = 26,
	    skew = 38,
	    damp = 700,
	    initialBias = 72,
	    initialN = 128,
	    // 0x80
	delimiter = '-',
	    // '\x2D'

	/** Regular expressions */
	regexPunycode = /^xn--/,
	    regexNonASCII = /[^\x20-\x7E]/,
	    // unprintable ASCII chars + non-ASCII chars
	regexSeparators = /[\x2E\u3002\uFF0E\uFF61]/g,
	    // RFC 3490 separators

	/** Error messages */
	errors = {
		'overflow': 'Overflow: input needs wider integers to process',
		'not-basic': 'Illegal input >= 0x80 (not a basic code point)',
		'invalid-input': 'Invalid input'
	},


	/** Convenience shortcuts */
	baseMinusTMin = base - tMin,
	    floor = Math.floor,
	    stringFromCharCode = String.fromCharCode,


	/** Temporary variable */
	key;

	/*--------------------------------------------------------------------------*/

	/**
  * A generic error utility function.
  * @private
  * @param {String} type The error type.
  * @returns {Error} Throws a `RangeError` with the applicable error message.
  */
	function error(type) {
		throw new RangeError(errors[type]);
	}

	/**
  * A generic `Array#map` utility function.
  * @private
  * @param {Array} array The array to iterate over.
  * @param {Function} callback The function that gets called for every array
  * item.
  * @returns {Array} A new array of values returned by the callback function.
  */
	function map(array, fn) {
		var length = array.length;
		var result = [];
		while (length--) {
			result[length] = fn(array[length]);
		}
		return result;
	}

	/**
  * A simple `Array#map`-like wrapper to work with domain name strings or email
  * addresses.
  * @private
  * @param {String} domain The domain name or email address.
  * @param {Function} callback The function that gets called for every
  * character.
  * @returns {Array} A new string of characters returned by the callback
  * function.
  */
	function mapDomain(string, fn) {
		var parts = string.split('@');
		var result = '';
		if (parts.length > 1) {
			// In email addresses, only the domain name should be punycoded. Leave
			// the local part (i.e. everything up to `@`) intact.
			result = parts[0] + '@';
			string = parts[1];
		}
		// Avoid `split(regex)` for IE8 compatibility. See #17.
		string = string.replace(regexSeparators, '\x2E');
		var labels = string.split('.');
		var encoded = map(labels, fn).join('.');
		return result + encoded;
	}

	/**
  * Creates an array containing the numeric code points of each Unicode
  * character in the string. While JavaScript uses UCS-2 internally,
  * this function will convert a pair of surrogate halves (each of which
  * UCS-2 exposes as separate characters) into a single code point,
  * matching UTF-16.
  * @see `punycode.ucs2.encode`
  * @see <https://mathiasbynens.be/notes/javascript-encoding>
  * @memberOf punycode.ucs2
  * @name decode
  * @param {String} string The Unicode input string (UCS-2).
  * @returns {Array} The new array of code points.
  */
	function ucs2decode(string) {
		var output = [],
		    counter = 0,
		    length = string.length,
		    value,
		    extra;
		while (counter < length) {
			value = string.charCodeAt(counter++);
			if (value >= 0xD800 && value <= 0xDBFF && counter < length) {
				// high surrogate, and there is a next character
				extra = string.charCodeAt(counter++);
				if ((extra & 0xFC00) == 0xDC00) {
					// low surrogate
					output.push(((value & 0x3FF) << 10) + (extra & 0x3FF) + 0x10000);
				} else {
					// unmatched surrogate; only append this code unit, in case the next
					// code unit is the high surrogate of a surrogate pair
					output.push(value);
					counter--;
				}
			} else {
				output.push(value);
			}
		}
		return output;
	}

	/**
  * Creates a string based on an array of numeric code points.
  * @see `punycode.ucs2.decode`
  * @memberOf punycode.ucs2
  * @name encode
  * @param {Array} codePoints The array of numeric code points.
  * @returns {String} The new Unicode string (UCS-2).
  */
	function ucs2encode(array) {
		return map(array, function (value) {
			var output = '';
			if (value > 0xFFFF) {
				value -= 0x10000;
				output += stringFromCharCode(value >>> 10 & 0x3FF | 0xD800);
				value = 0xDC00 | value & 0x3FF;
			}
			output += stringFromCharCode(value);
			return output;
		}).join('');
	}

	/**
  * Converts a basic code point into a digit/integer.
  * @see `digitToBasic()`
  * @private
  * @param {Number} codePoint The basic numeric code point value.
  * @returns {Number} The numeric value of a basic code point (for use in
  * representing integers) in the range `0` to `base - 1`, or `base` if
  * the code point does not represent a value.
  */
	function basicToDigit(codePoint) {
		if (codePoint - 48 < 10) {
			return codePoint - 22;
		}
		if (codePoint - 65 < 26) {
			return codePoint - 65;
		}
		if (codePoint - 97 < 26) {
			return codePoint - 97;
		}
		return base;
	}

	/**
  * Converts a digit/integer into a basic code point.
  * @see `basicToDigit()`
  * @private
  * @param {Number} digit The numeric value of a basic code point.
  * @returns {Number} The basic code point whose value (when used for
  * representing integers) is `digit`, which needs to be in the range
  * `0` to `base - 1`. If `flag` is non-zero, the uppercase form is
  * used; else, the lowercase form is used. The behavior is undefined
  * if `flag` is non-zero and `digit` has no uppercase form.
  */
	function digitToBasic(digit, flag) {
		//  0..25 map to ASCII a..z or A..Z
		// 26..35 map to ASCII 0..9
		return digit + 22 + 75 * (digit < 26) - ((flag != 0) << 5);
	}

	/**
  * Bias adaptation function as per section 3.4 of RFC 3492.
  * https://tools.ietf.org/html/rfc3492#section-3.4
  * @private
  */
	function adapt(delta, numPoints, firstTime) {
		var k = 0;
		delta = firstTime ? floor(delta / damp) : delta >> 1;
		delta += floor(delta / numPoints);
		for (; /* no initialization */delta > baseMinusTMin * tMax >> 1; k += base) {
			delta = floor(delta / baseMinusTMin);
		}
		return floor(k + (baseMinusTMin + 1) * delta / (delta + skew));
	}

	/**
  * Converts a Punycode string of ASCII-only symbols to a string of Unicode
  * symbols.
  * @memberOf punycode
  * @param {String} input The Punycode string of ASCII-only symbols.
  * @returns {String} The resulting string of Unicode symbols.
  */
	function decode(input) {
		// Don't use UCS-2
		var output = [],
		    inputLength = input.length,
		    out,
		    i = 0,
		    n = initialN,
		    bias = initialBias,
		    basic,
		    j,
		    index,
		    oldi,
		    w,
		    k,
		    digit,
		    t,

		/** Cached calculation results */
		baseMinusT;

		// Handle the basic code points: let `basic` be the number of input code
		// points before the last delimiter, or `0` if there is none, then copy
		// the first basic code points to the output.

		basic = input.lastIndexOf(delimiter);
		if (basic < 0) {
			basic = 0;
		}

		for (j = 0; j < basic; ++j) {
			// if it's not a basic code point
			if (input.charCodeAt(j) >= 0x80) {
				error('not-basic');
			}
			output.push(input.charCodeAt(j));
		}

		// Main decoding loop: start just after the last delimiter if any basic code
		// points were copied; start at the beginning otherwise.

		for (index = basic > 0 ? basic + 1 : 0; index < inputLength;) /* no final expression */{

			// `index` is the index of the next character to be consumed.
			// Decode a generalized variable-length integer into `delta`,
			// which gets added to `i`. The overflow checking is easier
			// if we increase `i` as we go, then subtract off its starting
			// value at the end to obtain `delta`.
			for (oldi = i, w = 1, k = base;; /* no condition */k += base) {

				if (index >= inputLength) {
					error('invalid-input');
				}

				digit = basicToDigit(input.charCodeAt(index++));

				if (digit >= base || digit > floor((maxInt - i) / w)) {
					error('overflow');
				}

				i += digit * w;
				t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;

				if (digit < t) {
					break;
				}

				baseMinusT = base - t;
				if (w > floor(maxInt / baseMinusT)) {
					error('overflow');
				}

				w *= baseMinusT;
			}

			out = output.length + 1;
			bias = adapt(i - oldi, out, oldi == 0);

			// `i` was supposed to wrap around from `out` to `0`,
			// incrementing `n` each time, so we'll fix that now:
			if (floor(i / out) > maxInt - n) {
				error('overflow');
			}

			n += floor(i / out);
			i %= out;

			// Insert `n` at position `i` of the output
			output.splice(i++, 0, n);
		}

		return ucs2encode(output);
	}

	/**
  * Converts a string of Unicode symbols (e.g. a domain name label) to a
  * Punycode string of ASCII-only symbols.
  * @memberOf punycode
  * @param {String} input The string of Unicode symbols.
  * @returns {String} The resulting Punycode string of ASCII-only symbols.
  */
	function encode(input) {
		var n,
		    delta,
		    handledCPCount,
		    basicLength,
		    bias,
		    j,
		    m,
		    q,
		    k,
		    t,
		    currentValue,
		    output = [],

		/** `inputLength` will hold the number of code points in `input`. */
		inputLength,

		/** Cached calculation results */
		handledCPCountPlusOne,
		    baseMinusT,
		    qMinusT;

		// Convert the input in UCS-2 to Unicode
		input = ucs2decode(input);

		// Cache the length
		inputLength = input.length;

		// Initialize the state
		n = initialN;
		delta = 0;
		bias = initialBias;

		// Handle the basic code points
		for (j = 0; j < inputLength; ++j) {
			currentValue = input[j];
			if (currentValue < 0x80) {
				output.push(stringFromCharCode(currentValue));
			}
		}

		handledCPCount = basicLength = output.length;

		// `handledCPCount` is the number of code points that have been handled;
		// `basicLength` is the number of basic code points.

		// Finish the basic string - if it is not empty - with a delimiter
		if (basicLength) {
			output.push(delimiter);
		}

		// Main encoding loop:
		while (handledCPCount < inputLength) {

			// All non-basic code points < n have been handled already. Find the next
			// larger one:
			for (m = maxInt, j = 0; j < inputLength; ++j) {
				currentValue = input[j];
				if (currentValue >= n && currentValue < m) {
					m = currentValue;
				}
			}

			// Increase `delta` enough to advance the decoder's <n,i> state to <m,0>,
			// but guard against overflow
			handledCPCountPlusOne = handledCPCount + 1;
			if (m - n > floor((maxInt - delta) / handledCPCountPlusOne)) {
				error('overflow');
			}

			delta += (m - n) * handledCPCountPlusOne;
			n = m;

			for (j = 0; j < inputLength; ++j) {
				currentValue = input[j];

				if (currentValue < n && ++delta > maxInt) {
					error('overflow');
				}

				if (currentValue == n) {
					// Represent delta as a generalized variable-length integer
					for (q = delta, k = base;; /* no condition */k += base) {
						t = k <= bias ? tMin : k >= bias + tMax ? tMax : k - bias;
						if (q < t) {
							break;
						}
						qMinusT = q - t;
						baseMinusT = base - t;
						output.push(stringFromCharCode(digitToBasic(t + qMinusT % baseMinusT, 0)));
						q = floor(qMinusT / baseMinusT);
					}

					output.push(stringFromCharCode(digitToBasic(q, 0)));
					bias = adapt(delta, handledCPCountPlusOne, handledCPCount == basicLength);
					delta = 0;
					++handledCPCount;
				}
			}

			++delta;
			++n;
		}
		return output.join('');
	}

	/**
  * Converts a Punycode string representing a domain name or an email address
  * to Unicode. Only the Punycoded parts of the input will be converted, i.e.
  * it doesn't matter if you call it on a string that has already been
  * converted to Unicode.
  * @memberOf punycode
  * @param {String} input The Punycoded domain name or email address to
  * convert to Unicode.
  * @returns {String} The Unicode representation of the given Punycode
  * string.
  */
	function toUnicode(input) {
		return mapDomain(input, function (string) {
			return regexPunycode.test(string) ? decode(string.slice(4).toLowerCase()) : string;
		});
	}

	/**
  * Converts a Unicode string representing a domain name or an email address to
  * Punycode. Only the non-ASCII parts of the domain name will be converted,
  * i.e. it doesn't matter if you call it with a domain that's already in
  * ASCII.
  * @memberOf punycode
  * @param {String} input The domain name or email address to convert, as a
  * Unicode string.
  * @returns {String} The Punycode representation of the given domain name or
  * email address.
  */
	function toASCII(input) {
		return mapDomain(input, function (string) {
			return regexNonASCII.test(string) ? 'xn--' + encode(string) : string;
		});
	}

	/*--------------------------------------------------------------------------*/

	/** Define the public API */
	punycode = {
		/**
   * A string representing the current Punycode.js version number.
   * @memberOf punycode
   * @type String
   */
		'version': '1.4.1',
		/**
   * An object of methods to convert from JavaScript's internal character
   * representation (UCS-2) to Unicode code points, and back.
   * @see <https://mathiasbynens.be/notes/javascript-encoding>
   * @memberOf punycode
   * @type Object
   */
		'ucs2': {
			'decode': ucs2decode,
			'encode': ucs2encode
		},
		'decode': decode,
		'encode': encode,
		'toASCII': toASCII,
		'toUnicode': toUnicode
	};

	/** Expose `punycode` */
	// Some AMD build optimizers, like r.js, check for specific condition patterns
	// like the following:
	if ('function' == 'function' && 'object' == 'object' && true) {
		$__System.registerDynamic('d', [], false, function ($__require, $__exports, $__module) {
			return (function () {
				return punycode;
			}).call(this);
		});
	} else if (freeExports && freeModule) {
		if (module.exports == freeExports) {
			// in Node.js, io.js, or RingoJS v0.8.0+
			freeModule.exports = punycode;
		} else {
			// in Narwhal or RingoJS v0.7.0-
			for (key in punycode) {
				punycode.hasOwnProperty(key) && (freeExports[key] = punycode[key]);
			}
		}
	} else {
		// in Rhino or a web browser
		root.punycode = punycode;
	}
})(this);
$__System.registerDynamic('e', [], true, function ($__require, exports, module) {
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  'use strict';

  // If obj.hasOwnProperty has been overridden, then calling
  // obj.hasOwnProperty(prop) will break.
  // See: https://github.com/joyent/node/issues/1707

  var global = this || self,
      GLOBAL = global;
  function hasOwnProperty(obj, prop) {
    return Object.prototype.hasOwnProperty.call(obj, prop);
  }

  module.exports = function (qs, sep, eq, options) {
    sep = sep || '&';
    eq = eq || '=';
    var obj = {};

    if (typeof qs !== 'string' || qs.length === 0) {
      return obj;
    }

    var regexp = /\+/g;
    qs = qs.split(sep);

    var maxKeys = 1000;
    if (options && typeof options.maxKeys === 'number') {
      maxKeys = options.maxKeys;
    }

    var len = qs.length;
    // maxKeys <= 0 means that we should not limit keys count
    if (maxKeys > 0 && len > maxKeys) {
      len = maxKeys;
    }

    for (var i = 0; i < len; ++i) {
      var x = qs[i].replace(regexp, '%20'),
          idx = x.indexOf(eq),
          kstr,
          vstr,
          k,
          v;

      if (idx >= 0) {
        kstr = x.substr(0, idx);
        vstr = x.substr(idx + 1);
      } else {
        kstr = x;
        vstr = '';
      }

      k = decodeURIComponent(kstr);
      v = decodeURIComponent(vstr);

      if (!hasOwnProperty(obj, k)) {
        obj[k] = v;
      } else if (Array.isArray(obj[k])) {
        obj[k].push(v);
      } else {
        obj[k] = [obj[k], v];
      }
    }

    return obj;
  };
});
$__System.registerDynamic('f', [], true, function ($__require, exports, module) {
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  'use strict';

  var global = this || self,
      GLOBAL = global;
  var stringifyPrimitive = function (v) {
    switch (typeof v) {
      case 'string':
        return v;

      case 'boolean':
        return v ? 'true' : 'false';

      case 'number':
        return isFinite(v) ? v : '';

      default:
        return '';
    }
  };

  module.exports = function (obj, sep, eq, name) {
    sep = sep || '&';
    eq = eq || '=';
    if (obj === null) {
      obj = undefined;
    }

    if (typeof obj === 'object') {
      return Object.keys(obj).map(function (k) {
        var ks = encodeURIComponent(stringifyPrimitive(k)) + eq;
        if (Array.isArray(obj[k])) {
          return obj[k].map(function (v) {
            return ks + encodeURIComponent(stringifyPrimitive(v));
          }).join(sep);
        } else {
          return ks + encodeURIComponent(stringifyPrimitive(obj[k]));
        }
      }).join(sep);
    }

    if (!name) return '';
    return encodeURIComponent(stringifyPrimitive(name)) + eq + encodeURIComponent(stringifyPrimitive(obj));
  };
});
$__System.registerDynamic('10', ['e', 'f'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  exports.decode = exports.parse = $__require('e');
  exports.encode = exports.stringify = $__require('f');
});
$__System.registerDynamic('11', ['d', '10'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;
  // Copyright Joyent, Inc. and other Node contributors.
  //
  // Permission is hereby granted, free of charge, to any person obtaining a
  // copy of this software and associated documentation files (the
  // "Software"), to deal in the Software without restriction, including
  // without limitation the rights to use, copy, modify, merge, publish,
  // distribute, sublicense, and/or sell copies of the Software, and to permit
  // persons to whom the Software is furnished to do so, subject to the
  // following conditions:
  //
  // The above copyright notice and this permission notice shall be included
  // in all copies or substantial portions of the Software.
  //
  // THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
  // OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
  // MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
  // NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
  // DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
  // OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
  // USE OR OTHER DEALINGS IN THE SOFTWARE.

  var punycode = $__require('d');

  exports.parse = urlParse;
  exports.resolve = urlResolve;
  exports.resolveObject = urlResolveObject;
  exports.format = urlFormat;

  exports.Url = Url;

  function Url() {
    this.protocol = null;
    this.slashes = null;
    this.auth = null;
    this.host = null;
    this.port = null;
    this.hostname = null;
    this.hash = null;
    this.search = null;
    this.query = null;
    this.pathname = null;
    this.path = null;
    this.href = null;
  }

  // Reference: RFC 3986, RFC 1808, RFC 2396

  // define these here so at least they only have to be
  // compiled once on the first module load.
  var protocolPattern = /^([a-z0-9.+-]+:)/i,
      portPattern = /:[0-9]*$/,


  // RFC 2396: characters reserved for delimiting URLs.
  // We actually just auto-escape these.
  delims = ['<', '>', '"', '`', ' ', '\r', '\n', '\t'],


  // RFC 2396: characters not allowed for various reasons.
  unwise = ['{', '}', '|', '\\', '^', '`'].concat(delims),


  // Allowed by RFCs, but cause of XSS attacks.  Always escape these.
  autoEscape = ['\''].concat(unwise),

  // Characters that are never ever allowed in a hostname.
  // Note that any invalid chars are also handled, but these
  // are the ones that are *expected* to be seen, so we fast-path
  // them.
  nonHostChars = ['%', '/', '?', ';', '#'].concat(autoEscape),
      hostEndingChars = ['/', '?', '#'],
      hostnameMaxLen = 255,
      hostnamePartPattern = /^[a-z0-9A-Z_-]{0,63}$/,
      hostnamePartStart = /^([a-z0-9A-Z_-]{0,63})(.*)$/,

  // protocols that can allow "unsafe" and "unwise" chars.
  unsafeProtocol = {
    'javascript': true,
    'javascript:': true
  },

  // protocols that never have a hostname.
  hostlessProtocol = {
    'javascript': true,
    'javascript:': true
  },

  // protocols that always contain a // bit.
  slashedProtocol = {
    'http': true,
    'https': true,
    'ftp': true,
    'gopher': true,
    'file': true,
    'http:': true,
    'https:': true,
    'ftp:': true,
    'gopher:': true,
    'file:': true
  },
      querystring = $__require('10');

  function urlParse(url, parseQueryString, slashesDenoteHost) {
    if (url && isObject(url) && url instanceof Url) return url;

    var u = new Url();
    u.parse(url, parseQueryString, slashesDenoteHost);
    return u;
  }

  Url.prototype.parse = function (url, parseQueryString, slashesDenoteHost) {
    if (!isString(url)) {
      throw new TypeError("Parameter 'url' must be a string, not " + typeof url);
    }

    var rest = url;

    // trim before proceeding.
    // This is to support parse stuff like "  http://foo.com  \n"
    rest = rest.trim();

    var proto = protocolPattern.exec(rest);
    if (proto) {
      proto = proto[0];
      var lowerProto = proto.toLowerCase();
      this.protocol = lowerProto;
      rest = rest.substr(proto.length);
    }

    // figure out if it's got a host
    // user@server is *always* interpreted as a hostname, and url
    // resolution will treat //foo/bar as host=foo,path=bar because that's
    // how the browser resolves relative URLs.
    if (slashesDenoteHost || proto || rest.match(/^\/\/[^@\/]+@[^@\/]+/)) {
      var slashes = rest.substr(0, 2) === '//';
      if (slashes && !(proto && hostlessProtocol[proto])) {
        rest = rest.substr(2);
        this.slashes = true;
      }
    }

    if (!hostlessProtocol[proto] && (slashes || proto && !slashedProtocol[proto])) {

      // there's a hostname.
      // the first instance of /, ?, ;, or # ends the host.
      //
      // If there is an @ in the hostname, then non-host chars *are* allowed
      // to the left of the last @ sign, unless some host-ending character
      // comes *before* the @-sign.
      // URLs are obnoxious.
      //
      // ex:
      // http://a@b@c/ => user:a@b host:c
      // http://a@b?@c => user:a host:c path:/?@c

      // v0.12 TODO(isaacs): This is not quite how Chrome does things.
      // Review our test case against browsers more comprehensively.

      // find the first instance of any hostEndingChars
      var hostEnd = -1;
      for (var i = 0; i < hostEndingChars.length; i++) {
        var hec = rest.indexOf(hostEndingChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }

      // at this point, either we have an explicit point where the
      // auth portion cannot go past, or the last @ char is the decider.
      var auth, atSign;
      if (hostEnd === -1) {
        // atSign can be anywhere.
        atSign = rest.lastIndexOf('@');
      } else {
        // atSign must be in auth portion.
        // http://a@b/c@d => host:b auth:a path:/c@d
        atSign = rest.lastIndexOf('@', hostEnd);
      }

      // Now we have a portion which is definitely the auth.
      // Pull that off.
      if (atSign !== -1) {
        auth = rest.slice(0, atSign);
        rest = rest.slice(atSign + 1);
        this.auth = decodeURIComponent(auth);
      }

      // the host is the remaining to the left of the first non-host char
      hostEnd = -1;
      for (var i = 0; i < nonHostChars.length; i++) {
        var hec = rest.indexOf(nonHostChars[i]);
        if (hec !== -1 && (hostEnd === -1 || hec < hostEnd)) hostEnd = hec;
      }
      // if we still have not hit it, then the entire thing is a host.
      if (hostEnd === -1) hostEnd = rest.length;

      this.host = rest.slice(0, hostEnd);
      rest = rest.slice(hostEnd);

      // pull out port.
      this.parseHost();

      // we've indicated that there is a hostname,
      // so even if it's empty, it has to be present.
      this.hostname = this.hostname || '';

      // if hostname begins with [ and ends with ]
      // assume that it's an IPv6 address.
      var ipv6Hostname = this.hostname[0] === '[' && this.hostname[this.hostname.length - 1] === ']';

      // validate a little.
      if (!ipv6Hostname) {
        var hostparts = this.hostname.split(/\./);
        for (var i = 0, l = hostparts.length; i < l; i++) {
          var part = hostparts[i];
          if (!part) continue;
          if (!part.match(hostnamePartPattern)) {
            var newpart = '';
            for (var j = 0, k = part.length; j < k; j++) {
              if (part.charCodeAt(j) > 127) {
                // we replace non-ASCII char with a temporary placeholder
                // we need this to make sure size of hostname is not
                // broken by replacing non-ASCII by nothing
                newpart += 'x';
              } else {
                newpart += part[j];
              }
            }
            // we test again with ASCII char only
            if (!newpart.match(hostnamePartPattern)) {
              var validParts = hostparts.slice(0, i);
              var notHost = hostparts.slice(i + 1);
              var bit = part.match(hostnamePartStart);
              if (bit) {
                validParts.push(bit[1]);
                notHost.unshift(bit[2]);
              }
              if (notHost.length) {
                rest = '/' + notHost.join('.') + rest;
              }
              this.hostname = validParts.join('.');
              break;
            }
          }
        }
      }

      if (this.hostname.length > hostnameMaxLen) {
        this.hostname = '';
      } else {
        // hostnames are always lower case.
        this.hostname = this.hostname.toLowerCase();
      }

      if (!ipv6Hostname) {
        // IDNA Support: Returns a puny coded representation of "domain".
        // It only converts the part of the domain name that
        // has non ASCII characters. I.e. it dosent matter if
        // you call it with a domain that already is in ASCII.
        var domainArray = this.hostname.split('.');
        var newOut = [];
        for (var i = 0; i < domainArray.length; ++i) {
          var s = domainArray[i];
          newOut.push(s.match(/[^A-Za-z0-9_-]/) ? 'xn--' + punycode.encode(s) : s);
        }
        this.hostname = newOut.join('.');
      }

      var p = this.port ? ':' + this.port : '';
      var h = this.hostname || '';
      this.host = h + p;
      this.href += this.host;

      // strip [ and ] from the hostname
      // the host field still retains them, though
      if (ipv6Hostname) {
        this.hostname = this.hostname.substr(1, this.hostname.length - 2);
        if (rest[0] !== '/') {
          rest = '/' + rest;
        }
      }
    }

    // now rest is set to the post-host stuff.
    // chop off any delim chars.
    if (!unsafeProtocol[lowerProto]) {

      // First, make 100% sure that any "autoEscape" chars get
      // escaped, even if encodeURIComponent doesn't think they
      // need to be.
      for (var i = 0, l = autoEscape.length; i < l; i++) {
        var ae = autoEscape[i];
        var esc = encodeURIComponent(ae);
        if (esc === ae) {
          esc = escape(ae);
        }
        rest = rest.split(ae).join(esc);
      }
    }

    // chop off from the tail first.
    var hash = rest.indexOf('#');
    if (hash !== -1) {
      // got a fragment string.
      this.hash = rest.substr(hash);
      rest = rest.slice(0, hash);
    }
    var qm = rest.indexOf('?');
    if (qm !== -1) {
      this.search = rest.substr(qm);
      this.query = rest.substr(qm + 1);
      if (parseQueryString) {
        this.query = querystring.parse(this.query);
      }
      rest = rest.slice(0, qm);
    } else if (parseQueryString) {
      // no query string, but parseQueryString still requested
      this.search = '';
      this.query = {};
    }
    if (rest) this.pathname = rest;
    if (slashedProtocol[lowerProto] && this.hostname && !this.pathname) {
      this.pathname = '/';
    }

    //to support http.request
    if (this.pathname || this.search) {
      var p = this.pathname || '';
      var s = this.search || '';
      this.path = p + s;
    }

    // finally, reconstruct the href based on what has been validated.
    this.href = this.format();
    return this;
  };

  // format a parsed object into a url string
  function urlFormat(obj) {
    // ensure it's an object, and not a string url.
    // If it's an obj, this is a no-op.
    // this way, you can call url_format() on strings
    // to clean up potentially wonky urls.
    if (isString(obj)) obj = urlParse(obj);
    if (!(obj instanceof Url)) return Url.prototype.format.call(obj);
    return obj.format();
  }

  Url.prototype.format = function () {
    var auth = this.auth || '';
    if (auth) {
      auth = encodeURIComponent(auth);
      auth = auth.replace(/%3A/i, ':');
      auth += '@';
    }

    var protocol = this.protocol || '',
        pathname = this.pathname || '',
        hash = this.hash || '',
        host = false,
        query = '';

    if (this.host) {
      host = auth + this.host;
    } else if (this.hostname) {
      host = auth + (this.hostname.indexOf(':') === -1 ? this.hostname : '[' + this.hostname + ']');
      if (this.port) {
        host += ':' + this.port;
      }
    }

    if (this.query && isObject(this.query) && Object.keys(this.query).length) {
      query = querystring.stringify(this.query);
    }

    var search = this.search || query && '?' + query || '';

    if (protocol && protocol.substr(-1) !== ':') protocol += ':';

    // only the slashedProtocols get the //.  Not mailto:, xmpp:, etc.
    // unless they had them to begin with.
    if (this.slashes || (!protocol || slashedProtocol[protocol]) && host !== false) {
      host = '//' + (host || '');
      if (pathname && pathname.charAt(0) !== '/') pathname = '/' + pathname;
    } else if (!host) {
      host = '';
    }

    if (hash && hash.charAt(0) !== '#') hash = '#' + hash;
    if (search && search.charAt(0) !== '?') search = '?' + search;

    pathname = pathname.replace(/[?#]/g, function (match) {
      return encodeURIComponent(match);
    });
    search = search.replace('#', '%23');

    return protocol + host + pathname + search + hash;
  };

  function urlResolve(source, relative) {
    return urlParse(source, false, true).resolve(relative);
  }

  Url.prototype.resolve = function (relative) {
    return this.resolveObject(urlParse(relative, false, true)).format();
  };

  function urlResolveObject(source, relative) {
    if (!source) return relative;
    return urlParse(source, false, true).resolveObject(relative);
  }

  Url.prototype.resolveObject = function (relative) {
    if (isString(relative)) {
      var rel = new Url();
      rel.parse(relative, false, true);
      relative = rel;
    }

    var result = new Url();
    Object.keys(this).forEach(function (k) {
      result[k] = this[k];
    }, this);

    // hash is always overridden, no matter what.
    // even href="" will remove it.
    result.hash = relative.hash;

    // if the relative url is empty, then there's nothing left to do here.
    if (relative.href === '') {
      result.href = result.format();
      return result;
    }

    // hrefs like //foo/bar always cut to the protocol.
    if (relative.slashes && !relative.protocol) {
      // take everything except the protocol from relative
      Object.keys(relative).forEach(function (k) {
        if (k !== 'protocol') result[k] = relative[k];
      });

      //urlParse appends trailing / to urls like http://www.example.com
      if (slashedProtocol[result.protocol] && result.hostname && !result.pathname) {
        result.path = result.pathname = '/';
      }

      result.href = result.format();
      return result;
    }

    if (relative.protocol && relative.protocol !== result.protocol) {
      // if it's a known url protocol, then changing
      // the protocol does weird things
      // first, if it's not file:, then we MUST have a host,
      // and if there was a path
      // to begin with, then we MUST have a path.
      // if it is file:, then the host is dropped,
      // because that's known to be hostless.
      // anything else is assumed to be absolute.
      if (!slashedProtocol[relative.protocol]) {
        Object.keys(relative).forEach(function (k) {
          result[k] = relative[k];
        });
        result.href = result.format();
        return result;
      }

      result.protocol = relative.protocol;
      if (!relative.host && !hostlessProtocol[relative.protocol]) {
        var relPath = (relative.pathname || '').split('/');
        while (relPath.length && !(relative.host = relPath.shift()));
        if (!relative.host) relative.host = '';
        if (!relative.hostname) relative.hostname = '';
        if (relPath[0] !== '') relPath.unshift('');
        if (relPath.length < 2) relPath.unshift('');
        result.pathname = relPath.join('/');
      } else {
        result.pathname = relative.pathname;
      }
      result.search = relative.search;
      result.query = relative.query;
      result.host = relative.host || '';
      result.auth = relative.auth;
      result.hostname = relative.hostname || relative.host;
      result.port = relative.port;
      // to support http.request
      if (result.pathname || result.search) {
        var p = result.pathname || '';
        var s = result.search || '';
        result.path = p + s;
      }
      result.slashes = result.slashes || relative.slashes;
      result.href = result.format();
      return result;
    }

    var isSourceAbs = result.pathname && result.pathname.charAt(0) === '/',
        isRelAbs = relative.host || relative.pathname && relative.pathname.charAt(0) === '/',
        mustEndAbs = isRelAbs || isSourceAbs || result.host && relative.pathname,
        removeAllDots = mustEndAbs,
        srcPath = result.pathname && result.pathname.split('/') || [],
        relPath = relative.pathname && relative.pathname.split('/') || [],
        psychotic = result.protocol && !slashedProtocol[result.protocol];

    // if the url is a non-slashed url, then relative
    // links like ../.. should be able
    // to crawl up to the hostname, as well.  This is strange.
    // result.protocol has already been set by now.
    // Later on, put the first path part into the host field.
    if (psychotic) {
      result.hostname = '';
      result.port = null;
      if (result.host) {
        if (srcPath[0] === '') srcPath[0] = result.host;else srcPath.unshift(result.host);
      }
      result.host = '';
      if (relative.protocol) {
        relative.hostname = null;
        relative.port = null;
        if (relative.host) {
          if (relPath[0] === '') relPath[0] = relative.host;else relPath.unshift(relative.host);
        }
        relative.host = null;
      }
      mustEndAbs = mustEndAbs && (relPath[0] === '' || srcPath[0] === '');
    }

    if (isRelAbs) {
      // it's absolute.
      result.host = relative.host || relative.host === '' ? relative.host : result.host;
      result.hostname = relative.hostname || relative.hostname === '' ? relative.hostname : result.hostname;
      result.search = relative.search;
      result.query = relative.query;
      srcPath = relPath;
      // fall through to the dot-handling below.
    } else if (relPath.length) {
      // it's relative
      // throw away the existing file, and take the new path instead.
      if (!srcPath) srcPath = [];
      srcPath.pop();
      srcPath = srcPath.concat(relPath);
      result.search = relative.search;
      result.query = relative.query;
    } else if (!isNullOrUndefined(relative.search)) {
      // just pull out the search.
      // like href='?foo'.
      // Put this after the other two cases because it simplifies the booleans
      if (psychotic) {
        result.hostname = result.host = srcPath.shift();
        //occationaly the auth can get stuck only in host
        //this especialy happens in cases like
        //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
        var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
        if (authInHost) {
          result.auth = authInHost.shift();
          result.host = result.hostname = authInHost.shift();
        }
      }
      result.search = relative.search;
      result.query = relative.query;
      //to support http.request
      if (!isNull(result.pathname) || !isNull(result.search)) {
        result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
      }
      result.href = result.format();
      return result;
    }

    if (!srcPath.length) {
      // no path at all.  easy.
      // we've already handled the other stuff above.
      result.pathname = null;
      //to support http.request
      if (result.search) {
        result.path = '/' + result.search;
      } else {
        result.path = null;
      }
      result.href = result.format();
      return result;
    }

    // if a url ENDs in . or .., then it must get a trailing slash.
    // however, if it ends in anything else non-slashy,
    // then it must NOT get a trailing slash.
    var last = srcPath.slice(-1)[0];
    var hasTrailingSlash = (result.host || relative.host) && (last === '.' || last === '..') || last === '';

    // strip single dots, resolve double dots to parent dir
    // if the path tries to go above the root, `up` ends up > 0
    var up = 0;
    for (var i = srcPath.length; i >= 0; i--) {
      last = srcPath[i];
      if (last == '.') {
        srcPath.splice(i, 1);
      } else if (last === '..') {
        srcPath.splice(i, 1);
        up++;
      } else if (up) {
        srcPath.splice(i, 1);
        up--;
      }
    }

    // if the path is allowed to go above the root, restore leading ..s
    if (!mustEndAbs && !removeAllDots) {
      for (; up--; up) {
        srcPath.unshift('..');
      }
    }

    if (mustEndAbs && srcPath[0] !== '' && (!srcPath[0] || srcPath[0].charAt(0) !== '/')) {
      srcPath.unshift('');
    }

    if (hasTrailingSlash && srcPath.join('/').substr(-1) !== '/') {
      srcPath.push('');
    }

    var isAbsolute = srcPath[0] === '' || srcPath[0] && srcPath[0].charAt(0) === '/';

    // put the host back
    if (psychotic) {
      result.hostname = result.host = isAbsolute ? '' : srcPath.length ? srcPath.shift() : '';
      //occationaly the auth can get stuck only in host
      //this especialy happens in cases like
      //url.resolveObject('mailto:local1@domain1', 'local2@domain2')
      var authInHost = result.host && result.host.indexOf('@') > 0 ? result.host.split('@') : false;
      if (authInHost) {
        result.auth = authInHost.shift();
        result.host = result.hostname = authInHost.shift();
      }
    }

    mustEndAbs = mustEndAbs || result.host && srcPath.length;

    if (mustEndAbs && !isAbsolute) {
      srcPath.unshift('');
    }

    if (!srcPath.length) {
      result.pathname = null;
      result.path = null;
    } else {
      result.pathname = srcPath.join('/');
    }

    //to support request.http
    if (!isNull(result.pathname) || !isNull(result.search)) {
      result.path = (result.pathname ? result.pathname : '') + (result.search ? result.search : '');
    }
    result.auth = relative.auth || result.auth;
    result.slashes = result.slashes || relative.slashes;
    result.href = result.format();
    return result;
  };

  Url.prototype.parseHost = function () {
    var host = this.host;
    var port = portPattern.exec(host);
    if (port) {
      port = port[0];
      if (port !== ':') {
        this.port = port.substr(1);
      }
      host = host.substr(0, host.length - port.length);
    }
    if (host) this.hostname = host;
  };

  function isString(arg) {
    return typeof arg === "string";
  }

  function isObject(arg) {
    return typeof arg === 'object' && arg !== null;
  }

  function isNull(arg) {
    return arg === null;
  }
  function isNullOrUndefined(arg) {
    return arg == null;
  }
});
$__System.registerDynamic('12', ['11', '13'], true, function ($__require, exports, module) {
  var global = this || self,
      GLOBAL = global;

  var URL = $__require('11');
  var isValid = $__require('13');

  /**
   * Utility to cleanup the base host value. Also removes url fragments.
   *
   * Works for:
   * - hostname
   * - //hostname
   * - scheme://hostname
   * - scheme+scheme://hostname
   *
   * @param {string} value
   * @return {String}
   */

  // scheme      = ALPHA *( ALPHA / DIGIT / "+" / "-" / "." )
  var hasPrefixRE = /^(([a-z][a-z0-9+.-]*)?:)?\/\//;
  var invalidHostnameChars = /[^A-Za-z0-9.-]/;

  // @see https://github.com/oncletom/tld.js/issues/95
  function rtrim(value) {
    if (value[value.length - 1] === '.') {
      return value.substr(0, value.length - 1);
    }
    return value;
  }

  module.exports = function extractHostname(validHosts, value) {
    if (isValid(validHosts, value)) {
      return rtrim(value);
    }

    var url = ('' + value).toLowerCase().trim();

    if (isValid(validHosts, url)) {
      return rtrim(url);
    }

    // Proceed with heavier url parsing to extract the hostname.
    var parts = URL.parse(hasPrefixRE.test(url) ? url : '//' + url, null, true);

    if (parts.hostname && !invalidHostnameChars.test(parts.hostname)) {
      return rtrim(parts.hostname);
    } else if (!invalidHostnameChars.test(url)) {
      return rtrim(url);
    }

    return null;
  };
});
$__System.registerDynamic('14', [], true, function ($__require, exports, module) {
  'use strict';

  /**
   * Polyfill for `endsWith`
   *
   * @param {string} str
   * @param {string} pattern
   * @return {boolean}
   */

  var global = this || self,
      GLOBAL = global;
  function endsWith(str, pattern) {
    return str.lastIndexOf(pattern) === str.length - pattern.length;
  }

  /**
   * Check if `vhost` is a valid suffix of `hostname` (top-domain)
   *
   * It means that `vhost` needs to be a suffix of `hostname` and we then need to
   * make sure that: either they are equal, or the character preceding `vhost` in
   * `hostname` is a '.' (it should not be a partial label).
   *
   * * hostname = 'not.evil.com' and vhost = 'vil.com'      => not ok
   * * hostname = 'not.evil.com' and vhost = 'evil.com'     => ok
   * * hostname = 'not.evil.com' and vhost = 'not.evil.com' => ok
   *
   * @param {string} hostname
   * @param {string} vhost
   * @return {boolean}
   */
  function shareSameDomainSuffix(hostname, vhost) {
    if (endsWith(hostname, vhost)) {
      return hostname.length === vhost.length || hostname[hostname.length - vhost.length - 1] === '.';
    }

    return false;
  }

  /**
   * Given a hostname and its public suffix, extract the general domain.
   *
   *  @param {string} hostname
   *  @param {string} publicSuffix
   *  @return {string}
   */
  function extractDomainWithSuffix(hostname, publicSuffix) {
    // Locate the index of the last '.' in the part of the `hostname` preceding
    // the public suffix.
    //
    // examples:
    //   1. not.evil.co.uk  => evil.co.uk
    //         ^    ^
    //         |    | start of public suffix
    //         | index of the last dot
    //
    //   2. example.co.uk   => example.co.uk
    //     ^       ^
    //     |       | start of public suffix
    //     |
    //     | (-1) no dot found before the public suffix
    var publicSuffixIndex = hostname.length - publicSuffix.length - 2;
    var lastDotBeforeSuffixIndex = hostname.lastIndexOf('.', publicSuffixIndex);

    // No '.' found, then `hostname` is the general domain (no sub-domain)
    if (lastDotBeforeSuffixIndex === -1) {
      return hostname;
    }

    // Extract the part between the last '.'
    return hostname.substr(lastDotBeforeSuffixIndex + 1);
  }

  /**
   * Detects the domain based on rules and upon and a host string
   *
   * @api
   * @param {string} host
   * @return {String}
   */
  module.exports = function getDomain(validHosts, suffix, hostname) {
    // Check if `hostname` ends with a member of `validHosts`.
    for (var i = 0; i < validHosts.length; i += 1) {
      var vhost = validHosts[i];
      if (shareSameDomainSuffix(hostname, vhost)) {
        return vhost;
      }
    }

    // If there is no suffix, there is no hostname
    if (suffix === null) {
      return null;
    }

    // If `hostname` is a valid public suffix, then there is no domain to return.
    // Since we already know that `getPublicSuffix` returns a suffix of `hostname`
    // there is no need to perform a string comparison and we only compare the
    // size.
    if (suffix.length === hostname.length) {
      return null;
    }

    // To extract the general domain, we start by identifying the public suffix
    // (if any), then consider the domain to be the public suffix with one added
    // level of depth. (e.g.: if hostname is `not.evil.co.uk` and public suffix:
    // `co.uk`, then we take one more level: `evil`, giving the final result:
    // `evil.co.uk`).
    return extractDomainWithSuffix(hostname, suffix);
  };
});
$__System.registerDynamic('15', ['16'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var extractTldFromHost = $__require('16');

  /**
   * Returns the public suffix (including exact matches)
   *
   * @api
   * @since 1.5
   * @param {string} hostname
   * @return {string}
   */
  module.exports = function getPublicSuffix(rules, hostname) {
    // First check if `hostname` is already a valid top-level Domain.
    if (rules.hasTld(hostname)) {
      return hostname;
    }

    var candidate = rules.suffixLookup(hostname);
    if (candidate === null) {
      // Prevailing rule is '*' so we consider the top-level domain to be the
      // public suffix of `hostname` (e.g.: 'example.org' => 'org').
      return extractTldFromHost(hostname);
    }

    return candidate;
  };
});
$__System.registerDynamic('17', [], true, function ($__require, exports, module) {
  'use strict';

  /**
   * Returns the subdomain of a hostname string
   *
   * @api
   * @param {string} hostname
   * @param {string} domain - the root domain of the hostname
   * @return {string|null} a subdomain string if any, blank string if subdomain
   *  is empty, otherwise null.
   */

  var global = this || self,
      GLOBAL = global;
  module.exports = function getSubdomain(hostname, domain) {
    // No domain found? Just abort, abort!
    if (domain === null) {
      return null;
    }

    return hostname.substr(0, hostname.length - domain.length - 1);
  };
});
$__System.registerDynamic("13", [], true, function ($__require, exports, module) {
  "use strict";

  /**
   * Check if the code point is a digit [0-9]
   *
   * @param {number} code
   * @return boolean
   */

  var global = this || self,
      GLOBAL = global;
  function isDigit(code) {
    // 48 == '0'
    // 57 == '9'
    return code >= 48 && code <= 57;
  }

  /**
   * Check if the code point is a letter [a-zA-Z]
   *
   * @param {number} code
   * @return boolean
   */
  function isAlpha(code) {
    // Force to lower-case
    // code |= 32;
    // 97 === 'a'
    // 122 == 'z'
    return code >= 97 && code <= 122;
  }

  /**
   * Check if a hostname string is valid (according to RFC
   * It's usually a preliminary check before trying to use getDomain or anything else
   *
   * Beware: it does not check if the TLD exists.
   *
   * @api
   * @param {string} hostname
   * @return {boolean}
   */
  module.exports = function isValid(validHosts, hostname) {
    if (typeof hostname !== 'string') {
      return false;
    }

    if (hostname.length > 255) {
      return false;
    }

    if (validHosts.length !== 0) {
      for (var j = 0; j < validHosts.length; j += 1) {
        if (hostname.endsWith(validHosts[j])) {
          return true;
        }
      }
    }

    if (hostname.length === 0) {
      return false;
    }

    // Check first character: [a-zA-Z0-9]
    var firstCharCode = hostname.charCodeAt(0);
    if (!(isAlpha(firstCharCode) || isDigit(firstCharCode))) {
      return false;
    }

    // Validate hostname according to RFC
    var lastDotIndex = -1;
    var lastCharCode;
    var code;
    var len = hostname.length;

    for (var i = 0; i < len; i += 1) {
      code = hostname.charCodeAt(i);

      if (code === 46) {
        // '.'
        if (
        // Check that previous label is < 63 bytes long (64 = 63 + '.')
        i - lastDotIndex > 64 ||
        // Check that previous character was not already a '.'
        lastCharCode === 46 ||
        // Check that the previous label does not end with a '-'
        lastCharCode === 45) {
          return false;
        }

        lastDotIndex = i;
      } else if (!(isAlpha(code) || isDigit(code) || code === 45)) {
        // Check if there is a forbidden character in the label: [^a-zA-Z0-9-]
        return false;
      }

      lastCharCode = code;
    }

    return (
      // Check that last label is shorter than 63 chars
      len - lastDotIndex - 1 <= 63 &&
      // Check that the last character is an allowed trailing label character.
      // Since we already checked that the char is a valid hostname character,
      // we only need to check that it's different from '-'.
      lastCharCode !== 45
    );
  };
});
$__System.registerDynamic("16", [], true, function ($__require, exports, module) {
  "use strict";

  /**
   * Utility to extract the TLD from a hostname string
   *
   * @param {string} host
   * @return {String}
   */

  var global = this || self,
      GLOBAL = global;
  module.exports = function extractTldFromHost(hostname) {
    var lastDotIndex = hostname.lastIndexOf('.');
    if (lastDotIndex === -1) {
      return null;
    }

    return hostname.substr(lastDotIndex + 1);
  };
});
$__System.registerDynamic('18', ['16'], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  var extractTldFromHost = $__require('16');

  /**
   * Checks if the TLD exists for a given hostname
   *
   * @api
   * @param {string} rules
   * @param {string} hostname
   * @return {boolean}
   */
  module.exports = function tldExists(rules, hostname) {
    // Easy case, it's a TLD
    if (rules.hasTld(hostname)) {
      return true;
    }

    // Popping only the TLD of the hostname
    var hostTld = extractTldFromHost(hostname);
    if (hostTld === null) {
      return false;
    }

    return rules.hasTld(hostTld);
  };
});
$__System.registerDynamic('19', ['b', 'c', '12', '14', '15', '17', '13', '18'], true, function ($__require, exports, module) {
  'use strict';

  // Load rules

  var global = this || self,
      GLOBAL = global;
  var Trie = $__require('b');
  var allRules = Trie.fromJson($__require('c'));

  // Internals
  var extractHostname = $__require('12');
  var getDomain = $__require('14');
  var getPublicSuffix = $__require('15');
  var getSubdomain = $__require('17');
  var isValid = $__require('13');
  var tldExists = $__require('18');

  function parse(url, validHosts, rules, _extractHostname) {
    var hostname = _extractHostname(validHosts, url);
    var valid = isValid(validHosts, hostname);
    var suffix = null;
    var domain = null;
    var subdomain = null;

    if (valid) {
      suffix = getPublicSuffix(rules, hostname);
      domain = getDomain(validHosts, suffix, hostname);
      subdomain = getSubdomain(hostname, domain);
    }

    return {
      valid,
      hostname,
      suffix,
      domain,
      subdomain
    };
  }

  /**
   * Creates a new instance of tldjs
   * @param  {Object.<rules,validHosts>} options [description]
   * @return {tldjs|Object}                      [description]
   */
  function factory(options) {
    var rules = options.rules || allRules || {};
    var validHosts = options.validHosts || [];
    var _extractHostname = options.extractHostname || extractHostname;

    return {
      extractHostname: function (url) {
        return _extractHostname(validHosts, url);
      },
      isValid: function (hostname) {
        return isValid(validHosts, hostname);
      },
      tldExists: function (url) {
        var hostname = _extractHostname(validHosts, url);
        return tldExists(rules, hostname);
      },
      getPublicSuffix: function (url) {
        return parse(url, validHosts, rules, _extractHostname).suffix;
      },
      getDomain: function (url) {
        return parse(url, validHosts, rules, _extractHostname).domain;
      },
      getSubdomain: function (url) {
        return parse(url, validHosts, rules, _extractHostname).subdomain;
      },
      parse: function (url) {
        return parse(url, validHosts, rules, _extractHostname);
      },
      fromUserSettings: factory
    };
  }

  module.exports = factory({});
});
$__System.register("a", ["19"], function (_export, _context) {
  "use strict";

  var tldjs;
  return {
    setters: [function (_2) {
      tldjs = _2.default;
    }],
    execute: function () {

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

      /* global Components, console */
      try {
        Components.utils.import("resource://gre/modules/Console.jsm");
      } catch (e) {
        // Older version of Firefox
        Components.utils.import("resource://gre/modules/devtools/Console.jsm");
      }

      /* global window */
      var window$1 = typeof window !== 'undefined' ? window : undefined;

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

      function init$1() {
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

        init: init$1

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

      let log$1;
      let error;
      let debug;
      let warn;

      if (isLoggingEnabled()) {
        log$1 = console.log.bind(console, 'Cliqz');
        error = console.error.bind(console, 'Cliqz error');
        warn = console.warn.bind(console, 'Cliqz warning');
        if (isDeveloper()) {
          debug = log$1;
        } else {
          debug = () => {};
        }
      } else {
        log$1 = () => {};
        error = () => {};
        debug = () => {};
        warn = () => {};
      }

      var console$1 = {
        log: log$1,
        error,
        debug,
        warn
      };

      // String compression used Firefox API.
      // Based on https://gist.github.com/Endyl/c12438b6e68bbca1bab5
      const CC = Components.Constructor;
      const Ci$1 = Components.interfaces;
      const Cc$1 = Components.classes;

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

          stream = Cc$1["@mozilla.org/binaryinputstream;1"].createInstance(Ci$1.nsIBinaryInputStream);
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

      const Ci$2 = Components.interfaces;

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
          request.channel.loadFlags |= Ci$2.nsIRequest.LOAD_ANONYMOUS | Ci$2.nsIRequest.LOAD_BYPASS_CACHE | Ci$2.nsIRequest.INHIBIT_PERSISTENT_CACHING;
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

      function fetchFactory() {
        return fetch;
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

      function httpHandler$1() {
        return activeHandler(...arguments);
      }

      /**
       *  Replace default http handler with fn
       */
      function overrideHttpHandler(fn) {
        activeHandler = fn;
      }

      const compressionAvailable = Boolean(compress$$1);
      let compressionExclusions = new Set();

      function compressionEnabled(url) {
        return compressionAvailable && !compressionExclusions.has(url);
      }

      /**
       *  Add a url for which we should not compress when using promiseHttpHandler
       */
      function addCompressionExclusion(url) {
        compressionExclusions.add(url);
      }

      function promiseHttpHandler(method, url, data, timeout, compressedPost) {
        return new Promise(function (resolve, reject) {
          // gzip.compress may be false if there is no implementation for this platform
          // or maybe it is not loaded yet
          if (method === 'POST' && compressedPost && compressionEnabled(url)) {
            const dataLength = data.length;
            data = compress$$1(data);
            console$1.log("Compressed request to " + url + ", bytes saved = " + (dataLength - data.length) + " (" + (100 * (dataLength - data.length) / dataLength).toFixed(1) + "%)", "CLIQZEnvironment.httpHandler");
            httpHandler$1(method, url, resolve, reject, timeout, data, undefined, 'gzip');
          } else {
            httpHandler$1(method, url, resolve, reject, timeout, data);
          }
        });
      }

      // TODO: please just use Components
      const Cu = Components.utils;
      const Ci = Components.interfaces;
      const Cc = Components.classes;

      try {
        Cu.import('resource://gre/modules/XPCOMUtils.jsm');
        Cu.import('resource://gre/modules/NewTabUtils.jsm');
      } catch (e) {}

      var CLIQZEnvironment = {
        setTimeout,
        setInterval,
        clearTimeout,
        clearInterval,
        Promise,
        RESULTS_PROVIDER: 'https://api.cliqz.com/api/v2/results?nrh=1&q=',
        RICH_HEADER: 'https://api.cliqz.com/api/v2/rich-header?path=/v2/map',
        LOG: 'https://stats.cliqz.com',
        TEMPLATES_PATH: 'chrome://cliqz/content/static/templates/',
        SKIN_PATH: 'chrome://cliqz/content/static/skin/',
        prefs: Cc['@mozilla.org/preferences-service;1'].getService(Ci.nsIPrefService).getBranch(''),
        RERANKERS: [],
        RESULTS_TIMEOUT: 1000, // 1 second
        TEMPLATES: {},
        MESSAGE_TEMPLATES: [],
        PARTIALS: [],
        CLIQZ_ONBOARDING: "about:onboarding",
        CLIQZ_ONBOARDING_URL: "chrome://cliqz/content/onboarding-v3/index.html",
        BASE_CONTENT_URL: "chrome://cliqz/content/",
        BROWSER_ONBOARDING_PREF: "browserOnboarding",

        init: function init() {},

        unload: function unload() {},

        getAllCliqzPrefs: function getAllCliqzPrefs() {
          return Cc['@mozilla.org/preferences-service;1'].getService(Ci.nsIPrefService).getBranch('extensions.cliqz.').getChildList('');
        },

        isUnknownTemplate: function isUnknownTemplate(template) {
          return template && CLIQZEnvironment.TEMPLATES.hasOwnProperty(template) == false;
        },
        isDefaultBrowser: function isDefaultBrowser() {
          try {
            var shell = Components.classes["@mozilla.org/browser/shell-service;1"].getService(Components.interfaces.nsIShellService);
            if (shell) {
              return shell.isDefaultBrowser(false);
            }
          } catch (e) {}

          return null;
        },
        openLink: function openLink(win, url, newTab, newWindow, newPrivateWindow, focus) {
          // make sure there is a protocol (this is required
          // for storing it properly in Firefoxe's history DB)
          if (url.indexOf("://") == -1 && url.trim().indexOf('about:') != 0) {
            url = "http://" + url;
          }

          // Firefox history boosts URLs that are typed in the URL bar, autocompleted,
          // or selected from the history dropbdown; thus, mark page the user is
          // going to see as "typed" (i.e, the value Firefox would assign to such URLs)
          try {
            var historyService = Cc["@mozilla.org/browser/nav-history-service;1"].getService(Ci.nsINavHistoryService);
            var ioService = Components.classes["@mozilla.org/network/io-service;1"].getService(Components.interfaces.nsIIOService);
            var urlObject = ioService.newURI(url, null, null);
            historyService.markPageAsTyped(urlObject);
          } catch (e) {}

          if (newTab) {
            const tab = win.gBrowser.addTab(url);
            if (focus) {
              win.gBrowser.selectedTab = tab;
            }
            return tab;
          } else if (newWindow) {
            win.open(url, '_blank');
          } else if (newPrivateWindow) {
            win.openLinkIn(url, "window", { private: true });
          } else {
            // Set urlbar value to url immediately
            if (win.CLIQZ.Core.urlbar) {
              win.CLIQZ.Core.urlbar.value = url;
            }
            //win.openUILink(url);
            win.gBrowser.loadURI(url);
          }
        },
        copyResult: function copyResult(val) {
          var gClipboardHelper = Components.classes["@mozilla.org/widget/clipboardhelper;1"].getService(Components.interfaces.nsIClipboardHelper);
          gClipboardHelper.copyString(val);
        },
        isPrivate: function isPrivate(win) {
          // try to get the current active window
          if (!win) win = CLIQZEnvironment.getWindow();

          // return false if we still do not have a window
          if (!win) return false;

          if (win && win.cliqzIsPrivate === undefined) {
            try {
              // Firefox 20+
              Cu.import('resource://gre/modules/PrivateBrowsingUtils.jsm');
              win.cliqzIsPrivate = PrivateBrowsingUtils.isWindowPrivate(win);
            } catch (e) {
              // pre Firefox 20
              try {
                win.cliqzIsPrivate = Cc['@mozilla.org/privatebrowsing;1'].getService(Ci.nsIPrivateBrowsingService).privateBrowsingEnabled;
              } catch (ex) {
                Cu.reportError(ex);
                win.cliqzIsPrivate = true;
              }
            }
          }

          return win.cliqzIsPrivate;
        },

        /**
         * @param {ChromeWindow} win - browser window to check.
         * @return whether |win|'s current tab is in private mode.
         */
        isOnPrivateTab: function isOnPrivateTab(win) {
          return win && win.gBrowser.selectedBrowser !== undefined && win.gBrowser.selectedBrowser.loadContext.usePrivateBrowsing;
        },

        getWindow: function getWindow() {
          var wm = Cc['@mozilla.org/appshell/window-mediator;1'].getService(Ci.nsIWindowMediator);
          return wm.getMostRecentWindow("navigator:browser");
        },
        getWindowID: function getWindowID(win) {
          win = win || CLIQZEnvironment.getWindow();
          var util = win.QueryInterface(Ci.nsIInterfaceRequestor).getInterface(Ci.nsIDOMWindowUtils);
          return util.outerWindowID;
        },
        openTabInWindow: function openTabInWindow(win, url) {
          let relatedToCurrent = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

          var tBrowser = win.document.getElementById('content');
          var tab = tBrowser.addTab(url, { relatedToCurrent: relatedToCurrent });
          tBrowser.selectedTab = tab;
        },
        // TODO: move this
        trk: [],
        telemetry: function (url) {
          var trkTimer = null,
              telemetrySeq = -1,
              telemetryReq = null,
              telemetrySending = [],
              TELEMETRY_MAX_SIZE = 500;

          function getNextSeq() {
            if (telemetrySeq == -1) telemetrySeq = prefs.get('telemetrySeq', 0);

            telemetrySeq = (telemetrySeq + 1) % 2147483647;

            return telemetrySeq;
          }

          function pushTelemetry() {
            prefs.set('telemetrySeq', telemetrySeq);
            if (telemetryReq) return;

            // put current data aside in case of failure
            telemetrySending = CLIQZEnvironment.trk.slice(0);
            CLIQZEnvironment.trk = [];

            console$1.log('push telemetry data: ' + telemetrySending.length + ' elements', "pushTelemetry");

            telemetryReq = promiseHttpHandler('POST', CLIQZEnvironment.LOG, JSON.stringify(telemetrySending), 10000, true);
            telemetryReq.then(pushTelemetryCallback);
            telemetryReq.catch(pushTelemetryError);
          }

          function pushTelemetryCallback(req) {
            try {
              var response = JSON.parse(req.response);

              if (response.new_session) {
                prefs.set('session', response.new_session);
              }
              telemetrySending = [];
              telemetryReq = null;
            } catch (e) {}
          }

          function pushTelemetryError(req) {
            // pushTelemetry failed, put data back in queue to be sent again later
            console$1.log('push telemetry failed: ' + telemetrySending.length + ' elements', "pushTelemetry");
            CLIQZEnvironment.trk = telemetrySending.concat(CLIQZEnvironment.trk);

            // Remove some old entries if too many are stored, to prevent unbounded growth when problems with network.
            var slice_pos = CLIQZEnvironment.trk.length - TELEMETRY_MAX_SIZE + 100;
            if (slice_pos > 0) {
              console$1.log('discarding ' + slice_pos + ' old telemetry data', "pushTelemetry");
              CLIQZEnvironment.trk = CLIQZEnvironment.trk.slice(slice_pos);
            }

            telemetrySending = [];
            telemetryReq = null;
          }

          return function (msg, instantPush) {
            // no telemetry in private windows & tabs
            if (msg.type !== 'environment' && CliqzUtils.isPrivateMode()) {
              return;
            }

            console$1.log(msg, 'Utils.telemetry');
            if (!prefs.get('telemetry', true)) return;
            msg.session = prefs.get('session');
            msg.ts = Date.now();
            msg.seq = getNextSeq();

            CLIQZEnvironment.trk.push(msg);
            CLIQZEnvironment.clearTimeout(trkTimer);
            if (instantPush || CLIQZEnvironment.trk.length % 100 == 0) {
              pushTelemetry();
            } else {
              trkTimer = CLIQZEnvironment.setTimeout(pushTelemetry, 60000);
            }
          };
        }(),
        _isSearchServiceInitialized: (() => {
          if (Services.search.init) {
            Services.search.init(() => {
              CLIQZEnvironment._isSearchServiceInitialized = true;
            });
            return false;
          }
          return true;
        })(),
        getDefaultSearchEngine() {
          var searchEngines = CLIQZEnvironment.getSearchEngines();
          return searchEngines.filter(function (se) {
            return se.default;
          })[0];
        },
        getSearchEngines: function getSearchEngines() {
          let blackListed = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          const SEARCH_ENGINES = CLIQZEnvironment._isSearchServiceInitialized ? {
            defaultEngine: Services.search.defaultEngine,
            engines: Services.search.getEngines()
          } : {
            defaultEngine: null,
            engines: []
          };

          return SEARCH_ENGINES.engines.filter(e => !e.hidden && e.iconURI != null && blackListed.indexOf(e.name) < 0).map(e => {
            return {
              name: e.name,
              alias: e.alias,
              default: e === SEARCH_ENGINES.defaultEngine,
              icon: e.iconURI.spec,
              base_url: e.searchForm,
              urlDetails: CliqzUtils.getDetailsFromUrl(e.searchForm),
              getSubmissionForQuery: function getSubmissionForQuery(q, type) {
                // 'keyword' is used by one of the Mozilla probes
                // to measure source for search actions
                // https://dxr.mozilla.org/mozilla-central/rev/e4107773cffb1baefd5446666fce22c4d6eb0517/browser/locales/searchplugins/google.xml#15
                const submission = e.getSubmission(q, type, 'keyword');

                // some engines cannot create submissions for all types
                // eg 'application/x-suggestions+json'
                if (submission) {
                  return submission.uri.spec;
                } else {
                  return null;
                }
              }
            };
          });
        },

        updateAlias: function updateAlias(name, newAlias) {
          Services.search.getEngineByName(name).alias = newAlias;
        },
        getEngineByAlias: function getEngineByAlias(alias) {
          return CLIQZEnvironment.getSearchEngines().find(engine => {
            return engine.alias === alias;
          });
        },
        getEngineByName: function getEngineByName(name) {
          return CLIQZEnvironment.getSearchEngines().find(engine => {
            return engine.name === name;
          });
        },
        addEngineWithDetails: function addEngineWithDetails(engine) {
          const existedEngine = Services.search.getEngineByName(engine.name);
          if (existedEngine) {
            // Update the engine alias in case it has been removed
            if (!existedEngine.alias) {
              existedEngine.alias = engine.key;
            }

            return;
          }

          Services.search.addEngineWithDetails(engine.name, engine.iconURL, engine.key, engine.name, engine.method, engine.url);
          if (engine.encoding) {
            Services.search.getEngineByName(engine.name).wrappedJSObject._queryCharset = engine.encoding;
          }
        },
        /* eslint no-param-reassign: ["error", { "props": false }] */
        restoreHiddenSearchEngines: function restoreHiddenSearchEngines() {
          // YouTube - special case
          const SEARCH_ENGINE_ALIAS = {
            youtube: '#yt',
            'youtube-de': '#yt'
          };

          Services.search.getEngines().forEach(e => {
            if (e.hidden === true) {
              e.hidden = false;
              // Restore the alias as well
              if (!e.alias && e.identifier) {
                if (SEARCH_ENGINE_ALIAS[e.identifier]) {
                  e.alias = SEARCH_ENGINE_ALIAS[e.identifier];
                } else {
                  e.alias = `#${e.identifier.toLowerCase().substring(0, 2)}`;
                }
              }
            }
          });
        },
        /*
          We want to remove the search engine in order to update it by addEngineWithDetails function
          If the search engines are stored in user profile, we can remove them
        */
        removeEngine: function removeEngine(name) {
          let engine = Services.search.getEngineByName(name);
          if (engine) {
            Services.search.removeEngine(engine);
          }
          // Check if the engine has been removed or not
          engine = Services.search.getEngineByName(name);
          // If not, search engines cannot be removed since they are stored in global location
          // removeEngine will just hide the engine, we can restore it by unhiding it
          if (engine) {
            engine.hidden = false;
          }
        },
        // from ContextMenu
        openPopup: function openPopup(contextMenu, ev, x, y) {
          contextMenu.openPopupAtScreen(x, y, false);
        },
        /**
         * Construct a uri from a url
         * @param {string}  aUrl - url
         * @param {string}  aOriginCharset - optional character set for the URI
         * @param {nsIURI}  aBaseURI - base URI for the spec
         */
        makeUri: function makeUri(aUrl, aOriginCharset, aBaseURI) {
          var uri;
          try {
            uri = Services.io.newURI(aUrl, aOriginCharset, aBaseURI);
          } catch (e) {
            uri = null;
          }
          return uri;
        },
        getNoResults: function getNoResults(q) {

          var res = CLIQZEnvironment.Result.cliqz({
            template: 'noResult',
            snippet: {},
            type: 'rh',
            subType: { empty: true }
          }, q);

          return res;
        }
      };

      /*
       * In Firefox this method will return undefined is called too early in
       * browser lifecycle. On some older versions like 2x it may even crash
       * entire process.
       */
      var getStorage = function () {
        let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "chrome://cliqz/content/";

        const uri = Services.io.newURI(url, '', null);
        const ssm = Components.classes['@mozilla.org/scriptsecuritymanager;1'].getService(Components.interfaces.nsIScriptSecurityManager);

        const principal = ssm.createCodebasePrincipal(uri, {});

        const dsm = Components.classes['@mozilla.org/dom/localStorage-manager;1'].getService(Components.interfaces.nsIDOMStorageManager);

        if (dsm.getLocalStorageForPrincipal) {
          return dsm.getLocalStorageForPrincipal(principal, '');
        } else {
          // FF57 +
          const win = Components.classes['@mozilla.org/appshell/window-mediator;1'].getService(Components.interfaces.nsIWindowMediator).getMostRecentWindow("navigator:browser");

          return dsm.createStorage(win, principal, '');
        }
      };

      /**
      * @namespace core
      */
      class Storage {

        constructor(url) {
          // if not called as constructor, still act as one
          if (!(this instanceof Storage)) {
            return new Storage(url);
          }

          this.storage = getStorage.bind(null, url);
          this.url = url;
        }

        getItem(key) {
          return this.storage().getItem(key);
        }

        setItem(key, value) {
          return this.storage().setItem(key, value);
        }

        removeItem(key) {
          return this.storage().removeItem(key);
        }

        clear() {
          return this.storage().clear();
        }

        /**
         * @method setObject
         * @param key {string}
         * @param object
         */
        setObject(key, object) {
          this.storage().setItem(key, JSON.stringify(object));
        }

        /**
         * @method getObject
         * @param key {string}
         * @param notFound {Boolean}
         */
        getObject(key) {
          let notFound = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

          const o = this.storage().getItem(key);
          if (o) {
            return JSON.parse(o);
          }
          return notFound;
        }
      }

      function nextTick(fn) {
        for (var _len2 = arguments.length, args = Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
          args[_key2 - 1] = arguments[_key2];
        }

        return Promise.resolve().then(() => fn(...args));
      }

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

      function isURI(text) {
        try {
          Services.io.newURI(text, 'UTF-8', null);
          return true;
        } catch (e) {
          return false;
        }
      }

      function fixURL(url) {
        let fixedURL = url;
        let redirectedToSearch = false;
        /* eslint-disable no-bitwise */
        const fixupFlags = Services.uriFixup.FIXUP_FLAG_NONE | Services.uriFixup.FIXUP_FLAGS_MAKE_ALTERNATE_URI | Services.uriFixup.FIXUP_FLAG_FIX_SCHEME_TYPOS;
        /* eslint-enable no-bitwise */

        try {
          const platformURLFixup = Services.uriFixup.getFixupURIInfo(url, fixupFlags);
          redirectedToSearch = platformURLFixup.keywordAsSent !== '';
          fixedURL = platformURLFixup.fixedURI.spec;
        } catch (e) {
          // uriFixup can fail if URI is malformed or could not be fixed
        }

        if (redirectedToSearch && url.indexOf('://') === -1) {
          // Platform fixup converted URL to search request and there was no protocol in initial URL.
          // Try to fix it again with protocol.
          fixedURL = fixURL(`://${fixedURL}`);
        }

        return fixedURL;
      }

      /* eslint no-underscore-dangle: off */
      /* eslint no-param-reassign: off */
      class LRU {
        constructor(size) {
          this.maxSize = size;

          // LRU structure
          this.reset = () => {
            this.cache = new Map();
            this.head = null;
            this.tail = null;
            this.size = 0;
          };
          this.reset();
        }

        /*
         * Check if value associated with `key` is stored in cache.
         * Does not update position of the entry.
         *
         * @param key
         */
        has(key) {
          return this.cache.has(key);
        }

        /* Retrieve value associated with `key` from cache. If it doesn't
         * exist, return `undefined`, otherwise, update position of the
         * entry to "most recent seen".
         *
         * @param key - Key of value we want to get.
         */
        get(key) {
          const node = this.cache.get(key);

          if (node) {
            this._touch(node);
            return node.value;
          }
          return undefined;
        }

        /* Associate a new `value` to `key` in cache. If `key` isn't already
         * present in cache, create a new node at the position "most recent seen".
         * Otherwise, change the value associated with `key` and refresh the
         * position of the entry to "most recent seen".
         *
         * @param key   - Key add to the cache.
         * @param value - Value associated with key.
         */
        set(key, value) {
          let node = this.cache.get(key);

          if (node) {
            // Hit - update value
            node.value = value;
            this._touch(node);
          } else {
            // Miss - Create a new node
            node = this._newNode(key, value);

            // Forget about oldest node
            if (this.size >= this.maxSize) {
              this.cache.delete(this.tail.key);
              this._remove(this.tail);
            }

            this.cache.set(key, node);
            this._pushFront(node);
          }
        }

        // Private interface (Linked List)

        /* Create a new node (key, value) to store in the cache */
        _newNode(key, value) {
          return {
            prev: null,
            next: null,
            key,
            value
          };
        }

        /* Refresh timestamp of `node` by moving it to the front of the list.
         * It the becomes the (key, value) seen most recently.
         */
        _touch(node) {
          this._remove(node);
          this._pushFront(node);
        }

        /* Remove `node` from the list. */
        _remove(node) {
          if (node) {
            // Update previous node
            if (node.prev === null) {
              this.head = node.next;
            } else {
              node.prev.next = node.next;
            }

            // Update next node
            if (node.next === null) {
              this.tail = node.prev;
            } else {
              node.next.prev = node.prev;
            }

            this.size -= 1;
          }
        }

        /* Add `node` in front of the list (most recent element). */
        _pushFront(node) {
          if (node) {
            // Replace first node of the list
            node.prev = null;
            node.next = this.head;

            if (this.head !== null) {
              this.head.prev = node;
            }

            this.head = node;

            // Case: List was empty
            if (this.tail === null) {
              this.tail = node;
            }

            this.size += 1;
          }
        }
      }

      /* Fixed length lookup cache. Allows expensive operations to be cached for later lookup. Once
       * the cache limit is exceeded, least recently used values are removed.
       */
      class FixedSizeCache {
        /* @param {function} buildValue - used to build a new value from key in case of cache miss.
         * @param {number} size - maximum elements stored in cache.
         * @param {function} buildKey - [Optional] used to extract key from argument.
         */
        constructor(buildValue, size, buildKey) {
          this._buildValue = buildValue;
          this._buildKey = buildKey;
          this._maxKeySize = 1000;

          // Statistics
          this._hitCounter = 0;
          this._missCounter = 0;

          this.lru = new LRU(size);
        }

        /* Try to retrieve the value associated with `key` from the cache. If it's
         * not present, build it using `buildValue` and store it in the cache.
         *
         * This method always returns a value either from the LRU cache, or from a
         * direct call to `buildValue`.
         */
        get(argument) {
          const key = this._buildKey ? this._buildKey(argument) : argument;
          let value = this.lru.get(key);

          if (value !== undefined) {
            // Cache hit
            this._hitCounter += 1;
            return value;
          }
          // Cache miss
          this._missCounter += 1;

          // Compute value
          value = this._buildValue(argument);

          // if key is large, don't cache
          if (!key || key.length > this._maxKeySize) {
            return value;
          }

          this.lru.set(key, value);
          return value;
        }
      }

      var _slicedToArray = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      const UrlRegExp = /^(([a-z\d]([a-z\d-]*[a-z\d])?)\.)+[a-z]{2,}(\:\d+)?$/i;

      function tryFn(fn) {
        return function () {
          try {
            return fn(...arguments);
          } catch (e) {
            return arguments.length <= 0 ? undefined : arguments[0];
          }
        };
      }

      function isUrl(input) {
        if (!input) {
          return false;
        }
        // TODO: handle ip addresses
        if (isURI(input)) {
          return true;
        } else {
          //step 1 remove eventual protocol
          const protocolPos = input.indexOf('://');
          if (protocolPos != -1 && protocolPos <= 6) {
            input = input.slice(protocolPos + 3);
          }
          //step2 remove path & everything after
          input = input.split('/')[0];
          //step3 run the regex
          return UrlRegExp.test(input) || isIpAddress(input);
        }
      }

      function isLocalhost(host, isIPv4, isIPv6) {
        if (host == "localhost") return true;
        if (isIPv4 && host.substr(0, 3) == "127") return true;
        if (isIPv6 && host == "::1") return true;

        return false;
      }

      /*
      strip protocol from url
      */

      // IP Validation

      const ipv4_part = "0*([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])"; // numbers 0 - 255
      const ipv4_regex = new RegExp("^" + ipv4_part + "\\." + ipv4_part + "\\." + ipv4_part + "\\." + ipv4_part + "([:]([0-9])+)?$"); // port number
      const ipv6_regex = new RegExp("^\\[?(([0-9]|[a-f]|[A-F])*[:.]+([0-9]|[a-f]|[A-F])+[:.]*)+[\\]]?([:][0-9]+)?$");
      const schemeRE = /^(\S+?):(\/\/)?(.*)$/i;

      function isIpv4Address(host) {
        return ipv4_regex.test(host);
      }

      function isIpv6Address(host) {
        return ipv6_regex.test(host);
      }

      function isIpAddress(host) {
        return isIpv4Address(host) || isIpv6Address(host);
      }

      const tryDecodeURI = tryFn(decodeURI);
      const tryDecodeURIComponent = tryFn(decodeURIComponent);
      const tryEncodeURI = tryFn(encodeURI);
      const tryEncodeURIComponent = tryFn(encodeURIComponent);

      function cleanMozillaActions() {
        let url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';

        let action;
        if (url.indexOf("moz-action:") == 0) {
          const parts = url.match(/^moz-action:([^,]+),(.*)$/);
          action = parts[1];
          url = parts[2];
          try {
            // handle cases like: moz-action:visiturl,{"url": "..."}
            const mozActionUrl = JSON.parse(url).url;
            if (mozActionUrl) {
              url = decodeURIComponent(mozActionUrl);
            }
          } catch (e) {}
        }
        return [action, url];
      }

      function stripTrailingSlash(str) {
        if (str.substr(-1) === '/') {
          return str.substr(0, str.length - 1);
        }
        return str;
      }

      function _getDetailsFromUrl(originalUrl) {
        var _cleanMozillaActions = cleanMozillaActions(originalUrl),
            _cleanMozillaActions2 = _slicedToArray(_cleanMozillaActions, 2),
            action = _cleanMozillaActions2[0],
            originalUrl = _cleanMozillaActions2[1];
        // exclude protocol


        var url = originalUrl,
            scheme = '',
            slashes = '',
            name = '',
            tld = '',
            subdomains = [],
            path = '',
            query = '',
            fragment = '';

        // remove scheme
        const schemeMatch = schemeRE.exec(url);
        if (schemeMatch) {
          scheme = schemeMatch[1];
          slashes = schemeMatch[2] || '';
          url = schemeMatch[3];
        }
        const ssl = scheme == 'https';

        // separate hostname from path, etc. Could be separated from rest by /, ? or #
        var host = url.split(/[\/\#\?]/)[0].toLowerCase();
        var path = url.replace(host, '');

        // separate username:password@ from host
        var userpass_host = host.split('@');
        if (userpass_host.length > 1) host = userpass_host[1];

        // Parse Port number
        var port = "";

        var isIPv4 = isIpv4Address(host);
        var isIPv6 = isIpv6Address(host);

        var indexOfColon = host.indexOf(":");
        if ((!isIPv6 || isIPv4) && indexOfColon >= 0) {
          port = host.substr(indexOfColon + 1);
          host = host.substr(0, indexOfColon);
        } else if (isIPv6) {
          // If an IPv6 address has a port number, it will be right after a closing bracket ] : format [ip_v6]:port
          var endOfIP = host.indexOf(']:');
          if (endOfIP >= 0) {
            port = host.split(']:')[1];
            host = host.split(']:')[0].replace('[', '').replace(']', '');
          }
        }

        // extract query and fragment from url
        var query = '';
        var query_idx = path.indexOf('?');
        if (query_idx != -1) {
          query = path.substr(query_idx + 1);
        }

        var fragment = '';
        var fragment_idx = path.indexOf('#');
        if (fragment_idx != -1) {
          fragment = path.substr(fragment_idx + 1);
        }

        // remove query and fragment from path
        path = path.replace('?' + query, '');
        path = path.replace('#' + fragment, '');
        query = query.replace('#' + fragment, '');

        // extra - all path, query and fragment
        var extra = path;
        if (query) extra += "?" + query;
        if (fragment) extra += "#" + fragment;

        isIPv4 = isIpv4Address(host);
        isIPv6 = isIpv6Address(host);
        var localhost = isLocalhost(host, isIPv4, isIPv6);

        // find parts of hostname
        if (!isIPv4 && !isIPv6 && !localhost) {
          try {
            let hostWithoutTld = host;
            tld = getPublicSuffix(host);

            if (tld) {
              hostWithoutTld = host.slice(0, -(tld.length + 1)); // +1 for the '.'
            }

            // Get subdomains
            subdomains = hostWithoutTld.split('.');
            // Get the domain name w/o subdomains and w/o TLD
            name = subdomains.pop();

            //remove www if exists
            // TODO: I don't think this is the right place to do this.
            //       Disabled for now, but check there are no issues.
            // host = host.indexOf('www.') == 0 ? host.slice(4) : host;
          } catch (e) {
            name = "";
            host = "";
            //CliqzUtils.log('WARNING Failed for: ' + originalUrl, 'CliqzUtils.getDetailsFromUrl');
          }
        } else {
          name = localhost ? "localhost" : "IP";
        }

        // remove www from beginning, we need cleanHost in the friendly url
        var cleanHost = host;
        if (host.toLowerCase().indexOf('www.') == 0) {
          cleanHost = host.slice(4);
        }

        var friendly_url = cleanHost + extra;
        if (scheme && scheme != 'http' && scheme != 'https') friendly_url = scheme + ":" + slashes + friendly_url;
        //remove trailing slash from the end
        friendly_url = stripTrailingSlash(friendly_url);

        //Handle case where we have only tld for example http://cliqznas
        if (cleanHost === tld) {
          name = tld;
        }

        var urlDetails = {
          action,
          originalUrl,
          scheme: scheme ? scheme + ':' : '',
          name,
          domain: tld ? name + '.' + tld : '',
          tld,
          subdomains,
          path,
          query,
          fragment,
          extra,
          host,
          cleanHost,
          ssl,
          port,
          friendly_url
        };

        return urlDetails;
      }

      const urlDetailsCache = new FixedSizeCache(_getDetailsFromUrl, 50);

      function getDetailsFromUrl(url) {
        return urlDetailsCache.get(url);
      }

      /* eslint-disable */

      /**
       * Extrach the domain from an url, ignoring the schema and parameters.
       */
      function _extractHostname(url) {
        if (typeof url !== 'string') {
          return '';
        }

        let domain = url;

        // We need to check that the index is <= because this protocol could appear
        // as a value of a parameter in the URL.
        const indexOfProtocol = url.indexOf('://');
        if (indexOfProtocol !== -1 && indexOfProtocol <= 6) {
          domain = url.substr(indexOfProtocol + 3);
        }

        const indexOfSlash = domain.indexOf('/');
        if (indexOfSlash !== -1) {
          domain = domain.substr(0, indexOfSlash);
        }

        if (domain.startsWith('www.')) {
          domain = domain.substr(4);
        }

        if (domain.endsWith('.')) {
          domain = domain.substr(0, domain.length - 1);
        }

        return domain;
      }

      // Use our faster `extractHostname` implementation in tldjs
      const tlds = tldjs.fromUserSettings({
        // Note: in the next version, tld.js should not require `validHost` as a
        // first argument.
        extractHostname: (validHosts, url) => _extractHostname(url),
        validHosts: ['localhost']
      });

      function parse(url) {
        const parsed = tlds.parse(url);

        // TODO - ip addr handling could be integrated in tld.js library
        // Specific handling of IP addresses
        if (isIpAddress(parsed.hostname)) {
          parsed.domain = parsed.hostname;
        } else if (parsed.domain === null) {
          // Some hostname will not play well with the `getDomain` function if they
          // also constitute a valid public suffix (eg: googleapis.com)
          parsed.domain = parsed.suffix;
        }

        return parsed;
      }

      function getPublicSuffix(url) {
        return parse(url).suffix;
      }

      /*
       * This module determines the language of visited pages and
       * creates a list of known languages for a user
       *
       */

      // we keep a different preferences namespace than cliqz so that it does not get
      // removed after a re-install or sent during a logging signal
      var CliqzLanguage$1 = {
        DOMAIN_THRESHOLD: 3,
        READING_THRESHOLD: 10000,
        LOG_KEY: 'CliqzLanguage',
        LOCALE_HASH: 333,
        currentState: {},
        cron: 24 * 60 * 60 * 1000, // default one day
        checkInterval: 5 * 60 * 1000, // default 5 min
        removeHashId: null,

        getLocale: function getLocale() {
          return CliqzLanguage$1.normalizeLocale(CliqzUtils.getPref('general.useragent.locale', '', ''));
        },

        // load from the about:config settings
        init: function init(window) {

          CliqzLanguage$1.window = window;
          if (this.removeHashId == null) {
            this.removeHashId = CliqzUtils.setInterval(this.updateTicker.bind(this), this.checkInterval);
          }

          if (CliqzUtils.hasPref('data', 'extensions.cliqz-lang.')) {
            try {
              // catch empty value or malformed json
              CliqzLanguage$1.currentState = JSON.parse(CliqzUtils.getPref('data', {}, 'extensions.cliqz-lang.'));
            } catch (e) {}
          }
          let localeLangs = [];
          let max_value = 0;
          // transform legacy data
          for (let lang in CliqzLanguage$1.currentState) {
            if (CliqzLanguage$1.currentState[lang] == 'locale' || CliqzLanguage$1.currentState[lang].indexOf(257) != -1) {
              localeLangs.push(lang);
            }
            if (CliqzLanguage$1.currentState[lang] instanceof Array) {
              max_value = Math.max(max_value, CliqzLanguage$1.currentState[lang].length);
            }
          }
          if (localeLangs.length) {
            let max_len = Math.max(CliqzLanguage$1.DOMAIN_THRESHOLD + 1, max_value);

            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = localeLangs[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                let locale = _step.value;

                var original_array = CliqzLanguage$1.currentState[locale];
                if (original_array == "locale") {

                  CliqzLanguage$1.currentState[locale] = CliqzLanguage$1.createHashes(max_len);
                } else if (original_array.length < max_len) {
                  CliqzLanguage$1.currentState[locale] = CliqzLanguage$1.createHashes(max_len);
                }

                // add 'locale' hash
                CliqzLanguage$1.currentState[locale][0] = CliqzLanguage$1.LOCALE_HASH;
              }
            } catch (err) {
              _didIteratorError = true;
              _iteratorError = err;
            } finally {
              try {
                if (!_iteratorNormalCompletion && _iterator.return) {
                  _iterator.return();
                }
              } finally {
                if (_didIteratorError) {
                  throw _iteratorError;
                }
              }
            }
          }

          var ll = CliqzLanguage$1.getLocale();
          if (ll && CliqzLanguage$1.currentState[ll] == null) {
            // we found new locale
            CliqzLanguage$1.currentState[ll] = CliqzLanguage$1.createHashes(CliqzLanguage$1.DOMAIN_THRESHOLD + 1);
            // add 'locale' hash
            CliqzLanguage$1.currentState[ll][0] = CliqzLanguage$1.LOCALE_HASH;
          }

          CliqzLanguage$1.cleanCurrentState();
          CliqzLanguage$1.saveCurrentState();

          CliqzUtils.log(CliqzLanguage$1.stateToQueryString(), CliqzLanguage$1.LOG_KEY);
        },
        unload: function unload() {
          if (this.removeHashId != null) {
            CliqzUtils.clearInterval(this.removeHashId);
            this.removeHashId = null;
          }
        },
        updateTicker: function updateTicker() {
          var lastUpdate = 0;
          if (CliqzUtils.hasPref('lastUpdate', 'extensions.cliqz-lang.')) {
            try {
              lastUpdate = parseInt(CliqzUtils.getPref('lastUpdate', 0, 'extensions.cliqz-lang.'));
            } catch (e) {
              lastUpdate = 0;
            }
          }
          var currentTime = Date.now();
          if (currentTime > this.cron + lastUpdate) {
            this.removeHash();
            CliqzUtils.setPref('lastUpdate', String(currentTime), 'extensions.cliqz-lang.');
          }
        },
        // create array of unique hashes
        createHashes: function createHashes(max_len) {
          let hashes = [];
          let i = 0;
          while (i < max_len) {
            // random hash value: [-256, 255]
            let r = Math.floor(Math.random() * 512) - 256;
            if (hashes.indexOf(r) == -1) {
              hashes.push(r);
              i += 1;
            }
          }
          return hashes;
        },
        // add locale, this is the function hook that will be called for every page load that
        // stays more than 5 seconds active
        addLocale: function addLocale(url, localeStr) {

          var locale = CliqzLanguage$1.normalizeLocale(localeStr);

          if (locale == '' || locale == undefined || locale == null || locale.length != 2) return;
          if (url == '' || url == undefined || url == null) return;

          // extract domain from url, hash it and update the value
          var url_hash = CliqzLanguage$1.hashCode(CliqzUtils.cleanUrlProtocol(url, true).split('/')[0]) % 256;

          if (CliqzLanguage$1.currentState[locale] == null || CliqzLanguage$1.currentState[locale].indexOf(url_hash) == -1) {
            if (CliqzLanguage$1.currentState[locale] == null) CliqzLanguage$1.currentState[locale] = [];
            CliqzLanguage$1.currentState[locale].push(url_hash);
            CliqzUtils.log('Saving: ' + locale + ' ' + url_hash, CliqzLanguage$1.LOG_KEY + " for url " + url);
            CliqzLanguage$1.saveCurrentState();
          }
        },
        // do random delete of hash with prob 0.05 (5%)
        removeHash: function removeHash() {
          let changed = false;
          for (let lang in CliqzLanguage$1.currentState) {
            if (CliqzLanguage$1.currentState[lang].length > CliqzLanguage$1.DOMAIN_THRESHOLD + 1) {
              let prob = Math.random();
              if (prob <= 0.05) {
                let ind = Math.floor(Math.random() * CliqzLanguage$1.currentState[lang].length);
                if (CliqzLanguage$1.currentState[lang][ind] != CliqzLanguage$1.LOCALE_HASH) {
                  if (!changed) changed = !changed;
                  CliqzUtils.log("Removing hash " + CliqzLanguage$1.currentState[lang][ind] + " for the language " + lang);
                  CliqzLanguage$1.currentState[lang].splice(ind, 1);
                }
              }
            }
          }
          if (changed) CliqzLanguage$1.saveCurrentState();
        },
        // returns hash of the string
        hashCode: function hashCode(s) {
          return s.split("").reduce(function (a, b) {
            a = (a << 5) - a + b.charCodeAt(0);return a & a;
          }, 0);
        },
        // removes the country from the locale, for instance, de-de => de, en-US => en
        normalizeLocale: function normalizeLocale(str) {
          if (str) return str.split(/-|_/)[0].trim().toLowerCase();else return str;
        },
        // the function that decided which languages the person understands
        state: function state(distribution) {
          distribution = typeof distribution !== 'undefined' ? distribution : false;
          var lang_vec = [];
          for (var lang in CliqzLanguage$1.currentState) {
            var len = Object.keys(CliqzLanguage$1.currentState[lang]).length;
            if (len > CliqzLanguage$1.DOMAIN_THRESHOLD) {
              lang_vec.push([lang, 1.0 / len]);
            }
          }

          lang_vec = lang_vec.sort(function (a, b) {
            return a[1] - b[1];
          });
          // returns full distribution if asked for it
          if (distribution) {
            return lang_vec;
          }

          // returns only lang names
          var lang_vec_clean = [];
          for (let index in lang_vec) {
            lang_vec_clean.push(lang_vec[index][0]);
          }

          return lang_vec_clean;
        },
        // remove doubled values, normalize languages
        cleanCurrentState: function cleanCurrentState() {
          var keys = Object.keys(CliqzLanguage$1.currentState);
          var cleanState = {};
          for (let i = 0; i < keys.length; i++) {
            var nkey = CliqzLanguage$1.normalizeLocale(keys[i]);
            cleanState[nkey] = cleanState[nkey] || [];

            for (let j = 0; j < CliqzLanguage$1.currentState[keys[i]].length; j++) {
              var value = CliqzLanguage$1.currentState[keys[i]][j];
              if (cleanState[nkey].indexOf(value) == -1) cleanState[nkey].push(value);
            }
          }
          if (cleanState != CliqzLanguage$1.currentState) {
            CliqzLanguage$1.currentState = cleanState;
            CliqzLanguage$1.saveCurrentState();
          }
        },
        // returns query string with popular languages
        stateToQueryString: function stateToQueryString() {
          return '&lang=' + encodeURIComponent(CliqzLanguage$1.state().join(','));
        },
        // Save the current state to preferences,
        saveCurrentState: function saveCurrentState() {
          CliqzUtils.log("Going to save languages: " + JSON.stringify(CliqzLanguage$1.currentState), CliqzLanguage$1.LOG_KEY);
          CliqzUtils.setPref('data', JSON.stringify(CliqzLanguage$1.currentState || {}), 'extensions.cliqz-lang.');
        }
      };

      /* global crypto */

      /* eslint-disable no-bitwise */

      // Cryptographically secure Math.random replacement
      //
      //  Doing the same as Firefox Math.random does, but with a crypto secure 64 bit number instead.
      //  The equivalent in C++ is: double(uint64val & 0x1FFFFFFFFFFFFF) / (1 << 53);
      //  WARNING: In tests (Linux), considerably slower than Math.random (5-10 times)
      function random() {
        const values = crypto.getRandomValues(new Uint32Array(2));
        return (Math.pow(2, 32) * (values[0] & 0x1FFFFF) + values[1]) / Math.pow(2, 53);
      }

      var platform = {
        isMobile: false,
        isFirefox: true,
        isChromium: false,
        platformName: 'firefox'
      };

      const appInfo = Components.classes['@mozilla.org/xre/app-info;1'];
      const versionChecker = Components.classes['@mozilla.org/xpcom/version-comparator;1'].getService(Components.interfaces.nsIVersionComparator);

      function isPlatformAtLeastInVersion(minVersion) {
        const hostVersion = appInfo.getService(Components.interfaces.nsIXULAppInfo).version;
        return versionChecker.compare(hostVersion, minVersion) >= 0;
      }

      const OS$1 = appInfo.getService(Components.interfaces.nsIXULRuntime).OS.toLowerCase();
      const OS_VERSION = Services.sysinfo.getProperty('version');

      function notImplemented() {
        throw new Error('Not implemented');
      }

      const isMobile = platform.isMobile;
      const isChromium = platform.isChromium;

      function isWindows() {
        return OS$1 && OS$1.indexOf('win') === 0;
      }

      function isMac() {
        return OS$1 && OS$1.indexOf('darwin') === 0;
      }

      function isLinux() {
        return OS$1 && OS$1.indexOf('linux') === 0;
      }

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

      var getLocaleObject = function (url) {
        // Warning - sync request
        return JSON.parse(httpHandler$1('GET', url, null, null, null, null, true).response);
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

      var _slicedToArray$1 = function () {
        function sliceIterator(arr, i) {
          var _arr = [];var _n = true;var _d = false;var _e = undefined;try {
            for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
              _arr.push(_s.value);if (i && _arr.length === i) break;
            }
          } catch (err) {
            _d = true;_e = err;
          } finally {
            try {
              if (!_n && _i["return"]) _i["return"]();
            } finally {
              if (_d) throw _e;
            }
          }return _arr;
        }return function (arr, i) {
          if (Array.isArray(arr)) {
            return arr;
          } else if (Symbol.iterator in Object(arr)) {
            return sliceIterator(arr, i);
          } else {
            throw new TypeError("Invalid attempt to destructure non-iterable instance");
          }
        };
      }();

      let _provider = null;

      function getProvider() {
        if (!_provider) {
          _provider = (
          // history autocomplete provider is removed
          // https://hg.mozilla.org/mozilla-central/rev/44a989cf6c16
          Components.classes['@mozilla.org/autocomplete/search;1?name=history'] || Components.classes['@mozilla.org/autocomplete/search;1?name=unifiedcomplete']).getService(Components.interfaces.nsIAutoCompleteSearch);
        }
        return _provider;
      }

      /* eslint-disable */

      // callback called multiple times
      function getHistory(q, callback) {
        let isPrivate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

        const provider = getProvider();
        let lastMatchCount = 0;
        let searchParams = ['enable-actions', 'prohibit-autofill'];
        if (isPrivate) {
          searchParams.push('disable-private-actions');
          searchParams.push('private-window');
        }

        provider.startSearch(q, searchParams.join(' '), null, {
          onSearchResult: function onSearchResult(ctx, result) {
            const res = [];
            // TODO: remove this check when we switch to a new mixer completely
            const isNewSearchMode = prefs.get('searchMode', 'autocomplete') !== 'autocomplete';
            for (let i = lastMatchCount; result && i < result.matchCount; i++) {
              let style = result.getStyleAt(i);
              if (result.getValueAt(i).indexOf('https://cliqz.com/search?q=') === 0) {
                continue;
              }

              if (style.includes('heuristic') || style.includes('searchengine')) {
                // filter out "heuristic" and "searchengine" results
                continue;
              }

              if (style.indexOf('switchtab') !== -1) {
                try {
                  var _utils$cleanMozillaAc = CliqzUtils.cleanMozillaActions(result.getValueAt(i)),
                      _utils$cleanMozillaAc2 = _slicedToArray$1(_utils$cleanMozillaAc, 2);

                  let mozAction = _utils$cleanMozillaAc2[0],
                      cleanURL = _utils$cleanMozillaAc2[1];

                  let label;

                  // ignore freshtab, history and cliqz search
                  if (cleanURL.indexOf('chrome://cliqz') === 0 || cleanURL.indexOf('resource://cliqz') === 0 || cleanURL.indexOf('https://cliqz.com/search?q=') === 0) {
                    continue;
                  }

                  res.push({
                    style: style,
                    value: cleanURL,
                    image: result.getImageAt(i),
                    comment: result.getCommentAt(i),
                    label: label || cleanURL
                  });
                } catch (e) {
                  console$1.log('history result error', e);
                }
              } else {
                res.push({
                  style: style,
                  value: result.getValueAt(i),
                  image: result.getImageAt(i),
                  comment: result.getCommentAt(i),
                  label: result.getLabelAt(i)
                });
              }
            }
            callback({
              query: q,
              results: res,
              ready: result.searchResult != result.RESULT_NOMATCH_ONGOING && result.searchResult != result.RESULT_SUCCESS_ONGOING
            });

            if (isNewSearchMode) {
              lastMatchCount = result.matchCount;
            }
          }
        });
      }

      var VERTICAL_ENCODINGS = {
        'people': 'p',
        'news': 'n',
        'video': 'v',
        'hq': 'h',
        'bm': 'm',
        'reciperd': 'r',
        'game': 'g',
        'movie': 'o'
      };

      var BRANDS_DATABASE = { domains: Object.create(null), palette: ["999"] };

      var CliqzUtils = {
        environment: CLIQZEnvironment,
        RESULTS_PROVIDER: CLIQZEnvironment.RESULTS_PROVIDER,
        RICH_HEADER: CLIQZEnvironment.RICH_HEADER,
        RESULTS_PROVIDER_LOG: 'https://api.cliqz.com/api/v1/logging?q=',
        RESULTS_PROVIDER_PING: 'https://api.cliqz.com/ping',
        SAFE_BROWSING: 'https://safe-browsing.cliqz.com',
        TUTORIAL_URL: 'https://cliqz.com/home/onboarding',
        UNINSTALL: 'https://cliqz.com/home/offboarding',
        FEEDBACK: 'https://cliqz.com/feedback/',
        get FEEDBACK_URL() {
          return `${this.FEEDBACK}${this.VERSION}-${config.settings.channel}`;
        },
        RESULTS_TIMEOUT: CLIQZEnvironment.RESULTS_TIMEOUT,

        BRANDS_DATABASE: BRANDS_DATABASE,

        //will be updated from the mixer config endpoint every time new logos are generated
        BRANDS_DATABASE_VERSION: 1515404421880,
        GEOLOC_WATCH_ID: null, // The ID of the geolocation watcher (function that updates cached geolocation on change)
        VERTICAL_TEMPLATES: {
          'n': 'news',
          'p': 'people',
          'v': 'video',
          'h': 'hq',
          'r': 'recipe',
          'g': 'cpgame_movie',
          'o': 'cpgame_movie'
        },
        hm: null,
        hw: null,
        mc: null,
        TEMPLATES_PATH: CLIQZEnvironment.TEMPLATES_PATH,
        TEMPLATES: CLIQZEnvironment.TEMPLATES,
        MESSAGE_TEMPLATES: CLIQZEnvironment.MESSAGE_TEMPLATES,
        PARTIALS: CLIQZEnvironment.PARTIALS,
        SKIN_PATH: CLIQZEnvironment.SKIN_PATH,
        RERANKERS: CLIQZEnvironment.RERANKERS,
        CLIQZ_ONBOARDING: CLIQZEnvironment.CLIQZ_ONBOARDING,
        CLIQZ_ONBOARDING_URL: CLIQZEnvironment.CLIQZ_ONBOARDING_URL,
        BROWSER_ONBOARDING_PREF: CLIQZEnvironment.BROWSER_ONBOARDING_PREF,
        telemetryHandlers: [CLIQZEnvironment.telemetry],

        init() {
          // cutting cyclic dependency
          CLIQZEnvironment.getLogoDetails = CliqzUtils.getLogoDetails.bind(CliqzUtils);
          CLIQZEnvironment.getDetailsFromUrl = CliqzUtils.getDetailsFromUrl.bind(CliqzUtils);
          CLIQZEnvironment.getLocalizedString = CliqzUtils.getLocalizedString.bind(CliqzUtils);
          CLIQZEnvironment.app = CliqzUtils.app;
          CliqzUtils.log('Initialized', 'CliqzUtils');

          CliqzUtils.tldExtractor = CLIQZEnvironment.tldExtractor || CliqzUtils.genericTldExtractor;
        },
        isNumber: function isNumber(n) {
          /*
          NOTE: this function can't recognize numbers in the form such as: "1.2B", but it can for "1e4". See specification for isFinite()
           */
          return !isNaN(parseFloat(n)) && isFinite(n);
        },

        //returns the type only if it is known
        getKnownType: function getKnownType(type) {
          return VERTICAL_ENCODINGS.hasOwnProperty(type) && type;
        },

        /**
         * Construct a uri from a url
         * @param {string}  aUrl - url
         * @param {string}  aOriginCharset - optional character set for the URI
         * @param {nsIURI}  aBaseURI - base URI for the spec
         */
        makeUri: CLIQZEnvironment.makeUri,

        setLogoDb: function setLogoDb(db) {
          let domains = Object.create(null);
          db.domains = Object.assign(domains, db.domains);
          BRANDS_DATABASE = CliqzUtils.BRANDS_DATABASE = db;
        },
        getLogoDetails: function getLogoDetails(urlDetails) {
          var base = urlDetails.name,
              baseCore = base.replace(/[-]/g, ""),
              check = function check(host, rule) {
            var address = host.lastIndexOf(base),
                parseddomain = host.substr(0, address) + "$" + host.substr(address + base.length);

            return parseddomain.indexOf(rule) != -1;
          },
              result = {},
              domains = BRANDS_DATABASE.domains,
              blackTxtColor = '2d2d2d';

          if (base.length == 0) return result;

          if (base == "IP") result = { text: "IP", backgroundColor: "9077e3" };else if (domains[base]) {
            for (var i = 0, imax = domains[base].length; i < imax; i++) {
              var rule = domains[base][i]; // r = rule, b = background-color, l = logo, t = text, c = color

              if (check(urlDetails.host, rule.r)) {
                result = {
                  backgroundColor: rule.b ? rule.b : null,
                  backgroundImage: rule.l ? "url(https://cdn.cliqz.com/brands-database/database/" + this.BRANDS_DATABASE_VERSION + "/logos/" + base + "/" + rule.r + ".svg)" : "",
                  text: rule.t,
                  color: rule.c ? "" : "#fff",
                  brandTxtColor: rule.b ? rule.b : blackTxtColor
                };

                break;
              }
            }
          }
          result.text = result.text || `${baseCore[0] || ''}${baseCore[1] || ''}`.toLowerCase();
          result.backgroundColor = result.backgroundColor || BRANDS_DATABASE.palette[base.split("").reduce(function (a, b) {
            return a + b.charCodeAt(0);
          }, 0) % BRANDS_DATABASE.palette.length];
          result.brandTxtColor = result.brandTxtColor || blackTxtColor;
          var colorID = BRANDS_DATABASE.palette.indexOf(result.backgroundColor),
              buttonClass = BRANDS_DATABASE.buttons && colorID != -1 && BRANDS_DATABASE.buttons[colorID] ? BRANDS_DATABASE.buttons[colorID] : 10;

          result.buttonsClass = "cliqz-brands-button-" + buttonClass;
          result.style = "background-color: #" + result.backgroundColor + ";color:" + (result.color || '#fff') + ";";

          if (result.backgroundImage) result.style += "background-image:" + result.backgroundImage + "; text-indent: -10em;";

          return result;
        },
        httpHandler: function httpHandler() {
          var errorHandler = arguments[3]; // see httpGet or httpPost arguments
          try {
            return httpHandler$1.apply(undefined, arguments);
          } catch (e) {
            if (errorHandler) {
              errorHandler(e);
            } else {
              CliqzUtils.log(e, "httpHandler failed");
            }
          }
        },
        httpGet: function httpGet(url, callback, onerror, timeout, _, sync) {
          return CliqzUtils.httpHandler('GET', url, callback, onerror, timeout, _, sync);
        },
        httpPost: function httpPost(url, callback, data, onerror, timeout) {
          return CliqzUtils.httpHandler('POST', url, callback, onerror, timeout, data);
        },
        httpPut: function httpPut(url, callback, data, onerror, timeout) {
          return CliqzUtils.httpHandler('PUT', url, callback, onerror, timeout, data);
        },
        getLocalStorage(url) {
          return new Storage(url);
        },
        /**
         * Loads a resource URL from the xpi.
         *
         * Wraps httpGet in a try-catch clause. We need to do this, because when
         * trying to load a non-existing file from an xpi via xmlhttprequest, Firefox
         * throws a NS_ERROR_FILE_NOT_FOUND exception instead of calling the onerror
         * function.
         *
         * @see https://bugzilla.mozilla.org/show_bug.cgi?id=827243 (probably).
         */
        loadResource: function loadResource(url, callback, onerror) {
          try {
            return CliqzUtils.httpGet(url, callback, onerror, 3000);
          } catch (e) {
            CliqzUtils.log("Could not load resource " + url + " from the xpi", "CliqzUtils.httpHandler");
            onerror && onerror();
          }
        },
        openTabInWindow: CLIQZEnvironment.openTabInWindow,
        getPref: prefs.get,
        setPref: prefs.set,
        hasPref: prefs.has,
        clearPref: prefs.clear,
        log: function log(msg, key) {
          console$1.log(key, msg);
        },
        getDay: function getDay() {
          return Math.floor(new Date().getTime() / 86400000);
        },
        getServerDay: function getServerDay() {
          const serverDateStr = CliqzUtils.getPref('config_ts', null);
          if (serverDateStr) {
            try {
              const year = serverDateStr.substr(0, 4);
              const month = serverDateStr.substr(4, 2);
              const day = serverDateStr.substr(6, 2);
              const realDate = new Date(`${year}/${month}/${day}`);

              // we need to consider the timezone offset
              return Math.floor((realDate.getTime() - realDate.getTimezoneOffset() * 60 * 1000) / 86400000);
            } catch (e) {
              // fallback to getDay
            }
          }

          return CliqzUtils.getDay();
        },
        //creates a random 'len' long string from the input space
        rand: function rand(len, _space) {
          var ret = '',
              i,
              space = _space || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789',
              sLen = space.length;

          for (i = 0; i < len; i++) ret += space.charAt(Math.floor(random() * sLen));

          return ret;
        },
        hash: function hash(s) {
          return s.split('').reduce(function (a, b) {
            return (a << 4) - a + b.charCodeAt(0) & 0xEFFFFFF;
          }, 0);
        },
        cleanMozillaActions: cleanMozillaActions,
        cleanUrlProtocol: function cleanUrlProtocol(url, cleanWWW) {
          if (!url) return '';

          // removes protocol if it's http(s). See CLIQZIUM-218.
          const urlLowered = url.toLowerCase();
          if (urlLowered.startsWith('http://')) url = url.slice(7);
          if (urlLowered.startsWith('https://')) url = url.slice(8);

          // removes the www.
          if (cleanWWW && url.toLowerCase().startsWith('www.')) url = url.slice(4);

          return url;
        },
        genericTldExtractor: getPublicSuffix,
        getDetailsFromUrl: getDetailsFromUrl,
        stripTrailingSlash: stripTrailingSlash,
        isUrl: isUrl,
        // Checks if the given string is a valid IPv4 addres
        isIPv4: isIpv4Address,
        isIPv6: isIpv6Address,

        isLocalhost: isLocalhost,
        // checks if a value represents an url which is a seach engine
        isSearch: function isSearch(value) {
          if (CliqzUtils.isUrl(value)) {
            const url = this.cleanMozillaActions(value)[1];

            var _CliqzUtils$getDetail = CliqzUtils.getDetailsFromUrl(url);

            const name = _CliqzUtils$getDetail.name,
                  subdomains = _CliqzUtils$getDetail.subdomains,
                  path = _CliqzUtils$getDetail.path;
            // allow only 'www' and 'de' (for Yahoo) subdomains to exclude 'maps.google.com' etc.
            // and empty path only to exclude 'www.google.com/maps' etc.

            const firstSubdomain = subdomains.length ? subdomains[0] : '';
            return (!path || path.length === 1 && path[0] === '/') && ((name === 'google' || name === 'bing' || name === 'duckduckgo' || name === 'startpage') && (!firstSubdomain || firstSubdomain === 'www') || name === 'yahoo' && (!firstSubdomain || firstSubdomain === 'de'));
          }
          return false;
        },
        // checks if a string is a complete url
        isCompleteUrl: function isCompleteUrl(input) {
          var pattern = /(ftp|http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?/;
          if (!pattern.test(input)) {
            return false;
          } else {
            return true;
          }
        },
        // extract query term from search engine result page URLs
        extractQueryFromUrl: function extractQueryFromUrl(url) {
          // Google
          if (url.search(/http(s?):\/\/www\.google\..*\/.*q=.*/i) === 0) {
            url = url.substring(url.lastIndexOf('q=') + 2).split('&')[0];
            // Bing
          } else if (url.search(/http(s?):\/\/www\.bing\..*\/.*q=.*/i) === 0) {
            url = url.substring(url.indexOf('q=') + 2).split('&')[0];
            // Yahoo
          } else if (url.search(/http(s?):\/\/.*search\.yahoo\.com\/search.*p=.*/i) === 0) {
            url = url.substring(url.indexOf('p=') + 2).split('&')[0];
          } else {
            url = null;
          }
          var decoded = url ? decodeURIComponent(url.replace(/\+/g, ' ')) : null;
          if (decoded) return decoded;else return url;
        },
        // Remove clutter (http, www) from urls
        generalizeUrl: function generalizeUrl(url, skipCorrection) {
          if (!url) {
            return '';
          }
          var val = url.toLowerCase();
          var cleanParts = CliqzUtils.cleanUrlProtocol(val, false).split('/'),
              host = cleanParts[0],
              pathLength = 0,
              SYMBOLS = /,|\./g;
          if (!skipCorrection) {
            if (cleanParts.length > 1) {
              pathLength = ('/' + cleanParts.slice(1).join('/')).length;
            }
            if (host.indexOf('www') === 0 && host.length > 4) {
              // only fix symbols in host
              if (SYMBOLS.test(host[3]) && host[4] != ' ')
                // replace only issues in the host name, not ever in the path
                val = val.substr(0, val.length - pathLength).replace(SYMBOLS, '.') + (pathLength ? val.substr(-pathLength) : '');
            }
          }
          url = CliqzUtils.cleanUrlProtocol(val, true);
          return url[url.length - 1] == '/' ? url.slice(0, -1) : url;
        },
        // Remove clutter from urls that prevents pattern detection, e.g. checksum
        simplifyUrl: function simplifyUrl(url) {
          var q;
          // Google redirect urls
          if (url.search(/http(s?):\/\/www\.google\..*\/url\?.*url=.*/i) === 0) {
            // Return target URL instead
            url = url.substring(url.lastIndexOf('url=')).split('&')[0];
            url = url.substr(4);
            return decodeURIComponent(url);

            // Remove clutter from Google searches
          } else if (url.search(/http(s?):\/\/www\.google\..*\/.*q=.*/i) === 0) {
            q = url.substring(url.lastIndexOf('q=')).split('&')[0];
            if (q != 'q=') {
              // tbm defines category (images/news/...)
              var param = url.indexOf('#') != -1 ? url.substr(url.indexOf('#')) : url.substr(url.indexOf('?'));
              var tbm = param.indexOf('tbm=') != -1 ? '&' + param.substring(param.lastIndexOf('tbm=')).split('&')[0] : '';
              var page = param.indexOf('start=') != -1 ? '&' + param.substring(param.lastIndexOf('start=')).split('&')[0] : '';
              return 'https://www.google.com/search?' + q + tbm /*+ page*/;
            } else {
              return url;
            }
            // Bing
          } else if (url.search(/http(s?):\/\/www\.bing\..*\/.*q=.*/i) === 0) {
            q = url.substring(url.indexOf('q=')).split('&')[0];
            if (q != 'q=') {
              if (url.indexOf('search?') != -1) return url.substr(0, url.indexOf('search?')) + 'search?' + q;else return url.substr(0, url.indexOf('/?')) + '/?' + q;
            } else {
              return url;
            }
            // Yahoo redirect
          } else if (url.search(/http(s?):\/\/r.search\.yahoo\.com\/.*/i) === 0) {
            url = url.substring(url.lastIndexOf('/RU=')).split('/RK=')[0];
            url = url.substr(4);
            return decodeURIComponent(url);
            // Yahoo
          } else if (url.search(/http(s?):\/\/.*search\.yahoo\.com\/search.*p=.*/i) === 0) {
            var p = url.substring(url.indexOf('p=')).split('&')[0];
            if (p != 'p=' && url.indexOf(';') != -1) {
              return url.substr(0, url.indexOf(';')) + '?' + p;
            } else {
              return url;
            }
          } else {
            return url;
          }
        },

        // establishes the connection
        pingCliqzResults: function pingCliqzResults() {
          CliqzUtils.httpHandler('HEAD', CliqzUtils.RESULTS_PROVIDER_PING);
        },

        getResultsProviderQueryString: function getResultsProviderQueryString(q) {
          let numberResults = 5;
          if (CliqzUtils.getPref('languageDedup', false)) {
            numberResults = 7;
          }
          if (CliqzUtils.getPref('modules.context-search.enabled', false)) {
            numberResults = 10;
          }
          return encodeURIComponent(q) + CliqzUtils.encodeSessionParams() + CliqzLanguage$1.stateToQueryString() + CliqzUtils.encodeLocale() + CliqzUtils.encodePlatform() + CliqzUtils.encodeResultOrder() + CliqzUtils.encodeCountry() + CliqzUtils.encodeFilter() + CliqzUtils.encodeLocation(true) + // @TODO: remove true
          CliqzUtils.encodeResultCount(numberResults) + CliqzUtils.enncodeQuerySuggestionParam() + CliqzUtils.disableWikiDedup();
        },

        getRichHeaderQueryString: function getRichHeaderQueryString(q, loc) {
          let numberResults = 5;
          if (CliqzUtils.getPref('languageDedup', false)) {
            numberResults = 7;
          }
          if (CliqzUtils.getPref('modules.context-search.enabled', false)) {
            numberResults = 10;
          }
          return "&q=" + encodeURIComponent(q) + // @TODO: should start with &q=
          CliqzUtils.encodeSessionParams() + CliqzLanguage$1.stateToQueryString() + CliqzUtils.encodeLocale() + CliqzUtils.encodePlatform() + CliqzUtils.encodeResultOrder() + CliqzUtils.encodeCountry() + CliqzUtils.encodeFilter() + CliqzUtils.encodeLocation(true, loc && loc.latitude, loc && loc.longitude) + CliqzUtils.encodeResultCount(numberResults) + CliqzUtils.disableWikiDedup();
        },
        // used in testing only
        fetchFactory() {
          return fetchFactory();
        },

        getBackendResults: function getBackendResults(q) {
          const url = CliqzUtils.RESULTS_PROVIDER + CliqzUtils.getResultsProviderQueryString(q);
          const fetch$$1 = CliqzUtils.fetchFactory();
          const suggestionChoice = CliqzUtils.getPref('suggestionChoice', 0);
          const isOldMixer = CliqzUtils.getPref('searchMode', 'autocomplete') === 'autocomplete';
          const isPrivateMode = CliqzUtils.isPrivateMode();

          CliqzUtils._sessionSeq++;

          // if the user sees the results more than 500ms we consider that he starts a new query
          if (CliqzUtils._queryLastDraw && Date.now() > CliqzUtils._queryLastDraw + 500) {
            CliqzUtils._queryCount++;
          }
          CliqzUtils._queryLastDraw = 0; // reset last Draw - wait for the actual draw
          CliqzUtils._queryLastLength = q.length;

          const backendPromise = fetch$$1(url).then(res => res.json()).then(response => {
            // Logic for offer experiment
            if (prefs.get('myoffrz.experiments.001.position', 'first') === 'last') {
              const offerResults = response.results.filter(r => r.template === 'offer');
              const nonOfferResults = response.results.filter(r => r.template !== 'offer');

              response.results = [...nonOfferResults, ...offerResults];
            }

            if (response.results && (response.results.length > 0 || !config.settings.suggestions)) {

              if (suggestionChoice === 1 && !isPrivateMode) {
                if (response.suggestions && response.suggestions.length > 0) {
                  response.results = response.results.concat([{
                    url: 'https://cliqz.com/q=' + q,
                    template: 'inline-suggestion',
                    type: 'suggestion',
                    snippet: {
                      suggestions: response.suggestions.filter(r => r !== q),
                      source: 'Cliqz'
                    }
                  }]);
                }
              }

              return {
                response,
                query: q
              };
            } else if (config.settings.suggestions && suggestionChoice === 2) {
              return CliqzUtils.getSuggestions(q);
            } else {
              return {
                response: {
                  results: []
                },
                query: q
              };
            }
          });

          if (isOldMixer && suggestionChoice > 1 && !isPrivateMode) {
            return Promise.all([backendPromise, CliqzUtils.getSuggestions(q)]).then(values => {
              const searchResults = values[0].response.results || [];
              const googleSuggestions = values[1].response.results || [];

              return {
                query: q,
                response: {
                  results: searchResults.concat(googleSuggestions)
                }
              };
            });
          }

          return backendPromise;
        },

        historySearch: getHistory,

        getSuggestions: function getSuggestions(q) {
          const searchDataType = 'application/x-suggestions+json';
          const defaultEngine = CliqzUtils.getDefaultSearchEngine();
          const fetch$$1 = CliqzUtils.fetchFactory();
          const submissionUrl = defaultEngine.getSubmissionForQuery(q, searchDataType);

          if (submissionUrl) {
            return fetch$$1(submissionUrl).then(res => res.json()).then(response => {
              return {
                response: {
                  results: response[1].filter(r => r !== q).map(q => {
                    return {
                      url: defaultEngine.getSubmissionForQuery(q),
                      template: 'suggestion',
                      type: 'suggestion',
                      snippet: { suggestion: q }
                    };
                  })
                },
                query: response[0]
              };
            });
          } else {
            // there is no suggestion URL for the default search Engine
            return Promise.resolve({
              response: { results: [] },
              query: q
            });
          }
        },
        setDefaultIndexCountry: function setDefaultIndexCountry(country) {
          var supportedCountries = JSON.parse(CliqzUtils.getPref("config_backends", '["de"]'));
          if (supportedCountries.indexOf(country) !== -1) {
            // supported country
            CliqzUtils.setPref('backend_country', country);
          } else {
            // unsupported country - fallback to
            //    'de' for german speaking users
            //    'en' for everybody else
            if (CliqzUtils.currLocale === 'de') {
              CliqzUtils.setPref('backend_country', 'de');
            } else {
              CliqzUtils.setPref('backend_country', 'us');
            }
          }
        },
        encodePlatform: function encodePlatform() {
          return '&platform=' + (isMobile ? '1' : '0');
        },
        encodeLocale: function encodeLocale() {
          return '&locale=' + CliqzUtils.PREFERRED_LANGUAGE || '';
        },
        encodeCountry: function encodeCountry() {
          return '&country=' + CliqzUtils.getPref('backend_country', 'de');
        },
        disableWikiDedup: function disableWikiDedup() {
          // disable wikipedia deduplication on the backend side
          var doDedup = CliqzUtils.getPref("languageDedup", false);
          if (doDedup) return '&ddl=0';else return "";
        },
        getAdultContentFilterState: function getAdultContentFilterState() {
          var data = {
            'conservative': 3,
            'moderate': 0,
            'liberal': 1
          },
              pref = CliqzUtils.getPref('adultContentFilter', 'moderate');
          return data[pref];
        },
        encodeFilter: function encodeFilter() {
          return '&adult=' + CliqzUtils.getAdultContentFilterState();
        },
        encodeResultCount: function encodeResultCount(count) {
          count = count || 5;
          return '&count=' + count;
        },
        enncodeQuerySuggestionParam: function enncodeQuerySuggestionParam() {
          const suggestionsEnabled = CliqzUtils.getPref("suggestionsEnabled", false) || CliqzUtils.getPref("suggestionChoice", 0) === 1;

          return `&suggest=${suggestionsEnabled ? 1 : 0}`;
        },
        encodeResultType: function encodeResultType(type) {
          if (type.indexOf('action') !== -1) return ['T'];else if (type.indexOf('cliqz-results') == 0) return CliqzUtils.encodeCliqzResultType(type);else if (type.indexOf('cliqz-pattern') == 0) return ['C'];else if (type === 'cliqz-extra') return ['X'];else if (type === 'cliqz-series') return ['S'];else if (type === 'cliqz-suggestion') return ['Z'];else if (type.indexOf('bookmark') == 0 || type.indexOf('tag') == 0) return ['B'].concat(CliqzUtils.encodeCliqzResultType(type));else if (type.indexOf('favicon') == 0 || type.indexOf('history') == 0) return ['H'].concat(CliqzUtils.encodeCliqzResultType(type));

          // cliqz type = "cliqz-custom sources-X"
          else if (type.indexOf('cliqz-custom') == 0) return type.substr(21);

          return type; //should never happen
        },
        //eg types: [ "H", "m" ], [ "H|instant", "X|11" ]
        isPrivateResultType: function isPrivateResultType() {
          let type = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

          if (type.length === 0) {
            return false;
          }

          var onlyType = type[0].split('|')[0];
          var hasCluster = type.some(function (a) {
            return a.split('|')[0] === 'C';
          });

          if (hasCluster) {
            // we want to be extra carefull and do not send back any cluster information
            return true;
          }

          return 'HBTCS'.indexOf(onlyType) != -1 && type.length == 1;
        },
        // cliqz type = "cliqz-results sources-XXXXX" or "favicon sources-XXXXX" if combined with history
        encodeCliqzResultType: function encodeCliqzResultType(type) {
          var pos = type.indexOf('sources-');
          if (pos != -1) return CliqzUtils.encodeSources(type.substr(pos + 8));else return [];
        },
        // random ID generated at each urlbar focus
        _searchSession: '',
        // number of sequences in each session
        _sessionSeq: 0,
        _queryLastLength: null,
        _queryLastDraw: null,
        // number of queries in search session
        _queryCount: null,
        setSearchSession: function setSearchSession(rand) {
          CliqzUtils._searchSession = rand;
          CliqzUtils._sessionSeq = 0;
          CliqzUtils._queryCount = 0;
          CliqzUtils._queryLastLength = 0;
          CliqzUtils._queryLastDraw = 0;
        },
        encodeSessionParams: function encodeSessionParams() {
          if (CliqzUtils._searchSession.length) {
            return '&s=' + encodeURIComponent(CliqzUtils._searchSession) + '&n=' + CliqzUtils._sessionSeq + '&qc=' + CliqzUtils._queryCount;
          } else return '';
        },

        encodeLocation: function encodeLocation(specifySource, lat, lng) {
          // default geolocation 'yes' for funnelCake - 'ask' for everything else
          let locationPref = CliqzUtils.getPref('share_location', config.settings.geolocation || 'ask');
          if (locationPref === 'showOnce') {
            locationPref = 'ask';
          }
          let qs = `&loc_pref=${locationPref}`;

          if (CliqzUtils.USER_LAT && CliqzUtils.USER_LNG || lat && lng) {
            qs += ['&loc=', lat || CliqzUtils.USER_LAT, ',', lng || CliqzUtils.USER_LNG, specifySource ? ',U' : ''].join('');
          }

          return qs;
        },
        encodeSources: function encodeSources(sources) {
          return sources.toLowerCase().split(', ').map(function (s) {
            if (s.indexOf('cache') == 0) // to catch 'cache-*' for specific countries
              return 'd';else return VERTICAL_ENCODINGS[s] || s;
          });
        },
        /**
         * @deprecated - use isPrivateMode instead
         * @todo - add deprecation logging in 1.23
         */
        isPrivate: CLIQZEnvironment.isPrivate,
        /**
         * @deprecated - use isPrivateMode instead
         * @todo - add deprecation logging in 1.23
         */
        isOnPrivateTab: CLIQZEnvironment.isOnPrivateTab,
        isPrivateMode(win) {
          if (!win) {
            win = CliqzUtils.getWindow();
          }
          return CliqzUtils.isPrivate(win) || CliqzUtils.isOnPrivateTab(win);
        },
        telemetry: function telemetry() {
          const args = arguments;
          CliqzUtils.telemetryHandlers.forEach(handler => handler.apply(null, args));
        },
        resultTelemetry: function resultTelemetry(query, queryAutocompleted, resultIndex, resultUrl, resultOrder, extra) {
          if (CliqzUtils.isPrivateMode()) {
            return;
          }

          CliqzUtils.setResultOrder(resultOrder);
          CliqzEvents.pub("human-web:sanitize-result-telemetry", { type: 'extension-result-telemetry',
            q: query,
            s: CliqzUtils.encodeSessionParams(),
            msg: {
              i: resultIndex,
              o: CliqzUtils.encodeResultOrder(),
              u: resultUrl ? resultUrl : '',
              a: queryAutocompleted,
              e: extra
            },
            endpoint: CliqzUtils.RESULTS_PROVIDER_LOG,
            method: "GET"
          });
          CliqzUtils.setResultOrder('');
        },
        sendUserFeedback(data) {
          data._type = 'user_feedback';
          // Params: method, url, resolve, reject, timeout, data
          httpHandler$1('POST', CLIQZEnvironment.LOG, null, null, 10000, JSON.stringify(data));
        },
        _resultOrder: '',
        setResultOrder: function setResultOrder(resultOrder) {
          CliqzUtils._resultOrder = resultOrder;
        },
        encodeResultOrder: function encodeResultOrder() {
          return CliqzUtils._resultOrder && CliqzUtils._resultOrder.length ? '&o=' + encodeURIComponent(JSON.stringify(CliqzUtils._resultOrder)) : '';
        },
        setInterval: CLIQZEnvironment.setInterval,
        setTimeout: CLIQZEnvironment.setTimeout,
        clearTimeout: CLIQZEnvironment.clearTimeout,
        clearInterval: CLIQZEnvironment.clearTimeout,
        Promise: CLIQZEnvironment.Promise,

        /* i18n -- start */
        // TODO: all those should be remove and used from i18n directly
        get locale() {
          return i18n.locale;
        },
        get currLocale() {
          return i18n.currLocale;
        },
        get PREFERRED_LANGUAGE() {
          return i18n.PREFERRED_LANGUAGE;
        },
        get LOCALE_PATH() {
          return i18n.LOCALE_PATH;
        },
        getLanguageFromLocale: getLanguageFromLocale,
        getLocalizedString: getMessage,
        // gets all the elements with the class 'cliqz-locale' and adds
        // the localized string - key attribute - as content
        localizeDoc: function localizeDoc(doc) {
          var locale = doc.getElementsByClassName('cliqz-locale');
          for (var i = 0; i < locale.length; i++) {
            var el = locale[i];
            el.textContent = getMessage(el.getAttribute('key'));
          }
        },
        /* i18n -- end */
        /* platform -- start */
        isWindows,
        isLinux,
        isMac,
        /* platform -- end */
        getWindow: CLIQZEnvironment.getWindow,
        getWindowID: CLIQZEnvironment.getWindowID,
        /**
         * Bind functions contexts to a specified object.
         * @param {Object} from - An object, whose function properties will be processed.
         * @param {Object} to - An object, which will be the context (this) of processed functions.
         */
        bindObjectFunctions: function bindObjectFunctions(from, to) {
          for (var funcName in from) {
            var func = from[funcName];
            if (!from.hasOwnProperty(funcName)) continue;
            // Can't compare with prototype of object from a different module.
            if (typeof func != "function") continue;
            from[funcName] = func.bind(to);
          }
        },
        tryDecodeURIComponent: tryDecodeURIComponent,
        tryDecodeURI: tryDecodeURI,
        tryEncodeURIComponent: tryEncodeURIComponent,
        tryEncodeURI: tryEncodeURI,
        parseQueryString: function parseQueryString(qstr) {
          var query = {};
          var a = (qstr || '').split('&');
          for (var i in a) {
            var b = a[i].split('=');
            query[CliqzUtils.tryDecodeURIComponent(b[0])] = CliqzUtils.tryDecodeURIComponent(b[1]);
          }

          return query;
        },
        roundToDecimal: function roundToDecimal(number, digits) {
          var multiplier = Math.pow(10, digits);
          return Math.round(number * multiplier) / multiplier;
        },
        getAdultFilterState: function getAdultFilterState() {
          var data = {
            'conservative': {
              name: CliqzUtils.getLocalizedString('always'),
              selected: false
            },
            'moderate': {
              name: CliqzUtils.getLocalizedString('always_ask'),
              selected: false
            },
            'liberal': {
              name: CliqzUtils.getLocalizedString('never'),
              selected: false
            }
          };
          let state = CliqzUtils.getPref('adultContentFilter', 'moderate');
          if (state === 'showOnce') {
            state = 'moderate';
          }
          data[state].selected = true;

          return data;
        },
        getLocationPermState() {
          var data = {
            'yes': {
              name: CliqzUtils.getLocalizedString('always'),
              selected: false
            },
            'ask': {
              name: CliqzUtils.getLocalizedString('always_ask'),
              selected: false
            },
            'no': {
              name: CliqzUtils.getLocalizedString('never'),
              selected: false
            }
          };
          var currentState = CliqzUtils.getPref('share_location', config.settings.geolocation || 'ask');
          if (currentState === 'showOnce') {
            currentState = 'ask';
          }

          // default geolocation 'yes' for funnelCake - 'ask' for everything else
          data[currentState].selected = true;

          return data;
        },

        // Returns result elements selecatble and navigatable from keyboard.
        // |container| search context, usually it's `CLIQZ.UI.gCliqzBox`.
        extractSelectableElements(container) {
          return Array.prototype.slice.call(container.querySelectorAll('[arrow]')).filter(function (el) {
            // dont consider hidden elements
            if (el.offsetParent == null) return false;

            if (!el.getAttribute('arrow-if-visible')) return true;

            // check if the element is visible
            //
            // for now this check is enough but we might be forced to switch to a
            // more generic approach - maybe using document.elementFromPoint(x, y)
            if (el.offsetLeft + el.offsetWidth > el.parentElement.offsetWidth) return false;
            return true;
          });
        },

        getNoResults: CLIQZEnvironment.getNoResults,
        getParameterByName: function getParameterByName(name, location) {
          name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
          var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
              results = regex.exec(location.search);
          return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
        },
        search: CLIQZEnvironment.search,
        distance: function distance(lon1, lat1) {
          let lon2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : CliqzUtils.USER_LNG;
          let lat2 = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : CliqzUtils.USER_LAT;

          /** Converts numeric degrees to radians */
          function degreesToRad(degree) {
            return degree * Math.PI / 180;
          }

          var R = 6371; // Radius of the earth in km
          if (!lon2 || !lon1 || !lat2 || !lat1) {
            return -1;
          }
          var dLat = degreesToRad(lat2 - lat1); // Javascript functions in radians
          var dLon = degreesToRad(lon2 - lon1);
          var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) + Math.cos(degreesToRad(lat1)) * Math.cos(degreesToRad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
          var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
          var d = R * c; // Distance in km
          return d;
        },
        getDefaultSearchEngine: CLIQZEnvironment.getDefaultSearchEngine,
        copyResult: CLIQZEnvironment.copyResult,
        openPopup: CLIQZEnvironment.openPopup,
        getAllCliqzPrefs: CLIQZEnvironment.getAllCliqzPrefs,
        isDefaultBrowser: CLIQZEnvironment.isDefaultBrowser,
        setDefaultSearchEngine: CLIQZEnvironment.setDefaultSearchEngine,
        isUnknownTemplate: CLIQZEnvironment.isUnknownTemplate,
        getEngineByName: CLIQZEnvironment.getEngineByName,
        addEngineWithDetails: CLIQZEnvironment.addEngineWithDetails,
        restoreHiddenSearchEngines: CLIQZEnvironment.restoreHiddenSearchEngines,
        removeEngine: CLIQZEnvironment.removeEngine,
        getEngineByAlias: CLIQZEnvironment.getEngineByAlias,
        getSearchEngines: CLIQZEnvironment.getSearchEngines,
        updateAlias: CLIQZEnvironment.updateAlias,
        openLink: CLIQZEnvironment.openLink,
        getCliqzPrefs() {
          function filterer(entry) {
            // avoid privay leaking prefs ('backup').
            // avoid irrelevant deep prefs (something.otherthing.x.y)
            // avoid prefs sending domains.
            // allow 'enabled' prefs
            return entry.indexOf('.') == -1 && entry.indexOf('backup') == -1 && entry.indexOf('attrackSourceDomainWhitelist') == -1 || entry.indexOf('.enabled') != -1;
          }

          let cliqzPrefs = {};
          let cliqzPrefsKeys = CliqzUtils.getAllCliqzPrefs().filter(filterer);

          for (let i = 0; i < cliqzPrefsKeys.length; i++) {
            cliqzPrefs[cliqzPrefsKeys[i]] = prefs.get(cliqzPrefsKeys[i]);
          }

          return cliqzPrefs;
        },
        promiseHttpHandler: promiseHttpHandler,
        registerResultProvider: function registerResultProvider(o) {
          CLIQZEnvironment.CliqzResultProviders = o.ResultProviders;
          CLIQZEnvironment.Result = o.Result;
        },
        lastRenderedResults: [],
        lastRenderedURLs: [],
        lastSelection: -1,
        onRenderComplete: function onRenderComplete(query, box) {
          if (!CLIQZEnvironment.onRenderComplete) return;

          CliqzUtils.lastRenderedResults = this.extractSelectableElements(box).filter(function (node) {
            return !!(node.getAttribute("url") || node.getAttribute("href"));
          });
          CliqzUtils.lastRenderedURLs = CliqzUtils.lastRenderedResults.map(function (node) {
            return node.getAttribute("url") || node.getAttribute("href");
          });

          CLIQZEnvironment.onRenderComplete(query, CliqzUtils.lastRenderedURLs);
        },
        fetchAndStoreConfig() {
          return Promise.resolve();
        },
        onSelectionChange: function onSelectionChange(element) {
          if (!element) return;

          var current = CliqzUtils.lastRenderedResults.indexOf(element);
          if (current == -1) {
            current = CliqzUtils.lastRenderedURLs.indexOf(element.getAttribute("url"));
          }

          if (CliqzUtils.lastSelection == current) return;
          CliqzUtils.lastSelection = current;

          if (!CLIQZEnvironment.onResultSelectionChange) return;
          CLIQZEnvironment.onResultSelectionChange(current);
        }
      };

      // source: https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
      function completeAssign(target) {
        for (var _len = arguments.length, sources = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          sources[_key - 1] = arguments[_key];
        }

        sources.forEach(source => {
          let descriptors = Object.keys(source).reduce((descriptors, key) => {
            descriptors[key] = Object.getOwnPropertyDescriptor(source, key);
            return descriptors;
          }, {});
          // by default, Object.assign copies enumerable Symbols too
          if (typeof Symbol !== 'undefined') {
            Object.getOwnPropertySymbols(source).forEach(sym => {
              let descriptor = Object.getOwnPropertyDescriptor(source, sym);
              if (descriptor.enumerable) {
                descriptors[sym] = descriptor;
              }
            });
          }
          Object.defineProperties(target, descriptors);
        });
        return target;
      }

      var background = function (originalBackground) {
        const background = completeAssign({}, originalBackground);
        const bgInit = background.init;
        const bgUnload = background.unload;
        const bgEvents = background.events;

        // bind actions to background object
        Object.keys(background.actions || {}).forEach(action => {
          background.actions[action] = background.actions[action].bind(background);
        });

        background.init = function init() {
          for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
            args[_key2] = arguments[_key2];
          }

          const promise = Promise.resolve(bgInit.apply(background, args));

          Object.keys(bgEvents || {}).forEach(event => {
            bgEvents[event] = bgEvents[event].bind(background);
            CliqzEvents.sub(event, bgEvents[event]);
          });
          return promise;
        };

        background.unload = function unload() {
          Object.keys(bgEvents || {}).forEach(event => {
            CliqzEvents.un_sub(event, bgEvents[event]);
          });

          for (var _len3 = arguments.length, args = Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
            args[_key3] = arguments[_key3];
          }

          bgUnload.apply(background, args);
        };

        return background;
      };

      // not available in older FF versions

      /* global OS */

      try {
        Components.utils.import('resource://gre/modules/osfile.jsm');
      } catch (e) {
        // Nothing
      }

      function getFullPath(filePath) {
        const path = Array.isArray(filePath) ? filePath : [filePath];
        return OS.Path.join(OS.Constants.Path.profileDir, ...path);
      }

      function encodeText(text) {
        return new TextEncoder().encode(text);
      }

      function decodeText(array) {
        return new TextDecoder().decode(array);
      }

      function readFile$1(filePath) {
        var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

        let isText = _ref.isText;

        return OS.File.read(getFullPath(filePath)).then(data => isText ? decodeText(data) : data);
      }

      function writeFile$1(filePath, data) {
        var _ref2 = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};

        let isText = _ref2.isText;

        return OS.File.writeAtomic(getFullPath(filePath), isText ? encodeText(data) : data);
      }

      // Not atomic truncating write


      function mkdir$1(dirPath) {
        return OS.File.makeDir(getFullPath(dirPath), { ignoreExisting: true });
      }

      function fileExists$1(path) {
        return OS.File.exists(getFullPath(path));
      }

      // Opens given path file for appending, and resolves to file descriptor object,
      // which can be used as input for writeStringFile and close functions


      // Writes to open file


      // Closes open file

      const notImplementedPromise = () => new Promise(() => notImplemented());

      /**
       * Read file from default location.
       *
       * @param {string|Array} path
       * @param {Object} options - {bool} isText: decodes data before returning
       * @returns {Promise}
       */

      /**
       * Write to file from default location.
       *
       * @param {string|Array} path
       * @param {data} data - in a format accepted by the platform
       * @param {Object} options - {bool} isText: encodes data before writing
       * @returns {Promise}
       */

      /**
       * Create directory in default location, does not fail if directory exists.
       *
       * @param {string|Array} path
       * @returns {Promise}
       */

      /**
       * Similar to writeFile, but this one does not do atomic write. Always truncates file.
       *
       * @param {string|Array} path
       * @param {data} data - in a format accepted by the platform
       * @param {Object} options - {bool} isText: encodes data before writing
       * @returns {Promise}
       */

      /**
       * Renames old path to new path.
       *
       * @param {string|Array} oldPath
       * @param {string|Array} newPath
       * @returns {Promise}
       */

      /**
       * Returns whether it exists a file with given path or not.
       *
       * @param {string|Array} path
       * @returns {Promise}
       */
      const fileExists$$1 = fileExists$1 || notImplementedPromise;

      /**
       * Truncates file with given path.
       *
       * @param {string|Array} path
       * @returns {Promise}
       */

      /**
       * Opens file with given file (creating if does not exist) and return
       * file object to be used in writeFD and closeFD functions.
       *
       * @param {string|Array} path
       * @returns {Promise}
       */

      /**
       * Writes to given open file.
       *
       * @param {Object} openFile
       * @param {data} data - in a format accepted by the platform
       * @param {Object} options - {bool} isText: encodes data before writing
       * @returns {Promise}
       */

      /**
       * Closes given open file.
       *
       * @param {Object} openFile
       * @returns {Promise}
       */

      /**
       * Removes file with given path, does not fail if file does not exist.
       *
       * @param {string|Array} path
       * @returns {Promise}
       */

      /**
       * Creates empty file with given path.
       *
       * @param {string|Array} path
       * @returns {Promise}
       */

      /**
       * Returns file size.
       *
       * @param {string|Array} path
       * @returns {Promise}
       */

      /**
       * Joins the given path components.
       *
       * @param {Array} paths
       * @returns {Promise}
       */

      Components.utils.import("resource://gre/modules/Services.jsm");
      Components.utils.import("resource://gre/modules/FileUtils.jsm");

      const connections = new Map();

      function open(databaseName) {
        let connection;
        if (!connections.has(databaseName)) {
          const filePath = FileUtils.getFile("ProfD", [databaseName]);
          connection = Services.storage.openDatabase(filePath);
          connections.set(databaseName, connection);
        } else {
          connection = connections.get(databaseName);
        }
        return connection;
      }

      function close(databaseName) {
        if (!connections.has(databaseName)) {
          return;
        }
        const connection = connections.get(databaseName);
        connections.delete(databaseName);
        // according to docs we should not use close because we use async statements
        // see https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/mozIStorageConnection#close()
        connection.asyncClose();
      }

      // TODO: remove default export

      var Storage$1 = class {
        constructor(CliqzSecureMessage) {
          this.CliqzSecureMessage = CliqzSecureMessage;
          this.dbName = 'cliqz.dbhumanweb';

          if (fileExists$$1(this.dbName)) {
            this.connection = open(this.dbName);
          } else {
            this.connection = open(this.dbName);
          }

          // Need to check for create table, even if the DB already exists.
          this.createTable();
        }

        createTable() {
          const localcheck = `create table if not exists localcheck(
      id VARCHAR(24) PRIMARY KEY NOT NULL,
      data VARCHAR(1000000)
    )`;
          (this.connection.executeSimpleSQLAsync || this.connection.executeSimpleSQL)(localcheck);
        }

        close() {
          close(this.dbName);
          this.connnection = null;
        }

        saveRecord(id, data) {
          if (!this.connection) {
            return;
          }
          const st = this.connection.createStatement('INSERT OR REPLACE INTO localcheck (id,data) VALUES (:id, :data)');
          st.params.id = id;
          st.params.data = data;

          st.executeAsync({
            handleError: aError => {
              if (this.CliqzSecureMessage && this.CliqzSecureMessage.debug) {
                console$1.log(`SQL error: ${aError.message}`, this.CliqzSecureMessage.LOG_KEY);
              }
            },
            handleCompletion: () => {
              if (this.CliqzSecureMessage && this.CliqzSecureMessage.debug) {
                console$1.log('Insertion success', this.CliqzSecureMessage.LOG_KEY);
              }
            }
          });
        }

        loadRecord(id, callback) {
          const stmt = this.connection.createAsyncStatement('SELECT id, data FROM localcheck WHERE id = :id;');
          stmt.params.id = id;

          const res = [];
          stmt.executeAsync({
            handleResult: aResultSet => {
              if (!this.CliqzSecureMessage) {
                return;
              }
              for (let row = aResultSet.getNextRow(); row; row = aResultSet.getNextRow()) {
                if (row.getResultByName('id') === id) {
                  res.push(row.getResultByName('data'));
                } else {
                  if (this.CliqzSecureMessage.debug) {
                    console$1.log('There are more than one record', this.CliqzSecureMessage.LOG_KEY);
                  }
                  callback(null);
                }
                break;
              }
            },
            handleError: aError => {
              if (!this.CliqzSecureMessage) return;
              if (this.CliqzSecureMessage.debug) {
                console$1.log(`SQL error: ${aError.message}`, this.CliqzSecureMessage.LOG_KEY);
              }
              callback(null);
            },
            handleCompletion: () => {
              if (!this.CliqzSecureMessage) {
                return;
              }
              if (res.length === 1) {
                callback(res[0]);
              } else {
                callback(null);
              }
            }
          });
        }

        loadKeys() {
          return new Promise(resolve => {
            this.loadRecord('userKey', data => {
              if (!data) {
                if (this.CliqzSecureMessage.debug) {
                  console$1.log('There was no key for the user', this.CliqzSecureMessage.LOG_KEY);
                }
                resolve(null);
              } else {
                try {
                  resolve(JSON.parse(data));
                } catch (ee) {
                  resolve(null);
                }
              }
            });
          });
        }

        saveKeys(_data) {
          return new Promise(resolve => {
            if (!this.connection) {
              return;
            }
            const st = this.connection.createStatement('INSERT OR REPLACE INTO localcheck (id,data) VALUES (:id, :data)');
            st.params.id = 'userKey';
            st.params.data = JSON.stringify(_data);

            st.executeAsync({
              handleError: aError => {
                if (this.CliqzSecureMessage && this.CliqzSecureMessage.debug) {
                  if (this.CliqzSecureMessage.debug) {
                    console$1.log(`SQL error: ${aError.message}`, this.CliqzSecureMessage.LOG_KEY);
                  }
                  resolve({ status: false, data: _data });
                }
              },
              handleCompletion: () => {
                if (this.CliqzSecureMessage && this.CliqzSecureMessage.debug) {
                  if (this.CliqzSecureMessage.debug) {
                    console$1.log('Insertion success', this.CliqzSecureMessage.LOG_KEY);
                  }
                  resolve({ status: true, data: _data });
                }
              }
            });
          });
        }

        loadLocalCheckTable() {
          this.loadRecord('localTemporalUniq', data => {
            if (!data) {
              if (this.CliqzSecureMessage.debug) {
                console$1.log('There was no data on action stats', this.CliqzSecureMessage.LOG_KEY);
              }
              this.CliqzSecureMessage.localTemporalUniq = {};
            } else {
              try {
                this.CliqzSecureMessage.localTemporalUniq = JSON.parse(data);
              } catch (ee) {
                console$1.log(`Loading local uniq: ${ee}`, this.CliqzSecureMessage.LOG_KEY);
                this.CliqzSecureMessage.localTemporalUniq = {};
              }
            }
          });
        }

        saveLocalCheckTable() {
          if (this.CliqzSecureMessage.localTemporalUniq) {
            this.saveRecord('localTemporalUniq', JSON.stringify(this.CliqzSecureMessage.localTemporalUniq));
          }
        }
      };

      function _toArray(arr) {
        return Array.isArray(arr) ? arr : Array.from(arr);
      }

      function makeDirRecursive(path) {
        let from = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

        var _path = _toArray(path);

        const first = _path[0],
              rest = _path.slice(1);

        if (!first) {
          return Promise.resolve();
        }

        return mkdir$1(from.concat(first)).then(() => makeDirRecursive(rest, from.concat(first)));
      }

      class Storage$2 {
        constructor(filePath) {
          this.filePath = filePath;
        }

        load() {
          return readFile$1(this.filePath);
        }

        save(data) {
          const dirPath = this.filePath.slice(0, -1);
          return makeDirRecursive(dirPath).then(() => {
            try {
              // If TextEncoder is not available just use `data`
              return new TextEncoder().encode(data);
            } catch (e) {
              return data;
            }
          }).then(encoded => writeFile$1(this.filePath, encoded));
        }
      }

      /* eslint-disable no-bitwise */
      /* eslint-disable no-param-reassign */
      /* eslint-disable no-plusplus */
      /* eslint-disable no-sparse-arrays */

      function toByteArray(data) {
        if (data.buffer) {
          return new Uint8Array(data.buffer, data.byteOffset, data.byteLength);
        }
        return new Uint8Array(data);
      }

      function _toString(data) {
        const CHUNK_SIZE = 32767;
        const c = [];
        const len = data.length;
        for (let i = 0; i < len; i += CHUNK_SIZE) {
          c.push(String.fromCharCode.apply(null, data.subarray(i, i + CHUNK_SIZE)));
        }
        return c.join('');
      }

      function _fromString(data) {
        const res = new Uint8Array(data.length);
        const len = data.length;
        for (let i = 0; i < len; i += 1) {
          res[i] = data.charCodeAt(i);
        }
        return res;
      }

      // http://ecmanaut.blogspot.de/2006/07/encoding-decoding-utf8-in-javascript.html
      function _toUTF8(s) {
        return _fromString(unescape(encodeURIComponent(s)));
      }

      function _fromUTF8(s) {
        return decodeURIComponent(escape(_toString(s)));
      }

      /* Returns a string given a Uint8Array UTF-8 encoding */
      const decoder = TextDecoder ? new TextDecoder() : { decode: _fromUTF8 };
      function fromUTF8(bytes) {
        return decoder.decode(toByteArray(bytes));
      }

      /* Returns a Uint8Array UTF-8 encoding of the given string */
      const encoder = TextEncoder ? new TextEncoder() : { encode: _toUTF8 };

      var lazyLoader = (bundle, exportedSymbol) => {
        const url = `${config.baseURL}vendor/${bundle}`;
        let lib = null;

        const load = () => {
          if (lib === null) {
            // in case we load in chrome:// pages, the lib may be loaded on a window
            if (typeof window$1 !== 'undefined') {
              if (window$1[exportedSymbol]) {
                lib = window$1[exportedSymbol];
                return;
              }
            }

            const target = {
              window: safeGlobal
            };

            Services.scriptloader.loadSubScriptWithOptions(url, {
              target,
              ignoreCache: true
            });

            if (target[exportedSymbol] !== undefined) {
              lib = target[exportedSymbol];
            } else {
              lib = target.window[exportedSymbol];
            }
          }
        };

        /* eslint-disable func-names, prefer-arrow-callback, new-cap */
        return new Proxy(function () {}, {
          /**
           * Intercept construction on the proxy.
           */
          construct: (target, argumentsList) => {
            load();
            if (lib) {
              return new lib(...argumentsList);
            }
            return null;
          },

          /**
           * Intercept call on the proxy
           */
          apply: (target, thisArg, argumentsList) => {
            load();
            if (lib) {
              return lib.apply(thisArg, argumentsList);
            }
            return null;
          },

          get: (target, prop) => {
            load();
            if (lib) {
              return lib[prop];
            }
            return null;
          },

          set: (target, key, prop) => {
            load();
            if (lib) {
              lib[key] = prop;
              return true;
            }
            return false;
          }
        });
        /* eslint-enable func-names, prefer-arrow-callback, new-cap */
      };

      const zlibProxy = lazyLoader('pako.min.js', 'pako');

      function inflate() {
        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }

        return zlibProxy.inflate.call(zlibProxy, ...args);
      }

      function deflate() {
        for (var _len2 = arguments.length, args = Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return zlibProxy.deflate.call(zlibProxy, ...args);
      }

      // Common durations
      const ONE_SECOND = 1000;
      const ONE_MINUTE = 60 * ONE_SECOND;
      const ONE_HOUR = 60 * ONE_MINUTE;

      function get(url) {
        return fetch(url).then(response => response.text());
      }

      /* Abstract away the pattern `onUpdate` trigger list of
       * callbacks. This pattern is used a lot, so it looks worth
       * it to create a base class to handle it.
       */
      class UpdateCallbackHandler {
        constructor() {
          this.callbacks = [];
        }

        onUpdate(callback) {
          this.callbacks.push(callback);
        }

        triggerCallbacks(args) {
          return Promise.all(this.callbacks.map(cb => cb(args)));
        }
      }

      /* A resource is responsible for handling a remote resource persisted on
       * disk. It will be persisted on disk upon each update from remote. It is
       * also able to parse JSON automatically if `dataType` is 'json'.
       */
      class Resource {

        constructor(name) {
          let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          this.name = typeof name === 'string' ? [name] : name;
          this.remoteURL = options.remoteURL;
          this.dataType = options.dataType || 'json';
          this.filePath = ['cliqz', ...this.name];
          this.chromeURL = options.chromeURL || `${config.baseURL}${this.name.join('/')}`;
          this.storage = new Storage$2(this.filePath);
          this.remoteOnly = options.remoteOnly || false;
          this.compress = options.compress || isChromium ? true : false;
        }

        /**
         * Loads the resource. Load either a cached version of the file available in
         * the profile, or at the chrome URL (if provided) or from remote.
         *
         * @returns a Promise resolving to the resource. This Promise can fail on
         * error (if the remote resource cannot be fetched, or if the parsing
         * fails, for example), thus **you should should add a _catch_** to this
         * promise to handle errors properly.
         */
        load() {
          return this.storage.load().then(data => this.decompressData(data)).then(data => {
            try {
              // data might be a plain string in web extension case
              // for react native the TextDecoder.decode returns an empty string
              return fromUTF8(data) || data;
            } catch (e) {
              return data;
            }
          }).then(data => this.parseData(data)).catch(() => {
            if (this.remoteOnly) {
              return Promise.reject('Should update only from remote');
            } else {
              return this.updateFromURL(this.chromeURL);
            }
          }).catch(() => this.updateFromRemote());
        }

        /**
         * Tries to update the resource from the `remoteURL`.
         *
         * @returns a Promise resolving to the updated resource. Similarly
         * to the `load` method, the promise can fail, and thus you should
         * had a **catch** close to your promise to handle any exception.
         */
        updateFromRemote() {
          if (this.remoteURL === undefined) {
            return Promise.reject('updateFromRemote: remoteURL is undefined');
          }
          return this.updateFromURL(this.remoteURL);
        }

        /* *****************************************************************
         * Private API
         ******************************************************************/

        updateFromURL(url) {
          if (url) {
            return get(url).then(this.persist.bind(this));
          }

          return Promise.reject('updateFromURL: url is undefined');
        }

        compressData(data) {
          if (this.compress) {
            return deflate(data, { to: 'string' });
          } else {
            return data;
          }
        }

        decompressData(data) {
          if (this.compress) {
            try {
              return inflate(data, { to: 'string' });
            } catch (e) {
              return data;
            }
          } else {
            return data;
          }
        }

        persist(data) {
          return this.parseData(data).then(parsed => {
            const saveData = this.compressData(data);
            return this.storage.save(saveData).catch(e => console$1.error('resource-loader error on persist: ', e)).then(() => parsed);
          });
        }

        parseData(data) {
          if (this.dataType === 'json') {
            try {
              const parsed = JSON.parse(data);
              return Promise.resolve(parsed);
            } catch (e) {
              return Promise.reject(`parseData: failed with exception ${e} ${data}`);
            }
          }

          return Promise.resolve(data);
        }
      }

      class ResourceLoader extends UpdateCallbackHandler {

        constructor(resourceName) {
          let options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

          super();

          this.resource = new Resource(resourceName, options);
          this.cron = options.cron || ONE_HOUR;
          this.updateInterval = options.updateInterval || 10 * ONE_MINUTE;
          this.intervalTimer = CliqzUtils.setInterval(this.updateFromRemote.bind(this), this.updateInterval);
        }

        /**
         * Loads the resource hold by `this.resource`. This can return
         * a failed promise. Please read `Resource.load` doc string for
         * further information.
         */
        load() {
          return this.resource.load();
        }

        /**
         * Updates the resource from remote (maximum one time per `cron`
         * time frame).
         *
         * @returns a Promise which never fails, since this update will be
         * triggered by `setInterval` and thus you cannot catch. If the update
         * fails, then the callback won't be called.
         */
        updateFromRemote() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
              _ref$force = _ref.force;

          let force = _ref$force === undefined ? false : _ref$force;

          const pref = `resource-loader.lastUpdates.${this.resource.name.join('/')}`;
          const lastUpdate = Number(CliqzUtils.getPref(pref, 0));
          const currentTime = Date.now();

          if (force || currentTime > this.cron + lastUpdate) {
            return this.resource.updateFromRemote().then(data => {
              CliqzUtils.setPref(pref, String(Date.now()));
              return data;
            }).then(this.triggerCallbacks.bind(this)).catch(() => undefined);
          }
          return Promise.resolve();
        }

        stop() {
          CliqzUtils.clearInterval(this.intervalTimer);
        }
      }

      class CryptoWorker {
        // the name is optional (it is only relevant for debugging)
        constructor(name) {
          this.worker = new Worker(`${config.baseURL}hpn/worker.bundle.js?name=${name || ''}`, { name });
        }

        set onmessage(fn) {
          this.worker.onmessage = fn;
        }

        postMessage() {
          this.worker.postMessage(...arguments);
        }

        terminate() {
          this.worker.terminate();
        }
      }

      let app;

      class ModuleMissingError extends Error {
        constructor(moduleName) {
          super(`module '${moduleName}' is missing`);
          this.name = 'ModuleMissingError';
        }
      }

      class ModuleDisabledError extends Error {
        constructor(moduleName) {
          super(`module '${moduleName}' is disabled`);
          this.name = 'ModuleDisabledError';
        }
      }

      /**
       * Given the promise resulting from a call to `action`, ignore errors resulting
       * from a disabled module. This can be especially useful during extension
       * restart when modules are stopped in arbitrary order and some actions might
       * fail.
       */

      class ModuleWrapper {
        constructor(moduleName) {
          this.moduleName = moduleName;
        }

        get module() {
          return app && app.modules[this.moduleName];
        }

        isWindowReady(window) {
          return this.isReady().then(() => this.module.getWindowLoadingPromise(window));
        }

        isReady() {
          if (!this.module) {
            return Promise.reject(new ModuleMissingError(this.moduleName));
          }

          if (this.module.isDisabled) {
            return Promise.reject(new ModuleDisabledError(this.moduleName));
          }

          return this.module.isReady();
        }

        isEnabled() {
          return !!(this.module && !this.module.isDisabled);
        }

        action(actionName) {
          for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
            args[_key - 1] = arguments[_key];
          }

          return this.isReady().then(() => this.module.background.actions[actionName](...args));
        }

        windowAction(window, actionName) {
          for (var _len2 = arguments.length, args = Array(_len2 > 2 ? _len2 - 2 : 0), _key2 = 2; _key2 < _len2; _key2++) {
            args[_key2 - 2] = arguments[_key2];
          }

          return this.isWindowReady(window).then(() => {
            const windowModule = this.module.getWindowModule(window);
            const action = windowModule.actions[actionName];
            return Promise.resolve(action(...args));
          });
        }
      }

      var inject = {
        /**
         * Gets a module wrapper.
         * @param {string} -  moduleName Name of the module to be injected
         */
        module(moduleName) {
          return new ModuleWrapper(moduleName);
        }
      };

      class MessageSender {
        constructor() {
          let args = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

          this.hpnv2 = inject.module('hpnv2');
          // by default, use CryptoWorker and the global CliqzSecureMessage
          // (unless overwritten by tests)
          const CryptoWorkerImpl = args.CryptoWorker || CryptoWorker;
          this._CliqzSecureMessage = args._CliqzSecureMessage || CliqzSecureMessage;

          this.log('MessageSender: starting crypto worker');
          this.cryptoWorker = new CryptoWorkerImpl('message-sender');

          // in the beginning, there are no pending communications
          this.pendingCommunications = Promise.resolve();
        }

        stop() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { quick: false };

          let quick = _ref.quick;

          const killWorker = () => {
            const worker = this.cryptoWorker;
            if (worker) {
              this.log('MessageSender: stopping crypto worker');
              delete this.cryptoWorker;
              worker.terminate();
            }
          };

          if (quick) {
            killWorker();
            return Promise.resolve();
          }
          return this.pendingCommunications.then(killWorker, killWorker);
        }

        /**
         * This will sequentially send all given messages.
         *
         * Returns a promise that allows to wait for the operation
         * to complete.
         */
        send(messages) {
          messages.forEach(_msg => {
            const msg = _msg;
            if (this.hpnv2.isEnabled()) {
              if (msg && typeof msg === 'object') {
                msg.hpnv2 = true;
              }
              this.hpnv2.action('send', msg).catch(() => {});
            }
            this._sendSingleMessage(msg);
          });

          // There is no real error handling, so we ignore rejected
          // promises. Also avoid Promise.all, as we do not want
          // fail-fast behavior.
          return this.pendingCommunications.then(() => {}, () => {});
        }

        _sendSingleMessage(message) {
          const prevPendingSends = this.pendingCommunications;
          this.pendingCommunications = new Promise((resolve, reject) => {
            const _CliqzSecureMessage = this._CliqzSecureMessage;
            const postMessage = () => {
              if (!this.cryptoWorker) {
                this.log('Discarding message, as the web worker is already stopped.');
                reject();
                return;
              }

              // At this point, we know that the worker is idle,
              // so we can overwrite "onmessage".
              this.cryptoWorker.onmessage = e => {
                if (e.data.type === 'telemetry') {
                  _CliqzSecureMessage.localTemporalUniq = e.data.localTemporalUniq;
                  _CliqzSecureMessage.storage.saveLocalCheckTable();
                }

                resolve();
              };

              // Passes one message to the web worker, which does the actual sending.
              try {
                this.cryptoWorker.postMessage({
                  msg: message,
                  type: 'telemetry',
                  sourcemap: _CliqzSecureMessage.sourceMap,
                  upk: _CliqzSecureMessage.uPK,
                  dspk: _CliqzSecureMessage.dsPK,
                  sspk: _CliqzSecureMessage.secureLogger,
                  routetable: _CliqzSecureMessage.routeTable,
                  localTemporalUniq: _CliqzSecureMessage.localTemporalUniq
                });
              } catch (e) {
                this.log('Failed to send message', e);
                reject(e);
              }
            };

            // Wait until all pending messages are sent. Here, it does not
            // matter if sending was successful or not. In both cases,
            // continue with sending the message to the web worker, which
            // will do the actual work (cryptography + HTTP request).
            return prevPendingSends.then(postMessage).catch(postMessage);
          });
          return this.pendingCommunications;
        }

        log() {
          if (this._CliqzSecureMessage.debug) {
            console$1.log(...arguments);
          }
        }
      }

      /*
      Converts given array to generator like object.
      */

      function prunelocalTemporalUniq() {
        if (CliqzSecureMessage.localTemporalUniq && Object.keys(CliqzSecureMessage.localTemporalUniq).length > 0) {
          const currTime = Date.now();
          let pi = 0;
          Object.keys(CliqzSecureMessage.localTemporalUniq).forEach(e => {
            const d = CliqzSecureMessage.localTemporalUniq[e].ts;
            const diff = currTime - d;
            if (diff >= 24 * 60 * 60 * 1000) {
              delete CliqzSecureMessage.localTemporalUniq[e];
              pi += 1;
            }
          });
          /*
          if(CliqzHumanWeb.actionStats) {
              const itemsLocalValidation = Object.keys(CliqzSecureMessage.localTemporalUniq).length;
              CliqzHumanWeb.actionStats.itemsLocalValidation = itemsLocalValidation;
          }
          */
        }
      }

      function getRandomIntInclusive(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
      }

      const OFFER_TELEMETRY_PREFIX = 'https://offers-api.cliqz.com';

      let proxyHttpHandler = null;
      function overRideCliqzResults() {
        if (CliqzUtils.getPref('proxyNetwork', true) === false) return;

        if (!proxyHttpHandler) proxyHttpHandler = defaultHttpHandler;

        function httpHandler$$1(method, url, callback, onerror, timeout, data, sync) {
          if (url.startsWith(CliqzUtils.RESULTS_PROVIDER) && CliqzUtils.getPref('hpn-queryv2', false)) {
            const query = url.replace(CliqzUtils.RESULTS_PROVIDER, '');
            const uid = Math.floor(Math.random() * 10000000);
            CliqzSecureMessage.queriesID[uid] = callback;
            CliqzSecureMessage.wCrypto.postMessage({
              msg: { action: 'instant',
                type: 'cliqz',
                ts: '',
                ver: '1.5',
                payload: query,
                rp: CliqzUtils.RESULTS_PROVIDER
              },
              uid: uid,
              type: 'instant',
              sourcemap: CliqzSecureMessage.sourceMap,
              upk: CliqzSecureMessage.uPK,
              dspk: CliqzSecureMessage.dsPK,
              sspk: CliqzSecureMessage.secureLogger,
              queryProxyUrl: CliqzSecureMessage.queryProxyIP
            });
            return null;
          } else if (url.startsWith(CliqzUtils.RESULTS_PROVIDER_LOG)) {
            const query = url.replace(CliqzUtils.RESULTS_PROVIDER_LOG, '');
            const uid = Math.floor(Math.random() * 10000000);
            CliqzSecureMessage.queriesID[uid] = callback;
            CliqzSecureMessage.wCrypto.postMessage({
              msg: { action: 'extension-result-telemetry',
                type: 'cliqz',
                ts: '',
                ver: '1.5',
                payload: query
              },
              uid: uid,
              type: 'instant',
              sourcemap: CliqzSecureMessage.sourceMap,
              upk: CliqzSecureMessage.uPK,
              dspk: CliqzSecureMessage.dsPK,
              sspk: CliqzSecureMessage.secureLogger,
              queryProxyUrl: CliqzSecureMessage.queryProxyIP
            });
            return null;
          } else if (url === CliqzUtils.SAFE_BROWSING) {
            const batch = JSON.parse(data);
            if (batch.length > 0) {
              batch.forEach(eachMsg => {
                CliqzSecureMessage.telemetry(eachMsg);
              });
            }
            callback && callback({ 'response': '{"success":true}' });
          } else if (url.startsWith(OFFER_TELEMETRY_PREFIX)) {

            // Make sure that that CliqzSecureMessage.queryProxyIP exists,
            // otherwise, sending the message will silently fail.
            //
            // The queryProxyIP contains the proxy's verify endpoint
            // (e.g., "http://<proxy-ip>/verify").
            const queryProxyUrl = CliqzSecureMessage.proxyIP();
            if (!queryProxyUrl) {
              throw new Error('Failed to send message, as the list of proxies is empty');
            }

            const query = url.replace(OFFER_TELEMETRY_PREFIX, '');
            const uid = Math.floor(Math.random() * 10000000);
            CliqzSecureMessage.queriesID[uid] = callback;

            const message = {
              msg: { action: 'offers-api',
                type: 'cliqz',
                ts: '',
                ver: '1.5',
                payload: query,
                rp: OFFER_TELEMETRY_PREFIX,
                body: data
              },
              uid: uid,
              type: 'instant',
              sourcemap: CliqzSecureMessage.sourceMap,
              upk: CliqzSecureMessage.uPK,
              dspk: CliqzSecureMessage.dsPK,
              sspk: CliqzSecureMessage.secureLogger,
              queryProxyUrl: queryProxyUrl
            };
            CliqzSecureMessage.wCrypto.postMessage(message);
            return null;
          } else {
            return proxyHttpHandler.apply(undefined, arguments);
          }
          return null;
        }

        overrideHttpHandler(httpHandler$$1);
        addCompressionExclusion(CliqzUtils.SAFE_BROWSING);
      }

      var ProxyFilterBase = class {
        constructor() {
          var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : { position: 0 };

          let position = _ref.position;

          this.position = position;
          this.pps = Components.classes['@mozilla.org/network/protocol-proxy-service;1'].getService(Components.interfaces.nsIProtocolProxyService);
        }

        init() {
          this.pps.registerFilter(this, this.position);
        }

        /**
         * Disable all proxy rules provided by this instance
         * @method destroy
         */
        unload() {
          this.pps.unregisterFilter(this);
        }

        /**
         * See https://developer.mozilla.org/en-US/docs/Mozilla/Tech/XPCOM/Reference/Interface/nsIProtocolProxyService
         */
        newProxy(args) {
          // Do not perform DNS lookups on the client, but on the proxy (server-side).
          // Otherwise, it is hard to whitelist our services.
          // (This option is equivalent to 'socks5h://' in curl).
          const flags = Components.interfaces.nsIProxyInfo.TRANSPARENT_PROXY_RESOLVES_HOST;

          return this.pps.newProxyInfo(args.type, args.host, args.port, flags, args.failoverTimeout, args.failoverProxy);
        }

        /**
         * Firefox proxy API entry point - called on new http(s) connection.
         * @method applyFilter
         * @param pps
         * @param url {string}
         * @param defaultProxy
         * @returns aProxy
         */
        applyFilter(pps, url, defaultProxy, cb) {
          const proxy = this.shouldProxy(url) ? this.proxy() : defaultProxy;
          // On Firefox 60+ we need to use the callback
          if (cb && cb.onProxyFilterResult) {
            cb.onProxyFilterResult(proxy);
          } else {
            return proxy;
          }
          return undefined;
        }
      };

      /*
      Picked up from unblock proxy.es
      */

      class ProxyFilter extends ProxyFilterBase {
        /**
        * Wrapper for rule-based url proxying: implementation for Firefox
        * @class Proxy
        * @namespace unblock
        * @constructor
        */
        constructor() {
          super();
          this.method = "socks";
          this.port = 9004;
        }

        shouldProxy(url) {
          const window = CliqzUtils.getWindow();
          return url.scheme === "https" && CliqzSecureMessage.servicesToProxy.indexOf(url.host) > -1 && (CliqzUtils.getPref('hpn-query', false) || CliqzUtils.isOnPrivateTab(window));
        }

        proxy() {
          if (!CliqzSecureMessage.proxyList) {
            return;
          }
          const proxyIdx = getRandomIntInclusive(0, CliqzSecureMessage.proxyList.length - 1);
          const proxyHost = CliqzSecureMessage.proxyList[proxyIdx].dns;
          if (CliqzSecureMessage.debug) {
            CliqzUtils.log("Proxying Query: " + proxyHost, CliqzSecureMessage.LOG_KEY);
          }

          if (CliqzSecureMessage.proxyInfoObj[proxyHost]) {
            return CliqzSecureMessage.proxyInfoObj[proxyHost];
          } else {
            const ob = this.newProxy({
              type: this.method,
              host: proxyHost,
              port: this.port,
              failoverTimeout: 1000,
              failoverProxy: null
            });
            CliqzSecureMessage.proxyInfoObj[proxyHost] = ob;
            return ob;
          }
        }
      }

      /**
       * @param routingTable  array of proxy information (keys: dns, ip, ssl)
       * @returns the proxy list (unique proxies in the routing table)
       */
      function createProxyList(routeTable) {
        const proxyList = [];
        const seenProxies = new Set();
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = routeTable[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            const proxy = _step.value;

            const key = [proxy.dns, proxy.ip];
            if (!seenProxies[key]) {
              seenProxies[key] = proxy;
              proxyList.push(proxy);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return proxyList;
      }

      function getProxyVerifyUrl(args) {
        const schema = args.supportsHttps ? 'https' : 'http';
        const host = args.host || args.ip;
        return `${schema}://${host}/v2/verify`;
      }

      /*
       This module is used for sending the events for purpose of
       human-web, anti-tracking via a secure channel.
      */

      /* Global variables
      */
      let proxyCounter = 0;

      const CliqzSecureMessage = {
        CHANNEL: config.settings.HPN_CHANNEL,
        VERSION: '0.1',
        LOG_KEY: 'securemessage',
        debug: false,
        counter: 0,
        secureLogger: {},
        uPK: {},
        dsPK: {},
        routeTable: null,
        routeTableLoader: null,
        RSAKey: '',
        eventID: {},
        sourceMap: null,
        sourceMapLoader: null,
        tmult: 4,
        tpace: 250,
        SOURCE_MAP_PROVIDER: config.settings.ENDPOINT_SOURCE_MAP_PROVIDER,
        LOOKUP_TABLE_PROVIDER: config.settings.ENDPOINT_LOOKUP_TABLE_PROVIDER,
        KEYS_PROVIDER: config.settings.ENDPOINT_KEYS_PROVIDER,
        proxyList: null,
        proxyStats: {},
        PROXY_LIST_PROVIDER: config.settings.ENDPOINT_PROXY_LIST_PROVIDER,
        BLIND_SIGNER: config.settings.ENDPOINT_BLIND_SIGNER,
        USER_REG: config.settings.ENDPOINT_USER_REG,
        localTemporalUniq: null,
        wCrypto: null,
        queriesID: {},
        servicesToProxy: ["api.cliqz.com", "antiphishing.cliqz.com"],
        proxyInfoObj: {},
        queryProxyFilter: null,
        pacemaker: function pacemaker() {
          CliqzSecureMessage.counter += 1;

          if (CliqzSecureMessage.counter / CliqzSecureMessage.tmult % 10 === 0) {
            if (CliqzSecureMessage.debug) {
              CliqzUtils.log('Pacemaker: ' + CliqzSecureMessage.counter / CliqzSecureMessage.tmult, CliqzSecureMessage.LOG_KEY);
            }
          }

          if (CliqzSecureMessage.counter / CliqzSecureMessage.tmult % 5 === 0) {
            const currentTime = Date.now();

            if (!CliqzUtils.getWindow() || !CliqzUtils.getWindow().CLIQZ || !CliqzUtils.getWindow().CLIQZ.UI) return;
            const tDiff = currentTime - CliqzUtils.getWindow().CLIQZ.UI.lastInputTime;

            if (tDiff > 0 && tDiff > 1000 * 2 * 1) {
              CliqzSecureMessage.proxyIP();
            }

            if (!CliqzSecureMessage.uPK.publicKeyB64 || !CliqzSecureMessage.uPK.privateKey) {
              CliqzSecureMessage.registerUser();
            }
          }

          if (CliqzSecureMessage.counter / CliqzSecureMessage.tmult % (60 * 15 * 1) === 0) {
            if (CliqzSecureMessage.debug) {
              CliqzUtils.log('Clean local temp queue', CliqzSecureMessage.LOG_KEY);
            }
            prunelocalTemporalUniq();
          }
        },
        // ****************************
        // telemetry, PREFER NOT TO SHARE WITH CliqzUtils for safety, blatant rip-off though
        // ****************************
        trk: [],
        trkTimer: null,
        telemetry: function telemetry(msg, instantPush) {
          if (!CliqzSecureMessage || // might be called after the module gets unloaded
          CliqzUtils.getPref('humanWebOptOut', false)) return;

          if (msg) CliqzSecureMessage.trk.push(msg);
          CliqzUtils.clearTimeout(CliqzSecureMessage.trkTimer);
          if (instantPush || CliqzSecureMessage.trk.length % 20 === 0) {
            CliqzSecureMessage.pushTelemetry();
          } else {
            CliqzSecureMessage.trkTimer = CliqzUtils.setTimeout(CliqzSecureMessage.pushTelemetry, 10000);
          }
        },
        _telemetry_req: null,

        telemetry_MAX_SIZE: 500,
        previousDataPost: null,
        pushMessage: [],
        routeHashTable: null,
        queryProxyIP: null,
        performance: null,

        pushTelemetry: function pushTelemetry() {
          // Take all available messages from the "trk" queue and send them.
          //
          // It is crucial that messages are sent sequentially, otherwise, we
          // will have race conditions due to the use of global variables
          // in CliqzSecureMessage messages sequentially, too.
          const unprocessedMessages = CliqzSecureMessage.trk.splice(0);
          return CliqzSecureMessage.messageSender.send(unprocessedMessages);
        },
        initAtWindow: function initAtWindow(window) {},
        init: function init() {
          // Doing it here, because this lib. uses navigator and window objects.
          // Better method appriciated.

          if (CliqzSecureMessage.pacemakerId == null) {
            CliqzSecureMessage.pacemakerId = CliqzUtils.setInterval(CliqzSecureMessage.pacemaker.bind(this), CliqzSecureMessage.tpace, null);
          }

          // TODO: do not pass this to storage
          this.storage = new Storage$1(this);

          if (!CliqzSecureMessage.localTemporalUniq) this.storage.loadLocalCheckTable();

          // Load source map. Update it once an hour.
          this.sourceMapLoader = new ResourceLoader(["hpn", "sourcemap.json"], {
            remoteURL: CliqzSecureMessage.SOURCE_MAP_PROVIDER
          });

          this.sourceMapLoader.load().then(e => {
            CliqzSecureMessage.sourceMap = e;
          });

          this.sourceMapLoader.onUpdate(e => CliqzSecureMessage.sourceMap = e);

          // Load lookuptable, which also contains the list of proxy list.
          // Update every 5 minutes.
          this.routeTableLoader = new ResourceLoader(["hpn", "routeTableV2.json"], {
            remoteURL: CliqzSecureMessage.LOOKUP_TABLE_PROVIDER,
            cron: 1 * 5 * 60 * 1000,
            updateInterval: 1 * 5 * 60 * 1000
          });

          this.routeTableLoader.load().then(fullRouteTable => {
            CliqzSecureMessage._updateRoutingInfo(fullRouteTable);
          }).catch(e => {
            if (CliqzSecureMessage.debug) {
              console$1.error('Failed to update initial routeTable', e);
            }
          });

          this.routeTableLoader.onUpdate(fullRouteTable => {
            CliqzSecureMessage._updateRoutingInfo(fullRouteTable);
          });

          CliqzSecureMessage.dsPK.pubKeyB64 = config.settings.KEY_DS_PUBKEY;
          CliqzSecureMessage.secureLogger.publicKeyB64 = config.settings.KEY_SECURE_LOGGER_PUBKEY;

          if (CliqzUtils.getPref('proxyNetwork', true)) {
            overRideCliqzResults();
          }
          // Check user-key present or not.
          CliqzSecureMessage.registerUser();

          // Register proxy fr query.

          CliqzSecureMessage.queryProxyFilter = new ProxyFilter();
          CliqzSecureMessage.queryProxyFilter.init();

          this.messageSender = new MessageSender();
        },
        unload: function unload() {
          CliqzSecureMessage.queryProxyFilter.unload();
          this.storage.saveLocalCheckTable();

          // TODO: Sending messages like this does not work
          // as the shutdown will be faster than sending the
          // messages. As a result, messages are not sent
          // the web worker is not closed.
          //
          // const messageSender_ = this.messageSender;
          // CliqzSecureMessage.pushTelemetry().then(() => {
          //   messageSender_.stop();
          // }).catch((e) => {
          //   messageSender_.stop({ quick: true });
          // });
          //
          // As a workaround, make no attempt to send messages
          // (as it will not succeed anyway) but at least
          // terminate the worker.
          this.messageSender.stop({ quick: true });

          this.sourceMapLoader.stop();
          this.routeTableLoader.stop();
          CliqzUtils.clearTimeout(CliqzSecureMessage.pacemakerId);
          this.storage.close();
        },
        proxyIP: function proxyIP() {
          if (!CliqzSecureMessage.proxyList) return;

          if (proxyCounter >= CliqzSecureMessage.proxyList.length) {
            proxyCounter = 0;
          }
          const proxy = CliqzSecureMessage.proxyList[proxyCounter];
          const proxyUrl = getProxyVerifyUrl({
            host: proxy.dns,
            ip: proxy.ip,
            supportsHttps: proxy.ssl
          });
          CliqzSecureMessage.queryProxyIP = proxyUrl;
          proxyCounter += 1;
          return proxyUrl;
        },
        registerUser: function registerUser() {
          this.storage.loadKeys().then(userKey => {
            if (!userKey) {
              const userCrypto = new CryptoWorker();

              userCrypto.onmessage = e => {
                if (e.data.status) {
                  const uK = {};
                  uK.privateKey = e.data.privateKey;
                  uK.publicKey = e.data.publicKey;
                  uK.ts = Date.now();
                  this.storage.saveKeys(uK).then(response => {
                    if (response.status) {
                      CliqzSecureMessage.uPK.publicKeyB64 = response.data.publicKey;
                      CliqzSecureMessage.uPK.privateKey = response.data.privateKey;
                    }
                  });
                }
                userCrypto.terminate();
              };

              userCrypto.postMessage({
                type: 'user-key'
              });
            } else {
              CliqzSecureMessage.uPK.publicKeyB64 = userKey.publicKey;
              CliqzSecureMessage.uPK.privateKey = userKey.privateKey;
            }
          });
        },

        _updateRoutingInfo: function _updateRoutingInfo(fullRouteTable) {
          CliqzSecureMessage.routeTable = fullRouteTable[CliqzSecureMessage.CHANNEL];
          CliqzSecureMessage.proxyList = createProxyList(CliqzSecureMessage.routeTable);

          CliqzUtils.log('Updated proxy list and routing table', CliqzSecureMessage.LOG_KEY);
        }
      };

      /**
      * @namespace hpn
      * @class Background
      */
      var Background = background({
        /**
        * @method init
        */
        init() {
          const FF48_OR_ABOVE = isPlatformAtLeastInVersion('48.0');

          if (FF48_OR_ABOVE) {
            // We need to use this function, 'load' events do not seem to be firing...
            this.enabled = true;
            this.CliqzSecureMessage = CliqzSecureMessage;
            CliqzSecureMessage.init();
            CliqzSecureMessage.wCrypto = new CryptoWorker('httpHandler');
            CliqzSecureMessage.wCrypto.onmessage = function (e) {
              if (e.data.type === 'instant') {
                const callback = CliqzSecureMessage.queriesID[e.data.uid];
                delete CliqzSecureMessage.queriesID[e.data.uid];
                callback && callback({ response: e.data.res });
              }
            };
          }
        },
        /**
        * @method unload
        */
        unload() {
          if (this.enabled) {
            CliqzSecureMessage.wCrypto.terminate();
            CliqzSecureMessage.unload();
          }
        },

        actions: {
          sha1(s) {
            let promise = new Promise((resolve, reject) => {
              let wCrypto = new CryptoWorker();

              wCrypto.onmessage = function (e) {
                let result = e.data.result;
                wCrypto.terminate();
                resolve(result);
              };

              wCrypto.postMessage({
                "msg": s,
                "type": "hw-sha1"
              });
            });
            return promise;
          },
          sendTelemetry(msg) {
            return CliqzSecureMessage.telemetry(msg);
          },

          sendInstantMessage(rp, payload) {
            CliqzSecureMessage.proxyIP();
            return new Promise((resolve, reject) => {
              const wCrypto = new CryptoWorker();

              wCrypto.onmessage = function (e) {
                try {
                  const result = JSON.parse(e.data.res).result;
                  wCrypto.terminate();
                  resolve(result);
                } catch (ee) {
                  wCrypto.terminate();
                  reject();
                }
              };
              wCrypto.postMessage({
                msg: {
                  action: 'instant',
                  type: 'cliqz',
                  ts: '',
                  ver: '1.5',
                  payload: payload,
                  rp: rp
                },
                uid: '',
                type: 'instant',
                sourcemap: CliqzSecureMessage.sourceMap,
                upk: CliqzSecureMessage.uPK,
                dspk: CliqzSecureMessage.dsPK,
                sspk: CliqzSecureMessage.secureLogger,
                queryProxyUrl: CliqzSecureMessage.queryProxyIP
              });
            });
          },

          sendPostMessage(rp, payload, action, data, callback) {
            const uid = Math.floor(Math.random() * 10000000);
            CliqzSecureMessage.queriesID[uid] = callback;
            CliqzSecureMessage.wCrypto.postMessage({
              msg: { action: action,
                type: 'cliqz',
                ts: '',
                ver: '1.5',
                payload: payload,
                rp: rp,
                body: data
              },
              uid: '',
              type: 'instant',
              sourcemap: CliqzSecureMessage.sourceMap,
              upk: CliqzSecureMessage.uPK,
              dspk: CliqzSecureMessage.dsPK,
              sspk: CliqzSecureMessage.secureLogger,
              queryProxyUrl: CliqzSecureMessage.queryProxyIP
            });
          }
        }
      });

      var Window$1 = class {

        constructor(_ref) {
          let window = _ref.window,
              background = _ref.background;

          this.background = background;
          this.window = window;
        }

        init() {
          if (this.background.CliqzSecureMessage) {
            this.background.CliqzSecureMessage.initAtWindow(this.window);
            this.window.CliqzSecureMessage = this.background.CliqzSecureMessage;
            Object.assign(this.window.CliqzSecureMessage, this.background.actions);
          }
        }

        unload() {
          delete this.window.CliqzSecureMessage;
        }

        status() {
          if (this.background.CliqzSecureMessage) {
            return {
              visible: true,
              state: CliqzUtils.getPref('hpn-query')
            };
          }
        }
      };

      var hpn = {
        Background,
        Window: Window$1
      };

      /* globals window */
      // FIXME: stop using this file as soon as subproject chrome-test-hw-hpn is killed
      window.CliqzSecureMessage = {
        init() {
          this.background = hpn.Background;
          this.loadingPromise = this.background.init();
          return this.loadingPromise;
        },

        telemetry(msg) {
          return this.loadingPromise.then(() => this.background.actions.sendTelemetry(msg));
        },
        sha1(msg) {
          return this.loadingPromise.then(() => this.background.actions.sha1(msg));
        },

        sendInstantMessage(rp, payload) {
          return this.loadingPromise.then(() => this.background.actions.sendInstantMessage(rp, payload));
        }
      };
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define([], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory();
  else
    CliqzGlobal = factory();
});