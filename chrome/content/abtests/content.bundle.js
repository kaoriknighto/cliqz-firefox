!function(e){function t(e){Object.defineProperty(this,e,{enumerable:!0,get:function(){return this[v][e]}})}function r(e){if("undefined"!=typeof System&&System.isModule?System.isModule(e):"[object Module]"===Object.prototype.toString.call(e))return e;var t={default:e,__useDefault:e};if(e&&e.__esModule)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return new o(t)}function o(e){Object.defineProperty(this,v,{value:e}),Object.keys(e).forEach(t,this)}function n(e){return"@node/"===e.substr(0,6)?c(e,r(m(e.substr(6))),{}):p[e]}function u(e){var t=n(e);if(!t)throw new Error('Module "'+e+'" expected, but not contained in build.');if(t.module)return t.module;var r=t.linkRecord;return i(t,r),a(t,r,[]),t.module}function i(e,t){if(!t.depLoads){t.declare&&d(e,t),t.depLoads=[];for(var r=0;r<t.deps.length;r++){var o=n(t.deps[r]);t.depLoads.push(o),o.linkRecord&&i(o,o.linkRecord);var u=t.setters&&t.setters[r];u&&(u(o.module||o.linkRecord.moduleObj),o.importerSetters.push(u))}return e}}function d(t,r){var o=r.moduleObj,n=t.importerSetters,u=!1,i=r.declare.call(e,function(e,t){if(!u){if("object"==typeof e)for(var r in e)"__useDefault"!==r&&(o[r]=e[r]);else o[e]=t;u=!0;for(var i=0;i<n.length;i++)n[i](o);return u=!1,t}},{id:t.key});"function"!=typeof i?(r.setters=i.setters,r.execute=i.execute):(r.setters=[],r.execute=i)}function l(e,t,r){return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:r,setters:void 0,execute:void 0,moduleObj:{}}}}function f(e,t,r,o){var n={};return p[e]={key:e,module:void 0,importerSetters:[],linkRecord:{deps:t,depLoads:void 0,declare:void 0,execute:o,executingRequire:r,moduleObj:{default:n,__useDefault:n},setters:void 0}}}function s(e,t,r){return function(o){for(var n=0;n<e.length;n++)if(e[n]===o){var u,i=t[n],d=i.linkRecord;return u=d?-1===r.indexOf(i)?a(i,d,r):d.moduleObj:i.module,"__useDefault"in u?u.__useDefault:u}}}function a(t,r,n){if(n.push(t),t.module)return t.module;var u;if(r.setters){for(var i=0;i<r.deps.length;i++){var d=r.depLoads[i],l=d.linkRecord;l&&-1===n.indexOf(d)&&(u=a(d,l,l.setters?n:[]))}r.execute.call(y)}else{var f={id:t.key},c=r.moduleObj;Object.defineProperty(f,"exports",{configurable:!0,set:function(e){c.default=c.__useDefault=e},get:function(){return c.__useDefault}});var p=s(r.deps,r.depLoads,n);if(!r.executingRequire)for(var i=0;i<r.deps.length;i++)p(r.deps[i]);var v=r.execute.call(e,p,c.__useDefault,f);void 0!==v?c.default=c.__useDefault=v:f.exports!==c.__useDefault&&(c.default=c.__useDefault=f.exports);var m=c.__useDefault;if(m&&m.__esModule)for(var b in m)Object.hasOwnProperty.call(m,b)&&(c[b]=m[b])}var f=t.module=new o(r.moduleObj);if(!r.setters)for(var i=0;i<t.importerSetters.length;i++)t.importerSetters[i](f);return f}function c(e,t){return p[e]={key:e,module:t,importerSetters:[],linkRecord:void 0}}var p={},v="undefined"!=typeof Symbol?Symbol():"@@baseObject";o.prototype=Object.create(null),"undefined"!=typeof Symbol&&Symbol.toStringTag&&(o.prototype[Symbol.toStringTag]="Module");var m="undefined"!=typeof System&&System._nodeRequire||"undefined"!=typeof require&&"undefined"!=typeof require.resolve&&"undefined"!=typeof process&&process.platform&&require,y={};return Object.freeze&&Object.freeze(y),function(e,t,n,i){return function(d){d(function(d){var s={_nodeRequire:m,register:l,registerDynamic:f,registry:{get:function(e){return p[e].module},set:c},newModule:function(e){return new o(e)}};c("@empty",new o({}));for(var a=0;a<t.length;a++)c(t[a],r(arguments[a],{}));i(s);var v=u(e[0]);if(e.length>1)for(var a=1;a<e.length;a++)u(e[a]);return n?v.__useDefault:(v instanceof o&&Object.defineProperty(v,"__esModule",{value:!0}),v)})}}}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this)

