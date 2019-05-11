// react libraries
import React from 'react'
import Adapter from 'enzyme-adapter-react-16';

// third-party libraries
import { mount, configure } from 'enzyme'

import Button from './Button'

configure({adapter: new Adapter()});
test('message box', ()=> {})

// component

describe('Button Component', () => {
  it('should render default button', () => {
    const wrapper = mount(<Button name='Logout' classes='logout' />)
    const button = wrapper.find('button')

    expect(button.props().className).toBe('logout')
    expect(button.props().type).toBe('button')
  })

  it('should render a submit button', () => {
    const wrapper = mount(<Button name='Login' classes='login' submit />)
    const button = wrapper.find('button')

    expect(button.props().type).toBe('submit')
  })
})
