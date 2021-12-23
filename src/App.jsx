import React, { useState, useEffect, useCallback } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom'
import axios from 'axios'

import Tasks from './pages/Tasks'
import EditPage from './pages/EditPage'
import Navbar from './components/Navbar'
import Footer from './components/Footer'

const App = () => {
  const url = 'https://todo-app-mendoza.herokuapp.com/todo/'
  const [tasks, setTasks] = useState({})
  const [isLoading, setIsLoading] = useState(false)
  const [alert, setAlert] = useState({
    show: false,
    msg: '',
    type: '',
  })

  const fetchAllTasks = useCallback(async () => {
    setIsLoading(true)
    try {
      const tasks = await axios.get(url)
      setTasks(tasks.data)
      setIsLoading(false)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    fetchAllTasks()
  }, [fetchAllTasks])

  const showAlert = (show = false, msg = '', type = '') => {
    setAlert({ show, msg, type })
  }

  return (
    <div className='main-body'>
      <Router>
        <Navbar />
        <main className='container'>
          <Routes>
            <Route path='/' element={<Navigate to='/todo' />} />
            <Route
              path='/todo'
              element={
                <Tasks
                  tasks={tasks}
                  isLoading={isLoading}
                  fetchAllTasks={fetchAllTasks}
                  url={url}
                  alert={alert}
                  showAlert={showAlert}
                />
              }
            />
            <Route
              path='/todo/edit/:id'
              element={
                <EditPage
                  categories={tasks.categories}
                  fetchAllTasks={fetchAllTasks}
                  alert={alert}
                  showAlert={showAlert}
                  url={url}
                />
              }
            />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  )
}

export default App
