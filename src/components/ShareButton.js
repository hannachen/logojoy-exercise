import React from 'react'
import glamorous from 'glamorous'

const Button = glamorous.div({
  border: '1px solid rgb(255, 255, 255)',
  borderRadius: '',
})

export default function ShareButton ({ over = false }) {
  return (
    <div className='actions'>
    </div>
  )
}
