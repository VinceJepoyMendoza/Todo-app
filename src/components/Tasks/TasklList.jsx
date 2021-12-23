import axios from 'axios'
import React from 'react'
import SingleTask from './SingleTask'

const TasklList = ({ tasks, fetchAllTasks, url, alert, showAlert }) => {
  const clearTasks = async () => {
    try {
      const confirm = window.confirm(
        `Are you sure you want to clear all tasks?`
      )
      if (confirm) {
        // Clear all tasks
        await axios.delete(url)
        fetchAllTasks()
        showAlert(true, 'Tasks cleared', 'success')
      }
    } catch (error) {
      // Error
      showAlert(true, 'Something went wron', 'daner')
    }
  }

  return (
    <section className='tasks-list'>
      {!tasks.count ? (
        <h3 className='loading'>No task at the moment</h3>
      ) : (
        <header>
          <h3 className='task-count'>{`Your current task(s): ${tasks.count}`}</h3>
          <button type='button' className='btn btn-clear' onClick={clearTasks}>
            Clear all tasks
          </button>
        </header>
      )}
      <ul className='tasks-list_items'>
        {tasks.tasks?.map((task, index) => {
          return (
            <SingleTask
              task={task}
              key={index}
              fetchAllTasks={fetchAllTasks}
              url={url}
              alert={alert}
              showAlert={showAlert}
            />
          )
        })}
      </ul>
    </section>
  )
}

export default TasklList
