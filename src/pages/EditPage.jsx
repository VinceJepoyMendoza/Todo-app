import axios from 'axios'
import React, { useRef, useState, useEffect, useCallback } from 'react'
import Categories from '../components/Edit/Categories'
import { useParams } from 'react-router-dom'
import Alert from '../components/Edit/Alert'

const EditPage = ({ fetchAllTasks, alert, showAlert, url }) => {
  const { id } = useParams()
  const newUrl = `${url}${id}`
  const taskName = useRef(null)
  const [currCategory, setCurrCategory] = useState('')
  const [isCompleted, setIsCompleted] = useState(false)

  // Fetching single task
  const fetchTask = useCallback(async () => {
    try {
      const task = await axios.get(newUrl)
      taskName.current.value = task.data.task.taskName
      setCurrCategory(task.data.task.category)
      setIsCompleted(task.data.task.completed)
    } catch (error) {
      console.log(error)
    }
  }, [newUrl])

  useEffect(() => {
    fetchTask()
  }, [fetchTask])

  // Update current task
  const updateTask = async (e) => {
    e.preventDefault()
    try {
      await axios.patch(newUrl, {
        taskName: taskName.current.value,
        category: currCategory,
        completed: isCompleted,
      })
      fetchAllTasks()
      showAlert(true, 'Task updated', 'success')
    } catch (error) {
      // Show invalid alert
      showAlert(true, 'Invalid Task name', 'danger')
    }
  }

  return (
    <section className='edit-task'>
      <form className='form-submit edit-task_form' onSubmit={updateTask}>
        {alert.show && <Alert {...alert} removeAlert={showAlert} />}
        <h3>Edit your task</h3>
        <div>
          <label>
            <input type='text' ref={taskName} placeholder='Enter Task Name' />
            <input type='submit' value='submit' className='btn' />
          </label>
        </div>
        <div className='edit-task_form__complete'>
          <label>
            <h3>Completed</h3>
            <input
              type='checkbox'
              checked={isCompleted}
              onChange={() => setIsCompleted(!isCompleted)}
            />
          </label>
        </div>
        <article>
          <h3>Select category: </h3>
          <div className='edit-task_form__categories'>
            <Categories
              setCurrCategory={setCurrCategory}
              currCategory={currCategory}
            />
          </div>
        </article>
      </form>
    </section>
  )
}

export default EditPage