(["a"], ["c","10"], false, function($__System) {
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
            }templates['controls'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    return "        on\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    return "        off\n";
                }, "5": function (container, depth0, helpers, partials, data) {
                    return "    <div id=\"stop\" class=\"button\">Stop</div>\n";
                }, "7": function (container, depth0, helpers, partials, data) {
                    return "    <div id=\"start\" class=\"button\">Start</div>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "<span>\n    Automatic hourly updates:\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isRunning : depth0, { "name": "if", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.program(3, data, 0), "data": data })) != null ? stack1 : "") + "</span>\n" + ((stack1 = helpers["if"].call(alias1, depth0 != null ? depth0.isRunning : depth0, { "name": "if", "hash": {}, "fn": container.program(5, data, 0), "inverse": container.program(7, data, 0), "data": data })) != null ? stack1 : "");
                }, "useData": true });
            templates['demographics'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = container.escapeExpression;

                    return "    <span>" + alias1((helper = (helper = helpers.key || data && data.key) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "key", "hash": {}, "data": data }) : helper)) + ": " + alias1(container.lambda(depth0, depth0)) + "</span>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    var stack1;

                    return (stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "";
                }, "useData": true });
            templates['main'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    return "<h1>AB Tests</h1>\n  <h2>Local Properties</h2>\n  <p>The following properties determine which AB tests to enter.</p>\n  <h3>Demographics</h3>\n    <div id=\"demographics\"></div>\n  <h3>Core Version</h3>\n    <div id=\"core-version\"></div>\n  <h2>Tests</h2>\n    <h3>Running Tests</h3>\n      <p>All currently running tests. Manually stopping a test will <em>not</em> notify the backend.</p>\n      <table id=\"active-tests\"></table>\n    <h3>Available Tests</h3>\n      <p>All tests available from the backend. Manually starting a test will <em>not</em> test for demographics, version, or competitors and will <em>not</em> notify the backend.</p>\n      <table id=\"available-tests\"></table>\n    <h3>Completed Tests</h3>\n      <p>Completed tests will not be re-started.</p>\n      <table id=\"completed-tests\"></table>\n  <h2>Actions</h2>\n    <div id=\"refresh\" class=\"button\">Refresh All</div>\n    <div id=\"update-tests\" class=\"button\">Update Tests from Backend</div>\n    <div id=\"load-tests\" class=\"button\">Load Test State from Local Storage</div>\n    <div id=\"save-tests\" class=\"button\">Save Test State to Local Storage</div>\n    <div id=\"controls\"></div>\n";
                }, "useData": true });
            templates['tests'] = Handlebars.template({ "1": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "<tr>\n    <td>" + alias4((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "id", "hash": {}, "data": data }) : helper)) + "</td>\n    <td>" + alias4((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "name", "hash": {}, "data": data }) : helper)) + "</td>\n    <td>" + alias4((helper = (helper = helpers.description || (depth0 != null ? depth0.description : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "description", "hash": {}, "data": data }) : helper)) + "</td>\n\n    <td>" + alias4((helper = (helper = helpers.started || (depth0 != null ? depth0.started : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "started", "hash": {}, "data": data }) : helper)) + "</td>\n    <td>" + alias4((helper = (helper = helpers.group || (depth0 != null ? depth0.group : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "group", "hash": {}, "data": data }) : helper)) + "</td>\n\n    <td>\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.groups : depth0, { "name": "each", "hash": {}, "fn": container.program(2, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </td>\n    <td>\n" + ((stack1 = container.invokePartial(partials.version, depth0 != null ? depth0.core_version : depth0, { "name": "version", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </td>\n    <td>\n" + ((stack1 = container.invokePartial(partials.demographics, depth0 != null ? depth0.demographic : depth0, { "name": "demographics", "data": data, "indent": "        ", "helpers": helpers, "partials": partials, "decorators": container.decorators })) != null ? stack1 : "") + "    </td>\n    <td>" + alias4((helper = (helper = helpers.start_date || (depth0 != null ? depth0.start_date : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "start_date", "hash": {}, "data": data }) : helper)) + "</td>\n    <td>" + alias4((helper = (helper = helpers.end_date || (depth0 != null ? depth0.end_date : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "end_date", "hash": {}, "data": data }) : helper)) + "</td>\n    <td>" + alias4((helper = (helper = helpers.treatment_length || (depth0 != null ? depth0.treatment_length : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "treatment_length", "hash": {}, "data": data }) : helper)) + "</td>\n    <td>" + alias4((helper = (helper = helpers.probability || (depth0 != null ? depth0.probability : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "probability", "hash": {}, "data": data }) : helper)) + "</td>\n    <td>" + alias4((helper = (helper = helpers.status || (depth0 != null ? depth0.status : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "status", "hash": {}, "data": data }) : helper)) + "</td>\n    <td>" + alias4((helper = (helper = helpers.competitors || (depth0 != null ? depth0.competitors : depth0)) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "competitors", "hash": {}, "data": data }) : helper)) + "</td>\n\n    <td>\n" + ((stack1 = helpers["if"].call(alias1, (stack1 = depths[1] != null ? depths[1].options : depths[1]) != null ? stack1.showStart : stack1, { "name": "if", "hash": {}, "fn": container.program(5, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, (stack1 = depths[1] != null ? depths[1].options : depths[1]) != null ? stack1.showStop : stack1, { "name": "if", "hash": {}, "fn": container.program(8, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + ((stack1 = helpers["if"].call(alias1, (stack1 = depths[1] != null ? depths[1].options : depths[1]) != null ? stack1.showRemove : stack1, { "name": "if", "hash": {}, "fn": container.program(10, data, 0, blockParams, depths), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "    </td>\n</tr>\n";
                }, "2": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "            <div>\n                " + container.escapeExpression((helper = (helper = helpers.key || data && data.key) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "key", "hash": {}, "data": data }) : helper)) + ":\n" + ((stack1 = helpers.each.call(alias1, depth0, { "name": "each", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            </div>\n";
                }, "3": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = container.escapeExpression;

                    return "                    " + alias1((helper = (helper = helpers.key || data && data.key) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "key", "hash": {}, "data": data }) : helper)) + ": " + alias1(container.lambda(depth0, depth0)) + "\n";
                }, "5": function (container, depth0, helpers, partials, data) {
                    var stack1,
                        helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {};

                    return "            <select class=\"start-test-group\">\n" + ((stack1 = helpers.each.call(alias1, depth0 != null ? depth0.groups : depth0, { "name": "each", "hash": {}, "fn": container.program(6, data, 0), "inverse": container.noop, "data": data })) != null ? stack1 : "") + "            </select>\n            <div class=\"button start-test\" data-test-id=\"" + container.escapeExpression((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(alias1, { "name": "id", "hash": {}, "data": data }) : helper)) + "\">Start</div>\n";
                }, "6": function (container, depth0, helpers, partials, data) {
                    var helper,
                        alias1 = depth0 != null ? depth0 : container.nullContext || {},
                        alias2 = helpers.helperMissing,
                        alias3 = "function",
                        alias4 = container.escapeExpression;

                    return "                    <option value=\"" + alias4((helper = (helper = helpers.key || data && data.key) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "key", "hash": {}, "data": data }) : helper)) + "\">" + alias4((helper = (helper = helpers.key || data && data.key) != null ? helper : alias2, typeof helper === alias3 ? helper.call(alias1, { "name": "key", "hash": {}, "data": data }) : helper)) + "</option>\n";
                }, "8": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "            <div class=\"button stop-test\" data-test-id=\"" + container.escapeExpression((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "id", "hash": {}, "data": data }) : helper)) + "\">Stop</div>\n";
                }, "10": function (container, depth0, helpers, partials, data) {
                    var helper;

                    return "            <div class=\"button remove-test\" data-test-id=\"" + container.escapeExpression((helper = (helper = helpers.id || (depth0 != null ? depth0.id : depth0)) != null ? helper : helpers.helperMissing, typeof helper === "function" ? helper.call(depth0 != null ? depth0 : container.nullContext || {}, { "name": "id", "hash": {}, "data": data }) : helper)) + "\">Remove</div>\n";
                }, "12": function (container, depth0, helpers, partials, data) {
                    return "<tr>\n    <td colspan=\"13\">No tests</td>\n</tr>\n";
                }, "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data, blockParams, depths) {
                    var stack1;

                    return "<tr>\n    <th colspan=\"3\">Test</th>\n    <th colspan=\"2\">Client Setting</th>\n    <th colspan=\"9\">Static Properties</th>\n    <th>Actions</th>\n</tr>\n<tr>\n    <th>Id</th>\n    <th>Name</th>\n    <th>Description</th>\n\n    <th>Started On</th>\n    <th>Assigned Group</th>\n\n    <th>Available Groups</th>\n    <th>Required Core Version</th>\n    <th>Required Demographics</th>\n    <th>Start Date</th>\n    <th>End Date</th>\n    <th>Treatment Length</th>\n    <th>Enter Probability</th>\n    <th>Status (Server-Side)</th>\n    <th>Competitors</th>\n\n    <th></th>\n\n</tr>\n" + ((stack1 = helpers.each.call(depth0 != null ? depth0 : container.nullContext || {}, depth0 != null ? depth0.tests : depth0, { "name": "each", "hash": {}, "fn": container.program(1, data, 0, blockParams, depths), "inverse": container.program(12, data, 0, blockParams, depths), "data": data })) != null ? stack1 : "");
                }, "usePartial": true, "useData": true, "useDepths": true });
            templates['version'] = Handlebars.template({ "compiler": [7, ">= 4.0.0"], "main": function (container, depth0, helpers, partials, data) {
                    return container.escapeExpression(container.lambda(depth0, depth0)) + "\n";
                }, "useData": true });

            _export('default', templates);
        }
    };
});

