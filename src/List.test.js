import React from 'react';
import ReactDOM from 'react-dom';
import List from './List.js';
import renderer from 'react-test-renderer';

describe('List Test', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<List header="Test Header" cardIds={['a', 'b']} />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('renders the UI as expected', () => {
    const tree = renderer
      .create(<List header="Test Header" cardIds={['a', 'b']} />)
      .toJSON();
    expect(tree).toMatchSnapshot();  
  });
});