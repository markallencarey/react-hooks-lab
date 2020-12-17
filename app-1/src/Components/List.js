//List renders a mapped list of todos
//these todos are passed das props from App.js

import React, { useState } from 'react'
import Todo from './Todo'

const List = props => {
  
  return (
    <div>
      {props.list.map((item, index) => {
        return <Todo item={item} key={index} />
      })}
    </div>
  )
}

export default List