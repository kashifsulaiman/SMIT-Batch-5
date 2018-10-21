import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import renderer from 'react-test-renderer';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe('App', () => {
  const props = {
    list: [
      { title: '1', author: '1', num_comments: 1, points: 2, objectID: 'y' },
      { title: '2', author: '2', num_comments: 1, points: 2, objectID: 'z' },
    ]
  };
  
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App {...props}/>, div);
  });

  // test('has a valid snapshot', () => {
  //   const component = renderer.create(
  //     <App />
  //   );
  //   const tree = component.toJSON();
  //   expect(tree).toMatchSnapshot();
  // });    

  it('shows two items in list', () => {
    const element = shallow(<App { ...props } />);
    expect(element.find('.table-row').length).toBe(2);
  });

  it('checking the state', () => {
    const component = shallow(<App { ...props } />);
    expect(component.state('searchTerm')).toBe('angular')
    component.find('button').simulate('click');
    expect(component.state('searchTerm')).toBe('react')
  });
    
})

Enzyme.configure({ adapter: new Adapter() });