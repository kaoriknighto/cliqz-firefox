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
            }templates['feedback-offer'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    return "<div id=\"feedback-vote-wrapper\">\n    <span class=\"feedback-text\" data-i18n=\"offers-hub-feedback-text\"></span>\n    <p>\n        <button\n          class=\"feedback-button\"\n          data-vote=\"up\"\n        >\n        </button>\n        <button\n          class=\"feedback-button\"\n          data-vote=\"down\"\n        >\n        </button>\n    </p>\n</div>\n\n<div id=\"feedback-comment-wrapper\">\n    <span class=\"feedback-text\" data-i18n=\"offers-hub-feedback-comments\"></span>\n    <textarea id=\"feedback-textarea\" autofocus='autofocus' rows=\"3\" cols=\"8\"></textarea>\n    <button id=\"submit-feedback\" data-i18n=\"offers-hub-feedback-send\"></button>\n</div>\n";
                }, "useData": true });
            templates['feedback-voucher'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    return "<div id=\"voucher-feedback\">\n    <p data-i18n=\"offers-hub-feedback-title\"></p>\n    <ul>\n        <li>\n            <input type=\"radio\" name=\"remove_feedback\" id=\"feedback_option1\" value=\"already_used\">\n            <label for=\"feedback_option1\" data-i18n=\"offers-hub-feedback-option1\"></label>\n        </li>\n        <li>\n            <input type=\"radio\" name=\"remove_feedback\" id=\"feedback_option2\" value=\"not_good_deal\">\n            <label for=\"feedback_option2\" data-i18n=\"offers-hub-feedback-option2\"></label>\n        </li>\n        <li>\n            <input type=\"radio\" name=\"remove_feedback\" id=\"feedback_option3\" value=\"not_relevant\">\n            <label for=\"feedback_option3\" data-i18n=\"offers-hub-feedback-option3\"></label>\n        </li>\n        <li>\n            <input type=\"radio\" name=\"remove_feedback\" id=\"feedback_option4\" value=\"other\">\n            <textarea id=\"feedback_option4_textarea\" rows=\"2\" cols=\"26\" placeholder=\"" + container.escapeExpression((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "offers-hub-feedback-option4", { "name": "local", "hash": {}, "data": data })) + "\" disabled=\"disabled\"></textarea>\n        </li>\n    </ul>\n    <button id=\"close-feedback\" data-i18n=\"offers-hub-feedback-close\"></button>\n</div>\n";
                }, "useData": true });
            templates['no-voucher'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    return "<div class=\"cqz-no-vouchers-msg\">\n    <img src=\"./images/offers-cc-icon.svg\" alt=\"\" />\n    <h1 data-i18n=\"offers-hub-welcome-title\"></h1>\n    <p data-i18n=\"offers-hub-welcome-text\"></p>\n</div>\n";
                }, "useData": true });
            templates['pop-up'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    return container.escapeExpression((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "ad-label", { "name": "local", "hash": {}, "data": data }));
                }, "3": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = container.invokePartial(partials["no-voucher"], depth0, { "name": "no-voucher", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "";
                }, "5": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "    <ul id=\"cqz-vouchers-holder\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.vouchers : depth0, { "name": "each", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </ul>\n";
                }, "6": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "        <li data-offer-id=\"" + container.escapeExpression((helper = (helper = helpers.offer_id || (depth0 != null ? depth0.offer_id : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "offer_id", "hash": {}, "data": data }) : helper)) + "\"\n            class=\"voucher-wrapper " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.preferred : depth0, { "name": "if", "hash": {}, "fn": container.program(7, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + " " + ((stack1 = helpers["if"].call(alias1, data && data.first, { "name": "if", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n        >\n" + ((stack1 = container.invokePartial(partials.voucher, depth0, { "name": "voucher", "data": data, "indent": "            ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "        </li>\n";
                }, "7": function (container, depth0, helpers, partials, data) {
                    return "preferred";
                }, "9": function (container, depth0, helpers, partials, data) {
                    return "active";
                }, "11": function (container, depth0, helpers, partials, data) {
                    return " \n            <button \n                id=\"feedback-button\" \n                data-i18n=\"offers-hub-feedback-title\"\n                data-telemetry-id=\"feedback\">\n            </button>\n";
                }, "13": function (container, depth0, helpers, partials, data) {
                    return "            <button id=\"expand-button\"></button>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<header>\n    <p>\n        <span data-i18n=\"offers-hub-title\"></span>\n        <span>" + ((stack1 = helpers.unless.call(alias1, depth0 != null ? depth0.noVoucher : depth0, { "name": "unless", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "</span>\n        <span>\n            <a id=\"about-link\" \n               data-i18n=\"offers-hub-about-cliqz-offers\" \n               data-url=\"https://cliqz.com/myoffrz\"\n            >\n            </a>\n        </span>\n    </p>\n</header>\n\n<section id=\"cqz-vouchers-wrapper\">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.noVoucher : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.program(5, data, 0), "data": data })) != null ? stack1 : "") + "</section>\n\n<footer>\n    <p>\n        <span>\n            " + ((stack1 = helpers["if"].call(alias1, true, { "name": "if", "hash": {}, "fn": container.program(11, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </span>\n        <span>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.showExpandButton : depth0, { "name": "if", "hash": {}, "fn": container.program(13, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        </span>\n        <span title=\"" + container.escapeExpression((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(alias1, "offers-hub-powered-by", { "name": "local", "hash": {}, "data": data })) + "\"></span>\n    </p>\n    <div id=\"feedback-content\">\n" + ((stack1 = container.invokePartial(partials["feedback-offer"], depth0, { "name": "feedback-offer", "data": data, "indent": "    ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </div>\n</footer>\n";
                }, "usePartial": true, "useData": true });
            templates['template'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    return "class=\"tooltip\"";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = container.invokePartial(partials.tooltip, depth0, { "name": "tooltip", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "";
                }, "5": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = container.invokePartial(partials["pop-up"], depth0, { "name": "pop-up", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<div id=\"cqz-offer-cc-content\" " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.showTooltip : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.showTooltip : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.program(5, data, 0), "data": data })) != null ? stack1 : "") + "</div>\n";
                }, "usePartial": true, "useData": true });
            templates['tooltip'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div>\n    <img src=\"" + alias4((helper = (helper = helpers.icon || (depth0 != null ? depth0.icon : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "icon", "hash": {}, "data": data }) : helper)) + "\" alt=\"\" />\n    <span>" + alias4((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "headline", "hash": {}, "data": data }) : helper)) + "</span>\n</div>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<div class=\"light\" style=\"border-left-color: " + alias4((helper = (helper = helpers.backgroundColor || (depth0 != null ? depth0.backgroundColor : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "backgroundColor", "hash": {}, "data": data }) : helper)) + "\">\n    <div class=\"logo " + alias4((helper = (helper = helpers.logoClass || (depth0 != null ? depth0.logoClass : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "logoClass", "hash": {}, "data": data }) : helper)) + "\" style=\"background-image: url(" + alias4((helper = (helper = helpers.backgroundImage || (depth0 != null ? depth0.backgroundImage : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "backgroundImage", "hash": {}, "data": data }) : helper)) + ")\"></div>\n    <p>" + alias4((helper = (helper = helpers.benefit || (depth0 != null ? depth0.benefit : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "benefit", "hash": {}, "data": data }) : helper)) + " " + alias4((helper = (helper = helpers.headline || (depth0 != null ? depth0.headline : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "headline", "hash": {}, "data": data }) : helper)) + "</p>\n    <div class=\"labels\">\n        " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isExclusive : depth0, { "name": "if", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n        " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isBestOffer : depth0, { "name": "if", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n    </div>\n</div>\n";
                }, "4": function (container, depth0, helpers, partials, data) {
                    return "<p class=\"exclusive\" data-i18n=\"offers-exclusive\"></p>";
                }, "6": function (container, depth0, helpers, partials, data) {
                    return "<p class=\"best-offer\" data-i18n=\"offers-best_offer\"></p>";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.isGeneric : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.program(3, data, 0), "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['voucher'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = container.lambda,
                        alias2 = container.escapeExpression;

                    return "    <p class=\"benefit " + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.benefit_new : stack1, { "name": "if", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\">\n        <span>" + alias2(alias1((stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.benefit : stack1, depth0)) + "</span>\n        <span>" + alias2(alias1((stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.benefit_new : stack1, depth0)) + "</span>\n    </p>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    return "updated";
                }, "4": function (container, depth0, helpers, partials, data) {
                    return "<p class=\"exclusive\" data-i18n=\"offers-exclusive\"></p>";
                }, "6": function (container, depth0, helpers, partials, data) {
                    return "<p class=\"best-offer\" data-i18n=\"offers-best_offer\"></p>";
                }, "8": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "    <p class=\"picture\" style=\"background-image: url(" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.picture_url : stack1, depth0)) + ")\"></p>\n";
                }, "10": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return "    <div class=\"promocode-wrapper\">\n        <input \n            class=\"code ellipsis\"\n            type=\"text\"\n            name=\"code\"\n            value=\"" + container.escapeExpression(container.lambda((stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.code : stack1, depth0)) + "\"\n            readonly=\"readonly\"\n            data-telemetry-id=\"copy_code\"\n        >\n        <button\n            class=\"copy-code\" \n            data-i18n=\"offers-hub-copy-btn\"\n            data-telemetry-id=\"copy_code\">        \n        </button>\n    </div>\n";
                }, "12": function (container, depth0, helpers, partials, data) {
                    return "red";
                }, "14": function (container, depth0, helpers, partials, data) {
                    return "        <span class=\"condition\">" + container.escapeExpression((helpers.local || depth0 && depth0.local || helpers.helperMissing).call(depth0 != null ? depth0 : container.nullContext || {}, "offers-conditions", { "name": "local", "hash": {}, "data": data })) + "\n            <button></button>\n        </span>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = container.escapeExpression,
                        alias4 = "function",
                        alias5 = container.lambda;

                    return "<div class=\"overview\">\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.benefit : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    <p class=\"headline ellipsis\">\n        " + alias3((helpers.either_or || depth0 && depth0.either_or || alias2).call(alias1, (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.headline : stack1, (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.title : stack1, { "name": "either_or", "hash": {}, "data": data })) + "\n    </p>\n</div>\n<div class=\"details\">\n    <div class=\"left-labels\">\n        " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isExclusive : depth0, { "name": "if", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n        " + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isBestOffer : depth0, { "name": "if", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n    </div>\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.picture_url : stack1, { "name": "if", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.benefit : stack1, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    <p class=\"headline\" style=\"color: " + alias3((helper = (helper = helpers.backgroundColor || (depth0 != null ? depth0.backgroundColor : depth0)) != null ? helper : alias2, typeof helper === alias4 ? helper.call(alias1, { "name": "backgroundColor", "hash": {}, "data": data }) : helper)) + "\">\n        " + alias3((helpers.either_or || depth0 && depth0.either_or || alias2).call(alias1, (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.headline : stack1, (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.title : stack1, { "name": "either_or", "hash": {}, "data": data })) + "\n    </p>\n    <p class=\"description\">" + alias3(alias5((stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.desc : stack1, depth0)) + "</p>\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.code : stack1, { "name": "if", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    <div class=\"validity-wrapper\">\n        <span class=\"validity " + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.validity : depth0) != null ? stack1.isExpiredSoon : stack1, { "name": "if", "hash": {}, "fn": container.program(12, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\">" + alias3(alias5((stack1 = depth0 != null ? depth0.validity : depth0) != null ? stack1.text : stack1, depth0)) + "</span>\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.conditions : stack1, { "name": "if", "hash": {}, "fn": container.program(14, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "        <div class=\"condition-wrapper\">\n            <div>\n                " + alias3(alias5((stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.conditions : stack1, depth0)) + "\n            </div>\n        </div>\n    </div>\n    <button \n        class=\"cta-btn\" \n        data-id=\"" + alias3((helper = (helper = helpers.offer_id || (depth0 != null ? depth0.offer_id : depth0)) != null ? helper : alias2, typeof helper === alias4 ? helper.call(alias1, { "name": "offer_id", "hash": {}, "data": data }) : helper)) + "\" \n        data-url=\"" + alias3(alias5((stack1 = (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.call_to_action : stack1) != null ? stack1.url : stack1, depth0)) + "\"\n        data-telemetry-id=\"use\"\n    >\n        " + alias3(alias5((stack1 = (stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.call_to_action : stack1) != null ? stack1.text : stack1, depth0)) + "\n    </button>\n</div>\n<div class=\"logo-wrapper\">\n    <div class=\"logo " + alias3((helper = (helper = helpers.logoClass || (depth0 != null ? depth0.logoClass : depth0)) != null ? helper : alias2, typeof helper === alias4 ? helper.call(alias1, { "name": "logoClass", "hash": {}, "data": data }) : helper)) + "\" style=\"background-image: url(" + alias3(alias5((stack1 = depth0 != null ? depth0.template_data : depth0) != null ? stack1.logo_url : stack1, depth0)) + ")\"></div>\n    <button class=\"setting\"\n            data-telemetry-id=\"menu\">\n    </button>\n</div>\n<ul class=\"settings\">\n    <li \n        data-menu-type=\"delete\" \n        data-i18n=\"offers-hub-remove\"\n        data-telemetry-id=\"remove\">\n    </li>\n</ul>\n\n";
                }, "useData": true });

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

      var helpers = {
        json(context) {
          return JSON.stringify(context);
        },

        local(key) {
          return chrome.i18n.getMessage(key);
        },

        if_eq(a, b, opts) {
          if (a === b) {
            return opts.fn(this);
          }

          return opts.inverse(this);
        },

        either_or(a, b) {
          if (a) {
            return a;
          }

          return b;
        }
      };

      /* global window, document, $, Handlebars */

      Handlebars.partials = templates;
      let lastSeenElements = [];

      function sendMessageToWindow(message) {
        postMessage(JSON.stringify({
          target: 'cliqz-offers-cc',
          origin: 'iframe',
          message
        }), '*');
      }

      function resize() {
        const $controlCenter = $('#cqz-offer-cc-content');
        const theWidth = $controlCenter.outerWidth(); // Includes the scroll bar
        const theHeight = $controlCenter.outerHeight();
        sendMessageToWindow({
          action: 'resize',
          data: {
            width: theWidth,
            height: theHeight
          }
        });
      }

      function localizeDocument() {
        Array.prototype.forEach.call(document.querySelectorAll('[data-i18n]'), el => {
          const elArgs = el.dataset.i18n.split(',');
          const key = elArgs.shift();
          /* eslint-disable */
          el.innerHTML = chrome.i18n.getMessage(key, elArgs);
          /* eslint-enable */
        });
      }

      function getOfferId(element) {
        return element.closest('.voucher-wrapper').data('offerId');
      }

      function copySelectionText() {
        let copysuccess = false; // var to check whether execCommand successfully executed
        try {
          copysuccess = document.execCommand('copy'); // run command to copy selected text to clipboard
        } catch (err) {
          copysuccess = false;
        }
        return copysuccess;
      }

      let scrollTimer;
      const shownElements = {};

      function scrollFinished() {
        const parent = $('#cqz-vouchers-holder');
        // To not have exception in console where there is no offer left
        if (!parent.length) {
          return;
        }

        const parentTop = parent.offset().top;
        const parentBottom = parent.offset().top + parent.height();

        const currentSeenElements = [];
        $('#cqz-vouchers-holder > li:visible').each((i, el) => {
          const elmTop = $(el).offset().top;
          const elmBotttom = elmTop + $(el).height();
          const offerId = $(el).data('offer-id');

          if (elmBotttom <= parentBottom && elmTop >= parentTop) {
            currentSeenElements.push(offerId);
          }
        });

        const difference = currentSeenElements.filter(x => lastSeenElements.indexOf(x) === -1);

        for (let i = 0; i < difference.length; i += 1) {
          const offerId = difference[i];

          if (shownElements[offerId]) {
            shownElements[offerId] += 1;
          } else {
            shownElements[offerId] = 1;
          }
        }
        lastSeenElements = currentSeenElements;

        sendMessageToWindow({
          action: 'seenOffers', // TODO: Do we need seenOffers ?
          data: shownElements
        });
      }

      function bodyScroll() {
        // TODO: Still need this ?
        if (scrollTimer) {
          clearTimeout(scrollTimer);
        }

        scrollTimer = window.setTimeout(scrollFinished, 350);
      }

      function draw(data) {
        $('#cliqz-offers-cc').html(templates.template(data));

        if ($('#cqz-vouchers-holder').length) {
          bodyScroll();
          $('#cqz-vouchers-holder').scroll(() => {
            bodyScroll();
          });

          // TODO: apply this fix only in case the first rendering fails
          // localizeDocument();
          // setTimeout(() => {
          //   resize();
          // }, 200); // TODO: fix this!.
          // return;
        }

        localizeDocument();
        resize();
      }

      // ====== ON LOAD ======//
      $(() => {
        Object.keys(helpers).forEach(helperName => {
          Handlebars.registerHelper(helperName, helpers[helperName]);
        });

        sendMessageToWindow({
          action: 'getEmptyFrameAndData',
          data: {}
        });
      });

      $(document).on('click', 'ul#cqz-vouchers-holder > li:not(.active)', function itemClick() {
        $('ul#cqz-vouchers-holder > li.active').removeClass('active');
        $('ul#cqz-vouchers-holder > li.deleted').remove();
        $(this).addClass('active');

        sendMessageToWindow({
          action: 'sendOfferActionSignal',
          data: {
            signal_type: 'offer-action-signal',
            element_id: 'offer_expanded',
            offer_id: $(this).data('offerId')
          }
        });

        setTimeout(() => {
          resize();
        }, 200); // TODO: fix this!.
      });

      $(document).on('click', '[data-telemetry-id]', function itemClick() {
        const target = $(this).data('telemetryId');
        sendMessageToWindow({
          action: 'sendTelemetry',
          data: {
            target
          }
        });
      });

      $(document).on('click', '#about-link', function itemClick() {
        sendMessageToWindow({
          action: 'sendActionSignal',
          data: {
            actionId: 'more_about_cliqz'
          }
        });

        sendMessageToWindow({
          action: 'sendTelemetry',
          data: {
            target: 'learn_more'
          }
        });

        sendMessageToWindow({
          action: 'openURL',
          data: {
            url: $(this).data('url'),
            closePopup: true,
            isCallToAction: false
          }
        });
      });

      $(document).on('click', '#feedback-button', function itemClick() {
        $('#feedback-content').toggleClass('active');
        $(this).toggleClass('expand');

        resize();
      });

      let vote;
      $(document).on('click', '.feedback-button', function itemClick() {
        vote = $(this).data('vote');
        sendMessageToWindow({
          action: 'sendUserFeedback',
          data: {
            target: 'myoffrz',
            vote,
            comments: ''
          }
        });
        sendMessageToWindow({
          action: 'sendTelemetry',
          data: {
            target: 'myoffrz',
            vote,
            comments: ''
          }
        });
        $('#feedback-vote-wrapper').hide();
        $('#feedback-comment-wrapper').show();
        resize();
      });

      $(document).on('click', '#submit-feedback', () => {
        const comments = $('#feedback-textarea').val();
        if (comments.trim().length) {
          sendMessageToWindow({
            action: 'sendUserFeedback',
            data: {
              target: 'myoffrz',
              vote,
              comments
            }
          });

          sendMessageToWindow({
            action: 'sendTelemetry',
            data: {
              target: 'myoffrz',
              vote,
              comments
            }
          });
        }

        $('#feedback-comment-wrapper').html(chrome.i18n.getMessage('offers-hub-feedback-thank-you'));

        resize();
      });

      $(document).on('click', '#expand-button', function itemClick() {
        $('.voucher-wrapper.preferred').removeClass('preferred');
        $(this).css('visibility', 'hidden');
        sendMessageToWindow({
          action: 'sendActionSignal',
          data: {
            actionId: 'show_more_offers'
          }
        });
        bodyScroll();

        resize();
      });

      $(document).on('click', '.promocode-wrapper', function itemClick() {
        const offerId = getOfferId($(this));
        $(this).find('.code').focus().select();
        const success = copySelectionText();

        if (success) {
          $(this).find('.copy-code').text(chrome.i18n.getMessage('offers-hub-code-copy'));
          // $(this).find('.code').blur(); // Should we blur it ?
          sendMessageToWindow({
            action: 'sendOfferActionSignal',
            data: {
              signal_type: 'offer-action-signal',
              element_id: 'code_copied',
              offer_id: offerId
            }
          });
        }
      });

      $(document).on('click', '.condition', function itemClick(e) {
        e.stopPropagation();
        $(this).next().toggleClass('active');
      });

      $(document).on('click', '.condition-wrapper', e => {
        e.stopPropagation();
      });

      $(document).on('click', '.setting', function itemClick(e) {
        e.stopPropagation();
        $(this).closest('.logo-wrapper').toggleClass('menu-opened');
      });

      $(document).on('click', '.cta-btn', function itemClick() {
        sendMessageToWindow({
          action: 'openURL',
          data: {
            url: $(this).data('url'),
            closePopup: true,
            isCallToAction: true,
            offerId: getOfferId($(this))
          }
        });
      });

      $(document).on('click', '#voucher-feedback input:radio', function itemClick() {
        if ($(this).attr('id') === 'feedback_option4') {
          $('#feedback_option4_textarea').removeAttr('disabled');
        } else {
          $('#feedback_option4_textarea').attr('disabled', 'disabled');
        }

        $('#close-feedback').text(chrome.i18n.getMessage('offers-hub-feedback-send-and-close'));
      });

      $(document).on('click', '#close-feedback', function itemClick() {
        $('#expand-button').css('visibility', 'hidden');
        const feedbackValue = $('input[name="remove_feedback"]:checked').val() || 'none';
        const comments = feedbackValue === 'other' ? $('#feedback_option4_textarea').val() : '';
        sendMessageToWindow({
          action: 'sendUserFeedback',
          data: {
            target: 'remove_offer',
            vote: feedbackValue,
            comments,
            offer_id: getOfferId($(this))
          }
        });

        sendMessageToWindow({
          action: 'sendTelemetry',
          data: {
            target: 'remove_offer',
            vote: feedbackValue,
            comments
          }
        });

        const currentVoucher = $(this).closest('.voucher-wrapper');
        currentVoucher.remove();
        // Redraw the popup if there is no voucher left
        if (!$('ul#cqz-vouchers-holder > li').length) {
          sendMessageToWindow({
            action: 'getEmptyFrameAndData',
            data: {}
          });
        }
        bodyScroll();

        setTimeout(() => {
          resize();
        }, 200); // TODO: fix this!.
      });

      $(document).on('click', 'ul.settings > li', function itemClick() {
        if ($(this).data('menuType') === 'delete') {
          $(this).closest('.settings').prev().children('.setting').hide();
          const currentVoucher = $(this).closest('.voucher-wrapper');

          currentVoucher.addClass('deleted');
          currentVoucher.children('.details').html(templates['feedback-voucher']({})); // empty data
          localizeDocument();
          resize();

          sendMessageToWindow({
            action: 'sendOfferActionSignal',
            data: {
              signal_type: 'remove-offer',
              element_id: 'offer_removed',
              offer_id: getOfferId($(this))
            }
          });
        }
      });

      // Hide the tooltip if it is being clicked
      $(document).on('click', '.tooltip', () => {
        sendMessageToWindow({
          action: 'getEmptyFrameAndData',
          data: {
            hideTooltip: true
          }
        });
      });

      $(document).on('click', '#cliqz-offers-cc', () => {
        $('.logo-wrapper.menu-opened').removeClass('menu-opened');
        $('.condition-wrapper.active').removeClass('active');
      });

      function messageHandler(message) {
        switch (message.action) {
          case 'pushData':
            draw(message.data);
            break;
          default:
            {
              // nothing to do
            }
        }
      }

      window.addEventListener('message', ev => {
        const data = JSON.parse(ev.data);
        if (data.target === 'cliqz-offers-cc' && data.origin === 'window') {
          messageHandler(data.message);
        }
      });

      // TODO: Create a function named hideTooltipAndMenu() and put the code.
      // Triggering: when clicking on body or any element or pressing ESC button
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