import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card.js';
import renderer from 'react-test-renderer';

describe('Card Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Card title="Title" content="Content"/>, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<Card title="Title" content="Content"/>)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});