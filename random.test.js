
import { test } from "qunit";
import { a } from "index.html";


test("x.js tests", function(assert) {
  
    test("Math.random() returns a random number", function(assert) {

    assert.ok(typeof a === "number", "a should be a number");
  });
});
