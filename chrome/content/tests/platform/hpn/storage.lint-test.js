
System.register("tests/platform/hpn/storage.lint-test.js", [], function (_export) {
  "use strict";

  return {
    setters: [],
    execute: function () {
      _export("default", describeModule("core/lint", function () { return {}; }, function () {
        describe("Check eslint on platform/hpn/storage.es", function () {
          it('should have no style error', function () {
            chai.expect(0).to.equal(0);
          });
        });
      }));
      }
  };
});
  