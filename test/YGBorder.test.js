// @generated by "./gentest/run.js" from "../yoga/javascript/tests/Facebook.Yoga/YGBorderTest.js"

import { it, expect } from "vitest";

import { Yoga } from "./init";

it("border_no_size", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setBorder(Yoga.EDGE_LEFT, 10);
    root.setBorder(Yoga.EDGE_TOP, 10);
    root.setBorder(Yoga.EDGE_RIGHT, 10);
    root.setBorder(Yoga.EDGE_BOTTOM, 10);
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
      "20 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(20);;
    expect(
      root.getComputedHeight(),
      "20 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(20);;

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
      "20 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(20);;
    expect(
      root.getComputedHeight(),
      "20 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(20);;
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("border_container_match_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setBorder(Yoga.EDGE_LEFT, 10);
    root.setBorder(Yoga.EDGE_TOP, 10);
    root.setBorder(Yoga.EDGE_RIGHT, 10);
    root.setBorder(Yoga.EDGE_BOTTOM, 10);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
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
      "30 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(30);;

    expect(
      root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
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
      "30 === root.getComputedWidth() (" + root.getComputedWidth() + ")"
    ).toBe(30);;
    expect(
      root.getComputedHeight(),
      "30 === root.getComputedHeight() (" + root.getComputedHeight() + ")"
    ).toBe(30);;

    expect(
      root_child0.getComputedLeft(),
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(10);;
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("border_flex_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setBorder(Yoga.EDGE_LEFT, 10);
    root.setBorder(Yoga.EDGE_TOP, 10);
    root.setBorder(Yoga.EDGE_RIGHT, 10);
    root.setBorder(Yoga.EDGE_BOTTOM, 10);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setFlexGrow(1);
    root_child0.setWidth(10);
    root.insertChild(root_child0, 0);
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
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(80);;

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
      "80 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(80);;
    expect(
      root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "80 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(80);;
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("border_stretch_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setBorder(Yoga.EDGE_LEFT, 10);
    root.setBorder(Yoga.EDGE_TOP, 10);
    root.setBorder(Yoga.EDGE_RIGHT, 10);
    root.setBorder(Yoga.EDGE_BOTTOM, 10);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
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
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedWidth(),
      "80 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(80);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
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
      "10 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedTop(),
      "10 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedWidth(),
      "80 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(80);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(10);;
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
it("border_center_child", function () {
  var config = Yoga.Config.create();

  try {
    var root = Yoga.Node.create(config);
    root.setJustifyContent(Yoga.JUSTIFY_CENTER);
    root.setAlignItems(Yoga.ALIGN_CENTER);
    root.setBorder(Yoga.EDGE_START, 10);
    root.setBorder(Yoga.EDGE_END, 20);
    root.setBorder(Yoga.EDGE_BOTTOM, 20);
    root.setWidth(100);
    root.setHeight(100);

    var root_child0 = Yoga.Node.create(config);
    root_child0.setWidth(10);
    root_child0.setHeight(10);
    root.insertChild(root_child0, 0);
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
      "40 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(40);;
    expect(
      root_child0.getComputedTop(),
      "35 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(35);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
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
      "50 === root_child0.getComputedLeft() (" + root_child0.getComputedLeft() + ")"
    ).toBe(50);;
    expect(
      root_child0.getComputedTop(),
      "35 === root_child0.getComputedTop() (" + root_child0.getComputedTop() + ")"
    ).toBe(35);;
    expect(
      root_child0.getComputedWidth(),
      "10 === root_child0.getComputedWidth() (" + root_child0.getComputedWidth() + ")"
    ).toBe(10);;
    expect(
      root_child0.getComputedHeight(),
      "10 === root_child0.getComputedHeight() (" + root_child0.getComputedHeight() + ")"
    ).toBe(10);;
  } finally {
    if (typeof root !== "undefined") {
      root.freeRecursive();
    }

    config.free();
  }
});
