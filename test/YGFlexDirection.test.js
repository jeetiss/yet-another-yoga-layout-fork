// @generated by "./gentest/run.js" from "../yoga/javascript/tests/Facebook.Yoga/YGFlexDirectionTest.js"

import { it, expect } from "vitest";

import { Yoga } from "./init";

it("flex_direction_column_no_height", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root.getComputedHeight(),
      "30 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(30);;

    expect(
      root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedTop(),
      "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(20);;
    expect(
      root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(10);;

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root.getComputedHeight(),
      "30 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(30);;

    expect(
      root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedTop(),
      "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(20);;
    expect(
      root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(10);;
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("flex_direction_row_no_width", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "30 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(30);;
    expect(
      root.getComputedHeight(),
      "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child1.getComputedLeft(),
      "10 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child2.getComputedLeft(),
      "20 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(20);;
    expect(
      root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(100);;

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "30 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(30);;
    expect(
      root.getComputedHeight(),
      "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child0.getComputedLeft(),
      "20 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(20);;
    expect(
      root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child1.getComputedLeft(),
      "10 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(100);;
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("flex_direction_column", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root.getComputedHeight(),
      "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedTop(),
      "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(20);;
    expect(
      root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(10);;

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root.getComputedHeight(),
      "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedTop(),
      "10 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedTop(),
      "20 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(20);;
    expect(
      root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(10);;
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("flex_direction_row", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root.getComputedHeight(),
      "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child1.getComputedLeft(),
      "10 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child2.getComputedLeft(),
      "20 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(20);;
    expect(
      root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(100);;

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root.getComputedHeight(),
      "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child0.getComputedLeft(),
      "90 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(90);;
    expect(
      root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child1.getComputedLeft(),
      "80 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(80);;
    expect(
      root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child2.getComputedLeft(),
      "70 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(70);;
    expect(
      root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(100);;
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("flex_direction_column_reverse", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_COLUMN_REVERSE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setHeight(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setHeight(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root.getComputedHeight(),
      "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedTop(),
      "90 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(90);;
    expect(
      root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedTop(),
      "80 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(80);;
    expect(
      root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedTop(),
      "70 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(70);;
    expect(
      root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(10);;

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root.getComputedHeight(),
      "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedTop(),
      "90 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(90);;
    expect(
      root_child0.getComputedWidth(),
      "100 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child1.getComputedLeft(),
      "0 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedTop(),
      "80 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(80);;
    expect(
      root_child1.getComputedWidth(),
      "100 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child1.getComputedHeight(),
      "10 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(10);;

    expect(
      root_child2.getComputedLeft(),
      "0 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedTop(),
      "70 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(70);;
    expect(
      root_child2.getComputedWidth(),
      "100 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root_child2.getComputedHeight(),
      "10 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(10);;
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("flex_direction_row_reverse", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setFlexDirection(Yoga.FLEX_DIRECTION_ROW_REVERSE);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);

    var root_child1 = Yoga.Node.create(config);
    root_child1.setWidth(10);
    root.insertChild(root_child1, 1);

    var root_child2 = Yoga.Node.create(config);
    root_child2.setWidth(10);
    root.insertChild(root_child2, 2);
    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_LTR);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root.getComputedHeight(),
      "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child0.getComputedLeft(),
      "90 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(90);;
    expect(
      root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child1.getComputedLeft(),
      "80 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(80);;
    expect(
      root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child2.getComputedLeft(),
      "70 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(70);;
    expect(
      root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(100);;

    root.calculateLayout(Yoga.UNDEFINED, Yoga.UNDEFINED, Yoga.DIRECTION_RTL);

    expect(
      root.getComputedLeft(),
      "0 === root.getComputedLeft() (" + root.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root.getComputedTop(),
      "0 === root.getComputedTop() (" + root.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root.getComputedWidth(),
      "100 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(100);;
    expect(
      root.getComputedHeight(),
      "100 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child0.getComputedLeft(),
      "0 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedTop(),
      "0 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "100 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child1.getComputedLeft(),
      "10 === root_child1.getComputedLeft() (" + root_child1.getComputedLeft() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedTop(),
      "0 === root_child1.getComputedTop() (" + root_child1.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child1.getComputedWidth(),
      "10 === root_child1.getComputedWidth() (" + root_child1.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child1.getComputedHeight(),
      "100 === root_child1.getComputedHeight() (" + root_child1.getComputedHeight() + ")"
    ).toBe(100);;

    expect(
      root_child2.getComputedLeft(),
      "20 === root_child2.getComputedLeft() (" + root_child2.getComputedLeft() + ")"
    ).toBe(20);;
    expect(
      root_child2.getComputedTop(),
      "0 === root_child2.getComputedTop() (" + root_child2.getComputedTop() + ")"
    ).toBe(0);;
    expect(
      root_child2.getComputedWidth(),
      "10 === root_child2.getComputedWidth() (" + root_child2.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child2.getComputedHeight(),
      "100 === root_child2.getComputedHeight() (" + root_child2.getComputedHeight() + ")"
    ).toBe(100);;
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
