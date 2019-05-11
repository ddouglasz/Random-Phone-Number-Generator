// react libraries
import React from 'react'

const Input = ({
  type,
  placeholder,
  value,
  name,
  classes,
  onChange,
  isDisabled,
  textarea = false
}) => {
  return (
    <div className='control'>
      {
        !textarea
          ? <input
            type={type || 'text'}
            className={classes}
            defaultValue={value || ''}
            name={name}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={onChange}
            />
            : <textarea
            className={classes}
            value={value}
            name={name}
            placeholder={placeholder}
            disabled={isDisabled}
            onChange={onChange}
            />
      }
    </div>
  )
}

export default Input
