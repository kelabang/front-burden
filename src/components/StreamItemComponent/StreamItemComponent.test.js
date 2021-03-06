import React from 'react';
import ReactDOM from 'react-dom';
// import {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import StreamItemComponent from './StreamItemComponent.js';


it('renders without crashing', () => {
	const div = document.createElement('div');
	ReactDOM.render(<StreamItemComponent />, div);
});

const mockup = {
	'username': 'ma4m',
	'userfullname': 'imam tauhid',
	'useravatar': 'http://placehold.it/128x128',
	'value': 'hello world',
	'datetime': '1991-11-29 00:00:00'
};

test('StreamItemComponent displayed data', () => {
	const component = renderer.create(
		<StreamItemComponent username={mockup.username} userfullname={mockup.userfullname} useravatar={mockup.useravatar} value={mockup.value} datetime={mockup.datetime} />
	);
	let tree = component.toJSON();
	expect(tree).toMatchSnapshot();
});
