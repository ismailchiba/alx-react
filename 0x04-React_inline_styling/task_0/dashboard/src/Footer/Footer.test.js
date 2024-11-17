import React from 'react';
import { shallow } from 'enzyme';
import { Footer } from './Footer';

describe('Footer component tests', () => {
    it('Renders without crashing', () => {
        const footer = shallow(<Footer />);
        expect(footer).toBeDefined();
    });
    it('Renders a p element', () => {
        const footer = shallow(<Footer />);
        expect(footer.find('p').text()).toContain('Copyright'); 
    });
    });