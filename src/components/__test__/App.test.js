import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';
//use absolute imports, setup in .env
import CommentBox from 'components/CommentBox';
import CommentList from 'components/CommentList';

let wrapped;

//runs before each test inside this file
beforeEach(() => {
    wrapped = shallow(<App />);
});

//verify that one and only one instance of CommentBox component is run
it('shows a comment box', () => {
    expect(wrapped.find(CommentBox).length).toEqual(1);
});

it('shows a comment list', () => {
    expect(wrapped.find(CommentList).length).toEqual(1);
});

