
import { Tabs } from './comp/Tabs'
import { useEffect, useState } from 'react'
import { TodoList } from './comp/TodoList'
import { TodoInput } from './comp/TodoInput'
import { Headerss } from './comp/Headerss'


function App() {
  const [todos, setTodos] = useState([
    // { input: 'Hello! Add your first todo!', complete: true },
    // { input: 'Get the groceries!', complete: false },
    // { input: 'Learn how to web design', complete: false },
    // { input: 'Say hi to gran gran', complete: true },
  ])

  const [selectedTab, setSelectedTab] = useState("Open")

  function handelAddTodo(newtodo) {
    const newTodoList = [...todos, { input: newtodo, complete: false }]
    setTodos(newTodoList)
    handelSaveTodo(newTodoList)
  }
  function handelSaveTodo() {
    localStorage.setItem('todos-app', JSON.stringify({todos}))
  }

  function handelCompleteTodo(id) {
    let newTodoList = [...todos]
    let CompletedTodo = todos[id]
    CompletedTodo['complete'] = true
    newTodoList[id] = CompletedTodo
    setTodos(newTodoList)
    handelSaveTodo(newTodoList)


  }
  function handelDeleteTodo(id) {
    let newTodoList = todos.filter((val, valIndex) => {
      return valIndex !== id
    })
    setTodos(newTodoList)
    handelSaveTodo(newTodoList)


  }
  useEffect(() => {
    if (!localStorage || !localStorage.getItem('todos-app')) { return }
    let db = JSON.parse(localStorage.getItem('todos-app'))
    setTodos(db.todos)
  }
    , [])

  return (
    <>
      <Headerss todos={todos} />
      <Tabs selectedTab={selectedTab} setSelectedTab={setSelectedTab} todos={todos} />
      <TodoList handelCompleteTodo={handelCompleteTodo} handelDeleteTodo={handelDeleteTodo} selectedTab={selectedTab} todos={todos} />
      <TodoInput handelAddTodo={handelAddTodo} />


    </>

  )
}

export default App