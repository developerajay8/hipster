import React from 'react'

export default function Container(props) {
  return (
    <div className='max-w-[1416px] mx-auto'>
      {props.children}
    </div>
  )
}
