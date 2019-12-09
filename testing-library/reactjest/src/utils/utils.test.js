import { reverse, addFieldGoal, addTouchdown } from "./utils";

test("it reverses the given string", () => {
  expect(reverse("abc")).toBe("cba");
  expect(reverse("hello!")).not.toBe("hello!");
  expect(reverse("hello!")).toBe("!olleh");
});

test("addFieldGoal adds 3 to the current score", () => {
  expect(addFieldGoal(7)).toBe(10);
  expect(addFieldGoal(0)).toBe(3);
});

test("addFieldGoal does not add 7 to the current score", () => {
  expect(addFieldGoal(0)).not.toBe(7);
});

test("addTouchdown adds 7 to the current score", () => {
  expect(addTouchdown(35)).toBe(42);
  expect(addTouchdown(0)).toBe(7);
});
