import React from "react";
import { shallow } from "enzyme";
import Notifications from "./Notifications";
import { getLatestNotification } from "../utils/utils";

const listNotifications = [
  { id: 1, type: "default", value: "New course available" },
  { id: 2, type: "urgent", value: "New resume available" },
  { id: 3, type: "urgent", html: getLatestNotification() },
];

describe("Notification component tests", () => {
  it("renders Notification component without crashing", () => {
    const notification = shallow(<Notifications />);

    expect(notification).toBeDefined();
  });

  it("renders ul", () => {
    const notification = shallow(<Notifications displayDrawer = {true} />);

    expect(notification.find("ul")).toBeDefined();
  });

  it("renders three list items", () => {
    const notification = shallow(<Notifications displayDrawer = {true} listNotifications={listNotifications}/>);

    expect(notification.find("NotificationItem")).toHaveLength(3);
  });
  it("renders the correct html", () => {
    const notification = shallow(<Notifications displayDrawer = {true} listNotifications={listNotifications}/>);
    expect(notification.find("NotificationItem").first().html()).toBe(
      '<li data-notification-type="default">New course available</li>'
    );
  });
  it("renders correct text", () => {
    const notification = shallow(<Notifications displayDrawer = {true} />);
    
    expect(notification.find(".menuItem")).toBeDefined();
    expect(notification.find("#notification-title").text()).toBe(
      "Here is the list of notifications"
    );
  });
  it("menu item is being displayed", () => {
    const notification = shallow(<Notifications />);

    expect(notification.find(".menuItem")).toBeDefined();
    expect(notification.find(".Notifications").exists()).toBeFalsy();
  });
});
