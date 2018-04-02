
System.register("tests/platform/language/supported-langs.lint-test.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", describeModule("core/lint", function () { return {}; }, function () {
        describe("Check eslint on platform/language/supported-langs.es", function () {
          it('should have no style error', function () {
            chai.expect(0).to.equal(0);
          });
        });
      }));
      }
  };
});
  