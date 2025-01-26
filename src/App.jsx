import { useState } from 'react'

export default function App() {
  const [todos, setTodos] = useState([])
  const [input, setInput] = useState('')

  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, { text: input, completed: false }])
      setInput('')
    }
  }

  const toggleTodo = (index) => {
    const newTodos = [...todos]
    newTodos[index].completed = !newTodos[index].completed
    setTodos(newTodos)
  }

  return (
    &lt;div className="min-h-screen bg-gray-100 py-8"&gt;
      &lt;div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow"&gt;
        &lt;h1 className="text-2xl font-bold mb-4"&gt;Todo App&lt;/h1&gt;
        &lt;div className="flex gap-2 mb-4"&gt;
          &lt;input
            type="text"
            value={input}
            onChange={(e) =&gt; setInput(e.target.value)}
            className="flex-1 p-2 border rounded"
            placeholder="Add a new todo"
          /&gt;
          &lt;button
            onClick={addTodo}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          &gt;
            Add
          &lt;/button&gt;
        &lt;/div&gt;
        &lt;ul&gt;
          {todos.map((todo, index) =&gt; (
            &lt;li
              key={index}
              className="flex items-center justify-between p-2 border-b"
            &gt;
              &lt;span
                className={`flex-1 ${
                  todo.completed ? 'line-through text-gray-400' : ''
                }`}
              &gt;
                {todo.text}
              &lt;/span&gt;
              &lt;button
                onClick={() =&gt; toggleTodo(index)}
                className="px-2 py-1 text-sm text-white bg-green-500 rounded hover:bg-green-600"
              &gt;
                {todo.completed ? 'Undo' : 'Complete'}
              &lt;/button&gt;
            &lt;/li&gt;
          ))}
        &lt;/ul&gt;
      &lt;/div&gt;
    &lt;/div&gt;
  )
}
