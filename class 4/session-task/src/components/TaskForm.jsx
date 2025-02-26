import { useState } from 'react'

export default function TaskForm({ taskToEdit, onSave }) {
  const [task, setTask] = useState(taskToEdit || {
    title: '',
    description: '',
    dueDate: '',
    completed: false
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    onSave(task)
    setTask({
      title: '',
      description: '',
      dueDate: '',
      completed: false
    })
  }

  return (
    <form onSubmit={handleSubmit} className="mb-6 bg-white p-4 rounded-lg shadow">
      <div className="grid gap-4 mb-4">
        <input
          type="text"
          placeholder="Title"
          value={task.title}
          onChange={(e) => setTask({ ...task, title: e.target.value })}
          className="p-2 border rounded"
          required
        />
        <textarea
          placeholder="Description"
          value={task.description}
          onChange={(e) => setTask({ ...task, description: e.target.value })}
          className="p-2 border rounded"
        />
        <input
          type="date"
          value={task.dueDate}
          onChange={(e) => setTask({ ...task, dueDate: e.target.value })}
          className="p-2 border rounded"
        />
        <label className="flex items-center space-x-2">
          <input
            type="checkbox"
            checked={task.completed}
            onChange={(e) => setTask({ ...task, completed: e.target.checked })}
            className="form-checkbox"
          />
          <span>Completed</span>
        </label>
      </div>
      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
      >
        {taskToEdit ? 'Update Task' : 'Add Task'}
      </button>
    </form>
  )
}