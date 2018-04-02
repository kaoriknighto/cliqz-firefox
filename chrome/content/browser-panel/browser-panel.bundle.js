!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], ["c","d"], false, function($__System) {
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
      }templates['default_template'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
          var helper,
              alias1 = depth0 != null ? depth0 : container.nullContext || {},
              alias2 = helpers.helperMissing,
              alias3 = container.escapeExpression;

          return "  <div class=\"code-container\">\n    <div\n      class=\"code-box\"\n      data-cqz-of-btn-id=\"code_copied\"\n    >\n      <div class=\"bevel tl tr\">\n        <div class=\"content\">\n          <span class=\"code\" data-cqz-of-btn-id=\"code_copied\">" + alias3((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : alias2, typeof helper === "function" ? helper.call(alias1, { "name": "code", "hash": {}, "data": data }) : helper)) + "</span>\n          <span class=\"divider\">&middot;</span>\n          <span class=\"code-copy\" data-cqz-of-btn-id=\"code_copied\" data-i18n=\"offers-copy-code\">" + alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, depth0 != null ? depth0["offers-copy-code"] : depth0, { "name": "local", "hash": {}, "data": data })) + "</span>\n          <span class=\"code-copied\" data-i18n=\"offers-code-copied\">" + alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, depth0 != null ? depth0["offers-code-copied"] : depth0, { "name": "local", "hash": {}, "data": data })) + "</span>\n        </div>\n      </div>\n    </div>\n  </div>\n";
        }, "3": function (container, depth0, helpers, partials, data) {
          var stack1;

          return "  <div class=\"special-flags\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.labels : depth0, { "name": "each", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "  </div>\n";
        }, "4": function (container, depth0, helpers, partials, data) {
          var alias1 = container.lambda,
              alias2 = container.escapeExpression;

          return "        <span class=\"vertical-txt " + alias2(alias1(depth0, depth0)) + "\" data-i18n=\"offers-" + alias2(alias1(depth0, depth0)) + "\"></span>\n";
        }, "6": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = container.escapeExpression;

          return "  <div class=\"flex-item picture\">\n    <img\n      src=\"" + alias1((helper = (helper = helpers.picture_url || (depth0 != null ? depth0.picture_url : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "picture_url", "hash": {}, "data": data }) : helper)) + "\"\n      data-cqz-of-btn-id=\"offer_picture\"\n      data-open-url=\"" + alias1(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n    />\n  </div>\n";
        }, "8": function (container, depth0, helpers, partials, data) {
          var stack1,
              alias1 = depth0 != null ? depth0 : container.nullContext || {};

          return "\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.benefit : depth0, { "name": "if", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.headline : depth0, { "name": "if", "hash": {}, "fn": container.program(12, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "");
        }, "9": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = depth0 != null ? depth0 : container.nullContext || {},
              alias2 = helpers.helperMissing,
              alias3 = container.escapeExpression;

          return "      <div\n        class=\"benefit flex-item " + ((stack1 = helpers["if"].call(alias1, (helpers.not || depth0 && depth0.not || alias2).call(alias1, depth0 != null ? depth0.headline : depth0, { "name": "not", "hash": {}, "data": data }), { "name": "if", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n        data-cqz-of-btn-id=\"offer_benefit\"\n        data-open-url=\"" + alias3(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n      >\n        " + alias3((helper = (helper = helpers.benefit || (depth0 != null ? depth0.benefit : depth0)) != null ? helper : alias2, typeof helper === "function" ? helper.call(alias1, { "name": "benefit", "hash": {}, "data": data }) : helper)) + "\n      </div>\n";
        }, "10": function (container, depth0, helpers, partials, data) {
          return " only-benefit";
        }, "12": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = container.escapeExpression,
              alias2 = depth0 != null ? depth0 : container.nullContext || {},
              alias3 = helpers.helperMissing;

          return "    <div class=\"headline-container flex-item\">\n      <div\n        class=\"headline common flex-item\"\n        data-cqz-of-btn-id=\"offer_headline\"\n        data-open-url=\"" + alias1(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n        style=\"color: " + alias1((helper = (helper = helpers.titleColor || (depth0 != null ? depth0.titleColor : depth0)) != null ? helper : alias3, typeof helper === "function" ? helper.call(alias2, { "name": "titleColor", "hash": {}, "data": data }) : helper)) + "\"\n      >" + alias1((helpers.truncate || depth0 && depth0.truncate || alias3).call(alias2, depth0 != null ? depth0.headline : depth0, 68, { "name": "truncate", "hash": {}, "data": data })) + "</div>\n    </div>\n";
        }, "14": function (container, depth0, helpers, partials, data) {
          var stack1;

          return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.title : depth0, { "name": "if", "hash": {}, "fn": container.program(15, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
        }, "15": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = container.escapeExpression,
              alias2 = depth0 != null ? depth0 : container.nullContext || {},
              alias3 = helpers.helperMissing,
              alias4 = "function";

          return "      <div\n        class=\"title common flex-item\"\n        data-cqz-of-btn-id=\"offer_title\"\n        data-open-url=\"" + alias1(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n        style=\"color: " + alias1((helper = (helper = helpers.titleColor || (depth0 != null ? depth0.titleColor : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, { "name": "titleColor", "hash": {}, "data": data }) : helper)) + "\"\n      >" + alias1((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, { "name": "title", "hash": {}, "data": data }) : helper)) + "</div>\n";
        }, "17": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = container.escapeExpression;

          return "    <div class=\"flex-item description\">\n      <div\n        class=\"desc-content\"\n        data-cqz-of-btn-id=\"offer_description\"\n        data-open-url=\"" + alias1(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n      >\n        " + alias1((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "desc", "hash": {}, "data": data }) : helper)) + "\n      </div>\n    </div>\n";
        }, "19": function (container, depth0, helpers, partials, data) {
          var helper;

          return "      <span class=\"conditions tooltip flex-item\" data-i18n=\"offers-conditions\">\n\n      </span>\n      <img class=\"info-icon tooltip\"\n           src=\"./images/ticket-tmpl/info-icon-hover.svg\"\n           title=\"" + container.escapeExpression((helper = (helper = helpers.conditions || (depth0 != null ? depth0.conditions : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "conditions", "hash": {}, "data": data }) : helper)) + "\" />\n\n";
        }, "21": function (container, depth0, helpers, partials, data) {
          var stack1,
              alias1 = container.lambda,
              alias2 = container.escapeExpression;

          return "      <a href=\"#\"\n         data-open-url=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n         class=\"btn\"\n         data-cqz-of-btn-id=\"offer_ca_action\"\n      >\n        " + alias2(alias1((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.text : stack1, depth0)) + "\n      </a>\n";
        }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = depth0 != null ? depth0 : container.nullContext || {},
              alias2 = helpers.helperMissing,
              alias3 = "function",
              alias4 = container.escapeExpression;

          return "<div class=\"close\" data-cqz-of-btn-id=\"offer_closed\">\n  <img data-cqz-of-btn-id=\"offer_closed\" src=\"./images/ticket-tmpl/close-offer-hover.svg\" />\n</div>\n\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.code : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n<div class=\"promo-container " + alias4((helper = (helper = helpers.logo_class || (depth0 != null ? depth0.logo_class : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "logo_class", "hash": {}, "data": data }) : helper)) + "\">\n\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.labels : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n  <div class=\"flex-item logo\">\n    <img\n      src=\"" + alias4((helper = (helper = helpers.logo_url || (depth0 != null ? depth0.logo_url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "logo_url", "hash": {}, "data": data }) : helper)) + "\"\n      data-cqz-of-btn-id=\"offer_logo\"\n      data-open-url=\"" + alias4(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n     />\n  </div>\n\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.picture_url : depth0, { "name": "if", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, (helpers.or || depth0 && depth0.or || alias2).call(alias1, depth0 != null ? depth0.benefit : depth0, depth0 != null ? depth0.headline : depth0, { "name": "or", "hash": {}, "data": data }), { "name": "if", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.program(14, data, 0), "data": data })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.desc : depth0, { "name": "if", "hash": {}, "fn": container.program(17, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n  <div class=\"flex-item call-to-action\">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.conditions : depth0, { "name": "if", "hash": {}, "fn": container.program(19, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.call_to_action : depth0, { "name": "if", "hash": {}, "fn": container.program(21, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "  </div>\n\n  <div class=\"anzeige\">\n    <span class=\"vertical-txt\" data-i18n=\"offers-ad\"></span>\n  </div>\n</div>\n";
        }, "useData": true });
      templates['main'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
          var helper,
              alias1 = depth0 != null ? depth0 : container.nullContext || {},
              alias2 = helpers.helperMissing,
              alias3 = "function",
              alias4 = container.escapeExpression;

          return "    <button id=\"cqz-btn-action-sample\" class=\"cqz-btn\" data-cqz-of-btn-id=" + alias4((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "id", "hash": {}, "data": data }) : helper)) + ">" + alias4((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "name", "hash": {}, "data": data }) : helper)) + "</button>\n";
        }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = depth0 != null ? depth0 : container.nullContext || {},
              alias2 = helpers.helperMissing,
              alias3 = "function",
              alias4 = container.escapeExpression;

          return "\n<!--\n<div class='extra'>BLA BLA BLA car</div>\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.buttons : depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "-->\n\n<div id=\"cqz-offer-id\" data-cqz-of-id=" + alias4((helper = (helper = helpers.offer_id || (depth0 != null ? depth0.offer_id : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "offer_id", "hash": {}, "data": data }) : helper)) + "></div>\n<div class=\"cqz-row cqz-offer\">\n    <div class=\"cqz-col-12\">\n        <div class=\"cqz-logo-holder\">\n            <img src= " + alias4((helper = (helper = helpers.logo_url || (depth0 != null ? depth0.logo_url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "logo_url", "hash": {}, "data": data }) : helper)) + " alt=\"\" />\n        </div>\n        <div class=\"cqz-buttons\">\n            <a href=\"#\" class=\"cqz-btn\">Call to Action</a>\n        </div>\n        <div class=\"cqz-content-holder\">\n            <h1 class=\"cqz-title\">" + alias4((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "title", "hash": {}, "data": data }) : helper)) + "</h1>\n            <div class=\"cqz-offer-code-holder\">\n                <span class=\"cqz-offer-code-info\">Click to copy the code</span>\n                <span class=\"cqz-offer-code\">" + alias4((helper = (helper = helpers.conditions || (depth0 != null ? depth0.conditions : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "conditions", "hash": {}, "data": data }) : helper)) + "</span>\n            </div>\n            <div class=\"cqz-descr\">\n                " + alias4((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "desc", "hash": {}, "data": data }) : helper)) + "\n            </div>\n            <p><a href=\"#\" class=\"cliqz-link\">Learn more about Cliqz Offers</a></p>\n        </div>\n    </div>\n</div>\n";
        }, "useData": true });
      templates['ticket_template'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
          var helper,
              alias1 = depth0 != null ? depth0 : container.nullContext || {},
              alias2 = helpers.helperMissing,
              alias3 = container.escapeExpression;

          return "  <div class=\"code-container\">\n    <div\n      class=\"code-box\"\n      data-cqz-of-btn-id=\"code_copied\"\n    >\n      <div class=\"bevel tl tr\">\n        <div class=\"content\">\n          <span class=\"code\" data-cqz-of-btn-id=\"code_copied\">" + alias3((helper = (helper = helpers.code || (depth0 != null ? depth0.code : depth0)) != null ? helper : alias2, typeof helper === "function" ? helper.call(alias1, { "name": "code", "hash": {}, "data": data }) : helper)) + "</span>\n          <span class=\"divider\">&middot;</span>\n          <span class=\"code-copy\" data-cqz-of-btn-id=\"code_copied\" data-i18n=\"offers-copy-code\">" + alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, depth0 != null ? depth0["offers-copy-code"] : depth0, { "name": "local", "hash": {}, "data": data })) + "</span>\n          <span class=\"code-copied\" data-i18n=\"offers-code-copied\">" + alias3((helpers.local || depth0 && depth0.local || alias2).call(alias1, depth0 != null ? depth0["offers-code-copied"] : depth0, { "name": "local", "hash": {}, "data": data })) + "</span>\n        </div>\n      </div>\n    </div>\n  </div>\n";
        }, "3": function (container, depth0, helpers, partials, data) {
          var stack1;

          return "  <div class=\"special-flags\">\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.labels : depth0, { "name": "each", "hash": {}, "fn": container.program(4, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "  </div>\n";
        }, "4": function (container, depth0, helpers, partials, data) {
          var alias1 = container.lambda,
              alias2 = container.escapeExpression;

          return "        <span class=\"vertical-txt " + alias2(alias1(depth0, depth0)) + "\" data-i18n=\"offers-" + alias2(alias1(depth0, depth0)) + "\"></span>\n";
        }, "6": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = container.escapeExpression;

          return "  <div class=\"flex-item picture\">\n    <img\n      src=\"" + alias1((helper = (helper = helpers.picture_url || (depth0 != null ? depth0.picture_url : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "picture_url", "hash": {}, "data": data }) : helper)) + "\"\n      data-cqz-of-btn-id=\"offer_picture\"\n      data-open-url=\"" + alias1(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n    />\n  </div>\n";
        }, "8": function (container, depth0, helpers, partials, data) {
          var stack1,
              alias1 = depth0 != null ? depth0 : container.nullContext || {};

          return "\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.benefit : depth0, { "name": "if", "hash": {}, "fn": container.program(9, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.headline : depth0, { "name": "if", "hash": {}, "fn": container.program(12, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "");
        }, "9": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = depth0 != null ? depth0 : container.nullContext || {},
              alias2 = helpers.helperMissing,
              alias3 = container.escapeExpression;

          return "      <div\n        class=\"benefit flex-item " + ((stack1 = helpers["if"].call(alias1, (helpers.not || depth0 && depth0.not || alias2).call(alias1, depth0 != null ? depth0.headline : depth0, { "name": "not", "hash": {}, "data": data }), { "name": "if", "hash": {}, "fn": container.program(10, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\"\n        data-cqz-of-btn-id=\"offer_benefit\"\n        data-open-url=\"" + alias3(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n      >\n        " + alias3((helper = (helper = helpers.benefit || (depth0 != null ? depth0.benefit : depth0)) != null ? helper : alias2, typeof helper === "function" ? helper.call(alias1, { "name": "benefit", "hash": {}, "data": data }) : helper)) + "\n      </div>\n";
        }, "10": function (container, depth0, helpers, partials, data) {
          return " only-benefit";
        }, "12": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = container.escapeExpression,
              alias2 = depth0 != null ? depth0 : container.nullContext || {},
              alias3 = helpers.helperMissing;

          return "    <div class=\"headline-container flex-item\">\n      <div\n        class=\"headline common flex-item\"\n        data-cqz-of-btn-id=\"offer_headline\"\n        data-open-url=\"" + alias1(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n        style=\"color: " + alias1((helper = (helper = helpers.titleColor || (depth0 != null ? depth0.titleColor : depth0)) != null ? helper : alias3, typeof helper === "function" ? helper.call(alias2, { "name": "titleColor", "hash": {}, "data": data }) : helper)) + "\"\n      >" + alias1((helpers.truncate || depth0 && depth0.truncate || alias3).call(alias2, depth0 != null ? depth0.headline : depth0, 68, { "name": "truncate", "hash": {}, "data": data })) + "</div>\n    </div>\n";
        }, "14": function (container, depth0, helpers, partials, data) {
          var stack1;

          return (stack1 = helpers["if"].call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.title : depth0, { "name": "if", "hash": {}, "fn": container.program(15, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
        }, "15": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = container.escapeExpression,
              alias2 = depth0 != null ? depth0 : container.nullContext || {},
              alias3 = helpers.helperMissing,
              alias4 = "function";

          return "      <div\n        class=\"title common flex-item\"\n        data-cqz-of-btn-id=\"offer_title\"\n        data-open-url=\"" + alias1(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n        style=\"color: " + alias1((helper = (helper = helpers.titleColor || (depth0 != null ? depth0.titleColor : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, { "name": "titleColor", "hash": {}, "data": data }) : helper)) + "\"\n      >" + alias1((helper = (helper = helpers.title || (depth0 != null ? depth0.title : depth0)) != null ? helper : alias3, typeof helper === alias4 ? helper.call(alias2, { "name": "title", "hash": {}, "data": data }) : helper)) + "</div>\n";
        }, "17": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = container.escapeExpression;

          return "    <div class=\"flex-item description\">\n      <div\n        class=\"desc-content\"\n        data-cqz-of-btn-id=\"offer_description\"\n        data-open-url=\"" + alias1(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n      >\n        " + alias1((helper = (helper = helpers.desc || (depth0 != null ? depth0.desc : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "desc", "hash": {}, "data": data }) : helper)) + "\n      </div>\n    </div>\n";
        }, "19": function (container, depth0, helpers, partials, data) {
          var helper;

          return "      <span class=\"conditions tooltip flex-item\" data-i18n=\"offers-conditions\">\n\n      </span>\n      <img class=\"info-icon tooltip\"\n           src=\"./images/ticket-tmpl/info-icon-hover.svg\"\n           title=\"" + container.escapeExpression((helper = (helper = helpers.conditions || (depth0 != null ? depth0.conditions : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "conditions", "hash": {}, "data": data }) : helper)) + "\" />\n\n";
        }, "21": function (container, depth0, helpers, partials, data) {
          var stack1,
              alias1 = container.lambda,
              alias2 = container.escapeExpression;

          return "      <a href=\"#\"\n         data-open-url=\"" + alias2(alias1((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n         class=\"btn\"\n         data-cqz-of-btn-id=\"offer_ca_action\"\n      >\n        " + alias2(alias1((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.text : stack1, depth0)) + "\n      </a>\n";
        }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
          var stack1,
              helper,
              alias1 = depth0 != null ? depth0 : container.nullContext || {},
              alias2 = helpers.helperMissing,
              alias3 = "function",
              alias4 = container.escapeExpression;

          return "<div class=\"close\" data-cqz-of-btn-id=\"offer_closed\">\n  <img data-cqz-of-btn-id=\"offer_closed\" src=\"./images/ticket-tmpl/close-offer-hover.svg\" />\n</div>\n\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.code : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n<div class=\"promo-container " + alias4((helper = (helper = helpers.logo_class || (depth0 != null ? depth0.logo_class : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "logo_class", "hash": {}, "data": data }) : helper)) + "\">\n\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.labels : depth0, { "name": "if", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n  <div class=\"flex-item logo\">\n    <img\n      src=\"" + alias4((helper = (helper = helpers.logo_url || (depth0 != null ? depth0.logo_url : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "logo_url", "hash": {}, "data": data }) : helper)) + "\"\n      data-cqz-of-btn-id=\"offer_logo\"\n      data-open-url=\"" + alias4(container.lambda((stack1 = depth0 != null ? depth0.call_to_action : depth0) != null ? stack1.url : stack1, depth0)) + "\"\n     />\n  </div>\n\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.picture_url : depth0, { "name": "if", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, (helpers.or || depth0 && depth0.or || alias2).call(alias1, depth0 != null ? depth0.benefit : depth0, depth0 != null ? depth0.headline : depth0, { "name": "or", "hash": {}, "data": data }), { "name": "if", "hash": {}, "fn": container.program(8, data, 0), "inverse": container.program(14, data, 0), "data": data })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.desc : depth0, { "name": "if", "hash": {}, "fn": container.program(17, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n  <div class=\"flex-item call-to-action\">\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.conditions : depth0, { "name": "if", "hash": {}, "fn": container.program(19, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.call_to_action : depth0, { "name": "if", "hash": {}, "fn": container.program(21, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "  </div>\n\n  <div class=\"anzeige\">\n    <span class=\"vertical-txt\" data-i18n=\"offers-ad\"></span>\n  </div>\n</div>\n";
        }, "useData": true });

      _export('default', templates);
    }
  };
});

$__System.register('a', ['d', 'c', 'b'], function (_export, _context) {
  "use strict";

  var $, Handlebars, templates, helpers;


  /* global window, draw */

  // iframe to browser window
  function sendMessageToWindow(message) {
    window.postMessage(JSON.stringify({
      target: 'cqz-browser-panel-re',
      origin: 'iframe',
      message
    }), '*');
  }

  // browser window to iframe
  function messageHandler(message) {
    switch (message.action) {
      case 'render_template':
        {
          draw(message.data);
          break;
        }
      default:
        break;
    }
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

  function copySelectionText() {
    let copysuccess; // var to check whether execCommand successfully executed
    try {
      copysuccess = document.execCommand('copy'); // run command to copy selected text to clipboard
    } catch (e) {
      copysuccess = false;
    }
    return copysuccess;
  }

  function selectElementText(e) {
    const range = document.createRange();
    range.selectNodeContents(e);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  function copy() {
    const codeElem = $('.code')[0];
    selectElementText(codeElem);
    const copysuccess = copySelectionText();
    return copysuccess;
  }

  // retrieves the current offer id from the document
  function cqzOfferGetCurrentOfferID() {
    const offerIDElem = document.getElementById('cqz-browser-panel-re');
    if (!offerIDElem || !offerIDElem.hasAttribute('data-cliqzofferid') || offerIDElem.getAttribute('data-cliqzofferid') === '') {
      return 'unknown';
    }
    return offerIDElem.getAttribute('data-cliqzofferid');
  }

  // receive buttons callback
  function cqzOfferBtnClicked(ev) {
    // filter if it is button or not
    if (!ev.target || !ev.target.hasAttribute('data-cqz-of-btn-id')) {
      // skip this
      return;
    }

    if (ev.target.getAttribute('data-cqz-of-btn-id') === 'code_copied') {
      const success = copy(ev.target);

      if (success) {
        document.querySelector('.code-box').className += ' copied';
      }
    }

    // we will get the data-action field here and will send this to the core
    const data = ev.target.getAttribute('data-cqz-of-btn-id');
    const offerID = cqzOfferGetCurrentOfferID();
    sendMessageToWindow({
      action: 'button_pressed',
      handler: 'offersIFrameHandler',
      data: {
        signal_type: 'button_pressed',
        element_id: data,
        offer_id: offerID
      }
    });
  }

  function draw$1(data) {
    // get the template name to be used and the data of them
    let templateName = data.template_name;
    const templateData = data.template_data;
    if (!templateName || !templateData) {
      return;
    }
    // TODO offers should send labels inside template_data
    const labels = data.labels || {};
    templateData.labels = labels;
    if (Object.keys(templates).indexOf(templateName) === -1) {
      templateName = 'default_template';
    }
    const panel = document.getElementById('cqz-browser-panel-re');
    const html = templates[templateName](templateData);
    panel.innerHTML = html;
    $('img').on('error', function onError() {
      $(this).hide();
    });
    $('.tooltip').tooltipster({
      theme: ['tooltipster-shadow', 'tooltipster-shadow-customized'],
      interactive: true,
      position: ['left']
    });

    localizeDocument();
  }

  return {
    setters: [function (_d) {
      $ = _d.default;
    }, function (_c) {
      Handlebars = _c.default;
    }, function (_b) {
      templates = _b.default;
    }],
    execute: function () {
      window.addEventListener('message', ev => {
        const data = JSON.parse(ev.data);
        // console.log(`data: ${JSON.stringify(ev)}`);
        if (data.target === 'cqz-browser-panel-re' && data.origin === 'window') {
          messageHandler(data.message);
        }
      });helpers = {
        or(v1, v2) {
          return v1 || v2;
        },

        not(value) {
          return !value;
        },

        local(key) {
          return chrome.i18n.getMessage(key);
        },

        truncate(text, maxChars) {
          const dots = '...';
          let str = text.trim();
          const limit = maxChars;
          if (str.length > limit) {
            str = str.substring(0, limit);
            str = str.substr(0, Math.min(str.length, str.lastIndexOf(' '))) + dots;
          }
          return str;
        }
      };


      /* global document, window */
      Handlebars.partials = templates;
      Object.keys(helpers).forEach(helperName => {
        Handlebars.registerHelper(helperName, helpers[helperName]);
      });$(document).ready(() => {
        // on load we ask the browser window for data
        sendMessageToWindow({
          handler: 'offersIFrameHandler',
          action: 'get_last_data',
          data: {}
        });

        // link the click function here to the buttons
        document.getElementById('cqz-browser-panel-re').addEventListener('click', cqzOfferBtnClicked);

        // open URL
        $('#cqz-browser-panel-re').on('click', '[data-open-url]', ev => {
          sendMessageToWindow({
            handler: 'openUrlHandler',
            data: {
              el_id: ev.target.getAttribute('data-cqz-of-btn-id'),
              url: ev.currentTarget.getAttribute('data-open-url')
            }
          });
        });

        const conditionsHolder = $('#cqz-browser-panel-re .descr-read-more');
        const conditionsSize = $('.text-holder', conditionsHolder).text().length;

        if (conditionsSize >= 250) {
          conditionsHolder.addClass('size-l');
        }
      });window.draw = draw$1;
    }
  };
});
})
(function(factory) {
  if (typeof define == 'function' && define.amd)
    define(["handlebars","jquery"], factory);
  else if (typeof module == 'object' && module.exports && typeof require == 'function')
    module.exports = factory(require("handlebars"), require("jquery"));
  else
    CliqzGlobal = factory(Handlebars, $);
});