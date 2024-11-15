import React from "react";
import { Login } from "./Login";
import { shallow } from "enzyme";

describe("Login Component Tests", () => {
    it ("Renders without crashing", () => {
        const login = shallow(<Login />);
        expect(login).toBeDefined();
    });
    it ("Renders a form element", () => {
        const login = shallow(<Login />);
        expect(login.find("input").length).toBe(2);
    });
    it ("Renders a label elemnt", () => {
        const login = shallow(<Login />);
        expect(login.find("label").length).toBe(2);
    });
});