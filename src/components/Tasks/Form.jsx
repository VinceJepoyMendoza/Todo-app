import React, { useState, useRef } from 'react'
import axios from 'axios'

import Categories from '../Edit/Categories'
import Alert from '../Edit/Alert'

const Form = ({ fetchAllTasks, isLoading, url, alert, showAlert }) => {
  const [taskCategory, setCategory] = useState('school')
  const taskName = useRef(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      if (taskName.current.value) {
        // Creating new task
        await axios.post(url, {
          taskName: taskName.current.value,
          category: taskCategory,
        })
        // Fetching all tasks
        fetchAllTasks()
        taskName.current.value = ''
        // Show success message
        showAlert(true, 'Task added', 'success')
      } else {
        // Show danger message
        showAlert(true, "Task's name must not be empty", 'danger')
      }
    } catch (error) {
      console.log(error)
    }
  }

  return isLoading ? (
    <h3>Loading...</h3>
  ) : (
    <form className='form-submit' onSubmit={handleSubmit}>
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}
      <h3>Manage your tasks quick & easy</h3>
      <div>
        <label>
          <input type='text' placeholder='e.g. clean room' ref={taskName} />
          <input type='submit' value='submit' className='btn btn-clear' />
        </label>
      </div>
      <div className='form-submit_categories'>
        <Categories currCategory={taskCategory} setCurrCategory={setCategory} />
      </div>
    </form>
  )
}

export default Form
