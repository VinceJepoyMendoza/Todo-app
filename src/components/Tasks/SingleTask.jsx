import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { BiEdit } from 'react-icons/bi'
import { AiOutlineDelete } from 'react-icons/ai'
import axios from 'axios'

const SingleTask = ({ task, fetchAllTasks, url, showAlert }) => {
  let { taskName, completed, category, updatedAt, _id } = task
  const [isCompleted, setIsCompleted] = useState(completed)
  const newDate = new Date(updatedAt)
  const day = newDate.getDate()
  const month = newDate.getMonth()
  const year = newDate.getFullYear()

  const deleteTask = async (id) => {
    try {
      const confirm = window.confirm(
        'Are you sure you want to delete this task?'
      )
      if (confirm) {
        // Delete a task
        await axios.delete(`${url}/${id}`)
        // Fetch all tasks
        fetchAllTasks()
        // Show success alert
        showAlert(true, 'Task deleted', 'success')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <li className='tasks-list_items_item'>
      <div className='tasks-list_items_item_info'>
        <h3>{taskName}</h3>
        <p>In {category}</p>
        <div>
          <span>completed: </span>
          <input
            type='checkbox'
            name='completed'
            id='isCompleted'
            checked={isCompleted}
            onChange={(e) => setIsCompleted(!isCompleted)}
            disabled
          />
        </div>
        <small>Last updated at: {`${day}/${month}/${year}`}</small>
      </div>
      <aside className='tasks-list_items_item_buttons'>
        <Link
          to={`/todo/edit/${_id}`}
          className='btn btn-edit'
          title='edit task?'
          replace
        >
          <BiEdit />
        </Link>
        <button
          type='button'
          className='btn btn-delete'
          title='delete task?'
          onClick={(e) => {
            e.preventDefault()
            deleteTask(_id)
          }}
        >
          <AiOutlineDelete />
        </button>
      </aside>
    </li>
  )
}

export default SingleTask
