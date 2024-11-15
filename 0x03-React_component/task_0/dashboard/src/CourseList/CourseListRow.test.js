import React from "react";
import { shallow } from 'enzyme';
import CourseListRow from './CourseListRow';


describe('testing CourseListRow component', () => {
    it ('renders without crashing', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="test"/>);
        expect(wrapper.exists()).toEqual(true);
        expect(wrapper.find('tr')).toHaveLength(1);
    });
    it ('renders two cells when isHeader is false', () => {
        const wrapper = shallow(<CourseListRow textFirstCell="test" textSecondCell="test" />);
        expect(wrapper.find('tr').children()).toHaveLength(2);
        expect(wrapper.find("tr").childAt(0).html()).toEqual("<td>test</td>");
        expect(wrapper.find("tr").childAt(1).html()).toEqual("<td>test</td>");
    });
    it ('renders one cell when isHeader is true and textSecondCell is null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" />);
        expect(wrapper.find('tr').children()).toHaveLength(1);
        expect(wrapper.find("tr").childAt(0).html()).toEqual(
            '<th colSpan="2">test</th>'
    );
    });
    it ('renders two cells when isHeader is true and textSecondCell is not null', () => {
        const wrapper = shallow(<CourseListRow isHeader={true} textFirstCell="test" textSecondCell="test" />);
        expect(wrapper.find('tr').children()).toHaveLength(2);
        expect(wrapper.find("tr").childAt(0).html()).toEqual(
            '<th>test</th>'
        );
        expect(wrapper.find("tr").childAt(1).html()).toEqual(
            '<th>test</th>'
        );
    });
 })