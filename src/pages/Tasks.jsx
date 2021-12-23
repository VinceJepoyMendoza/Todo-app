import React from 'react'

import Form from '../components/Tasks/Form'
import TaskList from '../components/Tasks/TasklList'

const Tasks = ({ tasks, isLoading, fetchAllTasks, url, alert, showAlert }) => {
  return (
    <>
      <Form
        fetchAllTasks={fetchAllTasks}
        tasks={tasks}
        url={url}
        alert={alert}
        showAlert={showAlert}
      />
      <TaskList
        tasks={tasks}
        isLoading={isLoading}
        fetchAllTasks={fetchAllTasks}
        url={url}
        showAlert={showAlert}
      />
    </>
  )
}

export default Tasks
