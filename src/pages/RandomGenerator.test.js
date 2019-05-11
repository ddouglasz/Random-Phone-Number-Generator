
import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16';

import RandomGenerator from '../pages/RandomGenerator'

configure({adapter: new Adapter()});
test('message box', ()=> {})

const setup = () => {
  const props = {
    onInputChange: jest.fn(),
  }
  return shallow(<RandomGenerator {...props} />)
}

const event = {
  preventDefault: jest.fn(),
  target: {
    name: '',
    value: ''
  }
};

describe('RandomGenerator', () => {
  it('should render page components successfully', () => {
    const wrapper = setup()
    expect(wrapper.find('div').length).toBe(6)
    expect(wrapper.find('label').length).toBe(3)
    expect(wrapper.find('select').length).toBe(1)
    expect(wrapper.find('table').length).toBe(1)
    expect(wrapper.find('Button').length).toBe(2)
    expect(wrapper.find('Input').length).toBe(1)
  })

  it('should call onSortChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onSortChange = jest.spyOn(wrapper.instance(), 'onSortChange');
    action.onSortChange(event);
    expect(onSortChange).toBeCalled();
  });
  it('should call onInputChange function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onInputChange = jest.spyOn(wrapper.instance(), 'onInputChange');
    action.onInputChange(event);
    expect(onInputChange).toBeCalled();
  });
  it('should call onGenerateRandomNumbersClick function', () => {
    const wrapper = setup();
    const action = wrapper.instance();
    const onGenerateRandomNumbersClick = jest.spyOn(wrapper.instance(), 'onGenerateRandomNumbersClick');
    action.onGenerateRandomNumbersClick(event);
    expect(onGenerateRandomNumbersClick).toBeCalled();
  });
  it('should call onclickDownload function', () => {
    const wrapper = setup();
    window.URL.createObjectURL = jest.fn();
    window.URL.revokeObjectURL = jest.fn();
    const action = wrapper.instance();
    const onclickDownload = jest.spyOn(wrapper.instance(), 'onclickDownload');
    action.onclickDownload();
    expect(onclickDownload).toBeCalled();
  });
})

