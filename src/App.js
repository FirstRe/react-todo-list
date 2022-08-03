// import logo from './logo.svg'
// import { PageHeader } from 'antd'
import TodoList from 'components/todo-list'
import React from 'react'
import './App.css'
// import { PageHeader } from 'antd'
function App() {
  return (
    <>
      <div className="bg-1">
        <div className="container text-center p-3">
          <h1 className="text-white">Todo List</h1>
          <TodoList />
        </div>
      </div>
    </>
  )
}

export default App
