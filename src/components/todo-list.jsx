import React from 'react'
import { useState } from 'react'
import ListTodo from './list'

function TodoList() {
  const defaultList = [
    { name: 'Feed Cat' },
    { name: 'Cook BreakFast' },
    { name: 'Nap' },
  ]
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState(defaultList)

  const D = new Date().getDay()
  console.log({ D })
  const mapColors = {
    0: '#ff51519b',
    1: '#fffc519b',
    2: '#ff51cb9b',
    3: '#88ff519b',
    4: '#ff97519b',
    5: '#5177ff9b',
    6: '#7d51ff9b',
  }

  const styleColor = {
    backgroundColor: mapColors[D],
  }

  return (
    <>
      <div className="todo-box text-white" style={styleColor}>
        <div className="input-group input-todo">
          <input
            type="text"
            value={todo}
            className="form-control"
            placeholder="Add TODO list"
            aria-label="Username"
            aria-describedby="button-addon2"
            onChange={(e) => {
              setTodo(e.target.value)
            }}
          />
          <button
            className="btn btn-success"
            onClick={() => {
              if (todo) setTodoList((prev) => [...prev, { name: todo }])
              setTodo('')
            }}
            type="button"
            id="button-addon2">
            ADD
          </button>
        </div>
        <ListTodo todoList={todoList} setTodoList={setTodoList} />
      </div>
    </>
  )
}

export default TodoList
