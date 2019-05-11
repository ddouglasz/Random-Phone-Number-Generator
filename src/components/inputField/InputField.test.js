// react libraries
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

// third-party libraries
import { mount, configure } from 'enzyme'

// component
import InputBox from './InputField'

configure({adapter: new Adapter()});
test('message box', ()=> {})

describe('Input Component', () => {
  it('should render input box correctly', () => {
    const wrapper = mount(<InputBox classes='input' type='text' />)
    const inputBox = wrapper.find('input')

    expect(inputBox.props().type).toBe('text')
    expect(inputBox.props().className).toBe('input')
  })

  it('should render rounded input box correctly', () => {
    const wrapper = mount(<InputBox classes='input rounded-input' type='password' />)
    const inputBox = wrapper.find('input')

    expect(inputBox.props().type).toBe('password')
    expect(inputBox.props().className).toBe('input rounded-input')
  })
})