$__System.registerDynamic("d", [], true, function ($__require, exports, module) {
  "use strict";

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  function _toConsumableArray(arr) {
    if (Array.isArray(arr)) {
      for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) {
        arr2[i] = arr[i];
      }return arr2;
    } else {
      return Array.from(arr);
    }
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var has = function has(o, p) {
    return Object.prototype.hasOwnProperty.call(o, p);
  };

  var _class = function () {
    function _class() {
      var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref$actions = _ref.actions,
          actions = _ref$actions === undefined ? {} : _ref$actions,
          _ref$respond = _ref.respond,
          respond = _ref$respond === undefined ? function () /* res, req */{} : _ref$respond,
          _ref$filter = _ref.filter,
          filter = _ref$filter === undefined ? function () {
        return true;
      } : _ref$filter,
          _ref$transform = _ref.transform,
          transform = _ref$transform === undefined ? function (r) {
        return r;
      } : _ref$transform,
          _ref$onTerminate = _ref.onTerminate,
          onTerminate = _ref$onTerminate === undefined ? function () {} : _ref$onTerminate;

      _classCallCheck(this, _class);

      this.actions = actions;
      this.onTerminate = onTerminate;
      this.dispatch = this.dispatch.bind(this);
      this.filter = filter;
      this.transform = transform;
      this.respond = respond;
    }

    _createClass(_class, [{
      key: "dispatch",
      value: function dispatch(request) {
        var _actions,
            _this = this;

        if (!this.filter || !this.filter(request)) {
          return false;
        }

        var _transform = this.transform(request),
            _transform$args = _transform.args,
            args = _transform$args === undefined ? [] : _transform$args,
            action = _transform.action;

        if (!has(this.actions, action)) {
          return false;
        }

        var res = (_actions = this.actions)[action].apply(_actions, _toConsumableArray(args));

        if (!(res instanceof Promise)) {
          res = Promise.resolve(res);
        }

        res.then(function (response) {
          return _this.respond(response, request);
        });

        return true;
      }
    }, {
      key: "terminate",
      value: function terminate() {
        this.onTerminate();
      }
    }]);

    return _class;
  }();

  exports.default = _class;
  module.exports = exports["default"];
});
$__System.registerDynamic('e', [], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  exports.default = function () {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
    }
    return [s4(), s4(), '-', s4(), '-', s4(), '-', s4(), '-', s4(), s4(), s4()].join('');
  };

  module.exports = exports['default'];
});
$__System.registerDynamic("f", ["d", "e"], true, function ($__require, exports, module) {
  'use strict';

  var global = this || self,
      GLOBAL = global;
  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _createClass = function () {
    function defineProperties(target, props) {
      for (var i = 0; i < props.length; i++) {
        var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
      }
    }return function (Constructor, protoProps, staticProps) {
      if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
    };
  }();

  var _server = $__require("d");

  var _server2 = _interopRequireDefault(_server);

  var _uuid = $__require("e");

  var _uuid2 = _interopRequireDefault(_uuid);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : { default: obj };
  }

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var dispatchers = [];

  var addDispatcher = function addDispatcher(dispatcher) {
    dispatchers.push(dispatcher);
  };

  var removeDispatcher = function removeDispatcher(dispatcher) {
    dispatchers = dispatchers.filter(function (d) {
      return d !== dispatcher;
    });
  };

  var Spanan = function () {
    function Spanan(sendFunction) {
      _classCallCheck(this, Spanan);

      this.sendFunction = sendFunction;
      this.callbacks = new Map();
      addDispatcher(this.dispatch.bind(this));
    }

    _createClass(Spanan, [{
      key: 'send',
      value: function send(functionName) {
        for (var _len = arguments.length, args = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
          args[_key - 1] = arguments[_key];
        }

        var resolver = void 0;
        var id = (0, _uuid2.default)();
        var promise = new Promise(function (resolve) {
          resolver = resolve;
        });
        this.callbacks.set(id, function () {
          return resolver.apply(undefined, arguments);
        });
        this.sendFunction({
          functionName: functionName,
          args: args,
          uuid: id
        });
        return promise;
      }
    }, {
      key: 'createProxy',
      value: function createProxy() {
        return new Proxy(this, {
          get: function get(target, key) {
            return target.send.bind(target, key);
          }
        });
      }
    }, {
      key: 'dispatch',
      value: function dispatch() {
        var _ref = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
            uuid = _ref.uuid,
            returnedValue = _ref.returnedValue;

        var callback = this.callbacks.get(uuid);
        if (!callback) {
          return false;
        }

        callback(returnedValue);
        this.callbacks.delete(uuid);
        return true;
      }
    }], [{
      key: 'dispatch',
      value: function dispatch(message) {
        return dispatchers.some(function (dispatcher) {
          try {
            return dispatcher(message);
          } catch (e) {
            return false;
          }
        });
      }
    }, {
      key: 'export',
      value: function _export(actions) {
        var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
            filter = _ref2.filter,
            transform = _ref2.transform,
            respond = _ref2.respond;

        var server = new _server2.default({
          actions: actions,
          respond: respond,
          filter: filter,
          transform: transform,
          onTerminate: function onTerminate() {
            removeDispatcher(server.dispatch);
          }
        });

        addDispatcher(server.dispatch);

        return server;
      }
    }, {
      key: 'reset',
      value: function reset() {
        dispatchers = [];
      }
    }]);

    return Spanan;
  }();

  exports.default = Spanan;
  module.exports = exports['default'];
});
$__System.register('a', ['10', 'c', 'b', 'f'], function (_export, _context) {
  "use strict";

  var $, Handlebars, templates, Spanan;
  return {
    setters: [function (_) {
      $ = _.default;
    }, function (_c) {
      Handlebars = _c.default;
    }, function (_b) {
      templates = _b.default;
    }, function (_f) {
      Spanan = _f.default;
    }],
    execute: function () {

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

      function isCliqzContentScriptMsg(msg) {
        return msg.source && msg.source === CHROME_MSG_SOURCE;
      }

      /* global window */

      const isChromeReady = () => typeof chrome === 'object';

      var checkIfChromeReady = function () {
        let waitingInterval;

        return new Promise(resolve => {
          const check = () => isChromeReady() && resolve();

          if (check()) {
            return;
          }

          waitingInterval = window.setInterval(check, 100);
        }).then(() => {
          window.clearInterval(waitingInterval);
        });
      };

      var _extends = Object.assign || function (target) {
        for (var i = 1; i < arguments.length; i++) {
          var source = arguments[i];for (var key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
              target[key] = source[key];
            }
          }
        }return target;
      };

      /* global window */
      function createSpananForModule(moduleName) {
        return new Spanan(_ref => {
          let uuid = _ref.uuid,
              functionName = _ref.functionName,
              args = _ref.args;

          const message = {
            source: CHROME_MSG_SOURCE,
            target: 'cliqz',
            module: moduleName,
            action: functionName,
            requestId: uuid,
            args
          };
          chrome.runtime.sendMessage(message);
        });
      }

      let INSTANCE = null;

      class Cliqz {
        constructor() {
          const core = createSpananForModule('core');
          const abtests = createSpananForModule('abtests');
          const cliqz = this;
          this.export = Spanan.export;

          Spanan.export({
            closeNotification(messageId) {
              cliqz.storage.setState(prevState => {
                const messages = Object.assign({}, prevState.messages);
                delete messages[messageId];
                return {
                  messages
                };
              });
            },
            addMessage(message) {
              cliqz.storage.setState(prevState => ({
                messages: _extends({}, prevState.messages, {
                  [message.id]: message
                })
              }));
            }
          }, {
            filter(message) {
              return Object.keys(this.actions).indexOf(message.action) >= 0;
            },
            transform: message => {
              if (message.action === 'closeNotification') {
                return {
                  action: message.action,
                  args: [message.messageId]
                };
              } else if (message.action === 'addMessage') {
                return {
                  action: message.action,
                  args: [message.message]
                };
              }
              return message;
            }
          });

          const onPostMessage = event => {
            let message;
            try {
              message = JSON.parse(event.data);
            } catch (e) {
              return;
            }

            Spanan.dispatch(message);
          };

          const onMessage = message => {
            if (!isCliqzContentScriptMsg(message)) {
              return;
            }
            Spanan.dispatch({
              uuid: message.requestId,
              returnedValue: message.response
            });
          };

          checkIfChromeReady().then(() => {
            chrome.runtime.onMessage.addListener(onMessage);
            window.addEventListener('message', onPostMessage);

            window.addEventListener('unload', () => {
              chrome.runtime.onMessage.removeListener(onMessage);
              window.removeEventListener('message', onPostMessage);
            });
          });

          this.core = core.createProxy();
          this.abtests = abtests.createProxy();
        }

        static getInstance() {
          if (!INSTANCE) {
            INSTANCE = new Cliqz();
          }

          return INSTANCE;
        }

        setStorage(storage) {
          this.storage = storage;
        }
      }

      var CLIQZ = Cliqz.getInstance();

      /* eslint { "prefer-arrow-callback": "off" } */
      /* global document */
      function showControls() {
        CLIQZ.abtests.isRunning().then(isRunning => {
          document.getElementById('controls').innerHTML = templates.controls({ isRunning });

          $('#start').on('click', function start() {
            CLIQZ.abtests.start().then(() => showControls());
          });
          $('#stop').on('click', function stop() {
            CLIQZ.abtests.stop().then(() => showControls());
          });
        });
      }

      function showCoreVersion() {
        CLIQZ.abtests.getCoreVersion().then(version => {
          document.getElementById('core-version').innerHTML = templates.version(version);
        });
      }

      function showDemographics() {
        CLIQZ.abtests.getDemographics().then(demographics => {
          document.getElementById('demographics').innerHTML = templates.demographics(JSON.parse(demographics));
        });
      }

      function showCompletedTests() {
        CLIQZ.abtests.getCompletedTests().then(function show(tests) {
          const options = { showRemove: true };
          document.getElementById('completed-tests').innerHTML = templates.tests({ tests, options });

          $('.remove-test').each(function assignRemoveTest() {
            $(this).on('click', function removeTest() {
              const id = parseInt($(this).attr('data-test-id'), 10);
              const test = tests[id];
              CLIQZ.abtests.removeTest(test);
              showCompletedTests();
            });
          });
        });
      }

      function showActiveTests() {
        CLIQZ.abtests.getRunningTests().then(function show(tests) {
          const options = { showStop: true };
          document.getElementById('active-tests').innerHTML = templates.tests({ tests, options });

          $('.stop-test').each(function assignStopTest() {
            $(this).on('click', function stopTest() {
              const id = parseInt($(this).attr('data-test-id'), 10);
              const test = tests[id];
              CLIQZ.abtests.stopTest(test).then(() => {
                showActiveTests();
                showCompletedTests();
              });
            });
          });
        });
      }

      function showAvailableTests() {
        CLIQZ.abtests.getAvailableTests().then(function show(tests) {
          const options = { showStart: true };
          document.getElementById('available-tests').innerHTML = templates.tests({ tests, options });

          $('.start-test').each(function assignStartTest() {
            $(this).on('click', function startTest() {
              const id = parseInt($(this).attr('data-test-id'), 10);
              const test = tests.find(t => t.id === id);
              const group = $(this).siblings('.start-test-group').val();
              CLIQZ.abtests.startTest(test, group).then(() => {
                showActiveTests();
              });
            });
          });
        });
      }

      function showAll() {
        showDemographics();
        showCoreVersion();
        showActiveTests();
        showAvailableTests();
        showCompletedTests();
        showControls();
      }

      Handlebars.partials = templates;

      document.getElementById('ab-tests').innerHTML = templates.main();
      showAll();

      $('#refresh').on('click', function refresh() {
        showAll();
      });

      $('#update-tests').on('click', function updateTests() {
        CLIQZ.abtests.updateTests().then(() => {
          showAll();
        });
      });

      $('#load-tests').on('click', function loadTests() {
        CLIQZ.abtests.loadTests().then(() => {
          showAll();
        });
      });

      $('#save-tests').on('click', function saveTest() {
        CLIQZ.abtests.saveTests().then(() => {});
      });
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