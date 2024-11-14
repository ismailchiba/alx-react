import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App Componeent Tests", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app).toBeDefined();
  });
  it("renders a div Header", () => {
    const app = shallow(<App />);

    expect(app.find("Header").exists()).toBeTruthy();
  });
  it("renders a div Login", () => {
    const app = shallow(<App isLoggedIn = {false} />);

    expect(app.find("Login").exists()).toBeTruthy();
  });
  it ("renders a div CourseList", () => {
    const app = shallow(<App isLoggedIn = {true} />);
    expect(app.find("Login").exists()).toBeFalsy();
    expect(app.find("CourseList").exists()).toBeTruthy();
  });
  it("renders a div Footer", () => {
    const app = shallow(<App />);

    expect(app.find("Footer").exists()).toBeTruthy();
  });
  it("renders a div Notifications", () => {
    const app = shallow(<App />);

    expect(app.find("Notifications").exists()).toBeTruthy();
  });
});