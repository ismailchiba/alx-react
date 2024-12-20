import React from "react";
import { shallow } from "enzyme";
import NotificationItem from "./NotificationItem";

describe("NotificationItem testing component", () => {
    it ("renders without crashing", () => {
        const wrapper = shallow(<NotificationItem />);
        expect(wrapper.exists());
    });
    it ("renders with correct type and value", () => {
        const wrapper = shallow(<NotificationItem type="default" value="test" />);
        expect(wrapper.find('li').text()).toEqual("test");
        expect(wrapper.find('li').prop('data-notification-type')).toEqual("default");
    });
    it ("renders with correct html", () => {
        const wrapper = shallow(<NotificationItem html={{ __html: "<u>test</u>" }} />);
        expect(wrapper.find('li').html()).toContain('<u>test</u>');
    });
});