import { useState } from 'react'
import { useGetTodoByIdQuery, useGetTodosQuery } from './store/apis'

export const TodoApp = () => {
  const [todoId, setTodoId] = useState(1)
  // const { data: todos = [], isLoading } = useGetTodosQuery()
  const { data: todo = [], isLoading } = useGetTodoByIdQuery(todoId)

  const handleNextTodo = () => {
    setTodoId(todoId + 1)
  }
  const handlePRevTodo = () => {
    if (todoId == 1) return
    setTodoId(todoId - 1)
  }

  return (
    <>
      <h1>TodoApp - RTK Query</h1>
      <hr />
      {isLoading && <h3>is Loading...</h3>}
      <pre>re{JSON.stringify(todo)}</pre>
      {/* <ul>
        {todos.map((todo) => (
          <li key={todo?.id}>{todo?.title}</li>
        ))}
      </ul> */}
      <button onClick={() => handlePRevTodo()}>Prev Todo</button>
      <button onClick={() => handleNextTodo()}>Next Todo</button>
    </>
  )
}
