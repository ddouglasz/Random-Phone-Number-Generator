// react libraries
import React from 'react'

const Button = ({
  classes,
  disabled,
  submit = false,
  name,
  onclick
}) => {
  return (
    <button
      className={classes}
      type={submit ? 'submit' : 'button'}
      disabled={disabled}
      onClick={onclick}
    >
      {name}
    </button>
  )
}

export default Button
