import React from 'react'

function ListTodo({ todoList, setTodoList }) {
  const _todoList = todoList.map((t) => {
    const handle = () => {
      setTodoList(todoList.filter((e) => e.name !== t.name))
    }
    return (
      <div className="todo-listbox pt-3">
        <div className="input-group box-todo-list">
          <div className="todo">
            <p className="m-2">{t.name}</p>
          </div>
          <button className="btn btn-danger" onClick={handle}>
            x
          </button>
        </div>
      </div>
    )
  })

  return <>{_todoList}</>
}

export default ListTodo
