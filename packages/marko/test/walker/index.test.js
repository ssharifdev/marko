"use strict";

require("../__util__/test-init");

var chai = require("chai");
chai.config.includeStack = true;

var compiler = require("../../compiler");
var autotest = require("../autotest");

autotest("fixtures", fixture => {
  let test = fixture.test;
  let resolve = fixture.resolve;
  let snapshot = fixture.snapshot;
  test(() => {
    var getAST = require(resolve("index.js"));
    snapshot(getAST(compiler), ".json");
  });
});
