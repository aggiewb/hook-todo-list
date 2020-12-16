import { shallow, mount } from 'enzyme';
import App from './App';
import Input from './components/Input';
import Display from './components/Display';

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

it('renders an Input component with an input value set to a valid string', () => {
  const EXPECTED_USER_INPUT = 'lorem ipsum';
  const input = shallow(<Input text={EXPECTED_USER_INPUT} />);
  const inputElement = input.find(`input[type='text']`);

  expect(inputElement.prop('value')).toEqual(EXPECTED_USER_INPUT);
});

it('renders an Input component with submit() and change() prop methods called', () => {
  const change = jest.fn();
  const submit = jest.fn();
  const input = shallow(<Input change={change} submit={submit} />);
  const inputElement = input.find(`input[type='text']`);
  const form = input.find(`form`);

  inputElement.simulate('change');
  expect(change).toHaveBeenCalled();

  form.simulate('submit');
  expect(submit).toHaveBeenCalled();
});