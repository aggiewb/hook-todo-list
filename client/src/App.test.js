import { shallow, mount } from 'enzyme';
import App from './App';
import Input from './components/Input';
import Display from './components/Display';
import xIcon from './media/x-icon.png';

//https://jestjs.io/docs/en/expect
//shallow: https://enzymejs.github.io/enzyme/docs/api/shallow.html
//mount: https://enzymejs.github.io/enzyme/docs/api/mount.html

const EXPECTED_USER_INPUT = ['lorem', 'ipsum'];

it('App deeply renders as a smoke test', () => {
  mount(<App />);
});

it('renders App and child components, and initializes their props', () => {
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

it('renders a Display component with an unordered list set to a valid string with each list item having a key and id set to the valid string and contains an image of an X icon', () => {
  const display = shallow(<Display list={EXPECTED_USER_INPUT}/>);
  const listElements = display.find('li');

  listElements.forEach((item, i) => {
    const userInput = EXPECTED_USER_INPUT[i];
    const image = item.find('img');
    expect(item.prop('id')).toEqual(userInput);
    expect(item.text()).toEqual(userInput);
    expect(image.prop('src')).toEqual(xIcon);
  });
});

it('renders a Display component with a removeItem() and clearList() prop methods called', () => {
  const removeItem = jest.fn();
  const clearList = jest.fn();
  const display = shallow(<Display list={EXPECTED_USER_INPUT} removeItem={removeItem} clearList={clearList}/>);
  const listElements  = display.find('li');

  listElements.forEach(item => {
    const image = item.find('img');
    image.simulate('click');
    expect(removeItem).toHaveBeenCalled();
  });

  const button = display.find('button');
  button.simulate('click');
  expect(clearList).toHaveBeenCalled();
});