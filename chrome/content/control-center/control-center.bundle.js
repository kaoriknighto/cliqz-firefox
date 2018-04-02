!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], ["c"], false, function($__System) {
var require = this.require, exports = this.exports, module = this.module;

'use strict';

$__System.register('b', ['c'], function (_export) {
    if (typeof Handlebars === 'undefined') {
        var Handlebars;
    }
    if (typeof templates === 'undefined') {
        var templates = {};
    }
    return {
        setters: [function (_handlebars) {
            Handlebars = _handlebars['default'];
        }],
        execute: function () {

            if (typeof templates === 'undefined') {
                var templates = {};
            }templates['active-ad-blocking'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    return "checked";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div id=\"companies-title\">\n  <p class=\"cross hover-highlighted\" data-i18n=\"control-center-adblock-advertisers\"></p>\n  <span>\n    <svg data-target=\"adblock_details_close\" class=\"cross\" width=\"10px\" height=\"16px\" viewBox=\"0 0 10 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <defs></defs>\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\">\n            <g id=\"Cliqz-Privacy-Center-3\" transform=\"translate(-674.000000, -290.000000)\" stroke-width=\"2.5999999\" stroke=\"#4D4D4D\">\n                <polyline id=\"Path-164-Copy-183\" transform=\"translate(679.041295, 298.019115) scale(-1, 1) translate(-679.041295, -298.019115) \" points=\"676.092831 292.227875 681.989759 298.13463 676.323476 303.810354\"></polyline>\n            </g>\n        </g>\n    </svg>\n  </span>\n</div>\n<div id=\"companies\">\n" + ((stack1 = container.invokePartial(partials["companies-list"], (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adblocker : stack1) != null ? stack1.advertisersList : stack1, { "name": "companies-list", "hash": { "module": "adblock" }, "data": data, "indent": "  ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "</div>\n<div id=\"bottom-part\">\n  <div class=\"clearfix\">\n    <div class=\"description\" data-i18n=\"control-center-adblock-description\" data-visible-on-state=\"active\"></div>\n    <div class=\"description\" data-i18n=\"control-center-adblock-description-off-website\" data-visible-on-state=\"off\" data-visible=\"off_website\"></div>\n    <div class=\"description\" data-i18n=\"control-center-adblock-description-off-domain\" data-visible-on-state=\"off\" data-visible=\"off_domain\"></div>\n    <div class=\"description\" data-i18n=\"control-center-adblock-description-off-all\" data-visible-on-state=\"off\" data-visible=\"off_all\"></div>\n\n    <div class=\"counter\">\n      <svg id=\"block\" height=\"45px\" viewBox=\"0 0 32 39\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs></defs>\n            <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                <g id=\"ad-block-Gstop-dropdown\" transform=\"translate(-6.000000, 0.000000)\" fill-rule=\"nonzero\">\n                    <rect id=\"Rectangle-12-Copy\" fill-opacity=\"0.00840692935\" fill=\"#FFFFFF\" opacity=\"0.385377799\" x=\"6.44057291\" y=\"0.96010742\" width=\"31\" height=\"38\"></rect>\n                    <path d=\"M21.931013,9.19182521 L12.21594,13.2159402 L8.19182508,22.9310131 L12.21594,32.6460861 L21.931013,36.6702011 L31.6460859,32.6460861 L35.6702009,22.9310131 L31.6460859,13.2159402 L21.931013,9.19182521 Z M33.7891132,11.072913 L38.700899,22.9310131 L33.7891132,34.7891133 L21.931013,39.7008992 L10.0729128,34.7891133 L5.16112692,22.9310131 L10.0729128,11.072913 L21.931013,6.16112705 L33.7891132,11.072913 Z\" id=\"Polygon-12-Copy-19\" fill=\"#54BF30\" transform=\"translate(21.931013, 22.931013) rotate(22.500000) translate(-21.931013, -22.931013) \"></path>\n                    <polygon id=\"Line-Copy-94\" fill=\"#54BF30\" points=\"10.7926997 14.1379593 30.8478049 34.1930645 32.8277039 32.2131655 12.7725987 12.1580603\"></polygon>\n                </g>\n            </g>\n        </svg>\n      <span id=\"count\">" + container.escapeExpression(container.lambda((stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adblocker : stack1) != null ? stack1.totalCount : stack1, depth0)) + "</span>\n    </div>\n  </div>\n\n  <div class=\"switches\" style=\"display: none\">\n    <!--======= Switch ======-->\n    <span><span class=\"cqz-switch active\"><span class=\"cqz-switch-box\"></span></span> <span id=\"onlabel\" data-i18n=\"control-center-switch-on\"></span></span>\n  </div>\n\n  <span class=\"squaredFour\">\n    <span class=\"squaredFour\">\n      <input type=\"checkbox\"\n             id=\"squaredFour2\"\n             data-function=\"adb-optimized\"\n             name=\"check\"\n             " + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adblocker : stack1) != null ? stack1.optimized : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " />\n      <label for=\"squaredFour2\"></label>\n      <span id=\"strict\" class=\"clickableLabel\" data-i18n=\"control-center-check-strict\"></span>\n    </span>\n  </span>\n</div>\n";
                }, "usePartial": true, "useData": true });
            templates['active-anti-tracking'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    return "checked";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div id=\"companies-title\">\n  <p class=\"cross hover-highlighted\" data-i18n=\"control-center-trackers\">Tracking Firmen auf dieser Seite</p>\n  <span>\n    <svg data-target=\"attrack_details_close\" class=\"cross\" width=\"10px\" height=\"16px\" viewBox=\"0 0 10 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <defs></defs>\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\">\n            <g id=\"Cliqz-Privacy-Center-3\" transform=\"translate(-674.000000, -290.000000)\" stroke-width=\"2.5999999\" stroke=\"#4D4D4D\">\n                <polyline id=\"Path-164-Copy-183\" transform=\"translate(679.041295, 298.019115) scale(-1, 1) translate(-679.041295, -298.019115) \" points=\"676.092831 292.227875 681.989759 298.13463 676.323476 303.810354\"></polyline>\n            </g>\n        </g>\n    </svg>\n  </span>\n</div>\n<div id=\"companies\">\n" + ((stack1 = container.invokePartial(partials["companies-list"], depth0, { "name": "companies-list", "hash": { "module": "attrack", "companiesArray": (stack1 = (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.antitracking : stack1) != null ? stack1.trackersList : stack1) != null ? stack1.companiesArray : stack1 }, "data": data, "indent": "  ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "</div>\n\n<div id=\"bottom-part\">\n  <div class=\"clearfix\">\n    <div class=\"description\" data-i18n=\"control-center-datapoints\" data-visible-on-state=\"active\"></div>\n    <div class=\"description\" data-i18n=\"control-center-datapoints-inactive\" data-visible-on-state=\"inactive\"></div>\n    <div class=\"description\" data-i18n=\"control-center-datapoints-off\" data-visible-on-state=\"critical\"></div>\n    <div class=\"counter\">\n      <!--======= Shield =======-->\n      <svg id=\"shield\" height=\"45px\" viewBox=\"0 0 32 39\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs>\n                <polygon id=\"path-1\" points=\"0 35.2 0 0.3 28.8094585 0.3 28.8094585 35.2 14.4047293 35.2\"></polygon>\n            </defs>\n            <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                <g id=\"anti-tracking-Gshield-dropdown\">\n                    <rect id=\"Rectangle-12\" fill-opacity=\"0.0143229167\" fill=\"#FFFFFF\" fill-rule=\"nonzero\" x=\"0.44057291\" y=\"0.808292\" width=\"31\" height=\"38\"></rect>\n                    <g id=\"Group-3-Copy-36\" transform=\"translate(1.291065, 2.808292)\">\n                        <g id=\"Fill-1-Clipped\">\n                            <mask id=\"mask-2\" fill=\"white\">\n                                <use xlink:href=\"#path-1\"></use>\n                            </mask>\n                            <g id=\"path-1\"></g>\n                            <path d=\"M14.40472,0.3 C14.40472,0.3 10.48952,7.2272 1.04312,7.2272 C0.70392,7.2272 0.35832,7.2184 0.00472,7.2 L0.00392,7.2 C-0.08888,7.1984 1.33592,27.8176 14.40472,35.2 C27.47272,27.8184 28.89752,7.2 28.80552,7.2 L28.80472,7.2 C28.45192,7.2184 28.10552,7.2272 27.76632,7.2272 C18.31832,7.2272 14.40472,0.3 14.40472,0.3 L14.40472,0.3 Z M25.95112,9.7112 C25.17272,14.8512 22.53752,26.6248 14.40472,32.1864 C6.26712,26.6232 3.63592,14.8504 2.85832,9.7112 C8.52952,9.2272 12.26952,6.5376 14.40472,4.376 C16.53912,6.5376 20.27992,9.2272 25.95112,9.7112 Z\" id=\"Fill-1\" stroke=\"#54BF30\" stroke-width=\"0.4\" fill=\"#54BF30\" fill-rule=\"nonzero\" mask=\"url(#mask-2)\"></path>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n      <span id=\"count\">" + container.escapeExpression(container.lambda((stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.antitracking : stack1) != null ? stack1.totalCount : stack1, depth0)) + "</span>\n    </div>\n  </div>\n  <div class=\"switches\" class=\"switches-antitrack\" style=\"display: none\">\n    <!--======= Switch ======-->\n    <span>\n      <span class=\"active cqz-switch\">\n        <span class=\"cqz-switch-box\"></span>\n      </span>\n    </span>\n    <span id=\"onlabel\" data-i18n=\"control-center-switch-on\"></span>\n  </div>\n\n  <!--======= Strict checkbox  =====-->\n  <span class=\"strict\">\n    <!-- .squaredFour -->\n    <span class=\"squaredFour\">\n    <input type=\"checkbox\"\n           id=\"squaredFour\"\n           name=\"check\"\n           data-function=\"antitracking-strict\"\n           " + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.antitracking : stack1) != null ? stack1.strict : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " />\n    <label for=\"squaredFour\"></label>\n    <span id=\"strict\" class=\"clickableLabel\" data-i18n=\"control-center-check-strict\"></span>\n    </span>\n    <!-- end .squaredFour -->\n  </span>\n\n  <!--======= Strict checkbox  =====-->\n  <span class=\"hideMyIP\" style=\"display: none;\">\n    <!-- .squaredFour -->\n    <span class=\"squaredFour\">\n    <input type=\"checkbox\"\n           id=\"hideMyIP\"\n           name=\"check\"\n           data-function=\"antitracking-hideMyIP\"\n           " + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.antitracking : stack1) != null ? stack1.hideMyIP : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " />\n    <label for=\"hideMyIP\"></label>\n    <span id=\"hideMyIP\" data-i18n=\"control-center-check-hideMyIP\"></span>\n    </span>\n    <!-- end .squaredFour -->\n  </span>\n\n  <button class=\"clear-Tracking-Cache-Button\" style=\"vertical-align:middle;\" data-function=\"antitracking-clearcache\"><span data-i18n=\"control-center-clear-trCache\">Clear Tracking Cache</span></button>\n</div>\n";
                }, "usePartial": true, "useData": true });
            templates['ad-blocking'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression,
                        alias3 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div class=\"frame-container " + alias2(alias1((stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adblocker : stack1) != null ? stack1.off_state : stack1, depth0)) + "\"\n     data-status=\"" + alias2(alias1((stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adblocker : stack1) != null ? stack1.state : stack1, depth0)) + "\"\n     data-inactiveState=\"off\"\n     data-url=\"" + alias2((helper = (helper = helpers.activeURL || (depth0 != null ? depth0.activeURL : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias3, { "name": "activeURL", "hash": {}, "data": data }) : helper)) + "\"\n     data-visible=\"" + alias2(alias1((stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adblocker : stack1) != null ? stack1.off_state : stack1, depth0)) + "\">\n  <div class=\"adblocker\">\n    <div class=\"title\">\n      <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n        <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n        <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n          <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n        </text>\n      </g>\n    </svg>\n      <div class=\"tooltip right\">\n        <span class=\"title\" data-i18n=\"control-center-info-ads-title\"></span>\n        <span data-i18n=\"control-center-info-ads\"></span>\n      </div>\n      <span class=\"hover-highlighted\" data-start-navigation data-i18n=\"control-center-adblock-title\"></span>\n      <svg data-start-navigation id=\"smallarrow\" width=\"10px\" height=\"16px\" viewBox=\"0 0 10 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs></defs>\n            <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\">\n                <g id=\"Cliqz-Privacy-Center-3\" transform=\"translate(-674.000000, -290.000000)\" stroke-width=\"2.5999999\" stroke=\"#4D4D4D\">\n                    <polyline id=\"Path-164-Copy-183\" points=\"676.092831 292.227875 681.989759 298.13463 676.323476 303.810354\"></polyline>\n                </g>\n            </g>\n        </svg>\n      <div class=\"switches\">\n        <span data-visible-on-state=\"off\" class=\"new-dropdown\">\n          <button class=\"dropdown-btn\">\n            <span class=\"dropdown-content-option-text\"\n                  data-visible-on-state=\"off\"\n                  data-i18n=\"control-center-this-site\"\n                  data-visible=\"off_website\">\n            </span>\n            <span class=\"dropdown-content-option-text\"\n                  data-visible-on-state=\"off\"\n                  data-i18n=\"control-center-this-domain\"\n                  data-visible=\"off_domain\">\n            </span>\n            <span class=\"dropdown-content-option-text\"\n                  data-visible-on-state=\"off\"\n                  data-i18n=\"control-center-all-sites\"\n                  data-visible=\"off_all\">\n            </span>\n            <svg class=\"arr\" width=\"12px\" height=\"7px\" viewBox=\"96 10 12 7\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <defs></defs>\n                <polyline id=\"fill\" id=\"Path-164-Copy-93\" stroke=\"none\" fill=\"#A2A2A2\" fill-rule=\"evenodd\" opacity=\"0.554279384\" transform=\"translate(102.166470, 13.884133) rotate(90.000000) translate(-102.166470, -13.884133) \" points=\"99.218006 8.09289333 105.114934 13.999648 99.4486516 19.6753727\"></polyline>\n            </svg>\n          </button>\n\n          <div class=\"new-dropdown-content\">\n            <a class=\"dropdown-content-option thisSiteText\n            " + ((stack1 = helpers["if"].call(alias3, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adblocker : stack1) != null ? stack1.disabledForUrl : stack1, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n                data-i18n=\"control-center-this-site\"\n                value=\"page\"\n                data-type=\"off_select\"\n                data-state=\"off_website\"\n                role=\"adBlockerStatusChanger\">\n            </a>\n\n            <a class=\"dropdown-content-option thisDomainText\n            " + ((stack1 = helpers["if"].call(alias3, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adblocker : stack1) != null ? stack1.disabledForDomain : stack1, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n                data-i18n=\"control-center-this-domain\"\n                value=\"domain\"\n                data-type=\"off_select\"\n                data-state=\"off_domain\"\n                role=\"adBlockerStatusChanger\">\n             </a>\n\n            <a class=\"dropdown-content-option allSitesText\n            " + ((stack1 = helpers["if"].call(alias3, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adblocker : stack1) != null ? stack1.disabledEverywhere : stack1, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n                data-i18n=\"control-center-all-sites\"\n                value=\"all-sites\"\n                data-type=\"off_select\"\n                data-state=\"off_all\"\n                role=\"adBlockerStatusChanger\">\n             </a>\n          </div>\n        </span>\n        <span>\n          <span data-visible-on-state=\"active\" data-i18n=\"control-center-switch-on\"></span>\n          <span data-visible-on-state=\"off\" data-i18n=\"control-center-switch-off\"></span>\n          <span class=\"cqz-switch\"\n                data-type=\"switch\"\n                role=\"adBlockerStatusChanger\">\n            <span class=\"cqz-switch-box\"></span>\n          </span>\n        </span>\n      </div>\n    </div>\n    <div class=\"settings-section-row\">\n      <div class=\"counter\" data-start-navigation>\n        <!-- <?xml version=\"1.0\" encoding=\"UTF-8\" standalone=\"no\"?> -->\n        <svg id=\"block\" width=\"32px\" height=\"39px\" viewBox=\"0 0 32 39\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs></defs>\n            <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                <g id=\"ad-block-Gstop-dropdown\" transform=\"translate(-6.000000, 0.000000)\" fill-rule=\"nonzero\">\n                    <rect id=\"Rectangle-12-Copy\" fill-opacity=\"0.00840692935\" fill=\"#FFFFFF\" opacity=\"0.385377799\" x=\"6.44057291\" y=\"0.96010742\" width=\"31\" height=\"38\"></rect>\n                    <path d=\"M21.931013,9.19182521 L12.21594,13.2159402 L8.19182508,22.9310131 L12.21594,32.6460861 L21.931013,36.6702011 L31.6460859,32.6460861 L35.6702009,22.9310131 L31.6460859,13.2159402 L21.931013,9.19182521 Z M33.7891132,11.072913 L38.700899,22.9310131 L33.7891132,34.7891133 L21.931013,39.7008992 L10.0729128,34.7891133 L5.16112692,22.9310131 L10.0729128,11.072913 L21.931013,6.16112705 L33.7891132,11.072913 Z\" id=\"Polygon-12-Copy-19\" fill=\"#54BF30\" transform=\"translate(21.931013, 22.931013) rotate(22.500000) translate(-21.931013, -22.931013) \"></path>\n                    <polygon id=\"Line-Copy-94\" fill=\"#54BF30\" points=\"10.7926997 14.1379593 30.8478049 34.1930645 32.8277039 32.2131655 12.7725987 12.1580603\"></polygon>\n                </g>\n            </g>\n        </svg>\n        <span id=\"count\"\">\n          <span data-visible-on-state=\"active\">" + alias2(alias1((stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adblocker : stack1) != null ? stack1.totalCount : stack1, depth0)) + "</span>\n          <span data-visible-on-state=\"off\">0</span>\n        </span>\n      </div>\n      <div class=\"row-text\">\n          <p class=\"description\" data-start-navigation data-i18n=\"control-center-adblock-description\" data-visible-on-state=\"active\"></p>\n          <p class=\"description\" data-start-navigation data-i18n=\"control-center-adblock-description-off-website\" data-visible-on-state=\"off\" data-visible=\"off_website\"></p>\n          <p class=\"description\" data-start-navigation data-i18n=\"control-center-adblock-description-off-domain\" data-visible-on-state=\"off\" data-visible=\"off_domain\"></p>\n          <p class=\"description\" data-start-navigation data-i18n=\"control-center-adblock-description-off-all\" data-visible-on-state=\"off\" data-visible=\"off_all\"></p>\n      </div>\n    </div>\n  </div>\n  <div class=\"active-window-adblock\">\n" + ((stack1 = container.invokePartial(partials["active-ad-blocking"], depth0, { "name": "active-ad-blocking", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "  </div>\n</div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    return " selected ";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adblocker : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true });
            templates['anti-phising'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = container.escapeExpression,
                        alias2 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div class=\"antiphishing frame-container\"\n  role=\"stop-navigation\"\n  data-status=\"" + alias1(container.lambda((stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["anti-phishing"] : stack1) != null ? stack1.state : stack1, depth0)) + "\"\n  data-inactiveState=\"inactive\"\n  data-url=\"" + alias1((helper = (helper = helpers.activeURL || (depth0 != null ? depth0.activeURL : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias2, { "name": "activeURL", "hash": {}, "data": data }) : helper)) + "\">\n  <div class=\"title\">\n    <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n        <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n        <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n          <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n        </text>\n      </g>\n    </svg>\n    <div class=\"tooltip right top-right\">\n      <span class=\"title\" data-i18n=\"control-center-info-phishing-title\"></span>\n      <span data-i18n=\"control-center-info-phishing\"></span>\n    </div>\n    <span>Anti-Phishing</span>\n    <svg id=\"smallarrow\" width=\"10px\" height=\"15px\" viewBox=\"1131 409 10 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <defs></defs>\n      <polyline id=\"Path-164-Copy-153\" stroke=\"#4D4D4D\" stroke-width=\"2.5999999\" fill=\"none\" points=\"1133.19742 410.787186 1139.09434 416.693941 1133.42806 422.369666\"></polyline>\n    </svg>\n    <div class=\"switches\">\n      <span data-invisible-on-state=\"active\" class=\"new-dropdown\">\n        <button class=\"dropdown-btn\">\n           <span class=\"dropdown-content-option-text\"\n                 data-visible-on-state=\"inactive\"\n                 data-i18n=\"control-center-this-domain\"></span>\n\n           <span class=\"dropdown-content-option-text\"\n                 data-visible-on-state=\"critical\"\n                 data-i18n=\"control-center-all-sites\"></span>\n\n          <svg class=\"arr\" width=\"12px\" height=\"7px\" viewBox=\"96 10 12 7\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n              <defs></defs>\n              <polyline id=\"fill\" id=\"Path-164-Copy-93\" stroke=\"none\" fill=\"#A2A2A2\" fill-rule=\"evenodd\" opacity=\"0.554279384\" transform=\"translate(102.166470, 13.884133) rotate(90.000000) translate(-102.166470, -13.884133) \" points=\"99.218006 8.09289333 105.114934 13.999648 99.4486516 19.6753727\"></polyline>\n          </svg>\n        </button>\n\n        <div class=\"new-dropdown-content\" " + ((stack1 = helpers["if"].call(alias2, depth0 != null ? depth0.funnelCake : depth0, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ">\n          <a class=\"dropdown-content-option " + ((stack1 = helpers["if"].call(alias2, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["anti-phishing"] : stack1) != null ? stack1.isWhitelisted : stack1, { "name": "if", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n             data-i18n=\"control-center-this-domain\"\n             value=\"this\"\n             data-type=\"off_select\"\n             data-state=\"off_website\"\n             role=\"antiPhishingStatusChanger\">\n          </a>\n\n          <a class=\"dropdown-content-option  " + ((stack1 = helpers.unless.call(alias2, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["anti-phishing"] : stack1) != null ? stack1.isWhitelisted : stack1, { "name": "unless", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n             data-i18n=\"control-center-all-sites\"\n             value=\"all\"\n             data-type=\"off_select\"\n             data-state=\"off_all\"\n             role=\"antiPhishingStatusChanger\">\n           </a>\n        </div>\n      </span>\n      <span>\n        <span data-visible-on-state=\"active\" data-i18n=\"control-center-switch-on\"></span>\n        <span data-invisible-on-state=\"active\" data-i18n=\"control-center-switch-off\"></span>\n        <span\n          class=\"cqz-switch\"\n          data-type=\"switch\"\n          role=\"antiPhishingStatusChanger\">\n          <span class=\"cqz-switch-box\"></span>\n        </span>\n      </span>\n    </div>\n  </div>\n</div>\n<div class=\"active-window-phishing\">\n  <div id=\"report\">\n    <span id=\"status\" data-i18n=\"control-center-phishing-deceptive-not\"></span>\n    <svg data-target=\"antiphish_details_close\" class=\"cross\" width=\"10px\" height=\"16px\" viewBox=\"0 0 10 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <defs></defs>\n        <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\">\n            <g id=\"Cliqz-Privacy-Center-3\" transform=\"translate(-674.000000, -290.000000)\" stroke-width=\"2.5999999\" stroke=\"#00ADEF\">\n                <polyline id=\"Path-164-Copy-183\" transform=\"translate(679.041295, 298.019115) scale(-1, 1) translate(-679.041295, -298.019115) \" points=\"676.092831 292.227875 681.989759 298.13463 676.323476 303.810354\"></polyline>\n            </g>\n        </g>\n    </svg>\n    <span id=\"line\">\n      <span id=\"report-button\">\n      <span id=\"report-button-text\" data-i18n=\"control-center-phishing-report\"></span>\n      </span>\n    </span>\n    <svg id=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <defs></defs>\n      <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n        <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n        <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n          <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n        </text>\n      </g>\n    </svg>\n  </div>\n  <div id=\"full-url\"></div>\n  <div id=\"switch\">\n    <span class=\"switches\" style=\"display: none\">\n      <span><span class=\"active cqz-switch\"><span class=\"cqz-switch-box\"></span></span> <span class=\"active\" data-i18n=\"control-center-switch-on\"></span></span>\n    </span>\n  </div>\n</div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    return "style=\"top: -56px;\"";
                }, "4": function (container, depth0, helpers, partials, data) {
                    return "selected";
                }, "6": function (container, depth0, helpers, partials, data) {
                    return " selected ";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["anti-phishing"] : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['anti-tracking'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression,
                        alias3 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div class=\"frame-container anti-tracking\"\n     data-status=\"" + alias2(alias1((stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.antitracking : stack1) != null ? stack1.state : stack1, depth0)) + "\"\n     data-inactiveState=\"inactive\"\n     data-hostname=\"" + alias2((helper = (helper = helpers.hostname || (depth0 != null ? depth0.hostname : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias3, { "name": "hostname", "hash": {}, "data": data }) : helper)) + "\">\n  <div class=\"antitracking\">\n    <div class=\"title\">\n      <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n          <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n          <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n            <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n          </text>\n        </g>\n      </svg>\n      <div class=\"tooltip right anti-tracking\">\n        <span class=\"title\">Anti-Tracking</span>\n        <span data-i18n=\"control-center-info-trackers\"></span>\n      </div>\n\n      <span class=\"hover-highlighted\" data-start-navigation>Anti-Tracking</span>\n      <svg data-start-navigation id=\"smallarrow\" width=\"10px\" height=\"16px\" viewBox=\"0 0 10 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs></defs>\n            <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" stroke-linecap=\"round\">\n                <g id=\"Cliqz-Privacy-Center-3\" transform=\"translate(-674.000000, -290.000000)\" stroke-width=\"2.5999999\" stroke=\"#4D4D4D\">\n                    <polyline id=\"Path-164-Copy-183\" points=\"676.092831 292.227875 681.989759 298.13463 676.323476 303.810354\"></polyline>\n                </g>\n            </g>\n        </svg>\n      <div class=\"switches\">\n        <span data-invisible-on-state=\"active\" class=\"new-dropdown\">\n          <button class=\"dropdown-btn\">\n             <span class=\"dropdown-content-option-text\"\n                   data-visible-on-state=\"inactive\"\n                   data-i18n=\"control-center-this-domain\"></span>\n\n             <span class=\"dropdown-content-option-text\"\n                   data-visible-on-state=\"critical\"\n                   data-i18n=\"control-center-all-sites\"></span>\n\n            <svg class=\"arr\" width=\"12px\" height=\"7px\" viewBox=\"96 10 12 7\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n                <defs></defs>\n                <polyline id=\"fill\" id=\"Path-164-Copy-93\" stroke=\"none\" fill=\"#A2A2A2\" fill-rule=\"evenodd\" opacity=\"0.554279384\" transform=\"translate(102.166470, 13.884133) rotate(90.000000) translate(-102.166470, -13.884133) \" points=\"99.218006 8.09289333 105.114934 13.999648 99.4486516 19.6753727\"></polyline>\n            </svg>\n          </button>\n\n          <div class=\"new-dropdown-content\">\n            <a class=\"dropdown-content-option " + ((stack1 = helpers["if"].call(alias3, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.antitracking : stack1) != null ? stack1.isWhitelisted : stack1, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n               data-i18n=\"control-center-this-domain\"\n               value=\"this\"\n               data-type=\"off_select\"\n               data-state=\"off_website\"\n               role=\"antiTrackingStatusChanger\">\n            </a>\n\n\n\n            <a class=\"dropdown-content-option  " + ((stack1 = helpers.unless.call(alias3, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.antitracking : stack1) != null ? stack1.isWhitelisted : stack1, { "name": "unless", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n               data-i18n=\"control-center-all-sites\"\n               value=\"all\"\n               data-type = \"off_select\"\n               data-state=\"off_all\"\n               role=\"antiTrackingStatusChanger\">\n             </a>\n          </div>\n        </span>\n        <span>\n          <span data-visible-on-state=\"active\" data-i18n=\"control-center-switch-on\"></span>\n          <span data-visible-on-state=\"inactive\" data-i18n=\"control-center-switch-off\"></span>\n          <span data-visible-on-state=\"critical\" data-i18n=\"control-center-switch-off\"></span>\n          <span\n              class=\"cqz-switch\"\n              data-type = 'switch'\n              role=\"antiTrackingStatusChanger\">\n            <span class=\"cqz-switch-box\"></span>\n          </span>\n        </span>\n      </div>\n    </div>\n    </div>\n    <div class=\"settings-section-row\">\n      <div data-start-navigation class=\"counter\" id=\"antitracker-counter\">\n        <svg id=\"shield\" width=\"32px\" height=\"39px\" viewBox=\"0 0 32 39\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs>\n                <polygon id=\"path-1\" points=\"0 35.2 0 0.3 28.8094585 0.3 28.8094585 35.2 14.4047293 35.2\"></polygon>\n            </defs>\n            <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n                <g id=\"anti-tracking-Gshield-dropdown\">\n                    <rect id=\"Rectangle-12\" fill-opacity=\"0.0143229167\" fill=\"#FFFFFF\" fill-rule=\"nonzero\" x=\"0.44057291\" y=\"0.808292\" width=\"31\" height=\"38\"></rect>\n                    <g id=\"Group-3-Copy-36\" transform=\"translate(1.291065, 2.808292)\">\n                        <g id=\"Fill-1-Clipped\">\n                            <mask id=\"mask-2\" fill=\"white\">\n                                <use xlink:href=\"#path-1\"></use>\n                            </mask>\n                            <g id=\"path-1\"></g>\n                            <path d=\"M14.40472,0.3 C14.40472,0.3 10.48952,7.2272 1.04312,7.2272 C0.70392,7.2272 0.35832,7.2184 0.00472,7.2 L0.00392,7.2 C-0.08888,7.1984 1.33592,27.8176 14.40472,35.2 C27.47272,27.8184 28.89752,7.2 28.80552,7.2 L28.80472,7.2 C28.45192,7.2184 28.10552,7.2272 27.76632,7.2272 C18.31832,7.2272 14.40472,0.3 14.40472,0.3 L14.40472,0.3 Z M25.95112,9.7112 C25.17272,14.8512 22.53752,26.6248 14.40472,32.1864 C6.26712,26.6232 3.63592,14.8504 2.85832,9.7112 C8.52952,9.2272 12.26952,6.5376 14.40472,4.376 C16.53912,6.5376 20.27992,9.2272 25.95112,9.7112 Z\" id=\"Fill-1\" stroke=\"#54BF30\" stroke-width=\"0.4\" fill=\"#54BF30\" fill-rule=\"nonzero\" mask=\"url(#mask-2)\"></path>\n                        </g>\n                    </g>\n                </g>\n            </g>\n        </svg>\n        <span id=\"count\">\n          <span data-visible-on-state=\"active\">" + alias2(alias1((stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.antitracking : stack1) != null ? stack1.totalCount : stack1, depth0)) + "</span>\n          <span data-visible-on-state=\"inactive\">0</span>\n          <span data-visible-on-state=\"critical\">0</span>\n        </span>\n\n      </div>\n      <div class=\"row-text\">\n        <p class=\"description\" data-start-navigation data-visible-on-state=\"active\" data-i18n=\"control-center-datapoints\"></p>\n        <p class=\"description\" data-start-navigation data-visible-on-state=\"inactive\" data-i18n=\"control-center-datapoints-inactive\"></p>\n        <p class=\"description\" data-start-navigation data-visible-on-state=\"critical\" data-i18n=\"control-center-datapoints-off\"></p>\n      </div>\n  </div>\n  <div class=\"active-window-tracking\">\n" + ((stack1 = container.invokePartial(partials["active-anti-tracking"], depth0, { "name": "active-anti-tracking", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "  </div>\n  </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    return "selected";
                }, "4": function (container, depth0, helpers, partials, data) {
                    return " selected ";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.antitracking : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "usePartial": true, "useData": true });
            templates['cliqz-tab'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div class=\"frame-container\" data-status=\"" + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.enabled : depth0, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.program(4, data, 0), "data": data })) != null ? stack1 : "") + "\" data-inactiveState=\"off\">\n  <div class=\"title\" style=\"cursor: default;\">\n    <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n        <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n        <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n          <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n        </text>\n      </g>\n    </svg>\n    <div class=\"tooltip right\">\n      <span class=\"title\">Cliqz Tab</span>\n      <span data-i18n=\"control-center-info-cliqz-tab\"></span>\n    </div>\n    <span>Cliqz Tab</span>\n    <div class=\"switches\" >\n      <!--======= Switch ======-->\n      <span>\n        <span data-visible-on-state=\"active\" data-i18n=\"control-center-switch-on\"></span>\n        <span data-visible-on-state=\"off\" data-i18n=\"control-center-switch-off\"></span>\n        <span class=\"cqz-switch\" role=\"cliqzTabStatusChanger\">\n          <span class=\"cqz-switch-box\"></span>\n        </span>\n      </span>\n    </div>\n  </div>\n\n</div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    return "active";
                }, "4": function (container, depth0, helpers, partials, data) {
                    return "off";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.visible : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['companies-list'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "    <div class=\"setting-accordion-section " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isInactive : depth0, { "name": "if", "hash": {}, "fn": container.program(2, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\">\n      <a class=\"setting-accordion-section-title " + ((stack1 = (helpers.if_eq || depth0 && depth0.if_eq || alias2).call(alias1, depths[1] != null ? depths[1].module : depths[1], "adblock", { "name": "if_eq", "hash": {}, "fn": container.program(4, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n         href=\"#accordion-" + alias4((helper = (helper = helpers.index || data && data.index) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "index", "hash": {}, "data": data }) : helper)) + "\"\n         data-target=\"" + alias4(container.lambda(depths[1] != null ? depths[1].module : depths[1], depth0)) + "_details_company_section\"\n         data-index=\"" + alias4((helper = (helper = helpers.index || data && data.index) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "index", "hash": {}, "data": data }) : helper)) + "\"\n" + ((stack1 = (helpers.if_eq || depth0 && depth0.if_eq || alias2).call(alias1, depths[1] != null ? depths[1].module : depths[1], "attrack", { "name": "if_eq", "hash": {}, "fn": container.program(6, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "         data-closepopup='false'>\n        <svg id=\"arrow\" width=\"13px\" height=\"13px\" viewBox=\"0 0 7 13\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs></defs>\n          <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n            <g id=\"Anti-Tracking-details-companies\" transform=\"translate(-919.000000, -410.000000)\" stroke=\"#979797\">\n              <g id=\"Group-5\" transform=\"translate(916.161758, 301.379578)\">\n                <polyline id=\"Path-94-Copy-26\" transform=\"translate(6.325000, 115.322996) rotate(-90.000000) translate(-6.325000, -115.322996) \" points=\"0.575 112.533277 6.28204074 118.197996 12.075 112.447996\"></polyline>\n              </g>\n            </g>\n          </g>\n        </svg>\n        <span>" + alias4((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "name", "hash": {}, "data": data }) : helper)) + "</span>\n      </a>\n      <span class=\"company-count\">" + alias4((helper = (helper = helpers.count || (depth0 != null ? depth0.count : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "count", "hash": {}, "data": data }) : helper)) + "</span>\n\n        <div id=\"accordion-" + alias4((helper = (helper = helpers.index || data && data.index) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "index", "hash": {}, "data": data }) : helper)) + "\" class=\"setting-accordion-section-content\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.domains : depth0, { "name": "each", "hash": {}, "fn": container.program(8, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </div>\n    </div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    return " inactive";
                }, "4": function (container, depth0, helpers, partials, data) {
                    return " accordion-inactive-title ";
                }, "6": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "            data-open-url=\"" + container.escapeExpression((helper = (helper = helpers.watchDogUrl || (depth0 != null ? depth0.watchDogUrl : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "watchDogUrl", "hash": {}, "data": data }) : helper)) + "\"\n";
                }, "8": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "            <span class=\"bullet\">" + container.escapeExpression((helper = (helper = helpers.domain || (depth0 != null ? depth0.domain : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "domain", "hash": {}, "data": data }) : helper)) + " </span>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1;

                    return "<div class=\"setting-accordion\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.companiesArray : depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "</div>\n";
                }, "useData": true, "useDepths": true });
            templates['header'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    return "<div class=\"pause\">\n  <img src=\"./images/cliqz.svg\" alt=\"Cliqz\" />\n</div>\n<div class=\"title\">\n  <span data-i18n=\"control-center-txt-header\" data-visible-on-state=\"active\"></span>\n  <img src=\"./images/alert-privacy.svg\" alt=\"\" data-invisible-on-state=\"active\"/>\n  <span data-i18n=\"control-center-txt-header-not\" class=\"warning\" data-visible-on-state=\"inactive\"></span>\n  <span data-i18n=\"control-center-txt-header-not\" class=\"warning\" data-visible-on-state=\"critical\"></span>\n</div>\n";
                }, "useData": true });
            templates['https'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<div class=\"httpsevery-frame frame-container\" data-status=\"" + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.active : depth0, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.program(4, data, 0), "data": data })) != null ? stack1 : "") + "\" data-inactiveState=\"off\">\n  <div class=\"title\" style=\"cursor: default;\">\n    <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n      <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n        <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n        <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n          <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n        </text>\n      </g>\n    </svg>\n    <div class=\"tooltip right top-right\">\n      <span class=\"title\" data-i18n=\"control-center-info-https-title\"></span>\n      <span data-i18n=\"control-center-info-https\"></span>\n\n    </div>\n    <span data-i18n=\"control-center-info-https-title\"></span>\n    <div class=\"switches\" >\n      <!--======= Switch ======-->\n      <span>\n        <span data-visible-on-state=\"active\" data-i18n=\"control-center-switch-on\"></span>\n        <span data-visible-on-state=\"off\" data-i18n=\"control-center-switch-off\"></span>\n        <span class=\"cqz-switch\" data-update-pref='extensions.https_everywhere.globalEnabled'>\n          <span class=\"cqz-switch-box\"></span>\n        </span>\n      </span>\n    </div>\n  </div>\n</div>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    return "active";
                }, "4": function (container, depth0, helpers, partials, data) {
                    return "off";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.visible : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['other-settings'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "    <header class=\"header\">\n      <div class=\"title\">\n        <span data-i18n=\"control-center-othersettings\"></span>\n" + ((stack1 = container.invokePartial(partials.support, depth0, { "name": "support", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "      </div>\n    </header>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    return "active";
                }, "5": function (container, depth0, helpers, partials, data) {
                    return "        <header class=\"header no-border\">\n          <div class=\"search-settings-title\">\n            <span data-i18n=\"control-center-searchoptions\"></span>\n          </div>\n        </header>\n";
                }, "7": function (container, depth0, helpers, partials, data) {
                    return "open";
                }, "9": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "      <span class=\"bullet\">\n        <span data-i18n=\"control-center-search-engine\"></span>\n        <select role=\"complementarySearchChanger\"\n                class=\"custom-dropdown\"\n                data-target=\"complementary_search\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.autocomplete : stack1) != null ? stack1.state : stack1, { "name": "each", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </select>\n      </span>\n";
                }, "10": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "            <option " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0["default"] : depth0, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"" + alias4((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "name", "hash": {}, "data": data }) : helper)) + "\">\n            " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.alias : depth0, { "name": "if", "hash": {}, "fn": container.program(13, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n            " + alias4((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "name", "hash": {}, "data": data }) : helper)) + "</option>\n";
                }, "11": function (container, depth0, helpers, partials, data) {
                    return "selected";
                }, "13": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "[" + container.escapeExpression((helper = (helper = helpers.alias || (depth0 != null ? depth0.alias : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "alias", "hash": {}, "data": data }) : helper)) + "] ";
                }, "15": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "            <option " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.selected : depth0, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"" + alias4((helper = (helper = helpers.key || data && data.key) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "key", "hash": {}, "data": data }) : helper)) + "\" >" + alias4((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "name", "hash": {}, "data": data }) : helper)) + "</option>\n";
                }, "17": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "      <span class=\"bullet\">\n        <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs></defs>\n          <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n            <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n            <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n              <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n            </text>\n          </g>\n        </svg>\n        <div class=\"tooltip share-location right\">\n          <span class=\"title\" data-i18n=\"control-center-info-share-location-title\"></span>\n          <span data-i18n=\"control-center-info-share-location\"></span>\n        </div>\n        <span data-i18n=\"control-center-location\"></span>\n\n\n        <select class=\"custom-dropdown\"\n                data-update-pref=\"extensions.cliqz.share_location\"\n                data-target=\"search_location\">\n" + ((stack1 = helpers.each.call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.geolocation : stack1) != null ? stack1.state : stack1, { "name": "each", "hash": {}, "fn": container.program(15, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </select>\n\n" + ((stack1 = helpers.unless.call(alias1, depth0 != null ? depth0.funnelCake : depth0, { "name": "unless", "hash": {}, "fn": container.program(18, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "      </span>\n";
                }, "18": function (container, depth0, helpers, partials, data) {
                    return "          <span class=\"location-more\" data-open-url=\"https://cliqz.com/support/local-results\" data-i18n=\"control-center-info-share-location-link\"></span>\n";
                }, "20": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "      <span class=\"bullet\">\n        <span data-i18n=\"control-center-backend-country\"></span>\n        <select role=\"searchIndexCountryChanger\"\n                class=\"custom-dropdown\"\n                data-target=\"search-index-country\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.autocomplete : stack1) != null ? stack1.supportedIndexCountries : stack1, { "name": "each", "hash": {}, "fn": container.program(21, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </select>\n      </span>\n";
                }, "21": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "            <option " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.selected : depth0, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"" + alias4((helper = (helper = helpers.key || data && data.key) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "key", "hash": {}, "data": data }) : helper)) + "\">\n               " + alias4((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "name", "hash": {}, "data": data }) : helper)) + "\n            </option>\n";
                }, "23": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "      <span class=\"bullet\"\n            data-status=\"" + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.hpn : stack1) != null ? stack1.state : stack1, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.program(24, data, 0), "data": data })) != null ? stack1 : "") + "\"\n            data-inactiveState=\"inactive\">\n        <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs></defs>\n          <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n            <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n            <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n              <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n            </text>\n          </g>\n        </svg>\n        <div class=\"tooltip right proxy\">\n          <span class=\"title\" data-i18n=\"control-center-info-hpn-title\"></span>\n          <span data-i18n=\"control-center-info-hpn\"></span>\n        </div>\n        <span>\n          <span class=\"cqz-switch-label\"\n                data-i18n=\"control-center-proxy\">\n          </span>\n          <select class=\"custom-dropdown\"\n                  data-update-pref=\"extensions.cliqz.hpn-query\"\n                  data-update-pref-type=\"boolean\"\n                  data-target=\"search_proxy\">\n                <option " + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.searchProxy : stack1) != null ? stack1.enabled : stack1, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"true\" data-i18n=\"control-center-enabled\"></option>\n                <option " + ((stack1 = helpers.unless.call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.searchProxy : stack1) != null ? stack1.enabled : stack1, { "name": "unless", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"false\" data-i18n=\"control-center-disabled\"></option>\n          </select>\n        </span>\n      </span>\n";
                }, "24": function (container, depth0, helpers, partials, data) {
                    return "inactive";
                }, "26": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["type-filter"] : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(27, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "27": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "            <span class=\"bullet\">\n            <span class=\"cliqz-tab\">\n              <span class=\"squaredFour\">\n                <input type=\"checkbox\"\n                       id=\"squaredFour6\"\n                       name=\"check\"\n                       data-function=\"type-filter\"\n                       data-target=\"type1\"\n                       " + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["type-filter"] : stack1) != null ? stack1.type1 : stack1, { "name": "if", "hash": {}, "fn": container.program(28, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n                />\n                <label for=\"squaredFour6\"></label>\n                <span id=\"strict\">Type 1</span>\n              </span>\n            </span>\n            <span class=\"cliqz-tab\">\n              <span class=\"squaredFour\">\n                <input type=\"checkbox\"\n                       id=\"squaredFour7\"\n                       name=\"check\"\n                       data-function=\"type-filter\"\n                       data-target=\"type2\"\n                       " + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["type-filter"] : stack1) != null ? stack1.type2 : stack1, { "name": "if", "hash": {}, "fn": container.program(28, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n                />\n                <label for=\"squaredFour7\"></label>\n                <span id=\"strict\">Type 2</span>\n              </span>\n            </span>\n            <span class=\"cliqz-tab\">\n              <span class=\"squaredFour\">\n                <input type=\"checkbox\"\n                       id=\"squaredFour8\"\n                       name=\"check\"\n                       data-function=\"type-filter\"\n                       data-target=\"type3\"\n                       " + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["type-filter"] : stack1) != null ? stack1.type3 : stack1, { "name": "if", "hash": {}, "fn": container.program(28, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n                />\n                <label for=\"squaredFour8\"></label>\n                <span id=\"strict\">Type 3</span>\n              </span>\n            </span>\n          </span>\n";
                }, "28": function (container, depth0, helpers, partials, data) {
                    return "checked";
                }, "30": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "        <span class=\"bullet human-web\"\n              data-status=\"" + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["human-web"] : stack1) != null ? stack1.state : stack1, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.program(24, data, 0), "data": data })) != null ? stack1 : "") + "\"\n              data-inactiveState=\"inactive\">\n          <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs></defs>\n            <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n              <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n              <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n                <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n              </text>\n            </g>\n          </svg>\n          <div class=\"tooltip right human-web\">\n            <span class=\"title\" data-i18n=\"control-center-info-hw-title\"></span>\n            <span data-i18n=\"control-center-info-hw\"></span>\n          </div>\n          <span class=\"cqz-switch-label\"\n                data-i18n=\"control-center-humanweb\">\n          </span>\n          <select class=\"custom-dropdown\"\n                  data-update-pref=\"extensions.cliqz.humanWebOptOut\"\n                  data-target=\"search_humanweb\">\n                <option " + ((stack1 = helpers.unless.call(alias1, (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.humanWebOptOut : stack1, { "name": "unless", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"enabled\" data-i18n=\"control-center-enabled\"></option>\n                <option " + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.humanWebOptOut : stack1, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"disabled\" data-i18n=\"control-center-disabled\"></option>\n          </select>\n        </span>\n";
                }, "32": function (container, depth0, helpers, partials, data) {
                    return "        <span class=\"bullet\">\n          <span data-i18n=\"control-center-transparency\"></span>\n          <button\n            data-open-url=\"about:transparency\"\n            data-target=\"search_transparency\"\n            data-i18n=\"control-center-open\">\n          </button>\n          <svg class=\"bulletarrow\" width=\"9px\" height=\"12px\" viewBox=\"175 40 9 14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs></defs>\n            <polyline id=\"Path-164-Copy-140\" stroke=\"#7D7D7D\" stroke-width=\"1.5999999\" fill=\"none\" opacity=\"0.554279384\" points=\"176 41 181.896928 46.9067547 176.230646 52.5824794\"></polyline>\n          </svg>\n        </span>\n";
                }, "34": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "  <div class=\"accordion-section\">\n    <a class=\"accordion-section-title\"\n       href=\"#accordion-3\"\n       data-target=\"history\">\n      <svg id=\"arrow\" width=\"13px\" height=\"13px\" viewBox=\"1017 657 13 13\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <defs></defs>\n        <polygon id=\"Rectangle-546-Copy-11\" stroke=\"none\" fill=\"#838383\" fill-rule=\"evenodd\" transform=\"translate(1023.344411, 663.208565) rotate(45.000000) translate(-1023.344411, -663.208565) \" points=\"1018.95691 660.49484 1027.73191 658.821065 1026.05814 667.596065\"></polygon>\n      </svg>\n      <span data-i18n=\"control-center-history-options\"></span>\n    </a>\n    <div id=\"accordion-3\" class=\"accordion-section-content\">\n      <span class=\"bullet\">\n        <span data-i18n=\"control-center-show-history\"></span>\n        <button\n            data-open-url=\"history\"\n            data-target=\"history_showall\"\n            data-i18n=\"control-center-open\">\n        </button>\n        <svg class=\"bulletarrow\" width=\"9px\" height=\"12px\" viewBox=\"175 40 9 14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs></defs>\n          <polyline id=\"Path-164-Copy-140\" stroke=\"#7D7D7D\" stroke-width=\"1.5999999\" fill=\"none\" opacity=\"0.554279384\" points=\"176 41 181.896928 46.9067547 176.230646 52.5824794\"></polyline>\n        </svg>\n      </span>\n      <span class=\"bullet\">\n        <span data-i18n=\"control-center-forget-history\"></span>\n        <button\n            data-open-url=\"forget_history\"\n            data-target=\"history_forget\"\n            data-i18n=\"control-center-open\">\n        </button>\n        <svg class=\"bulletarrow\" width=\"9px\" height=\"12px\" viewBox=\"175 40 9 14\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs></defs>\n          <polyline id=\"Path-164-Copy-140\" stroke=\"#7D7D7D\" stroke-width=\"1.5999999\" fill=\"none\" opacity=\"0.554279384\" points=\"176 41 181.896928 46.9067547 176.230646 52.5824794\"></polyline>\n        </svg>\n      </span>\n" + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.apt : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(35, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n  </div>\n";
                }, "35": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "        <span class=\"bullet\"\n              data-status=\"" + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.apt : stack1) != null ? stack1.state : stack1, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.program(24, data, 0), "data": data })) != null ? stack1 : "") + "\"\n              data-inactiveState=\"inactive\">\n          <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n            <defs></defs>\n            <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n              <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n              <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n                <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n              </text>\n            </g>\n          </svg>\n          <div class=\"tooltip right forget-mode\">\n            <span class=\"title\" data-i18n=\"control-center-info-forget-mode-title\"></span>\n            <span data-i18n=\"control-center-info-forget-mode\"></span>\n          </div>\n          <span class=\"cqz-switch-label\"\n                data-i18n=\"control-center-forget-mode\">\n          </span>\n          <select class=\"custom-dropdown\"\n                  data-update-pref='browser.privatebrowsing.apt'\n                  data-update-pref-type=\"boolean\"\n                  data-target=\"history_autoforget\">\n                <option " + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.apt : stack1) != null ? stack1.state : stack1, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"true\" data-i18n=\"control-center-enabled\"></option>\n                <option " + ((stack1 = helpers.unless.call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.apt : stack1) != null ? stack1.state : stack1, { "name": "unless", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"false\" data-i18n=\"control-center-disabled\"></option>\n          </select>\n        </span>\n";
                }, "37": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "    <!-- offrz menu -->\n    <div class=\"accordion-section\">\n      <a class=\"accordion-section-title\"\n         href=\"#accordion-4\"\n         data-target=\"offerz\">\n        <svg id=\"arrow\" width=\"13px\" height=\"13px\" viewBox=\"1017 657 13 13\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs></defs>\n          <polygon id=\"Rectangle-546-Copy-11\" stroke=\"none\" fill=\"#838383\" fill-rule=\"evenodd\" transform=\"translate(1023.344411, 663.208565) rotate(45.000000) translate(-1023.344411, -663.208565) \" points=\"1018.95691 660.49484 1027.73191 658.821065 1026.05814 667.596065\"></polygon>\n        </svg>\n        <span data-i18n=\"control-center-offers-options\"></span>\n      </a>\n      <div id=\"accordion-4\" class=\"accordion-section-content\">\n        <span class=\"bullet\">\n          <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs></defs>\n          <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n            <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n            <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n              <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n            </text>\n          </g>\n          </svg>\n          <div class=\"tooltip offers-main right\">\n            <span class=\"title\" data-i18n=\"control-center-offers-show\"></span>\n            <span data-i18n=\"control-center-offers-show-info\"></span>\n          </div>\n          <span data-i18n=\"control-center-offers-show\"></span>\n          <span class=\"location-more\"\n                data-open-url=\"https://cliqz.com/myoffrz\"\n                data-target=\"offerz_main_learn_more\"\n                data-i18n=\"control-center-info-share-location-link\">\n          </span>\n          <select class=\"custom-dropdown\"\n                  data-update-pref=\"extensions.cliqz.offers2UserEnabled\"\n                  data-update-pref-type=\"boolean\"\n                  data-target=\"offerz_main\">\n                <option " + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["offers-v2"] : stack1) != null ? stack1.userEnabled : stack1, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"true\" data-i18n=\"control-center-enabled\"></option>\n                <option " + ((stack1 = helpers.unless.call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["offers-v2"] : stack1) != null ? stack1.userEnabled : stack1, { "name": "unless", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"false\" data-i18n=\"control-center-disabled\"></option>\n          </select>\n        </span>\n        <span class=\"bullet\">\n          <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs></defs>\n          <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n            <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n            <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n              <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n            </text>\n          </g>\n          </svg>\n          <div class=\"tooltip offers-location right\">\n            <span class=\"title\" data-i18n=\"control-center-offers-location\"></span>\n            <span data-i18n=\"control-center-offers-location-info\"></span>\n          </div>\n          <span data-i18n=\"control-center-offers-location\"></span>\n          <select class=\"custom-dropdown\"\n                  data-update-pref=\"extensions.cliqz.offers_location\"\n                  data-update-pref-type=\"integer\"\n                  data-target=\"offerz_location\">\n                <option " + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["offers-v2"] : stack1) != null ? stack1.locationEnabled : stack1, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"1\" data-i18n=\"control-center-enabled\"></option>\n                <option " + ((stack1 = helpers.unless.call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["offers-v2"] : stack1) != null ? stack1.locationEnabled : stack1, { "name": "unless", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " value=\"0\" data-i18n=\"control-center-disabled\"></option>\n          </select>\n        </span>\n      </div>\n    </div>\n    <!-- end offerz -->\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div class=\"lock\"></div>\n" + ((stack1 = helpers.unless.call(alias1, depth0 != null ? depth0.funnelCake : depth0, { "name": "unless", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "<div class=\"accordion\">\n  <div class=\"accordion-section\">\n    <a class=\"accordion-section-title " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.funnelCake : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n       href=\"#accordion-2\"\n       data-target=\"moresearch\">\n      <svg id=\"arrow\" width=\"13px\" height=\"13px\" viewBox=\"1017 657 13 13\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n        <defs></defs>\n        <polygon id=\"Rectangle\" stroke=\"none\" fill=\"#838383\" fill-rule=\"evenodd\" transform=\"translate(1023.344411, 663.208565) rotate(45.000000) translate(-1023.344411, -663.208565) \" points=\"1018.95691 660.49484 1027.73191 658.821065 1026.05814 667.596065\"></polygon>\n      </svg>\n      <span data-i18n=\"control-center-searchoptions\"></span>\n    </a>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.funnelCake : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    <div id=\"accordion-2\" class=\"accordion-section-content " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.funnelCake : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\">\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.autocomplete : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n      <span class=\"bullet\">\n        <svg class=\"infobutton\" width=\"15px\" height=\"15px\" viewBox=\"1829 359 15 15\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs></defs>\n          <g id=\"Group-2\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\" transform=\"translate(1829.000000, 359.000000)\">\n            <ellipse id=\"Oval-2\" fill=\"#999\" cx=\"7.56817127\" cy=\"7.39375789\" rx=\"7\" ry=\"7\"></ellipse>\n            <text id=\"i-copy\" font-family=\"AmericanTypewriter-Bold, American Typewriter\" font-size=\"11.2\" font-weight=\"bold\" fill=\"#FFFFFF\">\n              <tspan x=\"5.50934774\" y=\"11.3937579\">i</tspan>\n            </text>\n          </g>\n        </svg>\n        <div class=\"tooltip explicit right\">\n          <span class=\"title\" data-i18n=\"control-center-info-explicit-title\"></span>\n          <span data-i18n=\"control-center-info-explicit\"></span>\n        </div>\n        <span data-i18n=\"control-center-explicit\"></span>\n\n        <select class=\"custom-dropdown\"\n                data-update-pref=\"extensions.cliqz.adultContentFilter\"\n                data-target=\"search_adult\">\n" + ((stack1 = helpers.each.call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.adult : stack1) != null ? stack1.state : stack1, { "name": "each", "hash": {}, "fn": container.program(15, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </select>\n\n      </span>\n\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.geolocation : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(17, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.autocomplete : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(20, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.hpn : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(23, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["type-filter"] : stack1, { "name": "if", "hash": {}, "fn": container.program(26, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["human-web"] : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(30, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["privacy-dashboard"] : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(32, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </div>\n  </div>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.showHistorySettings : depth0, { "name": "if", "hash": {}, "fn": container.program(34, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["offers-v2"] : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(37, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "</div>\n";
                }, "usePartial": true, "useData": true });
            templates['support'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    return "      <span data-target=\"moncomp\" data-open-url=\"moncomp\">Moncomp</span>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "    &#8226;\n      <span id=\"tips\"\n        data-i18n=\"control-center-tips\"\n" + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.amo : depth0, { "name": "if", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.program(6, data, 0), "data": data })) != null ? stack1 : "") + ">\n      </span>\n";
                }, "4": function (container, depth0, helpers, partials, data) {
                    return "          data-open-url=\"https://cliqz.com/tips-firefox\"\n";
                }, "6": function (container, depth0, helpers, partials, data) {
                    return "          data-open-url=\"https://cliqz.com/tips\"\n        ";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<span id=\"support\">\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.moncomp : stack1) != null ? stack1.visible : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "  <span class=\"support-icon\">\n      <svg width=\"16px\" height=\"16px\" viewBox=\"0 0 16 16\" version=\"1.1\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\">\n          <defs></defs>\n          <g id=\"Page-1\" stroke=\"none\" stroke-width=\"1\" fill=\"none\" fill-rule=\"evenodd\">\n              <g id=\"icon\" fill=\"#6B6B6B\">\n                  <path d=\"M15.4,8 C15.4,3.91309285 12.0869071,0.6 8,0.6 C3.91309285,0.6 0.6,3.91309285 0.6,8 C0.6,12.0869071 3.91309285,15.4 8,15.4 C12.0869071,15.4 15.4,12.0869071 15.4,8 Z M1.4,8 C1.4,4.35492065 4.35492065,1.4 8,1.4 C11.6450793,1.4 14.6,4.35492065 14.6,8 C14.6,11.6450793 11.6450793,14.6 8,14.6 C4.35492065,14.6 1.4,11.6450793 1.4,8 Z\" id=\"Oval\"></path>\n                  <path d=\"M12.5517857,8 C12.5517857,5.48611817 10.5138818,3.44821429 8,3.44821429 C5.48611817,3.44821429 3.44821429,5.48611817 3.44821429,8 C3.44821429,10.5138818 5.48611817,12.5517857 8,12.5517857 C10.5138818,12.5517857 12.5517857,10.5138818 12.5517857,8 Z M4.24821429,8 C4.24821429,5.92794597 5.92794597,4.24821429 8,4.24821429 C10.072054,4.24821429 11.7517857,5.92794597 11.7517857,8 C11.7517857,10.072054 10.072054,11.7517857 8,11.7517857 C5.92794597,11.7517857 4.24821429,10.072054 4.24821429,8 Z\" id=\"Oval\"></path>\n                  <polygon id=\"Line\" points=\"12.7973626 3.69761175 13.04485 3.45012437 12.5498752 2.95514964 12.3023879 3.20263701 10.7525124 4.75251251 10.5050251 4.99999989 10.9999998 5.49497463 11.2474872 5.24748725\"></polygon>\n                  <polygon id=\"Line-Copy\" points=\"5.14557692 11.8493975 5.39306429 11.6019101 4.89808954 11.1069354 4.65060217 11.3544227 3.10072673 12.9042982 2.85323936 13.1517856 3.34821412 13.6467603 3.59570149 13.399273\"></polygon>\n                  <polygon id=\"Line\" points=\"12.5230914 12.7437912 12.7705788 12.9912786 13.2655535 12.4963038 13.0180661 12.2488165 11.4681906 10.698941 11.2207032 10.4514536 10.7257285 10.9464284 10.9732159 11.1939158\"></polygon>\n                  <polygon id=\"Line-Copy\" points=\"4.37130566 5.09200549 4.61879304 5.33949286 5.11376777 4.84451811 4.8662804 4.59703074 3.3164049 3.0471553 3.06891752 2.79966793 2.57394278 3.29464269 2.82143016 3.54213006\"></polygon>\n              </g>\n          </g>\n        </svg>\n    </span>\n    <span data-i18n=\"control-center-support\"\n          data-open-url=\"" + container.escapeExpression((helper = (helper = helpers.feedbackURL || (depth0 != null ? depth0.feedbackURL : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "feedbackURL", "hash": {}, "data": data }) : helper)) + "\"\n          data-target=\"info_help\">\n    </span>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.showTipps : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "</span>\n";
                }, "useData": true });
            templates['template'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    return "funnel-cake";
                }, "3": function (container, depth0, helpers, partials, data) {
                    return "amo";
                }, "5": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "  <header id=\"header\" data-status=\"" + container.escapeExpression((helper = (helper = helpers.generalState || (depth0 != null ? depth0.generalState : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "generalState", "hash": {}, "data": data }) : helper)) + "\">\n" + ((stack1 = container.invokePartial(partials.header, depth0, { "name": "header", "data": data, "indent": "   ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "  </header>\n  <div id=\"currentsite\">\n      <h3 class=\"truncate\">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isSpecialUrl : depth0, { "name": "if", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.program(8, data, 0), "data": data })) != null ? stack1 : "") + "      </h3>\n      <div class=\"reportsite\"\n          data-open-url=\"https://cliqz.com/report-url\"\n          data-target=\"report_url\"\n          data-i18n=\"control-center-report-url\">\n      </div>\n  </div>\n\n  <div id=\"settings\" class=\"settings-section clearfix\">\n    <div id=\"anti-tracking\"\n         data-section=\"antitrack\"\n         class=\"antitracker setting\"\n         data-target=\"attrack\">\n" + ((stack1 = container.invokePartial(partials["anti-tracking"], depth0, { "name": "anti-tracking", "data": data, "indent": "      ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </div>\n\n    <div id=\"ad-blocking\"\n         class=\"adblock setting\"\n         data-target=\"adblock\">\n" + ((stack1 = container.invokePartial(partials["ad-blocking"], depth0, { "name": "ad-blocking", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </div>\n\n    <div id=\"anti-phising\"\n         data-section=\"antiphish\"\n         class=\"antiphishing setting\"\n         data-target=\"antiphish\">\n" + ((stack1 = container.invokePartial(partials["anti-phising"], depth0, { "name": "anti-phising", "data": data, "indent": "      ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </div>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.amo : depth0, { "name": "if", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    <div id=\"https\"\n         class=\"setting\"\n         data-section=\"https\"\n         data-target=\"https\">\n" + ((stack1 = container.invokePartial(partials.https, (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1["https-everywhere"] : stack1, { "name": "https", "data": data, "indent": "      ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </div>\n  </div>\n";
                }, "6": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "              <span class=\"dark\">" + container.escapeExpression((helper = (helper = helpers.friendlyURL || (depth0 != null ? depth0.friendlyURL : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "friendlyURL", "hash": {}, "data": data }) : helper)) + "</span>\n";
                }, "8": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "              <span class=\"dark\">" + alias4((helper = (helper = helpers.domain || (depth0 != null ? depth0.domain : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "domain", "hash": {}, "data": data }) : helper)) + "</span><span>" + alias4((helper = (helper = helpers.extraUrl || (depth0 != null ? depth0.extraUrl : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "extraUrl", "hash": {}, "data": data }) : helper)) + "</span>\n";
                }, "10": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "      <div class=\"setting\"\n           id=\"cliqz-tab\"\n           data-section=\"cliqz-tab\"\n           data-target=\"cliqz-tab\">\n" + ((stack1 = container.invokePartial(partials["cliqz-tab"], (stack1 = depth0 != null ? depth0.module : depth0) != null ? stack1.freshtab : stack1, { "name": "cliqz-tab", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "      </div>\n";
                }, "12": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "  <section id=\"othersettings\">\n" + ((stack1 = container.invokePartial(partials["other-settings"], depth0, { "name": "other-settings", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "  </section>\n";
                }, "14": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "<header class=\"footer\">\n  <div class=\"title\">\n    <span data-i18n=\"control-center-footer\"></span>\n" + ((stack1 = container.invokePartial(partials.support, depth0, { "name": "support", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "  </div>\n</header>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div class=\"lock\"></div>\n<div class=\"" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.funnelCake : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.amo : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.showSecuritySettings : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.showOtherSettings : depth0, { "name": "if", "hash": {}, "fn": container.program(12, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.funnelCake : depth0, { "name": "if", "hash": {}, "fn": container.program(14, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "</div>\n";
                }, "usePartial": true, "useData": true });

            _export('default', templates);
        }
    };
});

$__System.register('a', ['b'], function (_export, _context) {
  "use strict";

  var templates;
  return {
    setters: [function (_b) {
      templates = _b.default;
    }],
    execute: function () {

      window.addEventListener("message", function (ev) {
        var data = JSON.parse(ev.data);
        if (data.target == 'cliqz-control-center' && data.origin == 'window') {
          messageHandler(data.message);
        }
      });

      function sendMessageToWindow(message) {
        window.postMessage(JSON.stringify({
          target: 'cliqz-control-center',
          origin: 'iframe',
          message: message
        }), '*');
      }

      function messageHandler(message) {
        switch (message.action) {
          case 'pushData':
            {
              draw(message.data);
            }
        }
      }

      var helpers = {
        json(context) {
          return JSON.stringify(context);
        },

        local(key) {
          return chrome.i18n.getMessage(key);
        },

        if_eq(a, b, opts) {
          if (a === b) return opts.fn(this);else return opts.inverse(this);
        }
      };

      /* global window, document, $, Handlebars */
      /* eslint-disable func-names, no-param-reassign */
      /* eslint import/no-extraneous-dependencies: 'off' */
      const isAction = location.search.replace('?pageAction=', '') === 'true';
      const slideUp = $.fn.slideUp;
      const slideDown = $.fn.slideDown;

      Handlebars.partials = templates;
      function resize() {
        const $controlCenter = $('#control-center');
        const width = $controlCenter.width();
        const height = $controlCenter.height();
        sendMessageToWindow({
          action: 'resize',
          data: {
            width,
            height
          }
        });
      }
      $.fn.slideUp = function newSlideUp() {
        const ret = slideUp.call(this, 0);
        resize();
        return ret;
      };
      $.fn.slideDown = function newSlideDown() {
        const ret = slideDown.call(this, 0);
        resize();
        return ret;
      };

      function localizeDocument() {
        Array.from(document.querySelectorAll('[data-i18n]')).forEach(el => {
          const elArgs = el.dataset.i18n.split(',');
          const key = elArgs.shift();

          el.innerHTML = chrome.i18n.getMessage(key, elArgs);
        });
      }

      function isOnboarding() {
        return $('#control-center').hasClass('onboarding');
      }

      function closeAccordionSection() {
        $('.accordion .accordion-section-title').removeClass('active');
        $('.accordion .accordion-section-content').slideUp(150).removeClass('open');
      }

      // ====== GENERIC SETTING ACCORDION FUNCTIONALITY ========= //
      $(document).ready(() => {
        Object.keys(helpers).forEach(helperName => {
          Handlebars.registerHelper(helperName, helpers[helperName]);
        });

        sendMessageToWindow({
          action: 'getEmptyFrameAndData',
          data: {}
        });
      });

      // open URL
      $('#control-center').on('click', '[data-open-url]', ev => {
        sendMessageToWindow({
          action: 'openURL',
          data: {
            url: ev.currentTarget.getAttribute('data-open-url'),
            target: ev.currentTarget.getAttribute('data-target'),
            closePopup: ev.currentTarget.dataset.closepopup || true
          }
        });
      });

      $('#control-center').on('click', '[data-function]', function (ev) {
        if (isOnboarding()) {
          return;
        }
        sendMessageToWindow({
          action: ev.currentTarget.dataset.function,
          data: {
            status: $(this).prop('checked'),
            target: ev.currentTarget.getAttribute('data-target')
          }
        });
      });

      $('#control-center').on('click', () => {
        $('.new-dropdown-content').removeClass('visible');
      });

      $('#control-center').on('change', '[role="complementarySearchChanger"]', function () {
        sendMessageToWindow({
          action: 'complementary-search',
          data: {
            defaultSearch: $(this).val()
          }
        });
      });

      $('#control-center').on('change', '[role="searchIndexCountryChanger"]', function () {
        sendMessageToWindow({
          action: 'search-index-country',
          data: {
            defaultCountry: $(this).val()
          }
        });
      });

      $('#control-center').on('click', '[role="cliqzTabStatusChanger"]', function () {
        sendMessageToWindow({
          action: 'cliqz-tab',
          data: {
            status: $(this).closest('.frame-container').attr('data-status') === 'active'
          }
        });
      });

      $('#control-center').on('click', '[role="antiTrackingStatusChanger"]', function () {
        let state;
        const type = $(this).attr('data-type');
        if (type === 'switch') {
          state = $(this).closest('.frame-container').attr('data-status');
          // make this website default
          const $switches = $(this).closest('.switches');
          const options = $switches.find('.dropdown-content-option');
          const defaultSelect = $switches.find('.dropdown-content-option[data-state="off_website"]');
          options.removeClass('selected');
          defaultSelect.addClass('selected');
        } else {
          state = $(this).attr('data-state');
        }

        if (isOnboarding()) {
          return;
        }

        sendMessageToWindow({
          action: 'antitracking-activator',
          data: {
            type,
            state,
            status: $(this).closest('.frame-container').attr('data-status'),
            hostname: $(this).closest('.frame-container').attr('data-hostname')
          }
        });
      });

      $('#control-center').on('click', '[role="antiPhishingStatusChanger"]', function () {
        let state;
        const type = $(this).attr('data-type');
        if (type === 'switch') {
          state = $(this).closest('.frame-container').attr('data-status');
          // make this website default
          const $switches = $(this).closest('.switches');
          const options = $switches.find('.dropdown-content-option');
          const defaultSelect = $switches.find('.dropdown-content-option[data-state="off_website"]');
          options.removeClass('selected');
          defaultSelect.addClass('selected');
        } else {
          state = $(this).attr('data-state');
        }

        if (isOnboarding()) {
          return;
        }

        sendMessageToWindow({
          action: 'anti-phishing-activator',
          data: {
            type,
            state,
            status: $(this).closest('.frame-container').attr('data-status'),
            url: $(this).closest('.frame-container').attr('data-url')
          }
        });
      });

      $('#control-center').on('click', '[role="adBlockerStatusChanger"]', function () {
        let state;
        const type = $(this).attr('data-type');
        const frame = $(this).closest('.frame-container');
        let option;

        if (type === 'switch') {
          state = frame.attr('data-status');
          option = 'domain';
          // select first option "This domain" by default
          frame.attr('data-visible', 'off_domain');
          const $switches = $(this).closest('.switches');
          const options = $switches.find('.dropdown-content-option');
          const defaultSelect = $switches.find('.dropdown-content-option[data-state="off_domain"]');
          options.removeClass('selected');
          defaultSelect.addClass('selected');
        } else {
          state = $(this).attr('data-state');
          option = $(this).attr('value');
        }

        frame.attr('data-visible', $(this).attr('data-state'));
        if (isOnboarding()) {
          return;
        }

        sendMessageToWindow({
          action: 'adb-activator',
          data: {
            type,
            state,
            status: frame.attr('data-status'),
            url: frame.attr('data-url'),
            // TODO instead of dropdown-scope selece the active button
            option
          }
        });
      });

      // select box change
      $('#control-center').on('change', 'select[data-update-pref]', ev => {
        sendMessageToWindow({
          action: 'updatePref',
          data: {
            pref: ev.currentTarget.getAttribute('data-update-pref'),
            value: ev.currentTarget.value,
            target: ev.currentTarget.getAttribute('data-target'),
            prefType: ev.currentTarget.getAttribute('data-update-pref-type')
          }
        });
      });

      function updateGeneralState() {
        const states = Array.from(document.querySelectorAll('.frame-container.anti-tracking')).map(el => el.getAttribute('data-status'));
        let state = 'active';

        if (states.indexOf('critical') !== -1) {
          state = 'critical';
        } else if (states.indexOf('inactive') !== -1) {
          state = 'inactive';
        }

        $('#header').attr('data-status', state);
        if (isOnboarding()) {
          return;
        }
        sendMessageToWindow({
          action: 'updateState',
          data: state
        });
      }

      function compile(obj) {
        return Object.keys(obj.companies).map(companyName => {
          const domains = obj.companies[companyName];
          const trackerSlug = obj.companyInfo[companyName].wtm || '../tracker-not-found';
          const company = {
            name: companyName,
            watchDogUrl: `https://whotracks.me/trackers/${trackerSlug}.html`,
            domains: domains.map(domain => {
              const domainData = obj.trackers[domain];
              return {
                domain,
                count: (domainData.cookie_blocked || 0) + (domainData.tokens_removed || 0)
              };
            }).sort((a, b) => b.count - a.count),
            count: 0
          };
          company.count = company.domains.reduce((prev, curr) => prev + curr.count, 0);
          company.isInactive = company.count === 0;
          return company;
        }).sort((a, b) => b.count - a.count);
      }

      function compileAdblockInfo(data) {
        const advertisersList = data.module.adblocker.advertisersList;
        const advertisers = data.module.adblocker.advertisersList;
        const firstParty = advertisers['First party'];
        const unknown = advertisers._Unknown;
        const firstPartyCount = firstParty && firstParty.length;
        const unknownCount = unknown && unknown.length;

        delete advertisers['First party'];
        delete advertisers._Unknown;
        advertisersList.companiesArray = Object.keys(advertisers).map(advertiser => {
          const count = advertisers[advertiser].length;
          return {
            count,
            name: advertiser,
            isInactive: count === 0
          };
        }).sort((a, b) => a.count < b.count);

        if (firstParty) {
          advertisersList.companiesArray.unshift({
            name: 'First Party', // i18n
            count: firstPartyCount,
            isInactive: firstPartyCount === 0
          });
        }
        if (unknown) {
          advertisersList.companiesArray.push({
            name: 'Other', // i18n
            count: unknownCount,
            isInactive: unknownCount === 0
          });
        }
      }

      function draw$1(data) {
        const emptyFrame = Object.keys(data.module || {}).length === 0;
        const module = data.module;

        if (data.onboarding) {
          document.getElementById('control-center').classList.add('onboarding');
          if (module.antitracking && module.antitracking.totalCount === 1) {
            window.postMessage(JSON.stringify({
              target: 'cliqz',
              module: 'core',
              action: 'sendTelemetry',
              args: [{
                type: 'onboarding',
                version: '2.1',
                action: 'show',
                view: 'privacy',
                target: 'dashboard'
              }]
            }), '*');
          }
        }

        if (module) {
          if (!module.antitracking) {
            module.antitracking = {
              visible: true,
              state: 'active',
              totalCount: 0
            };
          }
          if (module.antitracking && module.antitracking.trackersList) {
            module.antitracking.trackersList.companiesArray = compile(module.antitracking.trackersList);
          }

          if (module.adblocker) {
            compileAdblockInfo(data);
          }
        }

        if (data.debug) {
          /* eslint-disable no-console */
          console.log('Drawing: ', data, JSON.stringify(data));
          /* eslint-enable no-console */
        }

        // in the funnelCake build other settings are only visible in the browser-action popup
        data.showOtherSettings = data.funnelCake ? isAction : true;
        // in the funnelCake build security settings are only visible in the normal popup
        data.showSecuritySettings = data.funnelCake ? !isAction : true;
        // history settings are hidden in teh funnelCake build
        data.showHistorySettings = !data.funnelCake;
        // tipps button is hidden for funnelcake page-action popup
        data.showTipps = data.funnelCake ? isAction : true;

        const cc = document.getElementById('control-center');
        cc.innerHTML = templates.template(data);

        function closeSettingAccordionSection() {
          $('.setting-accordion .accordion-active-title').removeClass('active');
          $('.setting-accordion .setting-accordion-section-content').slideUp(150).removeClass('open');
        }

        $('.setting-accordion-section-title').on('click', function (e) {
          e.stopPropagation();
          const index = $(this).attr('data-index');
          const url = e.currentTarget.getAttribute('data-open-url');
          const target = $(this).attr('data-target');
          const closePopup = e.currentTarget.dataset.closepopup || true;
          // openURL already sends telemetry data
          if ($(this).attr('data-open-url')) {
            sendMessageToWindow({
              action: 'openURL',
              data: {
                url,
                target,
                closePopup,
                index
              }
            });
          } else {
            sendMessageToWindow({
              action: 'sendTelemetry',
              data: {
                target,
                action: 'click',
                index
              }
            });
          }
        });

        $('.accordion-active-title').click(function (e) {
          e.preventDefault();
          const currentAttrValue = $(this).attr('href');

          if ($(e.target).is('.active') || $(e.target)[0].parentElement.className === 'accordion-active-title active') {
            closeSettingAccordionSection();
          } else {
            closeSettingAccordionSection();
            $(this).addClass('active');
            $(`.setting-accordion ${currentAttrValue}`).slideDown(150).addClass('open');
          }
        });

        $('.accordion-section-title').click(function (e) {
          if ($(this).attr('data-disabled') === 'true') {
            return;
          }

          e.preventDefault();
          const currentAttrValue = $(this).attr('href');
          const sectionTitle = $(this).closest('.accordion-section-title');
          let state;

          if (sectionTitle.hasClass('active')) {
            closeAccordionSection();
            state = 'collapsed';
          } else {
            closeAccordionSection();
            $(this).addClass('active');
            $(`.accordion ${currentAttrValue}`).slideDown(150).addClass('open');
            state = 'expanded';
          }

          sendMessageToWindow({
            action: 'sendTelemetry',
            data: {
              target: $(this).attr('data-target'),
              state,
              action: 'click'
            }
          });
        });

        $('[data-start-navigation]').on('click', function () {
          const $main = $(this).closest('#control-center');
          const $settings = $('#settings');
          const $othersettings = $main.find('#othersettings');
          const $setting = $(this).closest('.setting');
          const $target = $setting.attr('data-target');
          const $container = $(this).closest('.frame-container');

          if ($container.attr('data-status') !== 'active') {
            return; // Disable clicking on inactive module
          }

          sendMessageToWindow({
            action: 'sendTelemetry',
            data: {
              target: $target,
              action: 'click'
            }
          });
          closeAccordionSection();
          $settings.addClass('open');
          $setting.addClass('active');
          $othersettings.css('display', 'none');
          resize();
        });

        $('.cross').click(function (e) {
          e.stopPropagation();
          $(this).closest('.setting').removeClass('active');
          $('#othersettings').css('display', 'block');
          $('#settings').removeClass('open');
          sendMessageToWindow({
            action: 'sendTelemetry',
            data: {
              target: $(this).attr('data-target'),
              action: 'click'
            }
          });
          resize();
        });

        $('.cqz-switch-label, .cqz-switch-grey').click(function () {
          const target = $(this).closest('.bullet');
          target.attr('data-status', (idx, attr) => attr !== 'active' ? 'active' : target.attr('data-inactiveState'));

          if (this.hasAttribute('data-update-pref')) {
            sendMessageToWindow({
              action: 'updatePref',
              data: {
                pref: this.getAttribute('data-update-pref'),
                value: target.attr('data-status') === 'active',
                target: this.getAttribute('data-target')
              }
            });
          }
        });

        $('.cqz-switch').click(function () {
          const target = $(this).closest('.frame-container');
          const type = 'switch';
          const dropdownContent = target.find('.new-dropdown-content');

          if (dropdownContent.hasClass('visible')) {
            dropdownContent.toggleClass('visible');
          }
          target.attr('data-status', (idx, attr) => attr !== 'active' ? 'active' : target.attr('data-inactiveState'));

          if (this.hasAttribute('data-update-pref')) {
            if (isOnboarding()) {
              return;
            }

            sendMessageToWindow({
              action: 'updatePref',
              data: {
                type,
                target: `${target.parent().attr('data-target')}_${type}`,
                pref: this.getAttribute('data-update-pref'),
                value: target.attr('data-status') === 'active'
              }
            });
          }

          updateGeneralState();
        });

        $('.dropdown-btn').on('click', function (ev) {
          $('.new-dropdown-content').not($(this).next('.new-dropdown-content')).removeClass('visible');
          $(this).next('.new-dropdown-content').toggleClass('visible');
          ev.stopPropagation();
        });

        $('.dropdown-content-option').on('click', function () {
          const state = $(this).attr('value');
          const target = $(this).closest('.frame-container');
          const option = '.dropdown-content-option';
          const content = '.new-dropdown-content';
          const $this = $(this);

          target.attr('data-status', state === 'all' ? 'critical' : target.attr('data-inactiveState'));

          $this.siblings(option).each((index, elem) => {
            $(elem).removeClass('selected');
          });
          $this.addClass('selected');
          $this.parent(content).toggleClass('visible');

          updateGeneralState();
        });

        $('.pause').click(() => {
          // TODO
          localizeDocument();
        });

        $('.clickableLabel').click(function () {
          $(this).siblings('input').click();
        });

        localizeDocument();

        if (!emptyFrame) {
          resize();
        }
      }

      window.draw = draw$1;
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["handlebars"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("handlebars"));
  else
    CliqzGlobal = factory(Handlebars);
});