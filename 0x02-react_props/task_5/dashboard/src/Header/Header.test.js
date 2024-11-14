import React from 'react';
import {Header} from "./Header";
import { shallow } from "enzyme";


describe("Header component tests", () => {
    it("Renders without crashing", () => {
        const header = shallow(<Header />)
        expect(header).toBeDefined()
    });
    it("Renders a img element and a h1 element", () => {
        const header = shallow(<Header />)
        expect(header.find("img").exists()).toBeTruthy()
        expect(header.find("h1").exists()).toBeTruthy() 
    });
});
