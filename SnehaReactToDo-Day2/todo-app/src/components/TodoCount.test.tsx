import * as React from 'react';
import TodoCount from './TodoCount';
import { shallow } from 'enzyme';

describe('TodoCount', () => {
    it('should render', () => {
        const props = {
            todoCount: 0
        }
        const component = shallow(<TodoCount todoCount={props.todoCount} />);
        expect(component.length).toBe(1);
    });
    it('should display the count', () => {
        const props = {
            todoCount: 1
        }
        const component = shallow(<TodoCount todoCount={props.todoCount} />);
        expect(component.find('span').text()).toBe('You have 1 items in your cart');
    });
});