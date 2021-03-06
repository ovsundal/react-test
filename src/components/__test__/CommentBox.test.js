import React from 'react';
import {mount} from 'enzyme';
import CommentBox from 'components/CommentBox';
import Root from "../../Root";

let wrapped;

beforeEach(() => {
    wrapped = mount(
        <Root>
            <CommentBox/>
        </Root>
    );
});

afterEach(() => {
    wrapped.unmount();
});

it('has a text area and two button', () => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(2);
});

//use describe to scope before/afterEach to some tests, but not all
describe('the text area', () => {
    //beforeEach is evaluated only inside the describe function
    beforeEach(() => {
        wrapped.find('textarea').simulate('change', {
            target: {value: 'comment1'}
        });
        //force synchronous rerender
        wrapped.update();
    });

    it('has a text area that users can type in', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('comment1')
    });

    it('when form is submitted, text area is emptied', () => {
        expect(wrapped.find('textarea').prop('value')).toEqual('comment1');
        wrapped.find('form').simulate('submit');
        wrapped.update();
        expect(wrapped.find('textarea').prop('value')).toEqual('');
    });

});