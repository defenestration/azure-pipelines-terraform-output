"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const assert = require("assert");
const ttm = require("azure-pipelines-task-lib/mock-test");
describe('Sample task tests', function () {
    before(function () {
        // Setup before tests
    });
    after(() => {
        // Cleanup after tests
    });
    it('should succeed with simple inputs', function (done) {
        this.timeout(1000);
        let tp = path.join(__dirname, 'success.js');
        let tr = new ttm.MockTestRunner(tp);
        tr.runAsync().then(() => {
            console.log(tr.succeeded);
            console.log(tr.stdout);
            assert.equal(tr.succeeded, true, 'should have succeeded');
            assert.equal(tr.warningIssues.length, 0, "should have no warnings");
            assert.equal(tr.errorIssues.length, 0, "should have no errors");
            // assert.equal(tr.stdout.indexOf('Hello human') >= 0, true, "should display Hello human");
            done();
        }).catch((error) => {
            done(error); // Ensure the test case fails if there's an error
        });
    });
    it('should fail if tool returns 1', function (done) {
        // Failure test implementation
    });
});
//# sourceMappingURL=_suite.js.map