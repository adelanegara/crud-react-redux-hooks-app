import React from "react";
import users from "./users.json";

test("Welcome text test", () => {
  expect(users).toMatchSnapshot();
  expect(users).toHaveLength(4);
  expect(users.map((users1) => users1.title)).toEqual([
    "testing1",
    "testing2",
    "testing3",
    "testing4",
  ]);
});
