import React, { useEffect } from 'react'

const Alert = ({ msg, type, removeAlert }) => {
  useEffect(() => {
    const timeout = setTimeout(() => {
      removeAlert()
    }, 2500)
    return () => clearTimeout(timeout)
  }, [removeAlert])

  return (
    <div className='alert'>
      <small className={`alert-${type}`}>{msg}</small>
    </div>
  )
}

export default Alert
