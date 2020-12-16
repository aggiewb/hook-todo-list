import { shallow, mount } from 'enzyme';
import App from './App';

//https://jestjs.io/docs/en/expect
//shallow: https://enzymejs.github.io/enzyme/docs/api/shallow.html
//mount: https://enzymejs.github.io/enzyme/docs/api/mount.html

it('App deeply renders as a smoke test', () => {
  mount(<App />);
});

it('renders App class child components, and initializes their props', () => {
  const app = shallow(<App />);

  const input = app.find('Input');
  expect(input.exists()).toEqual(true);
  expect(input.prop('text')).toEqual('');
  expect(input.prop('change')).toBeDefined();
  expect(input.prop('submit')).toBeDefined();

  const display = app.find('Display');
  expect(display.exists()).toEqual(true);
  expect(display.prop('list')).toEqual([]);
  expect(display.prop('removeItem')).toBeDefined();
  expect(display.prop('clearList')).toBeDefined();
});