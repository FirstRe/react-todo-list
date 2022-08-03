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

  const mapColors = {
    1: '#ff51519b',
    2: '#fffc519b',
    3: '#ff51cb9b',
    4: '#88ff519b',
    5: '#ff97519b',
    6: '#5177ff9b',
    7: '#7d51ff9b',
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
