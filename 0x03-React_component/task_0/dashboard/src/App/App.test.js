import React from "react";
import App from "./App";
import { shallow } from "enzyme";

describe("App Component", () => {
  it("Renders without crashing", () => {
    const app = shallow(<App />);
    expect(app.exists()).toBe(true);
  });
  it("renders a Header component", () => {
    const app = shallow(<App />);
    expect(app.find("Header").exists()).toBeTruthy();
  });
  it("renders a Login component when not logged in", () => {
    const app = shallow(<App isLoggedIn={false} />);
    expect(app.find("Login").exists()).toBeTruthy();
  });
  it("renders a CourseList component when logged in", () => {
    const app = shallow(<App isLoggedIn={true} />);
    expect(app.find("Login").exists()).toBeFalsy();
    expect(app.find("CourseList").exists()).toBeTruthy();
  });
  it("renders a Footer component", () => {
    const app = shallow(<App />);
    expect(app.find("Footer").exists()).toBeTruthy();
  });
  it("renders a Notifications component", () => {
    const app = shallow(<App />);
    expect(app.find("Notifications").exists()).toBeTruthy();
  });
});
